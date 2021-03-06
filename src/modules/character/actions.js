export default class characterActions {

	// STATICS
	static SET_STATS = 'SET_STATS';
	static SET_BACKGROUND = 'SET_BACKGROUND';
	static PROTOTYPE_CHARACTER = 'PROTOTYPE_CHARACTER';

	static setStats( stats ) {
		return {
			type: characterActions.SET_STATS,
			payload: stats
		}
	}

	static setBackground( background, characterID ) {
		return {
			type: characterActions.SET_BACKGROUND,
			background: background,
			characterID: characterID
		}
	}

	static prototypeCharacter( characterData ) {
		return {
			type: characterActions.PROTOTYPE_CHARACTER,
			payload: characterData
		}
	}

}