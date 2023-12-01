import React, {useState, useEffect} from 'react';
import './Project.css';

function App() {

   var pos = document.documentElement;
   pos.addEventListener('mousemove', e =>{
       pos.style.setProperty('--x', e.clientX + 'px')
       pos.style.setProperty('--y', e.clientY + 'px')
   })

    return (
        <div>
            <section>
                <h2>Light</h2>
            </section>
            <div class="light"></div>
        </div>
    );
};

export default App;
