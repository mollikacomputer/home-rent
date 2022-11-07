import React, { useEffect, useState } from 'react';
import Footer from '../Common/Footer';
import PublicReactions from '../Common/PublicReactions';
import Services from '../Common/Services';
import Carousel from './Carousel';
import { ClipLoader } from 'react-spinners';

const Home = () => {
    const [loading, setLoading] = useState(false);
    useEffect(()=>{
        setLoading(true)
        setTimeout(()=>{
            setLoading(false)
        },300)
    }, [])
    return (
        <div>
            {
                loading ?
                <ClipLoader color={'#D0021B'} loading={loading} size={150} />
                :
                <div>
                <Carousel/>
                <Services/>
                <PublicReactions/>
                <Footer/>
            </div>
            }
            
        </div>
    );
};

export default Home;