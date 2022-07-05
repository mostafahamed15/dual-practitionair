import { Navbar, Nav } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { AiOutlineBell } from 'react-icons/ai';
import { FiSettings } from 'react-icons/fi';
import { CgLogOff } from 'react-icons/cg';

import logo from '../../assets/imgs/SehaLogo.png';

import { Link } from 'react-router-dom';

interface HeaderProps {
  title: string;
}
export default function Header({ title }: HeaderProps) {
  return (
    <Navbar className="p-4" expand="lg">
      <Navbar.Brand href="/">
        <Link to="/">
          <Image src={logo} fluid={true} thumbnail={true} width="150" />
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
        <Nav className="justify-content-end">
          <Nav.Item>
            <Nav.Link className="text-secondary font-weight-bold text-sm">
              {title}
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">
              <AiOutlineBell className="text-sm" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">
              <FiSettings className="text-sm" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-3">
              <CgLogOff className="text-sm" />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
