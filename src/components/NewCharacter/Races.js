// ||  pun  ||
//   
// Created @ 8:02 PM | 1/30/2018  
// Powered by WebStorm
//   
// ------------------------------	
// |>   From jakubbujko with <3   <|  
// ------------------------------

import React, { Component, PropTypes } from 'react';
import RaceCard from "./RaceCard";
import { logger } from "../../utils/consoleLogger";
import RaceDetails from "./RaceDetails";

class Races extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			activeRaceName: ''
		};

		this.setActiveCard = this.setActiveCard.bind( this )
	}

	setActiveCard( name ) {
		if ( this.state.activeRaceName !== name ) {
			this.setState( {
				activeRaceName: name
			} )
		}
		else {
			this.setState( {
				activeRaceName: ''
			} )
		}

	}

	componentDidMount() {
		window.scrollTo( 0, 0 );
	}

	render() {
		const { activeRaceName } = this.state;
		const { races, newRace } = this.props;

		const activeRace = races.filter( ( race ) => race.name === activeRaceName )[ 0 ];

		logger( '==> Active Race Object :: ', 'info', activeRace );

		return (
			<div className="new-character--race">
				<header>
					<h2 className="title txt-alt txt-jaapokki">
						Choose your Race
					</h2>
					<p className="instructions txt-dim">
						It's time to decide on a race for your character. Aside from RolePlaying reasons, you might also
						want to consider proficiencies or bonuses each race provides and how would those play out with
						your future character class.
					</p>
					<p className="instructions txt-dim">
						Mind that you can always go one step back, if your chosen race happens not to play well together
						with a class you wish to choose in the next step
					</p>
				</header>
				<div className="cards" style={ { maxHeight: activeRaceName !== "" ? '0' : '9999px' } }>
					{
						races.map( ( race, index ) =>
							<RaceCard
								key={ index }
								race={ race }
								activeRace={ activeRaceName }
								onClick={ race.name !== activeRaceName ? this.setActiveCard : ( name ) => logger( name + ' card active :: ',
									'info', 'onClick event disabled' ) }
							/>
						)
					}
				</div>
				<RaceDetails activeRace={ activeRace } activeRaceName={ activeRaceName }
							 newRace={ ( race ) => newRace( race ) }
							 onCloseClick={ () => { this.setState( { activeRaceName: '' } ) } }/>
			</div>
		)
	}

}

Races.PropTypes = {
	races: PropTypes.array.isRequired,
	newRace: PropTypes.func.isRequired
};

export default Races;