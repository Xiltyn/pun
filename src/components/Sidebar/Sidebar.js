import React, { Component, PropTypes } from 'react';
import SidebarNav from "./SidebarNav";
import { logger } from "../../utils/consoleLogger";

class Sidebar extends Component {
	constructor( props ) {
		super( props );
	}

	render() {
		const { currentLocation } = this.props;

		const sectionsData = [
			{
				name: 'characters',
				url: '/app/characters'
			},
			{
				name: 'journal',
				url: '/app/journal'
			},
			{
				name: 'spellbook',
				url: '/app/spellbook'
			}
		];

		logger(currentLocation.split('/')[2], 'info')

		return(
			<section className="sidebar">
				<header className="h2 txt-alt txt-jaapokki">
					menu
				</header>
				<SidebarNav sections={ sectionsData } location={ currentLocation } />
			</section>
		)
	}
}

export default Sidebar;