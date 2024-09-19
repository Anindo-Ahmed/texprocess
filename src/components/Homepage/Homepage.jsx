import React from 'react';

import About from './About';
import Banner from './Banner';
import News from './News';
import Clients from './Clients';

const Homepage = () => {
    return (
        <div className='h-screen'>
            <Banner/>
            <About/>
            <News/>
            <Clients/>
        </div>
    );
};

export default Homepage;