import { MenuItem, TextField } from "@mui/material";
import { useFieldArray, useForm } from "react-hook-form";
import DeleteIcon from '@mui/icons-material/Delete';
import { addWorkExperience, updatFformError } from "../store/resumeSlice";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "@mui/material";
import { useState } from "react";

const WorkExp=({setCurrentTab})=>{

    // using UseSelector hook to use global state
    const state= useSelector(state=> state.resume.workExperience);
    const dispatch= useDispatch();

    // useForm Hook is used to hanfle form submission, validation and form state error handling
    const [dynamicWorkExp, setDynamicWorkExp]= useState(state.workExp)
    const { register, handleSubmit, formState:{errors}, control, watch} = useForm(
        {
        defaultValues:{
            workExp:dynamicWorkExp
        }
        }
    );
    // useFeildArray is used to take dynamic input feilds
    const {fields, append, remove } = useFieldArray({
        name: "workExp",
        control,
    })
    
    const handleBackTabs= ()=>{
        setCurrentTab("Personal Info");
    }
    
    // on submitting the form the state is updated using required actions
    const hadleWorkExpSubmit= (event)=>{
        event.isValid =true;
        dispatch(addWorkExperience(event))
        dispatch(updatFformError());
        setCurrentTab("Education");
        dispatch(updatFformError());
    }

    const monthOption = [
        { value: 'Jan', label: 'Jan'},
        { value: 'Feb', label: 'Feb'},
        { value: 'Mar', label: 'Mar'},
        { value: 'Apr', label: 'Apr'},
        { value: 'May', label: 'May'},
        { value: 'Jun', label: 'Jun'},
        { value: 'Jul', label: 'Jul'},
        { value: 'Aug', label: 'Aug'},
        { value: 'Sept', label: 'Sept'},
        { value: 'Oct', label: 'Oct'},
        { value: 'Nov', label: 'Nov'},
        { value: 'Dec', label: 'Dec'},
    ]
    const yearsOption = [
        { value: '2024', label: '2024'},
        { value: '2023', label: '2023'},
        { value: '2022', label: '2022'},
        { value: '2021', label: '2021'},
        { value: '2020', label: '2020'},
        { value: '2019', label: '2019'},
        { value: '2018', label: '2018'},
        { value: '2017', label: '2017'},
        { value: '2016', label: '2016'},
        { value: '2015', label: '2015'},
        { value: '2014', label: '2014'},
        { value: '2013', label: '2013'},
        { value: '2012', label: '2012'},
        { value: '2011', label: '2011'},
        { value: '2010', label: '2010'},
        { value: '2009', label: '2009'},
        { value: '2008', label: '2008'},
        { value: '2007', label: '2007'},
        { value: '2006', label: '2006'},
        { value: '2005', label: '2005'},
        { value: '2004', label: '2004'},
        { value: '2003', label: '2003'},
        { value: '2002', label: '2002'},
        { value: '2001', label: '2001'},
    ]

    return(
        <div className="border drop-shadow-sm p-4 sm:p-10">
            <div className=" ">
                <h2 className="pb-4 font-semibold text-2xl border-b ">Work Experience</h2>
                <form onSubmit={handleSubmit(hadleWorkExpSubmit)} noValidate>
                {
                    fields.map((item, index)=>(
                    <div key={item.id} className="flex flex-col justify-center relative pb-5">
                        <h6 className="pb-3">{`Experience ${index+1}`}</h6>
                        <div className="flex space-x-6 pb-5">
                            <div className="w-full">
                                <TextField {...register(`workExp.${index}.jobTitle`, 
                                            { required: "Job Title is required" })} 
                                            label="Job Title" className="grow w-full"
                                            error={errors ? Boolean(errors?.workExp?.[index]?.jobTitle): false}
                                            helperText={errors ? errors?.workExp?.[index]?.jobTitle?.message: ""}
                                            />
                            </div>
                            <div className="w-full">
                                <TextField {...register(`workExp.${index}.organizationName`, 
                                            { required: "organization Name is required",minLength: 2 })}
                                            label="Organization Name" className="grow w-full" 
                                            error={errors ? Boolean(errors?.workExp?.[index]?.organizationName): false}
                                            helperText={errors ? errors?.workExp?.[index]?.organizationName?.message: ""}
                                            />
                            </div>
                        </div>
                        <div className="flex flex-col space-y-4 sm:space-y-0 sm:flex-row sm:space-x-6 sm:pb-10">
                            <div className="w-full">
                                <div id="startDate" className="flex space-x-2">
                                    <div id="startMonth" className="grow">
                                        <TextField {...register(`workExp.${index}.startMonth`, 
                                                    { required: "*required"})} 
                                                    label="Start Month" className="grow w-full" select 
                                                    error={errors ? Boolean(errors?.workExp?.[index]?.startMonth): false}
                                                    helperText={errors ? errors?.workExp?.[index]?.startMonth?.message: ""}
                                                    defaultValue={dynamicWorkExp ? dynamicWorkExp[index]?.startMonth : ""}
                                            >
                                            {monthOption.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>))}
                                        </TextField>
                                    </div>
                                    <div id="startYear" className="grow">
                                        <TextField {...register(`workExp.${index}.startYear`, 
                                                    { required: "*required" })} 
                                                    label="Start Year" className="grow w-full" select 
                                                    error={errors ? Boolean(errors?.workExp?.[index]?.startYear): false}
                                                    helperText={errors ? errors?.workExp?.[index]?.startYear?.message: ""}
                                                    defaultValue={dynamicWorkExp ? dynamicWorkExp[index]?.startYear : ""}
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
                                        <TextField {...register(`workExp.${index}.endMonth`, 
                                                    { required: "*required"})} 
                                                    label="end Month" className="grow w-full" select 
                                                    error={errors ? Boolean(errors?.workExp?.[index]?.endMonth): false}
                                                    helperText={errors ? errors?.workExp?.[index]?.endMonth?.message: ""}
                                                    defaultValue={dynamicWorkExp ? dynamicWorkExp[index]?.endMonth : ""}
                                            >
                                            {monthOption.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                {option.label}
                                            </MenuItem>))}
                                        </TextField>
                                    </div>
                                    <div id="endYear" className="grow">
                                        <TextField {...register(`workExp.${index}.endYear`, 
                                                    { required: "*required"})} 
                                                    label="end Year" className="grow w-full" select 
                                                    error={errors ? Boolean(errors?.workExp?.[index]?.endYear): false}
                                                    helperText={errors ? errors?.workExp?.[index]?.endYear?.message: ""}
                                                    defaultValue={dynamicWorkExp ? dynamicWorkExp[index]?.endYear : ""}
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
                        <DeleteIcon className="absolute top-0 right-0 cursor-pointer" onClick={()=> remove(index)}/>
                    </div>
                    ))
                }
                <button type="button" className="text-blue-500 flex justify-center" onClick={()=>append()} >Add New</button>
                <div className="border-t flex justify-end pt-2 space-x-4">
                    <Button type="button" variant="outlined"  className="w-24" onClick={handleBackTabs}>Back</Button>
                    <Button type="submit" variant="contained" className="w-24">Next</Button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default WorkExp