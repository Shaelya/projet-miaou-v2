import React from 'react';
import { Link } from 'react-router-dom';
import'./profil.sass';

const Profil = ({userData, data}) => {

  if(userData.userConnected){
    let user = "";
    let comments = "";
    let advertData = "";
    if(userData.users){
      user = userData.users.filter((currentUser) => userData.userId == currentUser.id );
    }
    if(userData.comments){
      comments = userData.comments.filter((comment) => userData.userId == comment.user.id);
    }
    if(data){
      advertData = data.filter((advert) => userData.userId == advert.user.id);
    }

    return(
      <div className="profil-page">
        <h1 className="h1 mb-4">Mes Infos</h1>
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

        <h2 className="h2 mt-5 text-center mb-4">Mes commentaires</h2>
        <table className="table">
          <tbody>
            {comments.map((comment) => {
              let commentAdvert = data.filter((advert) => comment.advert.id == advert.id);
              return(
              <tr key={comment.id}>
              <th>{comment.createdAtJson}</th>
                <td>{comment.advert.name} Ref : {comment.advert.id}</td>
                <td><Link to={ {
              pathname: '/fiche-alerte-vue',
              state: { alertData: commentAdvert[0]  }
            } }> consulter</Link></td>
            </tr>
            )
            })
          }
          </tbody>
        </table>
        <h2 className="h2 mt-5 text-center mb-4">Mes annonces</h2>
        <table className="table">
          <tbody>
            {advertData.map((advert) => {
              console.log(advert);
              return(
              <tr key={advert.id}>
              <th>{advert.createdAtJson}</th>
                <td>{advert.name} Ref : {advert.id}</td>
                <td><Link to={ {
              pathname: '/fiche-alerte-vue',
              state: { alertData: advert  }
            } }> consulter</Link></td>
            </tr>
            )
            })}
          </tbody>
        </table>
      </div>
    )
  } else {
    window.location.href = "/connexion";
  }

}


export default Profil;
