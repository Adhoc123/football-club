import React from 'react';
import './Details.css'
const Details = (props) => {
    
    console.log(props)
    return (
        <div className='details'>
            <h4>Total Time</h4>
            <hr></hr>
            <p>Exercise Time:</p>
            <p>Break Time: {props.value}</p>
        </div>
    );
};

export default Details;