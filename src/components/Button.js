// ||  pun  ||
//   
// Created @ 10:05 PM | 1/22/2018  
// Powered by WebStorm
//   
// ------------------------------	
// |>   From jakubbujko with <3   <|  
// ------------------------------

import React, { Component, PropTypes } from 'react';

const Button = ( { ...props } ) => (
	<button className={ props.isDisabled ? "disabled" : "" } onSubmit={ props.onSubmit } onClick={ props.onClick }
			disabled={ props.isDisabled }>
		{ props.label }
	</button>
);

export default Button;