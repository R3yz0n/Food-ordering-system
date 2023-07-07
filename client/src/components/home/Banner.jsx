import React from 'react'
import BannerBg from '../../assests/BannerBg.jpg'
import BannerRight from '../../assests/BannerRight.png'
import { motion } from 'framer-motion'
import { btnClick } from '../../animations'
import { Link } from 'react-router-dom'
import { LazyLoadImage } from 'react-lazy-load-image-component'

import 'react-lazy-load-image-component/src/effects/opacity.css';


const Banner = () => {
    const styles = { backgroundImage: `url(${BannerBg})`, backgroundAttachment: 'fixed', backgroundRepeat: 'no-repeat', }

    return (

        <section className="relative w-full bg-black h-[70vh] text-white flex overflow-hidden" id='banner' >


            <aside className='flex mx-auto w-[80%]  z-30 h-full '>

                <div className='flex flex-col h-full py-8 justify-center w-3/5 gap-5'>

                    <h3 className='text-[44px] font-bold'>Enjoy Our Delicious Meal</h3>
                    <h5 className='font-semibold opacity-90 text-lg lg:pr-8'>A restaurant is a place where people go to enjoy a meal, typically with friends, family, or colleagues.</h5>

                    <motion.button {...btnClick} className='bg-orange-500 hover:bg-orange-600 px-4 py-2 w-52 rounded-md tracking-wider text-headingColor text-xl font-bold'>
                        <Link to='/menu'>See Our Menu</Link>
                    </motion.button>

                </div>

                <LazyLoadImage src={BannerRight} alt="Banner Right" className="w-96 h-96 z-30  flex my-auto mx-auto opacity-90 object-cover p-3 " effect='opacity' />
            </aside>


            {/* background image */}
            {/* <img src={BannerBg} className="h-full w-full absolute top-0 right-0 z-0 backdrop-filter  opacity-40 blur-[1px] " alt="Banner Bg" /> */}
            <div className="h-full w-full absolute top-0 right-0 z-0   opacity-30" alt="Banner Bg" style={{ ...styles }} />
        </section>
    )
}

export default Banner