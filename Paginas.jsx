import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Portada from "./Portada/Portada";
import ProductosMain from './Productos/Productos';
import { ProductoDetalles } from './Productos/ProductoDetalles';
import { PregFrec } from './PreguntasFrecuentes/PregFrec';
import { Contacto } from './Contacto/Contacto';
import { ComoComprar } from './ComoComprar/ComoComprar';



export const Paginas = () => {
    return(
        <section>
            <Routes>
                <Route path= '/' element={<Portada />} />
                <Route path= '/productos' element={<ProductosMain />} />
                <Route path='/producto/:id' element={<ProductoDetalles />}/>
                <Route />
                <Route path='/preguntas-frecuentes' element={<PregFrec />} />
                <Route path='/contacto' element={<Contacto />} />
                <Route path='/como-comprar' element={<ComoComprar />} />
            </Routes>
        </section>
    )
}