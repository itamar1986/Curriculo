import React, { useState } from 'react';
import Link from 'next/link';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    Container
} from 'reactstrap';

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
            <Navbar className="text-center" color="light" light expand="md" style={{ background: "linear-gradient(to right, #212121, #616161, #9e9e9e, #bdbdbd, #e0e0e0, #f5f5f5)",}}>
                <Container className="justify-content-md-center">
                    <NavbarBrand className="text-light" href="/">Itamar S. da Silva</NavbarBrand>
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <Link href="/experiencias">
                                    <NavLink className="text-light" href="/experiencias">EXPERIÊNCIA PROFISSIONAL</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/certificacoes">
                                    <NavLink className="text-light" href="/certificacoes">CERTIFICAÇÕES</NavLink>
                                </Link>
                            </NavItem>
                            <NavItem>
                                <Link href="/certificacoesMais">
                                    <NavLink className="text-light" href="/certificacoesMais">NOÇÕES</NavLink>
                                </Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    );
}
export default Menu;