
import Heroku from "./skillsImage/heroku-icon.921x1024.png"
import Git from "./skillsImage/Git-Icon-1788C.png"
import Figma from "./skillsImage/figma.png"
import MongoDB from "./skillsImage/mongodb-5-1175140.webp"
import PowerBI from "./skillsImage/power-bi-icon.png"
import Tableau from "./skillsImage/Tableau-Symbol.png"

const Databases = [
    {
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
const DatabaseSkillsData = () => {
    return(
        <div>
            <div className="skillsContainer grid  grid-cols-5 gap-4 place-content-center">
                        {Databases.map((database,idx)=> (
                          <div key={idx} className="flex flex-col items-center justify-center border-double
                           border-2 border-black py-1.5 px-1 hover:border-dotted ">
                           
                                <img className="sm:h-[auto] sm:w-[auto] md:h-[auto] md:w-[auto]
                                lg:h-28"
                                alt={database.name}
                                src={database.image}/>
                                <div className="flex flex-col items-center justify-center sm:px-2">
                                    <p className=" text-center ">{database.name}</p>
                                </div>
                          </div>
                        ))}
            </div>
        </div>
    )
}

export default DatabaseSkillsData