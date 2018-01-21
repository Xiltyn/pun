// ||  pun  ||
//   
// Created @ 9:34 PM | 1/20/2018  
// Powered by WebStorm
//   
// ------------------------------	
// |>   From jakubbujko with <3   <|  
// ------------------------------

import React, { Component, PropTypes } from 'react';
import { logger } from "../../utils/consoleLogger";
import { Link } from "react-router-dom";

class AddCharacter extends Component {
	constructor( props ) {
		super( props );
	}

	render() {
		return (
			<Link to="/app/characters/new">
				<div className="add-character" onClick={ ( evt ) => { logger( '==> add character clicked', 'info', evt.target ) } }>
					<p className="h1 txt-dim txt-jaapokki">
						create new
					</p>
				</div>
			</Link>
		)
	}

}

export default AddCharacter;