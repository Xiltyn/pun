import { combineReducers } from 'redux';
import AuthReducer from './auth/reducers';
import DataInitializerReducer from "./dataInitializer/reducers";
import CharacterReducer from "./character/reducers";

const rootReducer = combineReducers( {
	character: CharacterReducer,
	data: DataInitializerReducer,
	auth: AuthReducer
} );

export default rootReducer;
