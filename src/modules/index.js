import { combineReducers } from 'redux';
import AuthReducer from './auth/reducers';
import DataInitializerReducer from "./dataInitializer/reducers";
import CharacterReducer from "./character/reducers";

const rootReducer = combineReducers( {
	characters: CharacterReducer,
	compendium: DataInitializerReducer,
	auth: AuthReducer
} );

export default rootReducer;
