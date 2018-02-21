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

class ClassDetails extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			charClass: {},
		}

	}

	static formatTextPara( text ) {
		if ( text ) {
			if ( text.constructor === Array ) {
				return text.map( ( para, index ) =>
					<p key={index}>
						{ para }
					</p>
				);
			} else {
				return <p>
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

	componentWillReceiveProps( newProps ) {
		console.log(newProps.activeClass)

		if ( newProps.activeClass ) {
			this.setState( {
				charClass: newProps.activeClass,
			} )
		}

	}

	render() {
		const { activeClassName, activeClass, onCloseClick, newClass } = this.props;
		const { charClass } = this.state;

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
									<span className="value h3 txt-jaapokki txt-dim">d{charClass.hd}</span>
								</li>
								<li>
									<div className="label txt-small txt-dark">Initial HP</div>
									<span className="value h3 txt-jaapokki txt-dim">{charClass.hd}</span>
								</li>
								<li>
									<div className="label txt-small txt-dark">Level Up</div>
									<span className="value h3 txt-jaapokki txt-dim">1d{charClass.hd}+CON</span>
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
					{
						charClass.autolevel.map( ( level, index ) => {
							if ( level["-level"] === "1" ) {
								return (
									<ul className="level level__1" key={index}>
										<h3 className="txt-jaapokki txt-alt">
											Level 1
										</h3>
										{
											level.feature && level.feature.map( ( feat, index ) =>
												<li className="feat" key={index}>
													<h4 className="name">
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
							}

						} )
					}
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
