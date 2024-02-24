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

export default function Template3({data}) {
    const {personalInfo, workExperience, education ,skills} = data;

    return (
        <div className=" flex w-a4 h-a4 ">
            
            <div className="w-2/5 flex py-4 flex-col mx-auto px-14 space-y-6 text-white bg-pink-800 h-full">
                <div>
                    <h1 className='font-bold text-3xl mt-5'>{`${personalInfo.firstName} ${personalInfo.lastName}`}</h1>
                    <h3 className='text-xl'>{personalInfo.jobTitle}</h3>
                </div>
                <img src={personalInfo.userImage} alt="temp1user" className="w-44 object-contain" />
                <div className='flex flex-col'>
                    <span >
                        <EmailIcon className='mt-1' /> {`${personalInfo.email}`}
                    </span>
                    <span>
                        <CallIcon className='mt-1'  /> {`+91 ${personalInfo.mobile}`}
                    </span>
                    <span>
                        <LocationOnIcon className='mt-1' /> {`${personalInfo.address} ${personalInfo.city} ${personalInfo.state} ${personalInfo.postalCode}`}
                    </span>
                </div>
                <div className='flex flex-col mt-5'>
                    <span className='flex items-center space-x-3'>
                        <BadgeIcon className='mt-1'/>
                        <span className='text-xl font-semibold'>Profile</span>
                    </span>
                    <p>{personalInfo.profile}</p>
                </div>
            </div>


            <div className="w-3/5 flex py-4 flex-col mx-auto px-14 space-y-6 bg-gray-200 h-full">
                <div className='mt-5'>
                    <span className='flex items-center space-x-3 pb-1'>
                        <BusinessCenterIcon className='mt-1' />
                        <span className='text-xl font-semibold'>Professional Experience</span>
                    </span>
                    <div>
                    {
                        workExperience.workExp.map((work, index)=>(
                            <div key={`${index} ${work.startYear}`}  className=''>
                                <div className='pt-1'> 
                                    <span className='font-semibold pe-2'>{work.organizationName}</span>
                                    <span className=''>{work.jobTitle}</span>
                                </div>
                                <div className=''>
                                    <span className=' pr-2'>{`${work.startYear} - ${work.endYear}`}</span>
                                </div>
                            </div>
                        ))
                    }
                    </div>
                </div>
                <div className=''>
                    <span className='flex items-center space-x-3 '>
                        <SchoolIcon className='mt-1'/>
                        <span className='text-xl font-semibold'>Education</span>
                    </span>
                    <div >
                    {
                        education.education.map((edu, index)=>(
                            <div key={`${index} ${edu.startYear}`} className='py-2'>
                                <h4 className='font-semibold'>{`${edu.type}/${edu.degree}`}</h4>
                                <h4>{edu.university}</h4>
                                <h6 className=' pr-2'>{`${edu.startYear} - ${edu.endYear}`}</h6>
                            </div>
                        ))
                    }
                    </div>
                </div>
                <div className='flex flex-col '>
                    <span className='flex items-center space-x-3 '>
                        <PsychologyIcon className='mt-1'/>
                        <span className='text-xl font-semibold'>Skills</span>
                    </span>
                    <div className='flex flex-col '>
                        {
                            skills.skills.map((skill, index)=> (
                                <div className='flex space-x-2 items-center justify-between' key={`${index}+${skill.skillLevel}`}>
                                    <span>{skill.skill}</span>
                                    <Rating 
                                    name="language-rating"
                                    value={skill.skillLevel}
                                    readOnly
                                    size="small"
                                    icon={<CircleIcon className='text-black' fontSize="inherit" />}
                                    emptyIcon={<RadioButtonUncheckedIcon className='text-black' fontSize="inherit"  />}
                                    />
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}