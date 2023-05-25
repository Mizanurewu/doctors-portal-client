import React from 'react';
import doc from '../../../../assets/images/doc.png'
import eng from '../../../../assets/images/eng.png';
import loy from '../../../../assets/images/loy.png';
import AllService from './AllService';
import PrimaryButton from '../../../../components/PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';

const AllServices = () => {
    const servicesData = [{
        id: 1,
        name: 'Consult with a Doctor',
        description: 'A doctor consultant, also known as a medical consultant, is a highly trained and experienced physician who provides specialized expertise and advice to other healthcare professionals, organizations, or individuals. These consultants typically possess extensive knowledge and expertise in a specific medical field or area of practice.',
        img: doc
    },
    {
        id: 2,
        name: 'Consult with a Engineer',
        description: 'An engineering consultant is a professional who provides specialized expertise and advice in various engineering fields. They possess in-depth knowledge and experience in specific areas of engineering and offer their services to individuals, companies, or organizations that require technical guidance or support.',
        img: eng
    },
    {
        id: 3,
        name: 'Consult with a Lawyer',
        description: 'A lawyer consultant, also known as a legal consultant, is a professional who provides specialized legal expertise and advice to individuals, businesses, or organizations. These consultants possess a deep understanding of the law and apply their knowledge to assist clients with legal matters and decision-making processes.',
        img: loy
    }
    ]
    return (
        <div className='my-16'>
            <div>
                
                <h2 className='text-4xl text-center'>Services We Provide</h2>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-16 gap-8 justify-center'>
                {
                    servicesData.map(service => <AllService
                        key={servicesData.id}
                        service={service}
                    ></AllService>)
                }
            </div>
            <div className="hero pt-16">
                <div className="hero-content flex-col lg:flex-row">
                    {/* <img src={treatment} className="max-w-md rounded-lg shadow-2xl" alt='treatment' /> */}
                    <div className='max-w-md md:pt-16'>
                        <h1 className="text-5xl font-bold">Why We Are The Best !!!</h1>
                        <p className="py-6">Our team consists of highly skilled and experienced consultants who bring deep expertise and knowledge to the table. We have a track record of delivering successful solutions across diverse industries.<br></br>

We prioritize our clients and their unique needs. By understanding their challenges and goals, we provide tailored and effective solutions that drive sustainable growth and long-term success.</p>
                        <PrimaryButton><Link to='/appointment'>Get Started</Link></PrimaryButton>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllServices;