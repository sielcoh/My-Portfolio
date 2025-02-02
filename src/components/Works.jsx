import React from "react";
// import Tilt from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { MyGit, github,gosite } from '../assets';
import { SectionWrapper } from '../hoc';
import { projects } from '../constans';
import { fadeIn, textVariant } from '../utils/motion';
import { Tilt } from "react-tilt";

const ProjectCard = ({ index, name, description, tags, image, source_code_link_github,source_code_link_site }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt options={{ max: 45, scale: 1, speed: 450 }} className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'>
        <div className="relative w-full h-[230px]">
          <img src={image} alt={image} className="h-[232px] w-[322px] rounded-2xl" />
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div onClick={() => window.open(source_code_link_github, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={github} alt={github} className="w-1/2 h-1/2 object-contain" />
            </div>
            <div onClick={() => window.open(source_code_link_site, "_blank")} className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer">
              <img src={gosite} alt={gosite} className="w-1/2 h-1/2 object-contain" />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>

        <div className="mt-4 flex justify-around flex-wrap gap-1 ">
          {tags.map((tag) => (
            <p key={tag.name} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}
const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>
          My Work
        </p>
        <h2 className={styles.sectionHeadText}>Projects.</h2>
      </motion.div>
      <div className="w0full flex">
        <motion.p variants={fadeIn("", "", 0.1, 1)} className="mt-3 text-secondary text-[22px] max-w-3xl leading-[30px]">
          Following projects showcases my skills and experience. Each project is briefly described with links to code repositories and live demos in it. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively. <br />Click below on MyGit for more projects.
        </motion.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
        <a href="https://github.com/sielcoh" className="mx-auto">
          <img src={MyGit} className="w-[100px] h-[60px] rounded-md"/>
        </a>
      </div>

      <div className="mt-5 text-center">

      </div>
    </>
  )
}

export default SectionWrapper(Works, "");