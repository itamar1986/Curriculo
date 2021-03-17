import React from 'react';
import Image from 'react-bootstrap/Image';
import { Navbar, Row, Col } from 'reactstrap';
import Link from 'next/link';

const UltimosPosts = () => {
    return (
        <div>
            <Navbar style={{ background: "linear-gradient(to right, #212121, #616161, #9e9e9e, #bdbdbd, #212121, #212121)" }}>
                <Row>
                    <Col><Image src="erro.gif" width="600" height="200" fluid /></Col>
                    <Col><Image src="erro.gif" width="600" height="200" fluid /></Col>
                    <Col>
                        <div>
                            <h5 className="text-light">Últimos posts no Linkedin</h5>
                            <p className="text-light">
                            Confira os últimos postagens realizado no Linkedin.<br></br>
                            O desenvolvimento do que estar aprendendo acontece em duas vertentes, a primeira 
                            pelo estudo realizado, e a segunda sendo realizada quando podemos mostrar o que 
                            apreendemos e temos o retorno desse aprendizado através do feedback.<br></br>
                            <Link href="https://www.linkedin.com/in/itamar-santos-da-silva-463b0a176/detail/recent-activity/shares/">Veja Mais ➤</Link>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Navbar>
        </div>
    );
}
export default UltimosPosts;