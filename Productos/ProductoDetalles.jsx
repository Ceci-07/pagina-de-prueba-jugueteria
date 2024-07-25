import React, { useContext, useState, useEffect } from 'react';
import { ProductoItem } from "./ProductoItem";
import { DataContext } from '../../Context/DataProvider';
import { useParams } from 'react-router-dom';
import './vista.css';


export const ProductoDetalles = () => {
   const value = useContext(DataContext)
   const [productos] = value.productos;
   const addCarrito = value.addCarrito;
   const [detalle, setDetalle] = useState([]);
   const [url, setUrl] = useState(0);
   const [images, setImages] = useState('');
   const params = useParams();
   let item = 0;


   useEffect(() =>{
      productos.forEach(producto => {
         item = 0;
         if (producto.id === parseInt(params.id)) {
            setDetalle(producto)
            setUrl(0)
         }
      })
   },[params.id, productos])

   useEffect(() => {
      const values = `${detalle.img1} ${url} ${detalle.im2}`

      setImages(values);
   },[url,params.id])

   const handleInput = e => {
      const number = e.target.value.toString().padStart(2, '01');
      setUrl(number)
      console.log(number);
   }

   if (detalle.length < 1) return null; 

   
    
   return(
    <>
    {
      <div className='details'>
         <h2>{detalle.title}</h2>
         <div className='grid'>
            <div className='image-container'>
            {
            url ? <img src={images} alt={detalle.title} /> : <img src={detalle.image} alt={detalle.title} />
            }

         <div className='price-button-container'>
             <p className='price'>${detalle.price}</p>
             <button onClick={() => addCarrito(detalle.id)}>Añadir al carrito</button>

         </div>
            </div>
         </div>
       
         <div className='description'>
            <p><b>Description:</b>{detalle.description}</p>
         </div>
      </div>
    }

    <h2 className='related'>Productos Relacionados</h2>
    
    <div className='productos'>{
        productos.map((producto) => {
         if ((item < 6) && (detalle.category === producto.category
         )) {
            item++;
         }
            return <ProductoItem
            key={producto.id}
            id={producto.id}
            title={producto.title}
            image={producto.image}
            category={producto.category}
            price={producto.price}
            description={producto.description}
         />
        })
        }
        
     </div>
    </>
   )
}