import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import feat from '../../images/featured.jpeg'


const FeaturedProduct = () => {
    return (
        <div>
            <Container className="p-5" >
                <Row>
                    <Col className="col-lg-6 col-md-12 col-sm-12 col-12 ">
                        <img className="w-100" src={feat} alt="" />
                    </Col>

                    <Col className="col-lg-6 col-md-12 col-sm-12 col-12">
                        <h3><b>Our Featured</b> <span className="text-primary"><b>Dron</b></span></h3>
                        <p className="text-secondary pt-3">Whether you’re an outdoor enthusiast or a professional photographer, you need a high-quality and cutting-edge drone you can always rely on. There are many products on the market today. However, most of them fail to give top performance. And others that do deliver results end up costing you an arm and a leg. The Skyline X Drone is a lightweight quadcopter that packs a lot of value in a compactly designed body. The drone includes straightforward controls that make shooting photos and videos a dream.</p>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default FeaturedProduct;