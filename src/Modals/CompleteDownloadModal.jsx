import Modal from '@mui/material/Modal';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const CompleteDownloadModal =({open,onClose})=> {
    return(
        <Modal
            open={open}
            onClose={onClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center
                        w-2/5 h-2/5 bg-slate-100 rounded-3xl border border-black p-4 shadow-lg shadow-slate-50 text-2xl'>
                <CheckCircleIcon id="modal-modal-title"  className='text-blue-500 h-10 scale-150'/>
                <h2 id="modal-modal-description" className='mt-2'>
                    Your Resume has been Sucsessfully Saved
                </h2>
            </div>
        </Modal>
    )
}
export default CompleteDownloadModal;