import actionType from './tableActionTypes.js';

const initialState = {};

function tableReducer (state = initialState, action) {
  switch (action.type) {
    case actionType.TABLE_SUCCESS:
    console.log('acion',action);
      var l = Object.assign({data: action.table}, state, {showErrorMessage: false});
      console.log('TABLE_SUCCESS',l);
      return l;
    case actionType.TABLE_FAILURE:
      var e = Object.assign({data: action.table}, state, {showErrorMessage: true});
      console.log('TABLE_FAILURE',e);
      return e;
      // return Object.assign({}, state, {showErrorMessage: true});
    default:
      return state;
  }
}

export default tableReducer;
