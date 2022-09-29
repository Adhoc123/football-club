import React from 'react';
import './SinglePackage.css'
const SinglePackage = (props) => {

    const {picture, name, age, time, about} = props.item;
    const {times} = props;
    return (
        <div className='cart'>
            <img src={picture} />
            <h1>{name}</h1>
            <p>{about}</p>
            <p><strong>Age:</strong> {age}</p>
            <p><strong>Time: </strong> {time}m</p>
            <button onClick={()=>times(props.item.time)}>Add To Cart</button>
        </div>
    );
};

export default SinglePackage;