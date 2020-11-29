import {combineReducers} from 'redux';
import coordinateReducer from './coordinat';

const indexReducer = combineReducers({
  coordinate: coordinateReducer,
});

export default indexReducer;
