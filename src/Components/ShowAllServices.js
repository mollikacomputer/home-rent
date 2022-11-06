import React from 'react';
import ShowAllService from './ShowAllService';
import HomeRentalPic from '../assets/HomeForSale.png';
import PackingToMove from '../assets/packingToMove.jpg';
import HomeForSale from '../assets/HomeForSale.png';
const ShowAllServices = () => {
    const showAllServiceData = [
        {
            id:1,
            picture:HomeRentalPic,
            name:'How to Find a Home for Rent: Best Home Rental Sites and More',
            description:'If you want to rent your next home, you may wonder how to find houses for rent. It seems that there’s an endless number of rental listing sites for apartments, but homes can be a bit tougher to find. Fortunately, there are several sites that aggregate listings, allowing you to search for the rental home of your dreams. Here’s an overview of the best home rental sites for 2022 Etshomerent.com is a well-rounded online option that really caters to both the renter and the owner. The site advertises that it is “renting made simple” and we think it really is. Search the area you want to live in and then compare the available apartments, houses, condos, and townhomes with in-depth filters like Lifestyle, Move-in Date, Ratings, Square Footage, and more.'
        },
        {
            id:2,
            picture:PackingToMove,
            name:'A List of Alternative, Green Packing to move Materials You Can Use',
            description:'Whether you are about to move from one home to another or sending packages to family and friends, finding eco-friendly packaging materials is an important part of living sustainably. While traditional cardboard boxes can be recycled, manufacturing and recycling them consumes a fair bit of energy. In other words, this traditional packing method isn’t as sustainable as people think. However, there are a plethora of options on the market for eco-friendly moving supplies. Whether you prefer reusable bins to minimize waste or want biodegradable options that can be composted, here are eight of the best green options out there. *Note: While we provide links for most products mentioned, some may not ship to all 50 states.'
        },
        {
            id:3,
            picture:HomeForSale,
            name:'Get pre-qualified for a loan ',
            description:'This home has gorgeous curb appeal! With a Hardi Plank & stone exterior it is built to last! Open floor plan flows between family room & kitchen! Fireplace for those cool, crisp fall nights! Kitchen has granite, tile backsplash & a center island. Elegant Master Suite with walk-in closet, garden tub & separate shower. Extra large, fenced in backyard with 6 ft privacy fence. 2 Car garage and gutters in front & back. Great family friendly community! Close to Hwy I85 and minutes from everything!, Two story home. Formal Dining Room. Great room with fireplace. Open layout. Walk in closets, garden tub. 4 br, 3 1/2 bath  Appointment Required.'
        }
    ]
    return (
        <div className='bg-base-200 py-16'>
             <h2 className='text-3xl text-primary' > Our Services </h2>
             <h2 className='text-2xl' > Total Service {showAllServiceData.length} </h2>
            <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-4" >
                {
                    showAllServiceData.map( 
                    service => <ShowAllService 
                    key={service.id}
                    service = {service}
                    />
                    )
                }              
            </div>
        </div>
    );
};

export default ShowAllServices;