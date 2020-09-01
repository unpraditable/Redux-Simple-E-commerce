import { REQUEST_PRODUCTS, RECEIVE_PRODUCTS } from './productActions';
const reducer = (state = {}, action) => {
  switch (action.type) {
    case REQUEST_PRODUCTS:
       return { ...state, loading: true };
    case RECEIVE_PRODUCTS:
       return { ...state, json: action.json, loading: false };
    default:
       return state;
  }
};
export default productReducer;