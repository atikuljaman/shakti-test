import React from 'react'
import './DotBtn.css';

const DotBtn = ({ sliderIndex }) => {
    return (

        <div className='dot-container'>
            {
                Array.from({ length: 5 }).map((item, index) => (
                    <div
                        className={
                            sliderIndex === index + 1 ?
                                'dot active' : 'dot'
                        }
                    ></div>
                ))
            }
        </div>
    )
}

export default DotBtn