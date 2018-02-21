// ||  pun  ||
//   
// Created @ 12:01 AM | 2/4/2018  
// Powered by WebStorm
//   
// ------------------------------	
// |>   From jakubbujko with <3   <|  
// ------------------------------

import React, { Component } from 'react';
import { logger } from "../../utils/consoleLogger";
import ClassCard from "./ClassCard";
import ClassDetails from "./ClassDetails";

class Classes extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			activeClassName: ''
		};

		this.setActiveCard = this.setActiveCard.bind( this );

	}

	setActiveCard( name ) {
		if ( this.state.activeClassName !== name ) {
			this.setState( {
				activeClassName: name
			} )
		}
		else {
			this.setState( {
				activeClassName: ''
			} )
		}

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
						Your character's class will determine your capabilities and potential as an adventurer.
						Depending on your playstyle, you may choose to rely mainly on spells with a Sorcerer or Wizard
						classes, you might also decide to embark on your journey with a trusty maul at your side and
						become a Fighter or Barbarian. Maybe your main goal is to support your party, by being a Cleric
						or a Bard. Choice is yours, you can be whoever you want to be!
					</p>
					{/*<p className="instructions txt-dim">*/}
						{/*Mind that you can always go one step back, if your chosen race happens not to play well together*/}
						{/*with a class you wish to choose in the next step*/}
					{/*</p>*/}
				</header>
				<div className="cards" style={ { maxHeight: activeClassName !== "" ? '0' : '9999px' } }>
					{
						classes.map( ( charClass, index ) =>
							<ClassCard
								charClass={ charClass }
								key={ index }
								activeClass={ activeClassName }
								onClick={ charClass.name !== activeClassName ? this.setActiveCard : ( name ) => logger( name + ' card active :: ',
									'info', 'onClick event disabled' ) }/>
						)
					}
				</div>
				<ClassDetails
					activeClass={ activeClass }
					activeClassName={ activeClassName }
					newRace={ ( charClass ) => newClass( charClass ) }
					onCloseClick={ () => { this.setState( { activeClassName: '' } ) } }/>

			</div>
		)
	}
}

export default Classes;