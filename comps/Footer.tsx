import React from 'react';
import Image from 'react-bootstrap/Image';
import { Navbar, Container, Col } from 'reactstrap';

const Footer = () => {
    return (
        <div>
            <Navbar color="light">
                <Container className="text-center">
                    <Col>
                        <Image src="procura.jpg" title="Salvador – Bahia | Crédito: Itamar Silva" width="350px" height="250px" />
                    </Col>
                    <Col>
                        <address>
                            <p><b>Salvador - Bahia - Brasil</b></p>
                            <p><span>Email: </span><a href="mailto:itamar_minnow@hotmail.com">itamar_minnow@hotmail.com</a></p>
                        </address>
                    </Col>
                    <Col>
                        <Image src="itamar.jpg" title="Salvador – Bahia | Colação de grau | 2021/02/10" width="250" height="250" roundedCircle />
                    </Col>
                </Container>
            </Navbar>
        </div>
    );
}
export default Footer;