import React, { Component, PropTypes } from 'react';
import SidebarNav from "./SidebarNav";

class Sidebar extends Component {
	constructor( props ) {
		super( props );
	}

	render() {
		const sectionsData = [
			{
				name: 'Characters',
				url: '/app/characters'
			},
			{
				name: 'Journal',
				url: '/app/journal'
			},
			{
				name: 'Spellbook',
				url: '/app/spellbook'
			}
		];

		return(
			<section className="sidebar">
				<header className="h2 txt-alt txt-jaapokki">
					menu
				</header>
				<SidebarNav sections={ sectionsData }/>
			</section>
		)
	}
}

export default Sidebar;