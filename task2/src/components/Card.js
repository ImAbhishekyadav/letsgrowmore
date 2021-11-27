import React from 'react';

const Card = ({ name, email, id, lname}) => {
  //Displays all the information in a card format
    return (
      <div style={{backgroundColor:"rgba(119,139,254,0.51)"}} className='tc br2 pa5 ma3 dib bw2 shadow-10'>
        <img alt='robots' src={`https://reqres.in/img/faces/${id}-image.jpg`} height="250px " width="250px"/>
        <div>
		  <br />
          <h2>{name} {lname}</h2>
		  <br />
          <h3>{email}</h3>
        </div>
      </div>
    );
  }

export default Card;
