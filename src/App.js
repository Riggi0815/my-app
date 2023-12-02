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
            <div class="persona">
                <h2>Über mich!</h2>
            </div>
            <div class="projects">
                <h2>Meine Projekte</h2>
            </div>
        </div>

    );
};

export default App;
