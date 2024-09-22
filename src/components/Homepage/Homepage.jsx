import React from 'react';
import About from './About';
import Banner from './Banner';
import News from './News';
import Clients from './Clients';
import Newsletter from './Newsletter';
import Testimonial from './Testimonial';
import Contact from './Contact';


const Homepage = () => {
    return (
        <div className='h-screen'>
            <Banner/>
            <About/>
            <News/>
            <Clients/>
            <Newsletter/>
            <Testimonial/>
            <Contact/>

        </div>
    );
};

export default Homepage;