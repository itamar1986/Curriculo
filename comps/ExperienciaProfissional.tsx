import React from 'react';
import Image from 'react-bootstrap/Image';
import Link from 'next/link';
import {
    Navbar,
    CardImgOverlay,
    CardTitle,
    Container,
    Row,
    Col,
    CardBody
} from 'reactstrap';

const ExperienciaProfissional = () => {
    return (
        <div>
            <Navbar style={{ background: "linear-gradient(to right, #212121, #616161, #9e9e9e, #bdbdbd, #e0e0e0, #f5f5f5)" }}>
                <div>
                    <h5 className="text-light">EXPERIÊNCIA PROFISSIONAL</h5>
                </div>
            </Navbar>
            <Container>
                <Row>
                    <Col xs={6} md={3}>
                        <CardBody>
                            <CardImgOverlay><CardTitle style={{ backgroundColor: 'black', lineHeight: '30px', maxWidth: '50%', textAlign: 'center', }} className="text-white">2020 - 2021</CardTitle></CardImgOverlay>
                            <Image src="agerba.jpg" width="171" height="180" roundedCircle />
                        </CardBody>
                    </Col>
                    <Col xs={6} md={3}>
                        <CardBody>
                            <CardImgOverlay><CardTitle style={{ backgroundColor: 'black', lineHeight: '30px', maxWidth: '50%', textAlign: 'center', }} className="text-white">2017 - 2019</CardTitle></CardImgOverlay>
                            <Image src="cnpq.jpeg" width="171" height="180" roundedCircle />
                        </CardBody>
                    </Col>
                    <Col xs={6} md={3}>
                        <CardBody>
                            <CardImgOverlay><CardTitle style={{ backgroundColor: 'black', lineHeight: '30px', maxWidth: '50%', textAlign: 'center', }} className="text-white">2011 - 2016</CardTitle></CardImgOverlay>
                            <Image src="walmart.png" width="171" height="180" roundedCircle />
                        </CardBody>
                    </Col>
                    <Col xs={6} md={3}>
                        <CardBody>
                            <CardImgOverlay><CardTitle style={{ backgroundColor: 'black', lineHeight: '30px', maxWidth: '50%', textAlign: 'center', }} className="text-white">2010</CardTitle></CardImgOverlay>
                            <Image src="ibge.jpg" width="171" height="180" roundedCircle />
                        </CardBody>
                    </Col>
                </Row>
                <p align="right">
                    <Link href="/experiencias">Confira outras experiências...</Link>
                </p>
            </Container>
        </div>
    );
};

export default ExperienciaProfissional;