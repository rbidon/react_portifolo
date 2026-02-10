import { useState } from "react";
import LanguagesSkillsData from "./languageSkillsData";
import LibrariesSkillsData from "./librariesSkillsData";
import DatabaseSkillsData from "./databaseSkillsData";
import AllSkillsDatas from "./allSkillsData";

const Skills = () => {
     const [activeView, setActiveView] = useState('view1');
    
      // 2. Function to update state on click
      const showContent = (view) => {
        setActiveView(view);
      };

    return (
        <div className="wholeSkillsContainer">
            <div className="skillsOuter ">
                <h2 className="sm:text-4xl text-2xl mb-4 font-semibold text-center">Skills</h2>
            </div>  
             <div style={{padding: '2px' }}> 
                <div style={{ marginBottom: '1px' , 'padding-bottom':'2px', flex: "flex-row"}}>
                    <button className="bg-transparent rounded-full
                    hover:bg-yellow-200  font-medium  px-3 py-2 px-4 border-black-500
                    hover:border-transparent
                    underline-offset-2  outline px-2 hover:outline-dashed mr-4" onClick={() => showContent('view1')}> 
                    All </button>
                   <button className="bg-transparent
                    hover:bg-yellow-200  font-medium  py-2 px-4 border-black-500
                    hover:border-transparent rounded-full
                    underline-offset-2  outline px-2 hover:outline-dashed" onClick={() => showContent('view2')}> 
                    Languages </button>
                    <button className="px-4 rounded-full bg-transparent
                    hover:bg-yellow-200  font-medium  py-2 px-4 border-black-500
                    hover:border-transparent
                    underline-offset-2  outline hover:outline-dashed m-8" onClick={() => showContent('view3')}> 
                         Libraries and Frameworks </button>
                    <button className ="px-4 rounded-full bg-transparent
                    hover:bg-yellow-200  font-medium  py-2 px-4 border-black-500
                    hover:border-transparent rounded-full
                    underline-offset-2  outline hover:outline-dashed mb-3" onClick={() => showContent('view4')}>  
                        Databases and Tools </button>
                </div>
                </div>
           
                <div className="skillsInner">
            

                {/* 3. Conditional Rendering */}
                {activeView === 'view1' && <AllSkillsDatas/>}
                {activeView === 'view2' && <LanguagesSkillsData />}
                {activeView === 'view3' && <LibrariesSkillsData/>}
                {activeView === 'view4' && <DatabaseSkillsData/>}

            </div> 
          
          </div>
    )
}

export default Skills