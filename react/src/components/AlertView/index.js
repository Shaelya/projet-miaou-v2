import React from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import './alertview.sass';


class AlertView extends React.Component {
  state = {
    visibility: false
  }

  handleClickInfo = (e) => {
    const MySwal = withReactContent(Swal);
    let alertData = this.props.data.location.state.alertData;
    if(alertData.visibility === 'oui'){
      this.setState({visibility: true})
    } else {
      MySwal.fire({
        text: 'Le propriétaire a choisi de ne pas divulguer ses informations, si vous souhaitez le contacter vous pouvez lui laisser un commentaire',
        type: "error",
        confirmButtonText: 'Ok'
      })
    }
  }

  render() {
    let alertData = this.props.data.location.state.alertData;

    if(this.state.visibility){
      return(
        <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-7">
            <div className="card-body">
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

                  <button onClick={this.handleClickInfo} className="btn btn-info" type="button" data-toggle="collapse" data-target="#collapseInfos" aria-expanded="false" aria-controls="collapseInfos">Infos proprietaire</button>
                  <button>Poster un commentaire</button>
                  <div className="collapse" id="collapseInfos">
                  <div className="card card-body">
                    <div>Prénom : {alertData.user.firstName}</div>
                    <div>Nom : {alertData.user.lastName}</div>
                    <div>Téléphone : {alertData.user.phone}</div>
                    <div>E-mail : {alertData.user.email}</div>
                  </div>
                </div>
              
            </div>
          </div>
          <div className="col-md-5">
            <img className="alerte-image card-img" src={alertData.picture} />
          </div>
        </div>
        </div>

      )
    } else {
      return(
        <div className="card mb-3">
          <div className="row no-gutters">
            <div className="col-md-7">
              <div className="card-body">
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

                    <button onClick={this.handleClickInfo} className="btn btn-info">Infos proprietaire</button>
                    <button>Poster un commentaire</button>
                
              </div>
            </div>
            <div className="col-md-5">
              <img className="alerte-image card-img" src={alertData.picture} />
            </div>
          </div>
        </div>
      )
    }
  }
}



export default AlertView;
