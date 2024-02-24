import { useSelector } from "react-redux";
import Navigation from "../components/Navigation";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function MyResume(){
    // grabing saved resume store till now to display from global using useSelector hook
    const resumes= useSelector(state=> state.resume.myResumes)
    const [hasSavedResume, setHasSavedResume] = useState(false);


    useEffect(()=>{
        if(resumes.length !==0) setHasSavedResume(true)
        else setHasSavedResume(false)
    },[resumes,hasSavedResume])

    const navigate = useNavigate();

    return(
        <div>
            {
                hasSavedResume ? (
                    <div className="grid grid-cols-3 gap-10 mx-auto p-8">
                        {
                            resumes.map((resume, index)=> (
                                <div key={index}>
                                    <img src={resume} alt="saved resume" />
                                </div>
                            ))
                        }
                    </div>
                )
                :
                (   
                    <div className="flex flex-col space-y-2  items-center mt-8">
                        <h1 className="text-2xl">No Saved Resume !!</h1>
                        <h3 onClick={()=> navigate('/')} className="text-blue-500 text-lg cursor-pointer">Start Building your resume</h3>
                    </div>
                )
            }
        </div>
    )
}