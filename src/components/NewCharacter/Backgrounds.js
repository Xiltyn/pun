// ||  pun  ||
//   
// Created @ 8:47 PM | 1/22/2018  
// Powered by WebStorm
//   
// ------------------------------	
// |>   From jakubbujko with <3   <|  
// ------------------------------

import React, { Component, PropTypes } from 'react';
import BackgroundTile from "./BackgroundTile";

class Backgrounds extends Component {
	constructor( props ) {
		super( props );

	}

	render() {
		const { backgrounds } = this.props;

		return (
			<div className="new-character--background">
				{
					backgrounds.map( ( background, index ) => (
						<BackgroundTile data={ background } key={ index } newBackground={ this.props.newBackground }/>
					) )
				}
			</div>
		)
	}

}

Backgrounds.PropTypes = {
	backgrounds: PropTypes.array.isRequired,
	newBackground: PropTypes.func.isRequired
};

export default Backgrounds;