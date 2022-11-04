import React from 'react';
import PublicReactions from '../Common/PublicReactions';
import Services from '../Common/Services';

import Carousel from './Carousel';

const Home = () => {
    return (
        <div>
            <Carousel/>
            <Services/>
            <PublicReactions/>
        </div>
    );
};

export default Home;