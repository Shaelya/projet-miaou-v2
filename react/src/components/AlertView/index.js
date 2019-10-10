import React from 'react';

const AlertView = ({data}) => {
  let alertData = data.location.state.alertData;
  console.log(alertData);

  return (
    <div className="alertview-page">
    <h1 className="h1">{alertData.name} ref : {alertData.id} </h1>
    <table className="table">
      <tbody>
        <tr>
          <th>Nom</th>
            <td>{alertData.name}</td>
        </tr>
        <tr>
          <th>Type</th>
            <td>{alertData.type}</td>
        </tr>
        <tr>
          <th>Lieu</th>
            <td>{alertData.lieu}</td>
        </tr>
        <tr>
          <th>Sexe</th>
            <td>{alertData.sex}</td>
        </tr>
        <tr>
          <th>Description</th>
            <td>{alertData.description}</td>
        </tr>
      </tbody>
    </table>

    <h2 className="h2">Commentaires</h2>
    <table className="table">
      <tbody>
        {alertData.comments.map((comment) => (
          <tr key={comment.id}>
          <th>{comment.user.firstName}</th>
            <td>{comment.createdAtJson}</td>
            <td>{comment.text}</td>
        </tr>
        ))}
      </tbody>
    </table>
    
    <button>Infos proprietaire</button>
    <button>Poster un commentaire</button>
    
    <img src={alertData.picture} />



  </div>

  )
}


export default AlertView;
