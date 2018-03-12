import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AuthMiddleware from 'modules/auth/middleware';
import dataInitializerMiddleware from "modules/dataInitializer/middleware";
import TopNav from "../../components/TopNav";
import { logger } from "../../utils/consoleLogger";
import Sidebar from "../../components/Sidebar/Sidebar";
import { Route } from "react-router-dom";
import Characters from "../../containers/Characters";
import NewCharacter from "../../containers/NewCharacter";
import LoaderSpinner from "../../components/LoaderSpinner";

const mapStateToProps = ( state ) => {
	return {
		isLoading: state.compendium.isLoading
	};
};

const mapDispatchToProps = ( dispatch ) => {
	return bindActionCreators( {
		logout: () => AuthMiddleware.logout(),
		getCharacterData: () => dataInitializerMiddleware.getCharacterData()
	}, dispatch );
};

export class Landing extends Component {
	static propTypes = {
		logout: PropTypes.func.isRequired,
		getCharacterData: PropTypes.func.isRequired
	};

	constructor( props ) {
		super( props );
	}

	componentWillMount() {
		this.props.getCharacterData();
	}

	componentWillUnmount() {}

	render() {



		const { isLoading, logout, location } = this.props;

		logger( '===> CURRENT LOCATION :: ', 'info', location );

		return !isLoading ? <section className="landing">
			<TopNav onLogout={ logout } onOpenProfile={ () => logger( 'OPEN USER PROFILE ACTION REQUIRED', 'warn' ) }/>
			<article>
				<Sidebar currentLocation={ location.pathname }/>
				<Route path="/app/characters" component={ Characters } exact={ true }/>
				<Route path="/app/characters/new/:stepName" component={ NewCharacter } exact={ false }/>
			</article>
		</section> : <LoaderSpinner copy size={ 72 }/>
			;
	}
}

export default connect( mapStateToProps, mapDispatchToProps )( Landing );
