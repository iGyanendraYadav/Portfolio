import React from "react";
import { comments, sliderSettings } from "../../utils/data";
import css from "./Skills.module.scss";
import Slider from "react-slick";
import {motion} from 'framer-motion'
import { footerVariants, staggerChildren, textVariant, textVariant2 } from "../../utils/motion";
const Skills = () => {
  return (
    <motion.section
    variants={staggerChildren}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.25 }}
    section className={`paddings ${css.wrapper}`}>

      <a className="anchor" id="skills"></a>

      <motion.div
      variants={footerVariants}
      className={`yPaddings innerWidth ${css.container}`}>


        <div className={`flexCenter ${css.heading}`}>
          <span className="primaryText">Skills</span>
          <p style={{ marginTop: "2rem" }}>
            I got a job that was in accordance with the salary and field of work
          </p>
          <p>The process of submitting an appilication was quite cosy</p>
        </div>



        <div className={`yPaddings ${css.comments}`}>
          {/* to use slider , we have to inlcude css in index.html head */}
          <Slider {...sliderSettings} className={css.slider}>
            {comments.map((comment, i) => {
              return (
                <div className={`flexCenter ${css.comment}`}>
                  <img src={comment.img} alt="" />
                </div>
              );
            })}
          </Slider>
        </div>


      </motion.div>

    </motion.section>
  );
};

export default Skills;


















// import React from 'react'
// import css from './People.module.scss';
// import { motion } from 'framer-motion';
// import {  staggerChildren } from '../../utils/motion';
// import Slider from 'react-slick';
// import {comments, sliderSettings} from '../../utils/data'

// const People = () => {
//   return (
//     <motion.section
//     variants={staggerChildren}
//     initial="hidden"
//     whileInView="show"
//     viewport={{once: false, amount: 0.25}}
//      className={` paddings  ${css.wrapper}`}>


//         <div className={` yPaddings innerWidth ${css.container}`}>
//             <div className={` flexCenter ${css.heading}`}>
//                 <span className='primaryText'>People talk about us</span>
//                 <p style={{marginTop: "2rem"}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id, impedit voluptatibus.</p>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, officia!</p>
//             </div>


//             {/* Carousel */}
//             <div className={css.comments}>
//                 <Slider
//                 {...sliderSettings}
//                 className={css.Slider}
//                 >
//                     {comments.map((comment, i) => {
//                         return (
//                             <div className={css.comment}>
//                                 <img src={comment.img} alt="" />
//                                 <p>{comment.comment}</p>
//                                 <div className={css.line}></div>
//                                 <div className={css.bio}>
//                                     <span>{comment.name}</span>
//                                     <span>{comment.post}</span>
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </Slider>
//             </div>
//         </div>


//     </motion.section>
//   )
// }

// export default People