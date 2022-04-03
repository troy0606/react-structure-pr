import agent from "../service/agent";
const LOADING_DATA = "LOADING_DATA";
const GET_API_ALL_USER_DATA = "GET_API_ALL_USER_DATA";

const initState = {
  users: [],
};

export default function userReducer(state = initState, action = {}) {
  switch (action.type) {
    // do reducer stuff
    case "GET_API_ALL_USER_DATA": {
      return { ...state, users: action.payload };
    }
    default:
      return state;
  }
}

export function loadData() {
  return { type: LOADING_DATA };
}

export const getApiAllUserData = () => {
  return async (dispatch, getState) => {
    const response = await agent.Users.getAll();
    dispatch(getAllUserData(response));
  };
};

export function getAllUserData(payload) {
  return { type: GET_API_ALL_USER_DATA, payload };
}
