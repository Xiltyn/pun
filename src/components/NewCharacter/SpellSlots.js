// ||  pun  ||
//   
// Created @ 16:02 | 2018/03/02  
// Powered by WebStorm
//   
// ------------------------------	
// |>   From jakubbujko with <3   <|  
// ------------------------------

import React, { Component, PropTypes } from 'react';
import { logger } from "../../utils/consoleLogger";

class SpellSlots extends Component {
	constructor(props) {
		super(props);

	}

	render() {
		const { data } = this.props;

		logger( '==> SpellSlots data Prop value :: ', 'info', data )

		return(
			<div className="table spell-slots">
				{
					data.length > 1 && data.map( ( level, index ) =>
						<div className="level row" key={index}>
							<div className="label">
								{ level.label }
							</div>
							<ul className="values">
								{/*{ logger( '==> Level element for spellSlots in map', 'warn', level.slots ) }*/}

								{
									level.slots.map( ( slot, index ) =>
										<li className="spell cell" key={index}>
											{ slot }
										</li>
									)
								}
							</ul>
						</div>
					)
				}
			</div>
		)
	}

}

SpellSlots.PropTypes = {
	data: PropTypes.object.isRequired
};

export default SpellSlots;