import React from 'react';



const AlertButton = ({alertButton, handleClick}) => {

  // console.log(handleClick);
  let buttonClass = alertButton ? "btn btn-secondary btn-lg button-alert" : "btn btn-danger btn-lg button-alert";

  return <button onClick={handleClick} type="button" className={buttonClass} ><i className="fa fa-bullhorn"></i><div>Poster une alerte</div></button>

}

export default AlertButton;
