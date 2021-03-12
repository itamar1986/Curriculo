import React from 'react';
import Header from '../comps/Header';
import Menu from '../comps/Menu';
import Footer from '../comps/Footer';
import Image from 'react-bootstrap/Image';
import { Container, Jumbotron } from 'reactstrap';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

const certificacoes = () => {
    return (
        <div>
            <Header />
            <Menu />
            <hr></hr>
            <div>
                <Jumbotron fluid>
                    <Container className="text-center" fluid>
                        <h1 className="display-3">Certificações</h1>
                        <p className="lead">Veja as últimas certificações de cursos, bootcamps e workshops.</p>
                    </Container>
                </Jumbotron>
            </div>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div className="col">
                        <div className="card shadow-sm">
                            <Image src="certi1.png"
                                width="100%" height="225" />
                            <div className="card-body">
                                <p className="card-text">Certificado ADS</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <a href="unijorge.pdf" target="_blank" title="Abrir currículo em PDF">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">visualizar</button></a>
                                    </div>
                                    <small className="text-muted">UNIJORGE</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                            <Image src="certi2.png"
                                width="100%" height="225" />
                            <div className="card-body">
                                <p className="card-text">Passaporte GoStack 12</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <a href="55_Passaporte GoStack 12.png" target="_blank" title="Abrir currículo em PDF">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">visualizar</button></a>
                                    </div>
                                    <small className="text-muted">Rocketseat</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                            <Image src="certi3.png"
                                width="100%" height="225" />
                            <div className="card-body">
                                <p className="card-text">Bootcamp Node, React e React Native</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <a href="55_Bootcamp Node.js, ReactJS e React Native.pdf" target="_blank" title="Abrir currículo em PDF">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">visualizar</button></a>
                                    </div>
                                    <small className="text-muted">Rocketseat</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr></hr>
            <div className="container">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                    <div className="col">
                        <div className="card shadow-sm">
                            <Image src="certi4.png"
                                width="100%" height="225" />
                            <div className="card-body">
                                <p className="card-text">Bootcamp React Web Developer</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <a href="80_Bootcamp React Web Developer.pdf" target="_blank" title="Abrir currículo em PDF">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">visualizar</button></a>
                                    </div>
                                    <small className="text-muted">Digital Innovation One</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                            <Image src="certi5.png"
                                width="100%" height="225" />
                            <div className="card-body">
                                <p className="card-text">Formação Clojure</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <a href="82_Formação Clojure.pdf" target="_blank" title="Abrir currículo em PDF">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">visualizar</button></a>
                                    </div>
                                    <small className="text-muted">Alura</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card shadow-sm">
                            <Image src="certi6.png"
                                width="100%" height="225" />
                            <div className="card-body">
                                <p className="card-text">Desenvolvendo um jogo da memória</p>
                                <div className="d-flex justify-content-between align-items-center">
                                    <div className="btn-group">
                                        <a href="66_Curso Desenvolvendo um jogo da memória.pdf" target="_blank" title="Abrir currículo em PDF">
                                            <button type="button" className="btn btn-sm btn-outline-secondary">visualizar</button></a>
                                    </div>
                                    <small className="text-muted">Digital Innovation One</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <p>
                    <Link href="/certificacoesMais">mais ➤➤➤</Link>
                </p>
            </div>
            <hr></hr>
            <div>
                <Container className="text-center">
                    <Link href="/#">VOLTAR</Link>
                </Container>
            </div>
            <hr></hr>
            <Footer />
        </div>
    );
};
export default certificacoes;