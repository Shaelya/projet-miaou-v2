import React from 'react';
import './alertbutton.css';



const AlertButton = ({alertButton, handleClick, userConnected}) => {

  // console.log(handleClick);
  let buttonClass = alertButton ? "btn btn-secondary btn-lg button-alert" : "btn btn-danger btn-lg button-alert button-alert-custom";

  return <button onClick={() => handleClick(userConnected)} type="button" className={buttonClass} ><i className="fa fa-bullhorn"></i><div>Poster une alerte</div></button>

}

export default AlertButton;
