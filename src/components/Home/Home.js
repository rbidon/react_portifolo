import React from 'react';

import Typewriter from 'typewriter-effect';
const Home =() =>{
    return(
        <div className="HomeContainer min-h-full min-w-full container p-5" style={{height: "790px"}}>
            {/* Home Section */}
            <section className="MainSectionContainer min-h-full min-w-full flex space-y-4 justify-evenly items-center lg:flex-row max-[660px]:flex-col-reverse">
                <div className="flex flex-col items-center">
                <div className="MainSectionTitle p-5 text-lg" >
                    <h2>
                        Hello There!
                    </h2>
                    <div className="MainSectionName flex items-center flex-col">
                    <h2 className="text-lg">
                        My name is 
                    </h2>
                    <span className="text-3xl ">
                        Rousse Bidon
                    </span>
                    </div>
                    <div className="text-xl ">
                        <Typewriter
                         options={{
                            strings: ['Software Engineer.'],
                            autoStart: true,
                            loop: true,
                            pauseFor:200000
                          }}/>
                    </div>
                </div>
                {/* Learn More Button */}
                <a href={`works`}>
                    <button className="btn  text-black outline font-bold py-2 px-4 rounded-full hover:outline-dashed">
                        View My Works
                    </button>
                </a>
                </div>
                <div className="MainSectionImage">
                    {/* Portifolo Image */}
                    <div className="cicle-square flex justify-center">
                    <div className="circle-photo bg-yellow-100 rounded-full p-5" 
                    style={{
                        width: "350px", 
                        height: "350px"
                    }}
                    >
                    {/* <div class="photo">
                        <img class="imgMe" src="./resources/images/emojimeSmile.png" alt="About-Image"style="width:500px;              "> */}
                  </div>
                </div>
                </div>
                {/* Learn More Button */}
                {/* <div>
                    <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Learn More
                    </button>
                </div> */}
            </section>
        </div>
    )
}
export default Home