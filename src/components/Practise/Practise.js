import React, { useEffect, useState } from 'react';
import SinglePackage from '../SinglePackage/SinglePackage';
import './Practise.css'
import picture from '../../images/emon.jpg'

const Practise = () => {
    const [items,setItems] = useState([]);
    useEffect(()=>{
        fetch('packages.json')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])
    return (
        <div className='total-body'>
            
            <div className="package-container">
                {
                    items.map(item=><SinglePackage
                    key={item._id}
                    item={item}
                    ></SinglePackage>)
                }
            </div>
            <div className="details-container">
                <div>
                <div className='myself'>
                    <img src={picture} alt=""></img>
                    <div>
                        <p>Emon, Mehedi Hasan</p>
                        <p className='location'>Dhaka, Bangladesh</p>
                    </div>
                    
                </div>
               
                <p className='about'>Hi, This is Emon. Passionate about software
                    engineering. His age is 24. He loves to do software development.
                    Sometimes he solves problem for sharpening his solving technique.
                </p>
                </div>
            </div>
        </div>
    );
};

export default Practise;