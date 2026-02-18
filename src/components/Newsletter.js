import { useState } from "react";
import { Col, Row } from "react-bootstrap";

export const Newsletter = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you! I will contact you soon.");
    setEmail('');
  }

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row className="align-items-center">
          
          <Col lg={12} md={6} xl={5}>
            <h3>Let’s Work Together 🚀</h3>
            <p>
              Have a project idea, internship opportunity, or freelance work? 
              Drop your email and let’s connect!
            </p>
          </Col>

          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input 
                  value={email} 
                  type="email" 
                  onChange={(e) => setEmail(e.target.value)} 
                  placeholder="Enter your email" 
                />
                <button type="submit">Connect</button>
              </div>
            </form>
          </Col>

        </Row>
      </div>
    </Col>
  )
}
