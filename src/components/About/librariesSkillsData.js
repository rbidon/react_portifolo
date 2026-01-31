import Express from "./skillsImage/expressjs_logo_icon_169185.png"
import Node from "./skillsImage/nodejs_logo.png"
import Flask from "./skillsImage/Flask.png"
import React from "./skillsImage/React-icon.svg.png"
import TailwindCSS from "./skillsImage/TailwindCSS.png"

const Libraries= [
    {
        name:"Express",
        image:Express
    },{
        name:"Node.js",
        image: Node
    },{
        name:"Flask",
        image: Flask
    },{
        name:"React",
        image:React
    },{
        name:"Tailwind CSS",
        image:TailwindCSS
    }
]

const LibrariesSkillsData = () => {
    return(
        <div>
            <div className="skillsContainer  grid  grid-cols-5 gap-4 place-content-center">
                        {Libraries.map((library,idx)=> (
                          <div key={idx} className="flex flex-col items-center justify-center border-double border-2 border-black py-1.5 px-1 hover:border-dotted">
                           
                                <img className="sm:h-[auto] sm:w-[auto] md:h-[auto] md:w-[auto]
                                lg:h-28"
                                alt={library.name}
                                src={library.image}/>
                                <div className="flex flex-col items-center justify-center sm:px-2">
                                    <p className=" text-center ">{library.name}</p>
                                </div>
                          </div>
                        ))}
            </div>
        </div>
    )
}
export default LibrariesSkillsData