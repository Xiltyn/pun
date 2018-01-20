// ||  pun  ||
//   
// Created @ 21:03 | 2018/01/19  
// Powered by WebStorm
//   
// ------------------------------	
// |>   From jakubbujko with <3   <|  
// ------------------------------

import { logger } from "../../utils/consoleLogger";
import dataInitializerActions from "./actions";

export default class dataInitializerMiddleware {

	static data = {
		character: {
			races: require('src/data/character/_races'),
			classes: require('src/data/character/_classes'),
			feats: require('src/data/character/_feats'),
			backgrounds: require('src/data/character/_backgrounds')
		},
		spells: {
			phb: require('src/data/spells/_phb')
		}
	};

	static getCharacterData() {
		logger( dataInitializerActions.GET_CHARACTER_DATA + ' dispatched at', 'process' )

		return ( dispatch ) => {
			dispatch( dataInitializerActions.getCharacterData() );
			dataInitializerMiddleware.parseJson( dispatch, dataInitializerMiddleware.data)
		}
	}

	static parseJson( dispatch, data ) {
		logger( Object.keys( data.character )[0] + ' parseJson function result :: ', 'info', data.character.races );
		logger( Object.keys( data.character )[1] + ' parseJson function result :: ', 'info', data.character.classes );
		logger( Object.keys( data.character )[2] + ' parseJson function result :: ', 'info', data.character.feats );
		logger( Object.keys( data.character )[3] + ' parseJson function result :: ', 'info', data.character.backgrounds );
		logger( Object.keys( data.spells )[0] + ' parseJson function result :: ', 'info', data.spells.phb )

	}

}