import characterActions from "./actions";

const INITIAL_STATE = [];

function CharacterReducer( state = INITIAL_STATE, action ) {
	switch (action.type) {
		case characterActions.SET_STATS:
			return state = {
				...state,
				stats: action.payload
			};
		default:
			return state;
	}
}

export default CharacterReducer;
