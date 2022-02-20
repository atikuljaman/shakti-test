import React from 'react'
import { AiOutlineCloseCircle } from "react-icons/ai";
import modalImg from '../../../../Assets/Images/modal-img.png';
import './BottomContentModal.css';

const BottomContentModal = ({ show, setShow }) => {

    return (
        <section className={show ? 'modal-section active' : 'modal-section'}>
            <div className={show ? 'modal-container active' : 'modal-container'}>
                <AiOutlineCloseCircle
                    onClick={() => setShow(false)}
                    className='close-icon'
                />
                <div className='modal-details'>
                    <h2 className='title'>Proposal Drawing</h2>
                    <img
                        className='img-fluid modal-img'
                        src={modalImg}
                        alt=''
                    />
                    <div className='modal-desc'>
                        <div className='bullet-symbol'></div>
                        <span className='desc'>Single/Three Line Diagram</span>
                    </div>
                    <div className='modal-desc'>
                        <div className='bullet-symbol'></div>
                        <span className='desc'>Preliminary Solar Assessment (PSA)</span>
                    </div>
                    <div className='modal-desc'>
                        <div className='bullet-symbol'></div>
                        <span className='desc'>Initial Roof and Array Sketch</span>
                    </div>
                    <div className='modal-desc'>
                        <div className='bullet-symbol'></div>
                        <span className='desc'>Shading Analysis</span>
                    </div>
                    <div className='modal-desc'>
                        <div className='bullet-symbol'></div>
                        <span className='desc'>Calculation of ROI</span>
                    </div>
                    <div className='modal-desc'>
                        <div className='bullet-symbol'></div>
                        <span className='desc'>
                            PR estimate using industry leading software like Aurora,
                            Helioscope, PVSyst, etc.
                        </span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default BottomContentModal