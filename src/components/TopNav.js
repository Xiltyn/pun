import * as React from 'react';
import { logoutSvg, userSvg } from "../utils/SVG";
import AppTitle from "./AppTitle";

const TopNav = ( { onLogout, onOpenProfile } ) => (
	<nav className="top-bar">
		<div className="left-col"/>
		<div className="mid-col">
			<AppTitle/>
		</div>
		<div className="right-col">
			<div className="profile-btn" onClick={ onOpenProfile }>
				{ userSvg }
			</div>
			<div className="logout-btn" onClick={ onLogout }>
				{ logoutSvg }
			</div>
		</div>
	</nav>
);

TopNav.PropTypes = {
	onLogout: React.PropTypes.func.isRequired,
	onOpenProfile: React.PropTypes.func.isRequired
};

export default TopNav;