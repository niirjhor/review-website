import React from 'react';
import './Sport.css'
import { Card, Col } from 'react-bootstrap';

const Sport = (props) => {
    const { name, img, TotalStudents, Rank, TotalCoaches, TotalHours, MaxAgeLimit, CourseFee } = props.sport;
    return (
        <Col>
            <Card className='card h-100 shadow-lg'>
                <Card.Img variant="top" src={img} className="img" />
                <Card.Body>
                    <h5 className="card-title">Sports Name: {name}</h5>
                    <p className='text-dark'>Total Training Hours: {TotalHours}</p>
                    <p className='text-dark'>No of Coaches: {TotalCoaches} </p>
                    <p className='text-dark'>Max Age Limit to enter: {MaxAgeLimit} Years</p>
                    <p className='text-dark'>No of students enrolled: {TotalStudents}</p>
                    <p className='text-dark'>Sport Ranked in our Academy: {Rank} </p>
                    <p className='text-dark'>Course Fee: ${CourseFee} </p>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default Sport;