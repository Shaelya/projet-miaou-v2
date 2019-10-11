import React from 'react';

const Profil = ({userData}) => {

  if(userData.userConnected){
    let user = "";
    if(userData.users){
      user = userData.users.filter((currentUser) => userData.userId == currentUser.id );
    }

    return(
      <div className="profil-page">
        <table className="table">
                <tbody>
                  <tr>
                    <th>Nom</th>
                      <td>{user[0].lastName}</td>
                  </tr>
                  <tr>
                    <th>Prénom</th>
                      <td>{user[0].firstName}</td>
                  </tr>
                  <tr>
                    <th>E-mail</th>
                      <td>{user[0].email}</td>
                  </tr>
                  <tr>
                    <th>Téléphone</th>
                      <td>{user[0].phone}</td>
                  </tr>
                </tbody>
                </table>
      </div>
    )
  } else {
    window.location.href = "/connexion";
  }

}


export default Profil;
