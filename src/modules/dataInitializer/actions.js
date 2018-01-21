export default class dataInitializerActions {

	// STATICS
	static GET_DATA = 'GET_DATA';
	static SET_DATA = 'SET_DATA';

	static getCharacterData() {
		return {
			type: dataInitializerActions.GET_DATA
		}
	}

	static setCharacterData( data ) {
		return {
			type: dataInitializerActions.SET_DATA,
			payload: data
		}
	}

}