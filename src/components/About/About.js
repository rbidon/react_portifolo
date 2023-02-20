import React from "react";
import skillData from "./skillData";
const About =()=>{
    return(
        <div className="pt-28" >
            <section id="about">
      <div className="container mx-auto flex px-10 py-20  flex-col items-center w-full">
        <div className="lg:flex-grow  lg:pr-24 lg:pl-24 md:pr-16 flex flex-col md:items-center md:text-center mb-16 md:mb-0 items-center text-center w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-center self-center ">
            Hey Again, I'm Rousse!
            <br className="hidden lg:inline-block text-center" />I have a passionate for accessibility and creating usable digital products.

          </h1>
          <p className="mb-8 leading-relaxed">
          Software Engineer with a strong focus on accessibility design and creating usable digital products. As someone who struggles
          with visibility myself, I see creating responsive web applications essential to increasing inclusivity. With experience in
          technical customer support, I’m skilled at listening to users' needs and providing solutions that truly matter to them. I hope to
          join an organization where I can make the product better for its customers every day..


          </p>
          
          <div className="skillsOuter ">
            <h2 className="sm:text-4xl text-2xl mb-4 font-medium text-center">Skills</h2>
          <div className="skillsInner">
          <div className="skillsContainer grid  grid-cols-5 gap-4 place-content-center">
            {skillData.map((skill,idx)=> (
              <div key={idx} className="flex flex-col items-center justify-center border-double border-2 border-black py-1.5 px-1 hover:border-dotted">
                {/* border: solid;
    padding-top: 5px;
    padding-bottom: 5px; */}
                <img className="sm:h-[auto] sm:w-[auto] md:h-[auto] md:w-[auto]
                 lg:h-28"
                alt={skill.name}
                src={skill.image}/>
                <div className="flex flex-col items-center justify-center sm:px-2">
                <p className=" text-center ">{skill.name}</p>
                </div>
              </div>
            ))}
          </div>
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