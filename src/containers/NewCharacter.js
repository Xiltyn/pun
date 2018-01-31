// ||  pun  ||
//   
// Created @ 10:49 PM | 1/20/2018  
// Powered by WebStorm
//   
// ------------------------------	
// |>   From jakubbujko with <3   <|  
// ------------------------------

import React, { Component, PropTypes } from 'react';
import characterMiddleware from "../modules/character/middleware";
import { connect } from "react-redux";
import Name from "../components/NewCharacter/Name";
import Backgrounds from "../components/NewCharacter/Backgrounds";
import { logger } from "../utils/consoleLogger";
import Races from "../components/NewCharacter/Races";
import { sort } from "../utils/sort";

const mapStateToProps = ( state ) => {
	return {
		backgrounds: state.compendium.data.character.backgrounds,
		races: state.compendium.data.character.races
	}
};

const mapDisptachToProps = ( dispatch ) => {
	return {
		setStats: ( stats ) => {
			dispatch( characterMiddleware.dispatchSetStats( stats ) )
		}
	}
};

class NewCharacter extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			character: {}
		};

		this.handleCharacterData = this.handleCharacterData.bind(this);
		this.newBackground = this.newBackground.bind(this);
		this.updateProficiencies = this.updateProficiencies.bind(this);
	}

	handleCharacterData( data ) {
		this.setState({
			character: data
		});

		this.state.character.name !== '' ? this.props.history.push( '/app/characters/new/background' ) : null
	}

	updateProficiencies( proficiencies ) {
		let newAbilities = this.state.character.abilities;

		if ( proficiencies ) {
			proficiencies.split( ', ' ).map( ( prof ) => {
				logger( 'Proficient in :: ', 'info', prof.toLowerCase() );
				logger( 'Ability to update :: ', 'info', this.state.character.abilities[ prof.toLowerCase() ] )

				newAbilities[ prof.toLowerCase() ].isProficient = true;
			} );
		}

		return newAbilities;
	}

	newBackground( backgroundName ) {
		const chosenBackground = this.props.backgrounds.filter( ( background ) => background.name === backgroundName )[0];


		this.setState( {
			character: {
				...this.state.character,
				background: chosenBackground,
				abilities: this.updateProficiencies( chosenBackground.proficiency )
			}
		} );

		setTimeout( () => {
			logger( 'NewCharacter.js curret state :: ', 'info', this.state );

			this.state.character.background !== '' ? this.props.history.push( '/app/characters/new/race' ) : null
		}, 300 );
	}

	render() {
		const { match: { params }, backgrounds, races } = this.props;
		const { character } = this.state;

		const Step1 = params.stepName === 'name' ? <Name newCharacter={this.handleCharacterData}/> : null;
		const Step2 = params.stepName === 'background' ? <Backgrounds backgrounds={ sort(backgrounds) } newBackground={ this.newBackground } /> : null;
		const Step3 = params.stepName === 'race' ? <Races races={ sort(races) } /> : null;

		return (
			<div className="new-character">
				{ Step1 }
				{ Step2 }
				{ Step3 }
			</div>
		)
	}
}

NewCharacter.PropTypes = {
};

export default connect( mapStateToProps, mapDisptachToProps )(NewCharacter);