import React from "react";

const MainSection =() => {
    return(
        <div>
            <section className="MainSectionContainer">
                Main Section/Holds Hello and Images
                <div>
                <div className="MainSectionTitle">Hello and Images
                    <h2>
                        Hello There!
                    </h2>
                    <span>
                        My name is Rousse Bidon
                    </span>
                    <span>FullStack Software Engineer</span>
                </div>
                </div>
                <span className="MainSectionImage">
                    {/* Portifolo Image */}
                </span>
                {/* Learn More Button */}
                <div>
                    <button className="btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                        Learn More
                    </button>
                </div>
            </section>
        </div>
    )
}
export default MainSection