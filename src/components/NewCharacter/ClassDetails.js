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
import { logger } from "../../utils/consoleLogger";

class ClassDetails extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			charClass: {},
			chosenFeat: {}
		};

		this._selecOptionalFeat = this._selecOptionalFeat.bind( this )

	}

	static formatTextPara( text ) {
		if ( text ) {
			if ( text.constructor === Array ) {
				return text.map( ( para, index ) =>
					<p className="txt-dim" key={ index }>
						{ para }
					</p>
				);
			}
			else {
				return <p className="txt-dim">
					{ text }
				</p>
			}
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

	static isOptional( features ) {
		let result;

		if ( features ) {
			for ( let feat of features ) {
				if ( feat[ "-optional" ] ) {
					result = true;
					break;
				}
				else {
					result = false;
				}
			}

			return result;
		}
	}

	static sortFeatures( data, level ) {
		let result = {};

		if ( data ) {
			if ( level ) {
				for ( let element of data ) {
					if ( element[ "-level" ] === level && element.feature ) {
						for ( let feat of element.feature ) {
							if ( feat[ "-optional" ] && feat[ "-optional" ] === "YES" ) {
								result = {
									...result,
									[ element[ "-level" ] ]: {
										...result[ element[ "-level" ] ],
										optional: result[ element[ "-level" ] ].optional ? [ ...result[ element[ "-level" ] ].optional, feat ] : [ feat ]
									}
								};
							}
							else {
								result = {
									...result,
									[ element[ "-level" ] ]: {
										...result[ element[ "-level" ] ],
										obligatory: result[ element[ "-level" ] ] ? [ ...result[ element[ "-level" ] ].obligatory, feat ] : [ feat ]
									}
								};
							}
						}
					}
				}
			}
			else {
				for ( let element of data ) {
					for ( let feat of element.feature ) {
						if ( feat[ "-optional" ] && feat[ "-optional" ] === "YES" ) {
							result.optional = [ ...result.optional, feat ];
						}
						else {
							result.obligatory = [ ...result.obligatory, feat ];
						}
					}
				}
			}
		}

		logger( '===> SORTED CLASS FEATURES ::', 'warn', [ ...result ] );

		return [ ...result ];
	}

	_selecOptionalFeat( name ) {
		if ( name ) {
			this.setState( {
				chosenFeat: this.state.chosenFeat !== name ? name : ''
			} )
		}
	}

	componentWillReceiveProps( newProps ) {
		console.log( newProps.activeClass )

		if ( newProps.activeClass ) {
			this.setState( {
				charClass: newProps.activeClass,
			} )
		}

	}

	render() {
		const { activeClassName, activeClass, onCloseClick, newClass } = this.props;
		const { charClass, chosenFeat } = this.state;

		return activeClass ?
			<div className={ "details" + (activeClassName !== '' ? " active" : "") }>
				<div className="close-wrapper" onClick={ onCloseClick }>
					<div className={ "close" + (activeClassName !== "" ? " active" : "") }/>
				</div>
				<p className="description txt-dim">
					{ activeClass.description }
				</p>
				<div className="base-info">
					<div className="stripe">
						{
							charClass.hd && <ul className="h4 txt-dim hit-dice">
								<li>
									<div className="label txt-small txt-dark">Hit Dice</div>
									<span className="value h3 txt-jaapokki txt-dim">d{ charClass.hd }</span>
								</li>
								<li>
									<div className="label txt-small txt-dark">Initial HP</div>
									<span className="value h3 txt-jaapokki txt-dim">{ charClass.hd }</span>
								</li>
								<li>
									<div className="label txt-small txt-dark">Level Up</div>
									<span className="value h3 txt-jaapokki txt-dim">1d{ charClass.hd }+CON</span>
								</li>
							</ul>
						}
					</div>
					{
						charClass.proficiency && <div className="p txt-dim proficiency">
							{

								charClass.proficiency.includes( ', ' ) ?
									charClass.proficiency.split( ', ' ).map( ( prof, index ) =>
										<div className="proficiency--element txt-dark txt-jaapokki" key={ index }>
											{ prof }
										</div>
									) : <div className="proficiency--element txt-dark txt-jaapokki">
										{ charClass.proficiency }
									</div>
							}

						</div>
					}
					<div className="level-wrapper">
						{
							ClassDetails.sortFeatures( charClass.autolevel, "1" ).map( ( level, index ) => {
								return (
									<ul className={ "level level__" + Object.keys( level )[ 0 ] } key={ index }>
										{
											!ClassDetails.isOptional( level.feature ) &&
											<h3 className=" txt-jaapokki txt-alt">
												Level 1
											</h3>
										}
										{
											level[ Object.keys( level )[ 0 ] ].obligatory && level[ Object.keys(
												level )[ 0 ] ].obligatory.map( ( feat, index ) =>
												<li className='feat' style={ feat["-requires"] ? feat["-requires"] === chosenFeat ? { display: 'initial' } : { display: 'none' } : { display: 'initial' } } key={ index }>
													<h4 className="name txt-dim">
														{ feat.name && feat.name }
													</h4>
													{
														feat.text && ClassDetails.formatTextPara( feat.text )
													}
												</li>
											)
										}
										{
											level[ Object.keys( level )[ 0 ] ].optional && level[ Object.keys(
												level )[ 0 ] ].optional.map( ( feat, index ) =>
												<li className={ 'feat' + (feat[ "-optional" ] ? ' optional' : '') + (feat.name === chosenFeat ? ' active' : '') }
													onClick={ () => this._selecOptionalFeat( feat[ "-optional" ] && feat.name ) }
													key={ index }>
													<h4 className="name txt-dim">
														{ feat.name && feat.name }
													</h4>
													{
														feat.text && ClassDetails.formatTextPara( feat.text )
													}
												</li>
											)
										}

									</ul>
								)


							} )
						}
					</div>

				</div>
				<div className="class-card active">
					<div className="symbol">
						{ logo }
					</div>
					<h3 className="h2 txt-dim txt-jaapokki">
						{ charClass.name }
					</h3>
					{ cardBackground }
				</div>
				<Button label="choose" onClick={ () => newClass( charClass ) }/>
			</div>
			: <div/>
	}

}

ClassDetails.PropTypes = {
	activeClassName: PropTypes.string.isRequired,
	activeClass: PropTypes.object.isRequired,
	onCloseClick: PropTypes.func.isRequired
};

export default ClassDetails;
