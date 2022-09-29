import React, { useState } from 'react';
import Details from '../Details/Details';

import './Break_Time.css'
const Break_Time = (props) => {
    console.log(props)
    const {time} = props.item;
    const {handle} = props;
    return (
          <div className='time'>
              <p onClick={()=>handle(props.item.time)}>{time}m</p>  
          </div>    
          
    );
};

export default Break_Time;