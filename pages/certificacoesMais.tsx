import React from 'react';
import Header from '../comps/Header';
import Menu from '../comps/Menu';
import Footer from '../comps/Footer';
import { Jumbotron, Container, Table } from 'reactstrap';
import Link from 'next/link';
import 'bootstrap/dist/css/bootstrap.min.css';

const certificacoesMais = () => {
  return (
    <div>
      <Header />
      <Menu />
      <Jumbotron fluid>
        <Container className="text-center" fluid>
          <h3 className="display-5">Noções adquiridas nos cursos...</h3>
        </Container>
      </Jumbotron>
      <Container className="text-center" fluid>
        <Table responsive bordered>
          <thead>
            <tr>
              <td><a href="82_Formação Clojure.pdf" target="_blank">Formação Clojure</a></td>
              <td><a href="81_Clojure_Geradores e testes de propriedades.pdf" target="_blank">Geradores e testes de</a><a href="81_Clojure_Geradores e testes de propriedades1.pdf" target="_blank"> propriedades</a></td>
              <td><a href="80_Bootcamp React Web Developer.pdf" target="_blank">Bootcamp React Web Developer</a></td>
              <td><a href="79_Curso Desenvolvendo uma Progressive Web Application com React para mapear os dados do COVID19 pelo mundo.pdf" target="_blank">Desenvolvendo uma Progressive Web Application com React para mapear os dados do COVID19 pelo mundo</a></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><a href="78_Curso Criando um site para encontrar restaurantes usando Google Maps que consulta API do Google.pdf" target="_blank">Criando um site para encontrar restaurantes usando Google Maps que consulta API do Google</a></td>
              <td><a href="77_Curso Práticas avançadas em projetos com ReactJS.pdf" target="_blank">Práticas avançadas em projetos com ReactJS</a></td>
              <td><a href="76_Curso Como gerenciar o estado das aplicações com Redux.pdf" target="_blank">Como gerenciar o estado das aplicações com Redux</a></td>
              <td><a href="75_Curso Criando sua biblioteca para React.pdf" target="_blank">Criando sua biblioteca para React</a></td>
              <td><a href="74_Curso Criando uma home com Styled Components.pdf" target="_blank">Criando uma home com Styled Components</a></td>
              <td><a href="73_Curso Como funciona o asyncawait.pdf" target="_blank">Como funciona o asyncawait</a></td>
            </tr>
            <tr>
              <td><a href="72_Clojure_Explorando testes.pdf" target="_blank">Explorando </a><a href="72_Clojure_Explorando testes1.pdf" target="_blank">testes</a></td>
              <td><a href="71_Clojure_Schemas.pdf" target="_blank">Clojure </a><a href="71_Clojure_Schemas1.pdf" target="_blank">Schemas</a></td>
              <td><a href="70_Curso Requisitando dados de uma API de criptomoedas.pdf" target="_blank">Requisitando dados de uma API de criptomoedas</a></td>
              <td><a href="69_Clojure_Record, protocol e multi method.pdf" target="_blank">Record, protocol e multi </a><a href="69_Clojure_Record, protocol e multi method1.pdf" target="_blank">method</a></td>
              <td><a href="68_Curso Entendendo Promises de uma vez por todas.pdf" target="_blank">Entendendo Promises de uma vez por todas</a></td>
              <td><a href="67_Curso Desmistificando map, filter e reduce.pdf" target="_blank">Desmistificando map, filter e reduce</a></td>
            </tr>
            <tr>
              <td><a href="66_Curso Desenvolvendo um jogo da memória.pdf" target="_blank">Desenvolvendo um jogo da memória</a></td>
              <td><a href="65_Curso Recriando a Interface do Netflix.pdf" target="_blank">Recriando a Interface do Netflix</a></td>
              <td><a href="64_Clojure_Mutabilidade com atomos e refs.pdf" target="_blank">Mutabilidade com atomos e </a><a href="64_Clojure_Mutabilidade com atomos e refs1.pdf" target="_blank">refs</a></td>
              <td><a href="63_Curso Desenvolvimento básico em Java.pdf" target="_blank">Desenvolvimento básico em Java</a></td>
              <td><a href="62_Curso Recriando a página inicial do Instagram.pdf" target="_blank">Recriando a página inicial do Instagram</a></td>
              <td><a href="61_Curso Conceitos de responsividade e experiência do usuário.pdf" target="_blank">Conceitos de responsividade e experiência do usuário</a></td>
            </tr>
            <tr>
              <td><a href="60_Curso Criando um repositório para seus projetos inovadores.pdf" target="_blank">Criando um repositório para seus projetos inovadores</a></td>
              <td><a href="59_Curso Introdução a criação de websites com HTML5 e CSS3.pdf" target="_blank">Introdução a criação de websites com HTML5 e CSS3</a></td>
              <td><a href="58_Clojure_Coleções no dia a dia.pdf" target="_blank">Coleções no dia a </a><a href="58_Clojure_Coleções no dia a dia1.pdf" target="_blank">dia</a></td>
              <td><a href="57_Clojure_Introdução à programação funcional.pdf" target="_blank">Introdução à programação </a><a href="57_Clojure_Introdução à programação funcional1.pdf" target="_blank">funcional</a></td>
              <td><a href="56_Curso Introdução ao Git e ao GitHub.pdf" target="_blank">Introdução ao Git e ao GitHub</a></td>
              <td><a href="55_Bootcamp Node.js, ReactJS e React Native.pdf" target="_blank">Bootcamp Node.js, ReactJS e React Native</a> / <a href="55_Bootcamp Node.js, ReactJS e React Native1.pdf" target="_blank">GoStack 12</a> / <a href="55_Passaporte GoStack 12.png" target="_blank">Passaporte</a>
              </td>
            </tr>
            <tr>
              <td><a href="54_Curso Lógica de programação essencial_9C12A250.pdf" target="_blank">Lógica de programação essencial</a></td>
              <td><a href="53_Curso Bem-vindo à DIO.pdf" target="_blank">DIO</a></td>
              <td><a href="52_Introdução à linguagem CSS.pdf" target="_blank">Introdução à linguagem CSS</a></td>
              <td><a href="51_Introdução à Linguagem HTML.pdf" target="_blank">Introdução à Linguagem HTML</a></td>
              <td><a href="50_Introdução à linguagem JavaScript.pdf" target="_blank">Introdução à linguagem JavaScript</a></td>
              <td><a href="49_Introdução ao jQuery.pdf" target="_blank">Introdução ao jQuery</a></td>
            </tr>
            <tr>
              <td><a href="48_Introdução à linguagem JavaScript.pdf" target="_blank">Introdução à linguagem JavaScript</a></td>
              <td><a href="47_HTML5 para quem não sabe nada de HTML5" target="_blank">HTML5 para quem não sabe nada</a></td>
              <td><a href="45_CONGRESSO_2019.pdf" target="_blank">CONGRESSO 2019</a> / <a href="46_CONGRESSO_2019.pdf" target="_blank">Apresentação</a></td>
              <td><a href="44_Bootcamp Desenvolvedor Web Front-End.pdf" target="_blank">Bootcamp Desenvolvedor Web Front-End</a></td>
              <td><a href="43_Curso Aprenda Collection e Streams na linguagem Java.pdf" target="_blank">Collection e Streams na linguagem Java</a></td>
              <td><a href="41_Curso GFT START UNI.pdf" target="_blank">GFT START UNI</a> / <a href="42_Bootcamp GFT START UNI.pdf" target="_blank">Bootcamp</a></td>
            </tr>
            <tr>
              <td><a href="40_Curso Arquitetura de Sistemas Avançado.pdf" target="_blank">Arquitetura de Sistemas Avançado</a></td>
              <td><a href="39_Curso Fundamentos para a Criação de Produtos Digitais.pdf" target="_blank">Fundamentos para a Criação de Produtos Digitais</a></td>
              <td><a href="38_Curso Criação de Soluções Inovadoras.pdf" target="_blank">Criação de Soluções Inovadoras</a></td>
              <td><a href="37_Curso Fundamentos de Negócios Digitais Escaláveis.pdf" target="_blank">Fundamentos de Negócios Digitais Escaláveis</a></td>
              <td><a href="36_Curso Mentalidade Empreendedora.pdf" target="_blank">Mentalidade Empreendedora</a></td>
              <td><a href="35_Curso Fundamentos do Intraempreendedorismo.pdf" target="_blank">Fundamentos do Intraempreendedorismo</a></td>
            </tr>
            <tr>
              <td><a href="33_Curso Introdução ao ReactJS.pdf" target="_blank">Introdução ao ReactJS</a></td>
              <td><a href="32_Curso Desenvolvimento avançado com JavaScript ES6.pdf" target="_blank">Desenvolvimento avançado com JavaScript ES6</a></td>
              <td><a href="31_Curso JavaScript ES6 essencial.pdf" target="_blank">JavaScript ES6 essencial</a></td>
              <td><a href="30_Curso Programação para internet com JavaScript_00EAE5C1.pdf" target="_blank">Programação para internet com JavaScript</a></td>
              <td><a href="29_Curso Projetos ágeis com SCRUM_9F01FEDF.pdf" target="_blank">Projetos ágeis com SCRUM</a></td>
              <td><a href="28_Curso Introdução ao GitHub e comandos essenciais para trabalhar em equipe_6E50296C.pdf" target="_blank">Introdução ao GitHub e comandos essenciais para trabalhar em equipe</a></td>
            </tr>
            <tr>
              <td><a href="27_Curso Fundamentos de Arquitetura de Sistemas_64036E4B.pdf" target="_blank">Fundamentos de Arquitetura de Sistemas</a></td>
              <td><a href="26_Curso Introdução ao Git e Controle de Versões_62DB5AB3.pdf" target="_blank">Introdução ao Git e Controle de Versões</a></td>
              <td><a href="25_Curso Fundamentos de Lógica de Programação.pdf" target="_blank">Fundamentos de Lógica de Programação</a></td>
              <td><a href="24_Curso Construindo páginas para internet com bootstrap.pdf" target="_blank">Construindo páginas para internet com bootstrap</a></td>
              <td><a href="23_Curso Programação para internet com HTML5 e CSS3_34178409.pdf" target="_blank">Programação para internet com HTML5 e CSS3</a></td>
              <td><a href="22_SNEF.pdf" target="_blank">SNEF</a></td>
            </tr>
            <tr>
              <td><a href="21_ASTRONOMIA_2019.pdf" target="_blank">ASTRONOMIA 2019</a></td>
              <td><a href="19_SNCT_2018.pdf" target="_blank">SNCT 2018</a> / <a href="20_SNCT_2018.pdf" target="_blank">Monitor</a></td>
              <td><a href="17_CONGRESSO_2018.pdf" target="_blank">CONGRESSO 2018</a> / <a href="18_CONGRESSO_2018.pdf" target="_blank">Apresentação</a></td>
              <td><a href="15_LISHEP.pdf" target="_blank">LISHEP</a> / <a href="16_LISHEP.pdf" target="_blank">Monitor</a></td>
              <td><a href="14_ASTRONOMIA_2018.pdf" target="_blank">ASTRONOMIA 2018</a></td>
              <td><a href="13_LABTECAMACARI.pdf" target="_blank">LABTECAMACARI</a></td>
            </tr>
            <tr>
              <td><a href="12_SNCT_2017.pdf" target="_blank">SNCT 2017</a></td>
              <td><a href="11_CONGRESSO DA UFBA_2017.pdf" target="_blank">CONGRESSO DA UFBA 2017</a></td>
              <td><a href="10_ESCOLA DE FÍSICA.pdf" target="_blank">ESCOLA DE FÍSICA</a></td>
              <td><a href="09_CONSTELAÇÕES PEDAGÓGICAS.pdf" target="_blank">CONSTELAÇÕES PEDAGÓGICAS</a></td>
              <td><a href="08_ASTRONOMIA_2017.pdf" target="_blank">ASTRONOMIA 2017</a></td>
              <td><a href="07_NR33.pdf" target="_blank">NR33</a></td>
            </tr>
            <tr>
              <td><a href="06_CALDEIRARIA.pdf" target="_blank">CALDEIRARIA</a></td>
              <td><a href="05_TELEMARKETING.pdf" target="_blank">TELEMARKETING</a></td>
              <td><a href="04_RECEPCIONISTA.pdf" target="_blank">RECEPCIONISTA</a></td>
              <td><a href="03_EMPREENDEDORISMO.pdf" target="_blank">EMPREENDEDORISMO</a></td>
              <td><a href="02_PEI.pdf" target="_blank">PEI</a></td>
              <td><a href="01_INFORMATICA BASICA.pdf" target="_blank">INFORMATICA BASICA</a></td>
            </tr>
          </tbody>

        </Table>
      </Container>
      <Container className="text-center">
        <Link href="/#">VOLTAR</Link>
      </Container>

      <hr></hr>
      <Footer />
    </div>
  );
};

export default certificacoesMais;