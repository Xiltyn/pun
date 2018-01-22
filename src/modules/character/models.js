// ||  pun  ||
//   
// Created @ 11:40 PM | 1/20/2018  
// Powered by WebStorm
//   
// ------------------------------	
// |>   From jakubbujko with <3   <|  
// ------------------------------

import React, { PropTypes } from 'react';
import { logger } from "../../utils/consoleLogger";

export class Stats {
	constructor( str, dex, con, int, wis, cha ) {
		this.str = {
			base: str,
			modifier: Stats.getStatModifier( str ),
		};
		this.dex = {
			base: dex,
			modifier: Stats.getStatModifier( dex ),
		};
		this.con = {
			base: con,
			modifier: Stats.getStatModifier( con ),
		};
		this.int = {
			base: int,
			modifier: Stats.getStatModifier( int ),
		};
		this.wis = {
			base: wis,
			modifier: Stats.getStatModifier( wis ),
		};
		this.cha = {
			base: cha,
			modifier: Stats.getStatModifier( cha ),
		}
	}

	static getStatModifier( stat ) {
		const recount = (stat - 10) / 2;

		//logger( '===> Modifier value from base :: ' + stat + ' being set to :: ', 'process', recount > 0 ?
		// Math.ceil(recount) : Math.floor(recount) )
		return recount > 0 ? Math.ceil( recount ) : Math.floor( recount )
	}

}

Stats.PropTypes = {
	str: PropTypes.number.isRequired,
	dex: PropTypes.number.isRequired,
	con: PropTypes.number.isRequired,
	int: PropTypes.number.isRequired,
	wis: PropTypes.number.isRequired,
	cha: PropTypes.number.isRequired
};

export class Character {
	constructor( name, playerName ) {
		this.id = Character.incrementId();
		this.name = name;
		this.playerName = playerName || '';
		this.level = 1;
		this.exp = 0;
		this.background = '';
		this.race = '';
		this.className = '';
		this.classAbilities = '';
		this.stats = {};
		this.spells = [];
		this.savingThrows = {
			str: {
				base: 0,
				isProficient: false
			},
			dex: {
				base: 0,
				isProficient: false
			},
			con: {
				base: 0,
				isProficient: false
			},
			int: {
				base: 0,
				isProficient: false
			},
			wis: {
				base: 0,
				isProficient: false
			},
			cha: {
				base: 0,
				isProficient: false
			}
		};
		this.abilities = [
			{
				name: "acrobatics",
				base: 0,
				stat: "dex",
				isProficient: false
			},
			{
				name: "animal handling",
				base: 0,
				stat: "wis",
				isProficient: false
			},
			{
				name: "arcana",
				base: 0,
				stat: "int",
				isProficient: false
			},
			{
				name: "athletics",
				base: 0,
				stat: "str",
				isProficient: false
			},
			{
				name: "deception",
				base: 0,
				stat: "cha",
				isProficient: false
			},
			{
				name: "history",
				base: 0,
				stat: "int",
				isProficient: false
			},
			{
				name: "insight",
				base: 0,
				stat: "wis",
				isProficient: false
			},
			{
				name: "intimidation",
				base: 0,
				stat: "cha",
				isProficient: false
			},
			{
				name: "medicine",
				base: 0,
				stat: "wis",
				isProficient: false
			},
			{
				name: "nature",
				base: 0,
				stat: "int",
				isProficient: false
			},
			{
				name: "perception",
				base: 0,
				stat: "wis",
				isProficient: false
			},
			{
				name: "performance",
				base: 0,
				stat: "cha",
				isProficient: false
			},
			{
				name: "persuasion",
				base: 0,
				stat: "cha",
				isProficient: false
			},
			{
				name: "religion",
				base: 0,
				stat: "int",
				isProficient: false
			},
			{
				name: "sleight of hand",
				base: 0,
				stat: "dex",
				isProficient: false
			},
			{
				name: "stealth",
				base: 0,
				stat: "dex",
				isProficient: false
			},
			{
				name: "survival",
				base: 0,
				stat: "wis",
				isProficient: false
			}
		];
	}

	static incrementId() {
		if ( !this.latestId ) this.latestId = 1;
		else this.latestId++;
		return this.latestId
	}
}

Character.PropTypes = {
	name: PropTypes.string.isRequired,
	playerName: PropTypes.string
};