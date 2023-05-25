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
        description: 'Fluoride is a naturally occurring mineral that helps build strong teeth and prevent cavities',
        img: doc
    },
    {
        id: 2,
        name: 'Consult with a Engineer',
        description: 'Treatments for tooth decay  A dentist can prescribe fluoride treatments like mouthwash or varnish to reverse early tooth decay',
        img: eng
    },
    {
        id: 3,
        name: 'Consult with a Lawyer',
        description: 'The best way to whiten teeth by removing stains is whitening toothpaste and an electric toothbrush.',
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
                        <h1 className="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p className="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton><Link to='/appointment'>Get Started</Link></PrimaryButton>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AllServices;