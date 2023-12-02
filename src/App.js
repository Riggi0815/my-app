import React, {} from 'react';
import './Project.css';

function App() {

   var pos = document.documentElement;
   pos.addEventListener('mousemove', e =>{
       pos.style.setProperty('x', e.clientX + 'px')
       pos.style.setProperty('y', e.clientY + 'px')
   })

    return (
        <div class="app">
            {/*}
            <div class="effect"></div>
            */}
            <div class="Persona">
                <h2>Über mich!</h2>
            </div>
        </div>

    );
};

export default App;
