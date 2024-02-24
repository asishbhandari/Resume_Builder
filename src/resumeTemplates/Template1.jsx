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

export default function Template1({ data }) {
    const { personalInfo, workExperience, education, skills } = data;
    return (
        <div className="mx-auto my-4 p-4 rounded-xl bg-gradient-to-b from-blue-500 to-blue-200 w-a4 h-a4">
            <div className="bg-white p-5 flex flex-col rounded-md w-full h-full ">

                <div className="px-8 flex space-x-8 mt-8 justify-center items-center">
                    <img src={personalInfo.userImage} alt="temp1user" className="rounded-full w-32 h-32 object-contain" />
                    <div className="grow flex flex-col space-y-2">
                        <h1 className='font-bold'>{`${personalInfo.firstName} ${personalInfo.lastName}`}</h1>
                        <h3>{personalInfo.jobTitle}</h3>
                        <span >
                            <EmailIcon className='text-blue-500 mt-1' /> {`${personalInfo.email}`}
                        </span>
                        <span>
                            <LocationOnIcon className='text-blue-500 mt-1' /> {`${personalInfo.address} ${personalInfo.city} ${personalInfo.state} ${personalInfo.postalCode}`}
                        </span>
                        <span>
                            <CallIcon className='text-blue-500 mt-1' /> {`+91 ${personalInfo.mobile}`}
                        </span>
                    </div>
                </div>


                <div className='px-8 flex flex-col mt-7'>
                    <span className='flex items-center space-x-3 text-blue-500'>
                        <BadgeIcon className='mt-1'/>
                        <span className='text-xl font-semibold'>Profile</span>
                    </span>
                    <p>{personalInfo.profile}</p>
                </div>


                <div className='px-8 flex flex-col mt-7'>
                    <span className='flex items-center space-x-3 text-blue-500'>
                        <BusinessCenterIcon  className='mt-1'/>
                        <span className='text-xl font-semibold'>Professional Experience</span>
                    </span>
                    <div>
                        {workExperience.workExp.map((work, index) => (
                            <div key={`${index} ${work.startYear}`} className='grid grid-cols-3'>
                                <span>{`${work.startYear} - ${work.endYear}`}</span>
                                <span>{work.jobTitle}</span>
                                <span className='justify-self-end'>{work.organizationName}</span>
                            </div>
                        ))
                        }
                    </div>
                </div>
                <div className='px-8 flex flex-col mt-7'>
                    <span className='flex items-center space-x-3 text-blue-500'>
                        <SchoolIcon className='mt-1' />
                        <span className='text-xl font-semibold'>Education</span>
                    </span>
                    <div >
                        {
                            education.education.map((edu, index) => (
                                <div key={`${index} ${edu.startYear}`} className='grid grid-cols-3'>
                                    <span>{`${edu.startYear} - ${edu.endYear}`}</span>
                                    <span>{`${edu.type}/${edu.degree}`}</span>
                                    <span className='justify-self-end'>{edu.university}</span>
                                </div>
                            ))
                        }
                    </div>
                </div>

                <div className='px-8 flex flex-col mt-7  '>
                    <span className='flex items-center space-x-3 text-blue-500'>
                        <PsychologyIcon className='mt-1' />
                        <span className='text-xl font-semibold'>Skills</span>
                    </span>
                        {
                            skills.skills.map((skill, index) => (
                                <div className='flex space-x-2 items-center justify-between' key={`${index}+${skill.skillLevel}`}>
                                    <span className='grow'>{skill.skill}</span>
                                    <Rating
                                        name="read-only"
                                        value={skill.skillLevel} readOnly
                                        size="small"
                                        icon={<CircleIcon className='text-blue-500' fontSize="inherit" />}
                                        emptyIcon={<RadioButtonUncheckedIcon className='text-blue-500' fontSize="inherit" />} />
                                </div>
                            ))
                        }
                </div>
            </div>
            <div className='grow'></div>
        </div>
    )
}