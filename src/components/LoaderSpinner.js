import React, { PropTypes } from 'react';
import { d20 } from "../utils/SVG";
import { sliceDice } from "../utils/sliceDice";

class LoaderSpinner extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			dotsCounter: 1,
			copyChangeCounter: 0,
			copy: [
				'Rolling Dice',
				'Creating NPCs',
				'Sharpening Blades',
				'Drinking Ale',
				'Drawing Maps'
			],
			dots: '.'
		};

		this._handleCopyChange = this._handleCopyChange.bind(this);
		this._handleDotsChange = this._handleDotsChange.bind(this);
	}

	_handleDotsChange() {
		this.setState({
			dots: this.state.dotsCounter < 3 ? [ ...this.state.dots + '.' ] : '.'
		})
	}

	_handleCopyChange() {
		const { dotsCounter, copyChangeCounter, copy } = this.state;

		this.setState({
			copyChangeCounter: copyChangeCounter >= copy.length -1 ? 0 : copyChangeCounter + 1,
			dotsCounter: dotsCounter === 3 ? 0 : dotsCounter + 1
		});

		this._handleDotsChange();
	}

	componentWillReceiveProps() {
		setInterval( this._handleCopyChange, 1000 );
	}

	render() {

		const { fill, size } = this.props;
		const { copy, copyChangeCounter, dots } = this.state;

		return (
			<div className="loader">
				<div className="spinner" style={ {
					fill: fill,
					width: size,
					height: size
				} }>
					{ d20 }
				</div>
				<h2 className="h4 copy txt-jaapokki">
					{
						copy[copyChangeCounter] + dots
					}
				</h2>
			</div>
		)
	}


}

LoaderSpinner.propTypes = {
	fill: PropTypes.string,
	size: PropTypes.number
};

LoaderSpinner.defaultProps = {
	fill: '#FFFFFF',
	size: 56
};

export default LoaderSpinner;
