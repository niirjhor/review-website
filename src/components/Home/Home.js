import React, { useEffect, useState } from 'react';
import { FormControl, Button, InputGroup, Row, Image } from 'react-bootstrap';
import Training from '../Training/Training';
import './Home.css'
const Home = () => {
    const [trainings, setTrainings] = useState([]);
    useEffect(() => {
        fetch('./training.json')
            .then(res => res.json())
            .then(data => setTrainings(data)) //fetch API data
    }, [])
    return (
        <div className='banner'>
            <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSRq0LFpu57Eo6mgtKwZqgVkZNO_aASq5DRog&usqp=CAU" rounded />
            <h2 className='title mb-3 pb-3'>Welcome to the largest Sports Training Center of Bangladesh</h2>
            <div className='banner-container mb-5 pb-3'>
            </div>
            <h3 className='bg-warning'>Why Choose Us</h3>
            <h5 className='fw-bold'>We provide the worlds' most <br />prestigious and best facility training<br /> for more than 20 Sports</h5>
            <InputGroup className="mb-3 input-level me-5">
                <FormControl
                    placeholder="Search Your Sport"
                    aria-label="Search Your Sport"
                    aria-describedby="basic-addon2"
                />
                <Button variant="primary" size="lg">
                    Search
                </Button>

            </InputGroup>
            <Row xs={1} md={3} className="g-4 h-100">
                {
                    trainings.map(training => <Training
                        training={training}
                        key={training.id}></Training>)
                }
            </Row>

        </div>
    );
};

export default Home;