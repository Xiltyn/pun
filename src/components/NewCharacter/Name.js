// ||  pun  ||
//   
// Created @ 12:11 AM | 1/22/2018  
// Powered by WebStorm
//   
// ------------------------------	
// |>   From jakubbujko with <3   <|  
// ------------------------------

import React, { Component, PropTypes } from 'react';
import Input from "../Input";
import { logger } from "../../utils/consoleLogger";
import { Character } from "../../modules/character/models";
import { getTimestamp } from "../../utils/getTimestamp";

class Name extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			name: '',
			playerName: ''
		};

		this.updateData = this.updateData.bind( this );
		this.handleSubmit = this.handleSubmit.bind( this );
	}

	updateData( evt ) {
		this.setState( {
			[ evt.target.name ]: evt.target.value
		} );

		logger( '==> Name.js state :: ', 'info', this.state )
	}

	handleSubmit( evt ) {
		evt.preventDefault();

		const newCharacter = new Character( this.state.name, this.state.playerName );

		logger( '==> New Character data model created @ ' + getTimestamp() + ' | RESULT :: ', 'info', newCharacter );
		this.props.newCharacter( newCharacter );
	}

	render() {
		return (
			<form className="new-character--name" onSubmit={ this.handleSubmit }>
				<p className="txt-dark">
					Start creating your new character by choosing their name. You can also input the name of a player
					playing this character.
				</p>
				<Input name="name" label="Character's name" isRequired={ true } onChange={ this.updateData }/>
				<Input name="playerName" label="Player's name" isRequired={ false } onChange={ this.updateData }/>
				<button className={ !this.state.name ? "disabled" : "" } onSubmit={ this.handleSubmit }
						disabled={ !this.state.name }>
					Confirm
				</button>
			</form>
		)
	}
}

export default Name;