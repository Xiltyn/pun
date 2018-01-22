import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router-dom';
import { logger } from "../utils/consoleLogger";
import AppTitle from "./AppTitle";
import Input from "./Input";

class AuthLogin extends Component {

	static propTypes = {
		isProcessing: PropTypes.bool.isRequired,
		isError: PropTypes.bool.isRequired,
		errorMessage: PropTypes.string.isRequired,
		signin: PropTypes.func.isRequired
	}

	constructor( props ) {
		super( props );
		this.state = {
			email: '',
			password: '',
			showPassword: false,
			inputFocus: {
				email: false,
				password: false
			}
		};
		this.onSubmit = this.onSubmit.bind( this );
		this.togglePassword = this.togglePassword.bind( this );
		this.handleInputBlur = this.handleInputBlur.bind( this )
	}

	onSubmit( e ) {
		e.preventDefault();
		const credentials = {
			email: this.state.email,
			password: this.state.password
		};
		this.props.signin( credentials );
	}

	togglePassword() {
		this.setState( {
			showPassword: !this.state.showPassword
		} );
	}

	handleInputBlur( e ) {
		const name = e.target.name;

		logger( '===> ON FOCUS TARGET NAME :: ', 'info', name );

		this.setState( {
			inputFocus: {
				[ name ]: !this.state.inputFocus[ name ]
			}

		} )
	}

	render() {
		const { isProcessing, isError, errorMessage } = this.props;
		const logoSrc = require('../styles/images/logo.png');

		return (
			<div id="login">
				<header>
					<div className="logo">
						<img src={ logoSrc } alt=""/>
					</div>
					<AppTitle/>
				</header>
				{ isError ? <div className="txt-small alert">{ errorMessage }</div> : null }
				<form onSubmit={ this.onSubmit } name="form">
					<Input name='email' label="email" type="email" onChange={ ( e ) => this.setState({ email: e.target.value }) } isRequired={true} />
					<Input name='password' label="password" type={ this.state.showPassword ? 'text' : 'password' } onChange={ e => this.setState( { password: e.target.value } ) } isRequired={true} />
					{/*<div>*/}
						{/*<label htmlFor="remember">*/}
							{/*<input id="remember" type="checkbox"/><i className="info"/> Keep me signed in*/}
						{/*</label>*/}
					{/*</div>*/}
					<button type="submit" disabled={ !this.state.email || !this.state.password || isProcessing }>
						{ isProcessing ? 'Loading...' : 'login' }
					</button>
				</form>
				{/*<div className="m-y">*/}
					{/*<Link to="forget-password" className="_600">Forgot password?</Link>*/}
				{/*</div>*/}
				{/*<div>*/}
					{/*Do not have an account? <Link to="signup" className="text-info _600">Sign up</Link>*/}
				{/*</div>*/}
			</div>
		);
	}
}

export default AuthLogin;
