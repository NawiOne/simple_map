import {actionType} from '../action/actionType';

const initialState = {
  listCoordinate: [],
  curentCoordinate: {},
};

const coordinate = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionType.getCoodinate:
      return {
        ...state,
        curentCoordinate: payload,
      };
    case actionType.addCoordinate:
      return {
        ...state,
        listCoordinate: state.listCoordinate.concat(payload),
      };
    default:
      return state;
  }
};
export default coordinate;
