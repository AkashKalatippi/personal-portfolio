import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          
          {/* Newsletter Section */}
          <MailchimpForm />

          {/* Logo Section */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>

          {/* Social Links Section */}
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/akashkalatippi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon1} alt="LinkedIn" />
              </a>

              {/* GitHub */}
              <a
                href="https://github.com/AkashKalatippi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon2} alt="GitHub" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/akash_kalatippi"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={navIcon3} alt="Instagram" />
              </a>

            </div>

            <p>
              © {new Date().getFullYear()} Akash Kalatippi. All Rights Reserved
            </p>
          </Col>

        </Row>
      </Container>
    </footer>
  );
};
