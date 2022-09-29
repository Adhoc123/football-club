import React, { useEffect } from 'react';
import './Details.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let sum = [];
const Details = (props) => {
    const storedCart = localStorage.getItem('Break-time');
    console.log(storedCart)
    let cart = {};
    if(storedCart){
        cart = JSON.parse(storedCart)
    }
    cart = props.value;
    localStorage.setItem('Break-time',JSON.stringify(cart));

    useEffect(()=>{},
    [props.value])
    // const getStoredCart = ()=>{
    //     const storedCart = localStorage.getItem('Break-time');
    //     let saved = {}
    //     if(storedCart){
    //         saved = JSON.parse(storedCart);
    //     }
    //     return saved;
    // }
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
    let result = sum.reduce((x, y) => x + y);
    // toast.configure();
    const showToastMessage = () => {
        toast.info('Hello, Do you like Paulo Coelho?', {
            position: toast.POSITION.TOP_RIGHT
        });
    };
    return (
        <div className='details'>
            <h4>Total Time</h4>
            <hr></hr>
            <p><strong>Exercise Time:</strong> {result}</p>
            <p><strong>Break Time:</strong> {props.value}</p>
            <button onClick={showToastMessage}>Activity Done</button>
            <ToastContainer />
            
        </div>
    );
};

export default Details;