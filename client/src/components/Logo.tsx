import React  from "react";
import LogoImage from '../assets/logo.png';
const Logo = ()=>{
    return <div className="h-12 w-12 mr-2" >
        <img src={LogoImage} alt="logo"></img>
    </div>   
}

export default Logo;