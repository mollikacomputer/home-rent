import React from 'react';
import NotFound from '../assets/PageNotFound.jpg'
const PageNotFound = () => {
    return (
        <div className='grid justify-items-center content-center'>
            <img className='object-contain h-screen' src={NotFound} alt="pageNotFoundImg" />
        </div>
    );
};

export default PageNotFound;