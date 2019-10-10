import React from 'react';

const Profil = ({userConnected}) => {

  if(userConnected){
    return(
      <div className="profil-page">
        <p>Todo : page Profil</p>
      </div>
    )
  } else {
    window.location.href = "/connexion";
  }

}


export default Profil;
