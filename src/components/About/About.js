import Skills from "./Skills";

const About =()=>{
    return(
        <div className="pt-10" >
            <section id="about">
      <div className="container mx-auto flex px-10 py-20  flex-col items-center w-full">
        <div className="lg:flex-grow  lg:pr-24 lg:pl-24 md:pr-16 flex flex-col md:items-center md:text-center mb-16 md:mb-0 items-center text-center w-full">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-center self-center ">
            Hello Again, I'm Rousse!
            <br/>
            <br className=" hidden  text-center" />
            <div className="italic pt-2"> I have passionate for telling stories through data! </div>

          </h1>
          <p className="mb-8 leading-relaxed text-left">
          Data lover that enjoys converting complex datasets
          into meaningful stories that provides insights and solutions to users & businesses' needs. Recently graduated with 
          Masters of Science in Data Analysis and AI and currently working as
          a Data Validation Analyst, which have provided me experience in properly understanding 
          businesses goals and problems while doing actionable steps to resolves them. 
          </p>
          
          <p>
         During my free time, you can find me in the nature and I am currently training for a 5K! 

          </p><br></br>

          <div>
            <Skills/>
          </div>

        </div>
        </div>
        </section>
        </div>
    )
}

export default About