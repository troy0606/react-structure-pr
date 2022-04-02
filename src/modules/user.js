const LOADING_DATA = 'LOADING_DATA';
const GET_API_USER_DATA = 'GET_API_USER_DATA';

const initState = {

}

export default function reducer(state = initState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case '': {
      return 
    }
    case '': {
      return 
    }
    default: return state;
  }
}

export function loadData() {
  return { type: LOADING_DATA };
}

export function getApiUserData() {
  return { type: GET_API_USER_DATA, widget };
}

export function updateWidget(widget) {
  return { type: UPDATE, widget };
}

export function removeWidget(widget) {
  return { type: REMOVE, widget };
}