import React from 'react';

import About from './About';
import Banner from './Banner';

const Homepage = () => {
    return (
        <div className='h-screen'>
            <Banner/>
            <About/>
        </div>
    );
};

export default Homepage;