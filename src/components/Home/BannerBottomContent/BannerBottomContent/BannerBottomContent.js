import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import BottomContentModal from '../BottomContentModal/BottomContentModal'
import './BannerBottomContent.css';

const BannerBottomContent = ({ data }) => {
    const [show, setShow] = useState(false);

    return (
        <>
            <Container className='banner-bottom-section'>
                <Row className='gy-3'>
                    {
                        data?.map(content => (
                            <Col md={4}>
                                <div className='banner-bottom-content'>
                                    <img
                                        className='img-fluid banner-bottom-img'
                                        src={content?.img}
                                        alt=''
                                    />
                                    <h6 className='banner-bottom-title'>{content?.title}</h6>
                                    <p className='banner-bottom-subheading'>{content?.subHeading}</p>
                                    <button
                                        onClick={() => setShow(true)}
                                        className='banner-bottom-btn'
                                    >
                                        Know More
                                    </button>
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
            <BottomContentModal show={show} setShow={setShow} />
        </>
    )
}

export default BannerBottomContent