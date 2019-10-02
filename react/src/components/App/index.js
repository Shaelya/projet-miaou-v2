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
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src="/docs/4.3/assets/brand/bootstrap-solid.svg" width="30" height="30" alt=""/>
        MIA'Où
      </a>
    </nav>
    <Map location={location} />
    <ButtonGeoloc handleClick={handleClick} />
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
    return {
      handleClick: () => {
        navigator.geolocation.getCurrentPosition((position) => {
          dispatch({type: 'UPDATE_LOCATION', location:{
            lat: position.coords.latitude,
            lng: position.coords.longitude,
            zoom: 17
          }
        });

        });
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

