import React from 'react';
import {
    Navbar,
    Card,
    CardImg,
    CardImgOverlay,
    CardTitle,
    CardDeck,
    Container
} from 'reactstrap';

const TecnologiasAtuais = () => {
    return (
        <div>
            <Navbar style={{ background: "linear-gradient(to right, #212121, #616161, #9e9e9e, #bdbdbd, #e0e0e0, #f5f5f5)" }}>
                <div>
                    <h5 className="text-light">TECNOLOGIAS ATUAIS</h5>
                </div>
            </Navbar>
            <Container>
                <CardDeck className="justify-content-md-center">
                    <Card>
                        <CardImg variant="top" src="nodeJS.png" width="50px" height="300px" fluid />
                        <CardImgOverlay>
                            <CardTitle style={{ backgroundColor: 'black', lineHeight: '30px', maxWidth: '50%', textAlign: 'center', }}
                                className="text-white">Node.JS
                                </CardTitle>
                        </CardImgOverlay>
                    </Card>
                    <Card>
                        <CardImg variant="top" src="reactJS.png" width="50px" height="300px" fluid />
                        <CardImgOverlay>
                            <CardTitle style={{ backgroundColor: 'black', lineHeight: '30px', maxWidth: '50%', textAlign: 'center', }}
                                className="text-white">React.JS
                                </CardTitle>
                        </CardImgOverlay>
                    </Card>
                    <Card>
                        <CardImg variant="top" src="reactNative.png" width="50px" height="300px" fluid />
                        <CardImgOverlay>
                            <CardTitle style={{ backgroundColor: 'black', lineHeight: '30px', maxWidth: '50%', textAlign: 'center', }}
                                className="text-white">React Native
                                </CardTitle>
                        </CardImgOverlay>
                    </Card>
                    <Card>
                        <CardImg variant="top" src="nextJS.png" width="50px" height="300px" fluid />
                        <CardImgOverlay>
                            <CardTitle style={{ backgroundColor: 'black', lineHeight: '30px', maxWidth: '50%', textAlign: 'center', }}
                                className="text-white">Next.JS
                                </CardTitle>
                        </CardImgOverlay>
                    </Card>
                </CardDeck>
            </Container>
        </div>
    );
};

export default TecnologiasAtuais;