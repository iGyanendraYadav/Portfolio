import React from 'react'
import css from './Footer.module.scss';
import { motion } from 'framer-motion';
import { fadeIn, footerVariants, staggerChildren, textVariant2, zoomIn } from '../../utils/motion';

const Footer = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{once: false, amount: 0.25}}


     className={` paddings ${css.wrapper}`}>

      <motion.div variants={footerVariants} className={` innerWidth yPaddings flexCenter ${css.container}`}>
        <div className={css.left}>
          <span className="primaryText">Let's make something <br/> amazing together.</span>
          <span className="primaryText">Start by <a href="mailto:gyanindrayadav1@gmail.com">saying hi</a> </span>
        </div>
        <div className={css.right}>
          <div className={css.info}>
            <span className="secondaryText">Information</span>
            <p>Ghazipur, Uttar Pradesh, India</p>
          </div>
          <div className={css.menu}>
            <a href="mailto:gyanindrayadav1@gmail.com" target="_blank" rel="noopener noreferrer">Email</a>
            <a href="https://www.linkedin.com/in/igyanendrayadav/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://github.com/iGyanendraYadav" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="./Resume.pdf" download={"Resume"}>↓  Resume</a>
           
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Footer