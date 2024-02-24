import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Template1 from "../resumeTemplates/Template1";
import Template2 from "../resumeTemplates/Template2";
import Template3 from "../resumeTemplates/Template3";
import { Button, TextField } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import { jsPDF } from "jspdf";
import html2canvas from 'html2canvas';
import { removeStateData, updateMyResume } from "../store/resumeSlice";
import CompleteDownloadModal from "../Modals/CompleteDownloadModal";

export default function Preview() {
    const state = useSelector(state => state.resume)
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // used to save resume template made by the user
    let [templateImg, setTemplateImg] = useState("");

    const [modalOpen, setModalOpen]= useState(false);
    const handleOpen =()=> setModalOpen(true)
    const handleClose =()=> {
        setModalOpen(false)
        navigate('/')
    }

    const [pdfName, setPdfName] = useState("resume");
    const changeUserName = (event) => {
        setPdfName(event.target.value)
    }

    // creating a canvas of the template form filled by the user using html2canvas 
    const divToImage= async ()=>{
        const input = document.getElementById('download');
        const canvas = await html2canvas(input)
        setTemplateImg(canvas.toDataURL('image/png'))
    }

    // functionality to download pdf of resume using jsPdf 
    const handleDownloadFile=()=>{
        const input = document.getElementById('download');
        html2canvas(input).then((canvas)=>{
        setTemplateImg(canvas.toDataURL('image/png'))
        const doc = new jsPDF('p', 'px', 'a4',true);
        const docWidth =doc.internal.pageSize.getWidth();
        const docHeight = doc.internal.pageSize.getHeight();
        const imgWidth = canvas.width;
        const imgHeight = canvas.height;
        const ratio = Math.min(docWidth/imgWidth, docHeight/imgHeight);
        const imgX= (docWidth - imgWidth*ratio)/2;
        const imgY = 0;
        doc.addImage(templateImg,'PNG', imgX, imgY, imgWidth*ratio, imgHeight*ratio);
        doc.save(`${pdfName}.pdf`);
        })
        dispatch(updateMyResume(templateImg));
        dispatch(removeStateData())
        setModalOpen(true)
    }

    useEffect(()=>{
        divToImage()
    },[])

    return (
        <>
            <div className="max-w-screen-xl mx-auto p-8 flex flex-col relative z-30">
                <h2 className="text-3xl font-bold pb-8">Resume Preview</h2>
                <div className="flex flex-col items-center md:space-x-8 md p-2 md:flex-row md:items-start">
                    <div className="hidden md:block md:w-2/3 " >
                        <img src={templateImg} className="w-full h-full object-contain" alt="templeate" />
                    </div>
                    <div className="md:w-1/3 w-2/3 flex flex-col space-y-2 md:space-y-10 md:pt-4 ml-0">
                        <h4 className="text-lg">Create File Name</h4>
                        <TextField
                            required
                            placeholder="Enter File Name "
                            label="File Name" className="w-full"
                            onChange={changeUserName}
                        />
                        <div className="border-t flex justify-end pt-2 space-x-4">
                            <Button variant="outlined" className="w-24" onClick={() => navigate('/details')} >Edit</Button>
                            <Button type="button" variant="contained" className="w-24" onClick={handleDownloadFile}>Save</Button>
                        </div>
                    </div>
                    <div className="block w-full md:hidden mt-5" >
                        <img src={templateImg} className="w-full h-full object-contain" alt="templeate" />
                    </div>
                    <CompleteDownloadModal open={modalOpen} onClose={handleClose}/>
                </div>
            </div>
            <div className="absolute top-0 -translate-y-full -translate-x-full -z-10">
                <div id="download"className="w-a4 h-a4 " >
                    {state.template === 'template1' && <Template1 data={state} />}
                    {state.template === 'template2' && <Template2 data={state} />}
                    {state.template === 'template3' && <Template3 data={state} />}
                </div>
            </div>
        </>
    )
}