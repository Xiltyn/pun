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
		data = {
			character: {
				races: data.character.races.compendium.race,
				classes: data.character.classes.compendium.class,
				classSpells: data.character.classes.compendium.spell,
				feats: data.character.feats.compendium.feat,
				backgrounds: data.character.backgrounds.compendium.background
			},
			spells: {
				phb: data.spells.phb.compendium
			}
		};

		logger( Object.keys( data.spells )[0] + ' parseJson function result :: ', 'info', data )

		dispatch( dataInitializerActions.setCharacterData( data ) )
	}

}