import React, {useContext, useEffect, useState} from 'react';
import Image from 'next/image'
import LoadingGIF from "./../pages/images/loading.gif";


function LoadingScreen() {
    return (
        <div style={{backgroundColor:"#ffffff", 
        position: "fixed",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        transform: "-webkit-translate(-50%, -50%)",
        transform: "-moz-translate(-50%, -50%)",
        transform: "-ms-translate(-50%, -50%)",
        color:"white",
        }}>
        <div>
            <Image src={LoadingGIF} alt="Loading..." width={70} height={70}/>
        </div>
        </div>
    )
}

export default LoadingScreen