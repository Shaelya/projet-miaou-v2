/**
 * Import
 */
import React from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';

/**
 * Local import
 */
// import { updateInputValue } from 'src/store/reducer';

// Composants enfants éventuels
import Map from 'src/components/Map';
import ButtonGeoloc from 'src/components/ButtonGeoloc';

// Styles et assets
import './app.sass';

const App = ({location, handleClick}) => (
  <div className="App">
    <nav className="navbar navbar-dark">
      <i className="fa fa-user-times"></i><p className="ml-2 text-white">non connecté</p>
      <a className="navbar-brand mx-auto" href="#">
        <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""/>
        <h1>MIA'Où</h1>
      </a>
      <form className="form-inline">
        <button className="btn btn-info mr-2" type="button">Se connecter</button>
        <button className="btn btn-info" type="button">S'inscrire</button>
      </form>
    </nav>
    <p className="subtitle text-white">Le site des animaux perdus</p>
    <div className="container-fluid">
      <div className="row">
        <div className="col">
          <Map location={location} />
        </div>
        <div className="col text-center">
        
        
        <button type="button" className="btn btn-danger btn-lg button-alert"><i className="fa fa-bullhorn"></i><div>Poster une alerte</div></button>
        <div>
          <div className="btn-group-vertical">
            <button type="button" className="btn btn-danger btn-lg mb-4">Animaux Perdus</button>
            <button type="button" className="btn btn-warning btn-lg mb-4">Animaux Vus</button>
            <button type="button" className="btn btn-info btn-lg">Animaux Trouvés</button>
            
          </div>
        </div>
        
      </div>
   </div>

   <nav className="navbar fixed-bottom navbar-dark bg-dark mt-4">
    <a className="text-danger" href="#">Comment ça marche ?</a>
    <a className="text-white" href="#">L'équipe</a>
    <a className="text-white" href="#">Mentions Légales</a>
    <a className="text-white" href="#">Liens Externes</a>
   </nav>



  </div>


    
  </div>
);

// App.propTypes = {
//   /** Titre de l'application React */
//   title: PropTypes.string.isRequired
// };

/**
 * Export
 */

// Étape 1 : on définit des stratégies de connexion au store de l'app.
const connectionStrategies = connect(
  // 1er argument : stratégie de lecture (dans le state privé global)
  (state) => {
    return {
      location: state.location
    };
  },

  // 2d argument : stratégie d'écriture (dans le state privé global)
  (dispatch, ownProps) => {
    return {};
  },
);

// Étape 2 : on applique ces stratégies à un composant spécifique.
const AppContainer = connectionStrategies(App);

// Étape 3 : on exporte le composant connecté qui a été généré
export default AppContainer;

// const App = () => (
// <div>
//   <Map />
//   <button className="position" >Ma position</button>
// </div>
// );



// export default App;

