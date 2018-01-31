// ||  pun  ||
//   
// Created @ 8:47 PM | 1/22/2018  
// Powered by WebStorm
//   
// ------------------------------	
// |>   From jakubbujko with <3   <|  
// ------------------------------

import React, { Component, PropTypes } from 'react';
import BackgroundTile from "./BackgroundTile";

class Backgrounds extends Component {
	constructor( props ) {
		super( props );

	}

	componentDidMount() {
		window.scrollTo(0, 0);
	}

	render() {
		const { backgrounds } = this.props;

		return (
			<div className="new-character--background">
				<header>
					<h2 className="title txt-alt txt-jaapokki">
						Choose your background
					</h2>
					<p className="instructions txt-dim">
						Each character in D&D has their own history - what they did before they become adventurers. A lonely sailor can stumble upon a powerful being's artifact and unknowingly create a pact with an allmighty entity and become a warlock. An outcast might find body training as a way to live and eventually find a teacher who'd teach them ways of a monk.
					</p>
					<p className="instructions txt-dim">
						Belowe, you can find countless background archetypes with traits and ability proficiencies which come with them. Choose one of the following based on where or what you'd like your character to originate from.
					</p>
				</header>
				{
					backgrounds.map( ( background, index ) => (
						<BackgroundTile data={ background } key={index} newBackground={ this.props.newBackground }/>
					) )
				}
			</div>
		)
	}

}

Backgrounds.PropTypes = {
	backgrounds: PropTypes.array.isRequired,
	newBackground: PropTypes.func.isRequired
};

export default Backgrounds;