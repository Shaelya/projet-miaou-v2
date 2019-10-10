import React from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


class AlertView extends React.Component {

  handleClickInfo = (e) => {
    const MySwal = withReactContent(Swal);
    let alertData = this.props.data.location.state.alertData;
    if(alertData.visibility === 'oui'){

    } else {
      MySwal.fire({
        text: 'Le propriétaire a choisi de ne pas divulguer ses informations',
        type: "error",
        confirmButtonText: 'Ok'
      })
    }
  }

  render() {
    let alertData = this.props.data.location.state.alertData;

    return(
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
          
          <button onClick={this.handleClickInfo}>Infos proprietaire</button>
          <button>Poster un commentaire</button>
          
          <img src={alertData.picture} />



        </div>

    )
  }
}



export default AlertView;
