import Navigation from "../components/Navigation";
import PersonalInfo from "../components/PersonalInfo";
import Skill from "../components/Skill";
import WorkExp from "../components/WorkExp";
import Education from "../components/Education";
import { Route, Routes,Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatFformError } from "../store/resumeSlice";

export default function Details(){
    const dispatch = useDispatch();
    const formErrorState= useSelector(state=> state.resume)

    // current tab local state to keep track of the active sideNav 
    const [currentTab, setCurrentTab]= useState('Personal Info');
    const handleSideNavClick=(event)=>{
        if(event.target.id === 'Personal Info') {
            if(formErrorState.personalInfo?.isValid === true) setCurrentTab('Personal Info')
        }
        if(event.target.id === 'Work Experience') {
            if(formErrorState.workExperience?.isValid === true) setCurrentTab('Work Experience')
        }
        if(event.target.id === 'Education') {
            if(formErrorState.education?.isValid === true) setCurrentTab('Education')
        }
        if(event.target.id === 'Skills') {
            if(formErrorState.skills?.isValid === true) setCurrentTab('Skills')
        }
    }
    return(
        <>
        <div className="max-w-screen-xl mx-auto p-8 text-sm md:text-lg">
            <div className="flex flex-col justify-center items-center space-y-4 md:flex-row md:items-start">
                <div className=" w-full md:w-1/3 md:px-8 md:mt-4">
                    <div className="w-full sm:w-1/3 mx-auto md:w-full border-b  py-2 border-gray-200 drop-shadow">
                            <span id={'Personal Info'} 
                                className={currentTab === 'Personal Info' ? ' ps-5 border-l-2 border-blue-500 text-blue-500':'  ps-5 border-l-2'} 
                                onClick={handleSideNavClick}>
                                Personal Info</span>
                    </div>
                    <div className="w-full sm:w-1/3 mx-auto md:w-full border-b py-2 border-gray-200 drop-shadow">
                        <span id={'Work Experience'}
                                className={currentTab === "Work Experience" ?'ps-5  border-l-2 border-blue-500 text-blue-500':'ps-5 border-l-2'}
                                onClick={handleSideNavClick}>
                            Work Experience</span>
                    </div>
                    <div className="w-full sm:w-1/3 mx-auto md:w-full border-b py-2 border-gray-200 drop-shadow">
                        <span id={'Education'} 
                                className={currentTab === "Education"?'ps-5  border-l-2 border-blue-500 text-blue-500':'ps-5 border-l-2'}
                                onClick={handleSideNavClick}>
                            Education</span>
                    </div>
                    <div className="w-full sm:w-1/3 mx-auto md:w-full border-b py-2 border-gray-200 drop-shadow">
                        <span id={'Skills'} 
                                className={currentTab === "Skills" ? 'ps-5  border-l-2 border-blue-500 text-blue-500':'ps-5 border-l-2'}
                                onClick={handleSideNavClick}>
                            Key Skills</span>
                    </div>
                </div>

                <div className="w-full md:w-2/3 mx-auto">
                    {
                        currentTab === "Personal Info" && <PersonalInfo setCurrentTab={setCurrentTab} />
                    }
                    {
                        currentTab === "Work Experience" && <WorkExp setCurrentTab={setCurrentTab}/>
                    }
                    {
                        currentTab === "Education" &&  <Education setCurrentTab={setCurrentTab} />
                    }
                    {
                        currentTab === "Skills" && <Skill setCurrentTab={setCurrentTab} />
                    }             
                </div>
            </div>
        </div>
        </>
    )
}