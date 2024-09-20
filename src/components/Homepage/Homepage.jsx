import React from 'react';

import About from './About';
import Banner from './Banner';
import News from './News';
import Clients from './Clients';
import Newsletter from './Newsletter';

const Homepage = () => {
    return (
        <div className='h-screen'>
            <Banner/>
            <About/>
            <News/>
            <Clients/>
            <Newsletter/>
        </div>
    );
};

export default Homepage;