// ||  pun  ||
//   
// Created @ 11:40 PM | 1/20/2018  
// Powered by WebStorm
//   
// ------------------------------	
// |>   From jakubbujko with <3   <|  
// ------------------------------

import React, { PropTypes } from 'react';
import { logger } from "../../utils/consoleLogger";

export class statsModel {
	constructor( str, dex, con, int, wis, cha ) {
		this.str = {
			base: str,
			modifier: statsModel.getStatModifier( str ),
		};
		this.dex = {
			base: dex,
			modifier: statsModel.getStatModifier( dex ),
		};
		this.con = {
			base: con,
			modifier: statsModel.getStatModifier( con ),
		};
		this.int = {
			base: int,
			modifier: statsModel.getStatModifier( int ),
		};
		this.wis = {
			base: wis,
			modifier: statsModel.getStatModifier( wis ),
		};
		this.cha = {
			base: cha,
			modifier: statsModel.getStatModifier( cha ),
		}
	}

	static getStatModifier( stat ) {
		const recount = ( stat - 10 ) / 2;

		logger( '===> Modifier value from base :: ' + stat + ' being set to :: ', 'process', recount > 0 ? Math.ceil(recount) : Math.floor(recount) )
		return recount > 0 ? Math.ceil(recount) : Math.floor(recount)
	}

}

statsModel.PropTypes = {
	str: PropTypes.number.isRequired,
	dex: PropTypes.number.isRequired,
	con: PropTypes.number.isRequired,
	int: PropTypes.number.isRequired,
	wis: PropTypes.number.isRequired,
	cha: PropTypes.number.isRequired
};