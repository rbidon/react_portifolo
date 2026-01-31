import { useState } from "react";
import LanguagesSkillsData from "./languageSkillsData";
import LibrariesSkillsData from "./librariesSkillsData";
import DatabaseSkillsData from "./databaseSkillsData";

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
                <div style={{ marginBottom: '1px' , 'padding-bottom':'2px'}}>
                   <button className="bg-transparent
                    hover:bg-yellow-200  font-medium  py-2 px-4 border-black-500
                    hover:border-transparent rounded-full
                    underline-offset-2  outline px-2 hover:outline-dashed" onClick={() => showContent('view1')}> 
                    Languages </button>
                    <button className="px-4 rounded-full bg-transparent
                    hover:bg-yellow-200  font-medium  py-2 px-4 border-black-500
                    hover:border-transparent rounded-full
                    underline-offset-2  outline hover:outline-dashed m-8" onClick={() => showContent('view2')}> 
                         Libraries and Frameworks </button>
                    <button className ="px-4 rounded-full bg-transparent
                    hover:bg-yellow-200  font-medium  py-2 px-4 border-black-500
                    hover:border-transparent rounded-full
                    underline-offset-2  outline hover:outline-dashed mb-3" onClick={() => showContent('view3')}>  
                        Databases and Tools </button>
                </div>
                </div>
           
                <div className="skillsInner">
            

                {/* 3. Conditional Rendering */}
                {activeView === 'view1' && <LanguagesSkillsData />}
                {activeView === 'view2' && <LibrariesSkillsData/>}
                {activeView === 'view3' && <DatabaseSkillsData/>}

            </div> 
          
          </div>
    )
}

export default Skills