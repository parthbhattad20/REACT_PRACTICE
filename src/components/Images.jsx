import React from "react";
import image1 from "./image1.jpeg"
import image2 from "./image2.jpeg"
import image3 from "./image3.jpeg"
import image4 from "./image4.jpeg"
import image5 from "./image5.jpeg"
import image6 from "./image6.jpeg"
import image7 from "./image7.jpeg"
import image8 from "./image8.jpeg"
import image9 from "./image9.jpeg"
import image10 from "./image10.jpeg"






const Images = () => {
    return (

     

<div class="grid grid-cols-2 md:grid-cols-3 gap-4 text-center bg-black">
    <div className="mt-10">
        <h1 className=" text-[#FF0000]" >APKI BHT ACHI PHOTOS</h1>
    </div>
   
    <div>
        <img class="h-auto max-w-full rounded-lg" src={image1} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={image2} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={image3} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={image4} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={image5} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={image6} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={image7} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={image8} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={image9} alt=""/>
    </div>
    <div>
        <img class="h-auto max-w-full rounded-lg" src={image10} alt=""/>
    </div>


    <div className="mt-10 ">
        <h1 className="text-[#FF0000] text-3xl">Thank You For Everything Shona Bacha</h1>
    </div>


</div>

    );
};

export default Images;