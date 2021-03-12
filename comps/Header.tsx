import React from 'react';
import Image from 'react-bootstrap/Image';
import { IoLogoWhatsapp } from 'react-icons/io';
import { AiFillLinkedin, AiFillGithub } from 'react-icons/ai';
import { Container, Row, Col } from 'reactstrap';

const Header = () => {
    return (
        <nav>
            <div className="nav nav-tabs">
                <Container>
                    <Row>
                        <Col xs lg="2">
                            <a href="00_Curriculo.pdf" target="_blank" title="Abrir currículo em PDF">
                                <Image
                                    style={{ paddingTop: "20px", paddingBottom: "10px", width: "200px", height: "100px" }}
                                    src="curriculo.jpg"
                                />
                            </a>
                        </Col>
                        <Col></Col>
                        <Col md="auto"
                            style={{ paddingTop: "20px", paddingBottom: "10px" }}
                            className="Container text-center">
                            <h1>
                                <a href="https://www.linkedin.com/in/itamar-santos-da-silva-463b0a176" title="Linkedin" target="_blank" style={{ color: 'grey' }}><AiFillLinkedin size={55} /></a>
                                <a href="https://web.whatsapp.com/" title="WhatsApp 71-99288-7343" target="_blank" style={{ color: 'grey' }}><IoLogoWhatsapp size={55} /></a>
                                <a href="https://github.com/itamar1986" title="Github" target="_blank" style={{ color: 'grey' }}><AiFillGithub size={55} /></a>
                            </h1>
                        </Col>
                    </Row>
                </Container>
            </div>
        </nav>
    );
};
export default Header;