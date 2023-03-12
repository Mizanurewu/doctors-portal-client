import React from 'react';
import clock from '../../../assets/icons/clock.svg';
import marker from '../../../assets/icons/marker.svg';
import phone from '../../../assets/icons/phone.svg';
import InfoCard from './InfoCard';

const InfoCards = () => {
    const cardData=[{
        id:1,
        name:'Opening Hours',
        description:'Opening hour is 9 am to 6 pm',
        icon:clock,
        bgClass:'bg-gradient-to-r from-primary to-secondary'
    },
    {
        id:2,
        name:'Visit Our Location',
        description:'Merul badda, Dhaka-1212',
        icon:marker,
        bgClass:'bg-accent'
    },
    {
        id:1,
        name:'Contact us now',
        description:'+008 1521-424233',
        icon:phone,
        bgClass:'bg-gradient-to-r from-primary to-secondary'
    }
]
    return (
        <div className='grid gap-6 mt-16 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                cardData.map(card=><InfoCard
                key={card.id}
                card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;