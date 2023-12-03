import React, {} from 'react';
import './allCSS.css';
import Persona from "./Persona";
import Project from "./Project";

function App() {

   var pos = document.documentElement;
   pos.addEventListener('mousemove', e =>{
       pos.style.setProperty('x', e.clientX + 'px')
       pos.style.setProperty('y', e.clientY + 'px')
   })

    return (
        <div class="max-height">
            {/*}
            <div class="effect"></div>
            */}
            <div class="left width-50 marker ">
                <Persona/>
            </div>
            <div class="right width-50 marker ">
                <Project/>
            </div>
        </div>

    );
};

export default App;
