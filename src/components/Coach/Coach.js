import React from 'react';
import { Card, Col } from 'react-bootstrap';
import './Coach.css'

const Coach = (props) => {
    const { name, Concentration, Experience, img } = props.coach;
    console.log(props);
    return (
        <Col>
            <Card className='card h-100 rounded shadow-lg'>
                <Card.Img variant="top" src={img} className="img" />
                <Card.Body>
                    <h5 className="card-title">Coach Name: {name}</h5>
                    <p className='text-dark'>Coach of: {Concentration}</p>
                    <p className='text-dark'>Total Experience: {Experience} Years </p>
                </Card.Body>
            </Card>
        </Col>

    );
};

export default Coach;