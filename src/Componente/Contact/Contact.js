import { Container, Row, Col } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import "./Contact.css";

const Contact = () => {
  return (
    <Container>
      <Row>
        <Col lg="12">
          <h1 className="display-4 mb-4">Contact Us</h1>
        </Col>
      </Row>

      <Row className="sec_sp">
        <Col lg="5" className="mb-5">
          <h3 className="color_sec py-4">Get in touch</h3>
          <adress>
            <strong> Email: gitaristi@gmail.com</strong>
            <br />
            <br />
            <br />
            <p>
              <strong>Phone : +38267123321</strong>
            </p>
          </adress>
          <p>
            Thank you for your interest in our services! If you have any
            questions or would like to get in touch with us, please don't
            hesitate to reach out.
          </p>
        </Col>
        <Col lg="6" className="form-group">
          <form className="contact_form w-100">
            <Row>
              <Col lg="6" className="form-group">
                <input
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Name*"
                  type="text"
                />
              </Col>
              <Col lg="6" className="form-group">
                <input
                  className="form-control rounded-0"
                  id="email"
                  name="email"
                  placeholder="Email*"
                  type="email"
                />
              </Col>
            </Row>
            <Row>
              <Col lg="12" className="form-group">
                <input
                  className="form-control"
                  id="subject"
                  name="subject"
                  placeholder="Subject*"
                  type="text"
                />
              </Col>
            </Row>
            <textarea
              className="form-control rounded-0 "
              id="message"
              name="message"
              placeholder="Message*"
              rows="5"
            ></textarea>
            <br />
            <Row>
              <Col lg="12" className="form-group">
                <button className="btn ac_btn custom-btn" type="submit">
                  Send
                </button>
              </Col>
            </Row>
          </form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
