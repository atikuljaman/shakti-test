import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import BannerNavbar from '../BannerNavbar/BannerNavbar';
import DotBtn from '../DotBtn/DotBtn';
import BannerBottomContent from '../BannerBottomContent/BannerBottomContent/BannerBottomContent';
import './Home.css';



export default function Home() {
    const [data, setData] = useState([]);
    const [sliderIndex, setSliderIndex] = useState(1);

    useEffect(() => {
        fetch('./data.json')
            .then(res => res.json())
            .then(data => setData(data))
    }, []);

    const nextSlide = () => {
        if (sliderIndex !== data?.length) {
            setSliderIndex(sliderIndex + 1)
        }
        else if (sliderIndex === data?.length) {
            setSliderIndex(1)
        }
    }

    const prevSlide = () => {
        if (sliderIndex !== 1) {
            setSliderIndex(sliderIndex - 1)
        }
        else if (sliderIndex === 1) {
            setSliderIndex(data.length)
        }
    }

    const moveSlider = index => {
        setSliderIndex(index)
    }

    return (
        <Container className='home-section'>
            <BannerNavbar
                nextSlide={nextSlide}
                prevSlide={prevSlide}
                moveSlider={moveSlider}
                sliderIndex={sliderIndex}
            />

            {
                Array.from({ length: sliderIndex }).map((item, index) => (
                    <Container
                        className={
                            sliderIndex === index + 1 ?
                                'banner-content-container active' :
                                'banner-content-container'
                        }
                        key={data[index]?.id}
                    >
                        <Row className='gy-3'>
                            <Col className='text-center' md={5}>
                                <img
                                    className='img-fluid'
                                    src={data[index]?.bannerImg}
                                    alt='First Banner'
                                />
                            </Col>
                            <Col className='content-column' md={7}>
                                <div className='banner-content'>
                                    <h4 className='banner-title'>{data[index]?.title}</h4>
                                    <p className='banner-desc'>{data[index]?.desc}</p>
                                    <p className='banner-download-btn'>
                                        {data[index]?.downloadBtn}
                                    </p>
                                    <div
                                        className={data[index]?.bannerRightContent ?
                                            'banner-left-bottom active' : 'banner-left-bottom'
                                        }
                                    >
                                        <img
                                            src={data[index]?.bannerRightContent?.img}
                                            alt=''
                                        />
                                        <h6 className='banner-left-bottom-title'>
                                            {data[index]?.bannerRightContent?.title}
                                        </h6>
                                        <p className='banner-left-bottom-subheading'>
                                            {data[index]?.bannerRightContent?.subHeading}
                                        </p>
                                        <button className='banner-left-contact-btn'>
                                            {data[index]?.bannerRightContent?.contactBtn}
                                        </button>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                        <BannerBottomContent data={data[index]?.bannerBottomContent} />
                    </Container>
                ))
            }
            <div className='dot-btn-container'>
                <DotBtn sliderIndex={sliderIndex} />
            </div>
        </Container>
    )
}
