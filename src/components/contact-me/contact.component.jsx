import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import emailjs from 'emailjs-com'
import './contact.syle.css'

const Result = () => {
     return (
         <p>Your message has been successfully sent. I will contact you as soon as I can.</p>
     )
}

const Contact = () => {
    const [result, showResult] = useState(false)
 
    const sendEmail = (e) => {
        e.preventDefault();
        console.log('Submitted');

        const formData = new FormData(e.target),
              formDataObj = Object.fromEntries(formData.entries());
        console.log(formDataObj);

        emailjs.sendForm('service_0gfhw0o', 'template_tgizpzc', e.target, 'user_cdiUHWN1rlIsVGZzm3vzW')
        .then(
            (result) => {
                console.log(result.text);
            }, 
            (error) => {
                console.log(error.text);
            }
        );
        e.target.reset();
        showResult(true)
    }

    setTimeout(() => {
        showResult(false)
    }, 5000)
    return (
        <div id="contact">
            <Container>
                <Form onSubmit={sendEmail}>
                    <Form.Group className="mb-3" controlId="ControlTextarea1">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" rows={3} name="fullName" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ControlTextarea1">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" rows={3} name="phone" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" name="email"/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ControlTextarea1">
                        <Form.Label>Message</Form.Label>
                        <Form.Control as="textarea" rows={3} name="message"/>
                    </Form.Group>
                    <Button type="submit">
                        Submit
                    </Button>
                    <div className="row">
                        { result ? <Result/> : null}
                    </div>
                </Form>
            </Container> 
        </div>
    )
}

export default Contact;