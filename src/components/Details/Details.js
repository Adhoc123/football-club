import React from 'react';
import './Details.css'
let sum = [];
const Details = (props) => {
    console.log(props)
    // localStorage.setItem('Break-time',JSON.stringify(props.value));
    // const storedValue = ()=>{
    //     const currentVal = localStorage.getItem('Break-time');
    //     let cart = {};
    //     if(currentVal){
    //         cart = JSON.parse(currentVal);
    //     }
    //     return {};
    // }
    
    if(!sum.includes(props.old)){
        sum.push(props.old)
    }
    var result = sum.reduce((x, y) => x + y);
    return (
        <div className='details'>
            <h4>Total Time</h4>
            <hr></hr>
            <p><strong>Exercise Time:</strong> {result}</p>
            <p><strong>Break Time:</strong> {props.value}</p>
            <button>Activity Done</button>
        </div>
    );
};

export default Details;