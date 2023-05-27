import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import appointment from '../../../assets/images/appointment.png';
import bg from '../../../assets/images/bg.jpg';
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';
import { Link } from 'react-router-dom';

const MakeAppointment = () => {
    return (
        <div>
            <h1 className="text-5xl font-bold text-left">Meet Our Consultant <span className='text-orange-600'>Today</span></h1>
            <section className='mt-32' style={{ background: `url(${bg})` }}>
                <div className="hero ">
                    <div className="hero-content flex-col lg:flex-row">
                        {/* <img src={doctor} className="-mt-32 hidden md:block lg:w-1/2 rounded-lg shadow-2xl" alt='doctor'/> */}
                        <div>
                            {/* <h1 className='text-xl  font-bold'>Appointment</h1> */}
                            {/* <h1 className="text-white text-3xl font-bold">Make an appointment Today</h1> */}
                            <p className="text-white py-6">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum mollitia corporis tenetur, a numquam voluptas atque perspiciatis ad, eligendi voluptatum iste eos explicabo laudantium soluta nostrum qui rerum, recusandae aspernatur!
                            Enim numquam dolore voluptatem facere nisi eius. Quos illo quidem aut corrupti voluptatem pariatur quam, accusamus dicta sit fugit nam vero provident rem reprehenderit quae hic possimus porro libero fugiat?
                            Sint voluptatem facere nihil ipsam magni nulla labore corporis alias amet, nam facilis eum doloribus, maxime ullam unde voluptas recusandae eligendi. Illum dicta ducimus est veritatis voluptate labore magni in!
                            Necessitatibus sapiente voluptas facere, qui aut assumenda sequi, id alias nihil maiores recusandae eligendi quis. Laboriosam autem architecto laudantium illo praesentium eligendi deserunt, qui, maxime quia officiis consectetur veritatis recusandae!
                            Id provident ducimus, voluptatibus, deserunt laboriosam quis dolores quod excepturi perferendis rem amet voluptas est corporis commodi omnis repudiandae. Fuga quisquam qui quasi harum explicabo beatae corrupti, est facere aliquid.</p>
                            {/* <PrimaryButton className='bg-orange-600'><Link  className=''>Book</Link></PrimaryButton> */}
                            <div className='text-center'>
                                <input type="button" className='bg-orange-600 btn ' value="Book" />
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        </div>
    );
};

export default MakeAppointment;