// ||  pun  ||
//   
// Created @ 9:05 PM | 1/30/2018  
// Powered by WebStorm
//   
// ------------------------------	
// |>   From jakubbujko with <3   <|  
// ------------------------------

import React, { Component, PropTypes } from 'react';
import { cardBackground } from "../../utils/SVG";
import Button from "../Button";

class RaceCard extends Component {
	constructor( props ) {
		super( props );

		this._handleClick = this._handleClick.bind(this)
	}

	_handleClick() {
		this.props.onClick( this.props.race.name );
	}

	render() {
		const { race: { name }, activeRace, newRace } = this.props;
		const isActive = activeRace === name;

		return(
			<div className={ "race-card" + ( isActive ? " active" : "" ) } onClick={ this._handleClick }>
				<h3 className="h2 txt-dim txt-jaapokki">
					{ name }
				</h3>
				{ cardBackground }
				{
					isActive && <Button label="choose" onClick={ () => newRace( name ) } />
				}
			</div>
		)
	}

}

RaceCard.PropTypes = {
	race: PropTypes.object.isRequired,
	activeRace: PropTypes.string.isRequired,
	newRace: PropTypes.func.isRequired,
	onClick: PropTypes.func.isRequired
};

export default RaceCard;