import React from 'react';
import { Col, Container, Image, Row } from 'react-bootstrap';
import './About.css'
const About = () => {
    return (
        <div>
            <Container>
                <Row className='container'>
                    <Col sm={6}>
                        <h2 className='title'>Our Mission</h2>
                        <p className='about-section'>
                            There is a nothion that to grow a perfect country you have <br></br> to be ruthless in sport.But we know there's a better<br></br> way to grow.One where what's good for the bottom <br></br> line is also good for all.We believe business can grow with a conscience and succeed with a soul and they can do it with inbound.That's why we created a training center to get the best Atheltes for the nation.
                        </p>
                    </Col>
                    <Col sm={4}>
                        <Image className='about-img' src="https://lh3.googleusercontent.com/proxy/AJefVFaHqRUK0SE9rJbDojpULuPJlq9ST4IQ0ax1pvNYvGD_ln9dNhDm9opntU6iS6icNa_CNcfIlPcODshg8WgLWdISg9LrEtuSi7mZm7oq7l9P3LO5HQlVgA" rounded />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};



export default About;