import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AuthMiddleware from 'modules/auth/middleware';
import AppTitle from "../../components/AppTitle";
import { userSvg, logoutSvg } from "../../utils/SVG";
import TopNav from "../../components/TopNav";
import { logger } from "../../utils/consoleLogger";
import Sidebar from "../../components/Sidebar/Sidebar";

const mapStateToProps = () => {
	return {};
};

const mapDispatchToProps = ( dispatch ) => {
	return bindActionCreators( {
		logout: () => AuthMiddleware.logout()
	}, dispatch );
};

export class Landing extends Component {
	static propTypes = {
		logout: PropTypes.func.isRequired
	};

	// constructor(props) {
	//   super(props);
	// }

	componentWillMount() {}

	componentWillUnmount() {}

	render() {
		const { logout } = this.props;

		return (
			<section className="landing">
				<TopNav onLogout={ logout } onOpenProfile={ () => logger( 'OPEN USER PROFILE ACTION REQUIRED', 'warn' ) }/>
				<Sidebar/>
			</section>
		);
	}
}

export default connect( mapStateToProps, mapDispatchToProps )( Landing );
