import dataInitializerActions from './actions';

const INITIAL_STATE = {
	character: {
		backgrounds: [],
		classes: [],
		races: [],
		feats: []
	},
	spells: []
};

function DataInitializerReducer( state = INITIAL_STATE, action ) {
	switch (action.type) {
		case dataInitializerActions.GET_CHARACTER_DATA:
			return state = {
				...state,
				isProcessing: true
			};
		case dataInitializerActions.GET_CHARACTER_DATA_SUCCESSFUL:
			return state;
		case dataInitializerActions.GET_CHARACTER_DATA_FAILED:
			return state;
		case dataInitializerActions.GET_SPELLS_DATA:
			return state;
		case dataInitializerActions.GET_SPELLS_DATA_SUCCESSFUL:
			return state;
		case dataInitializerActions.GET_SPELLS_DATA_FAILED:
			return state;
		default:
			return state;
	}
}

export default DataInitializerReducer;
