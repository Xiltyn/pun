// ||  pun  ||
//   
// Created @ 7:40 PM | 1/31/2018  
// Powered by WebStorm
//   
// ------------------------------	
// |>   From jakubbujko with <3   <|  
// ------------------------------

import React, { Component, PropTypes } from 'react';

class RaceDetails extends Component {
	constructor( props ) {
		super( props );

	}

	static getAbilities( abilities ) {
		const array = abilities.split( ', ' );

		let result = [];

		array.map( ( el ) => {
			result = [ ...result, { text: el.split( ' ' )[ 0 ], val: el.split( ' ' )[ 1 ] } ]
		} );

		return result
	};

	render() {
		const { activeRaceName, activeRace, onCloseClick } = this.props;

		return activeRace ?
			<div className={ "details" + (activeRaceName !== '' ? " active" : "") }>
				<div className="close-wrapper" onClick={ onCloseClick }>
					<div className={ "close" + (activeRaceName !== "" ? " active" : "") }/>
				</div>
				<p className="description txt-dim">
					{ activeRace && activeRace.description }
				</p>
				<div className="base-info">
					{
						!activeRace.subraces && <div className="stripe">
							{
								activeRace.ability && <ul className="h4 txt-dim abilities" style={ {
									width: (RaceDetails.getAbilities( activeRace.ability ).length * 9.6) + 'rem'
								} }>
									{
										activeRace.ability && RaceDetails.getAbilities( activeRace.ability )
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
					}
					{
						!activeRace.subraces && <div className="stripe">
							{
								activeRace.size && <div className="h4 txt-dim size">
									<h4 className="p label txt-dark">
										Size
									</h4>
									<p className="h1 value txt-alt txt-jaapokki">
										{ activeRace.size }
									</p>
								</div>
							}
							{
								activeRace.speed && <div className="h4 txt-dim speed">
									<h4 className="p label txt-dark">
										Speed
									</h4>
									<p className="h1 value txt-alt txt-jaapokki">
										{ activeRace.speed }
									</p>
								</div>
							}
						</div>
					}
					{
						activeRace.proficiency && <div className="p txt-dim proficiency">
							{

								activeRace.proficiency.includes( ', ' ) ?
									activeRace.proficiency.split( ', ' ).map( ( prof, index ) =>
										<div className="proficiency--element txt-dark txt-jaapokki" key={index}>
											{ prof }
										</div>
									) : <div className="proficiency--element txt-dark txt-jaapokki">
										{ activeRace.proficiency }
									</div>
							}

						</div>
					}
					{
						activeRace.trait && <ul className="traits">
							{
								activeRace.trait.constructor === Array ? activeRace.trait.map( ( trait, index ) =>
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
										{ activeRace.trait.name }
									</h4>
									<p className="desctiption txt-dim">
										{ activeRace.trait.text }
									</p>
								</div>
							}
						</ul>
					}
				</div>
				}
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
