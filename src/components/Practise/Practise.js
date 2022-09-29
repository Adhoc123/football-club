import React, { useEffect, useState } from 'react';
import SinglePackage from '../SinglePackage/SinglePackage';
import './Practise.css'
import picture from '../../images/emon.jpg'
import Break_Time from '../Break-Time/Break_Time';
import Details from '../Details/Details';

const Practise = () => {
    const [items,setItems] = useState([]);
    useEffect(()=>{
        fetch('packages.json')
        .then(res=>res.json())
        .then(data=>setItems(data))
    },[])
    const [old, setOld] = useState(0);
    const times = (props)=>{
        setOld(props);
        console.log(old);
    }
    const [value, setValue] = useState(0);
    const handle = (props)=>{
        setValue(props);
    }
    return (
        <div className='total-body'>
            
            <div className="package-container">
                {
                    items.map(item=><SinglePackage
                    key={item._id}
                    item={item}
                    times={times}
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
                <div className='bk'>
                    <h4>Break Time</h4>
                    <div className='break-time'>
                        {
                             items.map(item=><Break_Time
                                key={item._id}
                                item={item}
                                handle={handle}
                                ></Break_Time>)
                        }
                    </div>
                </div>  
                <div>
                    <div>
                       <Details
                       value={value}
                       old={old}
                       ></Details>
                    </div>
                </div>  
                
            </div>
        </div>
    );
};

export default Practise;