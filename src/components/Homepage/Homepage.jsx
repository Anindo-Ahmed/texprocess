import React from 'react';

import About from './About';
import Banner from './Banner';
import News from './News';

const Homepage = () => {
    return (
        <div className='h-screen'>
            <Banner/>
            <About/>
            <News/>
        </div>
    );
};

export default Homepage;