import React, { useEffect, useRef, useState } from 'react';
import { datados } from '../../DataDos';


const Portada = () => {
    const listResf = useRef();
    const [currenIndex, setCurrenIndex] = useState(0)

    useEffect(() => {
      const listNode = listResf.current;
      const imgNode = listNode.querySelectorAll('li > img')[currenIndex]

      if (imgNode) {
        imgNode.scrollIntoView({
            behavior: 'smooth'
        });
      }

    }, [currenIndex])

    const scrollToImage = (direction) => {
        if (direction == 'prev') {
            setCurrenIndex(curr => {
                const isFirstSlide = currenIndex === 0;
                return isFirstSlide ? 0 : curr - 1
            })
        }else {
            const isLastSlide = currenIndex === datados.length -1;
            if (!isLastSlide) {
                setCurrenIndex(curr => curr + 1);
            }
        }
    }

    const goToSlide = (slideIndex) => { 
        setCurrenIndex(slideIndex);
    }

    return(
        <div className='main-container'>
            <div className='slider-container'>
                <div className='leftArrow' onClick={() => scrollToImage('prev')}>&#10092;</div>
                <div className='rightArrow' onClick={() => scrollToImage('next')}>&#10093;</div>
                <div className='container-images'>
                    <ul ref={listResf}>
                      {
                        datados.map((item) => {
                          return  <li key={item.id}>
                            {<img src={item.imgUrl} /> }
                         </li>
                        })
                      }
                    </ul>
             </div>
             <div className='dots-container'>
                {
                    datados.map((_, idx) => (
                        <div 
                          key={idx} 
                          className={`dot-container-item ${idx === currenIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(idx)}>
                           &#9865; 
                        </div>
                    ))
                }
             </div>
            </div>
        </div>
    );
}

export default Portada;