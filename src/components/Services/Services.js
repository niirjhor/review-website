import React, { useEffect, useState } from 'react';
import { Row } from 'react-bootstrap';
import Sport from '../Sport/Sport';

const Services = () => {
    const [sports, setSports] = useState([]);
    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setSports(data)) //fetch API data
    }, [])
    return (
        <div>
            <h2> We have more than 20 Sports Training Program to get the best sports person around the country </h2>
            <Row xs={1} md={3} className="g-4 h-100">
                {
                    sports.map(sport => <Sport
                        sport={sport}
                        key={sport.id}></Sport>)
                }
            </Row>
        </div>
    );
};

export default Services;