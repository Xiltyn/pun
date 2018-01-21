import dataInitializerActions from './actions';

const INITIAL_STATE = { };

function DataInitializerReducer( state = INITIAL_STATE, action ) {
	switch (action.type) {
		case dataInitializerActions.GET_DATA:
			return state = {
				...state,
				isProcessing: true
			};
		case dataInitializerActions.SET_DATA:
			return state = {
				...state,
				data: action.payload
			};
		default:
			return state;
	}
}

export default DataInitializerReducer;
