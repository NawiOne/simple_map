import {combineReducers} from 'redux';
import coordinatReducer from './coordinat';

const indexReducer = combineReducers({
  coordinat: coordinatReducer,
});

export default indexReducer;
