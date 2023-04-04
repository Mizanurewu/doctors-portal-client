import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png';
import treatment from '../../../assets/images/treatment.png';
import Service from './Service';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';

const Services = () => {
    const servicesData = [{
        id: 1,
        name: 'Fluoride Treatment',
        description: 'Fluoride is a naturally occurring mineral that helps build strong teeth and prevent cavities',
        img: fluoride
    },
    {
        id: 2,
        name: 'Cavity Filling',
        description: 'Treatments for tooth decay  A dentist can prescribe fluoride treatments like mouthwash or varnish to reverse early tooth decay',
        img: fluoride
    },
    {
        id: 3,
        name: 'Teeth Whitening',
        description: 'The best way to whiten teeth by removing stains is whitening toothpaste and an electric toothbrush.',
        img: fluoride
    }
    ]
    return (
        <div className='my-16'>
            <div>
                <h3 className='text-2xl uppercase text-center text-primary font-bold'>Our Services</h3>
                <h2 className='text-4xl text-center'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-8 justify-center'>
                {
                    servicesData.map(service => <Service
                        key={servicesData.id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className="hero pt-16">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={treatment} className="max-w-md rounded-lg shadow-2xl"alt='treatment' />
                    <div className='max-w-md md:pt-16'>
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton><Link to='/appointment'>Get Started</Link></PrimaryButton>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Services;