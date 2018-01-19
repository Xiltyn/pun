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

	static characterData = {
		races: require('src/data/character/_races'),
		classes: require('src/data/character/_classes'),
		feats: require('src/data/character/_feats'),
		backgrounds: require('src/data/character/_backgrounds')
	};

	static spellData = {
		phb: require('src/data/spells/_phb')
	};

	static getCharacterData() {
		logger( dataInitializerActions.GET_CHARACTER_DATA + ' dispatched at', 'process' )

		return ( dispatch ) => {
			dispatch( dataInitializerActions.getCharacterData() );
			dataInitializerMiddleware.parseJson( dispatch, dataInitializerMiddleware.characterData.feats)
		}
	}

	static parseJson( dispatch, data ) {
		logger( 'parseJson function result :: ', 'info', data.compendium.feat )

	}

}