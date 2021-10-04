import React, { useEffect, useState } from 'react';
import { Carousel, Row } from 'react-bootstrap';
import Coach from '../Coach/Coach';

const Coaches = () => {
    const [coaches, setCoaches] = useState([]);
    useEffect(() => {
        fetch('./coaches.json')
            .then(res => res.json())
            .then(data => setCoaches(data))
    }, [])
    return (
        <div>
            <h2 className='fw-bold text-primary'>There are more than 300 coaches in our academy. <br /> Among them top 6 coaches are displayed here</h2>
            <Row xs={1} md={3} className="g-4 h-100">

                {
                    coaches.map(coach => <Coach coach={coach}
                        key={coach.id}></Coach>)
                }

            </Row>
        </div>

    );
};

export default Coaches;