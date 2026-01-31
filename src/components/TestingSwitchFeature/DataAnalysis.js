import React, { useState } from 'react';

// Content components
const InfoOne = () => <div>Data Content</div>;
const InfoTwo = () => <div>Applications Contents</div>;

const DataAnalysis = () => {
  // 1. Define state to hold the current view
  const [activeView, setActiveView] = useState('view1');

  // 2. Function to update state on click
  const showContent = (view) => {
    setActiveView(view);
  };

  return (
    // GIVE ME THE ABILITY THE SWITCH
    // <div style={{ border: '1px solid black', padding: '20px' }}>
    //   <div style={{ marginBottom: '10px' }}>
    //     <button onClick={() => showContent('view1')}> Data Analysis </button>
    //     <button onClick={() => showContent('view2')}>  Software Engineer </button>
    //   </div>

    //   {/* 3. Conditional Rendering */}
    //   {activeView === 'view1' && <InfoOne />}
    //   {activeView === 'view2' && <InfoTwo />}
    // </div>
    <div>

          
              <>
              
                <section id="projects" className="body-font pt-16">
                  <div className="container px-5 py-10 mx-auto text-center lg:px-40">
                  <div className="flex flex-col w-full mb-5">
                      <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 ">
                     Currently in Progress...
                      </h1>
                      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                      </p>
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
                
          </section>
              </>
    </div>
  );
};

export default DataAnalysis;
