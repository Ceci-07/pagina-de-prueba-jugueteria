import React from 'react';
import './pregfrec.css'


export const PregFrec = () => {
    return(
        <>
        <div className='container-preg'>
            <div className='preg-frec'>
               <h2 className='preg'>¿Que formas de pago puedo aprovechar para realizar mi compra?</h2>
               <br />
               <p>Podés abonar tus compras con <b>Mercado Pago</b> y <b>transferencia bancaria</b>.
                Para esta última opción te van aparecer los datos cuando elijas este medio de pago y realices tu compra. </p>
                <br />
               
                <h2 className='preg'>¿Cuál es el costo y método de envío?</h2>
                <br />
                
                <p>Moto express dentro de <b>Rada Tilly, Comodoro Rivadavia(zona Sur, zona Norte y Centro)</b>. El pedido te llega dentro de las 48hs hábiles y se paga en efectivo al recibir el producto un valor de $2.500
                <br />
                <br />
                
                El horario de entrega es de 10 a 19hs. No te podemos dar un horario exacto.
                <br />
                <br />
                Por correo a todo el país tiene un valor entre $10.000 y $15.000 aprox al interior.
                <br />
                <br />
                Retiro en la sucursal sin cargo, cuando confirmemos la compra coordinamos la entrega.
                </p>
                <br />
                <br />
                <h2 className='preg'>¿Cuánto tarda en llegar el pedido?</h2>
                <br />
                
                <p>Si elegiste que te lo enviemos por correo tiene una demora de 7 a días <b>hábiles</b></p>
                <br />
                
                <p>Si te lo enviamos por moto te va a estar llegando dentro de las 48 horas <b>hábiles</b></p>
            </div>  
        </div>
       
        
        <div className='footer-preg'>
            <p className='contactanos'>CONTACTANOS</p>
            <br />
            <div className='contact-item'>
              <box-icon name='globe' className='globe'></box-icon>
              <p>www.jugueteríaemma.com</p>
            </div>
            <br />
            <p className='redes-sociales'>REDES SOCIALES</p>
            <br />
            <div className='contact-item'>
               <box-icon type='logo' name='instagram-alt' className='instagram'></box-icon>
               <p>@jugueteria__emma2022</p>
            </div>
        
            <div className='contact-item'>
              <box-icon type='logo' name='facebook' className='facebook'></box-icon>
              <p>JugueteriaEmma</p>
            </div>

            <div className='contact-item'>
              <box-icon type='logo' name='whatsapp' className='whatsapp'></box-icon>
              <p>(+297-5284520)</p>
            </div>
        </div>
        </>
         
    ) ;
}