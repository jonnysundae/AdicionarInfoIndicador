import React, { useState } from 'react';
import './GerarImagem.css';
import ImprimirImagem from '../imprimirimagem/ImprimirImagem';

export default function GerarImagem() {

    const [ValorX, NovoValorX] = useState(0);
    function MudarValorX(event){
        NovoValorX(event.target.value);
    }

    const [ValorY, NovoValorY] = useState(0);
    function MudarValorY(event){
        NovoValorY(event.target.value);
    }

    const [ValorTexto, NovoValorTexto] = useState(0);
    function MudarTexto(event){
        NovoValorTexto(event.target.value);
    }

    return(
        <main>
            <section>
                <h1>Valores</h1>
                <div>
                    <input onChange={MudarTexto} type="text" />
                </div>
                <div>
                    <input onChange={MudarValorX} type="range" placeholder="250" id="x" name="x" min="0" max="480" />
                    <label htmlFor="volume">x= {ValorX}</label>
                </div>   
                <div>
                    <input onChange={MudarValorY} type="range" placeholder="250" id="y" name="y" min="20" max="500" />
                    <label htmlFor="volume">y= {ValorY}</label>
                </div> 
            </section>
            <section>        
                <ImprimirImagem text={ValorTexto} x={ValorX} y={ValorY}/>
            </section>
        </main>
    ) ;
}
  
