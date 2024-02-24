import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navigation=()=> {
    const navigate= useNavigate();

    // currentNav state to keep track of the active nav link
    const [currentNav, setCurrentNav]= useState('');
    const handleNavClick=(event)=>{
        if(event.target.id === 'ResumeTemplate') {
            setCurrentNav('ResumeTemplate')
        }
        if(event.target.id === 'MyResume') {
           setCurrentNav('MyResume')
        }
        if(event.target.id === 'AboutUs') {
            setCurrentNav('AboutUs')
        }
    }
    return (
        <>
            <div className="flex h-14 items-center space-x-2 md:space-x-14 border-2 border-gray-200 py-2 ps-4 pe-4 md:px-14 shadow">
                <div className="flex h-full flex-start items-center cursor-pointer">
                    <img src="/siteicon.png" alt="logo" className="h-full object-contain" onClick={()=>navigate('/')} />
                </div>
                <div className="grow"></div>
                <Link to="/"> 
                    <span id="ResumeTemplate" 
                        className={currentNav === 'ResumeTemplate' ? 'text-xs sm:text-base text-blue-500':'text-xs sm:text-base'} 
                        onClick={handleNavClick}>Resume Template</span> 
                </Link>
                <Link to="/myResume"> 
                    <span id="MyResume" 
                        className={currentNav === 'MyResume' ? 'text-xs sm:text-base text-blue-500':'text-xs sm:text-base'}
                        onClick={handleNavClick}>My Resumes</span>
                </Link>
                <Link to="/aboutUs"> 
                    <span id="AboutUs" 
                        className={currentNav === 'AboutUs' ? 'text-xs sm:text-base text-blue-500':'text-xs sm:text-base'}
                        onClick={handleNavClick}>About Us</span> 
                </Link>
                
            </div>
        </>
    )
}

export default Navigation