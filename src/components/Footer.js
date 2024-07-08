import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();

  return (
    <footer className="footer bg-dark text-light py-5">
      <Container>
        <Row className="align-items-center">
          <Col md="4">
            <h3 className="mb-0 text-center text-md-start">Designed and Developed by Naresh</h3>
          </Col>
          <Col md="4">
            <h3 className="mb-0 text-center">Copyright © {year} CWS</h3>
          </Col>
          <Col md="4">
            <ul className="list-inline social-icons text-center text-md-end mb-0">
              <li className="list-inline-item me-3">
                <a href="https://github.com/bounty" target="_blank" rel="noopener noreferrer" className="text-light">
                  <AiFillGithub size={24} />
                </a>
              </li>
              <li className="list-inline-item me-3">
                <a href="https://twitter.com/bounty" target="_blank" rel="noopener noreferrer" className="text-light">
                  <AiOutlineTwitter size={24} />
                </a>
              </li>
              <li className="list-inline-item me-3">
                <a href="https://www.linkedin.com/in/nareshkhatiwada/" target="_blank" rel="noopener noreferrer" className="text-light">
                  <FaLinkedinIn size={24} />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/naresh_khatiwada/" target="_blank" rel="noopener noreferrer" className="text-light">
                  <AiFillInstagram size={24} />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
