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
	constructor( strength = 0, dexterity = 0, constitution = 0, intelligence = 0, wisdom = 0, charisma = 0 ) {
		this.strength = {
			base: strength,
			modifier: Stats.getStatModifier( strength ),
		};
		this.dexterity = {
			base: dexterity,
			modifier: Stats.getStatModifier( dexterity ),
		};
		this.constitution = {
			base: constitution,
			modifier: Stats.getStatModifier( constitution ),
		};
		this.intelligence = {
			base: intelligence,
			modifier: Stats.getStatModifier( intelligence ),
		};
		this.wisdom = {
			base: wisdom,
			modifier: Stats.getStatModifier( wisdom ),
		};
		this.charisma = {
			base: charisma,
			modifier: Stats.getStatModifier( charisma ),
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
	strength: PropTypes.number.isRequired,
	dexterity: PropTypes.number.isRequired,
	constitution: PropTypes.number.isRequired,
	intelligence: PropTypes.number.isRequired,
	wisdom: PropTypes.number.isRequired,
	charisma: PropTypes.number.isRequired
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
		this.speed = 0;
		this.size = 0;
		this.className = '';
		this.spellAbility = '';
		this.hd = '';
		this.proficiencyMod = 2;
		this.stats = {};
		this.spells = [];
		this.traits = [];
		this.savingThrows = {
			strength: {
				base: 0,
				isProficient: false
			},
			dexterity: {
				base: 0,
				isProficient: false
			},
			constitution: {
				base: 0,
				isProficient: false
			},
			intelligence: {
				base: 0,
				isProficient: false
			},
			wisdom: {
				base: 0,
				isProficient: false
			},
			charisma: {
				base: 0,
				isProficient: false
			}
		};
		this.abilities = {
			"acrobatics": {
				name: "acrobatics",
				base: 0,
				stat: "dex",
				isProficient: false
			},
			"animal handling": {
				name: "animal handling",
				base: 0,
				stat: "wis",
				isProficient: false
			},
			"arcana": {
				name: "arcana",
				base: 0,
				stat: "int",
				isProficient: false
			},
			"athletics": {
				name: "athletics",
				base: 0,
				stat: "str",
				isProficient: false
			},
			"deception": {
				name: "deception",
				base: 0,
				stat: "cha",
				isProficient: false
			},
			"history": {
				name: "history",
				base: 0,
				stat: "int",
				isProficient: false
			},
			"insight": {
				name: "insight",
				base: 0,
				stat: "wis",
				isProficient: false
			},
			"intimidation": {
				name: "intimidation",
				base: 0,
				stat: "cha",
				isProficient: false
			},
			"medicine": {
				name: "medicine",
				base: 0,
				stat: "wis",
				isProficient: false
			},
			"nature": {
				name: "nature",
				base: 0,
				stat: "int",
				isProficient: false
			},
			"perception": {
				name: "perception",
				base: 0,
				stat: "wis",
				isProficient: false
			},
			"performance": {
				name: "performance",
				base: 0,
				stat: "cha",
				isProficient: false
			},
			"persuasion": {
				name: "persuasion",
				base: 0,
				stat: "cha",
				isProficient: false
			},
			"religion": {
				name: "religion",
				base: 0,
				stat: "int",
				isProficient: false
			},
			"sleight of hand": {
				name: "sleight of hand",
				base: 0,
				stat: "dex",
				isProficient: false
			},
			"stealth": {
				name: "stealth",
				base: 0,
				stat: "dex",
				isProficient: false
			},
			"survival": {
				name: "survival",
				base: 0,
				stat: "wis",
				isProficient: false
			}
		};
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