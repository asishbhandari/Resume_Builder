import { MenuItem, TextField  } from "@mui/material";
import { useFieldArray, useForm } from "react-hook-form";
import DeleteIcon from '@mui/icons-material/Delete';
import { addSkills, updatFformError } from "../store/resumeSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { useState } from "react";
import {skillLevelTypes} from "../constants/constantOption"

const Skill=({setCurrentTab})=>{

    // using UseSelector hook to use global state
    const state= useSelector(state=> state.resume.skills);
    const dispatch= useDispatch();

    // useNavigate hook used to link pages using routes of browser router
    const navigate = useNavigate(); 

    const [dynamicSkills, setDynamicSkills]= useState(state.skills)
    
    // useForm Hook is used to hanfle form submission, validation and form state error handling
    const { register, handleSubmit, formState:{errors}, control} = useForm({
        defaultValues:{
            skills: dynamicSkills,
    }
    });

    // useFeildArray is used to take dynamic input feilds
    const {fields, append, remove } = useFieldArray({
        control,
        name: "skills",
    })

    const handleBackTabs= ()=>{
        setCurrentTab("Education");
    }

    // on submitting the form the state is updated using required actions
    const hadleSkillsSubmit= (event)=>{
        event.isValid =true;
        dispatch(addSkills(event))
        dispatch(updatFformError());
        dispatch(updatFformError());
        navigate('/preview');
    }


    return(
        <div className="border drop-shadow-sm p-4 sm:p-10">
            <div className=" flex flex-col justify-center">
                <h2 className="pb-4 font-semibold text-2xl border-b mb-2">Key Skills</h2>
                <form onSubmit={handleSubmit(hadleSkillsSubmit)} noValidate >
                {
                    fields.map((item, index)=>(
                    <div key={item.id} className=" relative pt-8">
                        <div className="flex space-x-6 pb-10">
                                <TextField {...register(`skills.${index}.skill`, 
                                            { required: "*required",minLength: 2 })} 
                                            label="Skill" className="grow w-full"
                                            defaultValue={dynamicSkills ? dynamicSkills[index]?.skill : ""}
                                            error={errors ? Boolean(errors?.skills?.[index]?.skill): false}
                                            helperText={errors ? errors?.skills?.[index]?.skill?.message: ""}
                                            />
                                <TextField {...register(`skills.${index}.skillLevel`, 
                                            { required: "*required",minLength: 2 })} 
                                            label="Skill Level" className="grow w-full" select
                                            defaultValue={dynamicSkills ? dynamicSkills[index]?.skillLevel : ""}
                                            error={errors ? Boolean(errors?.skills?.[index]?.skillLevel): false}
                                            helperText={errors ? errors?.skills?.[index]?.skillLevel?.message: ""}
                                    >
                                    {skillLevelTypes.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                ))}
                                </TextField>
                        </div>
                        <DeleteIcon className="absolute top-0 right-0 cursor-pointer" onClick={()=> remove(index)}/>
                    </div>
                    ))
                }
                <button type="button" className="text-blue-500 flex justify-center" onClick={()=>append()} >Add New</button>
                <div className="border-t flex justify-end pt-2 space-x-4">
                    <Button type="button" variant="outlined"  className="w-24" onClick={handleBackTabs}>Back</Button>
                    <Button type="submit" variant="contained" className="w-24" >Preview </Button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Skill

{/* <Link to="/preview"></Link> */}