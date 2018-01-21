// ||  pun  ||
//   
// Created @ 13:57 | 2018/01/20  
// Powered by WebStorm
//   
// ------------------------------	
// |>   From jakubbujko with <3   <|  
// ------------------------------

import React, { Component, PropTypes } from 'react';
import AddCharacter from "../components/Characters/AddCharacter";
import characterMiddleware from "../modules/character/middleware";
import { connect } from "react-redux";


const mapStateToProps = ( state ) => {
	return {

	}
};

const mapDispatchToProps = ( dispatch ) => {
	return {
		setStats: ( data ) => {
			dispatch( characterMiddleware.dispatchSetStats( data ) )
		}
	}
};

class Characters extends Component {

	constructor( props ) {
		super( props )

	}

	render() {
		return (
			<section id="characters">
				<AddCharacter/>
			</section>
		)
	}

}

Characters.PropTypes = {

};


export default connect( mapStateToProps, mapDispatchToProps )(Characters);