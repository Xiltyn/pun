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

		this.handleCharacterData 	= this.handleCharacterData.bind(this);
		this.updateProficiencies 	= this.updateProficiencies.bind(this);
		this.newBackground 			= this.newBackground.bind(this);
		this.newRace 				= this.newRace.bind(this)
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

	newRace( raceName ) {
		const chosenRace = this.props.races.filter( ( race ) => race.name === raceName )[0];

		this.setState( {
			character: {
				...this.state.character,
				race: chosenRace
			}
		} );

		setTimeout( () => {
			logger( 'NewCharacter.js curret state :: ', 'info', this.state );

			this.state.character.background !== '' ? this.props.history.push( '/app/characters/new/class' ) : null
		}, 300 );
	}

	componentDidMount() {
		this.props.history.location !== ( '/app/characters/new' || '/app/characters/new/name' ) && this.props.history.push( '/app/characters/new/name' );
	}

	render() {
		const { match: { params }, backgrounds, races } = this.props;
		const { character } = this.state;

		const Name = params.stepName === 'name' ? <Name newCharacter={this.handleCharacterData}/> : null;
		const Background = params.stepName === 'background' ? <Backgrounds backgrounds={ sort(backgrounds) } newBackground={ this.newBackground } /> : null;
		const Race = params.stepName === 'race' ? <Races races={ sort(races) } newRace={ this.newRace } /> : null;
		const Class = params.stepName === 'class' ? <h2 className="txt-jaapokki txt-dim">Here you will choose your class</h2> : null;

		return (
			<div className="new-character">
				{ Name }
				{ Background }
				{ Race }
				{ Class }
			</div>
		)
	}
}

NewCharacter.PropTypes = {
	backgrounds: PropTypes.array.isRequired,
	races: PropTypes.array.isRequired
};

export default connect( mapStateToProps, mapDisptachToProps )(NewCharacter);