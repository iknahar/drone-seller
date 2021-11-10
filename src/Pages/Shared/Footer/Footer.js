import React from 'react';
import { Col, Container, Row } from "react-bootstrap";
const Footer = () => {
    return (
        <div className="bg-primary text-white text-center text-lg-start">

            <Container className="py-4 px-0">
                <Row>
                    <Col className="col-lg-6 col-md-12 col-12">
                        <h5 className="text-uppercase"><b>Flyo Drone Store</b></h5>
                        <p>
                            Fly with us in the sky. the best of the view you can see. <br /> What's the best drone in 2021? Right now, <br /> our pick is the DJI Air 2S. It hits the sweet spot of portability <br /> and performance better than any drone out there
                        </p>

                    </Col>



                    <Col className="col-lg-3 col-md-12 col-12">
                        <h5 className="text-uppercase mb-0">Get in Touch</h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="#!" className="text-white">Our Clients1</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">News & Articles</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Follow US</a>
                            </li>

                        </ul>
                    </Col>
                    <Col className="col-lg-3 col-md-12 col-12">
                        <h5 className="text-uppercase mb-0">Explore our other blogs</h5>

                        <ul className="list-unstyled">
                            <li>
                                <a href="#!" className="text-white">Our Achievemtns</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Events</a>
                            </li>
                            <li>
                                <a href="#!" className="text-white">Our Team</a>
                            </li>

                        </ul>
                    </Col>

                </Row>

            </Container>
            <p className="text-center pb-4 mb-0">Copyright @ Flyo Drone Store 2021</p>
        </div>

    );
};

export default Footer;