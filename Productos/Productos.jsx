import React, { useContext } from 'react';
import { ProductoItem } from './ProductoItem';
import { DataContext } from '../../Context/DataProvider';


const ProductosMain = () => {
    const value = useContext(DataContext)
    const [productos] = value.productos


    return(
        <>
         <div className='main-products'>{
           productos.map((producto) => (
            <ProductoItem
               key={producto.id}
               id={producto.id}
               title={producto.title}
               image={producto.image}
               category={producto.category}
               price={producto.price}
               description={producto.description}
            />
            ))
            }
        </div>
        </>
       
    );
}

export default ProductosMain;














// import React, { useContext } from "react";
// import { ProductoItem } from '../Productos/ProductoItem';
// import { DataContext } from '../../Context/DataProvider'


// export const ProductosLista = () => {
//     const value = useContext(DataContext)
//     const [productos] = value.productos


//     return(
//         <>
//         <h1 className='title'>Productos</h1>
//         <div className='productos'>
//             {
//                 productos.map((producto) => {
//                     <ProductoItem
//                     key={producto.id}
//                     id={producto.id}
//                     title={producto.title}
//                     image={producto.image}
//                     category={producto.category}
//                     price={producto.price}

//                     />
//                 })
//             }
//         </div>
//         </>
//     )
// }