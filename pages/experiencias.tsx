import React from 'react';
import Header from '../comps/Header';
import Menu from '../comps/Menu';
import Footer from '../comps/Footer';
import { Jumbotron, Container } from 'reactstrap';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

const servicos = () => {
    return (
        <div>
            <Header />
            <Menu />
            <div>
                <Jumbotron fluid>
                    <Container className="text-center" fluid>
                        <h1 className="display-3">2020 - 2021</h1>
                        <p className="lead"><span style={{ fontWeight: 900 }}>Empresa:</span> Agência Estadual de Regulação
                        de Serviços Públicos de Energia, Transportes e Comunicações da Bahia – AGERBA.</p>
                        <p className="lead"><span style={{ fontWeight: 900 }}>Cargo:</span> Estagiário em Análise e Desenvolvimento de Sistemas.</p>
                        <p className="lead"><span style={{ fontWeight: 900 }}>Período:</span> 13/01/2020 À 12/01/2021.</p>
                        <p className="lead"><span style={{ fontWeight: 900 }}>Situação:</span> Estágio.</p>
                    </Container>
                    <hr></hr>
                    <Container className="text-center" fluid>
                        <h1 className="display-3">2017 - 2019</h1>
                        <p className="lead"><span style={{ fontWeight: 900 }}>Empresa:</span> Ciência, Tecnologia, Inovações e Comunicações – CNPQ.</p>
                        <p className="lead"><span style={{ fontWeight: 900 }}>Cargo:</span> Desenvolvedor de experimentos.</p>
                        <p className="lead"><span style={{ fontWeight: 900 }}>Período:</span> 01/08/2017 À 31/07/2019.</p>
                        <p className="lead"><span style={{ fontWeight: 900 }}>Situação:</span> Bolsa de Estudo.</p>
                    </Container>
                    <hr></hr>
                    <Container className="text-center" fluid>
                        <h1 className="display-3">2011 - 2016</h1>
                        <p className="lead"><span style={{ fontWeight: 900 }}>Empresa:</span> Bompreco Bahia Supermercados Ltda - WALMART.</p>
                        <p className="lead"><span style={{ fontWeight: 900 }}>Cargo:</span> Gerente de Supermercado.</p>
                        <p className="lead"><span style={{ fontWeight: 900 }}>Período:</span> 13/07/2011 À 11/07/2016.</p>
                    </Container>
                    <hr></hr>
                    <Container className="text-center" fluid>
                        <h1 className="display-3">2010</h1>
                        <p className="lead"><span style={{ fontWeight: 900 }}>Empresa:</span> Instituto Brasileiro de Geografia e Estatística - IBGE.</p>
                        <p className="lead"><span style={{ fontWeight: 900 }}>Cargo:</span> Recenseador / Pesquisador.</p>
                        <p className="lead"><span style={{ fontWeight: 900 }}>Período:</span> 30/07/2010 À 30/11/2010.</p>
                        <p className="lead"><span style={{ fontWeight: 900 }}>Situação:</span> Concurso público - temporário.</p>
                    </Container>
                    <hr></hr>
                    <Container className="text-center" fluid>
                        <h1 className="display-3">2006 - 2009</h1>
                        <p className="lead"><span style={{ fontWeight: 900 }}>Empresa:</span> Engate Construções e Informática Ltda.</p>
                        <p className="lead"><span style={{ fontWeight: 900 }}>Cargo:</span> Servente Comum.</p>
                        <p className="lead"><span style={{ fontWeight: 900 }}>Período:</span> 25/09/2006 À 14/10/2009.</p>
                    </Container>
                    <hr></hr>
                    <Container className="text-center" fluid>
                        <h1 className="display-3">2006</h1>
                        <p className="lead"><span style={{ fontWeight: 900 }}>Empresa:</span> Ambiental Ecoservice Ltda.</p>
                        <p className="lead"><span style={{ fontWeight: 900 }}>Cargo:</span> Ajudante de Jardinagem.</p>
                        <p className="lead"><span style={{ fontWeight: 900 }}>Período:</span> 17/07/2006 À 01/09/2006.</p>
                        <p className="lead"><span style={{ fontWeight: 900 }}>Situação:</span> Contrato temporário.</p>
                    </Container>
                    <hr></hr>
                    <Container className="text-center" fluid>
                        <h1 className="display-3">2005 - 2006</h1>
                        <p className="lead"><span style={{ fontWeight: 900 }}>Empresa:</span> Borges Calçados.</p>
                        <p className="lead"><span style={{ fontWeight: 900 }}>Cargo:</span> Vendedor.</p>
                        <p className="lead"><span style={{ fontWeight: 900 }}>Período:</span> 03/12/2005 À 01/01/2006.</p>
                        <p className="lead"><span style={{ fontWeight: 900 }}>Situação:</span> Contrato temporário.</p>
                    </Container>
                </Jumbotron>
            </div>
            <Container className="text-center">
                <Link href="/#">VOLTAR</Link>
            </Container>
            <hr></hr>
            <Footer />
        </div>
    );
};
export default servicos;