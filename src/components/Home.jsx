import React from "react";
import bgimg from "./bgimage.jpeg";


const Home = () => {
    return (
        <div
            name="home"
            className="h-screen w-full bg-cover bg-center relative"
            style={{
                backgroundImage: `url(${bgimg})`,
            }}
        >
            <div
                className="max-w-screen mx-auto flex flex-col h-full px-4 md:flex-row"
                style={{
                    backdropFilter: "blur(0px)",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                }}
            >
                <div className=" text-[#66F6F1] items-center flex flex-col mt-20 justify-center h-[200px] w-full">
                    <div>
                       
                            <h2 className=" text-3xl sm:text-7xl font-bold text-white mb-6 uppercase font-mono border-b ">
                                BUBU 
                            </h2>
                            <h2 className=" text-3xl sm:text-7xl font-bold text-white mb-6 uppercase font-mono border-b ">
                            &
                            </h2>
                        
                    </div>
                    <div>
                      
                            <h2 className=" mx-auto text-3xl sm:text-7xl font-bold text-white mb-6 uppercase font-mono border-b">
                           DUDU
                            </h2>
                        
                    </div>
                
                        <h1 className=" text-[#00FFFF] mx-auto text-4xl sm:text-7xl font-bold  mb-6 uppercase font-serifborder-b">
                           
                        </h1>
                 
                   
                    <div className=" bg-black fixed bottom-1 right-1 hover:opacity-100 transition duration-300">
                     
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;