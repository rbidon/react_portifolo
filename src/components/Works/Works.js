import React from "react";
import works from "./workdata";

const Works =()=>{

    return(
        <>
          <section id="projects" className="body-font pt-16">
            <div className="container px-5 py-10 mx-auto text-center lg:px-40">
            <div className="flex flex-col w-full mb-5">
                <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 ">
                Works
                </h1>
                <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                Recent project and collaborations
                </p>
            </div>
            <div className="flex flex-wrap justify-center  rounded-md space-y-6">
            {works.map((project,idx) => (
            
              <div className="flex flex-col items-center   border-4 w-5/6 pt-8 pb-8 rounded-[20px] " key={idx}>
                <img
                  alt={project.imageAlt}
                  className=" rounded-[20px] w-5/6 h-full pt-[20px]"
                  src={project.image}
                />
                <div className="px-8 py-5 z-10 w-full ">
                  <h2 className="tracking-widest text-sm title-font font-medium  mb-1">
                    {project.skills}
                  </h2>
                  <h1 className="title-font text-lg font-medium mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div> 

                <div className="projectLinks flex justify-center">

                {project.wireframeLink === undefined || null
                ? ""
                : <a href={project.wireframeLink}   target="_blank" rel="noreferrer" className="flex justify-center border-0 py-2 px-6 focus:outline-none rounded-full hover:outline-dashed outline">
                    Wireframe
                
                </a>
                }
                {project.githubLink === undefined || null
                ? ""
                : <a href={project.githubLink}   target="_blank" rel="noreferrer" className="border-0 py-2 px-6 focus:outline-none rounded-full hover:outline-dashed outline ml-[20px] ">
                    Code
                </a>
                }
                {project.deployLink === undefined|| null
                ? ""
                : <a href={project.deployLink}   target="_blank" rel="noreferrer" className="border-0 py-2 px-6 
                active:outline-dashed focus:outline-none rounded-full hover:outline-dashed outline ml-[20px] ">
                    Demo
                
                </a>
                }
                </div>
                {/* {project.links !== "" ?
               
                    
                    <a href={project.githubLink}   target="_blank" rel="noreferrer">
                    <button>
                        Code
                    </button>
                    </a>
                    <a href={project.links.githubLink}   target="_blank" rel="noreferrer">
                    <button>
                        Demo
                    </button>
                    </a>
                </div>
                : ""
                } */}
              </div>
          ))}
        </div> 
      </div>
    </section>
        </>
    )
}

export default Works