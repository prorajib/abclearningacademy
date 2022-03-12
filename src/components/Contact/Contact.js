import React from "react";
import "./Contact.css"; //importing css style
import { Col, Form, Row, Button } from "react-bootstrap"; //importing BOOTSTRAP

const Contact = () => {
    return (
        <main className="contact">
            <div className="container contact-form">
                <div className="contact-heading-box">
                    <h2>Contact Us</h2>
                    <p>
                        Contact us for any kind of query. Let us know how we help you. We you try our best to solve your problem.
                    </p>
                </div>
                {/*-----------------------INPUT FIELDS--------------------------*/}
                
                <Form style={{textAlign:"left"}} className="full-width mx-auto pb-4">
                    <Row xs={1} md={2} className="mb-3">
                    <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="form-label">Full Name</Form.Label>
                        <Form.Control type="text" placeholder="Full Name" />
                    </Form.Group>
                    <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter you email address." />
                    </Form.Group>
                    </Row>
                 

                    <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="form-label">Address</Form.Label>
                        <Form.Control type="text" placeholder="Enter your Address." />
                    </Form.Group>

                  <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                       <Form.Label>Example textarea</Form.Label>
                       <Form.Control as="textarea" rows={3} placeholder="Type your massege." />
                   </Form.Group>
                   <Button variant="primary" type="submit">
                        Submit
                    </Button>
             </Form>
            </div>
        </main>
    );
};

export default Contact;
<h1>This is contact</h1>;
