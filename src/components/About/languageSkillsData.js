import HTML from "./skillsImage/HTML5_Badge_512.png"
import CSS from "./skillsImage/css-512.webp"
import JS from "./skillsImage/javascript-icon-png-23.jpeg"
import Python from "./skillsImage/Python-PNG-File.png"
import SQL from "./skillsImage/sql-server-icon-png-11368.png"


const languageData =[
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
    }

]
const LanguagesSkillsData =() => {
    return(
        <div>
            <div className="skillsContainer grid  grid-cols-5 gap-4 place-content-center">
                        {languageData.map((language,idx)=> (
                          <div key={idx} className="flex flex-col items-center 
                          justify-center border-double border-2 border-black py-1.5 px-1 hover:border-dotted">
                           
                                <img className="sm:h-[auto] sm:w-[auto] md:h-[auto] md:w-[auto]
                                lg:h-28"
                                alt={language.name}
                                src={language.image}/>
                                <div className="flex flex-col items-center justify-center sm:px-2">
                                    <p className=" text-center ">{language.name}</p>
                                </div>
                          </div>
                        ))}
            </div>
        </div>
    )
}


export default LanguagesSkillsData