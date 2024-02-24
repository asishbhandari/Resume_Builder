import coverPic from "../assets/cover1.svg";
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function AboutUs(){
    return (
        <>
            <div className="max-w-screen-lg mx-auto px-8 flex flex-col mt-5 space-y-4 lg:space-x-4 lg:mt-10 lg:flex-row ">
                <div className="w-4/6 mx-auto px-4 lg:hidden" >
                    <img src={coverPic} alt="cover pic" className="w-full h-full object-contain"/>
                </div>
                <div className="flex flex-col space-y-6 lg:w-3/5 lg:px-4 w-full mx-auto px-2">
                    <h1 className="text-3xl font-bold ">Resume Builder</h1>
                    <p className="italic"> we are on a mission to revolutionize the way you navigate your job search journey. 
                        We understand the challenges and frustrations that come with crafting compelling application materials 
                        and standing out in a competitive job market. That's why we've harnessed the power of innovation to create 
                        a platform that empowers you to present your best self with confidence and ease. Our team is made up of 
                        two passionate individuals who believe that job seekers deserve a better way to showcase their skills 
                        and achievements. With backgrounds in development, design, and a shared commitment to excellence, we've 
                        come together to create a platform that brings innovation and simplicity to the job search process. 
                        We are not just about templates – we're about empowering you to craft a personal brand that resonates 
                        with employers. Our tools go beyond the surface, allowing you to customize every detail of your application
                        materials to reflect your unique identity. But it's not just about design; it's about guidance. 
                        We provide you with valuable tips, insights into industry trends, and a supportive community that's 
                        here to help you succeed.
                    </p>
                    
                </div>
                <div className="lg:w-2/5 px-4 hidden lg:block" >
                    <img src={coverPic} alt="cover pic" className="w-full h-full object-contain"/>
                </div>
            </div>
            <div className="max-w-screen-lg mx-auto px-8 flex flex-col mt-16 space-y-4">
                <h4 className="font-semibold text-lg mx-auto px-4">Share with Friends</h4>
                <div className=" flex space-x-4 mx-auto px-4">
                    <FacebookIcon className="text-blue-500 scale-125"/>
                    <WhatsAppIcon className="text-green-500 scale-125"/>
                    <LinkedInIcon className="text-blue-500 scale-125"/>
                </div>
            </div>
        </>
    )
}