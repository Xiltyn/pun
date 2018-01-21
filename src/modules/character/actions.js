export default class characterActions {

	// STATICS
	static SET_STATS = 'SET_STATS';

	static setStats( stats ) {
		return {
			type: characterActions.SET_STATS,
			payload: stats
		}
	}

}