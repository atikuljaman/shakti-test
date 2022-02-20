import React from 'react'
import SliderArrowBtn from '../SliderArrowBtn/SliderArrowBtn';
import './BannerNavbar.css';

const bannerNav = [
    {
        bannerNav: 'Residential Solar'
    },
    {
        bannerNav: 'Commercial Solar'
    },
    {
        bannerNav: 'Energy Storage Systems'
    },
    {
        bannerNav: 'EV Charging stations'
    },
    {
        bannerNav: 'Generator Plant Set'
    },
]


const BannerNavbar = ({ prevSlide, nextSlide, moveSlider, sliderIndex }) => {
    return (
        <nav className='nav-container'>
            <div className='left-arrow-container'>
                <SliderArrowBtn moveSlide={prevSlide} direction="prev" />
            </div>
            {
                bannerNav.map((nav, index) => (
                    <button
                        onClick={() => moveSlider(index + 1)}
                        className={
                            sliderIndex === index + 1 ? 'slider-nav-link active'
                                : 'slider-nav-link'
                        }>
                        {nav?.bannerNav}
                    </button>
                ))
            }
            <div className='right-arrow-container'>
                <SliderArrowBtn moveSlide={nextSlide} direction="next" />
            </div>
        </nav>
    )
}

export default BannerNavbar