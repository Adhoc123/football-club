import React from 'react';
import './SinglePackage.css'
const SinglePackage = (props) => {
    console.log(props.item);
    const {picture, name, age, time, about} = props.item;
    return (
        <div className='cart'>
            <img src={picture} />
            <h1>{name}</h1>
            <p>{about}</p>
            <p>Age: {age}</p>
            <p>Time: {time}</p>
        </div>
    );
};

export default SinglePackage;