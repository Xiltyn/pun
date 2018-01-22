// ||  pun  ||
//   
// Created @ 21:03 | 2018/01/19  
// Powered by WebStorm
//   
// ------------------------------	
// |>   From jakubbujko with <3   <|  
// ------------------------------

import { logger } from "../../utils/consoleLogger";
import { getTimestamp } from "../../utils/getTimestamp";
import characterActions from "./actions";
import { Stats } from "./models";

export default class characterMiddleware {

	static dispatchSetStats( data ) {
		logger( characterActions.SET_STATS + ' dispatched @ ', 'process', getTimestamp() )

		const stats = new Stats( 10, 12, 15, 6, 9, 18 );

		logger( '==> New stats object :: ', 'info', stats )

		return ( dispatch ) => {
			characterMiddleware.setStats( dispatch, data )
		}
	}

	static setStats( dispatch, stats ) {

	}

	static dispatchSetBackground( characterID, backgroundName ) {
		logger( characterActions.SET_BACKGROUND + ' dispatched @ ', 'process', getTimestamp() )

		return ( dispatch, getState ) => {
			const newBackground = getState().compendium.data.character.backgrounds.filter( ( background ) => background.name === backgroundName )[0];

			characterMiddleware.setBackground( newBackground, characterID, dispatch )
		}
	}

	static setBackground( background, characterID, dispatch ) {
		logger( '===> New background created | RESULT :: ', 'process', background );

		dispatch( characterActions.setBackground( background, characterID ) )
	}

}