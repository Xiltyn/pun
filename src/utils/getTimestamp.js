// ||  pun  ||
//
// Created @ 11:36 PM | 1/20/2018
// Powered by WebStorm
//
// ------------------------------
// |>   From jakubbujko with <3   <|
// ------------------------------

export const getTimestamp = () => {
	const NOW = new Date();

	const D = NOW.getDay();
	const M = NOW.getMonth();
	const hh = NOW.getHours();
	const mm = NOW.getMinutes();
	const ss = NOW.getSeconds();

	return '[' + D + '/' + M + '|' + hh + ':' + mm + ':' + ss + ']'
};