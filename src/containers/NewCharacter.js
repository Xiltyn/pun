// ||  pun  ||
//   
// Created @ 10:49 PM | 1/20/2018  
// Powered by WebStorm
//   
// ------------------------------	
// |>   From jakubbujko with <3   <|  
// ------------------------------

import React, { Component, PropTypes } from 'react';
import characterMiddleware from "../modules/character/middleware";
import { connect } from "react-redux";

const mapStateToProps = ( state ) => {
	return {

	}
};

const mapDisptachToProps = ( dispatch ) => {
	return {
		setStats: ( stats ) => {
			dispatch( characterMiddleware.dispatchSetStats( stats ) )
		}
	}
};

class NewCharacter extends Component {
	constructor( props ) {
		super( props );

	}

	render() {
		return (
			<div className="new-character">
				<p className="txt-alt h1 txt-jaapokki">
					 Character creation view
				</p>
			</div>
		)
	}

	componentWillMount() {
		this.props.setStats( 'stats' );
	}
}

NewCharacter.PropTypes = {
};

export default connect( mapStateToProps, mapDisptachToProps )(NewCharacter);