import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import BadgeIcon from '@mui/icons-material/Badge';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import SchoolIcon from '@mui/icons-material/School';
import LanguageIcon from '@mui/icons-material/Language';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CardMembershipIcon from '@mui/icons-material/CardMembership';
import CircleIcon from '@mui/icons-material/Circle';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import { Rating } from '@mui/material';

export default function Template2({data}){
    const {personalInfo, workExperience, education ,skills} = data;
    return(
        <div className="mx-auto my-4 p-4 rounded-xl bg-gradient-to-b from-orange-500 to-orange-200 w-a4 h-a4">
            <div className="bg-white p-5 rounded-md font-mono w-full h-full">

                <div className="flex flex-col px-8 mt-8">
                    <h1 className='font-bold text-3xl pb-1'>{`${personalInfo.firstName} ${personalInfo.lastName}`}</h1>
                    <h3 className='text-xl pb-1'>{personalInfo.jobTitle}</h3>
                    <div className='flex space-x-4 pb-1'>
                        <span >
                            <EmailIcon className='text-orange-500 mt-1' /> {`${personalInfo.email}`}
                        </span>
                        <span>
                        <CallIcon className='text-orange-500 mt-1' /> {`+91 ${personalInfo.mobile}`}
                        </span>
                    </div>
                    <span className='pb-1'>
                        <LocationOnIcon className='text-orange-500 mt-1' /> {`${personalInfo.address} ${personalInfo.city} ${personalInfo.state} ${personalInfo.postalCode}`}
                    </span>
                </div>


                <div className='px-8 flex flex-col mt-7'>
                    <span className='flex items-center space-x-3 py-2 text-orange-500'>
                        <BadgeIcon className='mt-1' />
                        <span className='text-xl font-semibold'>Profile</span>
                    </span>
                    <p>{personalInfo.profile}</p>
                </div>


                <div className='px-8 flex flex-col mt-7'>
                    <span className='flex items-center space-x-3 text-orange-500 pb-1'>
                        <BusinessCenterIcon className='mt-1'/>
                        <span className='text-xl font-semibold'>Professional Experience</span>
                    </span>
                    {workExperience.workExp.map((work, index)=>(
                            <div key={`${index} ${work.startYear}`}  className='grid grid-cols-2'>
                                <span className='flex space-x-4' >
                                    <span className='font-semibold'>{work.organizationName}</span>
                                    <span>{work.jobTitle}</span>
                                </span>
                                <span className='justify-self-end text-orange-500 pr-2'>{`${work.startYear} - ${work.endYear}`}</span>
                            </div>
                        ))
                        }
                </div> 


                <div className='px-8 flex flex-col mt-7'>
                    <span className='flex items-center space-x-3 text-orange-500 pb-1'>
                        <SchoolIcon className='mt-1'/>
                        <span className='text-xl font-semibold'>Education</span>
                    </span>
                    <div>
                    {
                        education.education.map((edu, index)=>(
                            <div key={`${index} ${edu.startYear}`} className='flex pt-2 pb-1'>
                                <span className='w-3/5 flex space-x-4'> 
                                    <span className='font-semibold'>{`${edu.type}/${edu.degree}`}</span>
                                    <span>{edu.university}</span>
                                </span>
                                <span className='w-2/5 flex justify-end'>
                                    <span className='text-orange-500 pr-2'>{`${edu.startYear} - ${edu.endYear}`}</span>
                                </span>
                            </div>
                        ))
                    }
                    </div>
                </div>

                <div className='px-8 flex flex-col mt-7 '>
                    <span className='flex items-center space-x-3 text-orange-500'>
                        <PsychologyIcon className='mt-1'/>
                        <span className='text-xl font-semibold'>Skills</span>
                    </span>
                    {
                        skills.skills.map((skill, index)=> (
                            <div className='flex space-x-2 items-center justify-between' key={`${index}+${skill.skillLevel}`}>
                                <span>{skill.skill}</span>
                                <Rating 
                                    name="read-only" 
                                    value={skill.skillLevel} readOnly
                                    size="small"
                                    icon={<CircleIcon className='text-orange-500' fontSize="inherit" />}
                                    emptyIcon={<RadioButtonUncheckedIcon className='text-orange-500' fontSize="inherit"  />} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}