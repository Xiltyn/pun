// ||  pun  ||
//   
// Created @ 8:52 PM | 1/22/2018  
// Powered by WebStorm
//   
// ------------------------------	
// |>   From jakubbujko with <3   <|  
// ------------------------------

import React, { Component, PropTypes } from 'react';
import Button from "../Button";
import { logger } from "../../utils/consoleLogger";

class BackgroundTile extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			isActive: false
		};

		this.handleOpen = this.handleOpen.bind(this);
		this.handleClose = this.handleClose.bind(this);
	}

	handleOpen() {
		this.setState( {
			isActive: true
		} );
	}

	handleClose() {
		this.setState( {
			isActive: false
		} );
	}

	render() {
		const { isActive } = this.state;
		const { data } = this.props;

		return (
			<div className={ "tile" + ( isActive ? " active" : "" ) } onClick={ !this.state.isActive ? this.handleOpen : () => logger( 'Element isActive, no action will be taken', 'info' ) } >
				<div className="close-wrapper" onClick={ this.handleClose } >
					<div className={ "close" + ( isActive ? " active" : "" ) } />
				</div>
				<h3 className="h4 name txt-dark txt-jaapokki">
					{ data.name }
				</h3>
				<div className="traits">
					{
						data.trait.map( ( trait, index ) => (
							<div className="trait" key={ index }>
								<p className="txt-std name"> { trait.name } </p>
								<p className="txt-dim txt-small text"> { trait.text } </p>
							</div>
						) )
					}
				</div>
				<Button label="Choose" onClick={ () => this.props.newBackground( data.name ) } />
			</div>
		);
	}
}




export default BackgroundTile;