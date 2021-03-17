import {combineReducers} from 'redux';
import {authReducer, usersReducer, lessonReducer} from './Reducer';

const reducerz = combineReducers({
  authReducer,
  usersReducer,
  lessonReducer,
});
export default reducerz;
