import defaultuserImage from "../assets/userimg.png"
import { useRef, useState } from "react";
import TextField from '@mui/material/TextField';
import { useForm } from "react-hook-form";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addPersonalInfo, updatFformError } from "../store/resumeSlice";


const PersonalInfo = ({ setCurrentTab }) => {

    // using UseSelector hook to use global state
    const state = useSelector(state => state.resume.personalInfo);
    const [personalInfoState, setPersonalInfoState]= useState(state)

    // useForm Hook is used to hanfle form submission, validation and form state error handling
    const { register, handleSubmit, formState: { errors }, } = useForm({
        defaultValues: state,
    });

    const dispatch = useDispatch();

    const [inputserImage, setUserImage] = useState(personalInfoState ? personalInfoState?.userImage :defaultuserImage)
    const imageInputRef = useRef(null);

    // creating a ref of input type file to take input imgae on click on the img tag
    const hangleImageInput = () => {
        imageInputRef.current.click();
    }

    // storing input image file in local state variable
    const handleChangeUserImage = (event) => {
        const inputImage = event.target.files[0];
        setUserImage(URL.createObjectURL(inputImage))
    }

    // on submitting the form the state is updated using required actions
    const hadlePersonalInfoSubmit = (event) => {
        event.isValid = true;
        event.userImage = inputserImage;
        dispatch(addPersonalInfo(event))
        dispatch(updatFformError());
        setCurrentTab("Work Experience");
        dispatch(updatFformError());
    }

    return (
        <div className="border drop-shadow-sm p-2 md:p-10">
            <form onSubmit={handleSubmit(hadlePersonalInfoSubmit)} noValidate>
                <div className=" flex flex-col  justify-center ps-2">
                    <img src={inputserImage} alt="userimg"
                        className="w-36 h-36 rounded-full border-2 object-contain cursor-pointer"
                        onClick={hangleImageInput} />
                    <h6 onClick={hangleImageInput} className="cursor-pointer text-blue-500">change Profile Picture</h6>
                    <input type="file" ref={imageInputRef} onChange={handleChangeUserImage} className="hidden"/>
                </div>

                <div className=" mt-5">
                    <div className="flex space-x-6 pb-10">
                        <div className="w-full">
                            <TextField {...register("firstName",
                                { required: "First Name is required", minLength: 2 })}
                                label="First Name" className="grow w-full"
                                error={!!errors.firstName}
                                helperText={errors.firstName?.message}
                            />
                        </div>
                        <div className="w-full">
                            <TextField {...register("lastName",
                                { required: "Last Name is required", minLength: 2 })}
                                label="Last Name" className="grow w-full"
                                error={!!errors.lastName}
                                helperText={errors.lastName?.message}
                            />
                        </div>
                    </div>
                    <div className="flex pb-10 ">
                        <div className="w-full">
                            <TextField {...register("jobTitle",
                                { required: "*required" })}
                                label="Job Title" className="w-full"
                                error={!!errors.jobTitle}
                                helperText={errors.jobTitle?.message}
                            // value={state.jobTitle}
                            />
                        </div>
                    </div>
                    <div className="flex space-x-6 pb-10">
                        <div className="w-full">
                            <TextField {...register("email",
                                {
                                    required: "email is required",
                                    pattern: {
                                        value: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
                                        message: "invalid email address"
                                    }
                                })}
                                label="email" className="grow w-full"
                                error={!!errors.email}
                                helperText={errors.email?.message}
                            // value={state.email}
                            />
                        </div>
                        <div className="w-full">
                            <TextField {...register("mobile",
                                {
                                    required: "contact no is required",
                                    valueAsNumber: true,
                                    min: {
                                        value: 6000000000,
                                        message: "invalid phone no"
                                    },
                                    max: {
                                        value: 10000000000,
                                        message: "invalid phone no"
                                    },
                                })}
                                label="Mobile" type="number" className="grow w-full"
                                error={!!errors.mobile}
                                helperText={errors.mobile?.message}
                            // value={state.mobile}
                            />
                        </div>
                    </div>
                    <div className="flex pb-10 ">
                        <div className="w-full">
                            <TextField {...register("address",
                                { required: "*required" })}
                                label="Address" className="w-full"
                                error={!!errors.address}
                                helperText={errors.address?.message}
                            // value={state.address}
                            />
                        </div>
                    </div>
                    <div className="flex space-x-6 pb-10">
                        <div className="w-full">
                            <TextField {...register("city", {
                                required: "*required"
                            })}
                                label="City" className="grow w-full"
                                error={!!errors.city}
                                helperText={errors.city?.message}
                            // value={state.city}
                            />
                        </div>
                        <div className="w-full">
                            <TextField {...register("state", {
                                required: "*required"
                            })}
                                label="State" className="grow w-full"
                                error={!!errors.state}
                                helperText={errors.state?.message}
                            // value={state.state}
                            />
                        </div>
                    </div>

                    <div className="flex space-x-6 pb-10">
                        <div className="w-full">
                            <TextField type="number" {...register("postalCode", { required: "*required", valueAsNumber: true, })}
                                label="PostalCode" className="w-full"
                                error={!!errors.postalCode}
                                helperText={errors.postalCode?.message}
                            // value={state.postalCode}
                            />
                        </div>
                        <span className="w-full"></span>
                    </div>
                    <div className="pb-10">
                        <TextField {...register("profile", { required: "*required" })}
                            className="w-full" label="Profile" multiline rows={5}
                            error={!!errors.profile}
                            helperText={errors.profile?.message}
                        // value={state.profile}
                        />
                    </div>
                    <div className="border-t flex justify-end pt-2 space-x-4">
                        <Button variant="outlined" disabled className="w-24">Back</Button>
                        <Button type="submit" variant="contained" className="w-24">Next</Button>
                    </div>
                </div>
            </form>


        </div>

    )
}

export default PersonalInfo;