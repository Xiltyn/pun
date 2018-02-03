// ||  pun  ||
//   
// Created @ 7:40 PM | 1/31/2018  
// Powered by WebStorm
//   
// ------------------------------	
// |>   From jakubbujko with <3   <|  
// ------------------------------

import React, { Component, PropTypes } from 'react';
import Button from "../Button";
import { cardBackground, logo } from "../../utils/SVG";

class RaceDetails extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			race: {},
		}

	}

	static getAbilities( abilities ) {
		const array = abilities.split( ', ' );

		let result = [];

		array.map( ( el ) => {
			result = [ ...result, { text: el.split( ' ' )[ 0 ], val: el.split( ' ' )[ 1 ] } ]
		} );

		return result
	};

	componentWillReceiveProps( newProps ) {
		if ( newProps.activeRace ) {
			if ( newProps.activeRace.subraces ) {
				this.setState( {
					race: newProps.activeRace.subraces[ 0 ]
				} )
			}
			else {
				this.setState( {
					race: newProps.activeRace,
				} )
			}
		}

	}

	render() {
		const { activeRaceName, activeRace, onCloseClick, newRace } = this.props;
		const { race } = this.state;

		return activeRace ?
			<div className={ "details" + (activeRaceName !== '' ? " active" : "") }>
				<div className="close-wrapper" onClick={ onCloseClick }>
					<div className={ "close" + (activeRaceName !== "" ? " active" : "") }/>
				</div>
				<p className="description txt-dim">
					{ activeRace.description }
				</p>
				<div className="base-info">
					<div className="stripe">
						{
							race.ability && <ul className="h4 txt-dim abilities" style={ {
								width: (RaceDetails.getAbilities( race.ability ).length * 9.6) + 'rem'
							} }>
								{
									race.ability && RaceDetails.getAbilities( race.ability )
										.map( ( ability, index ) =>
											<div className="stat-box" key={ index }>
												<h4 className="p label txt-dark">
													{ ability.text }
												</h4>
												<p className="h1 value txt-alt txt-jaapokki">
													{ ability.val }
												</p>
											</div>
										)
								}
							</ul>
						}
					</div>
					<div className="stripe">
						{
							race.size && <div className="h4 txt-dim size">
								<h4 className="p label txt-dark">
									Size
								</h4>
								<p className="h1 value txt-alt txt-jaapokki">
									{ race.size }
								</p>
							</div>
						}
						{
							race.speed && <div className="h4 txt-dim speed">
								<h4 className="p label txt-dark">
									Speed
								</h4>
								<p className="h1 value txt-alt txt-jaapokki">
									{ race.speed }
								</p>
							</div>
						}
					</div>
					{
						activeRace.subraces && <ul className="subraces">
							{
								activeRace.subraces.map( ( subrace, index ) =>
									<li className={ "p txt-alt txt-jaapokki choice" + (race.name === subrace.name ? " active" : "") }
										key={ index } onClick={ () => this.setState(
										{
											race: activeRace.subraces.filter(
												( race ) => subrace.name === race.name )[ 0 ]
										} ) }>
										{ subrace.name.split( activeRace.name + ' ' ) }
									</li>
								)
							}
						</ul>
					}
					{
						race.proficiency && <div className="p txt-dim proficiency">
							{

								race.proficiency.includes( ', ' ) ?
									race.proficiency.split( ', ' ).map( ( prof, index ) =>
										<div className="proficiency--element txt-dark txt-jaapokki" key={ index }>
											{ prof }
										</div>
									) : <div className="proficiency--element txt-dark txt-jaapokki">
										{ race.proficiency }
									</div>
							}

						</div>
					}
					{
						race.trait && <ul className="traits">
							{
								race.trait.constructor === Array ? race.trait.map( ( trait, index ) =>
									<div className="trait" key={ index }>
										<h4 className="name txt-dim">
											{ trait.name }
										</h4>
										<p className="desctiption txt-dim">
											{ trait.text }
										</p>
									</div>
								) : <div className="trait">
									<h4 className="name txt-dim">
										{ race.trait.name }
									</h4>
									<p className="desctiption txt-dim">
										{ race.trait.text }
									</p>
								</div>
							}
						</ul>
					}
				</div>
				<div className={ "race-card" + ( isActive ? " active" : "" ) } onClick={ this._handleClick }>
					<div className="symbol">
						{ logo }
					</div>
					<h3 className="h2 txt-dim txt-jaapokki">
						{ race.name }
					</h3>
					{ cardBackground }
				</div>
				<Button label="choose" onClick={ () => newRace( race ) }/>
			</div>
			: <div/>
	}

}

RaceDetails.PropTypes = {
	activeRaceName: PropTypes.string.isRequired,
	activeRace: PropTypes.object.isRequired,
	onCloseClick: PropTypes.func.isRequired
};

export default RaceDetails;
