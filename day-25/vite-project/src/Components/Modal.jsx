import { useState } from 'react'
import ShowModal from './showModal';


const Modal = () => {
    const [displayModal, setDisplayModal] = useState(false);
    const closeModal = ()=> setDisplayModal(false)
    return (
        <>
        <button className='modalBtn' onClick={()=>setDisplayModal(true)}>Subsribe</button>
        {displayModal && <ShowModal closeModal={closeModal} />}
        </>
    )
}

export default Modal
