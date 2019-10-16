import React from 'react';
import { Link } from 'react-router-dom';
import'./profil.sass';
import'./profil.css';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class Profil extends React.Component {

  state = {}

  componentDidMount() {
    axios.get('/api/user/isConnected').then(result => {
      if(result.data[0].userConnected){

        axios.get('/api/profil/user').then(result2 => {
          let currentUser = result2.data.filter((user) => result.data[0].userId == user.id );
          axios.get('/api/profil/comment').then(result3 => {
            let currentComments = result3.data.filter((comment) => result.data[0].userId == comment.user.id);
            axios.get('/api/status').then(result4 => {
              let adverts = result4.data;
              let currentAdvert = result4.data.filter((advert) => result.data[0].userId == advert.user.id);
              return this.setState({
                userConnected: result.data[0].userConnected,
                userId: result.data[0].userId,
                userFirstName: result.data[0].userFirstName,
                userLastName: result.data[0].userLastName,
                user: currentUser,
                comments: currentComments,
                advert: currentAdvert,
                adverts: adverts
              })
            })
            .catch((error) => {
              console.error(error);
            });
          })
          .catch((error) => {
            console.error(error);
          });
          })
        .catch((error) => {
          console.error(error);
        });
     
      }else {
        return this.setState({userConnected: result.data[0].userConnected})
    }
    } ) 
    .catch((error) => {
      console.error(error);
    });

    let url = new URLSearchParams(location.search);
    let paramsUrl = url.get('deleted_advert');
    if( paramsUrl == "true"){
      this.notify();
    window.history.replaceState(null, null, window.location.pathname);
    }
  }

  notify = () => toast.success("Fiche alerte supprimée !",{className: 'added-advert-toast'} );

  handleDeleteComment = (commentId) => {
    const MySwal = withReactContent(Swal);
    MySwal.fire({
      text: 'Voulez-vous vraiment supprimer ce commentaire ?',
      type: "warning",
      showCancelButton: true,
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non'
  }).then((result) =>{
    if(result.value){
      axios.post('/api/delete/comment', { 
        id: commentId
       }).then(response => {
        MySwal.fire({
          text: 'Commentaire supprimé',
          type: "success",
          confirmButtonText: 'Ok'
        }).then((result) =>{
          // window.location.href = "/profil";
          axios.get('/api/profil/comment').then(result => {
            let refreshedComments = result.data.filter((comment) => result.data[0].userId == comment.user.id);
            this.setState({comments: refreshedComments})
            
          })
          .catch(error => {
            console.log('ERROR : ', error);
          });

        }).catch(error => {
            console.log('ERROR : ', error);
        });
    })
   
    }
  })
  }

  render() {
  if(this.state.userConnected){
    return(
      <div className="container">
        <div className="profil-page jumbotron ml-5 mr-5 bg-light">
        <h1 className="h1 display-1 text-center text-primary">Mon profil</h1>
          <h1 className="h3 text-uppercase text-center font-weight-bold">Mes Infos</h1>
          <table className="table jumbotron bg-dark-gray">
          <tbody>
            <tr>
              <th className="text-uppercase">Nom</th>
                <td>{this.state.user[0].lastName}</td>
            </tr>
            <tr>
              <th className="text-uppercase">Prenom</th>
                <td>{this.state.user[0].firstName}</td>
            </tr>
            <tr>
              <th className="text-uppercase">E-mail</th>
                <td>{this.state.user[0].email}</td>
            </tr>
            <tr>
              <th className="text-uppercase">Telephone</th>
                <td>{this.state.user[0].phone}</td>
            </tr>
          </tbody>
        </table>

        <h2 className="h3 text-uppercase font-weight-bold mt-5 text-center mb-4">Mes commentaires</h2>
        <table className="table jumbotron bg-dark-gray">
          <tbody>
            {this.state.comments.map((comment) => {
              let commentAdvert = this.state.adverts.filter((advert) => comment.advert.id == advert.id);
              return(
              <tr key={comment.id}>
              <th>{comment.createdAtJson}</th>
                <td>{comment.advert.name} Ref : {comment.advert.id}</td>
                <td>{comment.title}</td>
                <td><button type="button" className="btn btn-light"><Link  style={{ textDecoration: 'none', color: 'black' }} to={ {
              pathname: '/fiche-alerte-vue',
              state: { alertData: commentAdvert[0]  }
            } }> consulter</Link></button><button onClick={() => this.handleDeleteComment(comment.id)} type="button" className="btn btn-light ml-5" aria-label="Supprimer ce commentaire"><i className="fa fa-trash"></i></button></td>
            </tr>
            )
            })
          }
          </tbody>
        </table>
        <h2 className="h2 mt-5 text-center text-center mb-4">Mes annonces</h2>
        <table className="table">
          <tbody>
            {this.state.advert.map((advert) => {
              return(
              <tr key={advert.id}>
              <th>{advert.createdAtJson}</th>
                <td>{advert.name} Ref : {advert.id}</td>
                <td><button type="button" className="btn btn-light"><Link   style={{ textDecoration: 'none', color: 'black' }} to={ {
              pathname: '/fiche-alerte-vue',
              state: { alertData: advert  }
            } }> consulter</Link></button></td>
            </tr>
            )
            })}
          </tbody>
        </table>
      </div>
    </div>
    )
  } else if(this.state.userConnected == undefined) {
    return(
      <div className="spinner spinner-border text-info" role="status">
      <span className="sr-only text-center">Loading...</span>
    </div>
  )

    
  } else {
    window.location.href = "/connexion";
  }

}
}



export default Profil;
