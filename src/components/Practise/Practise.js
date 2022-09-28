import React, { useEffect, useState } from 'react';
import SinglePackage from '../SinglePackage/SinglePackage';
import './Practise.css'

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
                {/* <h1>tHIS IS FROM PACK {items.length}</h1> */}
                {
                    items.map(item=><SinglePackage
                    key={item._id}
                    item={item}
                    ></SinglePackage>)
                }
            </div>
            <div className="details-container">
                <h1>This is from details</h1>
            </div>
        </div>
    );
};

export default Practise;