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
import { Stats } from "../modules/character/models";
import Classes from "../components/NewCharacter/Classes";
import NewStats from "../components/NewCharacter/NewStats";

const mapStateToProps = ( state ) => {
	return {
		backgrounds: state.compendium.data.character.backgrounds,
		races: state.compendium.data.character.races,
		classes: state.compendium.data.character.classes
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

	}

	handleCharacterData = ( data ) => {
		this.setState( {
			character: data
		} );

		this.state.character.name !== '' ? this.props.history.push( '/app/characters/new/background' ) : null
	}

	updateTraits = ( traits ) => {
		const currentTraits = this.state.character.traits;

		return [ ...currentTraits, ...traits ]
	}

	updateStats = ( stats ) => {
		const newStats = {
			str: 0,
			con: 0,
			dex: 0,
			int: 0,
			wis: 0,
			cha: 0,
		};

		logger( 'STATS TO UPDATE ::', 'info', stats );

		if ( stats ) {
			stats.split( ', ' ).map( ( stat ) => {
				const split = stat.split( ' ' );

				logger( split[ 0 ] + ' ability bonus :: ', 'info', split[ 1 ] );

				newStats[ split[ 0 ].toLowerCase() ] += parseInt( split[ 1 ] );
			} )
		}

		return newStats;
	}

	updateProficiencies = ( proficiencies ) => {
		let newAbilities = this.state.character.abilities;

		if ( newAbilities ) {
			if ( proficiencies ) {
				Object.keys( newAbilities ).map( ( key, index ) => {
					proficiencies.split( ', ' ).map( ( prof ) => {
						logger( 'Proficient in :: ', 'info', prof.toLowerCase() );
						logger( 'Ability to update :: ', 'info', this.state.character.abilities[ prof.toLowerCase() ] )

						if ( key.toLowerCase() === prof.toLowerCase() ) {
							Object.values( newAbilities )[ index ].isProficient = true;
						}

					} );
				} )
			}
		}

		return newAbilities;
	};

	updateSaves = ( saves ) => {
		let newSaves = this.state.character.savingThrows;

		if ( newSaves ) {
			if ( saves ) {
				Object.keys( newSaves ).map( ( key, index ) => {
					saves.split( ', ' ).map( ( prof ) => {
						if ( key.toLowerCase() === prof.toLowerCase() ) {
							Object.values( newSaves )[ index ].isProficient = true;
							Object.values( newSaves )[ index ].base = Object.values(
								newSaves )[ index ].base + this.state.character.proficiencyMod;
						}

					} );
				} )
			}
		}

		return newSaves;
	};

	newBackground = ( backgroundName ) => {
		const chosenBackground = this.props.backgrounds.filter(
			( background ) => background.name === backgroundName )[ 0 ];


		this.setState( {
			character: {
				...this.state.character,
				background: chosenBackground.name,
				abilities: chosenBackground.proficiency ? this.updateProficiencies(
					chosenBackground.proficiency ) : this.state.character.proficiency,
				traits: chosenBackground.trait ? chosenBackground.trait : this.state.character.traits
			}
		} );


		this.props.history.push( '/app/characters/new/race' );

		setTimeout( () => {
			logger( 'NewCharacter.js curret state :: ', 'info', this.state );

		}, 300 );
	}

	newRace = ( chosenRace ) => {

		if ( chosenRace ) {
			this.setState( {
				character: {
					...this.state.character,
					race: chosenRace.name,
					abilities: this.updateProficiencies( chosenRace.proficiency ),
					stats: this.updateStats( chosenRace.ability ),
					size: chosenRace.size,
					speed: chosenRace.speed,
					traits: this.updateTraits( chosenRace.trait )
				}
			} );

			this.props.history.push( '/app/characters/new/class' );
		}

		setTimeout( () => {
			logger( 'NewCharacter.js curret state :: ', 'info', this.state );
		}, 300 );
	};

	newClass = ( chosenClass ) => {

		if ( chosenClass ) {
			this.setState( {
				character: {
					...this.state.character,
					className: chosenClass.name,
					savingThrows: this.updateSaves( chosenClass.proficiency ),
					stats: chosenClass.ability ? this.updateStats( chosenClass.ability ) : this.state.character.stats,
					traits: chosenClass.trait ? this.updateTraits( chosenClass.trait ) : this.state.character.traits,
					spellAbility: chosenClass.spellAbility && chosenClass.spellAbility,
					hd: chosenClass.hd,
					autolevel: chosenClass.autolevel
				}
			} );

			this.props.history.push( '/app/characters/new/stats' );
		}

		setTimeout( () => {
			logger( 'NewCharacter.js curret state :: ', 'info', this.state );
		}, 300 );
	};

	componentDidMount() {
		this.props.history.location !== ('/app/characters/new' || '/app/characters/new/name') && this.props.history.push(
			'/app/characters/new/name' );
	}

	render() {
		const { match: { params }, backgrounds, races, classes } = this.props;
		const { character } = this.state;

		logger( '===> NewCharacter.js location match :: ', 'info', params.stepName );

		return (
			<div className="new-character">
				{
					params.stepName === 'name' && <Name
						newCharacter={ this.handleCharacterData }/>
				}
				{
					params.stepName === 'background' && <Backgrounds
						backgrounds={ sort( backgrounds ) }
						newBackground={ this.newBackground }/>
				}
				{
					params.stepName === 'race' && <Races
						races={ sort( races ) }
						newRace={ this.newRace }/>
				}
				{
					params.stepName === 'class' && <Classes
						newClass={ this.newClass }
						classes={ classes }/>
				}
				{
					params.stepName === 'stats' && <NewStats/>
				}
			</div>
		)
	}
}

NewCharacter.PropTypes = {
	backgrounds: PropTypes.array.isRequired,
	races: PropTypes.array.isRequired,
	classes: PropTypes.array.isRequired
};

export default connect( mapStateToProps, mapDisptachToProps )( NewCharacter );