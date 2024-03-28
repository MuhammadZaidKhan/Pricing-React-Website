import React from 'react';
import { Link } from 'react-router-dom';
import Ellipse1 from "../assets/Ellipse 2 (2).png";
import Ellipse2 from "../assets/Ellipse 2 (3).png";
import mobile from "../assets/mobile.png";

const Home = () => {
    return (
        <div className='bg-background1 min-h-screen'>
            <div className="relative">
                <img src={Ellipse1} alt="Top-pictures" className="z-0" />
                <img
                    src={Ellipse2}
                    alt="Top-pictures"
                    className="absolute top-[1px] left-[1px] z-10 transform rotate-[-1deg]"
                />
            </div>

            <div className='flex flex-col justify-center items-center relative'>

                <img src={mobile} alt="mobile" className="w-68 h-52 pl-1 mt-[-10px] md:w-78 md:h-50 md:mt-[-75px]" />

                <h1 className='font-Poppins font-semibold text-4xl pt-10 px-12 md:pt-6'>Simple pricing for your business</h1>
                <p className='font-Poppins font-normal pt-8 md:pt-5 px-12 pr-20'>Plans that are carefully crafted to suit your business.</p>
                {/* <button className='bg-buttonc text-white md:mt-8 md:mr-20 md:px-12 md:py-2 px-20 py-3 mt-12 mr-8'>Get Started</button> */}
                <button className='bg-buttonc text-white md:mt-8 md:mr-20 md:px-12 md:py-2 px-20 py-3 mt-12 mr-8'>
                    <Link to="/PricingPage">Get Started</Link>
                </button>
            </div>


        </div>
    )
}

export default Home;
