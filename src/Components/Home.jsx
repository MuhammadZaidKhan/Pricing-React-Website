import React from 'react';
import { Link } from 'react-router-dom';
import Ellipse1 from "../assets/Ellipse 2 (2).png";
import Ellipse2 from "../assets/Ellipse 2 (3).png";
import mobile from "../assets/mobile.png";

const Home = () => {
    return (
        <div className='bg-background1 min-h-screen'>
            <div>
                <div className="relative">
                    <img src={Ellipse1} alt="Top-pictures" className="z-0" />
                    <img
                        src={Ellipse2}
                        alt="Top-pictures"
                        className="absolute top-[1px] left-[1px] z-10 transform rotate-[-1deg]"
                    />
                </div>

                <div className='flex flex-col justify-center items-center relative md:ml-16'>

                    <img src={mobile} alt="mobile" className="w-68 h-52 ml-11 md:w-78 md:h-50 md:mt-[-75px]" />

                    <h1 className='font-Poppins font-semibold md:text-4xl text-3xl pt-16 pl-12 md:px-12 md:pt-6'>Simple pricing for your business</h1>
                    <p className='font-Poppins font-normal pt-8 md:pt-5 px-12 pr-20'>Plans that are carefully crafted to suit your business.</p>
                    {/* <button className='bg-buttonc text-white md:mt-8 md:mr-20 md:px-12 md:py-2 px-20 py-3 mt-12 mr-8'>Get Started</button> */}
                    <button className='bg-buttonc text-white md:mt-8 md:mr-20 md:px-12 md:py-2 px-24 py-4 mt-12 mr-5 ml-5'>
                        <Link to="/PricingPage">Get Started</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Home;
