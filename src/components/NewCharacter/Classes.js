// ||  pun  ||
//   
// Created @ 12:01 AM | 2/4/2018  
// Powered by WebStorm
//   
// ------------------------------	
// |>   From jakubbujko with <3   <|  
// ------------------------------

import React, { Component, PropTypes } from 'react';
import { logger } from "../../utils/consoleLogger";
import ClassCard from "./ClassCard";

class Classes extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			activeClassName: ''
		};

	}

	componentDidMount() {
		window.scrollTo( 0, 0 );
	}

	render() {
		const { activeClassName } = this.state;
		const { classes, newClass } = this.props;

		const activeClass = classes.filter( ( element ) => element.name === activeClassName )[ 0 ];

		return (
			<div className="new-character--classes">
				<header>
					<h2 className="title txt-alt txt-jaapokki">
						Choose your Class
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
				<div className="cards" style={ { maxHeight: activeClassName !== "" ? '0' : '9999px' } }>
					{
						classes.map( ( charClass, index ) =>
							<ClassCard charClass={charClass} key={index} activeClass={activeClassName}/>
						)
					}
				</div>

			</div>
		)
	}
}

export default Classes;