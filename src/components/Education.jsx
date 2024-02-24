import { MenuItem, TextField  } from "@mui/material";
import { useFieldArray, useForm } from "react-hook-form";
import DeleteIcon from '@mui/icons-material/Delete';
import { addEducation, updatFformError } from "../store/resumeSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { useState } from "react";
import {types, monthOption, yearsOption} from "../constants/constantOption"

const Education=({setCurrentTab})=>{

    // using UseSelector hook to use global state
    const state= useSelector(state=> state.resume.education);

    const dispatch= useDispatch();
    const [dynamicEducation, setDynamicEducation]= useState(state.education)
    
    // useForm Hook is used to hanfle form submission, validation and form state error handling
    const { register, handleSubmit, formState:{errors}, control} = useForm({
        defaultValues:{
            education: dynamicEducation,
        }
    });

    // useFeildArray is used to take dynamic input feilds
    const {fields, append, remove } = useFieldArray({
        control,
        name: "education"
    })

    const handleBackTabs= ()=>{
        setCurrentTab("Work Experience");
    }

    // on submitting the form the state is updated using required actions
    const hadleEducationSubmit= (event)=>{
        event.isValid =true;
        dispatch(addEducation(event))
        dispatch(updatFformError());
        setCurrentTab("Skills");
        dispatch(updatFformError());
    }
    return(
        <div className="border drop-shadow-sm p-4 sm:p-10">
            <div className=" flex flex-col justify-center">
                <h2 className="pb-2 font-semibold text-2xl border-b ">Education Details</h2>
                <form onSubmit={handleSubmit(hadleEducationSubmit)} noValidate>
                {
                    fields.map((item, index)=>(
                    <div key={item.id} className=" relative pt-12">
                        <div className="flex space-x-6 pb-5">
                            <div className="w-full">
                                <TextField {...register(`education.${index}.type`, 
                                            { required: "*required",minLength: 2 })} 
                                            label="Type" className="grow w-full" select 
                                            error={errors ? Boolean(errors?.education?.[index]?.type): false}
                                            helperText={errors ? errors?.education?.[index]?.type?.message: ""}
                                            defaultValue={dynamicEducation ? dynamicEducation?.[index]?.type : ""}
                                    >
                                    {types.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                                </TextField>
                            </div>
                        </div>
                        <div className="flex space-x-6 pb-5">
                            <div className="w-full">
                                <TextField {...register(`education.${index}.university`, 
                                            { required: "*required",minLength: 2 })} 
                                            label="University" className="grow w-full"
                                            error={errors ? Boolean(errors?.education?.[index]?.university): false}
                                            helperText={errors ? errors?.education?.[index]?.university?.message: ""}
                                            />
                            </div>
                            <div className="w-full">
                                <TextField {...register(`education.${index}.degree`, 
                                            { required: "*required",minLength: 2 })}
                                            label="Degree" className="grow w-full" 
                                            error={errors ? Boolean(errors?.education?.[index]?.degree): false}
                                            helperText={errors ? errors?.education?.[index]?.degree?.message: ""}
                                            />
                            </div>
                        </div>

                        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-6 sm:pb-10">
                            <div className="w-full">
                                <div id="startDate" className="flex space-x-2">
                                    <div id="startMonth" className="grow">
                                        <TextField {...register(`education.${index}.startMonth`, 
                                                    { required: "*required"})} 
                                                    label="Start Month" className="grow w-full" select 
                                                    error={errors ? Boolean(errors?.education?.[index]?.startMonth): false}
                                                    helperText={errors ? errors?.education?.[index]?.startMonth?.message: ""}
                                                    defaultValue={dynamicEducation ? dynamicEducation[index]?.startMonth : ""}
                                            >
                                            {monthOption.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>))}
                                        </TextField>
                                    </div>
                                    <div id="startYear" className="grow">
                                        <TextField {...register(`education.${index}.startYear`, 
                                                    { required: "*required" })} 
                                                    label="Start Year" className="grow w-full" select 
                                                    error={errors ? Boolean(errors?.education?.[index]?.startYear): false}
                                                    helperText={errors ? errors?.education?.[index]?.startYear?.message: ""}
                                                    defaultValue={dynamicEducation ? dynamicEducation[index]?.startYear : ""}
                                                >
                                            {yearsOption.map((option) => (
                                            <MenuItem key={option.value} value={option.value} >
                                                {option.label}
                                            </MenuItem>))}
                                        </TextField>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full">
                                <div id="endDate" className="flex space-x-2">
                                    <div id="endMonth" className="grow">
                                        <TextField {...register(`education.${index}.endMonth`, 
                                                    { required: "*required"})} 
                                                    label="end Month" className="grow w-full" select 
                                                    error={errors ? Boolean(errors?.education?.[index]?.endMonth): false}
                                                    helperText={errors ? errors?.education?.[index]?.endMonth?.message: ""}
                                                    defaultValue={dynamicEducation ? dynamicEducation[index]?.endMonth : ""}
                                            >
                                            {monthOption.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>))}
                                        </TextField>
                                    </div>
                                    <div id="endYear" className="grow">
                                        <TextField {...register(`education.${index}.endYear`, 
                                                    { required: "*required"})} 
                                                    label="end Year" className="grow w-full" select 
                                                    error={errors ? Boolean(errors?.education?.[index]?.endYear): false}
                                                    helperText={errors ? errors?.education?.[index]?.endYear?.message: ""}
                                                    defaultValue={dynamicEducation ? dynamicEducation[index]?.endYear : ""}
                                                >
                                            {yearsOption.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>))}
                                        </TextField>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <DeleteIcon className="absolute top-5 right-0 cursor-pointer" onClick={()=> remove(index)}/>
                    </div>
                    ))
                }
                <button type="button" className="text-blue-500 flex justify-center" onClick={()=>append()} >Add New</button>
                <div className="border-t flex justify-end pt-2 space-x-4">
                    <Button type="button" variant="outlined"  className="w-24" onClick={handleBackTabs}>Back</Button>
                    <Button type="submit" variant="contained" className="w-24" >Next</Button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default Education