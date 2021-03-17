import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Image from 'react-bootstrap/Image';
import TecnologiasAtuais from './TecnologiasAtuais';
import ExperienciaProfissional from './ExperienciaProfissional';
import Certificacoes from './Certificacoes';
import UltimosCommits from './UltimosCommits';
import UltimosPosts from './UltimosPosts';
import Footer from './Footer';


const Layout = () => {
  return (
    <div>
      <Header />
      <Menu />
      <div>
        <Image src="logo.jpg" style={{ width: "100%", height: "400px" }} fluid />
      </div>
      <hr></hr>
      <TecnologiasAtuais />
      <hr></hr>
      <ExperienciaProfissional />
      <hr></hr>
      <Certificacoes />
      <hr></hr>
      <UltimosCommits />
      <hr></hr>
      <UltimosPosts />
      <hr></hr>
      <Footer />
    </div>
  );
};
export default Layout;