// export const UPDATE_INPUT_VALUE = 'UPDATE_INPUT_VALUE';
export const SIDE_EFFECT = 'SIDE_EFFECT';

const initialState = {
  alertButton: false,
  data:[],
  userConnected: false
};

const defaultAction = {};

const reducer = (state = initialState, action = defaultAction) => {
  switch (action.type) {
    // case 'UPDATE_LOCATION': {
    //   const state = { ...state, location: {
    //     lat: action.location.lat,
    //     lng: action.location.lng,
    //     zoom: action.location.zoom
    //   }}
    //   return { ...state };
    // }
    case 'TOGGLE_ALERT_BUTTON_VALUE': {
      
      return { ...state, alertButton: !state.alertButton }

    }
    case 'GET_ALL_ALERTS': {
      return { ...state, data: action.data }
    }
    case 'IS_USER_CONNECTED': {
      return { ...state, userConnected: action.data[0].userConnected }
    }
    default: {
      console.log(state);
      // return state;
      // Dans le cas où on ne comprend pas quelle est l'action à
      // effecture (action.type n'est pas reconnu), on retourne
      // une copie non-altérée du state courant, reçu en paramètre.
      return { ...state };
    }
  }
};

export default reducer;

// export const updateInputValue = value => {
//   return {
//     type: UPDATE_INPUT_VALUE,
//     value
//   };
// };

export const sideEffect = () => ({ type: SIDE_EFFECT });
