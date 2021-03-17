import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselCaption from 'react-bootstrap/CarouselCaption';
import { Navbar, Container, Row, Col, CarouselItem } from 'reactstrap';
import Link from 'next/link';

const UltimosCommits = () => {
    return (
        <div>
            <Navbar style={{ background: "linear-gradient(to right, #212121, #616161, #9e9e9e, #bdbdbd, #e0e0e0, #f5f5f5)" }}>
                <div>
                    <h5 className="text-light">ÚLTIMOS COMMITS</h5>
                </div>
            </Navbar>
            <Container>
                <Row>
                    <Col>
                        <h2>Confira mais notícias e fique informado de tudo que acontece no meu desenvolvimento profissional.</h2>
                        <p className="text-black">
                        Confira os últimos commits realizado no repositório do GitHub.<br></br>
                        Estes são os principais projetos desenvolvidos a nível de estudo, pois "Sempre haverá um próximo nível".
                        </p>
                        <Link href="https://github.com/itamar1986?tab=repositories">Veja Mais ➤</Link>
                    </Col>
                    <Col>
                        <Carousel>
                            <CarouselItem interval={1000}>
                                <img
                                    className="d-block w-100"
                                    src="https://user-images.githubusercontent.com/54650669/110630230-dfc72000-8183-11eb-9808-b758d181d6a6.png"
                                    alt="First slide"
                                    width="500" height="300"
                                />
                                <CarouselCaption>
                                    <div  style={{ background: "linear-gradient(to right, #212121, #616161, #9e9e9e, #bdbdbd, #e0e0e0, #f5f5f5)" }}>
                                    <h3>Bootcamp da Rocketseat GoStack 12</h3>
                                    </div>
                                </CarouselCaption>
                            </CarouselItem>
                            <CarouselItem interval={500}>
                                <img
                                    className="d-block w-100"
                                    src="https://user-images.githubusercontent.com/54650669/110406976-d5146a00-8061-11eb-8cbf-a94794ec1f41.gif"
                                    alt="Third slide"
                                    width="500" height="300"
                                />
                                <CarouselCaption>
                                    <div  style={{ background: "linear-gradient(to right, #212121, #616161, #9e9e9e, #bdbdbd, #e0e0e0, #f5f5f5)" }}>
                                    <h3>Noções de ReactJS</h3>
                                    </div>
                                </CarouselCaption>
                            </CarouselItem>
                            <CarouselItem>
                                <img
                                    className="d-block w-100"
                                    src="https://user-images.githubusercontent.com/54650669/110411061-a9e14900-8068-11eb-88c8-f89033207dc9.gif"
                                    alt="Third slide"
                                    width="500" height="300"
                                />
                                <CarouselCaption>
                                    <div style={{ background: "linear-gradient(to right, #212121, #616161, #9e9e9e, #bdbdbd, #e0e0e0, #f5f5f5)", opacity: "0.5",}}>
                                    <h2>Noções de NextJS</h2>
                                    </div>
                                </CarouselCaption>
                            </CarouselItem>
                        </Carousel>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};
export default UltimosCommits;