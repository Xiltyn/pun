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
import Name from "../components/NewCharacter/Name";
import { Route } from "react-router-dom";

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

		this.state = {
			character: {}
		};

		this.handleCharacterData = this.handleCharacterData.bind(this);
	}

	handleCharacterData( data ) {
		this.setState({
			character: data
		})
	}

	render() {
		const { character } = this.state;

		const Step1 = !character.name ? <Name newCharacter={this.handleCharacterData}/> : null;
		const Step2 = character.name ? <h2>Here you will choose your background</h2> : null;

		return (
			<div className="new-character">
				{ Step1 }
				{ Step2 }
			</div>
		)
	}
}

NewCharacter.PropTypes = {
};

export default connect( mapStateToProps, mapDisptachToProps )(NewCharacter);