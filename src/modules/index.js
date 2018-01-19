import { combineReducers } from 'redux';
import AuthReducer from './auth/reducers';
import DataInitializerReducer from "./dataInitializer/reducers";

const rootReducer = combineReducers( {
	data: DataInitializerReducer,
	auth: AuthReducer
} );

export default rootReducer;
