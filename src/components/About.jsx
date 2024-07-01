import React from 'react';
import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constans';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard =
  ({ index, title, icon }) => {
    return (
      <Tilt className='xs:w-[250px] w-full'>
        <motion.div variants={fadeIn("right", "spring", 0.5 * index, 0.75)} className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'>
          <div option={{ max: 45, scale: 1, speed: 450 }} className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
            <img src={icon} alt={title} className='w-16 h-16 object-contain' />
            <h3 className='text-white text-[20px] font-bold text-center'>{title}</h3>
          </div>
        </motion.div>
      </Tilt>
    )
  }

const About = () => {
  return (
    <div className='text-center'>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          introduction
        </p>
        <h2 className={styles.sectionHeadText}>OverView</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1)} className='mt-4 text-secondary text-[25px] leading-[30px] text-left'>
        Hello!
        <div className='mt-3'>Im a dedicated Full-Stack developer with a background in MongoDB, JavaScript, React and Node.js.</div>
        <div className='mt-3'>My role I worked both on the client side and on the server side and developed in the Vue.js and Quasar languages ​​and also worked in front of a global store (Pinia).</div>
        <div className='mt-3'>I also optimized data management processes. I have successfully integrated new features into the site, ensuring a smooth shopping experience for users.</div>
        <div className='mt-3'>In addition, I have experience in developing projects in the languages: JavaScript, React, Node js, HTML, CSS and technologies: OpenAi, BootStrap, NoSQL Express, MongoDB and Git.</div>
        <div className='mt-3'>Has a bachelor's degree B.Ed with a specialization in mathematics and a Full stack development course at SVcollge excelling with an average of 92.</div>
        <div className='mt-3'>I excel at translating complex design guidelines into functional and high-quality code, always meeting the planned requirements and on time.</div>
      </motion.p>

      <div className='mt-20 flex flex-wrap justify-around gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(About, 'about');