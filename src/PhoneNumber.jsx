import React from 'react';
import './PhoneNumber.css'

const PhoneNumber = ({phone, cell})=>{
return(
    <div className="phoneNumber">
        <p>Home: {phone}</p>
        <p>Mobile: {cell}</p>
    </div>
)
}
export default PhoneNumber;


