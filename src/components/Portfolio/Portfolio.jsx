import css from './Portfolio.module.scss';
import React from 'react'
import { motion } from 'framer-motion';
import { fadeIn, staggerChildren } from '../../utils/motion';

const Portfolio = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{once: true, amount: 0.25 }}
     className={` paddings  ${css.wrapper}`}>

<a className='anchor' id='portfolio'></a>


        <div className={` flexCenter innerWidth ${css.container}`}>
            <div className={` flexCenter ${css.heading}`}>
                <div>
                    <span className='primaryText'>
                    Latest Works
                    </span>
                    <p style={{marginTop: "10px"}}>Perfect Solution for digital experience</p>
                </div>
                {/* <span className="secondaryText">Explore More Works</span> */}
            </div>


            {/* Images Links of Portfolio */}

            <div className={` flexCenter ${css.showCase}`}>

                <motion.a variants={fadeIn("up","tween", 0.2, 0.6)} href="https://testone-31632.web.app/" target="_blank" rel="noopener noreferrer"><img src="bookstore3.png" alt="" /></motion.a>
                <motion.a variants={fadeIn("up","tween", 0.4, 0.6)} href="https://igyanendra.web.app/" target="_blank" rel="noopener noreferrer"><img src="youtube3.png" alt="" /></motion.a>
                <motion.a variants={fadeIn("up","tween", 0.6, 0.6)} href="https://instagram-igyanendrayadav.vercel.app/" target="_blank" rel="noopener noreferrer"><img src="iinsta3.png" alt="" /></motion.a>
                <motion.a variants={fadeIn("up","tween", 0.8, 0.6)} href="https://warikoo.vercel.app/" target="_blank" rel="noopener noreferrer"><img src="ankur3.png" alt="" /></motion.a>
                <motion.a variants={fadeIn("up","tween", 0.9, 0.6)} href="https://netflixbygyan.web.app/" target="_blank" rel="noopener noreferrer"><img src="netflix3.png" alt="" /></motion.a>
                <motion.a variants={fadeIn("up","tween", 1, 0.6)} href="https://hcltechbygyan.web.app/" target="_blank" rel="noopener noreferrer"><img src="hcl3.png" alt="" /></motion.a>
         
            </div>
        </div>
    </motion.section>
  )
}

export default Portfolio
