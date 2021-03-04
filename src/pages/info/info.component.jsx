import React from 'react';

import {Link} from 'react-router-dom';

import './info.styles.scss';

const Info = () => (
    <div className='info'>
        <div className='imagen'>
            <img src="https://textilindo.net/wp-content/uploads/2014/06/Textimola-600x362.jpg"
            alt="textilindo"
            />
            <div className="contenido">
                <div className='texto'>
                <h1>¿QUIÉNES SOMOS?</h1>
                <p>Textilindo es una tienda fundada en el año 1977 por Don Eduardo Humberto Cattán (Q.E.P.D) con la ilusión de cumplir su sueño, 
                    el ofrecer una tienda de textiles de gran variedad. No solo  ofrecer telas a módicos precios y de alta calidad que se ve reflejada en su mercancía 
                    sino adicional poder ofrecer una calidad de atención al cliente que este al mas alto de los estándares del mercado. 
                    Pero su sueño iba más allá e incluye a su negocio todos los complementos que necesita todos nuestros clientes para llevar a cabo sus proyectos.</p>
                </div>
            </div>
        </div>
    </div>
);

export default Info;