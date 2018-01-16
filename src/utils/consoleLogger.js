const color = {
	success: "#21B764",
	error: "#FF595E",
	warn: "#ffa600",
	process: "#6457a6",
	info: "#272838",
	background: '#EDEEF9'
};

const status = {
	info: 'color: ' + color.info + '; font-weight: 100; background-color: ' + color.background,
	error: 'color: ' + color.error + '; font-weight: 600; background-color: ' + color.background,
	success: 'color: ' + color.success + '; font-weight: 600; background-color: ' + color.background,
	process: 'color: ' + color.process + '; font-weight: 300; background-color: ' + color.background,
	warn: 'color: ' + color.warn + '; font-weight: 300; background-color: ' + color.background
};

export const getConsoleStyles = ( style ) => {
	return status[ style ].toString();
};

export const logger = ( message, style, payload ) => {
	if ( process.env.NODE_ENV === 'development' ) {
		return console.log( '%c' + message + ( payload ? typeof payload === 'string' ? '%s' : '' : '' ),
			getConsoleStyles( style ), payload ? payload : '' );
	}
};
