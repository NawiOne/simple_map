import {actionType} from '../action/actionType';

const initialState = {
  listCoordinat: [],
  curentCoordinat: {},
};

const coordinate = (state = initialState, {type, payload}) => {
  switch (type) {
    case actionType.getCoodinat:
      return {
        ...state,
        curentCoordinat: payload,
      };
    case actionType.addCoordinat:
      return {
        ...state,
        listCoordinat: state.listCoordinat.concat(payload),
      };
    default:
      return state;
  }
};
export default coordinate;
