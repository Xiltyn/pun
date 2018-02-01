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

		this.handleCharacterData = this.handleCharacterData.bind( this );
		this.updateProficiencies = this.updateProficiencies.bind( this );
		this.newBackground = this.newBackground.bind( this );
		this.updateTraits = this.updateTraits.bind( this );
		this.updateStats = this.updateStats.bind( this );
		this.newRace = this.newRace.bind( this );
	}

	handleCharacterData( data ) {
		this.setState( {
			character: data
		} );

		this.state.character.name !== '' ? this.props.history.push( '/app/characters/new/background' ) : null
	}

	updateTraits( traits ) {
		const currentTraits = this.state.character.traits;

		return [ ...currentTraits, ...traits ]
	}

	updateStats( stats ) {
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

				newStats[ split[ 0 ].toLowerCase() ] += parseInt(split[ 1 ]);
			} )
		}

		return newStats;
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
		const chosenBackground = this.props.backgrounds.filter(
			( background ) => background.name === backgroundName )[ 0 ];


		this.setState( {
			character: {
				...this.state.character,
				background: chosenBackground,
				abilities: this.updateProficiencies( chosenBackground.proficiency )
			}
		} );


		this.props.history.push( '/app/characters/new/race' );

		setTimeout( () => {
			logger( 'NewCharacter.js curret state :: ', 'info', this.state );

		}, 300 );
	}

	newRace( chosenRace ) {

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

		setTimeout( () => {
			logger( 'NewCharacter.js curret state :: ', 'info', this.state );
		}, 300 );
	}

	componentDidMount() {
		this.props.history.location !== ('/app/characters/new' || '/app/characters/new/name') && this.props.history.push(
			'/app/characters/new/name' );
	}

	render() {
		const { match: { params }, backgrounds, races } = this.props;
		const { character } = this.state;

		logger( '===> NewCharacter.js location match :: ', 'info', params.stepName );

		const newName = params.stepName === 'name' ? <Name newCharacter={ this.handleCharacterData }/> : null;
		const newBackground = params.stepName === 'background' ?
			<Backgrounds backgrounds={ sort( backgrounds ) } newBackground={ this.newBackground }/> : null;
		const newRace = params.stepName === 'race' ? <Races races={ sort( races ) } newRace={ this.newRace }/> : null;
		const newClass = params.stepName === 'class' ?
			<h2 className="txt-jaapokki txt-dim">Here you will choose your class</h2> : null;

		return (
			<div className="new-character">
				{ newName }
				{ newBackground }
				{ newRace }
				{ newClass }
			</div>
		)
	}
}

NewCharacter.PropTypes = {
	backgrounds: PropTypes.array.isRequired,
	races: PropTypes.array.isRequired
};

export default connect( mapStateToProps, mapDisptachToProps )( NewCharacter );