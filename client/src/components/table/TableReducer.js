import actionType from './tableActionTypes.js';

const initialState = {};

function tableReducer (state = initialState, action) {
  switch (action.type) {
    case actionType.TABLE_SUCCESS:
      return Object.assign({data: action.table}, state, {showErrorMessage: false});
    case actionType.TABLE_FAILURE:
      return Object.assign({data: action.table}, state, {showErrorMessage: true});
    case actionType.SET_NUMBER_RECORDS:
      // return Object.assign(state, {records: action.table}, {showErrorMessage: false});
      return {...state, records: action.table, showErrorMessage: false};
    default:
      return state;
  }
}

export default tableReducer;
