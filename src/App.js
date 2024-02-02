import React from 'react';
// components
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import About from './components/About/About';
import Experience from './components/Experience/Experience';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import Testemonial from './components/Testemonial/Testemonial';
import Footer from './components/Footer/Footer';
import Services from './components/Services/Services';

const App = () => {
    return (
        <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
            <Header />
            <Nav />
            <About />
            <Experience />
            <Services />
            <Portfolio />
            <Contact />
            <Testemonial />
            <Footer />
            <div className='h-[4000px]'></div>
        </div>
    );
};

export default App;
