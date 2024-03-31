import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faShoppingCart, faCommentsDollar } from '@fortawesome/free-solid-svg-icons';
// import Ellipse1 from "../assets/Ellipse 1.png";
// import Ellipse2 from "../assets/Ellipse 2 (4).png";
import man from "../assets/man.png";
const PricingPage = () => {
    return (
        <div class="flex flex-col min-h-screen bg-white">
            <div class="flex-grow bg-buttonc h-16">
                <div className='flex flex-col justify-center items-center'>
                    <img src={man} alt="man" className='w-50 h-40 mt-4 md:w-50 md:h-32 md:mt-5' />
                    <h1 className='font-Poppins font-extrabold text-white text-3xl pt-5'>Premium PRO</h1>
                    <h1 className='font-Poppins font-extrabold text-white text-3xl leading-10'>$329</h1>
                    <p className='font-Poppins font-medium text-white text-lg'>billed just once</p>
                </div>
            </div>




            <div class="flex-grow flex justify-center pt-4 md:mb-16 md:pt-2 relative">
                <div className='absolute md:w-64 md:h-72 w-[270px] h-72 rounded-xl bg-gray-200 text-black'>
                    <h1 className='font-Poppins font-medium md:text-sm text-sm pl-2 pt-2'>Access these features when you get this pricing package for your business.</h1>

                    <div className='md:text-xs mt-2 pl-5 text-pcolor'>
                        <div className=''>
                            <p className='flex items-center py-0'>
                                <FontAwesomeIcon icon={faCheck} className='mr-2 text-buttonc fa-fw' /> International calling and messaging API
                            </p>
                            <p className='flex items-center py-1'>
                                <FontAwesomeIcon icon={faCheck} className='mr-2 text-buttonc fa-fw' /> Additional phone numbers
                            </p>
                            <p className='flex items-center py-1'>
                                <FontAwesomeIcon icon={faCheck} className='mr-2 text-buttonc fa-fw' /> Automated messages via Zapier
                            </p>
                            <p className='flex items-center py-1'>
                                <FontAwesomeIcon icon={faCheck} className='mr-2 text-buttonc fa-fw' /> 24/7 support and consulting
                            </p>
                        </div>

                    </div>

                    <div className='pt-1.5 flex flex-row'>
                        <div className='flex items-center justify-between mb-20'>
                            {/* icon */}
                            <div>
                                <FontAwesomeIcon icon={faShoppingCart} className='bg-buttonc py-1 px-2 ml-8 h-5 md:ml-4 mt-2' />
                            </div>
                            {/* button */}
                            <div>
                                <button className='bg-buttonc text-white px-10 ml-5 md:px-12 py-1 md:ml-4 font-Poppins font-medium'>Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='flex flex-col md:flex-row md:space-x-5 space-y-1 justify-evenly pt-16 pb-2 md:pl-0 pl-5'>
                <div className='flex flex-row space-x-2'>
                    <FontAwesomeIcon icon={faCommentsDollar} />
                    <p className='font-Poppins font-medium'>30 days money back Guarantree</p>
                </div>
                <div className='flex flex-row space-x-2'>
                    <FontAwesomeIcon icon={faCommentsDollar} />
                    <p className='font-Poppins font-medium'>No setup fees 100% hassle-free</p>
                </div>
                <div className='flex flex-row space-x-2'>
                    <FontAwesomeIcon icon={faCommentsDollar} />
                    <p className='font-Poppins font-medium'>No monthly subscription Pay once and for all</p>
                </div>
            </div>
        </div>

    )
}

export default PricingPage