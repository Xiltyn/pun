// ||  pun  ||
//   
// Created @ 7:08 PM | 2/28/2018  
// Powered by WebStorm
//   
// ------------------------------	
// |>   From jakubbujko with <3   <|  
// ------------------------------

import * as React from 'react';
import ClassDetails from "./ClassDetails";

const ClassLevel = ( { ...props } ) =>
	<div className="level-wrapper">
		{
			ClassDetails.sortFeatures( props.autolevel, props.level ).map( ( level, index ) => {
				return (
					<ul className={ "level level__" + Object.keys( level )[ 0 ] } key={ index }>
						{
							level[ Object.keys( level )[ 0 ] ].obligatory && level[ Object.keys(
								level )[ 0 ] ].obligatory.map( ( feat, index ) =>
								<li className={'feat' + ( feat["-requires"] ? feat["-requires"] === props.chosenFeat ? ' prerequisit selected' : ' prerequisit' : '' ) } key={ index }>
									<h4 className="name txt-dim">
										{ feat.name && feat.name }
									</h4>
									{
										feat.text && ClassDetails.formatTextPara( feat.text )
									}
								</li>
							)
						}
						{
							level[ Object.keys( level )[ 0 ] ].optional && level[ Object.keys(
								level )[ 0 ] ].optional.map( ( feat, index ) => {

									return	<li className={ 'feat' + (feat[ "-optional" ] ? ' optional' : '') + (feat.name === props.chosenFeat ? ' active' : '') + (feat.name === props.chosenFeat || props.chosenFeat === '' ? ' visible' : '') }
												  onClick={ () => props.selectFeat( feat[ "-optional" ] && feat.name ) }
												  key={ index }>
										<h4 className="name txt-dim">
											{ feat.name && feat.name }
										</h4>
										{
											feat.text && ClassDetails.formatTextPara( feat.text )
										}
									</li>

								}
							)
						}
						{
							level[ Object.keys( level )[ 0 ] ].requires && level[ Object.keys(
								level )[ 0 ] ].requires.map( ( feat, index ) =>
								<li className={'feat' + ( feat["-requires"] ? feat["-requires"] === props.chosenFeat ? ' prerequisit selected' : ' prerequisit' : '' ) } key={ index }>
									<h4 className="name txt-dim">
										{ feat.name && feat.name }
									</h4>
									{
										feat.text && ClassDetails.formatTextPara( feat.text )
									}
								</li>
							)
						}

					</ul>
				)


			} )
		}
	</div>;

ClassLevel.PropTypes = {
	autolevel: React.PropTypes.array.isRequired,
	level: React.PropTypes.string.isRequired,
	chosenFeat: React.PropTypes.string.isRequired,
	selectFeat: React.PropTypes.func.isRequired
};

export default ClassLevel;