import { API } from "../../api/api";

const GET_COUNTRY = "get-country";

 const initState = {
  country: {},
};
export const countryReducer = (state = initState, action) => {
  switch (action.type) {
    case GET_COUNTRY:
      return {
        ...state,
        country: action.payload,
      };

    default:
      return state;
  }
};

const getCountryActionCreator = (res) => ({
  type: GET_COUNTRY,
  payload: res,
});

 export const getCountryThunk = (name) => {
   return (dispatch) => {
     API.getCountry(name).then((res) =>
       dispatch(getCountryActionCreator(res.data))
     );
   };
 };