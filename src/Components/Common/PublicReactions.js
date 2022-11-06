import React from 'react';
import PublicReaction from './PublicReaction';
import reactionPic1 from '../../assets/images/people1.png';
import reactionPic2 from '../../assets/images/people2.png';
import reactionPic3 from '../../assets/images/people3.png';
const PublicReactions = () => {
    const publicReactionData = [
        {
            id:1,
            name:'Mr. Williams John',
            location:'Austin, Texas',
            picture:reactionPic1,
            description:'Seat Belt is awesome i can buy from again when we need.'
        },
        {
            id:2,
            name:'Mr. Mary Jones',
            location:'Dallas, Texas',
            picture:reactionPic2,
            description:'Good job and product. Delivery time and management and product is awesome. come back again'
        },
        {
            id:3,
            name:'Mr. Mary May',
            location:'Chicago, Illionis',
            picture:reactionPic3,
            description:'Seat Belt is awesome i can buy from again when we need.'
        }
    ]
    return (
        <div className='mx-16'>
            
             <h2 className='text-4xl text-primary my-16' > Public Reaction </h2>
            <div class="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3" >
                {
                    publicReactionData.map( reaction => <PublicReaction 
                    key={reaction.id}
                    reaction = {reaction}
                    /> )
                }
            </div>
        </div>
    );
};

export default PublicReactions;