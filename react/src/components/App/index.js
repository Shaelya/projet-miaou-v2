/**
 * Import
 */
import React from 'react';
import { connect } from 'react-redux';
import { Route } from 'react-router-dom';
// import PropTypes from 'prop-types';

/**
 * Local import
 */
// import { updateInputValue } from 'src/store/reducer';

// Composants enfants éventuels
import Home from 'src/components/Home';
import Header from 'src/components/Header';
import Footer from 'src/components/Footer';
import HowItWorks from 'src/components/HowItWorks';
import Legal from 'src/components/Legal';
import ExternalLinks from 'src/components/ExternalLinks';
import Team from 'src/components/Team';
import AlertView from 'src/components/AlertView';



// Styles et assets
import './app.sass';

const App = ({alertButton, data, handleClick, getData, isUserConnected, userConnected}) => (

  <div className="App">
    {/* Todo : Si l'utilisateur est connecté afficher de HeaderConnected, sinon afficher le HeaderDisconnected */}
    <Header  isUserConnected={isUserConnected} userConnected={userConnected} />
    <Route path='/' exact render= {() => <Home alertButton={alertButton} data={data} handleClick={handleClick} getData={getData} />} />
    {/* <Route path='/inscription' exact render= {() => <Inscription />} /> */}
    {/* <Route path='' exact render= {() => <Connexion />} /> */}
    <Route path='/fiche-alerte-vue' exact render= {(alertData) => <AlertView data={alertData} />} />
    <Route path='/comment-ca-marche' exact render= {() => <HowItWorks />} />
    <Route path='/mentions-legales' exact render= {() => <Legal />} />
    <Route path='/liens-externes' exact render= {() => <ExternalLinks />} />
    <Route path='/equipe' exact render= {() => <Team />} />
    {/* Todo : Faire une route profil + navLink dans le HeaderConnected */}
    <Footer />
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
      alertButton: state.alertButton,
      data: state.data,
      userConnected: state.userConnected
    };
  },

  // 2d argument : stratégie d'écriture (dans le state privé global)
  (dispatch, ownProps) => {
    return {
      handleClick: () => {
        dispatch({ type: 'TOGGLE_ALERT_BUTTON_VALUE'});
        
      },
      getData: () => {
        dispatch({type: 'APP_LOAD'});
      },
      isUserConnected: () => {
        dispatch({type: 'IS_USER_CONNECTED'});
      }
    };
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
