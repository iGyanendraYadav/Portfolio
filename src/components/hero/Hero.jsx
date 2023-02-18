import React from "react";
import css from "./Hero.module.scss";
import { motion } from 'framer-motion';
import { fadeIn, slideIn, staggerContainer } from '../../utils/motion';

const Hero = () => {
  return (
    <section className={`paddings  ${css.wrapper}`}>
      <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount:0.25}}
       className={`innerWidth ${css.container}`}>
        {/* Upper Elements */}
        <div className={css.upperElements}>
          <motion.span
          variants={fadeIn('right',"tween",0.2,1)}
           className="primaryText">
            Hey There, <br /> I'm Gyanindra.
          </motion.span>

          <motion.span  variants={fadeIn('left',"tween",0.2,1)} className="secondaryText">
           <a href="./html.png" download={"Test"}>↓  Resume</a>
          </motion.span>


          {/* <motion.span  variants={fadeIn('left',"tween",0.2,1)} className="secondaryText">
            I love to design
            <br />
            attractive and responsive website.
          </motion.span> */}
        </div>

        <div className={css.person}>
            <motion.img variants={slideIn('up',"tween",0.5,1.3)} src="./gyan2.png" alt="" />
        </div>

        <motion.a variants={fadeIn('right',"tween",0.3,1)} className={css.email} href="mailto:gyanindrayadav1@gmail.com">gyanindrayadav1@gmail.com</motion.a>


        {/* Lower Elements */}
        <div className={css.lowerElements}>
          <motion.div
          variants={fadeIn('right',"tween",0.3,1)}
           className={css.experience}>
            <div className="primaryText">03</div>
            <div className="secondaryText">
              <div>Years</div>
              <div>Experience</div>
            </div>
          </motion.div>
          <motion.div variants={fadeIn('left',"tween",0.5,1)} className={css.certificate}>
            <img src="./certificate.png" alt="" />
            <span>FRONT-END  DEVELOPER</span>
            <span>(Desired Role)</span>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
