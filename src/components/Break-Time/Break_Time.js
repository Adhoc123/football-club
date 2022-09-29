import React from 'react';
import './Break_Time.css'
const Break_Time = (props) => {
    const {time} = props.item;
    const timeButton = ()=>{
        console.log('clicked');
    }
    return (
        <div className='time'>
            <p onClick={timeButton}>{time}m</p>
        </div>
    );
};

export default Break_Time;