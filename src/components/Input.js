// ||  pun  ||
//   
// Created @ 12:13 AM | 1/22/2018  
// Powered by WebStorm
//   
// ------------------------------	
// |>   From jakubbujko with <3   <|  
// ------------------------------

import React, { Component, PropTypes } from 'react';
import { logger } from "../utils/consoleLogger";
import { sliceDice } from "../utils/sliceDice";

class Input extends Component {
	constructor( props ) {
		super( props );

		this.state = {
			isFocused: false,
			value: ''
		}

		this.handleInputBlur = this.handleInputBlur.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	handleInputBlur( e ) {
		this.setState( {
			isFocused: !this.state.isFocused

		} )
	}

	handleChange( e ) {
		this.setState( {
			value: e.target.value
		} );

		this.props.onChange( e )
	}

	render() {
		return (
			<div className={ "input" + ( this.state.isFocused ? " input--active" : "" ) + ( !this.props.isRequired ? " input--optional" : "" ) }>
				<input
					name={ this.props.name }
					value={ this.state.value }
					onChange={ this.handleChange }
					type={ this.props.type || 'text' }
					required={ this.props.isRequired || false }
					onBlur={this.handleInputBlur}
					onFocus={this.handleInputBlur}
				/>
				<label htmlFor={ this.props.name }>
					{ this.state.value === '' || this.state.isFocused ? this.props.label : '' }
				</label>
			</div>
		)
	}
}

Input.PropTypes = {
	onChange: PropTypes.func.isRequired,
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	type: PropTypes.string,
	isRequired: PropTypes.bool
};

export default Input;