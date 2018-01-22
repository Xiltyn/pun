// ||  pun  ||
//   
// Created @ 12:34 AM | 1/22/2018  
// Powered by WebStorm
//   
// ------------------------------	
// |>   From jakubbujko with <3   <|  
// ------------------------------

import * as React from 'react';


export const sliceDice = ( string, separator = "-", makeSpaces = true ) => {
	let split = string.split( separator );
	let result = [];

	if ( makeSpaces ) {
		for ( let i = 0; i < split.length; i++ ) {
			i === (split.length - 1) ? result = [ ...result, split[ i ] ] : result = [ ...result, split[ i ], ' ' ];

		}
		return result.join( "" )
	}
	else {
		for ( let i = 0; i < split.length; i++ ) {
			result = [ ...result, split[ i ] ];
		}

		return result.join( "" )
	}
};