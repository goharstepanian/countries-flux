import { API } from "../../api/api";

const GET_ALL = "get-all";
export const initState = {
    countries: [],
};

export const requestsReducer = (state=initState, action) => {
  switch (action.type) {
    case GET_ALL:
      return {
        ...state,
        countries: action.payload,
      };
  
    default:
      return state;
  }
};

 const getAllActionCreator = (res) => ({
  type: GET_ALL,
  payload: res.data,
});



export const getAllThunk = () => {
    return (dispatch) => {
        API.getAll().then((res)=> dispatch(getAllActionCreator(res)))
    }
}
