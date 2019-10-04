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
import Homepage from 'src/components/Homepage';


// Styles et assets
import './app.sass';

const App = ({alertButton, handleClick}) => (
  <div className="App">
    <Route path='/' exact render= {() => <Homepage alertButton={alertButton} handleClick={handleClick} />} />
    
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
      alertButton: state.alertButton
    };
  },

  // 2d argument : stratégie d'écriture (dans le state privé global)
  (dispatch, ownProps) => {
    return {
      handleClick: () => {
        dispatch({ type: 'TOGGLE_ALERT_BUTTON_VALUE'});
        
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

