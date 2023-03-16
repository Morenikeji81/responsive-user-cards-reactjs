import React from 'react';
import './SocialCard.css';
import Location from './Location';
import Phone from './PhoneNumber';



const SocialCard = ({userData}) =>{
return(
   <div className="card">

    <div className='card_title'>
    <h3>{userData.name.first}  {userData.name.last}</h3>
    </div>

    <div className="gender">
    <h3>{userData.gender}</h3>
    <p>{userData.dob.age} years</p>
    </div>

    <div className="card_body">
    <Location location={userData.location}/>
    <Phone phone={userData.phone} cell={userData.cell}/>
     <p className='email'>{userData.email}</p>
    <div className="card_image"><img src={userData.picture.medium} alt={userData.picture.medium}></img></div>
    </div>

    </div>
)
}
export default SocialCard;
 
