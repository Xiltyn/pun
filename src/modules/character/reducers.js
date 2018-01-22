import characterActions from "./actions";

const INITIAL_STATE = [];

function CharacterReducer( state = INITIAL_STATE, action ) {
	switch (action.type) {
		case characterActions.SET_STATS:
			return state = {
				...state,
				stats: action.payload
			};
		case characterActions.SET_BACKGROUND:
			state.filter( ( character ) => character.id === action.characterID )[0].background = action.background;

			return state;
		default:
			return state;
	}
}

export default CharacterReducer;
