import React from 'react';
import './SinglePackage.css'
const SinglePackage = (props) => {
    console.log(props);
    const {picture, name, age, time, about} = props.item;
    const {times} = props;
    return (
        <div className='cart'>
            <img src={picture} />
            <h1>{name}</h1>
            <p>{about}</p>
            <p>Age: {age}</p>
            <p>Time: {time}m</p>
            <button onClick={()=>times(props.item.time)}>Add To Cart</button>
        </div>
    );
};

export default SinglePackage;