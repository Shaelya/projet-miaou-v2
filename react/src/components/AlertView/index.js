import React from 'react';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import './alertview.sass';
import axios from 'axios';

class AlertView extends React.Component {

  state = {
    titleValue: "",
    commentValue: ""
  }

  componentDidMount(){
  axios.get('/api/user/isConnected').then(result => {
    if(result.data[0].userConnected){
    this.setState({
    userConnected: result.data[0].userConnected,
    userId: result.data[0].userId,
    userFirstName: result.data[0].userFirstName,
    userLastName: result.data[0].userLastName,
  
  })}
 } ) 
  .catch((error) => {
    console.error(error);
  });
}

  handleClickInfo = () => {
    const MySwal = withReactContent(Swal);
    let alertData = this.props.data.location.state.alertData;
    if(alertData.visibility === 'oui' ){
    } else{
      MySwal.fire({
        text: 'Le propriétaire a choisi de ne pas divulguer ses informations, si vous souhaitez le contacter vous pouvez lui laisser un commentaire',
        type: "error",
        confirmButtonText: 'Ok'
    }) 
  }
}

  handleDelete = () => {
  //   const MySwal = withReactContent(Swal);
  //   let alertData = this.props.data.location.state.alertData;
  //   MySwal.fire({
  //     text: 'Voulez-vous vraiment supprimer cette fiche alerte ?',
  //     type: "warning",
  //     showCancelButton: true,
  //     confirmButtonText: 'Oui',
  //     cancelButtonText: 'Non'
  // }).then((result) =>{
  //   if(result.value){

  //     axios.delete(`advert/delete/${alertData.id}`)
  //     .then(res => {
  //       Swal.fire({
  //         text: 'L\'alerte a été supprimée',
  //         type: 'success'
  //       })

  //     }).catch(err => {
  //       console.log(err);
  //     });

      
  // }
   
  // })
    

  }

  handleChangeTitle = (e) => {

    this.setState({ titleValue: e.target.value })

  }

  handleChangeText = (e) => {

    this.setState({ commentValue: e.target.value })

  }

  handleComment = (e) => {
    e.preventDefault();
    let alertData = this.props.data.location.state.alertData;
    const promise = axios.post(
      '/api/comment/new',
      { 
        title: this.state.titleValue,
        text: this.state.commentValue,
        advert_id: alertData.id
      }
      // { headers: { 'Content-Type': 'application/json' } }
    )

  }

  render() {
    let alertData = this.props.data.location.state.alertData;

    let infoButton = (this.state.userId == alertData.user.id) ? <button onClick={this.handleDelete} className="btn btn-danger ml-4 mt-5 mr-5">Supprimer l'alerte</button> : <button onClick={this.handleClickInfo} className="btn btn-info ml-4 mt-5 mr-5">Infos proprietaire</button>;

    if(alertData.visibility === 'oui'){
      infoButton = (<div className="d-inline">
      <button onClick={this.handleClickInfo} className="btn btn-info ml-4 mt-5 mr-5" type="button" data-toggle="collapse" data-target="#collapseInfos" aria-expanded="false" aria-controls="collapseInfos">Infos proprietaire</button>
      <div className="collapse" id="collapseInfos">
      <div className="card card-body mt-2 card-infos">
        <div>Prénom : {alertData.user.firstName}</div>
        <div>Nom : {alertData.user.lastName}</div>
        <div>Téléphone : {alertData.user.phone}</div>
        <div>E-mail : {alertData.user.email}</div>
      </div>
    </div>
    </div>)
    }

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
                  <form onSubmit={this.handleComment}>
                    <input type="text" id="title" name="title" placeholder="Titre de votre commentaire" value={this.state.titleValue} onChange={this.handleChangeTitle} />
                    <br/>

                    <textarea  name="text" rows="10" cols="30" placeholder="Votre commentaire" value={this.state.commentValue} onChange={this.handleChangeText} />
                    <br/>
                    <input type="submit"  className="btn btn-dark ml-3 mt-5 mr-5" value="Poster un commentaire"></input>
                  </form>
                  {infoButton}
                  
            </div>
          </div>
          <div className="col-md-5">
            <div className="text-center"><img className="alerte-image card-img" src={alertData.picture} /></div>
          </div>
        </div>
        </div>

      )
   
  }
}



export default AlertView;
