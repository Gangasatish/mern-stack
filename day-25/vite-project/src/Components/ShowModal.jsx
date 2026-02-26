import { useEffect } from "react"
import { createPortal } from "react-dom";
const ShowModal = ({ closeModal }) => {
    useEffect(() => {
        document.body.style.overflowY = 'hidden';
        return () => {
            document.body.style.overflowY = 'scroll';
        }
    },)
    // createPortal - lets us render some children components into a different part of the DOM.
    // createPortal takes 2 paramters - createPortal(<Component />, {portal})
    // on the <Component /> - mention the component that you want to have as a separate entity.
    // on the {portal} - mention the element where you want to load that component.
    return createPortal(
        <>
            <div className="modal-wrapper" onClick={(closeModal)}></div>
            <div className="modalDesign">
                <div>
                    <h1>Stay Tuned!</h1>
                    <div>Get the lastest news update now!</div>
                </div>
                <button className="modalBtn" onClick={(closeModal)}>Okay</button>
            </div>
        </>,
        document.querySelector('#modal')
    )
}

export default ShowModal
