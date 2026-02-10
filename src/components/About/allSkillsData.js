import Heroku from "./skillsImage/heroku-icon.921x1024.png"
import Git from "./skillsImage/Git-Icon-1788C.png"
import Figma from "./skillsImage/figma.png"
import MongoDB from "./skillsImage/mongodb-5-1175140.webp"
import PowerBI from "./skillsImage/power-bi-icon.png"
import Tableau from "./skillsImage/Tableau-Symbol.png"
import HTML from "./skillsImage/HTML5_Badge_512.png"
import CSS from "./skillsImage/css-512.webp"
import JS from "./skillsImage/javascript-icon-png-23.jpeg"
import Python from "./skillsImage/Python-PNG-File.png"
import SQL from "./skillsImage/sql-server-icon-png-11368.png"
import Express from "./skillsImage/expressjs_logo_icon_169185.png"
import Node from "./skillsImage/nodejs_logo.png"
import Flask from "./skillsImage/Flask.png"
import React from "./skillsImage/React-icon.svg.png"
import TailwindCSS from "./skillsImage/TailwindCSS.png"

const AllSkillsData = [
    {
        name:"HTML",
        image: HTML,

    },{
        name:"CSS",
        image:CSS,

    },{
        name:"JavaScript",
        image:JS,
    },{
        name:"Python",
        image:Python,
    },{
        name:"SQL",
        image:SQL,
    },{
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
    },{
        name:"MongoDB",
        image: MongoDB
    },{
        name:"Heroku",
        image:Heroku
    },{
        name:"Git",
        image:Git
    }, {
        name:"Figma",
        image:Figma
    },{
        name:"Power BI",
        image: PowerBI
    }, {
        name: "Tableau",
        image: Tableau
    }
]
const AllSkillsDatas = () => {
    return(
        <div>
            <div className="skillsContainer grid  grid-cols-5 gap-4 place-content-center">
                        {AllSkillsData.map((skillsdata,idx)=> (
                          <div key={idx} className="flex flex-col items-center justify-center border-double
                           border-2 border-black py-1.5 px-1 hover:border-dotted ">
                           
                                <img className="sm:h-[auto] sm:w-[auto] md:h-[auto] md:w-[auto]
                                lg:h-28"
                                alt={skillsdata.name}
                                src={skillsdata.image}/>
                                <div className="flex flex-col items-center justify-center sm:px-2">
                                    <p className=" text-center ">{skillsdata.name}</p>
                                </div>
                          </div>
                        ))}
            </div>
        </div>
    )
}

export default AllSkillsDatas