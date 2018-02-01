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
import { races } from "../../data/character/_races";
import { classes } from "../../data/character/_classes";
import { feats } from "../../data/character/_feats";
import { backgrounds } from "../../data/character/_backgrounds";
import { phb } from "../../data/spells/_phb";

export default class dataInitializerMiddleware {

	static data = {
		character: {
			races: races,
			classes: classes,
			feats: feats,
			backgrounds: backgrounds
		},
		spells: {
			phb: phb
		}
	};

	static getCharacterData() {
		logger( dataInitializerActions.GET_CHARACTER_DATA + ' dispatched at', 'process' )

		return ( dispatch ) => {
			dispatch( dataInitializerActions.getCharacterData() );
			dataInitializerMiddleware.parseData( dispatch, dataInitializerMiddleware.data)
		}
	}

	static parseData( dispatch, data ) {
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

		logger( Object.keys( data.spells )[0] + ' parseData function result :: ', 'info', data )

		dispatch( dataInitializerActions.setCharacterData( data ) )
	}

}