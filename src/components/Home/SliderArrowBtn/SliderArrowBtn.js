import React from 'react';
import { IoMdArrowDropleft, IoMdArrowDropright } from "react-icons/io";
import './SliderArrowBtn.css';

const SliderArrowBtn = ({ moveSlide, direction }) => {
    return (
        <button onClick={moveSlide} className='slider-arrow-btn'>
            {
                direction === "next" ?
                    <IoMdArrowDropright className='arrow-icon' />
                    :
                    <IoMdArrowDropleft className='arrow-icon' />
            }
        </button>
    )
}

export default SliderArrowBtn