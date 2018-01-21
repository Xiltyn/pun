import characterActions from "./actions";

const INITIAL_STATE = [
	{
		id: 0,
		name: '',
		playerName: '',
		level: 1,
		exp: 0,
		background: '',
		race: '',
		class: '',
		classAbilities: [],
		stats: {},
		spells: []
	}
];

function CharacterReducer( state = INITIAL_STATE, action ) {
	switch (action.type) {
		case characterActions.SET_STATS:
			return state = {
				...state,
				stats: action.payload
			}
		default:
			return state;
	}
}

export default CharacterReducer;
