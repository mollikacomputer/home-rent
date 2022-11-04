import React from 'react';
import Service from '../Service';

const Services = () => {
    const servicesData = [
        {
            id:1,
            name:'Service Name 1',
            description:'Service Desctiption here'
        },
        {
            id:2,
            name:'Service Name 2',
            description:'Service Desctiption here 2'
        },
        {
            id:3,
            name:'Service Name 3',
            description:'Service Desctiption here3'
        }
    ]
    console.log(servicesData);
    return (
        <div className='mt-16' >
             <h2 className='text-4xl text-primary' > Our Services </h2>
             <h2 className='text-2xl' > Total Service {servicesData.length} </h2>
            <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" >
                {
                    servicesData.map( service => <Service 
                    key={service.id}
                    service = {service}
                    /> )
                }
            </div>
        </div>
    );
};

export default Services;