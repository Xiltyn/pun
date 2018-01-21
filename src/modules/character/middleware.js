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
import { statsModel } from "./models";

export default class characterMiddleware {

	static dispatchSetStats( data ) {
		logger( characterActions.SET_STATS + ' dispatched @ ', 'process', getTimestamp() )

		const stats = new statsModel( 10, 12, 15, 6, 9, 18 );

		logger( '==> New stats object :: ', 'info', stats )

		return ( dispatch ) => {
			characterMiddleware.setStats( dispatch, data )
		}
	}

	static setStats( dispatch, stats ) {

	}



}