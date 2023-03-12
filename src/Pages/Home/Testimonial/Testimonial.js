import React from 'react';
import quote from '../../../assets/icons/quote.svg';
import people1 from '../../../assets/images/people1.png';
import people2 from '../../../assets/images/people2.png';
import people3 from '../../../assets/images/people3.png';
import Review from './Review';

const Testimonial = () => {
    const reviews=[
        {
            _id:1,
            name:'Harry Willium',
            img:people1,
            reviews: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla facere aspernatur iusto quidem sed adipisci sit consequuntur odio minus eaque consectetur possimus fugit aut expedita inventore, dicta, libero dolore numquam.',
            location:'Koria'
        },
        {
            _id:2,
            name:'Tom Crus',
            img:people2,
            reviews: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla facere aspernatur iusto quidem sed adipisci sit consequuntur odio minus eaque consectetur possimus fugit aut expedita inventore, dicta, libero dolore numquam.',
            location:'USA'
        },
        {
            _id:3,
            name:'Harry Porter',
            img:people3,
            reviews: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla facere aspernatur iusto quidem sed adipisci sit consequuntur odio minus eaque consectetur possimus fugit aut expedita inventore, dicta, libero dolore numquam.',
            location:'California'
        }
    ]
    return (
        <section className='my-16'>
            <div className='flex justify-between'>
                <div>
                    <h4 className='text-2xl font-bold text-primary'>Testimonial</h4>
                    <h2 className='text-5xl'>What Our Patients Says</h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="quote" />
                </figure>

            </div>

            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    reviews.map(review=><Review
                    key={review._id}
                    review={review}
                    ></Review>)
                }

            </div>
            
        </section>
    );
};

export default Testimonial;