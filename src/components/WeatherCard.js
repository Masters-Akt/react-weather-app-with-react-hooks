import React from 'react';
import {Card} from 'react-bootstrap';

const WeatherCard = ({dt, temp_min, temp_max, main, icon}) => {
    const date = new Date(dt); //object with Date class constructor 
    return (
        <Card style={{width: '9rem'}}>
            <Card.Img variant="top" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
            <Card.Body>
                <Card.Title>{main}</Card.Title>
                <p>
                    {date.toLocaleDateString()} - {date.toLocaleTimeString()}
                </p>
                <p>Min: {temp_min}</p>
                <p>Max: {temp_max}</p>
            </Card.Body>
        </Card>
    );
};

export default WeatherCard;