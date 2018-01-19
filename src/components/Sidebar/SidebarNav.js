import React, { PropTypes } from 'react';
import { d20 } from "../../utils/SVG";
import { Link } from "react-router-dom";

const SidebarNav = ( { sections, location } ) => (
	<ul className="sidebar-nav">
		{
			sections.map( ( section, index ) =>
				<li className={ "sidebar-nav-element" + ( location.split('/')[2] === section.name ? ' sidebar-nav-element__active' : '' ) } key={ index }>
					<Link to={ section.url }>
						<div className="icon">
							{ d20 }
						</div>
						<div className="p label">
							{ section.name }
						</div>
					</Link>
				</li>
			)
		}
	</ul>
);

SidebarNav.PropTypes = {
	sections: PropTypes.array.isRequired
};

export default SidebarNav;