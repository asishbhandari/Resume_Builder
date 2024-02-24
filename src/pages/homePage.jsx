import { useState } from "react";
import Navigation from "../components/Navigation";
import { templateDesign } from "../constants/templateDesign";
import { Link } from "react-router-dom";
import { useTemplate } from "../store/resumeSlice";
import { useDispatch } from "react-redux";

export default function Home() {
    const [mouseOverTemplate, setMouseOverTemplate] = useState(false)
    const dispatch= useDispatch();

    // dispatch useTemplate action is used to keep track of the template used for resume
    const handleUseTemplate=(event)=>{
        dispatch(useTemplate(event.target.id))
    }

    return (
        <>
            <div className="bg-slate-100 h-screen">
                <div className="max-w-7xl mx-auto p-4 ">
                    <h1 className="mt-10 text-4xl font-bold">Templates</h1>
                    <p className="mb-10 italic py-2">Select a template to get started</p>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 justify-items-center	">
                        {
                            templateDesign.map((template, i) => (
                                <div
                                    key={template.name}
                                    className="relative"
                                    onMouseOver={() => {
                                        setMouseOverTemplate(template.name)
                                    }}
                                    onMouseOut={() => {
                                        setMouseOverTemplate(false)
                                    }}
                                >
                                    <img src={template.image} alt={template.name} className="w-80 h-[420px] object-contain hover:opacity-50" />
                                    {
                                        mouseOverTemplate === template.name ?
                                            (
                                                <div className="">
                                                    <Link to="/details">
                                                        <span
                                                            onClick={handleUseTemplate} id={template.name}
                                                            className="bg-blue-500 absolute left-1/2 top-1/2 -translate-x-1/2 rounded-md p-4 text-white"
                                                        >
                                                            Use Template
                                                        </span>
                                                    </Link>
                                                </div>
                                            )
                                            :
                                            (
                                                <div>
                                                </div>
                                            )
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}