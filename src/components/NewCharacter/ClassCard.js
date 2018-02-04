// ||  pun  ||
//   
// Created @ 12:37 AM | 2/4/2018  
// Powered by WebStorm
//   
// ------------------------------	
// |>   From jakubbujko with <3   <|  
// ------------------------------

import React, { Component, PropTypes } from 'react';
import { cardBackground, logo } from "../../utils/SVG";

class ClassCard extends Component {
	constructor( props ) {
		super( props );

		this._handleClick = this._handleClick.bind(this)
	}

	_handleClick() {
		this.props.onClick( this.props.charClass.name );
	}

	render() {
		const { charClass: { name }, activeClass, newClass } = this.props;

		return(
			<div className="class-card" onClick={ this._handleClick }>
				<div className="symbol">
					{ logo }
				</div>
				<h3 className="h2 txt-dim txt-jaapokki">
					{ name }
				</h3>
				{ cardBackground }
			</div>
		)
	}

}

ClassCard.PropTypes = {
	race: PropTypes.object.isRequired,
	activeRace: PropTypes.string.isRequired,
	newRace: PropTypes.func.isRequired,
	onClick: PropTypes.func.isRequired
};

export default ClassCard;