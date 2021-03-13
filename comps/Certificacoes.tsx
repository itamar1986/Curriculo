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

const Certificacoes = () => {
    return (
        <div>
            <Navbar style={{ background: "linear-gradient(to right, #212121, #616161, #9e9e9e, #bdbdbd, #e0e0e0, #f5f5f5)" }}>
                <div>
                    <h5 className="text-light">CERTIFICAÇÕES</h5>
                </div>
            </Navbar>
            <Container>
                <Row>
                    <Col xs={6} md={3}>
                        <CardBody>
                            <CardImgOverlay><CardTitle style={{ backgroundColor: 'black', lineHeight: '30px',  maxWidth: '50%', textAlign: 'center', }} className="text-white">Bootcamp</CardTitle></CardImgOverlay>
                            <Image src="rocketseat.png" width="171" height="180" roundedCircle />
                        </CardBody>
                    </Col>
                    <Col xs={6} md={3}>
                        <CardBody>
                            <CardImgOverlay><CardTitle style={{ backgroundColor: 'black', lineHeight: '30px',  maxWidth: '50%', textAlign: 'center', }} className="text-white">Bootcamp</CardTitle></CardImgOverlay>
                            <Image src="dio.jpg" width="171" height="180" roundedCircle />
                        </CardBody>
                    </Col>
                    <Col xs={6} md={3}>
                        <CardBody>
                            <CardImgOverlay><CardTitle style={{ backgroundColor: 'black', lineHeight: '30px',  maxWidth: '50%', textAlign: 'center', }} className="text-white">Cursos</CardTitle></CardImgOverlay>
                            <Image src="alura.png" width="171" height="180" roundedCircle />
                        </CardBody>
                    </Col>
                    <Col xs={6} md={3}>
                        <CardBody>
                            <CardImgOverlay><CardTitle style={{ backgroundColor: 'black', lineHeight: '30px',  maxWidth: '50%', textAlign: 'center', }} className="text-white">Graduação</CardTitle></CardImgOverlay>
                            <Image src="unijorge.png" width="171" height="180" roundedCircle />
                        </CardBody>
                    </Col>
                </Row>
                <p><Link href="/certificacoes">Confira as certificações...</Link></p>
            </Container>
        </div>
    );
};
export default Certificacoes;