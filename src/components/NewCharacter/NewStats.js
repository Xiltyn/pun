// ||  pun  ||
//   
// Created @ 12:34 AM | 4/17/2018  
// Powered by WebStorm
//   
// ------------------------------	
// |>   From jakubbujko with <3   <|  
// ------------------------------

import React, { Component, PropTypes } from 'react';
import { Stats } from "../../modules/character/models";
import { logger } from "../../utils/consoleLogger";
import LoaderSpinner from "../LoaderSpinner";
import { logo } from "../../utils/SVG";


class NewStats extends Component {
	static propTypes = {
		stats: PropTypes.object.isRequired
	};

	static defaultProps = {
		stats: new Stats()
	};

	constructor( props ) {
		super( props );

		this.state = {
			animationClass: '',
			animationStateID: 0,
			reRolls: 0
		}
	}

	diceRoll = ( delay ) => {
		const Dice = require( 'roll' );

		const dice = new Dice();
		const rolls = dice.roll('4d6').rolled;
		const smallestRoll = Math.min(...rolls);
		const finalRolls = rolls.filter( roll => roll !== smallestRoll );

		return finalRolls && finalRolls.reduce( ( a, b ) => a + b );

	};

	getAnimationClass = () => {
		let animationStateID = 0;
		const _TIMEOUT	= 2000;
		const states = [ 'rolling', 'rolling', 'done' ];


		if ( this.state.reRolls <= 2 ) {
			this.setState({
				animationClass: 'ready'
			});

			let interval = setInterval( () => {
				if ( animationStateID === 2 ) {
					window.clearInterval( interval );

					this.setState({
						animationClass: 'done',
						reRolls: this.state.reRolls + 1
					});

					animationStateID = 0;

				} else {
					this.setState({
						animationClass: states[animationStateID]
					});

					animationStateID++;

					logger( `==> getAnimationClass return className :: `, 'info', states[animationStateID] )
				}

			}, 2500 );
		}
	};

	render() {
		const {
			stats
		} = this.props;

		const {
			animationClass
		} = this.state;

		return(
			<section className='new-character--stats'>
				<h2 className='txt-jaapokki txt-alt'>
					Statistics
				</h2>
				<p className='txt-std txt-dim'>
					Time to roll for your stats. Click below and see what you've got!
				</p>
				<ul className='rolls-wrapper' onClick={ this.getAnimationClass }>
					{
						Object.keys(stats).map( ( stat, index ) =>
							<li className={ animationClass !== '' ? animationClass + index : '' } key={index}>
								<h3 className='roll h1 txt-alt txt-jaapokki'>
									{ this.diceRoll() }
								</h3>
								<LoaderSpinner/>
								{ logo }
							</li>
						)
					}
				</ul>
			</section>
		)
	}

}

export default NewStats;