import React from 'react';
import Footer from '../Common/Footer';
import PublicReactions from '../Common/PublicReactions';
import Services from '../Common/Services';

import Carousel from './Carousel';

const Home = () => {
    return (
        <div>
            <Carousel/>
            <Services/>
            <PublicReactions/>
            <Footer/>
        </div>
    );
};

export default Home;