import React, { PropTypes } from 'react';
import { d20 } from "../../utils/SVG";
import { Link } from "react-router-dom";

const SidebarNav = ( { sections } ) => (
	<ul className="sidebar-nav">
		{
			sections.map( ( section, index ) =>
				<li className="sidebar-nav-element" key={ index }>
					<div className="icon">
						{ d20 }
					</div>
					<div className="p label">
						<Link to={ section.url }>
							{ section.name }
						</Link>
					</div>
				</li>
			)
		}
	</ul>
);

SidebarNav.PropTypes = {
	sections: PropTypes.array.isRequired
};

export default SidebarNav;