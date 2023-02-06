import React from "react";
import skillData from "./skillData";
const About =()=>{
    return(
        <div className="pt-28" >
            <section id="about">
      <div className="container mx-auto flex px-10 py-20  flex-col items-center w-full">
        <div className="lg:flex-grow  lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-center mb-16 md:mb-0 items-center text-center w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-center self-center ">
            Hi, I'm Reed.
            <br className="hidden lg:inline-block text-center" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?
          </p>
          
          <div className="skillsOuter ">
            <h2 className="sm:text-4xl text-2xl mb-4 font-medium text-center">Skills</h2>
          <div className="skillsContainer grid  grid-cols-5 gap-4 place-content-center">
            {skillData.map((skill,idx)=> (
              <div key={idx}>
                <img className="h-[auto] w-[auto] lg:w-[150px] h-[150px]"
                alt={skill.name}
                src={skill.image}/>

                <p>{skill.name}</p>
              </div>
            ))}
          </div>
          </div>
          {/* <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="flex justify-center text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div> */}
        </div>
        </div>
        </section>
        </div>
    )
}

export default About