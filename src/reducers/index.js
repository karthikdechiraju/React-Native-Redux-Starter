import { combineReducers } from 'redux';
import testReducer from './TestReducer'


export default combineReducers({
	sample_state:testReducer,
})