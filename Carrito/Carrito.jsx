import React, { useContext } from 'react';
import { DataContext } from '../../Context/DataProvider';



export const Carrito = () => {
    const value = useContext(DataContext);
    const [menu, setMenu] = value.menu;
    const [carrito, setCarrito] = value.carrito;
    const [total] = value.total;
    
    
    const tooglefalse = () => {
        setMenu(false);
       
    }
     
    const show1 = menu ? 'carritos show' : 'carritos';
    const show2 = menu ? 'carrito show' : 'carrito';

    const resta = (id) => {
        const updatedCarrito = carrito.map(item => {
            if (item.id === id) {
                return{
                    ...item,
                    cantidad:item.cantidad === 1 ? 1 : item.cantidad - 1
                }
            }
            return item;
        })
        setCarrito(updatedCarrito)
    }

    const suma = id => {
        const updatedCarrito = carrito.map(item => {
            if ((item.id === id) && (item.cantidad < item.amount) ) {
               return{
                 ...item,
                
                 cantidad:item.cantidad + 1
               }
            }
            return item;
        })
        setCarrito(updatedCarrito)
    }

    const removeProduct = (id) => {
        if (window.confirm('¿Seguro quiere suspender el producto?')) {
          const updatedCarrito = carrito.filter(item => item.id !== id);
           setCarrito(updatedCarrito)
        }
    }

    const displayTotal = isNaN(total) ? 0 : total;


    return(
        <div className={show1}>
            <div className={show2}>
                <div className='closed-cart' onClick={tooglefalse}>
                   <box-icon name='x'></box-icon>
                </div>
                <h2>Su carrito</h2>

                <div className='center-cart'>
                    {
                        carrito.length === 0 ? <h2 style={{
                            textAlign:'center', fontSize:'3rem'
                        }}>Carrito vacio</h2> : <>
                        {
                            carrito.map((producto) => (
                <div className='item-cart' key={producto.id}>
                     <img src={producto.image} alt='producto e image' />

                <div>
                    <h3>{producto.title}</h3>
                    <p className='price'>${producto.price}</p>
                  </div>

                  <div>
                    <box-icon name='up-arrow' type='solid' onClick={() =>suma(producto.id)}>
                    </box-icon>
                    <p className='amount'>{producto.cantidad}</p>
                    <box-icon name='down-arrow' type='solid' onClick={() =>resta(producto.id)}>
                    </box-icon>
                  </div>

                  <div className='remove-item' onClick={() =>removeProduct(producto.id)}>
                    <box-icon name='trash'></box-icon>
                  </div>
                  </div>
                    ))
                 }
                    </>
                    }
                </div>

                <div className='cart-footer'>
                   <h3>Total: ${displayTotal.toFixed(2)}</h3>
                   <button className='btn'>Payment</button>
                </div>
            </div>
        </div>
    )

}