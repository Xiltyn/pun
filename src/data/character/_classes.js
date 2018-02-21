export const classes = {
	"compendium": {
		"-version": "5",
		"class": [
			{
				"name": "Barbarian",
				"hd": "12",
				"proficiency": "Strength, Constitution",
				"autolevel": [
					{
						"-level": "1",
						"feature": [
							{
								"name": "Starting Proficiencies",
								"text": [
									"You are proficient with the following items, in addition to any proficiencies provided by your race or background.",
									"Armor: light armor, medium armor, shields",
									"Weapons: simple weapons, martial weapons",
									"Tools: none",
									"Skills: Choose two from Animal Handling, Athletics, Intimidation, Nature, Perception, and Survival"
								]
							},
							{
								"name": "Starting Equipment",
								"text": [
									"You start with the following items, plus anything provided by your background.",
									"• (a) a greataxe or (b) any martial melee weapon",
									"• (a) two handaxes or (b) any simple weapon",
									"• An explorer's pack, and four javelins",
									"Alternatively, you may start with 2d4 x 10 gp to buy your own equipment."
								]
							}
						]
					},
					{
						"-level": "1",
						"feature": [
							{
								"name": "Rage",
								"text": [
									"In battle, you fight with primal ferocity. On your turn, you can enter a rage as a bonus action.",
									"While raging, you gain the following benefits if you aren't wearing heavy armor:",
									"• You have advantage on Strength checks and Strength saving throws.",
									"• When you make a melee weapon attack using Strength, you gain a +2 bonus to the damage roll. This bonus increases as you level.",
									"• You have resistance to bludgeoning, piercing, and slashing damage.",
									"If you are able to cast spells, you can't cast them or concentrate on them while raging.",
									"Your rage lasts for 1 minute. It ends early if you are knocked unconscious or if your turn ends and you haven't attacked a hostile creature since your last turn or taken damage since then. You can also end your rage on your turn as a bonus action.",
									"Once you have raged the maximum number of times for your barbarian level, you must finish a long rest before you can rage again. You may rage 2 times at 1st level, 3 at 3rd, 4 at 6th, 5 at 12th, and 6 at 17th."
								]
							},
							{
								"name": "Unarmored Defense",
								"text": "While you are not wearing any armor, your Armor Class equals 10 + your Dexterity modifier + your Constitution modifier. You can use a shield and still gain this benefit."
							}
						]
					},
					{
						"-level": "2",
						"feature": [ {
							"name": "Danger Sense",
							"text": "At 2nd level, you gain an uncanny sense of when things nearby aren't as they should be, giving you an edge when you dodge away from danger. You have advantage on Dexterity saving throws against effects that you can see, such as traps and spells. To gain this benefit, you can't be blinded, deafened, or incapacitated."
						},
							{
								"name": "Reckless Attack",
								"text": "Starting at 2nd level, you can throw aside all concern for defense to attack with fierce desperation. When you make your first attack on your turn, you can decide to attack recklessly. Doing so gives you advantage on melee weapon attack rolls using Strength during this turn, but attack rolls against you have advantage until your next turn."
							}
						]
					},
					{
						"-level": "3",
						"feature": [ {
							"name": "Increased Rages",
							"text": "You may now rage 3 times before a long rest."
						},
							{
								"name": "Primal Path",
								"text": "At 3rd level, you choose a path that shapes the nature of your rage. Choose the Path of the Berserker or the Path of the Totem Warrior, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 6th, 10th, and 14th levels."
							},
							{
								"-optional": "YES",
								"name": "Primal Path: Path of the Berserker",
								"text": "For some barbarians, rage is a means to an end -- that end being violence. The Path of the Berserker is a path of untrammeled fury, slick with blood. As you enter the berserker's rage, you thrill in the chaos of battle, heedless of your own health or well-being."
							},
							{
								"-optional": "YES",
								"name": "Primal Path: Path of the Totem Warrior",
								"text": [
									"The Path of the Totem Warrior is a spiritual journey, as the barbarian accepts a spirit animal as guide, protector, and inspiration. In battle, your totem spirit fills you with supernatural might, adding magical fuel to your barbarian rage.",
									"Most barbarian tribes consider a totem animal to be kin to a particular clan. In such cases, it is unusual for an individual to have more than one totem animal spirit, though exceptions exist."
								]
							},
							{
								"-optional": "YES",
								"name": "Primal Path: Path of the Battlerager",
								"text": "Known as Kuldjargh (literally \"axe idiot\") in Dwarvish, battleragers are dwarf followers of the gods of war and take the Path of the Battlerager. They specialize in wearing bulky, spiked armor and throwing themselves into combat, striking with their body itself and giving themselves over to the fury of battle."
							},
							{
								"-optional": "YES",
								"name": "Path of the Battlerager: Restriction - Dwarves Only",
								"text": [
									"Only dwarves can follow the Path of the Battlerager. The battlerager fills a particular niche in dwarven society and culture.",
									"Your DM can lift this restriction to better suite the campaign. The restriction exists for the Forgotten Realms. It might not apply to your DM's setting or your DM's version of the Realms."
								]
							},
							{
								"-optional": "YES",
								"name": "Path of the Battlerager: Battlerager Armor",
								"text": [
									"When you choose this path at 3rd level, you gain the ability to use spiked armor as a weapon.",
									"While you are wearing spiked armor and are raging, you can use a bonus action to make one melee weapon attack with your armor spikes at a target within 5 feet of you. If the attack hits, the spikes deal 1d4 piercing damage. You use your Strength modifier for the attack and damage rolls.",
									"Additionally, when you use the Attack action to grapple a creature, the target takes 3 piercing damage if your grapple check succeeds."
								]
							},
							{
								"-optional": "YES",
								"name": "Path of the Berserker: Frenzy",
								"text": "Starting when you choose this path at 3rd level, you can go into a frenzy when you rage. If you do so, for the duration of your rage you can make a single melee weapon attack as a bonus action on each of your turns after this one. When your rage ends, you suffer one level of exhaustion."
							},
							{
								"-optional": "YES",
								"name": "Path of the Totem Warrior: Spirit Seeker",
								"text": "Yours is a path that seeks attunement with the natural world, giving you a kinship with beasts. At 3rd level when you adopt this path, you gain the ability to cast the beast sense and speak with animals spells, but only as rituals, as described in chapter 10."
							},
							{
								"-optional": "YES",
								"name": "Path of the Totem Warrior: Totem Spirit",
								"text": [
									"At 3rd level, when you adopt this path, you choose a totem spirit and gain its feature. You must make or acquire a physical totem object- an amulet or similar adornment — that incorporates fur or feathers, claws, teeth, or bones of the totem animal. At your option, you also gain minor physical attributes that are reminiscent of your totem spirit. For example, if you have a bear totem spirit, you might be unusually hairy and thick-skinned, or if your totem is the eagle, your eyes turn bright yellow.",
									"Your totem animal might be an animal related to those listed here but more appropriate to your homeland. For example, you could choose a hawk or vulture in place of an eagle."
								]
							},
							{
								"-optional": "YES",
								"name": "Totem Spirit (Bear)",
								"text": "While raging, you have resistance to all damage except psychic damage. The spirit of the bear makes you tough enough to stand up to any punishment."
							},
							{
								"-optional": "YES",
								"name": "Totem Spirit (Eagle)",
								"text": "While you're raging and aren't wearing heavy armor, other creatures have disadvantage on opportunity attack rolls against you, and you can use the Dash action as a bonus action on your turn. The spirit of the eagle makes you into a predator who can weave through the fray with ease."
							},
							{
								"-optional": "YES",
								"name": "Totem Spirit (Elk)",
								"text": "While you're raging and aren't wearing heaving armor, your walking speed increases by 15 feet. The spirit of the elk makes you extraordinarily swift."
							},
							{
								"-optional": "YES",
								"name": "Totem Spirit (Tiger)",
								"text": "While raging, you can add 10 feet to your long jump distance and 3 feet to your high jump distance. The spirit of the tiger empowers your leaps."
							},
							{
								"-optional": "YES",
								"name": "Totem Spirit (Wolf)",
								"text": "While you're raging, your friends have advantage on melee attack rolls against any creature within 5 feet of you that is hostile to you. The spirit of the wolf makes you a leader of hunters."
							}
						]
					},
					{
						"-level": "4",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 4th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "5",
						"feature": [ {
							"name": "Extra Attack",
							"text": "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
						},
							{
								"name": "Fast Movement",
								"text": "Starting at 5th level, your speed increases by 10 feet while you aren't wearing heavy armor.",
								"modifier": {
									"-category": "bonus",
									"#text": "speed +10"
								}
							}
						]
					},
					{
						"-level": "6",
						"feature": [ {
							"name": "Increased Rages",
							"text": "You may now rage 4 times before a long rest."
						},
							{
								"-optional": "YES",
								"name": "Path of the Battlerager: Reckless Abandon",
								"text": "Beginning at 6th level, when you use Reckless Attack while raging, you also gain temporary hit points equal to your Constitution modifier (minimum of 1). THey vanish if any of them are left when your rage ends."
							},
							{
								"-optional": "YES",
								"name": "Path of the Berserker: Mindless Rage",
								"text": "Beginning at 6th level, you can't be charmed or frightened while raging. If you are charmed or frightened when you enter your rage, the effect is suspended for the duration of the rage."
							},
							{
								"-optional": "YES",
								"name": "Path of the Totem Warrior: Aspect of the Beast",
								"text": "At 6th level, you gain a magical benefit based on the totem animal of your choice. You can choose the same animal you selected at 3rd level or a different one."
							},
							{
								"-optional": "YES",
								"name": "Aspect of the Beast: Bear",
								"text": "You gain the might of a bear. Your carrying capacity (including maximum load and maximum lift) is doubled, and you have advantage on Strength checks made to push, pull, lift, or break objects."
							},
							{
								"-optional": "YES",
								"name": "Aspect of the Beast: Eagle",
								"text": "You gain the eyesight of an eagle. You can see up to 1 mile away with no difficulty, able to discern even fine details as though looking at something no more than 100 feet away from you. Additionally, dim light doesn't impose disadvantage on your Wisdom (Perception) checks."
							},
							{
								"-optional": "YES",
								"name": "Aspect of the Beast: Elk",
								"text": "Whether mounted or on foot, your travel pace is doubled, as is the travel pace of up to ten companions while they're within 60 feet of you and you're not incapacitated. The elk spirit helps you roam far and fast."
							},
							{
								"-optional": "YES",
								"name": "Aspect of the Beast: Tiger",
								"text": "You gain proficiency in two skills from the following list: Athletics, Acrobatics, Stealth, and Survival. The cat spirit hones your survival instincts."
							},
							{
								"-optional": "YES",
								"name": "Aspect of the Beast: Wolf",
								"text": "You gain the hunting sensibilities of a wolf. You can track other creatures while traveling at a fast pace, and you can move stealthily while traveling at a normal pace."
							}
						]
					},
					{
						"-level": "7",
						"feature": {
							"name": "Feral Instinct",
							"text": [
								"By 7th level, your instincts are so honed that you have advantage on initiative rolls.",
								"Additionally, if you are surprised at the beginning of combat and aren't incapacitated, you can act normally on your first turn, but only if you enter your rage before doing anything else on that turn."
							]
						}
					},
					{
						"-level": "8",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 8th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM uses the optional Feats, you can instead take a feat."
							]
						}
					},
					{
						"-level": "9",
						"feature": [ {
							"name": "Brutal Critical (1 die)",
							"text": [
								"Beginning at 9th level, you can roll one additional weapon damage die when determining the extra damage for a critical hit with a melee attack.",
								"This increases to two additional dice at 13th level and three additional dice at 17th level."
							]
						},
							{
								"name": "Increased Rage Damage",
								"text": "You now have a +3 bonus to melee damage rolls while raging."
							}
						]
					},
					{
						"-level": "10",
						"feature": [ {
							"-optional": "YES",
							"name": "Path of the Berserker: Intimidating Presence",
							"text": [
								"Beginning at 10th level, you can use your action to frighten someone with your menacing presence. When you do so, choose one creature that you can see within 30 feet of you. If the creature can see or hear you, it must succeed on a Wisdom saving throw (DC equal to 8 + your proficiency bonus + your Charisma modifier) or be frightened of you until the end of your next turn. On subsequent turns, you can use your action to extend the duration of this effect on the frightened creature until the end of your next turn. This effect ends if the creature ends its turn out of line of sight or more than 60 feet away from you.",
								"If the creature succeeds on its saving throw, you can't use this feature on that creature again for 24 hours."
							]
						},
							{
								"-optional": "YES",
								"name": "Path of the Battlerager: Battlerager Charge",
								"text": "Beginning at 10th level, you can take the DAsh action as a bonus action while you are raging."
							},
							{
								"-optional": "YES",
								"name": "Path of the Totem Warrior: Spirit Walker",
								"text": "At 10th level, you can cast the commune with nature spell, but only as a ritual. When you do so, a spiritual version of one of the animals you chose for Totem Spirit or Aspect of the Beast appears to you to convey the information you seek."
							}
						]
					},
					{
						"-level": "11",
						"feature": {
							"name": "Relentless Rage",
							"text": [
								"Starting at 11th level, your rage can keep you fighting despite grievous wounds. If you drop to 0 hit points while you're raging and don't die outright, you can make a DC 10 Constitution saving throw. If you succeed, you drop to 1 hit point instead.",
								"Each time you use this feature after the first, the DC increases by 5. When you finish a short or long rest, the DC resets to 10."
							]
						}
					},
					{
						"-level": "12",
						"feature": [ {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 12th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM uses the optional Feats, you can instead take a feat."
							]
						},
							{
								"name": "Increased Rages",
								"text": "You may now rage 5 times before a long rest"
							}
						]
					},
					{
						"-level": "13",
						"feature": {
							"name": "Brutal Critical (2 dice)",
							"text": "You now roll two additional weapon damage dice when determining the extra damage for a critical hit with a melee attack."
						}
					},
					{
						"-level": "14",
						"feature": [ {
							"-optional": "YES",
							"name": "Path of the Berserker: Retaliation",
							"text": "Starting at 14th level, when you take damage from a creature that is within 5 feet of you. you can use your reaction to make a melee weapon attack against that creature."
						},
							{
								"-optional": "YES",
								"name": "Path of the Battlerager: Spiked Retribution",
								"text": "Starting at 14th level, when a creature within 5 feet of you hits you with a melee attack, the attacker takes 3 piercing damage if you are raging, aren't incapacitated, and are wearing spiked armor"
							},
							{
								"-optional": "YES",
								"name": "Path of the Totem Warrior: Totemic Attunement",
								"text": "At 14th level, you gain a magical benefit based on a totem animal of your choice. You can choose the same animal you selected previously or a different one."
							},
							{
								"-optional": "YES",
								"name": "Totemic Attunement: Bear",
								"text": "While you're raging, any creature within 5 feet of you that's hostile to you has disadvantage on attack rolls against targets other than you or another character with this feature. An enemy is immune to this effect if it can't see or hear you or if it can't be frightened."
							},
							{
								"-optional": "YES",
								"name": "Totemic Attunement: Eagle",
								"text": "While raging, you have a flying speed equal to your current walking speed. This benefit works only in short bursts; you fall if you end your turn in the air and nothing else is holding you aloft."
							},
							{
								"-optional": "YES",
								"name": "Totemic Attunement: Elk",
								"text": "While raging, you can use a bonus action during your move to pass through the space of a Large or smaller creature. That creature must succeed on a Strength saving throw (DC 8 + your Strength bonus + your proficiency bonus) or be knocked prone and take bludgeoning damage equal to 1d12 + your strength modifier."
							},
							{
								"-optional": "YES",
								"name": "Totemic Attunement: Tiger",
								"text": "While you're raging, if you move at least 20 feet in a straight line toward a Large or smaller target right before making a melee weapon attack against it, you can use a bonus action to make an additional melee weapon attack against it."
							},
							{
								"-optional": "YES",
								"name": "Totemic Attunement: Wolf",
								"text": "While you're raging, you can use a bonus action on your turn to knock a Large or smaller creature prone when you hit it with melee weapon attack."
							}
						]
					},
					{
						"-level": "15",
						"feature": {
							"name": "Persistent Rage",
							"text": "Beginning at 15th level, your rage is so fierce that it ends early only if you fall unconscious or if you choose to end it."
						}
					},
					{
						"-level": "16",
						"feature": [ {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 16th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM uses the optional Feats, you can instead take a feat."
							]
						},
							{
								"name": "Increased Rage Damage",
								"text": "You now have a +4 bonus to melee damage rolls while raging."
							}
						]
					},
					{
						"-level": "17",
						"feature": [ {
							"name": "Brutal Critical (3 dice)",
							"text": "You now roll three additional weapon damage dice when determining the extra damage for a critical hit with a melee attack."
						},
							{
								"name": "Increased Rages",
								"text": "You may now rage 6 times before a long rest"
							}
						]
					},
					{
						"-level": "18",
						"feature": {
							"name": "Indomitable Might",
							"text": "Beginning at 18th level, if your total for a Strength check is less than your Strength score, you can use that score in place of the total."
						}
					},
					{
						"-level": "19",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 19th level, you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM uses the optional Feats, you can instead take a feat."
							]
						}
					},
					{
						"-level": "20",
						"feature": [ {
							"name": "Primal Champion",
							"text": "At 20th level, you embody the power of the wilds. Your Strength and Constitution scores increase by 4. Your maximum for those scores is now 24.",
							"modifier": [ {
								"-category": "ability score",
								"#text": "strength +4"
							},
								{
									"-category": "ability score",
									"#text": "constitution +4"
								}
							]
						},
							{
								"name": "Unlimited Rages",
								"text": "At 20th level, there is no limit to the number of times you may rage."
							}
						]
					},
					{
						"-level": "3",
						"feature": [ {
							"-optional": "YES",
							"name": "Primal Path: Path of the Ancestral Guardian (UA)",
							"text": [
								"Some barbarians hail from cultures that revere their ancestors. These tribes teach that the warriors of the past linger on in the world as mighty spirits who can guide and protect the living. When barbarians who follow this path rage, they cross the barrier into the spirit world and call on these guardian spirits for aid.",
								"Barbarians who draw on their ancestral guardians fight to protect their tribes and their allies. With the spirits' help, they can hinder their foes even as they strike powerful blows against them.",
								"In order to cement ties to their ancestral guardians, barbarians who follow this path cover themselves in elaborate tattoos that celebrate their ancestors' deeds. These tattoos tell epic sagas of victories against terrible monsters and other fearsome rivals.",
								"This Primal Path is from Unearthed Arcana: Barbarian Primal Paths, and as such may not be allowed in your game. Consult your DM before choosing this option."
							]
						},
							{
								"-optional": "YES",
								"name": "Path of the Ancestral Guardian: Ancestral Protectors",
								"text": "Starting when you choose this path at 3rd level, spectral warriors appear when you rage. These warriors distract a foe you designate and hinder its attempts to evade you. While you're raging, you can use a bonus action on your turn to choose one creature you can see within 5 feet of you. Until the start of your next turn or until your rage ends, the chosen creature has disadvantage on any attack roll that doesn't target you, and if the creature takes the Disengage action within 5 feet of you, its speed is halved until the end of its turn."
							},
							{
								"-optional": "YES",
								"name": "Primal Path: Path of the Storm Herald (UA)",
								"text": [
									"Typical barbarians harbor a fury that dwells within. Their rage grants them superior strength, durability, and speed. Barbarians who follow the Path of the Storm Herald learn instead to transform their rage into a mantle of primal magic that swirls around them. When in a fury, a barbarian of this path taps into nature to create powerful, magical effects.",
									"Storm heralds are typically elite champions who train alongside druids, rangers, and others sworn to protect the natural realm. Other storm heralds hone their craft in elite lodges founded in regions wracked by storms, in the frozen reaches at the world's end, or deep in the hottest deserts.",
									"This Primal Path is from Unearthed Arcana: Barbarian Primal Paths, and as such may not be allowed in your game. Consult your DM before choosing this option."
								]
							},
							{
								"-optional": "YES",
								"name": "Path of the Storm Herald: Storm of Fury ",
								"text": [
									"When you select this path at 3rd level, choose one of the following options: desert, sea, or tundra. The environment you choose shapes the nature of the storm you conjure when you rage.",
									"While raging, you emanate an aura in a 10-foot radius. The effects of this aura depend on your chosen environment.",
									"Desert: Any enemy that ends its turn in your aura takes fire damage equal to 2 + your barbarian level divided by 4.",
									"Sea: At the end of each of your turns, you can choose a creature in your aura, other than yourself. The target must make a Dexterity saving throw against a DC equal to 8 + your proficiency bonus + your Constitution modifier. The target takes 2d6 lightning damage on a failed save, and half as much damage on a successful one. This damage increases to 3d6 at 10th level and to 4d6 at 15th level.",
									"Tundra: Any enemy that ends its turn in your aura takes cold damage equal to 2 + your barbarian level divided by 4."
								]
							},
							{
								"-optional": "YES",
								"name": "Primal Path: Path of the Zealot (UA)",
								"text": [
									"Some deities inspire their followers to pitch themselves into a ferocious battle fury. These barbarians are zealots - warriors who channel their rage into powerful displays of divine power.",
									"A variety of gods across the worlds of D&D inspire their followers to embrace this path. Tempus from the Forgotten Realms and Hextor and Erythnul of Greyhawk are all prime examples. In general, the gods who inspire zealots are deities of combat, destruction, and violence. Not all are evil, but few are good.",
									"This Primal Path is from Unearthed Arcana: Barbarian Primal Paths, and as such may not be allowed in your game. Consult your DM before choosing this option."
								]
							},
							{
								"-optional": "YES",
								"name": "Path of the Zealot: Divine Fury",
								"text": "Starting when you choose this path at 3rd level, you can channel divine fury when you start to rage. If you do so, you become cloaked in an aura of divine power until the rage ends. At the end of each of your turns for that duration, each creature within 5 feet of you takes damage equal to 1d6 + half your barbarian level. The damage is necrotic or radiant; you choose the type of damage when you gain this feature."
							},
							{
								"-optional": "YES",
								"name": "Path of the Zealot: Warrior of the Gods",
								"text": "At 3rd level, your soul is marked for endless battle. If a spell would have the sole effect of restoring you to life (but not undeath), the caster does not need material components to cast the spell on you."
							}
						]
					},
					{
						"-level": "6",
						"feature": [ {
							"-optional": "YES",
							"name": "Path of the Ancestral Guardian: Ancestral Shield",
							"text": "Beginning at 6th level, the guardian spirits that aid you can provide protection for your allies. If you are raging and an ally you can see within 30 feet of you takes bludgeoning, piercing, or slashing damage, you can use your reaction to transfer your resistance to those damage types to the ally. The resistance applies to the incoming damage. Until the start of your next turn, the ally keeps the resistance and you lack it, unless you also have it from a source other than Rage."
						},
							{
								"-optional": "YES",
								"name": "Path of the Storm Herald: Storm Soul",
								"text": [
									"At 6th level, your link to the power of the storm grants you additional abilities based on the environment you chose at 3rd level.",
									"Desert: You gain resistance to fire damage and don't suffer the effects of extreme heat.",
									"Sea: You gain resistance to lightning damage and can breathe underwater.",
									"Tundra. You gain resistance to cold damage and don't suffer the effects of extreme cold."
								]
							},
							{
								"-optional": "YES",
								"name": "Path of the Zealot: Zealot Focus",
								"text": "At 6th level, the divine power that fuels your rage can shield you from harm. If you fail a saving throw while raging, you can instead succeed on that saving throw as a reaction. However, doing so immediately ends your rage, and you can't rage again until you finish a short or long rest."
							}
						]
					},
					{
						"-level": "10",
						"feature": [ {
							"-optional": "YES",
							"name": "Path of the Ancestral Guardian: Consult the Spirits",
							"text": "At 10th level, you gain the ability to consult with your ancestral spirits. Right before you make an Intelligence or a Wisdom check, you can give yourself advantage on the check. You can use this feature three times, and you regain expended uses when you finish a long rest."
						},
							{
								"-optional": "YES",
								"name": "Path of the Storm Herald: Shield of the Storm",
								"text": "At 10th level, you learn to use your mastery of the storm to protect your allies. While you are raging, allies within your aura gain the benefits of your Storm Soul feature."
							},
							{
								"-optional": "YES",
								"name": "Path of the Zealot: Zealous Presence",
								"text": [
									"At 10th level, you learn to channel divine power to inspire zealotry in others. As an action, you howl in fury and unleash a battle cry infused with divine energy. Every ally within 60 feet of you gains advantage on attack rolls and saving throws until the start of your next turn.",
									"Once you use this feature, you can't use it again until you finish a long rest."
								]
							}
						]
					},
					{
						"-level": "14",
						"feature": [ {
							"-optional": "YES",
							"name": "Path of the Ancestral Guardian: Vengeful Ancestors",
							"text": "At 14th level, your ancestral spirits grow powerful enough to strike your foes. When you or an ally you can see within 30 feet of you is damaged by a melee attack while you're raging, you can use your reaction to cause the attacker to take 2d8 force damage from the spirits."
						},
							{
								"-optional": "YES",
								"name": "Path of the Storm Herald Raging Storm",
								"text": [
									"At 14th level, the power of the storm you channel grows mightier.",
									"Desert: The ground around you becomes like shifting sand. Any enemy that attempts to move more than 5 feet per turn on the ground while in your aura must make a Strength saving throw (DC 8 + your proficiency bonus + your Constitution modifier). On a failed save, the creature's speed drops to 0 until the start of its next turn.",
									"Sea: Roaring winds tear through the area around you. Any creature in your aura that you hit with an attack must make a Strength saving throw (DC 8 + your proficiency bonus + your Strength modifier) or be knocked prone.",
									"Tundra: The air around you coldly slows your foes. The area within your aura is difficult terrain for your enemies."
								]
							},
							{
								"-optional": "YES",
								"name": "Path of the Zealot: Rage Beyond Death",
								"text": [
									"Beginning at 14th level, the divine power that fuels your rage allows you to shrug off fatal blows.",
									"While raging, having 0 hit points doesn't knock you unconscious. You still must make death saving throws, and you suffer the normal effects of taking damage while at 0 hit points. However, if you would die due to failing death saving throws, you don't die until your rage ends."
								]
							}
						]
					}
				]
			},
			{
				"name": "Bard",
				"hd": "8",
				"proficiency": "Dexterity, Charisma",
				"spellAbility": "Charisma",
				"autolevel": [ {
					"-level": "1",
					"slots": "2,2,0,0,0,0,0,0,0,0"
				},
					{
						"-level": "2",
						"slots": "2,3,0,0,0,0,0,0,0,0"
					},
					{
						"-level": "3",
						"slots": "2,4,2,0,0,0,0,0,0,0"
					},
					{
						"-level": "4",
						"slots": "3,4,3,0,0,0,0,0,0,0"
					},
					{
						"-level": "5",
						"slots": "3,4,3,2,0,0,0,0,0,0"
					},
					{
						"-level": "6",
						"slots": "3,4,3,3,0,0,0,0,0,0"
					},
					{
						"-level": "7",
						"slots": "3,4,3,3,1,0,0,0,0,0"
					},
					{
						"-level": "8",
						"slots": "3,4,3,3,2,0,0,0,0,0"
					},
					{
						"-level": "9",
						"slots": "3,4,3,3,3,1,0,0,0,0"
					},
					{
						"-level": "10",
						"slots": "4,4,3,3,3,2,0,0,0,0"
					},
					{
						"-level": "11",
						"slots": "4,4,3,3,3,2,1,0,0,0"
					},
					{
						"-level": "12",
						"slots": "4,4,3,3,3,2,1,0,0,0"
					},
					{
						"-level": "13",
						"slots": "4,4,3,3,3,2,1,1,0,0"
					},
					{
						"-level": "14",
						"slots": "4,4,3,3,3,2,1,1,0,0"
					},
					{
						"-level": "15",
						"slots": "4,4,3,3,3,2,1,1,1,0"
					},
					{
						"-level": "16",
						"slots": "4,4,3,3,3,2,1,1,1,0"
					},
					{
						"-level": "17",
						"slots": "4,4,3,3,3,2,1,1,1,1"
					},
					{
						"-level": "18",
						"slots": "4,4,3,3,3,3,1,1,1,1"
					},
					{
						"-level": "19",
						"slots": "4,4,3,3,3,3,2,1,1,1"
					},
					{
						"-level": "20",
						"slots": "4,4,3,3,3,3,2,2,1,1"
					},
					{
						"-level": "1",
						"feature": [ {
							"name": "Starting Proficiencies",
							"text": [
								"You are proficient with the following items, in addition to any proficiencies provided by your race or background.",
								"Armor: light armor",
								"Weapons: simple weapons, hand crossbows, longswords, rapiers, shortswords",
								"Tools: three musical instruments of your choice",
								"Skills: Choose any three."
							]
						},
							{
								"name": "Starting Equipment",
								"text": [
									"You start with the following items, plus anything provided by your background.",
									"• (a) a rapier, (b) a longsword, or (c) any simple weapon",
									"• (a) a diplomat's pack or (b) an entertainer's pack",
									"• (a) a lute or (b) any other musical instrument",
									"• Leather armor, and a dagger",
									"Alternatively, you may start with 5d4 x 10 gp to buy your own equipment."
								]
							}
						]
					},
					{
						"-level": "1",
						"feature": [ {
							"name": "Bardic Inspiration",
							"text": [
								"You can inspire others through stirring words or music. To do so, you use a bonus action on your turn to choose one creature other than yourself within 60 feet of you who can hear you. That creature gains one Bardic Inspiration die, a d6.",
								"Once within the next 10 minutes, the creature can roll the die and add the number rolled to one ability check, attack roll, or saving throw it makes. The creature can wait until after it rolls the d20 before deciding to use the Bardic Inspiration die, but must decide before the DM says whether the roll succeeds or fails. Once the Bardic Inspiration die is rolled, it is lost. A creature can have only one Bardic Inspiration die at a time.",
								"You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain any expended uses when you finish a long rest.",
								"Your Bardic Inspiration die changes when you reach certain levels in this class. The die becomes a d8 at 5th level, a d10 at 10th level, and a d12 at 15th level."
							]
						},
							{
								"name": "Spellcasting",
								"text": [
									"You have learned to untangle and reshape the fabric of reality in harmony with your wishes and music. Your spells are part of your vast repertoire, magic that you can tune to different situations. See chapter 10 for the general rules of spellcasting and chapter 11 for the bard spell list.",
									"Cantrips",
									"You know two cantrips of your choice from the bard spell list. You learn additional bard cantrips of your choice at higher levels, learning a 3rd cantrip at 4th level and a 4th at 10th level.",
									"Spell Slots",
									"The Bard table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
									"For example, if you know the 1st-level spell cure wounds and have a 1st-level and a 2nd-level spell slot available, you can cast cure wounds using either slot.",
									"Spells Known of 1st Level and Higher",
									"You know four 1st-level spells of your choice from the bard spell list.",
									"You learn an additional bard spell of your choice at each level except 12th, 16th, 19th, and 20th. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.",
									"Additionally, when you gain a level in this class, you can choose one of the bard spells you know and replace it with another spell from the bard spell list, which also must be of a level for which you have spell slots.",
									"Spellcasting Ability",
									"Charisma is your spellcasting ability for your bard spells. Your magic comes from the heart and soul you pour into the performance of your music or oration. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a bard spell you cast and when making an attack roll with one.",
									"Spell save DC = 8 + your proficiency bonus + your Charisma modifier",
									"Spell attack modifier = your proficiency bonus + your Charisma modifier",
									"Ritual Casting",
									"You can cast any bard spell you know as a ritual if that spell has the ritual tag.",
									"Spellcasting Focus",
									"You can use a musical instrument (found in chapter 5) as a spellcasting focus for your bard spells."
								]
							}
						]
					},
					{
						"-level": "2",
						"feature": {
							"name": "Jack of All Trades",
							"text": "Starting at 2nd level, you can add half your proficiency bonus, rounded down, to any ability check you make that doesn't already include your proficiency bonus."
						}
					},
					{
						"-level": "2",
						"feature": {
							"name": "Song of Rest",
							"text": [
								"Beginning at 2nd level, you can use soothing music or oration to help revitalize your wounded allies during a short rest. If you or any friendly creatures who can hear your performance regain hit points by spending Hit Dice at the end of the short rest, each of those creatures regains an extra 1d6 hit points.",
								"The extra hit points increase when you reach certain levels in this class: to 1d8 at 9th level, to 1d10 at 13th level, and to 1d12 at 17th level."
							]
						}
					},
					{
						"-level": "3",
						"feature": [ {
							"name": "Bard College",
							"text": "At 3rd level, you delve into the advanced techniques of a bard college of your choice: the College of Lore or the College of Valor, both detailed at the end of the class description. Your choice grants you features at 3rd level and again at 6th and 14th level."
						},
							{
								"-optional": "YES",
								"name": "Bard College: College of Lore",
								"text": [
									"Bards of the College of Lore know something about most things, collecting bits of knowledge from sources as diverse as scholarly tomes and peasant tales. Whether singing folk ballads in taverns or elaborate compositions in royal courts, these bards use their gifts to hold audiences spellbound. When the applause dies down, the audience members might find themselves questioning everything they held to be true, from their faith in the priesthood of the local temple to their loyalty to the king.",
									"The loyalty of these bards lies in the pursuit of beauty and truth, not in fealty to a monarch or following the tenets of a deity. A noble who keeps such a bard as a herald or advisor knows that the bard would rather be honest than politic.",
									"The college's members gather in libraries and sometimes in actual colleges, complete with classrooms and dormitories, to share their lore with one another. They also meet at festivals or affairs of state, where they can expose corruption, unravel lies, and poke fun at self-important figures of authority."
								]
							},
							{
								"-optional": "YES",
								"name": "Bard College: College of Valor",
								"text": [
									"Bards of the College of Lore know something about most things, collecting bits of knowledge from sources as diverse as scholarly tomes and peasant tales. Whether singing folk ballads in taverns or elaborate",
									"Bards of the College of Valor are daring skalds whose tales keep alive the memory of the great heroes of the past, and thereby inspire a new generation of heroes. These bards gather in mead halls or around great bonfires to sing the deeds of the mighty, both past and present. They travel the land to witness great events firsthand and to ensure that the memory of those events doesn't pass from the world. With their songs, they inspire others to reach the same heights of accomplishment as the heroes of old."
								]
							},
							{
								"name": "Expertise",
								"text": [
									"At 3rd level, choose two of your skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.",
									"At 10th level, you can choose another two skill proficiencies to gain this benefit."
								]
							},
							{
								"-optional": "YES",
								"name": "College of Lore: Bonus Proficiencies",
								"text": "When you join the College of Lore at 3rd level, you gain proficiency with three skills of your choice."
							},
							{
								"-optional": "YES",
								"name": "College of Lore: Cutting Words",
								"text": "Also at 3rd level, you learn how to use your wit to distract, confuse, and otherwise sap the confidence and competence of others. When a creature that you can see within 60 feet of you makes an attack roll, an ability check, or a damage roll, you can use your reaction to expend one of your uses of Bardic Inspiration, rolling a Bardic Inspiration die and subtracting the number rolled from the creature's roll. You can choose to use this feature after the creature makes its roll, but before the DM determines whether the attack roll or ability check succeeds or fails, or before the creature deals its damage. The creature is immune if it can't hear you or if it's immune to being charmed."
							},
							{
								"-optional": "YES",
								"name": "College of Valor: Bonus Proficiencies",
								"text": "When you join the College of Valor at 3rd level, you gain proficiency with medium armor, shields, and martial weapons."
							},
							{
								"-optional": "YES",
								"name": "College of Valor: Combat Inspiration",
								"text": "Also at 3rd level, you learn to inspire others in battle. A creature that has a Bardic Inspiration die from you can roll that die and add the number rolled to a weapon damage roll it just made. Alternatively, when an attack roll is made against the creature, it can use its reaction to roll the Bardic Inspiration die and add the number rolled to its AC against that attack, after seeing the roll but before knowing whether it hits or misses."
							}
						]
					},
					{
						"-level": "4",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 4th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "5",
						"feature": [ {
							"name": "Bardic Inspiration (d8)",
							"text": "At 5th level, your Bardic Inspiration die changes to a d8."
						},
							{
								"name": "Font of Inspiration",
								"text": "Beginning when you reach 5th level, you regain all of your expended uses of Bardic Inspiration when you finish a short or long rest."
							}
						]
					},
					{
						"-level": "6",
						"feature": [ {
							"name": "Countercharm",
							"text": "At 6th level, you gain the ability to use musical notes or words of power to disrupt mind-influencing effects. As an action, you can start a performance that lasts until the end of your next turn. During that time, you and any friendly creatures within 30 feet of you have advantage on saving throws against being frightened or charmed. A creature must be able to hear you to gain this benefit. The performance ends early if you are incapacitated or silenced or if you voluntarily end it (no action required)."
						},
							{
								"-optional": "YES",
								"name": "College of Lore: Additional Magical Secrets",
								"text": "At 6th level, you learn two spells of your choice from any class. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip. The chosen spells count as bard spells for you but don't count against the number of bard spells you know."
							},
							{
								"-optional": "YES",
								"name": "College of Valor: Extra Attack",
								"text": "Starting at 6th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
							}
						]
					},
					{
						"-level": "8",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 8th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "9",
						"feature": {
							"name": "Song of Rest (1d8)",
							"text": "At 9th level, the extra hit points gained from Song of Rest increases to 1d8."
						}
					},
					{
						"-level": "10",
						"feature": [ {
							"name": "Bardic Inspiration (d10)",
							"text": "At 10th level, your Bardic Inspiration die changes to a d10."
						},
							{
								"name": "Expertise",
								"text": "At 10th level, you can choose another two skill proficiencies. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies."
							},
							{
								"name": "Magical Secrets",
								"text": [
									"By 10th level, you have plundered magical knowledge from a wide spectrum of disciplines. Choose two spells from any class, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.",
									"The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table.",
									"You learn two additional spells from any class at 14th level and again at 18th level."
								]
							}
						]
					},
					{
						"-level": "12",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 12th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "13",
						"feature": {
							"name": "Song of Rest (1d10)",
							"text": "At 13th level, the extra hit points gained from Song of Rest increases to 1d10."
						}
					},
					{
						"-level": "14",
						"feature": [ {
							"name": "Magical Secrets",
							"text": [
								"At 14th level, choose two additional spells from any class, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.",
								"The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table."
							]
						},
							{
								"-optional": "YES",
								"name": "College of Lore: Peerless Skill",
								"text": "Starting at 14th level, when you make an ability check, you can expend one use of Bardic Inspiration. Roll a Bardic Inspiration die and add the number rolled to your ability check. You can choose to do so after you roil the die for the ability check, but before the DM tells you whether you succeed or fail."
							},
							{
								"-optional": "YES",
								"name": "College of Valor: Battle Magic",
								"text": "At 14th level, you have mastered the art of weaving spellcasting and weapon use into a single harmonious act. When you use your action to cast a bard spell, you can make one weapon attack as a bonus action."
							}
						]
					},
					{
						"-level": "15",
						"feature": {
							"name": "Bardic Inspiration (d12)",
							"text": "At 15th level, your Bardic Inspiration die changes to a d12."
						}
					},
					{
						"-level": "16",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 16th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "17",
						"feature": {
							"name": "Song of Rest (1d12)",
							"text": "At 17th level, the extra hit points gained from Song of Rest increases to 1d12."
						}
					},
					{
						"-level": "18",
						"feature": {
							"name": "Magical Secrets",
							"text": [
								"At 18th level, choose two additional spells from any class, including this one. A spell you choose must be of a level you can cast, as shown on the Bard table, or a cantrip.",
								"The chosen spells count as bard spells for you and are included in the number in the Spells Known column of the Bard table."
							]
						}
					},
					{
						"-level": "19",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 19th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "20",
						"feature": {
							"name": "Superior Inspiration",
							"text": "At 20th level, when you roll initiative and have no uses of Bardic Inspiration left, you regain one use."
						}
					},
					{
						"-level": "3",
						"feature": [ {
							"-optional": "YES",
							"name": "Bard College: College of Swords (UA)",
							"text": [
								"Bards of the College of Swords are called blades, and they entertain through daring feats of weapon prowess. Blades perform stunts such as sword swallowing, knife throwing and juggling, and mock combats. But though they use their weapons to entertain, they are also highly trained and skilled warriors in their own right.",
								"Their talent with weapons inspires many blades to lead double lives. One blade might use a circus troupe as cover for nefarious deeds such as assassination, robbery, and blackmail. Other blades strike at the wicked, bringing justice to bear against the cruel and powerful. Most troupes are happy to accept a blade’s talent for the excitement it adds to a performance, but few entertainers fully trust them.",
								"Blades who abandon lives as entertainers have often run into trouble that makes maintaining their secret activities impossible. A blade caught stealing or engaging in vigilante justice is too great a liability for most performer troupes. With their weapon skills as their greatest asset, these blades either take up work as enforcers for thieves’ guilds or strike out on their own as adventurers.",
								"This Bard College is from Unearthed Arcana: Kits of Old, and as such may not be allowed in your game. Consult your DM before choosing this option."
							]
						},
							{
								"-optional": "YES",
								"name": "Bard College: College of Satire (UA)",
								"text": [
									"Bards of the College of Satire are called jesters. They use lowbrow stories, daring acrobatics, and cutting jokes to entertain audiences, ranging from the crowds in a rundown dockside pub to the nobles of a king’s royal court. Where other bards seek forgotten lore or tales of epic bravery, jesters ferret out embarrassing and hilarious stories of all kinds. Whether telling the ribald tale of a brawny stable hand’s affair with an aged duchess or a mocking satire of a paladin of Helm’s cloying innocence, a jester never lets taste, social decorum, or shame get in the way of a good laugh.",
									"While jesters are masters of puns, jokes, and verbal barbs, they are much more than just comic relief. They are expected to mock and provoke, taking advantage of how even the most powerful folk are expected by tradition to endure a jester’s barbs with good humor. This expectation allows a jester to serve as a critic or a voice of reason when others are too intimidated to speak the truth.",
									"For the duchess with a taste for strapping young laborers, such tales might serve to warn the targets of her affections and force her to change her ways for lack of willing partners. Striking back at the jester only ruins her already damaged reputation, and might provide the best evidence that the jester’s satires have hit their mark. But if she is kind and generous to her conquests, the jokes and stories cast her as a kind of folk hero, while drawing even more potential partners to her.",
									"Jesters are loyal to only one cause: the pursuit and propagation of the truth. They use their comedy and innocuous appearance to break down social barriers and expose corruption, incompetence, and stupidity among the rich and powerful. Whether revealing a con artist’s treachery or exposing a baron’s plans for war as driven by greed and bloodlust, a jester serves as the conscience of a realm.",
									"Jesters adventure to safeguard the common folk and to undermine the plans of the rich, powerful, and arrogant. Their magic bolsters allies’ spirits while casting doubt into foes’ minds. Among bards, jesters are unmatched acrobats, and their ability to tumble, dodge, leap, and climb makes them slippery opponents in battle.",
									"This Bard College is from Unearthed Arcana: Kits of Old, and as such may not be allowed in your game. Consult your DM before choosing this option."
								]
							},
							{
								"-optional": "YES",
								"name": "College of Satire: Bonus Proficiencies",
								"text": "When you join the College of Satire at 3rd level, you gain proficiency with thieves' tools. You also gain proficiency in Sleight of Hand and one additional skill of your choice. If you are already proficient with thieves' tools or in Sleight of Hand, choose another skill proficiency for each proficiency you already have."
							},
							{
								"-optional": "YES",
								"name": "College of Satire: Tumbling Fool",
								"text": [
									"At 3rd level, you master a variety of acrobatic techniques that allow you to evade danger. As a bonus action, you can tumble. When you tumble, you gain the following benefits for the rest of your turn:",
									"• You gain the benefits of taking the Dash and Disengage actions.",
									"• You gain a climbing speed equal to your current speed.",
									"• You take half damage from falling."
								]
							},
							{
								"-optional": "YES",
								"name": "College of Swords: Bonus Proficiencies",
								"text": "When you join the College of Blades at 3rd level, you gain proficiency with medium armor and with scimitars."
							},
							{
								"-optional": "YES",
								"name": "College of Swords: Fighting Style",
								"text": [
									"The College of Blades emphasizes mastery with weapons, granting you access to the two-weapon fighting option for the Fighting Style class feature, which is as follows.",
									"When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack."
								]
							},
							{
								"-optional": "YES",
								"name": "College of Swords: Blade Flourish",
								"text": [
									"At 3rd level, you learn to conduct impressive displays of skill with your weapons. When you use the Attack action on your turn and attack with a dagger, longsword, rapier, scimitar, or shortsword, you can attempt one of the following flourishes.",
									"Defensive Flourish:",
									"You spin your weapon around you in swift circles, creating a hypnotic display. As a bonus action, you expend one use of Bardic Inspiration, rolling a Bardic Inspiration die and applying the number rolled as a bonus to your AC until the start of your next turn.",
									"Trick Shooter's Flourish:",
									"This favorite trick of knife throwers allows you to expend one use of Bardic Inspiration as a bonus action. Roll a Bardic Inspiration die and apply the number rolled as a bonus to the next ranged attack roll you make with a dagger this turn. If the target of the attack is an unattended, inanimate object, the bonus equals double the die roll.",
									"Unnerving Flourish:",
									"Your deadly display of combat prowess unnerves your opponents, leaving them cowering in fear and at your mercy. Whenever you reduce a creature to 0 hit points with a melee attack, you can use a bonus action to expend one use of Bardic Inspiration, and instead leave the creature at 1 hit point.",
									"The creature is frightened of you for a number of minutes equal to your Charisma modifier. It must also make a Charisma saving throw with a DC equal to your spellcasting DC + a bonus equal to the roll of your Bardic Inspiration die. If the creature fails this saving throw, it answers truthfully any questions you ask it and obeys your direct orders while it is frightened by this effect."
								]
							},
							{
								"-optional": "YES",
								"name": "Bard College: College of Glamour (UA)",
								"text": [
									"The College of Glamour is open to those bards who mastered their craft in the vibrant, deadly realm of the Feywild. Tutored by satyrs, eladrin, and other fey, these bards learn to use their magic to delight and captivate others. ",
									"The bards of this college are regarded with a mixture of awe and fear. Their performances are the stuff of legend. The bards of this college are so eloquent that a speech or song that one of them performs can cause captors to release the bard unharmed and can lull a furious dragon into complacency. The same magic that allows them to quell beasts can also bend minds. Villainous bards of this college can leech off a community for weeks, abusing their magic to turn their hosts into thralls.",
									"This Bard College is from Unearthed Arcana: Bard Colleges, and as such may not be allowed in your game. Consult your DM before choosing this option."
								]
							},
							{
								"-optional": "YES",
								"name": "College of Glamour: Mantle of Inspiration",
								"text": [
									"When you join the College of Glamour at 3rd level, you gain the ability to weave a song of fey magic that enthralls your allies with vigor and speed. ",
									"As a bonus action, you can expend a use of Bardic Inspiration to grant yourself a wondrous, otherworldly appearance. When you do so, choose a number of allies you can see and who can see you within 60 feet of you, up to a number of them equal to your Charisma modifier (minimum of one). Each target gains 2d6 temporary hit points. ",
									"When a target gains these temporary hit points, it can also use its reaction to move up to its speed toward you, without provoking opportunity attacks. It must take the shortest, safest path to you. ",
									"The number of temporary hit points increases when you reach certain levels in this class, increasing to 2d8 at 5th level, 2d10 at 10th level, and 2d12 at 15th level."
								]
							},
							{
								"-optional": "YES",
								"name": "College of Glamour: Enthralling Performance",
								"text": [
									"Starting at 3rd level, you can charge your performance with seductive fey magic. ",
									"If you perform for at least 10 minutes, you can attempt to inspire wonder in your audience by singing, reciting a poem, or dancing. At the end of the performance, choose a number of humanoids within 60 feet of you who watched and listened to all of it, up to a number of them equal to your Charisma modifier (minimum of one). Each target must succeed on a Wisdom saving throw against your spell save DC or be charmed by you. While charmed in this way, the target idolizes you, it speaks glowingly of you to anyone who speaks to it, and it hinders anyone who opposes you, avoiding violence unless it was already inclined to fight on your behalf. This effect ends on a target after 1 hour, if it takes any damage, if you attack it, or if it witnesses you attacking or damaging any of its allies. ",
									"If a target succeeds on its save against this effect, the target has no hint that you tried to charm it. ",
									"Once you use this feature, you can't use it again until you finish a short or long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Bard College: College of Whispers (UA)",
								"text": [
									"Most folk are happy to welcome a bard into their midst. Bards of the College of Whispers use this to their advantage. They appear to be like any other bard, sharing news, singing songs, and telling tales to the audiences they gather. In truth, the College of Whispers teaches its students that they are wolves among sheep. These bards use their knowledge and magic to uncover secrets and turn them against others through extortion and threats. ",
									"Many other bards hate the College of Whispers, viewing it as a parasite that uses the bards' reputation to acquire wealth and power. For this reason, these bards rarely reveal their true nature unless they must. They typically claim to follow some other college, or keep their true nature secret in order to better infiltrate and exploit royal courts and other settings of power.",
									"This Bard College is from Unearthed Arcana: Bard Colleges, and as such may not be allowed in your game. Consult your DM before choosing this option."
								]
							},
							{
								"-optional": "YES",
								"name": "College of Whispers: Venomous Blades",
								"text": [
									"When you join the College of Whispers at 3rd level, you gain the ability to magically make your weapon attacks toxic for a moment. ",
									"When you hit a creature with a weapon attack, you can expend one use of your Bardic Inspiration to deal an additional 2d6 poison damage to that target. You can do so only once per round on your turn. ",
									"The additional damage increases when you reach certain levels in this class, increasing to 2d8 at 5th level, 2d10 at 10th level, and 2d12 at 15th level."
								]
							},
							{
								"-optional": "YES",
								"name": "College of Whispers: Venomous Words",
								"text": [
									"At 3rd level, you learn to infuse innocent-seeming words with an insidious magic. A creature that hears you speak can become plunged into fear and paranoia. ",
									"If you speak to a humanoid alone for at least 10 minutes, you can attempt to seed paranoia and fear into its mind. At the end of the conversation, the target must succeed on a Wisdom saving throw against your spell save DC or be frightened for the next hour, until it is attacked or damaged, or until it witnesses its allies being attacked or damaged. While frightened in this way, the target is paranoid and tries to avoid the company of others, including its allies. The target seeks out what it considers the safest, most secret place available to it and hides there. ",
									"If the target succeeds on its save, the target has no hint that you tried to frighten it. ",
									"Once you use this feature, you can't use it again until you finish a short rest or long rest."
								]
							}
						]
					},
					{
						"-level": "6",
						"feature": [ {
							"-optional": "YES",
							"name": "College of Satire: Fool's Insight",
							"text": [
								"At 6th level, your ability to gather stories and lore gains a supernatural edge. You can cast detect thoughts up to a number of times equal to your Charisma modifier. You regain any expended uses of this ability after completing a long rest.",
								"If a creature resists your attempt to probe deeper and succeeds at its saving throw against your detect thoughts, it immediately suffers an embarrassing social gaffe. It might loudly pass gas, unleash a thunderous burp, trip and fall, or be compelled to tell a tasteless joke."
							]
						},
							{
								"-optional": "YES",
								"name": "College of Swords: Extra Attack",
								"text": "Beginning at 6th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
							},
							{
								"-optional": "YES",
								"name": "College of Glamour: Mantle of Majesty",
								"text": [
									"At 6th level, you gain the ability to cloak yourself in a fey magic that makes others want to serve you. As a bonus action, you take on an appearance of unearthly beauty for 1 minute. During this time, you can cast command as a bonus action on each of your turns, without using a spell slot. This effect lasts for 1 minute, and any creature charmed by you automatically fails its saving throw against the spell. ",
									"Once you use this feature, you can't use it again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "College of Whispers: Mantle of Whispers",
								"text": [
									"At 6th level, you gain the ability to adopt a creature's persona. When you slay a creature with an attack or a spell or a creature dies within 5 feet of you, you can magically capture its shadow using your reaction. You can capture only the shadow of a creature that is your creature type, such as humanoid, and your size (you can capture a Small or Medium shadow if you're Small), and you can have only one shadow captured at a time. ",
									"After you capture a creature's shadow, you can use your magic to weave it into a disguise that allows you to take on its appearance and gain access to its surface memories. As an action, you take on the creature's appearance for 1 hour or until you end this effect as a bonus action. ",
									"During that hour, you gain access to all information that the creature would freely share with a casual acquaintance. Information includes general details on its background and personal life, but does not include secrets. The information is enough that you can pass yourself off as the creature by drawing on its memories. ",
									"Another creature can see through this disguise by making a Wisdom (Insight) check opposed by your Charisma (Deception) check, though you gain a +5 bonus to your check.",
									"The disguise and the knowledge it grants disappears when this ability's duration ends"
								]
							}
						]
					},
					{
						"-level": "14",
						"feature": [ {
							"-optional": "YES",
							"name": "College of Satire: Fool's Luck ",
							"text": [
								"Jesters seem to have a knack for pulling themselves out of tight situations, transforming what looks like sure failure into an embarrassing but effective success.",
								"At 14th level, you can expend one use of Bardic Inspiration after you fail an ability check, fail a saving throw, or miss with an attack roll. Roll a Bardic Inspiration die and add the number rolled to your attack, saving throw, or ability check, using the new result in place of the failed one.",
								"If using this ability grants you a success on the attack, saving throw, or ability check, note the number you rolled on the Bardic Inspiration die. The DM can then apply that result as a penalty to an attack or check you make, and you cannot use this ability again until you suffer this drawback. When the DM invokes this penalty, describe an embarrassing gaffe or mistake you make as part of the affected die roll."
							]
						},
							{
								"-optional": "YES",
								"name": "College of Swords: Battle Magic",
								"text": "At 14th level, you have mastered the art of weaving spellcasting and weapon use into a single harmonious act. When you use your action to cast a bard spell, you can make one weapon attack as a bonus action."
							},
							{
								"-optional": "YES",
								"name": "College of Glamour: Unbreakable Majesty",
								"text": [
									"At 14th level, you gain an otherworldly aspect to your appearance that makes you look more fierce and lovely. ",
									"In addition, through this feature, you can cast sanctuary on yourself. If a creature fails its saving throw against the spell, you also gain advantage on all Charisma checks against the creature for 1 minute, and it has disadvantage on any saving throw it makes against your spells on your next turn. ",
									"Once you cast sanctuary using this feature, you can't do so again until you finish a short or long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "College of Whispers: Shadow Lore",
								"text": [
									"At 14th level, you gain the ability to weave dark magic into your words and tap into a creature's deepest fears. ",
									"As an action, you magically whisper a phrase that only one creature of your choice within 30 feet of you can hear. The target must make a Wisdom saving throw against your spell save DC. It automatically succeeds if it doesn't share a language with you or if it can't hear you. On a successful saving throw, your whisper sounds like unintelligible mumbling and has no effect. ",
									"If the target fails its saving throw, it is charmed by you for the next 8 hours or until you or your allies attack or damage it. It interprets the whispers as a description of its most mortifying secret. While you gain no knowledge of this secret, the target is convinced you know it. ",
									"While charmed in this way, the creature obeys your commands for fear that you will reveal its secret. It won't risk its life for you or fight for you, unless it was already inclined to do so. It grants you favors and gifts it would offer to a close friend. ",
									"When the effect ends, the creature has no understanding of why it held you in such fear. Once you use this feature, you can't use it again until you finish a long rest."
								]
							}
						]
					}
				]
			},
			{
				"name": "Cleric",
				"hd": "8",
				"proficiency": "Wisdom, Charisma",
				"spellAbility": "Wisdom",
				"autolevel": [ {
					"-level": "1",
					"slots": "3,2,0,0,0,0,0,0,0,0"
				},
					{
						"-level": "2",
						"slots": "3,3,0,0,0,0,0,0,0,0"
					},
					{
						"-level": "3",
						"slots": "3,4,2,0,0,0,0,0,0,0"
					},
					{
						"-level": "4",
						"slots": "4,4,3,0,0,0,0,0,0,0"
					},
					{
						"-level": "5",
						"slots": "4,4,3,2,0,0,0,0,0,0"
					},
					{
						"-level": "6",
						"slots": "4,4,3,3,0,0,0,0,0,0"
					},
					{
						"-level": "7",
						"slots": "4,4,3,3,1,0,0,0,0,0"
					},
					{
						"-level": "8",
						"slots": "4,4,3,3,2,0,0,0,0,0"
					},
					{
						"-level": "9",
						"slots": "4,4,3,3,3,1,0,0,0,0"
					},
					{
						"-level": "10",
						"slots": "5,4,3,3,3,2,0,0,0,0"
					},
					{
						"-level": "11",
						"slots": "5,4,3,3,3,2,1,0,0,0"
					},
					{
						"-level": "12",
						"slots": "5,4,3,3,3,2,1,0,0,0"
					},
					{
						"-level": "13",
						"slots": "5,4,3,3,3,2,1,1,0,0"
					},
					{
						"-level": "14",
						"slots": "5,4,3,3,3,2,1,1,0,0"
					},
					{
						"-level": "15",
						"slots": "5,4,3,3,3,2,1,1,1,0"
					},
					{
						"-level": "16",
						"slots": "5,4,3,3,3,2,1,1,1,0"
					},
					{
						"-level": "17",
						"slots": "5,4,3,3,3,2,1,1,1,1"
					},
					{
						"-level": "18",
						"slots": "5,4,3,3,3,3,1,1,1,1"
					},
					{
						"-level": "19",
						"slots": "5,4,3,3,3,3,2,1,1,1"
					},
					{
						"-level": "20",
						"slots": "5,4,3,3,3,3,2,2,1,1"
					},
					{
						"-level": "1",
						"feature": [ {
							"name": "Starting Proficiencies",
							"text": [
								"You are proficient with the following items, in addition to any proficiencies provided by your race or background.",
								"Armor: light armor, medium armor, shields",
								"Weapons: simple weapons",
								"Tools: none",
								"Skills: Choose two from History, Insight, Medicine, Persuasion, and Religion"
							]
						},
							{
								"name": "Starting Equipment",
								"text": [
									"You start with the following items, plus anything provided by your background.",
									"• (a) a mace or (b) a warhammer (if proficient)",
									"• (a) scale mail, (b) leather armor, or (c) chain mail (if proficient)",
									"• (a) a light crossbow and 20 bolts or (b) any simple weapon",
									"• (a) a priest's pack or (b) an explorer's pack",
									"• A shield and a holy symbol",
									"Alternatively, you may start with 5d4 x 10 gp to buy your own equipment."
								]
							}
						]
					},
					{
						"-level": "1",
						"feature": [ {
							"name": "Spellcasting",
							"text": [
								"As a conduit for divine power, you can cast cleric spells. See chapter 10 for the general rules of spellcasting and chapter 11 for a selection of cleric spells.",
								"Cantrips",
								"At 1st level, you know three cantrips of your choice from the cleric spell list. You learn additional cleric cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Cleric table.",
								"Preparing and Casting Spells",
								"The Cleric table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
								"You prepare the list of cleric spells that are available for you to cast, choosing from the cleric spell list. When you do so, choose a number of cleric spells equal to your Wisdom modifier + your cleric level (minimum of one spell). The spells must be of a level for which you have spell slots.",
								"For example, if you are a 3rd-level cleric, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.",
								"You can change your list of prepared spells when you finish a long rest. Preparing a new list of cleric spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.",
								"Spellcasting Ability",
								"Wisdom is your spellcasting ability for your cleric spells. The power of your spells comes from your devotion to your deity. You use your Wisdom whenever a cleric spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a cleric spell you cast and when making an attack roll with one.",
								"Spell save DC = 8 + your proficiency bonus + your Wisdom modifier",
								"Spell attack modifier = your proficiency bonus + your Wisdom modifier",
								"Ritual Casting",
								"You can cast a cleric spell as a ritual if that spell has the ritual tag and you have the spell prepared.",
								"Spellcasting Focus",
								"You can use a holy symbol (found in chapter 5) as a spellcasting focus for your cleric spells."
							]
						},
							{
								"name": "Divine Domain",
								"text": [
									"Choose one domain related to your deity: Arcana, Knowledge, Life, Light, Nature, Tempest, Trickery, or War. Each domain is detailed in their own feature, and each one provides examples of gods associated with it. Your choice grants you domain spells and other features when you choose it at 1st level. It also grants you additional ways to use Channel Divinity when you gain that feature at 2nd level, and additional benefits at 6th, 8th, and 17th levels.",
									"Domain Spells",
									"Each domain has a list of spells-its domain spells-that you gain at the cleric levels noted in the domain description. Once you gain a domain spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day.",
									"If you have a domain spell that doesn't appear on the cleric spell list, the spell is nonetheless a cleric spell for you."
								]
							},
							{
								"-optional": "YES",
								"name": "Divine Domain Arcana",
								"text": [
									"Magic is an energy that suffuses the multiverse and that fuels both destruction and creation. Gods of the Arcana domain know the secrets and potential of magic intimately. For some of these gods, magical knowledge is a great responsibility that comes with a special understanding of the nature of reality. Other gods of Arcana see magic as pure power, to be used as its wielder sees fit.",
									"The gods of this domain are often associated with knowledge, as learning and arcane power tend to go hand-in-hand. In the Realms, deities of this domain include Azuth and Mystra, as well as Corellon Larethian of the elven pantheon. In other worlds, this domain includes Hecate, Math Mathonwy, and Isis; the triple moon gods of Solinari, Lunitari, and Nuitari of Krynn; and Boccob, Vecna, and WeeJas of Greyhawk.",
									"Arcana Domain Spells: At each indicated cleric level, add the listed spells to your spells prepared. They do not count towards your limit.",
									"1st - detect magic, magic missile",
									"3rd - magic weapon, Nystul's magic aura",
									"5th - dispel magic, magic circle",
									"7th - arcane eye, Leomund's secret chest",
									"9th - planar binding, teleportation circle"
								]
							},
							{
								"-optional": "YES",
								"name": "Divine Domain: Death",
								"text": [
									"The Death domain is concerned with the forces that cause death, as well as the negative energy that gives rise to undead creatures. Deities such as Chemosh, Myrkul, and WeeJas are patrons of necromancers, death knights, liches, mummy lords, and vampires. Gods of the Death domain also embody murder (Anubis, Bhaal, and Pyremius), pain (Iuz or Loviatar), disease or poison (Incabulos, Talona, or Morgion), and the underworld (Hades and He!).",
									"Death Domain Spells: At each indicated cleric level, add the listed spells to your spells prepared. They do not count towards your limit.",
									"1st - false life, ray of sickness",
									"3rd - blindness/deafness, ray of enfeeblement",
									"5th - animate dead, vampiric touch",
									"7th - blight, death ward",
									"9th - antilife shell, cloudkill"
								]
							},
							{
								"-optional": "YES",
								"name": "Divine Domain: Knowledge",
								"text": [
									"The gods of knowledge - including Oghma, Boccob, Gilean, Aureon, and Thoth - value learning and understanding above all. Some teach that knowledge is to be gathered and shared in libraries and universities, or promote the practical knowledge of craft and invention. Some deities hoard knowledge and keep its secrets to themselves. And some promise their followers that they will gain tremendous power if they unlock the secrets of the multiverse. Followers of these gods study esoteric lore, collect old tomes, delve into the secret places of the earth, and learn all they can. Some gods of knowledge promote the practical knowledge of craft and invention, including smith deities like Gond, Reorx, Onatar, Moradin, Hephaestus, and Goibhniu.",
									"Knowledge Domain Spells: At each indicated cleric level, you add the listed spells to your spells prepared.",
									"1st - command, identify",
									"3rd - augury, suggestion",
									"5th - nondetection, speak with dead",
									"7th - arcane eye, confusion",
									"9th - legend lore, scrying"
								]
							},
							{
								"-optional": "YES",
								"name": "Divine Domain: Life",
								"text": [
									"The Life domain focuses on the vibrant positive energy - one of the fundamental forces of the universe - that sustains all life. The gods of life promote vitality and health through healing the sick and wounded, caring for those in need, and driving away the forces of death and undeath. Almost any non-evil deity can claim influence over this domain, particularly agricultural deities (such as Chauntea, Arawai, and Demeter), sun gods (such as Lathander, Pelor, and Re-Horakhty), gods of healing or endurance (such as Ilmater, Mishakal, Apollo, and Diancecht), and gods of home and community (such as Hestia, Hathor, and Boldrei).",
									"Life Domain Spells: At each indicated cleric level, you add the listed spells to your spells prepared.",
									"1st - bless, cure wounds",
									"3rd - lesser restoration, spiritual weapon",
									"5th - beacon of hope, revivify",
									"7th - death ward, guardian of faith",
									"9th - mass cure wounds, raise dead"
								]
							},
							{
								"-optional": "YES",
								"name": "Divine Domain: Light",
								"text": [
									"Gods of light - including Helm, Lathander, Pholtus, Branchala, the Silver Flame, Belenus, Apollo, and Re-Horakhty - promote the ideals of rebirth and renewal, truth, vigilance, and beauty, often using the symbol of the sun. Some of these gods are portrayed as the sun itself or as a charioteer who guides the sun across the sky. Others are tireless sentinels whose eyes pierce every shadow and see through every deception. Some are deities of beauty and artistry, who teach that art is a vehicle for the soul's improvement. Clerics of a god of light are enlightened souls infused with radiance and the power of their gods' discerning vision, charged with chasing away lies and burning away darkness.",
									"Light Domain Spells: At each indicated cleric level, you add the listed spells to your spells prepared.",
									"1st - burning hands, faerie fire",
									"3rd - flaming sphere, scorching ray",
									"5th - daylight, fireball",
									"7th - guardian of faith, wall of fire",
									"9th - flame strike, scrying"
								]
							},
							{
								"-optional": "YES",
								"name": "Divine Domain: Nature",
								"text": [
									"Gods of nature are as varied as the natural world itself, from inscrutable gods of the deep forests (such as Silvanus, Obad-Hai, Chislev, Balinor, and Pan) to friendly deities associated with particular springs and groves (such as Eldath). Druids revere nature as a whole and might serve one of these deities, practicing mysterious rites and reciting all-but-forgotten prayers in their own secret tongue. But many of these gods have clerics as well, champions who take a more active role in advancing the interests of a particular nature god. These clerics might hunt the evil monstrosities that despoil the woodlands, bless the harvest of the faithful, or wither the crops of those who anger their gods.",
									"Nature Domain Spells: At each indicated cleric level, you add the listed spells to your spells prepared.",
									"1st - animal friendship, speak with animals",
									"3rd - barkskin, spike growth",
									"5th - plant growth, wind wall",
									"7th - dominate beast, grasping vine",
									"9th - insect plague, tree stride"
								]
							},
							{
								"-optional": "YES",
								"name": "Divine Domain: Tempest",
								"text": [
									"Gods whose portfolios include the Tempest domain - including Talos, Umberlee, Kord, Zeboim, the Devourer, Zeus, and Thor - govern storms, sea, and sky. They include gods of lightning and thunder, gods of earthquakes, some fire gods, and certain gods of violence, physical strength, and courage. In some pantheons, a god of this domain rules over other deities and is known for swift justice delivered by thunderbolts. In the pantheons of seafaring people, gods of this domain are ocean deities and the patrons of sailors. Tempest gods send their clerics to inspire fear in the common folk, either to keep those folk on the path of righteousness or to encourage them to offer sacrifices of propitiation to ward off divine wrath.",
									"Tempest Domain Spells: At each indicated cleric level, you add the listed spells to your spells prepared.",
									"1st - fog cloud, thunderwave",
									"3rd - gust of wind, shatter",
									"5th - call lightning, sleet storm",
									"7th - control water, ice storm",
									"9th - destructive wave, insect plague"
								]
							},
							{
								"-optional": "YES",
								"name": "Divine Domain: Trickery",
								"text": [
									"Gods of trickery - such as Tymora, Beshaba, Olidammara, the Traveler, Garl Glittergold, and Loki - are mischief-makers and instigators who stand as a constant challenge to the accepted order among both gods and mortals. They're patrons of thieves, scoundrels, gamblers, rebels, and liberators. Their clerics are a disruptive force in the world, puncturing pride, mocking tyrants, stealing from the rich, freeing captives, and flouting hollow traditions. They prefer subterfuge, pranks, deception, and theft rather than direct confrontation.",
									"Trickery Domain Spells: At each indicated cleric level, you add the listed spells to your spells prepared.",
									"1st - charm person, disguise self",
									"3rd - mirror image, pass without trace",
									"5th - blink, dispel magic",
									"7th - dimension door, polymorph",
									"9th - dominate person, modify memory"
								]
							},
							{
								"-optional": "YES",
								"name": "Divine Domain: War",
								"text": [
									"War has many manifestations. It can make heroes of ordinary people. It can be desperate and horrific, with acts of cruelty and cowardice eclipsing instances of excellence and courage. In either case, the gods of war watch over warriors and reward them for their great deeds. The clerics of such gods excel in battle, inspiring others to fight the good fight or offering acts of violence as prayers. Gods of war include champions of honor and chivalry (such as Torm, Heironeous, and Kiri-Jolith) as well as gods of destruction and pillage (such as Erythnul, the Fury, Gruumsh, and Ares) and gods of conquest and domination (such as Bane, Hextor, and Maglubiyet). Other war gods (such as Tempus, Nike, and Nuada) take a more neutral stance, promoting war in all its manifestations and supporting warriors in any circumstance.",
									"War Domain Spells: At each indicated cleric level, add the listed spells to your spells prepared.",
									"1st - divine favor, shield of faith",
									"3rd - magic weapon, spiritual weapon",
									"5th - crusader's mantle, spirit guardians",
									"7th - freedom of movement, stoneskin",
									"9th - flame strike, hold monster"
								]
							},
							{
								"-optional": "YES",
								"name": "Arcana Domain: Arcane Initiate",
								"text": "When you choose this domain at 1st level, you gain proficiency in the Arcana skill, and you gain two cantrips of your choice from the wizard spell list. For you, these cantrips count as cleric cantrips."
							},
							{
								"-optional": "YES",
								"name": "Death Domain: Bonus Proficiency",
								"text": "When the cleric chooses this domain at 1st level, he or she gains proficiency with martial weapons."
							},
							{
								"-optional": "YES",
								"name": "Death Domain: Reaper",
								"text": "At 1st level, the cleric learns one necromancy cantrip of his or her choice from any spell list. When the cleric casts a necromancy cantrip that normally targets only one creature, the spell can instead target two creatures within range and within 5 feet of each other."
							},
							{
								"-optional": "YES",
								"name": "Knowledge Domain: Blessings of Knowledge",
								"text": [
									"At 1st level, you learn two languages of your choice. You also become proficient in your choice of two of the following skills: Arcana, History, Nature, or Religion.",
									"Your proficiency bonus is doubled for any ability check you make that uses either of those skills."
								]
							},
							{
								"-optional": "YES",
								"name": "Life Domain: Bonus Proficiency",
								"text": "When you choose this domain at 1st level, you gain proficiency with heavy armor."
							},
							{
								"-optional": "YES",
								"name": "Life Domain: Disciple of Life",
								"text": "Also starting at 1st level, your healing spells are more effective. Whenever you use a spell of 1st level or higher to restore hit points to a creature, the creature regains additional hit points equal to 2 + the spell's level."
							},
							{
								"-optional": "YES",
								"name": "Light Domain: Bonus Cantrip",
								"text": "When you choose this domain at 1st level, you gain the light cantrip if you don't already know it."
							},
							{
								"-optional": "YES",
								"name": "Light Domain: Warding Flare",
								"text": [
									"Also at 1st level, you can interpose divine light between yourself and an attacking enemy. When you are attacked by a creature within 30 feet of you that you can see, you can use your reaction to impose disadvantage on the attack roll, causing light to flare before the attacker before it hits or misses. An attacker that can't be blinded is immune to this feature.",
									"You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Nature Domain: Acolyte of Nature",
								"text": "At 1st level, you learn one druid cantrip of your choice. You also gain proficiency in one of the following skills of your choice: Animal Handling, Nature, or Survival."
							},
							{
								"-optional": "YES",
								"name": "Nature Domain: Bonus Proficiency",
								"text": "Also at 1st level, you gain proficiency with heavy armor."
							},
							{
								"-optional": "YES",
								"name": "Tempest Domain: Bonus Proficiencies",
								"text": "At 1st level, you gain proficiency with martial weapons and heavy armor."
							},
							{
								"-optional": "YES",
								"name": "Tempest Domain: Wrath of the Storm",
								"text": [
									"Also at 1st level, you can thunderously rebuke attackers. When a creature within 5 feet of you that you can see hits you with an attack, you can use your reaction to cause the creature to make a Dexterity saving throw. The creature takes 2d8 lightning or thunder damage (your choice) on a failed saving throw, and half as much damage on a successful one.",
									"You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Trickery Domain: Blessing of the Trickster",
								"text": "Starting when you choose this domain at 1st level, you can use your action to touch a willing creature other than yourself to give it advantage on Dexterity (Stealth) checks. This blessing lasts for 1 hour or until you use this feature again."
							},
							{
								"-optional": "YES",
								"name": "War Domain: Bonus Proficiencies",
								"text": "At 1st level, you gain proficiency with martial weapons and heavy armor."
							},
							{
								"-optional": "YES",
								"name": "War Domain: War Priest",
								"text": "From 1st level, your god delivers bolts of inspiration to you while you are engaged in battle. When you use the Attack action, you can make one weapon attack as a bonus action. You can use this feature a number of times equal to your Wisdom modifier (a minimum of once). You regain all expended uses when you finish a long rest."
							}
						]
					},
					{
						"-level": "2",
						"feature": [ {
							"name": "Channel Divinity",
							"text": [
								"At 2nd level, you gain the ability to channel divine energy directly from your deity, using that energy to fuel magical effects. You start with two such effects: Turn Undead and an effect determined by your domain. Some domains grant you additional effects as you advance in levels, as noted in the domain description.",
								"When you use your Channel Divinity, you choose which effect to create. You must then finish a short or long rest to use your Channel Divinity again.",
								"Some Channel Divinity effects require saving throws. When you use such an effect from this class, the DC equals your cleric spell save DC.",
								"Beginning at 6th level, you can use your Channel Divinity twice between rests, and beginning at 18th level, you can use it three times between rests. When you finish a short or long rest, you regain your expended uses."
							]
						},
							{
								"name": "Channel Divinity: Turn Undead",
								"text": [
									"As an action, you present your holy symbol and speak a prayer censuring the undead. Each undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.",
									"A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action."
								]
							},
							{
								"-optional": "YES",
								"name": "Arcana Domain Channel Divinity: Arcane Abjuration",
								"text": [
									"Starting at 2nd level, you can use your Channel Divinity to abjure otherworldly creatures",
									"As an action, you present your holy symbol, and one celestial, elemental, fey, or fiend of your choice that is within 30 feet of you must make a Wisdom saving throw, provided that the creature can see or hear you. IF the creature fails its saving throw, it is turned for 1 minute or until it takes any damage.",
									"A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly end its move in a space within 30 feet of you. It also can't take reactions. For its action, it can use use the Dash action or try to escape from an effect that prevents it form moving. If there's nowhere to move, then the creature can use the Dodge action.",
									"After you reach 5th level, when a creature fails its saving throw against you Arcane Abjuration feature, the creature is banished for 1 minute (as in the banishment spell, no concentration required) if it isn't oin its plane of origin, and its challenge rating is at or below a certain threshold, as shown below.",
									"Cleric level - Banishes Creatures of CR...",
									"5th - 1/2 or lower",
									"8th - 1 or lower",
									"11th - 2 or lower",
									"14th - 3 or lower",
									"17th - 4 or lower"
								]
							},
							{
								"-optional": "YES",
								"name": "Death Domain Channel Divinity: Touch of Death",
								"text": [
									"Starting at 2nd level, the cleric can use Channel Divinity to destroy another creature's life force by touch.",
									"When the cleric hits a creature with a melee attack, the cleric can use Channel Divinity to deal extra necrotic damage to the target. The damage equals 5 + twice his or her cleric level."
								]
							},
							{
								"-optional": "YES",
								"name": "Knowledge Domain Channel Divinity: Knowledge of the Ages",
								"text": "Starting at 2nd level, you can use your Channel Divinity to tap into a divine well of knowledge. As an action, you choose one skill or tool. For 10 minutes, you have proficiency with the chosen skill or tool."
							},
							{
								"-optional": "YES",
								"name": "Life Domain Channel Divinity: Preserve Life",
								"text": [
									"Starting at 2nd level, you can use your Channel Divinity to heal the badly injured.",
									"As an action, you present your holy symbol and evoke healing energy that can restore a number of hit points equal to five times your cleric level. Choose any creatures within 30 feet of you, and divide those hit points among them. This feature can restore a creature to no more than half of its hit point maximum. You can't use this feature on an undead or a construct."
								]
							},
							{
								"-optional": "YES",
								"name": "Light Domain Channel Divinity: Radiance of the Dawn",
								"text": [
									"Starting at 2nd level, you can use your Channel Divinity to harness sunlight, banishing darkness and dealing radiant damage to your foes.",
									"As an action, you present your holy symbol, and any magical darkness within 30 feet of you is dispelled. Additionally, each hostile creature within 30 feet of you must make a Constitution saving throw. A creature takes radiant damage equal to 2d10 + your cleric level on a failed saving throw, and half as much damage on a successful one. A creature that has total cover from you is not affected."
								]
							},
							{
								"-optional": "YES",
								"name": "Nature Domain Channel Divinity: Charm Animals and Plants",
								"text": [
									"Starting at 2nd level, you can use your Channel Divinity to charm animals and plants.",
									"As an action, you present your holy symbol and invoke the name of your deity. Each beast or plant creature that can see you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is charmed by you for 1 minute or until it takes damage. While it is charmed by you, it is friendly to you and other creatures you designate."
								]
							},
							{
								"-optional": "YES",
								"name": "Tempest Domain Channel Divinity: Destructive Wrath",
								"text": [
									"Starting at 2nd level, you can use your Channel Divinity to wield the power of the storm with unchecked ferocity.",
									"When you roll lightning or thunder damage, you can use your Channel Divinity to deal maximum damage, instead of rolling."
								]
							},
							{
								"-optional": "YES",
								"name": "Trickery Domain Channel Divinity: Invoke Duplicity",
								"text": [
									"Starting at 2nd level, you can use your Channel Divinity to create an illusory duplicate of yourself.",
									"As an action, you create a perfect illusion of yourself that lasts for 1 minute, or until you lose your concentration (as if you were concentrating on a spell). The illusion appears in an unoccupied space that you can see within 30 feet of you. As a bonus action on your turn, you can move the illusion up to 30 feet to a space you can see, but it must remain within 120 feet of you.",
									"For the duration, you can cast spells as though you were in the illusion's space, but you must use your own senses. Additionally, when both you and your illusion are within 5 feet of a creature that can see the illusion, you have advantage on attack rolls against that creature, given how distracting the illusion is to the target."
								]
							},
							{
								"-optional": "YES",
								"name": "War Domain Channel Divinity: Guided Strike",
								"text": "Starting at 2nd level, you can use your Channel Divinity to strike with supernatural accuracy. When you make an attack roll, you can use your Channel Divinity to gain a +10 bonus to the roll. You make this choice after you see the roll, but before the DM says whether the attack hits or misses."
							}
						]
					},
					{
						"-level": "4",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 4th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "5",
						"feature": {
							"name": "Destroy Undead (CR 1/2)",
							"text": "Starting at 5th level, when an undead of CR 1/2 or lower fails its saving throw against your Turn Undead feature, the creature is instantly destroyed."
						}
					},
					{
						"-level": "6",
						"feature": [ {
							"name": "Channel Divinity (2/rest)",
							"text": "Beginning at 6th level, you can use your Channel Divinity twice between rests."
						},
							{
								"-optional": "YES",
								"name": "Arcana Domain: Spell Breaker",
								"text": "Starting at 6th level, when you restore hit points to an ally with a spell of 1st level or higher, you can also end one spell of your choice on that creature. The level of the spell you end must be equal to or lower than the level of the spell slot you use to cast the healing spell"
							},
							{
								"-optional": "YES",
								"name": "Death Domain: Inescapable Destruction",
								"text": "Starting at 6th level, the cleric's ability to channel negative energy becomes more potent. Necrotic damage dealt by the character's cleric spells and Channel Divinity options ignores resistance to necrotic damage."
							},
							{
								"-optional": "YES",
								"name": "Knowledge Domain Channel Divinity: Read Thoughts",
								"text": [
									"At 6th level, you can use your Channel Divinity to read a creature's thoughts. You can then use your access to the creature's mind to command it.",
									"As an action, choose one creature that you can see within 60 feet of you. That creature must make a Wisdom saving throw. If the creature succeeds on the saving throw, you can't use this feature on it again until you finish a long rest.",
									"If the creature fails its save, you can read its surface thoughts (those foremost in its mind, reflecting its current emotions and what it is actively thinking about) when it is within 60 feet of you. This effect lasts for 1 minute.",
									"During that time, you can use your action to end this effect and cast the suggestion spell on the creature without expending a spell slot. The target automatically fails its saving throw against the spell."
								]
							},
							{
								"-optional": "YES",
								"name": "Life Domain: Blessed Healer",
								"text": "Beginning at 6th level, the healing spells you cast on others heal you as well. When you cast a spell of 1st level or higher that restores hit points to a creature other than you, you regain hit points equal to 2 + the spell's level."
							},
							{
								"-optional": "YES",
								"name": "Light Domain: Improved Flare",
								"text": "Starting at 6th level, you can also use your Warding Flare feature when a creature that you can see within 30 feet of you attacks a creature other than you."
							},
							{
								"-optional": "YES",
								"name": "Nature Domain: Dampen Elements",
								"text": "Starting at 6th level, when you or a creature within 30 feet of you takes acid, cold, fire, lightning, or thunder damage, you can use your reaction to grant resistance to the creature against that instance of the damage."
							},
							{
								"-optional": "YES",
								"name": "Tempest Domain: Thunderbolt Strike",
								"text": "At 6th level, when you deal lightning damage to a Large or smaller creature, you can also push it up to 10 feet away from you."
							},
							{
								"-optional": "YES",
								"name": "Trickery Domain Channel Divinity: Cloak of Shadows",
								"text": [
									"Starting at 6th level, you can use your Channel Divinity to vanish.",
									"As an action, you become invisible until the end of your next turn. You become visible if you attack or cast a spell."
								]
							},
							{
								"-optional": "YES",
								"name": "War Domain Channel Divinity: War God's Blessing",
								"text": "At 6th level, when a creature within 30 feet of you makes an attack roll, you can use your reaction to grant that creature a +10 bonus to the roll, using your Channel Divinity. You make this choice after you see the roll, but before the DM says whether the attack hits or misses."
							}
						]
					},
					{
						"-level": "8",
						"feature": [ {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 8th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						},
							{
								"name": "Destroy Undead (CR 1)",
								"text": "Starting at 8th level, when an undead of CR 1 or lower fails its saving throw against your Turn Undead feature, the creature is instantly destroyed."
							}
						]
					},
					{
						"-level": "8",
						"feature": [ {
							"-optional": "YES",
							"name": "Arcana Domain: Potent Spellcasting",
							"text": "Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip."
						},
							{
								"-optional": "YES",
								"name": "Death Domain: Divine Strike",
								"text": "At 8th level, the cleric gains the ability to infuse his or her weapon strikes with necrotic energy. Once on each of the cleric's turns when he or she hits a creature with a weapon attack, the cleric can cause the attack to deal an extra 1d8 necrotic damage to the target. When the cleric reaches 14th level, the extra damage increases to 2d8."
							},
							{
								"-optional": "YES",
								"name": "Knowledge Domain: Potent Spellcasting",
								"text": "Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip."
							},
							{
								"-optional": "YES",
								"name": "Life Domain: Divine Strike",
								"text": "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8."
							},
							{
								"-optional": "YES",
								"name": "Light Domain: Potent Spellcasting",
								"text": "Starting at 8th level, you add your Wisdom modifier to the damage you deal with any cleric cantrip."
							},
							{
								"-optional": "YES",
								"name": "Nature Domain: Divine Strike",
								"text": "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8."
							},
							{
								"-optional": "YES",
								"name": "Tempest Domain: Divine Strike",
								"text": "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8."
							},
							{
								"-optional": "YES",
								"name": "Trickery Domain: Divine Strike",
								"text": "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8."
							},
							{
								"-optional": "YES",
								"name": "War Domain: Divine Strike",
								"text": "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8."
							}
						]
					},
					{
						"-level": "10",
						"feature": {
							"name": "Divine Intervention",
							"text": [
								"Beginning at 10th level, you can call on your deity to intervene on your behalf when your need is great.",
								"Imploring your deity's aid requires you to use your action. Describe the assistance you seek, and roll percentile dice. If you roll a number equal to or lower than your cleric level, your deity intervenes. The DM chooses the nature of the intervention; the effect of any cleric spell or cleric domain spell would be appropriate. If your deity intervenes, you can't use this feature again for 7 days. Otherwise, you can use it again after you finish a long rest.",
								"At 20th level, your call for intervention succeeds automatically, no roll required."
							]
						}
					},
					{
						"-level": "11",
						"feature": {
							"name": "Destroy Undead (CR 2)",
							"text": "Starting at 11th level, when an undead of CR 2 or lower fails its saving throw against your Turn Undead feature, the creature is instantly destroyed."
						}
					},
					{
						"-level": "12",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 12th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "14",
						"feature": {
							"name": "Destroy Undead (CR 3)",
							"text": "Starting at 14th level, when an undead of CR 3 or lower fails its saving throw against your Turn Undead feature, the creature is instantly destroyed."
						}
					},
					{
						"-level": "16",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 16th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "17",
						"feature": [ {
							"name": "Destroy Undead (CR 4)",
							"text": "Starting at 17th level, when an undead of CR 4 or lower fails its saving throw against your Turn Undead feature, the creature is instantly destroyed."
						},
							{
								"-optional": "YES",
								"name": "Arcana Domain: Arcane MAstery",
								"text": "At 17th level, you choose four spells from the Wizard spell list, one from each of the following levels: 6th, 7th, 8th, and 9th. You add them to your list of domain spells. Like your other domain spells, they are always prepared and count as cleric spells for you."
							},
							{
								"-optional": "YES",
								"name": "Death Domain: Improved Reaper",
								"text": "Starting at 17th level, when the cleric casts a Necromancy spell of 1st through 5th level that targets only one creature, the spell can instead target two creatures within range and within 5 feet of each other. If the spell consumes its material components, the cleric must provide them for each target."
							},
							{
								"-optional": "YES",
								"name": "Knowledge Domain: Visions of the Past",
								"text": [
									"Starting at 17th level, you can call up visions of the past that relate to an object you hold or your immediate surroundings. You spend at least 1 minute in meditation and prayer, then receive dreamlike, shadowy glimpses of recent events. You can meditate in this way for a number of minutes equal to your Wisdom score and must maintain concentration during that time, as if you were casting a spell.",
									"Once you use this feature, you can't use it again until you finish a short or long rest.",
									"Object Reading. Holding an object as you meditate, you can see visions of the object's previous owner. After meditating for 1 minute, you learn how the owner acquired and lost the object, as well as the most recent significant event involving the object and that owner. If the object was owned by another creature in the recent past (within a number of days equal to your Wisdom score), you can spend 1 additional minute for each owner to learn the same information about that creature.",
									"Area Reading. As you meditate, you see visions of recent events in your immediate vicinity (a room, street, tunnel, clearing, or the like, up to a 50-foot cube), going back a number of days equal to your Wisdom score. For each minute you meditate, you learn about one significant event, beginning with the most recent. Significant events typically involve powerful emotions, such as battles and betrayals, marriages and murders, births and funerals. However, they might also include more mundane events that are nevertheless important in your current situation."
								]
							},
							{
								"-optional": "YES",
								"name": "Life Domain: Supreme Healing",
								"text": "Starting at 17th level, when you would normally roll one or more dice to restore hit points with a spell, you instead use the highest number possible for each die. For example, instead of restoring 2d6 hit points to a creature, you restore 12."
							},
							{
								"-optional": "YES",
								"name": "Light Domain: Corona of Light",
								"text": "Starting at 17th level, you can use your action to activate an aura of sunlight that lasts for 1 minute or until you dismiss it using another action. You emit bright light in a 60-foot radius and dim light 30 feet beyond that. Your enemies in the bright light have disadvantage on saving throws against any spell that deals fire or radiant damage."
							},
							{
								"-optional": "YES",
								"name": "Nature Domain: Master of Nature",
								"text": "At 17th level, you gain the ability to command animals and plant creatures. While creatures are charmed by your Charm Animals and Plants feature, you can take a bonus action on your turn to verbally command what each of those creatures will do on its next turn."
							},
							{
								"-optional": "YES",
								"name": "Tempest Domain: Stormborn",
								"text": "At 17th level, you have a flying speed equal to your current walking speed whenever you are not underground or indoors."
							},
							{
								"-optional": "YES",
								"name": "Trickery Domain: Improved Duplicity",
								"text": "At 17th level, you can create up to four duplicates of yourself, instead of one, when you use Invoke Duplicity. As a bonus action on your turn, you can move any number of them up to 30 feet, to a maximum range of 120 feet."
							},
							{
								"-optional": "YES",
								"name": "War Domain: Avatar of Battle",
								"text": "At 17th level, you gain resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons."
							}
						]
					},
					{
						"-level": "18",
						"feature": {
							"name": "Channel Divinity (3/rest)",
							"text": "Beginning at 18th level, you can use your Channel Divinity three times between rests."
						}
					},
					{
						"-level": "19",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 19th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "20",
						"feature": {
							"name": "Divine Intervention Improvement",
							"text": "At 20th level, your call for intervention succeeds automatically, no roll required."
						}
					},
					{
						"-level": "1",
						"feature": [ {
							"-optional": "YES",
							"name": "Divine Domain: Forge (UA)",
							"text": [
								"The gods of the forge are patrons of artisans who work with metal, from a humble blacksmith who keeps a village in horseshoes and plow blades to the mighty elf artisan whose diamond-tipped arrows of mithral have felled demon lords. The gods of the forge teach that, with patience and hard work, even the most intractable metal can transform from a lump of ore to a beautifully wrought object. Clerics of these deities quest to search for objects lost to the forces of darkness, liberate mines overrun by orcs, and uncover rare and wondrous materials necessary to create potent magic items. Followers of these gods take great pride in their work, and they are willing to craft and use heavy armor and powerful weapons to protect them. Deities of this domain include Gond, Reorx, Onatar, Moradin, Hephaestus, and Goibhniu.",
								"Forge Domain Spells ",
								"1st - searing smite, shield ",
								"3rd - heat metal, magic weapon ",
								"5th - elemental weapon, protection from energy ",
								"7th - fabricate, wall of fire ",
								"9th - animate objects, creation",
								"This Divine Domain is from Unearthed Arcana: Cleric Divine Domains, and as such may not be allowed in your game. Consult your DM before choosing this option."
							]
						},
							{
								"-optional": "YES",
								"name": "Forge Domain: Bonus Proficiency",
								"text": "When you choose this domain at 1st level, you gain proficiency with heavy armor."
							},
							{
								"-optional": "YES",
								"name": "Forge Domain: Blessing of the Forge",
								"text": [
									"At 1st level, you gain the ability to imbue magic into a weapon or armor. At the end of a long rest, touch one nonmagical object that is a suit of armor or a simple or martial weapon. Until the end of your next long rest, the object becomes a magic item, granting a +1 bonus to AC if it's armor or a +1 bonus to attack and damage rolls if it's a weapon. ",
									"Once you use this feature, you can't use it again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Divine Domain: Grave (UA)",
								"text": [
									"Gods of the grave watch over the line between life and death. To these deities, death and the afterlife are a foundational part of the multiverse's workings. To resist death, or to desecrate the dead's rest, is an abomination. Deities of the grave include Kelemvor, Wee Jas, the ancestral spirits of the Undying Court, Hades, Anubis, and Osiris. These deities teach their followers to respect the dead and pay them due homage. Followers of these deities seek to put restless spirits to rest, destroy the undead wherever they find them, and ease the suffering of dying creatures. Their magic also allows them to stave off a creature's death, though they refuse to use such magic to extend a creature's lifespan beyond its mortal limits.",
									"Grave Domain Spells",
									"1st - bane, false life",
									"3rd - gentle repose, ray of enfeeblement",
									"5th - revivify, vampiric touch",
									"7th - blight, death ward",
									"9th - antilife shell, raise dead",
									"This Divine Domain is from Unearthed Arcana: Cleric Divine Domains, and as such may not be allowed in your game. Consult your DM before choosing this option."
								]
							},
							{
								"-optional": "YES",
								"name": "Grave Domain: Bonus Proficiency",
								"text": "When you choose this domain at 1st level, you gain proficiency with heavy armor."
							},
							{
								"-optional": "YES",
								"name": "Grave Domain: Circle of Mortality",
								"text": "At 1st level, you gain the ability to manipulate the line between life and death. When you cast a spell that restores hit points to a living creature currently at 0, treat any dice rolled to determine the spell's healing as having rolled their maximum result. In addition, if you have the spare the dying cantrip, you can cast it as a bonus action."
							},
							{
								"-optional": "YES",
								"name": "Grave Domain: Eyes of the Grave",
								"text": [
									"Starting at 1st level, you gain an innate sense of creatures whose existence is an insult to the natural cycle of life. If you spend 1 minute in uninterrupted contemplation, you can determine the presence and nature of undead creatures in the area. This detection extends up to 1 mile in all directions. You learn the number of undead and their distance and direction from you. In addition, you learn the creature type of the undead in that area that has the highest challenge rating. ",
									"Once you use this feature, you can't use it again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Divine Domain: Protection (UA)",
								"text": [
									"The protection domain is the purview of deities who charge their followers to shield the weak from the strong. The gods' faithful dwell in villages and towns on the borderlands, where they help bolster defenses and seek out evils to defeat. These gods believe that a strong shield and a suit of armor is the best defense against evil, second only to a stout mace on hand to respond to any attacks in kind. Deities who grant this domain include Helm, Ilmater, Torm, Tyr, Heironeous, St. Cuthbert, Paladine, Dol Dorn, the Silver Flame, Bahamut, Yondalla, Athena, and Odin. ",
									"Protection Domain Spells ",
									"1st - compelled duel, protection from evil and good ",
									"3rd - aid, protection from poison ",
									"5th - protection from energy, slow ",
									"7th - guardian of faith, Otiluke's resilient sphere ",
									"9th - antilife shell, wall of force",
									"This Divine Domain is from Unearthed Arcana: Cleric Divine Domains, and as such may not be allowed in your game. Consult your DM before choosing this option."
								]
							},
							{
								"-optional": "YES",
								"name": "Protection Domain: Bonus Proficiency",
								"text": "When you choose this domain at 1st level, you gain proficiency with heavy armor."
							},
							{
								"-optional": "YES",
								"name": "Protection Domain: Shield of the Faithful",
								"text": "Starting at 1st level, you gain the ability to hinder attacks intended for others. When a creature attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. To do so, you must be able to see both the attacker and the target. You interpose an arm, a shield, or some other part of yourself to try to throw the attack off target."
							}
						]
					},
					{
						"-level": "2",
						"feature": [ {
							"-optional": "YES",
							"name": "Forge Domain Channel Divinty: Artisan's Blessing",
							"text": [
								"Starting at 2nd level, you can use your Channel Divinity to create simple items. ",
								"Starting at the beginning of a short rest, you conduct a ritual to your deity that grants you the ability to craft a finished item that is at least part metal. The item is completed at the end of the rest. ",
								"The object can be worth no more than 100 gp, and as part of this ritual you must expend metals, such as coins or other finished items, with a value equal to the item you want to make. The item can be an exact duplicate of a nonmagical item, such as a copy of a key, if you possess the original during your short rest."
							]
						},
							{
								"-optional": "YES",
								"name": "Grave Domain Channel Divinity: Path to the Grave",
								"text": [
									"Starting at 2nd level, you can use your Channel Divinity to mark another creature's life force for termination. ",
									"As an action, you touch a creature. The next time that creature takes damage from a spell or an attack from you or an ally, it is vulnerable to that spell or attack's damage. If the source of damage has multiple damage types, the creature is vulnerable to all of them. The vulnerability applies only to the first time that source inflicts damage, and then ends. ",
									"If the creature has resistance or is immune to the damage, it instead loses its resistance or immunity against that spell or attack when it first applies damage."
								]
							},
							{
								"-optional": "YES",
								"name": "Protection Domain Channel Divinity: Radiant Defense",
								"text": [
									"Starting at 2nd level, you can use your Channel Divinity to cloak your allies in radiant armor. ",
									"As an action, you channel blessed energy into an ally that you can see within 30 feet of you. The first time that ally is hit by an attack within the next minute, the attacker takes radiant damage equal to 2d10 + your cleric level."
								]
							}
						]
					},
					{
						"-level": "6",
						"feature": [ {
							"-optional": "YES",
							"name": "Forge Domain: Soul of the Forge",
							"text": [
								"Starting at 6th level, your mastery of the forge grants you a number of special abilities: ",
								"• You gain a +1 bonus to AC while you are wearing medium or heavy armor. ",
								"• You gain resistance to fire damage. ",
								"• When you hit a construct with an attack, you deal additional force damage to it equal to your cleric level."
							]
						},
							{
								"-optional": "YES",
								"name": "Grave Domain: Sentinel at Death's Door",
								"text": [
									"Starting at 6th level, you gain the ability to impede death's progress. As a reaction when you or an ally that you can see within 30 feet of you suffers a critical hit, you can turn that attack into a normal hit. Any effects triggered by a critical hit are canceled. ",
									"Once you use this feature, you can't use it again until you finish a short or long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Protection Domain: Blessed Healer",
								"text": "Beginning at 6th level, the healing spells you cast on others can heal you as well. When you cast a spell with a spell slot and it restores hit points to any creature other than you this turn, you regain hit points equal to 2 + the spell's level."
							}
						]
					},
					{
						"-level": "8",
						"feature": [ {
							"-optional": "YES",
							"name": "Forge Domain: Divine Strike",
							"text": "At 8th level, you gain the ability to infuse your weapon strikes with the fiery power of the forge. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 fire damage to the target. When you reach 14th level, the extra damage increases to 2d8."
						},
							{
								"-optional": "YES",
								"name": "Grave Domain: Divine Strike",
								"text": "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 necrotic damage. When you reach 14th level, the extra damage increases to 2d8."
							},
							{
								"-optional": "YES",
								"name": "Protection Domain: Divine Strike",
								"text": "At 8th level, you gain the ability to infuse your weapon strikes with divine energy. Once on each of your turns when you hit a creature with a weapon attack, you can cause the attack to deal an extra 1d8 radiant damage to the target. When you reach 14th level, the extra damage increases to 2d8."
							}
						]
					},
					{
						"-level": "17",
						"feature": [ {
							"-optional": "YES",
							"name": "Forge Domain: Saint of Forge and Fire",
							"text": "At 17th level, your affinity for fire and metal becomes more powerful due to your deity's blessing. You gain immunity to fire damage, and while you're wearing heavy armor, you have resistance to bludgeoning, piercing, and slashing damage from nonmagical attacks."
						},
							{
								"-optional": "YES",
								"name": "Grave Domain: Keeper of Souls",
								"text": "At 17th level, you gain the ability to manipulate the boundary between life and death. When an enemy you can see dies within 30 feet of you, you or one ally of your choice that is within 30 feet of you regains hit points equal to the enemy's number of Hit Dice. You can use this feature as long as you aren't incapacitated, but no more than once per round."
							},
							{
								"-optional": "YES",
								"name": "Protection Domain: Indomitable Defense",
								"text": [
									"At 17th level, you gain resistance to two damage types of your choice, choosing from bludgeoning, necrotic, piercing, radiant, and slashing. Whenever you finish a short or long rest, you can change the damage types you chose. ",
									"As an action, you can temporarily give up this resistance and transfer it to one creature you touch. The creature keeps the resistance until the end of your next short or long rest or until you transfer it back to yourself as a bonus action."
								]
							}
						]
					}
				]
			},
			{
				"name": "Druid",
				"hd": "8",
				"proficiency": "Intelligence, Wisdom",
				"spellAbility": "Wisdom",
				"autolevel": [ {
					"-level": "1",
					"slots": "2,2,0,0,0,0,0,0,0,0"
				},
					{
						"-level": "2",
						"slots": "2,3,0,0,0,0,0,0,0,0"
					},
					{
						"-level": "3",
						"slots": "2,4,2,0,0,0,0,0,0,0"
					},
					{
						"-level": "4",
						"slots": "3,4,3,0,0,0,0,0,0,0"
					},
					{
						"-level": "5",
						"slots": "3,4,3,2,0,0,0,0,0,0"
					},
					{
						"-level": "6",
						"slots": "3,4,3,3,0,0,0,0,0,0"
					},
					{
						"-level": "7",
						"slots": "3,4,3,3,1,0,0,0,0,0"
					},
					{
						"-level": "8",
						"slots": "3,4,3,3,2,0,0,0,0,0"
					},
					{
						"-level": "9",
						"slots": "3,4,3,3,3,1,0,0,0,0"
					},
					{
						"-level": "10",
						"slots": "4,4,3,3,3,2,0,0,0,0"
					},
					{
						"-level": "11",
						"slots": "4,4,3,3,3,2,1,0,0,0"
					},
					{
						"-level": "12",
						"slots": "4,4,3,3,3,2,1,0,0,0"
					},
					{
						"-level": "13",
						"slots": "4,4,3,3,3,2,1,1,0,0"
					},
					{
						"-level": "14",
						"slots": "4,4,3,3,3,2,1,1,0,0"
					},
					{
						"-level": "15",
						"slots": "4,4,3,3,3,2,1,1,1,0"
					},
					{
						"-level": "16",
						"slots": "4,4,3,3,3,2,1,1,1,0"
					},
					{
						"-level": "17",
						"slots": "4,4,3,3,3,2,1,1,1,1"
					},
					{
						"-level": "18",
						"slots": "4,4,3,3,3,3,1,1,1,1"
					},
					{
						"-level": "19",
						"slots": "4,4,3,3,3,3,2,1,1,1"
					},
					{
						"-level": "20",
						"slots": "4,4,3,3,3,3,2,2,1,1"
					},
					{
						"-level": "1",
						"feature": [ {
							"name": "Starting Proficiencies",
							"text": [
								"You are proficient with the following items, in addition to any proficiencies provided by your race or background.",
								"Armor: light armor, medium armor, shields (druids will not wear armor or use shields made of metal)",
								"Weapons: clubs, daggers, darts, javelins, maces, quarterstaffs, scimitars, sickles, slings, spears",
								"Tools: herbalism kit",
								"Skills: Choose two from Arcana, Animal Handling, Insight, Medicine, Nature, Perception, Religion, and Survival"
							]
						},
							{
								"name": "Starting Equipment",
								"text": [
									"You start with the following items, plus anything provided by your background.",
									"• (a) a wooden shield or (b) any simple weapon",
									"• (a) a scimitar or (b) any simple melee weapon",
									"• Leather armor, an explorer's pack, and a druidic focus",
									"Alternatively, you may start with 2d4 x 10 gp to buy your own equipment."
								]
							}
						]
					},
					{
						"-level": "1",
						"feature": [ {
							"name": "Druidic",
							"text": "You know Druidic, the secret language of druids. You can speak the language and use it to leave hidden messages. You and others who know this language automatically spot such a message. Others spot the message's presence with a successful DC 15 Wisdom (Perception) check but can't decipher it without magic."
						},
							{
								"name": "Spellcasting",
								"text": [
									"Drawing on the divine essence of nature itself, you can cast spells to shape that essence to your will. See chapter 10 for the general rules of spellcasting and chapter 11 for the druid spell list.",
									"Cantrips",
									"At 1st level, you know two cantrips of your choice from the druid spell list. You learn additional druid cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Druid table.",
									"Preparing and Casting Spells",
									"The Druid table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these druid spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
									"You prepare the list of druid spells that are available for you to cast, choosing from the druid spell list. When you do so, choose a number of druid spells equal to your Wisdom modifier + your druid level (minimum of one spell). The spells must be of a level for which you have spell slots.",
									"For example, if you are a 3rd-level druid, you have four 1st-level and two 2nd-level spell slots. With a Wisdom of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level ar 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.",
									"You can also change your list of prepared spells when you finish a long rest. Preparing a new list of druid spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.",
									"Spellcasting Ability",
									"Wisdom is your spellcasting ability for your druid spells, since your magic draws upon your devotion and attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a druid spell you cast and when making an attack roll with one.",
									"Spell save DC = 8 + your proficiency bonus + your Wisdom modifier",
									"Spell attack modifier = your proficiency bonus + your Wisdom modifier",
									"Ritual Casting",
									"You can cast a druid spell as a ritual if that spell has the ritual tag and you have the spell prepared.",
									"Spellcasting Focus",
									"You can use a druidic focus (found in chapter 5) as a spellcasting focus for your druid spells"
								]
							}
						]
					},
					{
						"-level": "2",
						"feature": [ {
							"name": "Wild Shape",
							"text": [
								"Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before. You can use this feature twice. You regain expended uses when you finish a short or long rest.",
								"Your druid level determines the beasts you can transform into, as shown in the Beast Shapes table. At 2nd level, for example, you can transform into any beast that has a challenge rating of 1/4 or lower that doesn't have a flying or swimming speed.",
								"Beast Shapes",
								"Level Max. CR Limitations Example",
								"2nd 1/4 No flying or swimming speed Wolf",
								"4th 1/2 No flying speed Crocodile",
								"8th 1 — Giant eagle",
								"You can stay in a beast shape for a number of hours equal to half your druid level (rounded down). You then revert to your normal form unless you expend another use of this feature. You can revert to your normal form earlier by using a bonus action on your turn. You automatically revert if you fall unconscious, drop to 0 hit points, or die.",
								"While you are transformed, the following rules apply:",
								"• Your game statistics are replaced by the statistics of the beast, but you retain your alignment, personality, and Intelligence, Wisdom, and Charisma scores. You also retain all of your skill and saving throw proficiencies, in addition to gaining those of the creature. If the creature has the same proficiency as you and the bonus in its stat block is higher than yours, use the creature's bonus instead of yours. If the creature has any legendary or lair actions, you can't use them.",
								"• When you transform, you assume the beast's hit points and Hit Dice. When you revert to your normal form, you return to the number of hit points you had before you transformed. However, if you revert as a result of dropping to 0 hit points, any excess damage carries over to your normal form. For example, if you take 10 damage in animal form and have only 1 hit point left, you revert and take 9 damage. As long as the excess damage doesn't reduce your normal form to 0 hit points, you aren't knocked unconscious.",
								"• You can't cast spells, and your ability to speak or take any action that requires hands is limited to the capabilities of your beast form. Transforming doesn't break your concentration on a spell you've already cast, however, or prevent you from taking actions that are part of a spell, such as call lightning, that you've already cast.",
								"• You retain the benefit of any features from your class, race, or other source and can use them if the new form is physically capable of doing so. However, you can't use any of your special senses, such as darkvision, unless your new form also has that sense.",
								"• You choose whether your equipment falls to the ground in your space, merges into your new form, or is worn by it. Worn equipment functions as normal, but the DM decides whether it is practical for the new form to wear a piece of equipment, based on the creature's shape and size. Your equipment doesn't change size or shape to match the new form, and any equipment that the new form can't wear must either fall to the ground or merge with it. Equipment that merges with the form has no effect until you leave the form."
							]
						},
							{
								"name": "Druid Circle",
								"text": "At 2nd level, you choose to identify with a circle of druids: the Circle of the Land or the Circle of the Moon, both detailed at the end of the class description. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level."
							},
							{
								"-optional": "YES",
								"name": "Druid Circle: Circle of the Land",
								"text": "The Circle of the Land is made up of mystics and sages who safeguard ancient knowledge and rites through a vast oral tradition. These druids meet within sacred circles of trees or standing stones to whisper primal secrets in Druidic. The circle's wisest members preside as the chief priests of communities that hold to the Old Faith and serve as advisors to the rulers of those folk. As a member of this circle, your magic is influenced by the land where you were initiated into the circle's mysterious rites."
							},
							{
								"-optional": "YES",
								"name": "Druid Circle: Circle of the Moon",
								"text": [
									"Druids of the Circle of the Moon are fierce guardians of the wilds. Their order gathers under the full moon to share news and trade warnings. They haunt the deepest parts of the wilderness, where they might go for weeks on end before crossing paths with another humanoid creature, let alone another druid.",
									"Changeable as the moon, a druid of this circle might prowl as a great cat one night, soar over the treetops as an eagle the next day, and crash through the undergrowth in bear form to drive off a trespassing monster. The wild is in the druid's blood."
								]
							},
							{
								"-optional": "YES",
								"name": "Circle of Land: Bonus Cantrip",
								"text": "You learn one additional druid cantrip of your choice."
							},
							{
								"-optional": "YES",
								"name": "Circle of Land: Natural Recovery",
								"text": [
									"Starling at 2nd level, you can regain some of your magical energy by sitting in meditation and communing with nature. During a short rest, you choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your druid level (rounded up), and none of the slots can be 6th level or higher. You can't use this feature again until you finish a long rest",
									"For example, when you are a 4th-level druid, you can recover up to two levels worth of spell slots. You can recover either a 2nd-level slot or two 1st-level slots."
								]
							},
							{
								"-optional": "YES",
								"name": "Circle of Land: Circle Spells",
								"text": [
									"Your mystical connection to the land infuses you with the ability to cast certain spells. At 3rd, 5th, 7th, and 9th level you gain access to circle spells connected to the land where you became a druid. Choose that land - arctic, coast, desert, forest, grassland, mountain, swamp, or Underdark - and consult the associated list of spells.",
									"Once you gain access to a circle spell, you always have it prepared, and it doesn't count against the number of spells you can prepare each day. If you gain access to a spell that doesn't appear on the druid spell list, the spell is nonetheless a druid spell for you."
								]
							},
							{
								"-optional": "YES",
								"name": "Circle of Moon: Combat Wild Shape",
								"text": [
									"You gain the ability to use Wild Shape on your turn as a bonus action, rather than as an action.",
									"Additionally, while you are transformed by Wild Shape, you can use a bonus action to expend one spell slot to regain 1d8 hit points per level of the spell slot expended."
								]
							},
							{
								"-optional": "YES",
								"name": "Circle of Moon: Circle Forms",
								"text": [
									"The rites of your circle grant you the ability to transform into more dangerous animal forms. Starting at 2nd level, you can use your Wild Shape to transform into a beast with a challenge rating as high as 1 (you ignore the Max. CR column of the Beast Shapes table, but must abide by the other limitations there).",
									"Starting at 6th level, you can transform into a beast with a challenge rating as high as your druid level divided by 3, rounded down."
								]
							}
						]
					},
					{
						"-level": "4",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 4th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "6",
						"feature": [ {
							"-optional": "YES",
							"name": "Circle of Land: Land's Stride",
							"text": [
								"Starting at 6th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.",
								"In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the entangle spell."
							]
						},
							{
								"-optional": "YES",
								"name": "Circle of Moon: Primal Strike",
								"text": "Starting at 6th level, your attacks in beast form count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage."
							}
						]
					},
					{
						"-level": "8",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 8th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "10",
						"feature": [ {
							"-optional": "YES",
							"name": "Circle of Land: Nature's Ward",
							"text": "When you reach 10th level, you can't be charmed or frightened by elementals or fey, and you are immune to poison and disease."
						},
							{
								"-optional": "YES",
								"name": "Circle of Moon: Elemental Wild Shape",
								"text": "At 10th level, you can expend two uses of Wild Shape at the same time to transform into an air elemental, an earth elemental, a fire elemental, or a water elemental."
							}
						]
					},
					{
						"-level": "12",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 12th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "14",
						"feature": [ {
							"-optional": "YES",
							"name": "Circle of Land: Nature's Sanctuary",
							"text": [
								"When you reach 14th level, creatures of the natural world sense your connection to nature and become hesitant to attack you. When a beast or plant creature attacks you, that creature must make a Wisdom saving throw against your druid spell save DC. On a failed save, the creature must choose a different target, or the attack automatically misses. On a successful save, the creature is immune to this effect for 24 hours.",
								"The creature is aware of this effect before it makes its attack against you."
							]
						},
							{
								"-optional": "YES",
								"name": "Circle of Moon: Thousand Forms",
								"text": "By 14th level, you have learned to use magic to alter your physical form in more subtle ways. You can cast the alter self spell at will."
							}
						]
					},
					{
						"-level": "16",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 16th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "18",
						"feature": [ {
							"name": "Timeless Body",
							"text": "Starting at 18th level, the primal magic that you wield causes you to age more slowly. For every 10 years that pass, your body ages only 1 year."
						},
							{
								"name": "Beast Spells",
								"text": "Beginning at 18th level, you can cast many of your druid spells in any shape you assume using Wild Shape. You can perform the somatic and verbal components of a druid spell while in a beast shape, but you aren't able to provide material components."
							}
						]
					},
					{
						"-level": "19",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 19th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "20",
						"feature": {
							"name": "Archdruid",
							"text": [
								"At 20th level, you can use your Wild Shape an unlimited number of times.",
								"Additionally, you can ignore the verbal and somatic components of your druid spells, as well as any material components that lack a cost and aren't consumed by a spell. You gain this benefit in both your normal shape and your beast shape from Wild Shape."
							]
						}
					},
					{
						"-level": "2",
						"feature": [ {
							"-optional": "YES",
							"name": "Optional Rule: Wild Shape Forms",
							"text": [
								"Known Beast Shapes: ",
								"When you gain the Wild Shape feature at 2nd level, you are deeply familiar with three beasts of your choice and can transform into them. ",
								"To choose the three beast shapes, you first need to determine whether your druid grew up in a temperate or a tropical region, consulting with your DM. Then refer to the Common Beast Shapes table that corresponds to the region you selected. That table lists the beasts you can choose from, based on your druid level. The table presents the animals that a druid is most likely to have seen as a novice, to have learned about through mystic research, or to have a special affinity with. ",
								"Each time you gain a druid level later, you can choose one more beast shape from the same table you used at 2nd level.",
								"Gaining Beast Shapes:",
								"In addition to the beast shapes you gain for free when you level up, you can acquire new shapes on your adventures. Do you see a dinosaur, a saber-toothed tiger, a giant eagle, or some other exotic critter that you want to turn into? This rule gives you a method for learning how to do so. It requires you to abide by the limitations in the Wild Shape feature (see the Beast Shapes table in the Player's Handbook, page 66). ",
								"When you see a beast whose shape you'd like to learn, you have two options: ",
								"Observation: ",
								"You learn the beast's shape after observing its behavior for at least 1 hour and succeeding on an Intelligence (Nature) check with a DC equal to 10 + the beast's challenge rating. For this observation period, your vantage point—whether physical or magical— must be within 150 feet of the beast. If you previously spent at least 1 hour reading a scholarly work about the creature, you have advantage on the check. ",
								"Interaction: ",
								"You learn the beast's shape after interacting with it peacefully for 10 minutes and succeeding on a Wisdom (Animal Handling) check with a DC equal to 10 + the beast's challenge rating. For this interaction period, you must be within 15 feet of the beast, and if you spend at least a minute petting it, you have advantage on the check. ",
								"Either of these options can be assisted by magic. For example, divination magic can be used to provide safe observation of a dangerous animal, and a spell like animal friendship can lay the groundwork for peaceful interaction.",
								"This optional rule is from Unearthed Arcana: Druid Circles and Wild Shape, and as such may not be used in your game. Consult your DM about this rule."
							]
						},
							{
								"-optional": "YES",
								"name": "Druid Circle: Circle of Dreams",
								"text": [
									"Druids who are members of the Circle of Dreams hail from regions that have strong ties to the Feywild. The druids' guardianship of the natural world makes for a natural alliance between them and good-aligned fey. These druids seek to fill the world with merriment and light. Their magic mends wounds and brings joy to downcast hearts, and the realms they protect are gleaming, fruitful places.",
									"This Druid Circle is from Unearthed Arcana: Druid Circles and Wild Shape, and as such may not be used in your game. Consult your DM before taking this option."
								]
							},
							{
								"-optional": "YES",
								"name": "Circle of Dreams: Balm of the Summer Court",
								"text": [
									"At 2nd level, you become imbued with the blessings of the Summer Court. You are a font of energy that lends relief to weary feet and respite from injuries. You have a pool of fey energy represented by a number of d6s equal to your druid level. ",
									"As a bonus action, you can choose an ally you can see within 120 feet of you and spend a number of those dice equal to half your druid level or less. Roll the spent dice and add them together. The target regains a number of hit points equal to the total. The target also gains 1 temporary hit point per die spent, and its speed increases by 5 feet per die spent. The speed increase lasts for 1 minute. ",
									"You regain the expended dice when you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Druid Circle: Circle of the Shepherd",
								"text": [
									"Druids of the Circle of the Shepherd commune with the spirits of beasts. While these druids recognize that all living things play a role in the natural world, they focus on protecting animals. Shepherds, as they are known, see beasts as their charges. They ward off monsters that threaten natural creatures, rebuke hunters who kill more prey than necessary, and prevent civilization from encroaching on habitats and paths needed for animal migrations. Many of these druids are happiest far from cities and towns, content to spend their days in the company of wild animals.",
									"This Druid Circle is from Unearthed Arcana: Druid Circles and Wild Shape, and as such may not be used in your game. Consult your DM before taking this option."
								]
							},
							{
								"-optional": "YES",
								"name": "Circle of the Shepherd: Spirit Bond",
								"text": [
									"Starting at 2nd level, you gain the ability to call forth animal spirits and use them to influence the world around you. As a bonus action, you magically summon a Medium spirit to an unoccupied space you can see within 60 feet of you. The spirit creates an aura in a 30-foot radius around it, it doesn't occupy its space, it is immobile, and it counts as neither a creature nor an object. ",
									"The nature of the aura depends on the type of spirit you choose to summon: ",
									"Bear: The bear spirit grants you and your allies its might and endurance. You and your allies who are in the aura when the spirit appears each gain temporary hit points equal to 5 + your druid level. In addition, you and your allies gain advantage on Strength checks and Strength saving throws while in the aura. ",
									"Hawk: The hawk spirit is a consummate hunter, marking your enemies with its keen sight. You and your allies gain advantage on ranged attack rolls against targets in the spirit's aura. ",
									"Wolf: The wolf spirit lends you and your allies its precise senses, while your magic works to benefit the members of your pack. You and your allies gain advantage on all ability checks made to detect creatures in the spirit's aura. In addition, if you cast a spell with a spell slot that restores hit points to anyone inside or outside the aura, each of your allies in the aura also regains hit points equal to your druid level. ",
									"The spirit persists for 1 minute. Once you use this feature, you can't use it again until you finish a short or long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Circle of the Shepherd: Beast Speech",
								"text": [
									"At 2nd level, you gain the ability to converse with beasts. Beasts can understand your speech, and you gain the ability to decipher their noises and motions into recognizable words and phrases. Most beasts lack the intelligence to convey or understand sophisticated concepts, but a friendly beast could relay what it has seen or heard in the recent past. ",
									"This ability does not grant you any special friendship with beasts, though you can combine this ability with gifts and other favors to curry favor with them as you would any other nonplayer character."
								]
							},
							{
								"-optional": "YES",
								"name": "Druid Circle: Circle of Twilight",
								"text": [
									"The Circle of Twilight seeks to exterminate undead creatures and preserve the natural cycle of life and death that rules over the cosmos. Their magic allows them to manipulate the boundary between life and death, sending their foes to their final rest while keeping their allies from that fate. ",
									"These druids seek out lands that have been tainted by undeath. Such places are grim and foreboding. Once vibrant forests become gloomy, haunted places devoid of animals and filled with plants dying a slow, lingering death. The Circle of Twilight goes to such places to banish undeath and restore life.",
									"This Druid Circle is from Unearthed Arcana: Druid Circles and Wild Shape, and as such may not be used in your game. Consult your DM before taking this option."
								]
							},
							{
								"-optional": "YES",
								"name": "Circle of Twilight: Harvest's Scythe",
								"text": [
									"Starting at 2nd level, you learn to unravel and harvest the life energy of other creatures. You can augment your spells to drain the life force from creatures. You have a pool of energy represented by a number of d10s equal to your druid level. ",
									"When you roll damage for a spell, you can increase that damage by spending dice from the pool. You can spend a number of dice equal to half your druid level or less. Roll the spent dice and add them to the damage as necrotic damage. If you kill one or more hostile creatures with a spell augmented in this way, you or an ally of your choice that you can see within 30 feet of you regains 2 hit points per die spent to increase the spell's damage, or 5 hit points per die if at least one of the slain creatures was undead. ",
									"You regain the expended dice when you finish a long rest."
								]
							}
						]
					},
					{
						"-level": "6",
						"feature": [ {
							"-optional": "YES",
							"name": "Circle of Dreams: Hearth of Moonlight and Shadow",
							"text": "At 6th level, home is wherever you set up camp. During a short or long rest, you can invoke the shadowy power of the Gloaming Court to ward your campsite from intruders. At the start of the rest, you create an area with a 30-foot radius. Within this area, you and your allies gain a +5 bonus to Wisdom (Perception) checks to detect creatures, and any light from open flames (campfire, torches, and the like) is not visible outside the area. These effects end when the rest finishes or when you leave the area."
						},
							{
								"-optional": "YES",
								"name": "Circle of the Shepherd: Mighty Summoner",
								"text": "At 6th level, you gain the ability to conjure forth powerful animals. Any beast summoned or created by your spells gains two benefits. Its hit point maximum increases by 2 per Hit Die, and the damage from its natural weapons is considered magical for the purpose of overcoming immunity and resistance to nonmagical attacks and damage."
							},
							{
								"-optional": "YES",
								"name": "Circle of Twilight: Speech Beyond the Grave",
								"text": [
									"At 6th level, you gain the ability to reach beyond death's veil in search of knowledge. Using this feature, you can cast speak with dead without material components, and you understand what the target of this casting says. It can understand your questions, even if you don't share a language or it is not intelligent enough to speak. ",
									"Once you use this feature, you can't use it again until you finish a short or long rest."
								]
							}
						]
					},
					{
						"-level": "10",
						"feature": [ {
							"-optional": "YES",
							"name": "Circle of Dreams: Hidden Paths",
							"text": [
								"At 10th level, you can use the hidden, unpredictable magical pathways that some fey use to traverse space in a blink of an eye. On your turn, you can teleport up to 30 feet to a spot you can see. Each foot of this teleportation costs 1 foot of your movement. ",
								"You can also use this feature to teleport someone else. As an action, you can teleport a willing ally you touch up to 30 feet to a point you can see. ",
								"Once you use either option - teleporting yourself or an ally - you can't use that option again until 1d4 rounds have passed."
							]
						},
							{
								"-optional": "YES",
								"name": "Circle of the Shepherd: Guardian Spirit",
								"text": "At 10th level, you gain the services of a spirit that watches over you and protects you from harm. Whenever you finish a long rest, you gain the benefits of a death ward spell. The spell's duration is extended to 24 hours."
							},
							{
								"-optional": "YES",
								"name": "Circle of Twilight: Watcher at the Threshold",
								"text": "At 10th level, you gain resistance to necrotic and radiant damage. In addition, while you aren't incapacitated, any ally within 30 feet of you has advantage on death saving throws."
							},
							{
								"-optional": "YES",
								"name": "Circle of Twilight: Paths of the Dead",
								"text": "At 14th level, your mastery of death allows you to tread the paths used by ghosts and other spirits. Using this feature, you can cast etherealness. Once the spell ends, you can't cast it with this feature again until you finish a short or long rest."
							}
						]
					},
					{
						"-level": "14",
						"feature": {
							"-optional": "YES",
							"name": "Circle of Dreams: Purifying Light",
							"text": [
								"At 14th level, the favor of the Summer Court allows you to end spells that hamper you and your allies. When you cast a spell with a spell slot and it restores hit points to you or an ally this turn, you can simultaneously target the healed creature with dispel magic, using a spell slot with a level equal to the slot used to cast the healing spell. ",
								"You can use this feature three times, and you regain expended uses of it when you finish a long rest. If the healing spell targets more than one creature, you can use this feature on more than one at the same time, expending one use of it per creature."
							]
						}
					},
					{
						"-level": "14",
						"feature": {
							"-optional": "YES",
							"name": "Circle of the Shepherd: Faithful Summons",
							"text": [
								"Starting at 14th level, the bestial spirits you commune with protect you when you are vulnerable. If you are reduced to 0 hit points or are incapacitated against your will, you can immediately gain the benefits of conjure animals as if it was cast with a 9th-level spell slot. It summons four beasts of your choice that are challenge rating 2 or lower. The conjured beasts appear within 20 feet of you. If they receive no commands from you, they protect you from harm and attack your foes. The spell lasts for 1 hour. ",
								"Once you use this feature, you can't use it again until you finish a long rest."
							]
						}
					}
				]
			},
			{
				"name": "Fighter",
				"hd": "10",
				"proficiency": "Strength, Constitution",
				"spellAbility": "Intelligence",
				"autolevel": [ {
					"-level": "3",
					"slots": {
						"-optional": "YES",
						"#text": "2,2,0,0,0"
					}
				},
					{
						"-level": "4",
						"slots": {
							"-optional": "YES",
							"#text": "2,3,0,0,0"
						}
					},
					{
						"-level": "5",
						"slots": {
							"-optional": "YES",
							"#text": "2,3,0,0,0"
						}
					},
					{
						"-level": "6",
						"slots": {
							"-optional": "YES",
							"#text": "2,3,0,0,0"
						}
					},
					{
						"-level": "7",
						"slots": {
							"-optional": "YES",
							"#text": "2,4,2,0,0"
						}
					},
					{
						"-level": "8",
						"slots": {
							"-optional": "YES",
							"#text": "2,4,2,0,0"
						}
					},
					{
						"-level": "9",
						"slots": {
							"-optional": "YES",
							"#text": "2,4,2,0,0"
						}
					},
					{
						"-level": "10",
						"slots": {
							"-optional": "YES",
							"#text": "3,4,3,0,0"
						}
					},
					{
						"-level": "11",
						"slots": {
							"-optional": "YES",
							"#text": "3,4,3,0,0"
						}
					},
					{
						"-level": "12",
						"slots": {
							"-optional": "YES",
							"#text": "3,4,3,0,0"
						}
					},
					{
						"-level": "13",
						"slots": {
							"-optional": "YES",
							"#text": "3,4,3,2,0"
						}
					},
					{
						"-level": "14",
						"slots": {
							"-optional": "YES",
							"#text": "3,4,3,2,0"
						}
					},
					{
						"-level": "15",
						"slots": {
							"-optional": "YES",
							"#text": "3,4,3,2,0"
						}
					},
					{
						"-level": "16",
						"slots": {
							"-optional": "YES",
							"#text": "3,4,3,3,0"
						}
					},
					{
						"-level": "17",
						"slots": {
							"-optional": "YES",
							"#text": "3,4,3,3,0"
						}
					},
					{
						"-level": "18",
						"slots": {
							"-optional": "YES",
							"#text": "3,4,3,3,0"
						}
					},
					{
						"-level": "19",
						"slots": {
							"-optional": "YES",
							"#text": "3,4,3,3,1"
						}
					},
					{
						"-level": "20",
						"slots": {
							"-optional": "YES",
							"#text": "3,4,3,3,1"
						}
					},
					{
						"-level": "1",
						"feature": [ {
							"name": "Starting Proficiencies",
							"text": [
								"You are proficient with the following items, in addition to any proficiencies provided by your race or background.",
								"Armor: light armor, medium armor, heavy armor, shields",
								"Weapons: simple weapons, martial weapons",
								"Tools: none",
								"Skills: Choose two skills from Acrobatics, Animal Handling, Athletics, History, Insight, Intimidation, Perception, and Survival"
							]
						},
							{
								"name": "Starting Equipment",
								"text": [
									"You start with the following items, plus anything provided by your background.",
									"• (a) chain mail or (b) leather, longbow, and 20 arrows",
									"• (a) a martial weapon and a shield or (b) two martial weapons",
									"• (a) a light crossbow and 20 bolts or (b) two handaxes",
									"• (a) a dungeoneer's pack or (b) an explorer's pack",
									"Alternatively, you may start with 5d4 x 10 gp to buy your own equipment."
								]
							}
						]
					},
					{
						"-level": "1",
						"feature": [ {
							"name": "Fighting Style",
							"text": "You adopt a particular style of fighting as your specialty. Choose a fighting style from the list of optional features. You can't take the same Fighting Style option more than once, even if you get to choose again."
						},
							{
								"-optional": "YES",
								"name": "Fighting Style: Archery",
								"text": "You gain a +2 bonus to attack rolls you make with ranged weapons."
							},
							{
								"-optional": "YES",
								"name": "Fighting Style: Defense",
								"text": "While you are wearing armor, you gain a +1 bonus to AC."
							},
							{
								"-optional": "YES",
								"name": "Fighting Style: Dueling",
								"text": "When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon."
							},
							{
								"-optional": "YES",
								"name": "Fighting Style: Great Weapon Fighting",
								"text": "When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll, even if the new roll is a 1 or a 2. The weapon must have the two-handed or versatile property for you to gain this benefit."
							},
							{
								"-optional": "YES",
								"name": "Fighting Style: Protection",
								"text": "When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield."
							},
							{
								"-optional": "YES",
								"name": "Fighting Style: Two-Weapon Fighting",
								"text": "When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack."
							},
							{
								"name": "Second Wind",
								"text": [
									"You have a limited well of stamina that you can draw on to protect yourself from harm. On your turn, you can use a bonus action to regain hit points equal to 1d10 + your fighter level.",
									"Once you use this feature, you must finish a short or long rest before you can use it again."
								]
							}
						]
					},
					{
						"-level": "2",
						"feature": {
							"name": "Action Surge",
							"text": [
								"Starting at 2nd level, you can push yourself beyond your normal limits for a moment. On your turn, you can take one additional action on top of your regular action and a possible bonus action.",
								"Once you use this feature, you must finish a short or long rest before you can use it again. Starting at 17th level, you can use it twice before a rest, but only once on the same turn."
							]
						}
					},
					{
						"-level": "3",
						"feature": [ {
							"name": "Martial Archetype",
							"text": "At 3rd level, you choose an archetype that you strive to emulate in your combat styles and techniques. Choose Champion, Battle Master, or Eldritch Knight, all detailed at the end of the class description. The archetype you choose grants you features at 3rd level and again at 7th, 10th, 15th, and 18th level."
						},
							{
								"-optional": "YES",
								"name": "Martial Archetype: Champion",
								"text": "The archetypal Champion focuses on the development of raw physical power honed to deadly perfection. Those who model themselves on this archetype combine rigorous training with physical excellence to deal devastating blows."
							},
							{
								"-optional": "YES",
								"name": "Martial Archetype: Battle Master",
								"text": "Those who emulate the archetypal Battle Master employ martial techniques passed down through generations. To a Battle Master, combat is an academic field, sometimes including subjects beyond battle such as weaponsmithing and calligraphy. Not every fighter absorbs the lessons of history, theory, and artistry that are reflected in the Battle Master archetype, but those who do are well-rounded fighters of great skill and knowledge."
							},
							{
								"-optional": "YES",
								"name": "Martial Archetype: Eldritch Knight",
								"text": "The archetypal Eldritch Knight combines the martial mastery common to all fighters with a careful study of magic. Eldritch Knights use magical techniques similar to those practiced by wizards. They focus their study on two of the eight schools of magic - abjuration and evocation. Abjuration spells grant an Eldritch Knight additional protection in battle, and evocation spells deal damage to many foes at once, extending the fighter's reach in combat. These knights learn a comparatively small number of spells, committing them to memory instead of keeping them in a spellbook."
							},
							{
								"-optional": "YES",
								"name": "Martial Archetype: Purple Dragon Knight (Banneret)",
								"text": [
									"Purple Dragon Knights are warriors who hail from the kingdom of Cormyr. Pledged to protect the crown, they take the fight against evil beyond the kingdom's borders. They are tasked with wandering the land as knights errant, relying on their judgment, bravery, and fidelity to guide them in defeating evildoers.",
									"A Purple Dragon Knight inspires greatness in others by committing brave deeds in battle. The mere presence of a knight in a hamlet is enough to cause some orcs and bandits to seek easier prey. A lone knight is a skilled warrior, but a knight leading a band of allies can transform even the most poorly equipped militia into a ferocious war band.",
									"A knight prefers to lead through deeds, not words. As a knight spearheads an attack, the knight's actions can awaken reserves of courage and conviction in allies that they never suspected they had."
								]
							},
							{
								"-optional": "YES",
								"name": "Purple Dragon Knight: Restriction: Knighthood",
								"text": [
									"Purple Dragon Knights are tied to a specific order of Cormyrean knighthood.",
									"Banneret serves as the generic name for this archetype if you use it in other campaign settings or to model warlords other than the Purple Dragon Knights."
								]
							},
							{
								"-optional": "YES",
								"name": "Purple Dragon Knight: Rallying Cry",
								"text": [
									"When you choose this archetype at 3rd level, you learn how to inspire your allies to fight on past their injuries.",
									"When you use your Second Wind feature, you can choose up to three creatures within 60 feet of you that are allied with you. Each one regains hit points equal to your fighter level, provided that the creature can see or hear you."
								]
							},
							{
								"-optional": "YES",
								"name": "Battle Master: Combat Superiority",
								"text": [
									"When you choose this archetype at 3rd level, you learn maneuvers that are fueled by special dice called superiority dice.",
									"Maneuvers",
									"You learn three maneuvers of your choice, which are listed in the Fighter (Battle Master) spell list, as well as optional features. Many maneuvers enhance an attack in some way. You can use only one maneuver per attack.",
									"You learn two additional maneuvers of your choice at 7th, 10th, and 15th level. Each time you learn new maneuvers, you can also replace one maneuver you know with a different one.",
									"Superiority Dice",
									"You have four superiority dice, which are d8s. A superiority die is expended when you use it. You regain all of your expended superiority dice when you finish a short or long rest.",
									"You gain another superiority die at 7th level and one more at 15th level.",
									"Saving Throws",
									"Some of your maneuvers require your target to make a saving throw to resist the maneuver's effects. The saving throw DC is calculated as follows: Maneuver save DC = 8 + proficiency bonus + your Strength or Dexterity modifier (your choice)"
								]
							},
							{
								"-optional": "YES",
								"name": "Battle Master: Student of War",
								"text": "At 3rd level, you gain proficiency with one type of artisan's tools of your choice."
							},
							{
								"-optional": "YES",
								"name": "Champion: Improved Critical",
								"text": "Beginning when you choose this archetype at 3rd level, your weapon attacks score a critical hit on a roll of 19 or 20."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Knight: Spellcasting",
								"text": [
									"When you reach 3rd level, you augment your martial prowess with the ability to cast spells. See chapter 10 for the general rules of spellcasting and chapter 11 for the wizard spell list.",
									"Cantrips",
									"You learn two cantrips of your choice from the wizard spell list. You learn an additional wizard cantrip of your choice at 10th level.",
									"Spell Slots",
									"The Eldritch Knight Spellcasting table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
									"For example, if you know the 1st-level spell shield and have a 1st-level and a 2nd-level spell slot available, you can cast shield using either slot.",
									"Spells Known of 1st-Level and Higher",
									"You know three 1st-level wizard spells of your choice, two of which you must choose from the abjuration and evocation spells on the wizard spell list.",
									"The Spells Known column of the Eldritch Knight Spellcasting table shows when you learn more wizard spells of 1st level or higher. Each of these spells must be an abjuration or evocation spell of your choice, and must be of a level for which you have spell slots. For instance, when you reach 7th level in this class, you can learn one new spell of 1st or 2nd level.",
									"The spells you learn at 8th, 14th, and 20th level can come from any school of magic.",
									"Whenever you gain a level in this class, you can replace one of the wizard spells you know with another spell of your choice from the wizard spell list. The new spell must be of a level for which you have spell slots, and it must be an abjuration or evocation spell, unless you're replacing the spell you gained at 8th, 14th, or 20th level.",
									"Spellcasting Ability",
									"Intelligence is your spellcasting ability for your wizard spells, since you learn your spells through study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.",
									"Spell save DC = 8 + your proficiency bonus + your Intelligence modifier",
									"Spell attack modifier = your proficiency bonus + your Intelligence modifier"
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Knight: Weapon Bond",
								"text": [
									"At 3rd level, you learn a ritual that creates a magical bond between yourself and one weapon. You perform the ritual over the course of 1 hour, which can be done during a short rest. The weapon must be within your reach throughout the ritual, at the conclusion of which you touch the weapon and forge the bond.",
									"Once you have bonded a weapon to yourself, you can't be disarmed of that weapon unless you are incapacitated. If it is on the same plane of existence, you can summon that weapon as a bonus action on your turn, causing it to teleport instantly to your hand.",
									"You can have up to two bonded weapons, but can summon only one at a time with your bonus action. If you attempt to bond with a third weapon, you must break the bond with one of the other two."
								]
							},
							{
								"-optional": "YES",
								"name": "Maneuver: Commander's Strike",
								"text": "When you take the Attack action on your turn, you can forgo one of your attacks and use a bonus action to direct one of your companions to strike. When you do so, choose a friendly creature who can see or hear you and expend one superiority die. That creature can immediately use its reaction to make one weapon attack, adding the superiority die to the attack's damage roll."
							},
							{
								"-optional": "YES",
								"name": "Maneuver: Disarming Attack",
								"text": "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to disarm the target, forcing it to drop one item of your choice that it's holding. You add the superiority die to the attack's damage roll, and the target must make a Strength saving throw. On a failed save, it drops the object you choose. The object lands at its feet."
							},
							{
								"-optional": "YES",
								"name": "Maneuver: Distracting Strike",
								"text": "When you hit a creature with a weapon attack, you can expend one superiority die to distract the creature, giving your allies an opening. You add the superiority die to the attack's damage roll. The next attack roll against the target by an attacker other than you has advantage if the attack is made before the start of your next turn."
							},
							{
								"-optional": "YES",
								"name": "Maneuver: Evasive Footwork",
								"text": "When you move, you can expend one superiority die, rolling the die and adding the number rolled to your AC until you stop moving."
							},
							{
								"-optional": "YES",
								"name": "Maneuver: Feinting Attack",
								"text": "You can expend one superiority die and use a bonus action on your turn to feint, choosing one creature within 5 feet of you as your target. You have advantage on your next attack roll this turn against that creature. If that attack hits, add the superiority die to the attack's damage roll."
							},
							{
								"-optional": "YES",
								"name": "Maneuver: Goading Attack",
								"text": "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to goad the target into attacking you. You add the superiority die to the attack's damage roll, and the target must make a Wisdom saving throw. On a failed save, the target has disadvantage on all attack rolls against targets other than you until the end of your next turn."
							},
							{
								"-optional": "YES",
								"name": "Maneuver: Lunging Attack",
								"text": "When you make a melee weapon attack on your turn, you can expend one superiority die to increase your reach for that attack by 5 feet. If you hit, you add the superiority die to the attack's damage roll."
							},
							{
								"-optional": "YES",
								"name": "Maneuver: Maneuvering Attack",
								"text": "When you hit a creature with a weapon attack, you can expend one superiority die to maneuver one of your comrades into a more advantageous position. You add the superiority die to the attack's damage roll, and you choose a friendly creature who can see or hear you. That creature can use its reaction to move up to half its speed without provoking opportunity attacks from the target of your attack."
							},
							{
								"-optional": "YES",
								"name": "Maneuver: Menacing Attack",
								"text": "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to frighten the target. You add the superiority die to the attack's damage roll, and the target must make a Wisdom saving throw. On a failed save, it is frightened of you until the end of your next turn."
							},
							{
								"-optional": "YES",
								"name": "Maneuver: Parry",
								"text": "When another creature damages you with a melee attack, you can use your reaction and expend one superiority die to reduce the damage by the number you roll on your superiority die + your Dexterity modifier"
							},
							{
								"-optional": "YES",
								"name": "Maneuver: Precision Attack",
								"text": "When you make a weapon attack roll against a creature, you can expend one superiority die to add it to the roll. You can use this maneuver before or after making the attack roll, but before any effects of the attack are applied."
							},
							{
								"-optional": "YES",
								"name": "Maneuver: Pushing Attack",
								"text": "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to drive the target back. You add the superiority die to the attack's damage roll, and if the target is Large or smaller, it must make a Strength saving throw. On a failed save, you push the target up to 15 feet away from you."
							},
							{
								"-optional": "YES",
								"name": "Maneuver: Rally",
								"text": "On your turn, you can use a bonus action and expend one superiority die to bolster the resolve of one of your companions. When you do so, choose a friendly creature who can see or hear you. That creature gains temporary hit points equal to the superiority die roll + your Charisma modifier."
							},
							{
								"-optional": "YES",
								"name": "Maneuver: Riposte",
								"text": "When a creature misses you with a melee attack, you can use your reaction and expend one superiority die to make a melee weapon attack against the creature. If you hit, you add the superiority die to the attack's damage roll."
							},
							{
								"-optional": "YES",
								"name": "Maneuver: Sweeping Attack",
								"text": "When you hit a creature with a melee weapon attack, you can expend one superiority die to attempt to damage another creature with the same attack. Choose another creature within 5 feet of the original target and within your reach. If the original attack roll would hit the second creature, it takes damage equal to the number you roll on your superiority die. The damage is of the same type dealt by the original attack."
							},
							{
								"-optional": "YES",
								"name": "Maneuver: Trip Attack",
								"text": "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to knock the target down. You add the superiority die to the attack's damage roll, and if the target is Large or smaller, it must make a Strength saving throw. On a failed save, you knock the target prone."
							}
						]
					},
					{
						"-level": "4",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 4th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "5",
						"feature": {
							"name": "Extra Attack",
							"text": [
								"Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn.",
								"The number of attacks increases to three when you reach 11th level in this class and to four when you reach 20th level in this class."
							]
						}
					},
					{
						"-level": "6",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 6th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "7",
						"feature": [ {
							"-optional": "YES",
							"name": "Battle Master: Additional Maneuvers",
							"text": "At 7th level, you learn two additional maneuvers of your choice, which are listed in the Fighter (Battle Master) spell list, as well as optional features at level 3."
						},
							{
								"-optional": "YES",
								"name": "Battle Master: Additional Superiority Die",
								"text": "You gain another superiority die at 7th level."
							},
							{
								"-optional": "YES",
								"name": "Battle Master: Know Your Enemy",
								"text": [
									"If you spend at least 1 minute observing or interacting with another creature outside combat, you can learn certain information about its capabilities compared to your own. The DM tells you if the creature is your equal, superior, or inferior in regard to two of the following characteristics of your choice:",
									"• Strength score",
									"• Dexterity score",
									"• Constitution score",
									"• Armor Class",
									"• Current hit points",
									"• Total class levels (if any)",
									"• Fighter class levels (if any)"
								]
							},
							{
								"-optional": "YES",
								"name": "Champion: Remarkable Athlete",
								"text": [
									"Starting at 7th level, you can add half your proficiency bonus (round up) to any Strength, Dexterity, or Constitution check you make that doesn't already use your proficiency bonus.",
									"In addition, when you make a running long jump, the distance you can cover increases by a number of feet equal to your Strength modifier."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Knight: War Magic",
								"text": "Beginning at 7th level, when you use your action to cast a cantrip, you can make one weapon attack as a bonus action."
							},
							{
								"-optional": "YES",
								"name": "Purple Dragon Knight: Royal Envoy",
								"text": [
									"A Purple Dragon Knight serves as an envoy of the Cormyrean crown. Knights of high standing are expected to conduct themselves with grace.",
									"At 7th level, you gain proficiency in the Persuasion skill. If you are already proficient in it, you gain proficiency in one of the following skills of your choice: Animal Handling, Insight, Intimidation, or Performance.",
									"Your proficiency bonus is doubled for any ability check you make that uses Persuasion. You receive this benefit regardless of the skill proficiency you gain from this feature."
								],
								"proficiency": "Persuasion",
								"modifier": {
									"-category": "skills",
									"#text": "Persuasion+%0"
								}
							}
						]
					},
					{
						"-level": "8",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 8th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "9",
						"feature": {
							"name": "Indomitable",
							"text": [
								"Beginning at 9th level, you can reroll a saving throw that you fail. If you do so, you must use the new roll, and you can't use this feature again until you finish a long rest.",
								"You can use this feature twice between long rests starting at 13th level and three times between long rests starting at 17th level."
							]
						}
					},
					{
						"-level": "10",
						"feature": [ {
							"-optional": "YES",
							"name": "Battle Master: Additional Maneuvers",
							"text": "At 10th level, you learn two additional maneuvers of your choice, which are listed in the Fighter (Battle Master) spell list, as well as optional features at level 3."
						},
							{
								"-optional": "YES",
								"name": "Battle Master: Improved Combat Superiority (d10)",
								"text": "At 10th level, your superiority dice turn into d10s."
							},
							{
								"-optional": "YES",
								"name": "Champion: Additional Fighting Style",
								"text": "At 10th level, you can choose a second option from the Fighting Style class feature."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Knight: Additional Cantrip",
								"text": "You learn an additional wizard cantrip of your choice at 10th level."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Knight: Eldritch Strike",
								"text": "At 10th level, you learn how to make your weapon strikes undercut a creature's resistance to your spells. When you hit a creature with a weapon attack, that creature has disadvantage on the next saving throw it makes against a spell you cast before the end of your next turn."
							},
							{
								"-optional": "YES",
								"name": "Purple Dragon Knight: Inspiring Surge",
								"text": [
									"Starting at 10th level, when you use your Action Surge feature, you can choose one creature within 60 feet of you that is allied with you. That creature can make one melee or ranged weapon attack with its reaction, provided that it can see or hear you.",
									"Starting at 17th level, you can choose two allies within 60 feet of you, rather than one."
								]
							}
						]
					},
					{
						"-level": "11",
						"feature": {
							"name": "Extra Attack (2)",
							"text": "At 11th level, you can attack three times whenever you take the Attack action on your turn."
						}
					},
					{
						"-level": "12",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 12th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "13",
						"feature": {
							"name": "Indomitable (two uses)",
							"text": "At 13th level, you can use Indomitable twice between long rests."
						}
					},
					{
						"-level": "14",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 14th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "15",
						"feature": [ {
							"-optional": "YES",
							"name": "Battle Master: Additional Maneuvers",
							"text": "At 15th level, you learn two additional maneuvers of your choice, which are listed in the Fighter (Battle Master) spell list, as well as optional features at level 3."
						},
							{
								"-optional": "YES",
								"name": "Battle Master: Additional Superiority Die",
								"text": "You gain another superiority die at 15th level."
							},
							{
								"-optional": "YES",
								"name": "Battle Master: Relentless",
								"text": "Starting at 15th level, when you roll initiative and have no superiority dice remaining, you regain 1 superiority die."
							},
							{
								"-optional": "YES",
								"name": "Champion: Superior Critical",
								"text": "Starting at 15th level, your weapon attacks score a critical hit on a roll of 18-20."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Knight: Arcane Charge",
								"text": "At 15th level, you gain the ability to teleport up to 30 feet to an unoccupied space you can see when you use your Action Surge. You can teleport before or after the additional action."
							},
							{
								"-optional": "YES",
								"name": "Purple Dragon Knight: Bulwark",
								"text": "Beginning at 15th level, you can extend the benefit of your Indomitable feature to an ally. When you decide to use Indomitable to reroll an Intelligence, a Wisdom, or a Charisma saving throw and you aren't incapacitated, you can choose one ally within 60 feet of you that also failed its saving throw against the same effect. If that creature can see or hear you, it can reroll its saving throw and must use the new roll."
							}
						]
					},
					{
						"-level": "16",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 16th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "17",
						"feature": [ {
							"name": "Action Surge (two uses)",
							"text": "At 17th level, you can use Action Surge twice before a rest, but only once on the same turn."
						},
							{
								"name": "Indomitable (three uses)",
								"text": "At 17th level, you can use Indomitable three times between long rests."
							}
						]
					},
					{
						"-level": "18",
						"feature": [ {
							"-optional": "YES",
							"name": "Battle Master: Improved Combat Superiority (d12)",
							"text": "At 18th level, your superiority dice turn into d12s."
						},
							{
								"-optional": "YES",
								"name": "Champion: Survivor",
								"text": "At 18th level, you attain the pinnacle of resilience in battle. At the start of each of your turns, you regain hit points equal to 5 + your Constitution modifier if you have no more than half of your hit points left. You don't gain this benefit if you have 0 hit points."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Knight: Improved War Magic",
								"text": "Starting at 18th level, when you use your action to cast a spell, you can make one weapon attack as a bonus action."
							}
						]
					},
					{
						"-level": "19",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 19th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "20",
						"feature": {
							"name": "Extra Attack (3)",
							"text": "At 20th level, you can attack four times whenever you take the Attack action on your turn."
						}
					},
					{
						"-level": "1",
						"feature": [ {
							"-optional": "YES",
							"name": "Fighting Style: Close Quarters Shooter (UA)",
							"text": [
								"When making a ranged attack while you are within 5 feet of a hostile creature, you do not have disadvantage on the attack roll. Your ranged attacks ignore half cover and three-quarters cover against targets within 30 feet of you. You have a +1 bonus to attack rolls on ranged attacks.",
								"This fighting style is from Unearthed Arcana: Light, Dark, Underdark!, and as such may not be allowed in your game. Consult your DM before selecting this option."
							]
						},
							{
								"-optional": "YES",
								"name": "Fighting Style: Mariner (UA)",
								"text": [
									"As long as you are not wearing heavy armor or using a shield, you have a swimming speed and a climbing speed equal to your normal speed, and you gain a +1 bonus to AC.",
									"This fighting style is from Unearthed Arcana: Waterborne Adventures, and as such may not be allowed in your game. Consult your DM before selecting this option."
								]
							},
							{
								"-optional": "YES",
								"name": "Fighting Style: Tunnel Fighter (UA)",
								"text": [
									"As a bonus action, you can enter a defensive stance that lasts until the start of your next turn. While in your defensive stance, you can make opportunity attacks without using your reaction, and you can use your reaction to make a melee attack against a creature that moves more than 5 feet while within your reach.",
									"This fighting style is from Unearthed Arcana: Light, Dark, Underdark!, and as such may not be allowed in your game. Consult your DM before selecting this option."
								]
							}
						]
					},
					{
						"-level": "3",
						"feature": [ {
							"-optional": "YES",
							"name": "Martial Archetype: Cavalier (UA)",
							"text": [
								"The archetypal Cavalier excels at mounted combat. Usually born to nobility and raised in a royal court, a Cavalier is equally at home leading a cavalry charge or exchanging witty repartee at a state dinner.",
								"This Martial Archetype is from Unearthed Arcana: Kits of Old, and as such may not be allowed in your game. Consult your DM before selecting this option."
							]
						},
							{
								"-optional": "YES",
								"name": "Martial Archetype: Scout (UA)",
								"text": [
									"The archetypal Scout excels at finding safe passage through dangerous regions. Scouts usually favor light armor and ranged weapons, but they are comfortable using heavier gear when faced with intense fighting.",
									"This Martial Archetype is from Unearthed Arcana: Kits of Old, and as such may not be allowed in your game. Consult your DM before selecting this option."
								]
							},
							{
								"-optional": "YES",
								"name": "Martial Archetype: Monster Hunter (UA)",
								"text": [
									"As an archetypal Monster Hunter, you are an expert at defeating supernatural threats. Typically mentored by an older, experienced Monster Hunter, you learn to overcome a variety of unnatural defenses and attacks, including those of undead, lycanthropes, and other creatures of horror.",
									"This Martial Archetype is from Unearthed Arcana: Gothic heroes, and as such may not be allowed in your game. Consult your DM before selecting this option."
								]
							},
							{
								"-optional": "YES",
								"name": "Martial Archetype: Arcane Archer (UA)",
								"text": [
									"An Arcane Archer studies a unique elven method of archery that weaves magic into attacks to produce supernatural effects. Among elves, Arcane Archers are some of their most elite warriors. These archers stand watch over the fringes of elven domains, keeping a keen eye out for trespassers and using magic-infused arrows to defeat monsters and invaders before they can reach elven settlements. Over the centuries, the methods of these elf archers have been learned by members of other races who can also balance arcane aptitude with archery.",
									"This Martial Archetype is from Unearthed Arcana: Fighter Martial Archetypes, and as such may not be allowed in your game. Consult your DM before selecting this option."
								]
							},
							{
								"-optional": "YES",
								"name": "Martial Archetype: Knight (UA)",
								"text": [
									"The Knight is a colossus on the battlefield who can shrug off attacks and protect allies from harm. Knights fight from the saddle when they can, and in combat they are expected to seek out and lock down the mightiest of the enemy's forces. On adventures, they are the armored bulwark that strives to keep the rest of the party safe.",
									"This Martial Archetype is from Unearthed Arcana: Fighter Martial Archetypes, and as such may not be allowed in your game. Consult your DM before selecting this option."
								]
							},
							{
								"-optional": "YES",
								"name": "Martial Archetype: Samurai (UA)",
								"text": [
									"The Samurai is a fighter who draws on an implacable fighting spirit to overcome enemies. A Samurai's willpower is nearly unbreakable, and the enemies in a Samurai's path have two choices: yield or die fighting.",
									"This Martial Archetype is from Unearthed Arcana: Fighter Martial Archetypes, and as such may not be allowed in your game. Consult your DM before selecting this option."
								]
							},
							{
								"-optional": "YES",
								"name": "Martial Archetype: Sharpshooter (UA)",
								"text": [
									"The Sharpshooter is a master of ranged combat. An excellent sniper and eagle-eyed scout, this fighter is a perilous foe who can defeat an entire war band so long as they are kept at range.",
									"This Martial Archetype is from Unearthed Arcana: Fighter Martial Archetypes, and as such may not be allowed in your game. Consult your DM before selecting this option."
								]
							},
							{
								"-optional": "YES",
								"name": "Cavalier: Bonus Proficiencies",
								"text": "When you choose this archetype at 3rd level, you gain proficiency in two of the following skills of your choice: Animal Handling, Insight, Performance, or Persuasion. You can choose to gain one tool proficiency in place of one skill proficiency."
							},
							{
								"-optional": "YES",
								"name": "Cavalier: Born to the Saddle",
								"text": "At 3rd level, you have advantage on saving throws made to avoid falling off your mount. If you fall off your mount, you always land on your feet if you are capable of taking actions. Mounting or dismounting a creature costs you only 5 feet of movement, rather than half your speed."
							},
							{
								"-optional": "YES",
								"name": "Cavalier: Combat Superiority",
								"text": [
									"At 3rd level, you gain a set of abilities that are fueled by special dice called superiority dice.",
									"Superiority Dice:",
									"You have four superiority dice, which are d8s. A superiority die is expended when you use it. You regain all of your expended superiority dice when you finish a short or long rest.",
									"You gain another superiority die at 7th level and one more at 15th level.",
									"Using Superiority Dice:",
									"You can expend superiority dice to gain a number of different benefits.",
									"• When you make a check to influence or control a creature you are riding, you can expend one superiority die to add it to the check. You apply this bonus after making the check but before learning if it was successful.:",
									"• When you make a weapon attack against a creature, you can expend one superiority die to add it to the attack roll. You can use this ability before or after making the attack roll, but before any of the effects of the attack are applied.",
									"• When you make an attack with a lance while mounted, you can expend one superiority die to add it to your damage roll. In addition, the target of the attack must make a Strength saving throw (DC 8 + your proficiency bonus + your Strength modifier) or be knocked prone.:",
									"• If either you or your mount is hit by an attack while you are mounted, you can expend one superiority die as a reaction, adding the number rolled to your or your mount's AC. If the attack still hits, you or your mount take half damage from it."
								]
							},
							{
								"-optional": "YES",
								"name": "Scout: Bonus Proficiencies",
								"text": "When you choose this archetype at 3rd level, you gain proficiency in three of the following skills of your choice: Acrobatics, Athletics, Investigation, Medicine, Nature, Perception, Stealth, or Survival. You can choose to gain proficiency with thieves' tools in place of one skill choice."
							},
							{
								"-optional": "YES",
								"name": "Scout: Combat Superiority",
								"text": [
									"At 3rd level, you gain a set of abilities that are fueled by special dice called superiority dice.",
									"Superiority Dice:",
									"You have four superiority dice, which are d8s. A superiority die is expended when you use it. You regain all of your expended superiority dice when you finish a long or short rest. You gain another superiority die at 7th level and one more at 15th level.",
									"Using Superiority Dice:",
									"You can expend superiority dice to gain a number of different benefits.",
									"• When you make a check that allows you to apply your proficiency in Athletics, Nature, Perception, Stealth, or Survival, you can expend one superiority die to bolster the check. Add half the number rolled on the superiority die (rounding up) to your check. You apply this bonus after making the check but before learning if it was successful.",
									"• When you make a weapon attack against a creature, you can expend one superiority die to add it to the attack roll. You can use this ability before or after making the attack roll, but before any of the effects of the attack are applied.",
									"• If you are hit by an attack while wearing light or medium armor, you can expend one superiority die as a reaction, adding the number rolled to your AC. If the attack still hits, you take half damage from it."
								]
							},
							{
								"-optional": "YES",
								"name": "Scout: Natural Explorer",
								"text": [
									"You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, swamp, or the Underdark. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you're proficient in.",
									"While traveling for an hour or more in your favored terrain, you gain the following benefits.",
									"• Difficult terrain doesn't slow your group's travel.",
									"• Your group can't become lost except by magical means.",
									"• Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.",
									"• If you are traveling alone, you can move stealthily at a normal pace.",
									"• When you forage, you find twice as much food as you normally would.",
									"• While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.",
									"You choose additional favored terrain types at 7th and 15th level."
								]
							},
							{
								"-optional": "YES",
								"name": "Monster Hunter: Bonus Proficiencies",
								"text": "When you choose this archetype at 3rd level, you gain proficiency in two of the following skills of your choice: Arcana, History, Insight, Investigation, Nature, or Perception. You can gain proficiency with a tool of your choice in place of one skill choice."
							},
							{
								"-optional": "YES",
								"name": "Monster Hunter: Combat Superiority",
								"text": [
									"When you choose this archetype at 3rd level, you gain a set of abilities that are fueled by special dice called superiority dice. ",
									"Superiority Dice:",
									"You have four superiority dice, which are d8s. A superiority die is expended when you use it. You regain all of your expended superiority dice when you finish a short or long rest.",
									"You gain another superiority die at 7th level and one more at 15th level. ",
									"Using Superiority Dice:",
									"You can expend superiority dice to gain a number of different benefits: ",
									"• When you make a weapon attack against a creature, you can expend one superiority die to add it to the attack roll. You can use this ability before or after making the attack roll, but before any of the effects of the attack are applied. ",
									"• When you damage a creature with a weapon attack, you can expend one superiority die to add it to the damage roll. You can use this ability after rolling damage. If the attack causes the target to make a Constitution saving throw to maintain concentration, it has disadvantage on that save. ",
									"• When you make an Intelligence, a Wisdom, or a Charisma saving throw, you can expend one superiority die to add it to the roll. You can use this feature only before you learn if the save succeeded or failed. ",
									"• When you make a Wisdom (Perception) check to detect a hidden creature or object, or a Wisdom (Insight) check to determine if someone is lying to you, you can expend one superiority die to add it to the roll. You can use this feature after seeing the total but before learning if you succeeded or failed."
								]
							},
							{
								"-optional": "YES",
								"name": "Monster Hunter: Hunter's Mysticism",
								"text": [
									"At 3rd level, your study of the supernatural gives you a limited ability to use magic. You can cast detect magic as a ritual. You can cast protection from evil and good, but you cannot cast it again with this feature until you finish a long rest. Wisdom is your spellcasting ability for these spells.",
									"In addition, you gain the ability to speak one of the following languages of your choice: Abyssal, Celestial, or Infernal."
								]
							},
							{
								"-optional": "YES",
								"name": "Arcane Archer: Arcane Arrow",
								"text": [
									"When you choose this archetype at 3rd level, you learn to channel magic into your attacks with a longbow or shortbow. ",
									"Create Magic Arrow: ",
									"As a bonus action on your turn, you can create one magic arrow in your hand. The arrow lasts until the end of the turn or until it hits or misses a target. You can fire the arrow from a shortbow or longbow. The arrow is a magic weapon that deals an additional 2d6 force damage on a hit. ",
									"You have two uses of this feature, and you regain all expended uses of it when you finish a short or long rest. ",
									"Arcane Shot: ",
									"When you gain this feature, you learn two Arcane Shot options of your choice (see the Arcane Shots section below). Whenever you create a magic arrow with this feature, you can apply the benefits of one of your Arcane Shot options to that arrow. ",
									"You gain an additional Arcane Shot option of your choice at 7th, 10th, 15th, and 18th level."
								]
							},
							{
								"-optional": "YES",
								"name": "Arcane Archer: Archer's Lore",
								"text": [
									"At 3rd level, you learn a few skills relating to the typical duties of an Arcane Archer. You learn to understand magical theory and develop survival skills for wandering the wilds. ",
									"You gain proficiency in two of the following skills of your choice: Arcana, Athletics, Nature, Perception, Stealth, and Survival."
								]
							},
							{
								"-optional": "YES",
								"name": "Knight: Born to the Saddle",
								"text": "Starting at 3rd level, mounting or dismounting a creature costs you only 5 feet of movement, rather than half your speed. In addition, you have advantage on saving throws made to avoid falling off your mount. If you fall off it, you can automatically land on your feet if you aren't incapacitated and you fall less than 10 feet."
							},
							{
								"-optional": "YES",
								"name": "Knight: Implacable Mark",
								"text": [
									"At 3rd level, you excel at foiling attacks and protecting your allies by menacing your foes. When you hit a creature with a melee weapon attack, the target is marked by you until the end of your next turn. A creature ignores this effect if the creature can't be frightened. ",
									"The marked target has disadvantage on any attack roll against a creature other than you or someone else who marked it. ",
									"If a target marked by you is within 5 feet of you on its turn and it moves at least 1 foot or makes an attack that suffers disadvantage from this feature, you can make one melee weapon attack against it using your reaction. This attack roll has advantage, and if it hits, the attack's weapon deals extra damage to the target equal to your fighter level. ",
									"You can make this special attack even if you have already expended your reaction this round, but not if you have already used your reaction this turn. You can make this attack three times, and you regain all expended uses of it when you finish a short or long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Samurai: Fighting Spirit",
								"text": [
									"Starting at 3rd level, the might of your willpower can shield you and help you strike true. As a bonus action on your turn, you can give yourself two benefits: advantage on all attack rolls and resistance to bludgeoning, piercing, and slashing damage. These benefits last until the end of your next turn.",
									" You can use this feature three times. You regain all expended uses of it when you finish a short or long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Sharpshooter: Steady Aim",
								"text": [
									"Beginning when you choose this archetype at 3rd level, your aim becomes deadly. As a bonus action on your turn, you can take careful aim at a creature you can see that is within range of a ranged weapon you're wielding. Until the end of this turn, your ranged attacks with that weapon gain two benefits against the target: ",
									"• The attacks ignore half and three-quarters cover. ",
									"• On each hit, the weapon deals additional damage to the target equal to 2 + half your fighter level. ",
									"You can use this feature three times. You regain all expended uses of it when you finish a short or long rest."
								]
							}
						]
					},
					{
						"-level": "7",
						"feature": [ {
							"-optional": "YES",
							"name": "Cavalier: Ferocious Charger",
							"text": "At 7th level, you gain additional benefits when you use superiority dice to increase your damage when you attack with a lance. You can expend up to two superiority dice on the attack, adding both to the damage roll. If you spend two dice, the target has disadvantage on its Strength saving throw to avoid being knocked prone."
						},
							{
								"-optional": "YES",
								"name": "Monster Hunter: Monster Slayer",
								"text": "At 7th level, whenever you expend superiority dice to add to a damage roll, you can expend up to two dice instead of just one, adding both to the roll. Both dice are expended as normal. If the target of your attack is an aberration, a fey, a fiend, or an undead, you deal maximum damage with both dice, instead of rolling them."
							},
							{
								"-optional": "YES",
								"name": "Arcane Archer: Conjure Arrows",
								"text": "At 7th level, you learn a minor but useful magical trick. As an action, you can conjure 20 nonmagical arrows. The arrows appear in your hand or in a container, such as a quiver, on your body. The arrows remain for 10 minutes or until you use this feature again; they then vanish."
							},
							{
								"-optional": "YES",
								"name": "Arcane Archer: Arcane Shot Option (3rd)",
								"text": "You gain an additional Arcane Shot option."
							},
							{
								"-optional": "YES",
								"name": "Knight: Noble Cavalry",
								"text": "At 7th level, you gain proficiency in two of the following skills of your choice: Animal Handling, History, Insight, Persuasion, or Religion. Alternatively, you learn one language of your choice."
							},
							{
								"-optional": "YES",
								"name": "Samurai: Elegant Courtier",
								"text": [
									"Starting at 7th level, your discipline and attention to detail allow you to excel in social situations that require strict adherence to etiquette. You can add your Wisdom modifier to any Charisma check you make to persuade or please a noble or anyone else of high social station. ",
									"You also gain proficiency in the History, Insight, or Persuasion skill (choose one). Alternatively, you learn one language of your choice."
								]
							},
							{
								"-optional": "YES",
								"name": "Sharpshooter: Careful Eyes",
								"text": [
									"Starting at 7th level, you excel at picking out hidden enemies and other threats. You can take the Search action as a bonus action.",
									"You also gain proficiency in the Perception, Investigation, or Survival skill (choose one)."
								]
							}
						]
					},
					{
						"-level": "10",
						"feature": [ {
							"-optional": "YES",
							"name": "Cavalier: Improved Combat Superiority",
							"text": "At 10th level, your superiority dice turn into d10s. At 18th level, they turn into d12s."
						},
							{
								"-optional": "YES",
								"name": "Scout: Improved Combat Superiority",
								"text": "At 10th level, your superiority dice turn into d10s. At 18th level, they turn into d12s."
							},
							{
								"-optional": "YES",
								"name": "Monster Hunter: Improved Combat Superiority",
								"text": "At 10th level, your superiority dice turn into d10s. At 18th level, they turn into d12s."
							},
							{
								"-optional": "YES",
								"name": "Arcane Archer: Arcane Shot Option (4th)",
								"text": "You gain an additional Arcane Shot option."
							},
							{
								"-optional": "YES",
								"name": "Knight: Hold the Line",
								"text": "At 10th level, you master the ability to harass and slow your enemies. As a reaction when a creature moves at least 1 foot within 5 feet of you, you can make one melee weapon attack against that creature. If you hit, the attack's weapon deals extra damage to the target equal to half your fighter level, and the target's speed is reduced to 0 until the end of this turn."
							},
							{
								"-optional": "YES",
								"name": "Samurai: Unbreakable Will",
								"text": [
									"At 10th level, your superior willpower allows you to shrug off mind-assaulting effects. You gain proficiency in Wisdom saving throws. If you already have this proficiency, you gain proficiency in Intelligence or Charisma saving throws (choose one).",
									"Source: Unearthed Arcana: Fighter Martial Archetypes, p. 3"
								],
								"proficiency": "wisdom"
							},
							{
								"-optional": "YES",
								"name": "Sharpshooter: Close-Quarters Shooting",
								"text": [
									"At 10th level, you learn to handle yourself in close combat. Making a ranged attack roll while within 5 feet of an enemy doesn't impose disadvantage on your roll. ",
									"In addition, if you hit a creature within 5 feet of you with a ranged attack on your turn, that creature can't take reactions until the end of this turn."
								]
							}
						]
					},
					{
						"-level": "15",
						"feature": [ {
							"-optional": "YES",
							"name": "Cavalier: Relentless",
							"text": "Starting at 15th level, when you roll initiative and have no superiority dice remaining, you regain 1 superiority die."
						},
							{
								"-optional": "YES",
								"name": "Scout: Relentless",
								"text": "Starting at 15th level, when you roll initiative and have no superiority dice remaining, you regain 1 superiority die."
							},
							{
								"-optional": "YES",
								"name": "Monster Hunter: Relentless",
								"text": "Starting at 15th level, when you roll initiative and have no superiority dice remaining, you regain 1 superiority die."
							},
							{
								"-optional": "YES",
								"name": "Arcane Archer: Ever-Ready Arrow",
								"text": "Starting at 15th level, you can conjure forth a magic-infused arrow more often than before. One minute after expending your last remaining use of Arcane Arrow, you regain one use of it."
							},
							{
								"-optional": "YES",
								"name": "Arcane Archer: Arcane Shot Option (5th)",
								"text": "You gain an additional Arcane Shot option."
							},
							{
								"-optional": "YES",
								"name": "Knight: Rapid Strike",
								"text": "Starting at 15th level, you learn to trade accuracy for swift strikes. If you have advantage on a weapon attack against a target on your turn, you can forgo that advantage to immediately make an additional weapon attack against the same target as a bonus action."
							},
							{
								"-optional": "YES",
								"name": "Samurai: Rapid Strike",
								"text": "Starting at 15th level, you learn to trade accuracy for swift strikes. If you have advantage on a weapon attack against a target on your turn, you can forgo that advantage to immediately make an additional weapon attack against the same target as a bonus action."
							},
							{
								"-optional": "YES",
								"name": "Sharpshooter: Rapid Strike",
								"text": "Starting at 15th level, you learn to trade accuracy for swift strikes. If you have advantage on a weapon attack against a target on your turn, you can forgo that advantage to immediately make an additional weapon attack against the same target as a bonus action."
							}
						]
					},
					{
						"-level": "18",
						"feature": [ {
							"-optional": "YES",
							"name": "Arcane Archer: Deadly Arrow",
							"text": "At 18th level, your Arcane Arrow's bonus damage increases to 4d6 force damage."
						},
							{
								"-optional": "YES",
								"name": "Arcane Archer: Arcane Shot Option (6th)",
								"text": "You gain an additional Arcane Shot option."
							},
							{
								"-optional": "YES",
								"name": "Cavalier: Improved Combat Superiority",
								"text": "At 18th level, your superiority dice turn into d12s."
							},
							{
								"-optional": "YES",
								"name": "Scout: Improved Combat Superiority",
								"text": "At 18th level, your superiority dice turn into d12s."
							},
							{
								"-optional": "YES",
								"name": "Knight: Defender's Blade",
								"text": [
									"At 18th level, you respond to danger with extraordinary vigilance. You can use your reaction for an opportunity attack even if you have already expended your reaction this round, but not if you have already used your reaction this turn. ",
									"In addition, you gain a +1 bonus to AC while wearing heavy armor."
								]
							},
							{
								"-optional": "YES",
								"name": "Samurai: Strength Before Death",
								"text": [
									"Starting at 18th level, your fighting spirit can delay the grasp of death. If you take damage that would reduce you to 0 hit points, you can delay that damage and immediately take a bonus turn, interrupting the current turn. You don't take the damage until the bonus turn ends. It is possible to do things, such as gaining resistance, that change how much of that damage you take. ",
									"Once you use this feature, you can't use it again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Sharpshooter: Snap Shot",
								"text": "Starting at 18th level, you are ever ready to spring into action. If you take the Attack action on your first turn of a combat, you can make one additional ranged weapon attack as part of that action."
							}
						]
					}
				]
			},
			{
				"name": "Monk",
				"hd": "8",
				"proficiency": "Strength, Dexterity",
				"spellAbility": "Wisdom",
				"autolevel": [ {
					"-level": "1",
					"feature": [ {
						"name": "Starting Proficiencies",
						"text": [
							"You are proficient with the following items, in addition to any proficiencies provided by your race or background.",
							"Armor: none",
							"Weapons: simple weapons, shortswords",
							"Tools: any one type of artisan's tools or any one musical instrument of your choice",
							"Skills: Choose two from Acrobatics, Athletics, History, Insight, Religion, and Stealth"
						]
					},
						{
							"name": "Starting Equipment",
							"text": [
								"You start with the following items, plus anything provided by your background.",
								"• (a) a shortsword or (b) any simple weapon",
								"• (a) a dungeoneer's pack or (b) an explorer's pack",
								"• 10 darts",
								"Alternatively, you may start with 5d4 gp to buy your own equipment."
							]
						}
					]
				},
					{
						"-level": "1",
						"feature": [ {
							"name": "Unarmored Defense",
							"text": "Beginning at 1st level, while you are wearing no armor and not wielding a shield, your AC equals 10 + your Dexterity modifier + your Wisdom modifier."
						},
							{
								"name": "Martial Arts",
								"text": [
									"Your practice of martial arts gives you mastery of combat styles that use unarmed strikes and monk weapons, which are shortswords and any simple melee weapons that don't have the two-handed or heavy property.",
									"You gain the following benefits while you are unarmed or wielding only monk weapons and you aren't wearing armor or wielding a shield.",
									"• You can use Dexterity instead of Strength for the attack and damage rolls of your unarmed strikes and monk weapons.",
									"• You can roll a d4 in place of the normal damage of your unarmed strike or monk weapon.",
									"• When you use the Attack action with an unarmed strike or a monk weapon on your turn, you can make one unarmed strike as a bonus action. For example, if you take the Attack action and attack with a quarterstaff, you can also make an unarmed strike as a bonus action, assuming you haven't already taken a bonus action this turn.",
									"Certain monasteries use specialized forms of the monk weapons. For example, you might use a club that is two lengths of wood connected by a short chain (called a nunchaku) or a sickle with a shorter, straighter blade (called a kama)."
								]
							}
						]
					},
					{
						"-level": "2",
						"feature": [ {
							"name": "Ki",
							"text": [
								"Starting at 2nd level, your training allows you to harness the mystic energy of ki. Your access to this energy is represented by a number of ki points. Your monk level determines the number of points you have, as shown in the Ki Points column of the Monk table.",
								"You can spend these points to fuel various ki features. You start knowing three such features: Flurry of Blows, Patient Defense, and Step of the Wind. You learn more ki features as you gain levels in this class.",
								"When you spend a ki point, it is unavailable until you finish a short or long rest, at the end of which you draw all of your expended ki back into yourself. You must spend at least 30 minutes of the rest meditating to regain your ki points.",
								"Some of your ki features require your target to make a saving throw to resist the feature's effects. The saving throw DC is calculated as follows: Ki save DC = 8 + your proficiency bonus + your Wisdom modifier"
							]
						},
							{
								"name": "Flurry of Blows",
								"text": "Immediately after you take the Attack action on your turn, you can spend 1 ki point to make two unarmed strikes as a bonus action."
							},
							{
								"name": "Patient Defense",
								"text": "You can spend 1 ki point to take the Dodge action as a bonus action on your turn."
							},
							{
								"name": "Step of the Wind",
								"text": "You can spend 1 ki point to take the Disengage or Dash action as a bonus action on your turn, and your jump distance is doubled for the turn."
							},
							{
								"name": "Unarmored Movement",
								"text": [
									"Starting at 2nd level, your speed increases by 10 feet while you are not wearing armor or wielding a shield. This bonus increases when you reach certain monk levels, as shown in the Monk table.",
									"At 9th level, you gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move."
								],
								"modifier": {
									"-category": "bonus",
									"#text": "speed +10"
								}
							}
						]
					},
					{
						"-level": "3",
						"feature": [ {
							"name": "Monastic Tradition",
							"text": "When you reach 3rd level, you commit yourself to a monastic tradition: the Way of the Open Hand, the Way of Shadow, or the Way of the Four Elements. Your tradition grants you features at 3rd level and again at 6th, 11th, and 17th level."
						},
							{
								"-optional": "YES",
								"name": "Monastic Tradition: Way of Shadow",
								"text": "Monks of the Way of Shadow follow a tradition that values stealth and subterfuge. These monks might be called ninjas or shadowdancers, and they serve as spies and assassins. Sometimes the members of a ninja monastery are family members, forming a clan sworn to secrecy about their arts and missions. Other monasteries are more like thieves' guilds, hiring out their services to nobles, rich merchants, or anyone else who can pay their fees. Regardless of their methods, the heads of these monasteries expect the unquestioning obedience of their students."
							},
							{
								"-optional": "YES",
								"name": "Monastic Tradition: Way of the Open Hand",
								"text": "Monks of the Way of the Open Hand are the ultimate masters of martial arts combat, whether armed or unarmed. They learn techniques to push and trip their opponents, manipulate ki to heal damage to their bodies, and practice advanced meditation that can protect them from harm."
							},
							{
								"-optional": "YES",
								"name": "Monastic Tradition: Way of the Four Elements",
								"text": [
									"You follow a monastic tradition that teaches you to harness the elements. When you focus your ki, you can align yourself with the forces of creation and bend the four elements to your will, using them as an extension of your body. Some members of this tradition dedicate themselves to a single element, but others weave the elements together.",
									"Many monks of this tradition tattoo their bodies with representations of their ki powers, commonly imagined as coiling dragons, but also as phoenixes, fish, plants, mountains, and cresting waves."
								]
							},
							{
								"-optional": "YES",
								"name": "Monastic Tradition: Way of the Long Death",
								"text": "Monks of the Way of the Long Death are obsessed with the meaning and mechanics of dying. They capture creatures and prepare elaborate experiments to capture, record, and understand the moments of their demise. They use this knowledge to guide their understanding of martial arts, yielding a deadly fighting style."
							},
							{
								"-optional": "YES",
								"name": "Monastic Tradition: Way of the Sun Soul",
								"text": "Monks of the Way of the Sun Soul learn to channel their own life energy into searing bolts of light. They teach that meditation can unlock the ability to unleash the indomitable light shed by the soul of every living creature."
							},
							{
								"-optional": "YES",
								"name": "Way of Shadow: Shadow Arts",
								"text": "You can use your ki to duplicate the effects of certain spells. As an action, you can spend 2 ki points to cast darkness, darkvision, pass without trace, or silence, without providing material components. Additionally, you gain the minor illusion cantrip if you don't already know it."
							},
							{
								"-optional": "YES",
								"name": "Way of the Open Hand: Open Hand Technique",
								"text": [
									"You can manipulate your enemy's ki when you harness your own. Whenever you hit a creature with one of the attacks granted by your Flurry of Blows, you can impose one of the following effects on that target.",
									"• It must succeed on a Dexterity saving throw or be knocked prone.",
									"• It must make a Strength saving throw. If it fails, you can push it up to 15 feet away from you.",
									"• It can't take reactions until the end of your next turn."
								]
							},
							{
								"-optional": "YES",
								"name": "Way of the Four Elements: Disciple of the Elements",
								"text": [
									"You learn magical disciplines that harness the power of the four elements. A discipline requires you to spend ki points each time you use it.",
									"You know the Elemental Attunement discipline and one other elemental discipline of your choice. You learn one additional elemental discipline of your choice at 6th, 11th, and 17th level.",
									"Whenever you learn a new elemental discipline, you can also replace one elemental discipline that you already know with a different discipline.",
									"Casting Elemental Spells. Some elemental disciplines allow you to cast spells. To cast one of these spells, you use its casting time and other rules, but you don't need to provide material components for it.",
									"Once you reach 5th level in this class, you can spend additional ki points to increase the level of an elemental discipline spell that you cast, provided that the spell has an enhanced effect at a higher level, as burning hands does. The spell's level increases by 1 for each additional ki point you spend. For example, if you are a 5th-level monk and use Sweeping Cinder Strike to cast burning hands, you can spend 3 ki points to cast it as a 2nd-level spell (the discipline's base cost of 2 ki points plus 1).",
									"The maximum number of ki points you can spend to cast a spell in this way (including its base ki point cost and any additional ki points you spend to increase its level) is determined by your monk level. At 5th level, you may spend up to 3 ki points; this increases to 4 ki points at 9th level, 5 at 13th level, and 6 at 17th level."
								]
							},
							{
								"name": "Deflect Missiles",
								"text": [
									"Starting at 3rd level, you can use your reaction to deflect or catch the missile when you are hit by a ranged weapon attack. When you do so, the damage you take from the attack is reduced by 1d 10 + your Dexterity modifier + your monk level.",
									"If you reduce the damage to 0, you can catch the missile if it is small enough for you to hold in one hand and you have at least one hand free. If you catch a missile in this way, you can spend 1 ki point to make a ranged attack (range 20 feet/60 feet) with the weapon or piece of ammunition you just caught, as part of the same reaction. You make this attack with proficiency, regardless of your weapon proficiencies, and the missile counts as a monk weapon for the attack."
								]
							},
							{
								"-optional": "YES",
								"name": "Way of the Long Death: Touch of Death",
								"text": "Starting when you choose this tradition at 3rd level, your study of death allows you to extract vitality from another creature as it nears its demise. When you reduce a creature within 5 feet of you to 0 hit points, you gain temporary hit points equal to your Wisdom modifier + your monk level (minimum of 1 temporary hit point)."
							},
							{
								"-optional": "YES",
								"name": "Way of the Sun Soul: Radiant Sun Bolt",
								"text": [
									"Starting when you choose this tradition at 3rd level, you can hurl searing bolts of magical radiance.",
									"You gain a ranged spell attack that you can use with the Attack action. The attack has a range of 30 feet. You are proficient with it, and you add your Dexterity modifier to its attack and damage rolls. Its damage is radiant, and its damage die is a d4. This die changes as you gain monk levels — to a d6 at 5th level, a d8 at 11th level, and a d10 at 17th level.",
									"When you use the Attack action on your turn to use this special attack, you can spend 1 ki point to make two additional attacks with it as a bonus action."
								]
							}
						]
					},
					{
						"-level": "4",
						"feature": [ {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 4th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						},
							{
								"name": "Slow Fall",
								"text": "Beginning at 4th level, you can use your reaction when you fall to reduce any falling damage you take by an amount equal to five times your monk level."
							}
						]
					},
					{
						"-level": "5",
						"feature": [ {
							"name": "Extra Attack",
							"text": "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
						},
							{
								"name": "Stunning Strike",
								"text": "Starting at 5th level, you can interfere with the flow of ki in an opponent's body. When you hit another creature with a melee weapon attack, you can spend 1 ki point to attempt a stunning strike. The target must succeed on a Constitution saving throw or be stunned until the end of your next turn."
							},
							{
								"name": "Martial Arts (1d6)",
								"text": "You can now roll a d6 in the place of the normal damage of your unarmed strike or monk weapon."
							}
						]
					},
					{
						"-level": "6",
						"feature": [ {
							"name": "Ki-Empowered Strikes",
							"text": "Starting at 6th level, your unarmed strikes count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage."
						},
							{
								"name": "Unarmed Movement (+ 15 ft.)",
								"text": "The bonus to your speed increases to 15 feet while you are not wearing armor or wielding a shield.",
								"modifier": {
									"-category": "bonus",
									"#text": "speed +5"
								}
							},
							{
								"-optional": "YES",
								"name": "Way of the Four Elements: Extra Elemental Discipline",
								"text": [
									"You learn one additional elemental discipline of your choice. You should know 2 elemental disciplines, as well as Elemental Attunement.",
									"Whenever you learn a new elemental discipline, you can also replace one elemental discipline that you already know with a different discipline."
								]
							},
							{
								"-optional": "YES",
								"name": "Way of Shadow: Shadow Step",
								"text": "You gain the ability to step from one shadow into another. When you are in dim light or darkness, as a bonus action you can teleport up to 60 feet to an unoccupied space you can see that is also in dim light or darkness. You then have advantage on the first melee attack you make before the end of the turn."
							},
							{
								"-optional": "YES",
								"name": "Way of the Open Hand: Wholeness of Body",
								"text": "You gain the ability to heal yourself. As an action, you can regain hit points equal to three times your monk level. You must finish a long rest before you can use this feature again."
							},
							{
								"-optional": "YES",
								"name": "Way of the Long Death: Hour of Reaping",
								"text": "At 6th level, you gain the ability to unsettle or terrify those around you as an action, for your soul has been touched by the shadow of death. When you take this action, each creature within 30 feet of you that can see you must succeed on a Wisdom saving throw or be frightened of you until the end of your next turn."
							},
							{
								"-optional": "YES",
								"name": "Way of the Sun Soul: Searing Arc Strike",
								"text": [
									"At 6th level, you gain the ability to channel your ki into searing waves of energy. Immediately after you take the Attack action on your turn, you can spend 2 ki points to cast the 1st-level spell burning hands as a bonus action.",
									"You can spend additional ki points to cast burning hands as a higher level spell. Each additional ki point you spend increases the spell's level by 1. The maximum number of ki points (2 plus any additional points) that you can spend on the spell equals half your monk level (round down)."
								]
							}
						]
					},
					{
						"-level": "7",
						"feature": [ {
							"name": "Stillness of Mind",
							"text": "Starting at 7th level, you can use your action to end one effect on yourself that is causing you to be charmed or frightened."
						},
							{
								"name": "Evasion",
								"text": "At 7th level, your instinctive agility lets you dodge out of the way of certain area effects, such as a blue dragon's lightning breath or a fireball spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail."
							}
						]
					},
					{
						"-level": "8",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 8th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "9",
						"feature": {
							"name": "Unarmored Movement (Vertical Surfaces)",
							"text": "You gain the ability to move along vertical surfaces and across liquids on your turn without falling during the move."
						}
					},
					{
						"-level": "10",
						"feature": [ {
							"name": "Purity of Body",
							"text": "At 10th level, your mastery of the ki flowing through you makes you immune to disease and poison."
						},
							{
								"name": "Unarmed Movement (+ 20 ft.)",
								"text": "The bonus to your speed increases to 20 feet while you are not wearing armor or wielding a shield.",
								"modifier": {
									"-category": "bonus",
									"#text": "speed +5"
								}
							}
						]
					},
					{
						"-level": "11",
						"feature": [ {
							"-optional": "YES",
							"name": "Way of Shadow: Cloak of Shadows",
							"text": "You have learned to become one with the shadows. When you are in an area of dim light or darkness, you can use your action to become invisible. You remain invisible until you make an attack, cast a spell, or are in an area of bright light."
						},
							{
								"-optional": "YES",
								"name": "Way of the Open Palm: Tranquility",
								"text": [
									"Beginning at 11th level, you can enter a special meditation that surrounds you with an aura of peace. At the end of a long rest, you gain the effect of a sanctuary spell that lasts until the start of your next long rest (the spell can end early as normal). The saving throw DC for the spell equals 8 + your Wisdom modifier + your Proficiency bonus.",
									"Sanctuary gives this effect: You ward a creature within range against attack. Until the spell ends, any creature who targets the warded creature with an attack or a harmful spell must first make a Wisdom saving throw. On a failed save, the creature must choose a new target or lose the attack or spell. This spell doesn't protect the warded creature from area effects, such as the explosion of a fireball.",
									"If the warded creature makes an attack or casts a spell that affects an enemy creature, this spell ends."
								]
							},
							{
								"name": "Martial Arts (1d8)",
								"text": "You can now roll a d8 in the place of the normal damage of your unarmed strike or monk weapon."
							},
							{
								"-optional": "YES",
								"name": "Way of the Four Elements: Extra Elemental Discipline",
								"text": [
									"You learn one additional elemental discipline of your choice. You should know 3 elemental disciplines, as well as Elemental Attunement.",
									"Whenever you learn a new elemental discipline, you can also replace one elemental discipline that you already know with a different discipline."
								]
							},
							{
								"-optional": "YES",
								"name": "Way of the Long Death: Mastery of Death",
								"text": "Beginning at 11th level, you use your familiarity with death to escape its grasp. When you are reduced to 0 hit points, you can expend 1 ki point (no action required) to have 1 hit point instead."
							},
							{
								"-optional": "YES",
								"name": "Way of the Sun Soul: Searing Sunburst",
								"text": [
									"At 11th level, you gain the ability to create an orb of light that erupts into a devastating explosion. As an action, you create an orb and hurl it at a point you choose within 150 feet, where it erupts into a sphere of radiant light for a brief but deadly instant.",
									"Each creature in that 20-foot radius sphere must succeed on a Constitution saving throw or take 2d6 radiant damage. A creature doesn't need to make the save if the creature is behind total cover that is opaque.",
									"You can increase the sphere's damage by spending ki points. Each point you spend, up to a maximum of 3, increases the damage by 2d6."
								]
							}
						]
					},
					{
						"-level": "12",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 12th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "13",
						"feature": {
							"name": "Tongue of the Sun and Moon",
							"text": "Starting at 13th level, you learn to touch the ki of other minds so that you understand all spoken languages. Moreover, any creature that can understand a language can understand what you say."
						}
					},
					{
						"-level": "14",
						"feature": [ {
							"name": "Diamond Soul",
							"text": [
								"Beginning at 14th level, your mastery of ki grants you proficiency in all saving throws.",
								"Additionally, whenever you make a saving throw and fail, you can spend 1 ki point to reroll it and take the second result."
							],
							"proficiency": "constitution, intelligence, wisdom, charisma"
						},
							{
								"name": "Unarmed Movement (+ 25 ft.)",
								"text": "The bonus to your speed increases to 25 feet while you are not wearing armor or wielding a shield.",
								"modifier": {
									"-category": "bonus",
									"#text": "speed +5"
								}
							}
						]
					},
					{
						"-level": "15",
						"feature": {
							"name": "Timeless Body",
							"text": "At 15th level, your ki sustains you so that you suffer none of the frailty of old age, and you can't be aged magically. You can still die of old age, however. In addition, you no longer need food or water."
						}
					},
					{
						"-level": "16",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 16th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "17",
						"feature": [ {
							"name": "Martial Arts (1d10)",
							"text": "You can now roll a d10 in the place of the normal damage of your unarmed strike or monk weapon."
						},
							{
								"-optional": "YES",
								"name": "Way of Shadow: Opportunist",
								"text": "At 17th level, you can exploit a creature's momentary distraction when it is hit by an attack. Whenever a creature within 5 feet of you is hit by an attack made by a creature other than you, you can use your reaction to make a melee attack against that creature."
							},
							{
								"-optional": "YES",
								"name": "Way of the Open Palm: Quivering Palm",
								"text": [
									"You gain the ability to set up lethal vibrations in someone's body. When you hit a creature with an unarmed strike, you can spend 3 ki points to start these imperceptible vibrations, which last for a number of days equal to your monk level. The vibrations are harmless unless you use your action to end them. To do so, you and the target must be on the same plane of existence. When you use this action, the creature must make a Constitution saving throw. If it fails, it is reduced to 0 hit points. If it succeeds, it takes 10d10 necrotic damage.",
									"You can have only one creature under the effect of this feature at a time. You can choose to end the vibrations harmlessly without using an action."
								]
							},
							{
								"-optional": "YES",
								"name": "Way of the Four Elements: Extra Elemental Discipline",
								"text": [
									"You learn one additional elemental discipline of your choice. You should know 4 elemental disciplines, as well as Elemental Attunement.",
									"Whenever you learn a new elemental discipline, you can also replace one elemental discipline that you already know with a different discipline."
								]
							},
							{
								"-optional": "YES",
								"name": "Way of the Long Death: Touch of the Long Death",
								"text": "Starting at 17th level, your touch can channel the energy of death into a creature. As an action, you touch one creature within 5 feet of you, and you expend 1 to 10 ki points. The target must make a Constitution saving throw, and it takes 2d10 necrotic damage per ki point spent on a failed save, or half as much damage on a successful one."
							},
							{
								"-optional": "YES",
								"name": "Way of the Sun Soul: Sun Shield",
								"text": [
									"At 17th level, you become wreathed in a luminous aura. You shed bright light in a 30-foot radius and dim light for an additional 30 feet. You can extinguish or restore the light as a bonus action.",
									"If a creature hits you with a melee attack while this light shines, you can use your reaction to deal radiant damage to the creature. The radiant damage equals 5 + your Wisdom modifier."
								]
							}
						]
					},
					{
						"-level": "18",
						"feature": [ {
							"name": "Empty Body",
							"text": [
								"Beginning at 18th level, you can use your action to spend 4 ki points to become invisible for 1 minute. During that time, you also have resistance to all damage but force damage.",
								"Additionally, you can spend 8 ki points to cast the astral projection spell, without needing material components. When you do so, you can't take any other creatures with you."
							]
						},
							{
								"name": "Unarmed Movement (+ 30 ft.)",
								"text": "The bonus to your speed increases to 30 feet while you are not wearing armor or wielding a shield.",
								"modifier": {
									"-category": "bonus",
									"#text": "speed +5"
								}
							}
						]
					},
					{
						"-level": "19",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 19th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "20",
						"feature": {
							"name": "Perfect Soul",
							"text": "At 20th level, when you roll for initiative and have no ki points remaining, you regain 4 ki points."
						}
					},
					{
						"-level": "3",
						"feature": [ {
							"-optional": "YES",
							"name": "Monastic Tradition: Way of the Kensei (UA)",
							"text": [
								"Monks of the Way of Kensei train relentlessly with their weapons, to the point that the weapon becomes like an extension of the body. A kensei sees a weapon in much the same way a painter regards a brush or a writer sees parchment, ink, and quill. A sword or bow is a tool used to express the beauty and elegance of the martial arts. That such mastery makes a kensei a peerless warrior is but a side effect of intense devotion, practice, and study.",
								"",
								"This Monastic Tradition is from Unearthed Arcana: Monk Monastic Traditions, and as such may not be allowed in your game. Consult your DM before choosing this option."
							]
						},
							{
								"-optional": "YES",
								"name": "Way of the Kensei: Path of the Kensei",
								"text": [
									"When you choose this tradition at 3rd level, you learn to extend your knowledge of the martial arts beyond the standard array of monk weapons. ",
									"You gain the following benefits: ",
									"• You gain proficiency with three martial weapons of your choice. A martial weapon is considered a kensei weapon for you if you're proficient with it. ",
									"• Whenever you wield a kensei weapon, you choose whether to use Dexterity or Strength for the attack and damage rolls of the weapon, and you choose whether to use your Martial Arts damage die in place of the weapon's damage die. ",
									"• When you take the Attack action on your turn and hit a target with a kensei weapon, you can use a bonus action to pummel the target, dealing an additional 1d4 bludgeoning damage to that target and to any other target you hit with the weapon as part of the Attack. ",
									"• If you make an unarmed strike as part of the Attack action on your turn and are holding a kensei weapon, you can use that weapon to defend yourself. You gain a +2 bonus to AC until the start of your next turn while you are not incapacitated and the weapon is in your hand."
								]
							},
							{
								"-optional": "YES",
								"name": "Monastic Tradition: Way of Tranquility (UA)",
								"text": [
									"Monks of the Way of Tranquility see violence as a last resort. They use diplomacy, mercy, and understanding to resolve conflicts. If pushed, though, they are capable warriors who can bring an end to the unjust or cruel folk who refuse to listen to reason. When adventuring, these monks make excellent diplomats. They are also skilled in the healing arts, and can preserve their allies in the face of daunting foes.",
									"",
									"This Monastic Tradition is from Unearthed Arcana: Monk Monastic Traditions, and as such may not be allowed in your game. Consult your DM before choosing this option."
								]
							},
							{
								"-optional": "YES",
								"name": "Way of Tranquility: Path of Tranquility",
								"text": [
									"When you choose this tradition at 3rd level, you can become an island of calm in even the most chaotic of situations. With this feature, you can cast the sanctuary spell on yourself, no material component required, and it lasts up to 8 hours. Its saving throw DC equals 8 + your proficiency bonus + your Wisdom modifier. A creature that succeeds on the save is immune to this effect for 1 hour. ",
									"Once you cast the spell in this way, you can't do so again for 1 minute."
								]
							},
							{
								"-optional": "YES",
								"name": "Way of Tranquility: Healing Hands",
								"text": [
									"Your mystical touch can heal wounds. Starting at 3rd level, you have a pool of magical healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your monk level x 10. ",
									"As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in the pool. ",
									"Instead of healing the creature, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Healing Hands, expending hit points separately for each one. ",
									"When you use your Flurry of Blows, you can replace one of the unarmed strikes with a use of this feature. ",
									"This feature has no effect on undead and constructs."
								]
							}
						]
					},
					{
						"-level": "6",
						"feature": [ {
							"-optional": "YES",
							"name": "Way of the Kensei: One with the Blade",
							"text": [
								"At 6th level, you extend your ki into the weapons you hold, granting you the following benefits. ",
								"Magic Weapons: ",
								"Your attacks with your kensei weapons count as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage. ",
								"Precise Strike: ",
								"You can focus your attention on a single target in battle to understand and overcome its defenses. As a bonus action, pick one creature you can see within 30 feet of you. The next weapon attack you make against that creature during the current turn adds double your proficiency bonus to the attack roll, rather than your normal proficiency bonus. Once you use this ability, you can't use it again until you finish a short or long rest."
							]
						},
							{
								"-optional": "YES",
								"name": "Way of Tranquility: Emissary of Peace",
								"text": [
									"At 6th level, you gain the ability to diffuse violent situations. Whenever you make a Charisma check to calm violent emotions or to counsel peace, you have advantage on the roll. You must make this entreaty in good faith; it doesn't apply if proficiency in the Deception or Intimidation skill applies to your check. ",
									"You also gain proficiency in the Performance or Persuasion skill (choose one)."
								]
							}
						]
					},
					{
						"-level": "11",
						"feature": [ {
							"-optional": "YES",
							"name": "Way of the Kensei: Sharpen the Blade",
							"text": "At 11th level, you gain the ability to augment your weapons with the strength of your ki. As a bonus action, you can expend up to 3 ki points to grant a weapon you touch a bonus to attack and damage rolls while you wield it. The bonus equals the number of ki points you spent. This bonus lasts for 1 minute."
						},
							{
								"-optional": "YES",
								"name": "Way of Tranquility: Douse the Flames of War",
								"text": [
									"At 11th level, you gain the ability to temporarily extinguish a creature's violent impulses. As an action, you can touch a creature, and it must make a Wisdom saving throw with a DC equal to 8 + your proficiency bonus + your Wisdom modifier. The target automatically succeeds if it's missing any of its hit points. If the target fails the save, it can't attack for 1 minute. During that time, it also can't cast spells that deal damage or that force someone to make a saving throw. ",
									"This effect ends if the target is attacked, takes damage, or is forced to make a saving throw or if the target witnesses any of those things happening to its allies."
								]
							}
						]
					},
					{
						"-level": "17",
						"feature": [ {
							"-optional": "YES",
							"name": "Way of the Kensei: Unerring Accuracy",
							"text": "At 17th level, your mastery of weapons grants you extraordinary accuracy. On each of your turns, you can reroll one weapon attack roll you make that misses."
						},
							{
								"-optional": "YES",
								"name": "Way of Tranquility: Anger of a Gentle Soul",
								"text": [
									"At 17th level, you gain the ability to visit vengeance on someone who fells others. If you see a creature reduce another creature to 0 hit points, you can use your reaction to grant yourself a bonus to all damage rolls against the aggressor until the end of your next turn. The bonus equals your monk level. ",
									"Once you use this ability, you can't use it again until you finish a short or long rest."
								]
							}
						]
					}
				]
			},
			{
				"name": "Paladin",
				"hd": "10",
				"proficiency": "Wisdom, Charisma",
				"spellAbility": "Charisma",
				"autolevel": [ {
					"-level": "1",
					"slots": "0,0,0,0,0,0"
				},
					{
						"-level": "2",
						"slots": "0,2,0,0,0,0"
					},
					{
						"-level": "3",
						"slots": "0,3,0,0,0,0"
					},
					{
						"-level": "4",
						"slots": "0,3,0,0,0,0"
					},
					{
						"-level": "5",
						"slots": "0,4,2,0,0,0"
					},
					{
						"-level": "6",
						"slots": "0,4,2,0,0,0"
					},
					{
						"-level": "7",
						"slots": "0,4,3,0,0,0"
					},
					{
						"-level": "8",
						"slots": "0,4,3,0,0,0"
					},
					{
						"-level": "9",
						"slots": "0,4,3,2,0,0"
					},
					{
						"-level": "10",
						"slots": "0,4,3,2,0,0"
					},
					{
						"-level": "11",
						"slots": "0,4,3,3,0,0"
					},
					{
						"-level": "12",
						"slots": "0,4,3,3,0,0"
					},
					{
						"-level": "13",
						"slots": "0,4,3,3,1,0"
					},
					{
						"-level": "14",
						"slots": "0,4,3,3,1,0"
					},
					{
						"-level": "15",
						"slots": "0,4,3,3,2,0"
					},
					{
						"-level": "16",
						"slots": "0,4,3,3,2,0"
					},
					{
						"-level": "17",
						"slots": "0,4,3,3,3,1"
					},
					{
						"-level": "18",
						"slots": "0,4,3,3,3,1"
					},
					{
						"-level": "19",
						"slots": "0,4,3,3,3,2"
					},
					{
						"-level": "20",
						"slots": "0,4,3,3,3,2"
					},
					{
						"-level": "1",
						"feature": [ {
							"name": "Starting Proficiencies",
							"text": [
								"You are proficient with the following items, in addition to any proficiencies provided by your race or background.",
								"Armor: light armor, medium armor, heavy armor, shields",
								"Weapons: simple weapons, martial weapons",
								"Tools: none",
								"Skills: Choose two from Athletics, Insight, Intimidation, Medicine, Persuasion, and Religion"
							]
						},
							{
								"name": "Starting Equipment",
								"text": [
									"You start with the following items, plus anything provided by your background.",
									"• (a) a martial weapon and a shield or (b) two martial weapons",
									"• (a) five javelins or (b) any simple melee weapon",
									"• (a) a priest's pack or (b) an explorer's pack",
									"• Chain mail and a holy symbol",
									"Alternatively, you may start with 5d4 x 10 gp to buy your own equipment."
								]
							}
						]
					},
					{
						"-level": "1",
						"feature": [ {
							"name": "Divine Sense",
							"text": [
								"The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces. Until the end of your next turn, you know the location of any celestial, fiend, or undead within 60 feet of you that is not behind total cover. You know the type (celestial, fiend, or undead) of any being whose presence you sense, but not its identity (the vampire Count Strahd von Zarovich, for instance). Within the same radius, you also detect the presence of any place or object that has been consecrated or desecrated, as with the hallow spell.",
								"You can use this feature a number of times equal to 1 + your Charisma modifier. When you finish a long rest, you regain all expended uses."
							]
						},
							{
								"name": "Lay on Hands",
								"text": [
									"Your blessed touch can heal wounds. You have a pool of healing power that replenishes when you take a long rest. With that pool, you can restore a total number of hit points equal to your paladin level x 5.",
									"As an action, you can touch a creature and draw power from the pool to restore a number of hit points to that creature, up to the maximum amount remaining in your pool.",
									"Alternatively, you can expend 5 hit points from your pool of healing to cure the target of one disease or neutralize one poison affecting it. You can cure multiple diseases and neutralize multiple poisons with a single use of Lay on Hands, expending hit points separately for each one.",
									"This feature has no effect on undead and constructs."
								]
							}
						]
					},
					{
						"-level": "2",
						"feature": [ {
							"name": "Divine Smite",
							"text": "Starting at 2nd level, when you hit a creature with a melee weapon attack, you can expend one spell slot to deal radiant damage to the target, in addition to the weapon's damage. The extra damage is 2d8 for a 1st-level spell slot, plus 1d8 for each spell level higher than 1st, to a maximum of 5d8. The damage increases by 1d8 if the target is an undead or a fiend."
						},
							{
								"-optional": "YES",
								"name": "Fighting Style: Close Quarters Shooter",
								"text": "When making a ranged attack while you are within 5 feet of a hostile creature, you do not have disadvantage on the attack roll. Your ranged attacks ignore half cover and three-quarters cover against targets within 30 feet of you. You have a +1 bonus to attack rolls on ranged attacks."
							},
							{
								"-optional": "YES",
								"name": "Fighting Style: Defense",
								"text": "While you are wearing armor, you gain a +1 bonus to AC."
							},
							{
								"-optional": "YES",
								"name": "Fighting Style: Dueling",
								"text": "When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon."
							},
							{
								"-optional": "YES",
								"name": "Fighting Style: Great Weapon Fighting",
								"text": "When you roll a 1 or 2 on a damage die for an attack you make with a melee weapon that you are wielding with two hands, you can reroll the die and must use the new roll. The weapon must have the two-handed or versatile property for you to gain this benefit."
							},
							{
								"-optional": "YES",
								"name": "Fighting Style: Mariner",
								"text": "As long as you are not wearing heavy armor or using a shield, you have a swimming speed and a climbing speed equal to your normal speed, and you gain a +1 bonus to AC."
							},
							{
								"-optional": "YES",
								"name": "Fighting Style: Protection",
								"text": "When a creature you can see attacks a target other than you that is within 5 feet of you, you can use your reaction to impose disadvantage on the attack roll. You must be wielding a shield."
							},
							{
								"-optional": "YES",
								"name": "Fighting Style: Tunnel Fighter",
								"text": "As a bonus action, you can enter a defensive stance that lasts until the start of your next turn. While in your defensive stance, you can make opportunity attacks without using your reaction, and you can use your reaction to make a melee attack against a creature that moves more than 5 feet while within your reach."
							},
							{
								"name": "Spellcasting",
								"text": [
									"By 2nd level, you have learned to draw on divine magic through meditation and prayer to cast spells as a cleric does. See chapter 10 for the general rules of spellcasting and chapter 11 for the paladin spell list.",
									"Preparing and Casting Spells",
									"The Paladin table shows how many spell slots you have to cast your spells. To cast one of your paladin spells of 1st level or higher, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
									"You prepare the list of paladin spells that are available for you to cast, choosing from the paladin spell list. When you do so, choose a number of paladin spells equal to your Charisma modifier + half your paladin level, rounded down (minimum of one spell). The spells must be of a level for which you have spell slots.",
									"For example, if you are a 5th-level paladin, you have four 1st-level and two 2nd-level spell slots. With a Charisma of 14, your list of prepared spells can include four spells of 1st or 2nd level, in any combination. If you prepare the 1st-level spell cure wounds, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.",
									"You can change your list of prepared spells when you finish a long rest. Preparing a new list of paladin spells requires time spent in prayer and meditation: at least 1 minute per spell level for each spell on your list.",
									"Spellcasting Ability",
									"Charisma is your spellcasting ability for your paladin spells, since their power derives from the strength of your convictions. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a paladin spell you cast and when making an attack roll with one.",
									"Spell save DC = 8 + your proficiency bonus + your Charisma modifier",
									"Spell attack modifier = your proficiency bonus + your Charisma modifier",
									"Spellcasting Focus",
									"You can use a holy symbol (found in chapter 5) as a spellcasting focus for your paladin spells."
								]
							}
						]
					},
					{
						"-level": "3",
						"feature": [ {
							"name": "Divine Health",
							"text": "By 3rd level, the divine magic flowing through you makes you immune to disease."
						},
							{
								"name": "Sacred Oath",
								"text": [
									"When you reach 3rd level, you swear the oath that binds you as a paladin forever. Up to this time you have been in a preparatory stage, committed to the path but not yet sworn to it. Now you choose the Oath of Devotion, the Oath of the Ancients, the Oath of the Crown, or the Oath of Vengeance, all detailed at the end of the c1ass description.",
									"Your choice grants you features at 3rd level and again at 7th, 15th, and 20th level. Those features include oath spells and the Channel Divinity feature."
								]
							},
							{
								"-optional": "YES",
								"name": "Sacred Oath: Oath of the Ancients",
								"text": [
									"The Oath of the Ancients is as old as the race of elves and the rituals of the druids. Sometimes called fey knights, green knights, or horned knights, paladins who swear this oath cast their lot with the side of the light in the cosmic struggle against darkness because they love the beautiful and life-giving things of the world, not necessarily because they believe in principles of honor, courage, and justice. They adorn their armor and clothing with images of growing things - leaves, antlers, or flowers - to reflect their commitment to preserving life and light in the world.",
									"Tenets of the Ancients",
									"The tenets of the Oath of the Ancients have been preserved for uncounted centuries. This oath emphasizes the principles of good above any concerns of law or chaos. Its four central principles are simple.",
									"Kindle the Light. Through your acts of mercy, kindness, and forgiveness, kindle the light of hope in the world, beating back despair.",
									"Shelter the Light. Where there is good, beauty, love, and laughter in the world, stand against the wickedness that would swallow it. Where life flourishes, stand against the forces that would render it barren.",
									"Preserve Your Own Light. Delight in song and laughter, in beauty and art. If you allow the light to die in your own heart, you can't preserve it in the world.",
									"Be the Light. Be a glorious beacon for all who live in despair. Let the light of your joy and courage shine forth in all your deeds."
								]
							},
							{
								"-optional": "YES",
								"name": "Sacred Oath: Oath of Devotion",
								"text": [
									"The Oath of Devotion binds a paladin to the loftiest ideals of justice, virtue, and order. Sometimes called cavaliers, white knights, or holy warriors, these paladins meet the ideal of the knight in shining armor, acting with honor in pursuit of justice and the greater good. They hold themselves to the highest standards of conduct, and some, for better or worse, hold the rest of the world to the same standards. Many who swear this oath are devoted to gods of law and good and use their gods' tenets as the measure of their devotion. They hold angels - the perfect servants of good - as their ideals, and incorporate images of angelic wings into their helmets or coats of arms.",
									"Tenets of Devotion",
									"Though the exact words and strictures of the Oath of Devotion vary, paladins of this oath share these tenets.",
									"Honesty. Don't lie or cheat. Let your word be your promise.",
									"Courage. Never fear to act, though caution is wise.",
									"Compassion. Aid others, protect the weak, and punish those who threaten them. Show mercy to your foes, but temper it with wisdom.",
									"Honor. Treat others with fairness, and let your honorable deeds be an example to them. Do as much good as possible while causing the least amount of harm.",
									"Duty. Be responsible for your actions and their consequences, protect those entrusted to your care, and obey those who have just authority over you."
								]
							},
							{
								"-optional": "YES",
								"name": "Sacred Oath: Oath of Vengeance",
								"text": [
									"The Oath of Vengeance is a solemn commitment to punish those who have committed a grievous sin. When evil forces slaughter helpless villagers, when an entire people turns against the will of the gods, when a thieves' guild grows too violent and powerful, when a dragon rampages through the countryside - at times like these, paladins arise and swear an Oath of Vengeance to set right that which has gone wrong. To these paladins - sometimes called avengers or dark knights - their own purity is not as important as delivering justice.",
									"Tenets of Vengeance: The tenets of the Oath of Vengeance vary by paladin, but all the tenets revolve around punishing wrongdoers by any means necessary. Paladins who uphold these tenets are willing to sacrifice even their own righteousness to mete out justice upon those who do evil, so the paladins are often neutral or lawful neutral in alignment. The core principles of the tenets are brutally simple.",
									"Fight the Greater Evil. Faced with a choice of fighting my sworn foes or combating a lesser evil. I choose the greater evil.",
									"No Mercy for the Wicked. Ordinary foes might win my mercy, but my sworn enemies do not.",
									"By Any Means Necessary. My qualms can't get in the way of exterminating my foes.",
									"Restitution. If my foes wreak ruin on the world, it is because I failed to stop them. I must help those harmed by their misdeeds."
								]
							},
							{
								"-optional": "YES",
								"name": "Sacred Oath: Oathbreaker",
								"text": [
									"An Oathbreaker is a paladin who breaks his or her sacred oaths to pursue some dark ambition or serve an evil power. Whatever light burned in the paladin's heart has been extinguished. Only darkness remains.",
									"A paladin must be evil and at least 3rd level to become an Oathbreaker. The paladin replaces the features specific to his or her Sacred Oath with Oathbreaker features."
								]
							},
							{
								"-optional": "YES",
								"name": "Sacred Oath: Oath of the Crown",
								"text": [
									"The Oath of the Crown is sworn to the ideals of civilization, be it the spirit of a nation, fealty to a sovereign, or service to a deity of law and rulership. The paladins who swear this oath dedicate themselves to serving society and, in particular, the laws that hold society together. These paladins are the watchful guardians on the walls, standing against the chaotic tides of barbarism that threaten to tear down all that civilization has built, and are commonly known as guardians, exemplars, or sentinels. Often, paladins who swear this oath are members of an order of knighthood in service to a nation or sovereign, and undergo their oath as part of their admission to the order's ranks.",
									"Tenets of the Crown:",
									"The tenets of the Oath of the Crown are often set by the sovereign to which their oath is sworn, but generally emphasize the following tenets.",
									"Law: The law is paramount. It is the mortar that holds the stones of civilization together, and it must be respected.",
									"Loyalty: Your word is your bond. Without loyalty, oaths and laws are meaningless.",
									"Courage: You must be willing to do what needs to be done for the sake of order, even in the face of overwhelming odds. If you don't act, then who will?",
									"Responsibility: You must deal with the consequences of your actions, and you are responsible for fulfilling your duties and obligations. "
								]
							},
							{
								"-optional": "YES",
								"name": "Oath of the Ancients Channel Divinity: Nature's Wrath",
								"text": "You can use your Channel Divinity to invoke primeval forces to ensnare a foe. As an action, you can cause spectral vines to spring up and reach for a creature within 10 feet of you that you can see. The creature must succeed on a Strength or Dexterity saving throw (its choice) or be restrained. While restrained by the vines, the creature repeats the saving throw at the end of each of its turns. On a success, it frees itself and the vines vanish."
							},
							{
								"-optional": "YES",
								"name": "Oath of the Ancients Channel Divinity: Turn the Faithless",
								"text": [
									"You can use your Channel Divinity to utter ancient words that are painful for fey and fiends to hear. As an action, you present your holy symbol, and each fey or fiend within 30 feet of you that can hear you must make a Wisdom saving throw. On a failed save, the creature is turned for 1 minute or until it takes damage.",
									"A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action.",
									"If the creature's true form is concealed by an illusion, shapeshifting, or other effect, that form is revealed while it is turned."
								]
							},
							{
								"-optional": "YES",
								"name": "Oath of the Ancients: Oath Spells",
								"text": [
									"You gain oath spells at the paladin levels listed.",
									"3rd - ensnaring strike, speak with animals",
									"5th - moonbeam, misty step",
									"9th - plant growth, protection from energy",
									"13th - ice storm, stoneskin",
									"17th - commune with nature, tree stride"
								]
							},
							{
								"-optional": "YES",
								"name": "Oath of Devotion Channel Divinity: Sacred Weapon",
								"text": [
									"As an action, you can imbue one weapon that you are holding with positive energy, using your Channel Divinity. For 1 minute, you add your Charisma modifier to attack rolls made with that weapon (with a minimum bonus of +1). The weapon also emits bright light in a 20-foot radius and dim light 20 feet beyond that. If the weapon is not already magical, it becomes magical for the duration.",
									"You can end this effect on your turn as part of any other action. If you are no longer holding or carrying this weapon, or if you fall unconscious, this effect ends."
								]
							},
							{
								"-optional": "YES",
								"name": "Oath of Devotion Channel Divinity: Turn the Unholy",
								"text": [
									"As an action, you present your holy symbol and speak a prayer censuring fiends and undead, using your Channel Divinity. Each fiend or undead that can see or hear you within 30 feet of you must make a Wisdom saving throw. If the creature fails its saving throw, it is turned for 1 minute or until it takes damage.",
									"A turned creature must spend its turns trying to move as far away from you as it can, and it can't willingly move to a space within 30 feet of you. It also can't take reactions. For its action, it can use only the Dash action or try to escape from an effect that prevents it from moving. If there's nowhere to move, the creature can use the Dodge action."
								]
							},
							{
								"-optional": "YES",
								"name": "Oath of Devotion: Oath Spells",
								"text": [
									"You gain oath spells at the paladin levels listed.",
									"3rd - protection from evil and good, sanctuary",
									"5th - lesser restoration, zone of truth",
									"9th - beacon of hope, dispel magic",
									"13th - freedom of movement, guardian of faith",
									"17th - commune, flame strike"
								]
							},
							{
								"-optional": "YES",
								"name": "Oath of Vengeance Channel Divinity: Abjure Enemy",
								"text": [
									"As an action, you present your holy symbol and speak a prayer of denunciation, using your Channel Divinity. Choose one creature within 60 feet of you that you can see. That creature must make a Wisdom saving throw, unless it is immune to being frightened. Fiends and undead have disadvantage on this saving throw.",
									"On a failed save, the creature is frightened for 1 minute or until it takes any damage. While frightened, the creature's speed is 0, and it can't benefit from any bonus to its speed.",
									"On a successful save, the creature's speed is halved for 1 minute or until the creature takes any damage."
								]
							},
							{
								"-optional": "YES",
								"name": "Oath of Vengeance Channel Divinity: Vow of Enmity",
								"text": "As a bonus action, you can utter a vow of enmity against a creature you can see within 10 feet of you, using your Channel Divinity. You gain advantage on attack rolls against the creature for 1 minute or until it drops to 0 hit points or falls unconscious."
							},
							{
								"-optional": "YES",
								"name": "Oath of Vengeance: Oath Spells",
								"text": [
									"You gain oath spells at the paladin levels listed.",
									"3rd - bane, hunter's mark",
									"5th - hold person, misty step",
									"9th - haste, protection from energy",
									"13th - banishment, dimension door",
									"17th - hold monster, scrying"
								]
							},
							{
								"-optional": "YES",
								"name": "Oathbreaker: Oathbreaker Spells",
								"text": [
									"You gain oathbreaker spells at the paladin levels listed.",
									"3rd - hellish rebuke, inflict wounds",
									"5th - crown of madness, darkness",
									"9th - animate dead, bestow curse",
									"13th - blight, confusion",
									"17th - contagion, dominate person"
								]
							},
							{
								"-optional": "YES",
								"name": "Oathbreaker Channel Divinity: Control Undead",
								"text": "As an action, the paladin targets one undead creature he or she can see within 30 feet of him or her. The target must make a Wisdom saving throw. On a failed save, the target must obey the paladin's commands for the next 24 hours, or until the paladin uses this Channel Divinity option again. An undead whose challenge rating is equal to or greater than the paladin's level is immune to this effect."
							},
							{
								"-optional": "YES",
								"name": "Oathbreaker Channel Divinity: Dreadful Aspect",
								"text": "As an action, the paladin channels the darkest emotions and focuses them into a burst of magical menace. Each creature of the paladin's choice within 30 feet of the paladin must make a Wisdom saving throw if it can see the paladin. On a failed save, the target is frightened of the paladin for 1 minute. If a creature frightened by this effect ends its turn more than 30 feet away from the paladin, it can attempt another Wisdom saving throw to end the effect on it."
							},
							{
								"-optional": "YES",
								"name": "Oath of the Crown: Oath Spells",
								"text": [
									"You gain oath spells at the paladin levels listed.",
									"3rd - command, compelled duel",
									"5th - warding bond, zone of truth",
									"9th - aura of vitality, spirit guardians",
									"13th - banishment, guardian of faith",
									"17th - circle of power, geas"
								]
							},
							{
								"-optional": "YES",
								"name": "Oath of the Crown Channel Divinity: Champion Challenge",
								"text": "You issue a challenge that compels other creatures to do battle with you. Each creature of your choice that you can see within 30 feet of you must make a Wisdom saving throw. On a failed save, a creature can't willingly move more than 30 feet away from you. This effect ends on the creature if you are incapacitated or die or if the creature is moved more than 30 feet away from you."
							},
							{
								"-optional": "YES",
								"name": "Oath of the Crown Channel Divinity: Turn the Tide",
								"text": "As a bonus action, you can bolster injured creatures with your Channel Divinity. Each creature of your choice that can hear you within 30 feet of you regains hit points equal to 1d6 + your Charisma modifier (minimum of 1) if it has no more than half of its hit points."
							}
						]
					},
					{
						"-level": "4",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 4th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "5",
						"feature": {
							"name": "Extra Attack",
							"text": "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
						}
					},
					{
						"-level": "6",
						"feature": {
							"name": "Aura of Protection",
							"text": [
								"Starting at 6th level, whenever you or a friendly creature within 10 feet of you must make a saving throw, the creature gains a bonus to the saving throw equal to your Charisma modifier (with a minimum bonus of +1). You must be conscious to grant this bonus.",
								"At 18th level, the range of this aura increases to 30 feet."
							]
						}
					},
					{
						"-level": "7",
						"feature": [ {
							"-optional": "YES",
							"name": "Oath of the Ancients: Aura of Warding",
							"text": [
								"Beginning at 7th level, ancient magic lies so heavily upon you that it forms an eldritch ward. You and friendly creatures within 10 feet of you have resistance to damage from spells.",
								"At 18th level, the range of this aura increases to 30 feet."
							]
						},
							{
								"-optional": "YES",
								"name": "Oath of Devotion: Aura of Devotion",
								"text": [
									"Starting at 7th level, you and friendly creatures within 10 feet of you can't be charmed while you are conscious.",
									"At 18th level, the range of this aura increases to 30 feet."
								]
							},
							{
								"-optional": "YES",
								"name": "Oath of Vengeance: Relentless Avenger",
								"text": "By 7th level, your supernatural focus helps you close off a foe's retreat. When you hit a creature with an opportunity attack, you can move up to half your speed immediately after the attack and as part of the same reaction. This movement doesn't provoke opportunity attacks."
							},
							{
								"-optional": "YES",
								"name": "Oathbreaker: Aura of Hate",
								"text": [
									"Starting at 7th level, the paladin, as well any fiends and undead within 10 feet of the paladin, gains a bonus to melee weapon damage rolls equal to the paladin's Charisma modifier (minimum of +1). A creature can benefit from this feature from only one paladin at a time.",
									"At 18th level, the range of this aura increases to 30 feet."
								]
							},
							{
								"-optional": "YES",
								"name": "Oath of the Crown: Divine Allegiance",
								"text": "Starting at 7th level, when a creature within 5 feet of you takes damage, you can use your reaction to magically substitute your own health for that of the target creature, causing that creature not to take the damage. Instead, you take the damage. This damage to you can't be reduced or prevented in any way."
							}
						]
					},
					{
						"-level": "8",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 8th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "10",
						"feature": {
							"name": "Aura of Courage",
							"text": [
								"Starting at 10th level, you and friendly creatures within 10 feet of you can't be frightened while you are conscious.",
								"At 18th level, the range of this aura increases to 30 feet."
							]
						}
					},
					{
						"-level": "11",
						"feature": {
							"name": "Improved Divine Smite",
							"text": "By 11th level, you are so suffused with righteous might that all your melee weapon strikes carry divine power with them. Whenever you hit a creature with a melee weapon, the creature takes an extra 1d8 radiant damage. If you also use your Divine Smite with an attack, you add this damage to the extra damage of your Divine Smite."
						}
					},
					{
						"-level": "12",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 12th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "14",
						"feature": {
							"name": "Cleansing Touch",
							"text": [
								"Beginning at 14th level, you can use your action to end one spell on yourself or on one willing creature that you touch.",
								"You can use this feature a number of times equal to your Charisma modifier (a minimum of once). You regain expended uses when you finish a long rest."
							]
						}
					},
					{
						"-level": "15",
						"feature": [ {
							"-optional": "YES",
							"name": "Oath of the Ancients: Undying Sentinel",
							"text": [
								"Starting at 15th level, when you are reduced to 0 hit points and are not killed outright, you can choose to drop to 1 hit point instead. Once you use this ability, you can't use it again until you finish a long rest.",
								"Additionally, you suffer none of the drawbacks of old age, and you can't be aged magically."
							]
						},
							{
								"-optional": "YES",
								"name": "Oath of Devotion: Purity of Spirit",
								"text": "Beginning at 15th level, you are always under the effects of a protection from evil and good spell."
							},
							{
								"-optional": "YES",
								"name": "Oath of Vengeance: Soul of Vengeance",
								"text": "Starting at 15th level, the authority with which you speak your Vow of Enmity gives you greater power over your foe. When a creature under the effect of your Vow of Enmity makes an attack, you can use your reaction to make a melee weapon attack against that creature if it is within range."
							},
							{
								"-optional": "YES",
								"name": "Oathbreaker: Supernatural Resistance",
								"text": "At 15th level, the paladin gains resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons."
							},
							{
								"-optional": "YES",
								"name": "Oath of the Crown: Unyielding Spirit",
								"text": "Starting at 15th level, you have advantage on saving throws to avoid becoming paralyzed or stunned."
							}
						]
					},
					{
						"-level": "16",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 16th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "18",
						"feature": {
							"name": "Aura of Protection Improvement",
							"text": "At 18th level, the range of your Aura of Protection increases to 30 feet."
						}
					},
					{
						"-level": "19",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 19th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "20",
						"feature": [ {
							"-optional": "YES",
							"name": "Oath of the Ancients: Elder Champion",
							"text": [
								"At 20th level, you can assume the form of an ancient force of nature, taking on an appearance you choose. For example, your skin might turn green or take on a bark-like texture, your hair might become leafy or mosslike, or you might sprout antlers or a lion-like mane.",
								"Using your action, you undergo a transformation. For 1 minute, you gain the following benefits:",
								"• At the start of each of your turns, you regain 10 hit points.",
								"• Whenever you cast a paladin spell that has a casting time of 1 action, you can cast it using a bonus action instead.",
								"• Enemy creatures within 10 feet of you have disadvantage on saving throws against your paladin spells and Channel Divinity options.",
								"Once you use this feature, you can't use it again until you finish a long rest."
							]
						},
							{
								"-optional": "YES",
								"name": "Oath of Devotion: Holy Nimbus",
								"text": [
									"At 20th level, as an action, you can emanate an aura of sunlight. For 1 minute, bright light shines from you in a 30-foot radius, and dim light shines 30 feet beyond that.",
									"Whenever an enemy creature starts its turn in the bright light, the creature takes 10 radiant damage.",
									"In addition, for the duration, you have advantage on saving throws against spells cast by fiends or undead.",
									"Once you use this feature, you can't use it again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Oath of Vengeance: Avenging Angel",
								"text": [
									"At 20th level, you can assume the form of an angelic avenger. Using your action, you undergo a transformation. For 1 hour, you gain the following benefits:",
									"• Wings sprout from your back and grant you a flying speed of 60 feet.",
									"• You emanate an aura of menace in a 30-foot radius. The first time any enemy creature enters the aura or starts its turn there during a battle, the creature must succeed on a Wisdom saving throw or become frightened of you for 1 minute or until it takes any damage. Attack rolls against the frightened creature have advantage.",
									"Once you use this feature, you can't use it again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Oathbreaker: Dread Lord",
								"text": [
									"At 20th-level, the paladin can, as an action, surround himself or herself with an aura of gloom that lasts for 1 minute. The aura reduces any bright light in a 30-foot radius around the paladin to dim light. Whenever an enemy that is frightened by the paladin starts its turn in the aura, it takes 4d10 psychic damage. Additionally, the paladin and creatures he or she chooses in the aura are draped in deeper shadow. Creatures that rely on sight have disadvantage on attack rolls against creatures draped in this shadow.",
									"While the aura lasts, the paladin can use a bonus action on his or her turn to cause the shadows in the aura to attack one creature. The paladin makes a melee spell attack against the target. If the attack hits, the target takes necrotic damage equal to 3d10 + the paladin's Charisma modifier.",
									"After activating the aura, the paladin can't do so again until he or she finishes a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Oath of the Crown: Exalted Champion",
								"text": [
									"At 20th level, your presence on the field of battle is an inspiration to those dedicated to your cause. You can use your action to gain the following benefits for 1 hour: ",
									"- You have resistance to bludgeoning, piercing, and slashing damage from nonmagical weapons.",
									"- Your allies have advantage on death saving throws while within 30 feet of you.",
									"- You have advantage on Wisdom saving throws, as do your allies within 30 feet of you.",
									"This effect ends early if you are incapacitated or die. Once you use this feature, you can't use it again until you finish a long rest."
								]
							}
						]
					},
					{
						"-level": "3",
						"feature": [ {
							"-optional": "YES",
							"name": "Sacred Oath: Oath of Conquest",
							"text": [
								"The Oath of Conquest calls to paladins who seek glory in battle and the subjugation of their enemies. It isn't enough for these paladins to establish order. They must crush the forces of chaos. ",
								"Sometimes called knight tyrants or iron mongers, those who swear this oath gather into grim orders that serve gods or philosophies of war and well-ordered might. Some of these paladins go so far as to consort with the powers of the Nine Hells. ",
								"The archdevil Bel, warlord of Avernus, counts many of these paladins-called hell knights-as his most ardent supporters. Hell knights cover their armor with trophies taken from fallen enemies, a grim warning to any who dare oppose them and the decrees of their lords. ",
								"Tenets of Conquest: ",
								"A paladin who takes this oath has the tenets of conquest seared on the upper arm. A hell knight's oath appears in Infernal runes, a brutal reminder of vows to the Lords of Hell. ",
								"Douse the Flame of Hope: It is not enough to merely defeat an enemy in battle. Your victory must be so overwhelming that your enemies' will to fight is shattered forever. A blade can end a life. Fear can end an empire. ",
								"Rule with an Iron Fist: Once you have conquered, tolerate no dissent. Your word is law. Those who obey it shall be favored. Those who defy it shall be punished as an example to all who might follow. ",
								"Strength Above All: You shall rule until a stronger one arises. Then you must grow mightier and meet the challenge, or fall to your own ruin. ",
								"Oath Spells:",
								"You gain oath spells at the paladin levels listed.",
								"3rd - armor of Agathys, command ",
								"5th - hold person, spiritual weapon ",
								"9th - bestow curse, fear ",
								"13th - blight, dominate beast ",
								"17th - dominate person, insect plague",
								"This Sacred Oath is from Unearthed Arcana: Paladin Sacred Oaths, and as such may not be allowed in your game. Consult your DM before choosing this option."
							]
						},
							{
								"-optional": "YES",
								"name": "Oath of Conquest Channel Divinity: Conquering Strike (Oath of Conquest)",
								"text": "You can use your Channel Divinity to break a foe's will. When you hit a creature with a melee weapon attack as part of the Attack action, you can also use your Channel Divinity to force the target to make a Wisdom saving throw. On a failed save, the target becomes frightened of you for 1 minute. The frightened creature can repeat this saving throw at the end of each of its turns, ending the effect on itself on a success."
							},
							{
								"-optional": "YES",
								"name": "Oath of Conquest Channel Divinity: Guided Strike (Oath of Conquest)",
								"text": "You can use your Channel Divinity to strike with supernatural accuracy. When you make an attack roll, you can use your Channel Divinity to gain a +10 bonus to the roll. You make this choice after you see the roll, but before the DM says whether the attack hits or misses."
							},
							{
								"-optional": "YES",
								"name": "Sacred Oath: Oath of Treachery",
								"text": [
									"The Oath of Treachery is the path followed by paladins who have forsworn other oaths or who care only for their own power and survival. Commonly known as blackguards, these profane warriors are faithful only to themselves. Anyone desperate enough to follow one of these paladins does so because, while deceitful, these paladins command great power. Those who follow them without falling prey to their treachery hope to indulge in wanton violence and accumulate great treasure. ",
									"Many of these paladins pay homage to demon lords, especially Grazz't and Orcus. Even the Lords of Hell are loath to ally with these champions of chaos, but sometimes Baalzebul and Glasya find a kindred spirit in a blackguard's penchant for double dealing and treachery. ",
									"Fallen Paladins: ",
									"The Oath of Treachery is an option for the paladin who has strayed from another Sacred Oath or who has rejected the traditional paladin life. This option exists alongside the Oathbreaker in the Dungeon Master's Guide. DMs are free to use either option to model villainous or fallen paladins. ",
									"If you switch to this oath from another one, replace all of the previous oath's features with the features of this one, and if you renounce this oath, replace its features with the features of the new one. ",
									"Tenets of Treachery: ",
									"A paladin who embraces the Oath of Treachery owes allegiance to no one. There are no tenets of this oath, for it lacks any substance. Those who are unfortunate enough to have close contact with blackguards have observed that a blackguard's overwhelming concern is power and safety, especially if both can be obtained at the expense of others. ",
									"Oath Spells: ",
									"You gain oath spells at the paladin levels listed. ",
									"3rd - charm person, expeditious retreat ",
									"5th - invisibility, mirror image ",
									"9th - gaseous form, haste ",
									"13th - confusion, greater invisibility ",
									"17th - dominate person, passwall",
									"This Sacred Oath is from Unearthed Arcana: Paladin Sacred Oaths, and as such may not be allowed in your game. Consult your DM before choosing this option."
								]
							},
							{
								"-optional": "YES",
								"name": "Oath of Treachery Channel Divinity: Conjure Duplicate (Oath of Treachery)",
								"text": [
									"As an action, you create a visual illusion of yourself that lasts for 1 minute, or until you lose your concentration (as if you were concentrating on a spell). The illusion appears in an unoccupied space of your choice that you can see within 30 feet of you. The illusion looks exactly like you; it is silent; it is your size, is insubstantial, and doesn't occupy its space; and it is unaffected by attacks and damage. As a bonus action on your turn, you can move the illusion up to 30 feet to a space you can see, but the illusion must remain within 120 feet of you. ",
									"For the duration, you can cast spells as though you were in the illusion's space, but you must use your own senses. Additionally, when both you and your illusion are within 5 feet of a creature that can see the illusion, you have advantage on attack rolls against that creature, given how uncanny the illusion is."
								]
							},
							{
								"-optional": "YES",
								"name": "Oath of Treachery Channel Divinity: Poison Strike (Oath of Treachery)",
								"text": "You can use your Channel Divinity to make a weapon deadlier. As a bonus action, you touch one weapon or piece of ammunition and conjure a special poison on it. The poison lasts for 1 minute. The next time you hit a target with an attack using that weapon or ammunition, the target takes poison damage immediately after the attack. The poison damage equals 2d10 + your paladin level, or 20 + your paladin level if you had advantage on the attack roll."
							}
						]
					},
					{
						"-level": "7",
						"feature": [ {
							"-optional": "YES",
							"name": "Oath of Conquest: Aura of Conquest (Oath of Conquest)",
							"text": [
								"Starting at 7th level, you emanate a menacing aura while you're not incapacitated. The aura includes your space, extends 10 feet from you in every direction, and is blocked by total cover. Any enemy in the aura has disadvantage on saving throws against being frightened. ",
								"At 18th level, the range of this aura increases to 30 feet"
							]
						},
							{
								"-optional": "YES",
								"name": "Oath of Treachery: Aura of Treachery (Oath of Treachery)",
								"text": [
									"Starting at 7th level, you emanate an aura of discord, which gives you the following benefits. ",
									"Cull the Herd: ",
									"You have advantage on melee attack rolls against any creature that has one or more of its allies within 5 feet of it. ",
									"Treacherous Strike: ",
									"If a creature within 5 feet of you misses you with a melee attack, you can use your reaction to force the attacker to reroll that attack against a creature of your choice that is also within 5 feet of the attacker. The ability fails and is wasted if the attacker is immune to being charmed. ",
									"You can use this ability three times. You regain expended uses of it when you finish a short or long rest."
								]
							}
						]
					},
					{
						"-level": "15",
						"feature": [ {
							"-optional": "YES",
							"name": "Oath of Conquest: Implacable Spirit (Oath of Conquest)",
							"text": "Once you reach 15th level, you can no longer be charmed."
						},
							{
								"-optional": "YES",
								"name": "Oath of Treachery: Blackguard's Escape (Oath of Treachery)",
								"text": "At 15th level, you have the ability to slip away from your foes. Immediately after you are hit by an attack, you can use your reaction to turn invisible and teleport up to 60 feet to a spot you can see. You remain invisible until the end of your next turn or until you attack, deal damage, or force a creature to make a saving throw. Once you use this feature, you must finish a short or long rest before you can use it again."
							}
						]
					},
					{
						"-level": "20",
						"feature": {
							"-optional": "YES",
							"name": "Oath of Conquest: Invincible Conquerer (Oath of Conquest)",
							"text": [
								"At 20th level, you gain the ability to harness extraordinary martial prowess. As an action, you can magically become an avatar of conquest, gaining the following benefits for 1 minute: ",
								"• You have resistance to all damage. ",
								"• When you take the Attack action on your turn, you can make one additional attack as part of that action. ",
								"• Your melee weapon attacks score a critical hit on a roll of 19 or 20. ",
								"Once you use this feature, you can't use it again until you finish a long rest."
							]
						}
					},
					{
						"-level": "20",
						"feature": {
							"-optional": "YES",
							"name": "Oath of Treachery: Icon of Deceit (Oath of Treachery)",
							"text": [
								"At 20th level, you gain the ability to emanate feelings of treachery. As an action, you can magically become an avatar of deceit, gaining the following benefits for 1 minute: ",
								"• You are invisible. ",
								"• If a creature damages you on its turn, it must succeed on a Wisdom saving throw (DC equal to your spell save DC) or you control its next action, provided that you aren't incapacitated when it takes the action. A creature automatically succeeds on the save if the creature is immune to being charmed. ",
								"• If you have advantage on an attack roll, you gain a bonus to its damage roll equal to your paladin level. ",
								"Once you use this feature, you can't use it again until you finish a long rest."
							]
						}
					}
				]
			},
			{
				"name": "Ranger",
				"hd": "10",
				"proficiency": "Strength, Dexterity",
				"spellAbility": "Wisdom",
				"autolevel": [ {
					"-level": "1",
					"slots": "0,0,0,0,0,0"
				},
					{
						"-level": "2",
						"slots": "0,2,0,0,0,0"
					},
					{
						"-level": "3",
						"slots": "0,3,0,0,0,0"
					},
					{
						"-level": "4",
						"slots": "0,3,0,0,0,0"
					},
					{
						"-level": "5",
						"slots": "0,4,2,0,0,0"
					},
					{
						"-level": "6",
						"slots": "0,4,2,0,0,0"
					},
					{
						"-level": "7",
						"slots": "0,4,3,0,0,0"
					},
					{
						"-level": "8",
						"slots": "0,4,3,0,0,0"
					},
					{
						"-level": "9",
						"slots": "0,4,3,2,0,0"
					},
					{
						"-level": "10",
						"slots": "0,4,3,2,0,0"
					},
					{
						"-level": "11",
						"slots": "0,4,3,3,0,0"
					},
					{
						"-level": "12",
						"slots": "0,4,3,3,0,0"
					},
					{
						"-level": "13",
						"slots": "0,4,3,3,1,0"
					},
					{
						"-level": "14",
						"slots": "0,4,3,3,1,0"
					},
					{
						"-level": "15",
						"slots": "0,4,3,3,2,0"
					},
					{
						"-level": "16",
						"slots": "0,4,3,3,2,0"
					},
					{
						"-level": "17",
						"slots": "0,4,3,3,3,1"
					},
					{
						"-level": "18",
						"slots": "0,4,3,3,3,1"
					},
					{
						"-level": "19",
						"slots": "0,4,3,3,3,2"
					},
					{
						"-level": "20",
						"slots": "0,4,3,3,3,2"
					},
					{
						"-level": "1",
						"feature": [ {
							"name": "Starting Proficiencies",
							"text": [
								"You are proficient with the following items, in addition to any proficiencies provided by your race or background.",
								"Armor: light armor, medium armor, shields",
								"Weapons: simple weapons, martial weapons",
								"Tools: none",
								"Skills: Choose three from Animal Handling, Athletics, Insight, Investigation, Nature, Perception, Stealth, and Survival"
							]
						},
							{
								"name": "Starting Equipment",
								"text": [
									"You start with the following items, plus anything provided by your background.",
									"• (a) scale mail or (b) leather armor",
									"• (a) two shortswords or (b) two simple melee weapons",
									"• (a) a dungeoneer's pack or (b) an explorer's pack",
									"• A longbow and a quiver of 20 arrows",
									"Alternatively, you may start with 5d4 x 10 gp to buy your own equipment."
								]
							}
						]
					},
					{
						"-level": "1",
						"feature": [ {
							"name": "Favored Enemy",
							"text": [
								"Beginning at 1st level, you have significant experience studying, tracking, hunting, and even talking to a certain type of enemy.",
								"Choose a type of favored enemy: aberrations, beasts, celestials, constructs, dragons, elementals, fey, fiends, giants, monstrosities, oozes, plants, or undead. Alternatively, you can select two races of humanoid (such as gnolls and orcs) as favored enemies.",
								"You have advantage on Wisdom (Survival) checks to track your favored enemies, as well as on Intelligence checks to recall information about them.",
								"When you gain this feature, you also learn one language of your choice that is spoken by your favored enemies, if they speak one at all.",
								"You choose one additional favored enemy, as well as an associated language, at 6th and 14th level. As you gain levels, your choices should reflect the types of monsters you have encountered on your adventures."
							]
						},
							{
								"name": "Natural Explorer",
								"text": [
									"You are particularly familiar with one type of natural environment and are adept at traveling and surviving in such regions. Choose one type of favored terrain: arctic, coast, desert, forest, grassland, mountain, swamp, or the Underdark. When you make an Intelligence or Wisdom check related to your favored terrain, your proficiency bonus is doubled if you are using a skill that you're proficient in.",
									"While traveling for an hour or more in your favored terrain, you gain the following benefits:",
									"• Difficult terrain doesn't slow your group's travel.",
									"• Your group can't become lost except by magical means.",
									"• Even when you are engaged in another activity while traveling (such as foraging, navigating, or tracking), you remain alert to danger.",
									"• If you are traveling alone, you can move stealthily at a normal pace.",
									"• When you forage, you find twice as much food as you normally would.",
									"• While tracking other creatures, you also learn their exact number, their sizes, and how long ago they passed through the area.",
									"You choose additional favored terrain types at 6th and 10th level."
								]
							}
						]
					},
					{
						"-level": "2",
						"feature": [ {
							"name": "Spellcasting",
							"text": [
								"By the time you reach 2nd level, you have learned to use the magical essence of nature to cast spells, much as a druid does. See chapter 10 for the general rules of spellcasting and chapter 11 for the ranger spell list. ",
								"Spell Slots",
								"The Ranger table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
								"For example, if you know the 1st-level spell animal friendship and have a 1st-level and a 2nd-level spell slot available, you can cast animal friendship using either slot. ",
								"Spells Known of 1st Level and Higher",
								"You know two 1st-level spells of your choice from the ranger spell list.",
								"You learn an additional ranger spell of your choice at each odd numbered level thereafter. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 5th level in this class, you can learn one new spell of 1st or 2nd level.",
								"Additionally, when you gain a level in this class, you can choose one of the ranger spells you know and replace it with another spell from the ranger spell list, which also must be of a level for which you have spell slots. ",
								"Spellcasting Ability",
								"Wisdom is your spellcasting ability for your ranger spells, since your magic draws on your attunement to nature. You use your Wisdom whenever a spell refers to your spellcasting ability. In addition, you use your Wisdom modifier when setting the saving throw DC for a ranger spell you cast and when making an attack roll with one.",
								"Spell save DC = 8 + your proficiency bonus + your Wisdom modifier",
								"Spell attack modifier = your proficiency bonus + your Wisdom modifier"
							]
						},
							{
								"name": "Fighting Style",
								"text": "At 2nd level, you adopt a particular style of fighting as your specialty. Choose one of the following options: Archery, Defense, Dueling, Mariner, or Two-Weapon Fighting. You can't take a Fighting Style option more than once, even if you later get to choose again."
							},
							{
								"-optional": "YES",
								"name": "Fighting Style: Archery",
								"text": "You gain a +2 bonus to attack rolls you make with ranged weapons."
							},
							{
								"-optional": "YES",
								"name": "Fighting Style: Defense",
								"text": "While you are wearing armor, you gain a +1 bonus to AC."
							},
							{
								"-optional": "YES",
								"name": "Fighting Style: Dueling",
								"text": "When you are wielding a melee weapon in one hand and no other weapons, you gain a +2 bonus to damage rolls with that weapon."
							},
							{
								"-optional": "YES",
								"name": "Fighting Style: Two-Weapon Fighting",
								"text": "When you engage in two-weapon fighting, you can add your ability modifier to the damage of the second attack."
							}
						]
					},
					{
						"-level": "3",
						"feature": [ {
							"name": "Ranger Archetype",
							"text": "At 3rd level, you choose an archetype that you strive to emulate: Beast Master, Deep Stalker, or Hunter. Your choice grants features at 3rd level, and again at 7th, 11th, and 15th level."
						},
							{
								"-optional": "YES",
								"name": "Ranger Archetype: Hunter",
								"text": "Emulating the Hunter archetype means accepting your place as a bulwark between civilization and the terrors of the wilderness. As you walk the Hunter's path, you learn specialized techniques for fighting the threats you face, from rampaging ogres and hordes of orcs to towering giants and terrifying dragons."
							},
							{
								"-optional": "YES",
								"name": "Ranger Archetype: Beast Master",
								"text": "The Beast Master archetype embodies a friendship between the civilized races and the beasts of the world. United in focus, beast and ranger work as one to fight the monstrous foes that threaten civilization and the wilderness alike. Emulating the Beast Master archetype means committing yourself to this ideal, working in partnership with an animal as its companion and friend."
							},
							{
								"-optional": "YES",
								"name": "Hunter: Hunter's Prey",
								"text": "At 3rd level, you gain one of the following features of your choice: Colossus Slayer, Giant Killer, or Horde Breaker."
							},
							{
								"-optional": "YES",
								"name": "Hunter's Prey: Colossus Slayer",
								"text": "Your tenacity can wear down the most potent foes. When you hit a creature with a weapon attack, the creature takes an extra 1d8 damage if it's below its hit point maximum. You can deal this extra damage only once per turn."
							},
							{
								"-optional": "YES",
								"name": "Hunter's Prey: Giant Killer",
								"text": "When a Large or larger creature within 5 feet of you hits or misses you with an attack, you can use your reaction to attack that creature immediately after its attack, provided that you can see the creature."
							},
							{
								"-optional": "YES",
								"name": "Hunter's Prey: Horde Breaker",
								"text": "Once on each of your turns when you make a weapon attack, you can make another attack with the same weapon against a different creature that is within 5 feet of the original target and within range of your weapon."
							},
							{
								"-optional": "YES",
								"name": "Beast Master: Ranger's Companion",
								"text": [
									"You gain a beast companion that accompanies you on your adventures and is trained to fight alongside you. Choose a beast that is no larger than Medium and that has a challenge rating of 1/4 or lower. Add your proficiency bonus to the beast's AC, attack rolls, and damage rolls, as well as to any saving throws and skills it is proficient in. Its hit point maximum equals its normal maximum or four times your ranger level, whichever is higher.",
									"The beast obeys your commands as best as it can. It takes its turn on your initiative, though it doesn't take an action unless you command it to. On your turn, you can verbally command the beast where to move (no action required by you). You can use your action to verbally command it to take the Attack, Dash, Disengage, Dodge, or Help action. Once you have the Extra Attack feature, you can make one weapon attack yourself when you command the beast to take the Attack action.",
									"If you are incapacitated or absent, your beast companion acts on its own, focusing on protecting you and itself. It never requires your command to use its reaction, such as when making an opportunity attack.",
									"Like any creature, the beast can spend hit dice during a short rest.",
									"While traveling through your favored terrain with only the beast, you can move stealthily at a normal pace.",
									"If the beast dies, you can obtain another one by spending 8 hours magically bonding with another beast that isn't hostile to you, either the same type of beast as before or a different one."
								]
							},
							{
								"name": "Primeval Awareness",
								"text": "Beginning at 3rd level, you can use your action and expend one ranger spell slot to focus your awareness on the region around you. For 1 minute per level of the spell slot you expend, you can sense whether the following types of creatures are present within 1 mile of you (or within up to 6 miles if you are in your favored terrain): aberrations, celestials, dragons, elementals, fey, fiends, and undead. This feature doesn't reveal the creatures' location or number."
							}
						]
					},
					{
						"-level": "4",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 4th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "5",
						"feature": {
							"name": "Extra Attack",
							"text": "Beginning at 5th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
						}
					},
					{
						"-level": "6",
						"feature": [ {
							"name": "Additional Favored Terrains",
							"text": "You gain an additional favored terrain."
						},
							{
								"name": "Additional Favored Enemy",
								"text": "You choose one additional favored enemy, as well as an associated language. Your choice should reflect the types of monsters you have encountered on your adventures."
							}
						]
					},
					{
						"-level": "7",
						"feature": [ {
							"-optional": "YES",
							"name": "Hunter: Defensive Tactics",
							"text": "At 7th level, you gain one of the following features of your choice: Escape the Horde, Multiattack Defense, or Steel Will."
						},
							{
								"-optional": "YES",
								"name": "Defensive Tactics: Escape the Horde",
								"text": "Opportunity attacks against you are made with disadvantage."
							},
							{
								"-optional": "YES",
								"name": "Defensive Tactics: Multiattack Defense",
								"text": "When a creature hits you with an attack, you gain a +4 bonus to AC against all subsequent attacks made by that creature for the rest of the turn."
							},
							{
								"-optional": "YES",
								"name": "Defensive Tactics: Steel Will",
								"text": "You have advantage on saving throws against being frightened."
							},
							{
								"-optional": "YES",
								"name": "Beast Master: Exceptional Training",
								"text": "On any of your turns when your beast companion doesn't attack, you can use a bonus action to command the beast to take the Dash, Disengage, Dodge, or Help action on its turn."
							}
						]
					},
					{
						"-level": "8",
						"feature": [ {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 8th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						},
							{
								"name": "Land's Stride",
								"text": [
									"Starting at 8th level, moving through nonmagical difficult terrain costs you no extra movement. You can also pass through nonmagical plants without being slowed by them and without taking damage from them if they have thorns, spines, or a similar hazard.",
									"In addition, you have advantage on saving throws against plants that are magically created or manipulated to impede movement, such those created by the entangle spell."
								]
							}
						]
					},
					{
						"-level": "10",
						"feature": [ {
							"name": "Hide in Plain Sight",
							"text": [
								"Starting at 10th level, you can spend 1 minute creating camouflage for yourself. You must have access to fresh mud, dirt, plants, soot, and other naturally occurring materials with which to create your camouflage.",
								"Once you are camouflaged in this way, you can try to hide by pressing yourself up against a solid surface, such as a tree or wall, that is at least as tall and wide as you are. You gain a +10 bonus to Dexterity (Stealth) checks as long as you remain there without moving or taking actions. Once you move or take an action or a reaction, you must camouflage yourself again to gain this benefit."
							]
						},
							{
								"name": "Additional Favored Terrains",
								"text": "You gain an additional favored terrain."
							}
						]
					},
					{
						"-level": "11",
						"feature": [ {
							"-optional": "YES",
							"name": "Hunter: Multiattack",
							"text": "At 11th level, you gain one of the following features of your choice: Volley or Whirlwind Attack."
						},
							{
								"-optional": "YES",
								"name": "Multiattack: Volley",
								"text": "You can use your action to make a ranged attack against any number of creatures within 10 feet of a point you can see within your weapon's range. You must have ammunition for each target, as normal, and you make a separate attack roll for each target. "
							},
							{
								"-optional": "YES",
								"name": "Multiattack: Whirlwind Attack",
								"text": "You can use your action to make a melee attack against any number of creatures within 5 feet of you, with a separate attack roll for each target."
							},
							{
								"-optional": "YES",
								"name": "Beast Master: Bestial Fury",
								"text": "Your beast companion can make two attacks or use Multiattack (if available) when you command it to use the Attack action."
							}
						]
					},
					{
						"-level": "12",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 12th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "14",
						"feature": [ {
							"name": "Vanish",
							"text": "Starting at 14th level, you can use the Hide action as a bonus action on your turn. Also, you can't be tracked by nonmagical means, unless you choose to leave a trail."
						},
							{
								"name": "Additional Favored Enemy",
								"text": "You choose one additional favored enemy, as well as an associated language. Your choice should reflect the types of monsters you have encountered on your adventures."
							}
						]
					},
					{
						"-level": "15",
						"feature": [ {
							"-optional": "YES",
							"name": "Hunter: Superior Hunter's Defense",
							"text": "At 15th level, you gain one of the following features of your choice: Evasion, Stand Against the Tide, or Uncanny Dodge."
						},
							{
								"-optional": "YES",
								"name": "Superior Hunter's Defense: Evasion",
								"text": "You can nimbly dodge out of the way of certain area effects, such as a red dragon's fiery breath or a lightning bolt spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail."
							},
							{
								"-optional": "YES",
								"name": "Superior Hunter's Defense: Stand Against the Tide",
								"text": "When a hostile creature misses you with a melee attack, you can use your reaction to force that creature to repeat the same attack against another creature (other than itself) of your choice. "
							},
							{
								"-optional": "YES",
								"name": "Superior Hunter's Defense: Uncanny Dodge",
								"text": "When an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you."
							},
							{
								"-optional": "YES",
								"name": "Beast Master: Share Spells",
								"text": "Beginning at 15th level, when you cast a spell targeting yourself, you can also affect your beast companion with the spell if the beast is within 30 feet of you."
							}
						]
					},
					{
						"-level": "16",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 16th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "18",
						"feature": {
							"name": "Feral Senses",
							"text": "At 18th level, you gain preternatural senses that help you fight creatures you can't see. When you attack a creature you can't see, your inability to see it doesn't impose disadvantage on your attack rolls against it. You are also aware of the location of any invisible creature within 30 feet of you, provided that the creature isn't hidden from you and you aren't blinded or deafened."
						}
					},
					{
						"-level": "19",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 19th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "20",
						"feature": {
							"name": "Foe Slayer",
							"text": "At 20th level, you become an unparalleled hunter of your enemies. Once on each of your turns, you can add your Wisdom modifier to the attack roll or the damage roll of an attack you make against one of your favored enemies. You can choose to use this feature before or after the roll, but before any effects of the roll are applied."
						}
					},
					{
						"-level": "2",
						"feature": [ {
							"-optional": "YES",
							"name": "Fighting Style: Close Quarters Shooter",
							"text": [
								"When making a ranged attack while you are within 5 feet of a hostile creature, you do not have disadvantage on the attack roll. Your ranged attacks ignore half cover and three-quarters cover against targets within 30 feet of you. You have a +1 bonus to attack rolls on ranged attacks.",
								"This Fighting Style is from Unearthed Arcana: Light, Dark, Underdark!, and as such may not be allowed in your game. Consult your DM before choosing this option."
							]
						},
							{
								"-optional": "YES",
								"name": "Fighting Style: Mariner",
								"text": [
									"As long as you are not wearing heavy armor or using a shield, you have a swimming speed and a climbing speed equal to your normal speed, and you gain a +1 bonus to AC.",
									"This Fighting Style is from Unearthed Arcana: Watborne Adventures, and as such may not be allowed in your game. Consult your DM before choosing this option."
								]
							},
							{
								"-optional": "YES",
								"name": "Fighting Style: Tunnel Fighter",
								"text": "As a bonus action, you can enter a defensive stance that lasts until the start of your next turn. While in your defensive stance, you can make opportunity attacks without using your reaction, and you can use your reaction to make a melee attack against a creature that moves more than 5 feet while within your reach."
							}
						]
					},
					{
						"-level": "3",
						"feature": [ {
							"-optional": "YES",
							"name": "Ranger Archetype: Deep Stalker (UA)",
							"text": [
								"Many Deep Stalkers are elves, as those folk know all too well the threat posed by the drow. Deep Stalkers scout for new passages into the Underdark, carefully mapping them and working to ensure they remain watched at all times. They venture into the depths on long, dangerous patrols, disappearing for months at a time. Many of them never return. Deep Stalkers master spells useful in navigating the Underdark, and their combat tactics focus on ambush, surprise, and stealth. They fight alone or in small groups in hostile territory, relying on clever tactics to carry the day.",
								"This Ranger Archetype is from Unearthed Arcana: Light, Dark, Underdark!, and as such may not be allowed in your game. Consult your DM before choosing this option."
							]
						},
							{
								"-optional": "YES",
								"name": "Deep Stalker: Deep Stalker Magic",
								"text": [
									"From 3rd level, you have darkvision with a range of 90 feet. You also gain access to additional spells at 3rd, 5th, 9th, 13th, and 15th level. You are always able to cast these spells, and they do not count against your number of ranger spells known.",
									"3rd - disguise self",
									"5th - rope trick",
									"9th - glyph of warding",
									"13th - greater invisibility",
									"17th - seeming"
								]
							},
							{
								"-optional": "YES",
								"name": "Deep Stalker: Underdark Scout",
								"text": "At 3rd level, you master the art of the ambush. On your first turn during combat, you gain a +10 bonus to your speed. If you use the attack action on that turn, you can make one additional attack. You gain an additional benefit on all turns after your first turn. At the end of each such turn, you can attempt to hide as a bonus action if you meet the normal requirements for hiding."
							},
							{
								"-optional": "YES",
								"name": "Ranger Archetype: Horizon Walker (UA)",
								"text": [
									"Rangers of the Horizon Conclave guard the world against threats that originate from other planes. They seek out planar portals and keep watch over them, venturing to the outer and inner planes as needed to defeat threats.",
									"This Ranger Archetype is from Unearthed Arcana: Ranger and Rogue, and as such may not be allowed in your game. Consult your DM before choosing this option."
								]
							},
							{
								"-optional": "YES",
								"name": "Horizon Walker: Planar Magic",
								"text": [
									"Starting at 3rd level, you learn an additional spell when you reach certain levels in this class, as shown in the Horizon Walker Spells table. The spell counts as a ranger spell for you, and it doesn't count against the number of ranger spells you know. ",
									"3rd-protection from evil and good ",
									"5th-alter self ",
									"9th-protection from energy ",
									"13th-banishment ",
									"17th-teleportation circle"
								]
							},
							{
								"-optional": "YES",
								"name": "Horizon Walker: Planar Warrior",
								"text": "At 3rd level, you learn to draw on the energy of the planes to augment your attacks. As a bonus action, choose one creature you can see within 30 feet of you. Until the end of this turn, your attacks against that creature ignore its damage resistances, and the next time you hit it on this turn, it takes an additional 1d6 force damage."
							},
							{
								"-optional": "YES",
								"name": "Horizon Walker: Portal Lore",
								"text": [
									"At 3rd level, you gain the ability to detect the presence of planar portals. As an action, you detect the distance and direction to any planar portals within 1,000 feet of you. You also sense which plane of existence each portal leads to. However, if magic obscures any details of a portal, this feature doesn't reveal them. ",
									"Once you use this feature, you can't use it again until you finish a short or long rest. Alternatively, you can use the feature again if you expend a spell slot of 2nd level or higher. ",
									"See the \"Planar Travel\"section in chapter 2 of the Dungeon Master's Guide for examples of planar portals."
								]
							},
							{
								"-optional": "YES",
								"name": "Ranger Archetype: Primeval Guardian (UA)",
								"text": [
									"Rangers of the Primeval Guardian Conclave follow an ancient tradition rooted in powerful druidic magic. These rangers learn to become one with nature, allowing them to channel the aspects of various beasts and plants in order to overcome their foes. ",
									"These rangers dwell in the elder forests of the world. They venture out only rarely, as they consider it their sacred duty to protect the druidic groves and ancient trees that saw the earliest days of the world.",
									"This Ranger Archetype is from Unearthed Arcana: Ranger and Rogue, and as such may not be allowed in your game. Consult your DM before choosing this option."
								]
							},
							{
								"-optional": "YES",
								"name": "Primeval Guardian: Guardian Magic",
								"text": [
									"Starting at 3rd level, you learn an additional spell when you reach certain levels in this class, as shown in the Primeval Guardian Spells table. The spell counts as a ranger spell for you, and it doesn't count against the number of ranger spells you know.",
									"3rd-entangle ",
									"5th-enhance ability ",
									"9th-conjure animals ",
									"13th-giant insect ",
									"17th-insect plague"
								]
							},
							{
								"-optional": "YES",
								"name": "Primeval Guardian: Guardian Soul",
								"text": [
									"Starting at 3rd level, you gain the ability to temporarily grow and take on the appearance of a treelike person, covered with leaves and bark. As a bonus action, you assume this guardian form, which lasts until you end it as a bonus action or until you are incapacitated. ",
									"You undergo the following changes while in your guardian form: ",
									"• Your size becomes Large, unless you were larger. ",
									"• Any speed you have becomes 5 feet, unless the speed was lower. ",
									"• Your reach increases by 5 feet. ",
									"• You gain a number of temporary hit points at the start of each of your turns. The number equals half your ranger level. When the form ends, you lose any temporary hit points you have from it."
								]
							},
							{
								"-optional": "YES",
								"name": "Primeval Guardian: Piercing Thorns",
								"text": "At 3rd level, your command of primal magic allows you to enhance your attacks with thorns. Once during each of your turns, you can deal an additional 1d6 piercing damage to one creature you hit with a weapon attack."
							}
						]
					},
					{
						"-level": "7",
						"feature": [ {
							"-optional": "YES",
							"name": "Deep Stalker: Iron Mind",
							"text": "At 7th level, you gain proficiency in Wisdom saving throws.",
							"proficiency": "Wisdom"
						},
							{
								"-optional": "YES",
								"name": "Horizon Walker: Ethereal Step",
								"text": "At 7th level, you learn to step through the Ethereal Plane. As a bonus action on your turn, you can cast the etherealness spell with this feature, but the spell ends at the end of the current turn. Once you use this feature, you can't use it again until you finish a short or long rest."
							},
							{
								"-optional": "YES",
								"name": "Primeval Guardian: Ancient Fortitude",
								"text": "At 7th level, you gain the endurance of the ancient forests. Your hit point maximum and current hit points increase by 2 per ranger level when you assume your guardian form. This increase lasts until you leave the form; your hit point maximum then returns to normal, but your current hit points remain the same, unless they must decrease to abide by your hit point maximum."
							}
						]
					},
					{
						"-level": "11",
						"feature": [ {
							"-optional": "YES",
							"name": "Deep Stalker: Stalker's Flurry",
							"text": "Starting at 11th level, you have the ability to ensure that your attacks count. If you miss with an attack during your turn, you can immediately make an additional attack. You can gain one additional attack during your turn with this ability."
						},
							{
								"-optional": "YES",
								"name": "Horizon Walker: Distant Strike",
								"text": [
									"At 11th level, you gain the ability to step between the planes in a blink of an eye. When you use the Attack action, you can teleport up to 10 feet before each attack. You must be able to see the destination of the teleportation. ",
									"If you attack at least two different creatures with the action, you can make one additional attack with it against a third creature."
								]
							},
							{
								"-optional": "YES",
								"name": "Primeval Guardian: Rooted Defense",
								"text": "At 11th level, you gain the ability to twist and turn the ground beneath you. While you are in your guardian form, the ground within 30 feet of you is difficult terrain for your enemies."
							}
						]
					},
					{
						"-level": "15",
						"feature": [ {
							"-optional": "YES",
							"name": "Deep Stalker: Stalker's Dodge",
							"text": "At 15th level, you master the ability to disrupt an opponent's attacks. If a creature attacks you and does not have advantage on the attack roll, you can use your reaction to grant it disadvantage on the attack roll. You must use this ability before you know the result of the attack."
						},
							{
								"-optional": "YES",
								"name": "Horizon Walker: Spectral Defense",
								"text": "At 15th level, your ability to move between planes becomes even more finely tuned. As a reaction when you take damage, you can halve that damage against you. For a moment, you slip into the planar boundary to lessen the harm."
							},
							{
								"-optional": "YES",
								"name": "Primeval Guardian: Guardian Aura",
								"text": "Starting at 15th level, your guardian form emanates a magical aura that fortifies your injured allies. When any ally starts their turn within 30 feet of your guardian form, that ally regains a number of hit points equal to half your ranger level. This aura has no effect on a creature that has half or more of its hit points, and it has no effect on undead and constructs."
							}
						]
					}
				]
			},
			{
				"name": "Rogue",
				"hd": "8",
				"proficiency": "Dexterity, Intelligence",
				"spellAbility": "Intelligence",
				"autolevel": [ {
					"-level": "3",
					"slots": {
						"-optional": "YES",
						"#text": "3,2,0,0,0"
					}
				},
					{
						"-level": "4",
						"slots": {
							"-optional": "YES",
							"#text": "3,3,0,0,0"
						}
					},
					{
						"-level": "5",
						"slots": {
							"-optional": "YES",
							"#text": "3,3,0,0,0"
						}
					},
					{
						"-level": "6",
						"slots": {
							"-optional": "YES",
							"#text": "3,3,0,0,0"
						}
					},
					{
						"-level": "7",
						"slots": {
							"-optional": "YES",
							"#text": "3,4,2,0,0"
						}
					},
					{
						"-level": "8",
						"slots": {
							"-optional": "YES",
							"#text": "3,4,2,0,0"
						}
					},
					{
						"-level": "9",
						"slots": {
							"-optional": "YES",
							"#text": "3,4,2,0,0"
						}
					},
					{
						"-level": "10",
						"slots": {
							"-optional": "YES",
							"#text": "4,4,3,0,0"
						}
					},
					{
						"-level": "11",
						"slots": {
							"-optional": "YES",
							"#text": "4,4,3,0,0"
						}
					},
					{
						"-level": "12",
						"slots": {
							"-optional": "YES",
							"#text": "4,4,3,0,0"
						}
					},
					{
						"-level": "13",
						"slots": {
							"-optional": "YES",
							"#text": "4,4,3,2,0"
						}
					},
					{
						"-level": "14",
						"slots": {
							"-optional": "YES",
							"#text": "4,4,3,2,0"
						}
					},
					{
						"-level": "15",
						"slots": {
							"-optional": "YES",
							"#text": "4,4,3,2,0"
						}
					},
					{
						"-level": "16",
						"slots": {
							"-optional": "YES",
							"#text": "4,4,3,3,0"
						}
					},
					{
						"-level": "17",
						"slots": {
							"-optional": "YES",
							"#text": "4,4,3,3,0"
						}
					},
					{
						"-level": "18",
						"slots": {
							"-optional": "YES",
							"#text": "4,4,3,3,0"
						}
					},
					{
						"-level": "19",
						"slots": {
							"-optional": "YES",
							"#text": "4,4,3,3,1"
						}
					},
					{
						"-level": "20",
						"slots": {
							"-optional": "YES",
							"#text": "4,4,3,3,1"
						}
					},
					{
						"-level": "1",
						"feature": [ {
							"name": "Starting Proficiencies",
							"text": [
								"You are proficient with the following items, in addition to any proficiencies provided by your race or background.",
								"Armor: light armor",
								"Weapons: simple weapons, hand crossbows, longswords, rapiers, shortswords",
								"Tools: thieves' tools",
								"Skills: Choose four from Acrobatics, Athletics, Deception, Insight, Intimidation, Investigation, Perception, Performance. Persuasion, Sleight of Hand, and Stealth"
							]
						},
							{
								"name": "Starting Equipment",
								"text": [
									"You start with the following items, plus anything provided by your background.",
									"• (a) a rapier or (b) a shortsword",
									"• (a) a shortbow and quiver of 20 arrows or (b) a shortsword",
									"• (a) a burglar's pack, (b) a dungeoneer's pack, or (c) an explorer's pack",
									"• Leather armor, two daggers, and thieves' tools",
									"Alternatively, you may start with 4d4 x 10 gp to buy your own equipment."
								]
							}
						]
					},
					{
						"-level": "1",
						"feature": [ {
							"name": "Expertise",
							"text": [
								"At 1st level, choose two of your skill proficiencies, or one of your skill proficiencies and your proficiency with thieves' tools. Your proficiency bonus is doubled for any ability check you make that uses either of the chosen proficiencies.",
								"At 6th level, you can choose two more of your proficiencies (in skills or with thieves' tools) to gain this benefit."
							]
						},
							{
								"name": "Sneak Attack",
								"text": [
									"Beginning at 1st level, you know how to strike subtly and exploit a foe's distraction. Once per turn, you can deal an extra 1d6 damage to one creature you hit with an attack if you have advantage on the attack roll. The attack must use a finesse or a ranged weapon.",
									"You don't need advantage on the attack roll if another enemy of the target is within 5 feet of it, that enemy isn't incapacitated, and you don't have disadvantage on the attack roll.",
									"The amount of the extra damage increases as you gain levels in this class, as shown in the Sneak Attack column of the Rogue table."
								]
							},
							{
								"name": "Thieves' Cant",
								"text": [
									"During your rogue training you learned thieves' cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves' cant understands such messages. It takes four times longer to convey such a message than it does to speak the same idea plainly.",
									"In addition, you understand a set of secret signs and symbols used to convey short, simple messages, such as whether an area is dangerous or the territory of a thieves' guild, whether loot is nearby, or whether the people in an area are easy marks or will provide a safe house for thieves on the run."
								]
							}
						]
					},
					{
						"-level": "2",
						"feature": {
							"name": "Cunning Action",
							"text": "Starting at 2nd level, your quick thinking and agility allow you to move and act quickly. You can take a bonus action on each of your turns in combat. This action can be used only to take the Dash, Disengage, or Hide action."
						}
					},
					{
						"-level": "3",
						"feature": [ {
							"name": "Roguish Archetype",
							"text": "At 3rd level, you choose an archetype that you emulate in the exercise of your rogue abilities: Thief, Assassin, or Arcane Trickster, all detailed at the end of the class description. Your archetype choice grants you features at 3rd level and then again at 9th, 13th, and 17th level."
						},
							{
								"-optional": "YES",
								"name": "Roguish Archetype: Arcane Trickster",
								"text": "Some rogues enhance their fine-honed skills of stealth and agility with magic, learning tricks of enchantment and illusion. These rogues include pickpockets and burglars, but also pranksters, mischief-makers, and a significant number of adventurers."
							},
							{
								"-optional": "YES",
								"name": "Roguish Archetype: Assassin",
								"text": [
									"You focus your training on the grim art of the death. Those who adhere to this archetype are diverse - hired killers, spies, bounty hunters, and even specially anointed priests trained to exterminate the enemies of their deity. Stealth, poison, and disguise help you eliminate your foes with deadly efficiency.",
									"Your archetype grants you features at 3rd level and then again at 9th, 13th, and 17th level."
								]
							},
							{
								"-optional": "YES",
								"name": "Roguish Archetype: Mastermind",
								"text": [
									"Your focus is on people and on the influence and secrets they have. Many spies, courtiers, and schemers follow this archetype, leading lives of intrigue. Words are your weapons as often as knives or poison, and secrets and favors are some of your favorite treasures.",
									"Source: Sword Coast Adventurer's Guide, p. 135"
								]
							},
							{
								"-optional": "YES",
								"name": "Roguish Archetype: Swashbuckler",
								"text": [
									"You focus your training on the art of the blade, relying on speed, elegance, and charisma in equal parts. While other warriors are brutes clad in heavy armor, your method of fighting looks more like performance. Rakes, duelists, and pirates typically follow this archetype.",
									"A swashbuckler excels in single combat, and can fight with two weapons while safely darting away from an opponent. Swashbucklers are especially talented at making difficult maneuvers to escape enemies or attack from an unexpected direction."
								]
							},
							{
								"-optional": "YES",
								"name": "Roguish Archetype: Thief",
								"text": [
									"You hone your skills in the larcenous arts. Burglars, bandits, cutpurses, and other criminals typically follow this archetype, but so do rogues who prefer to think of themselves as professional treasure seekers, explorers, delvers, and investigators. In addition to improving your agility and stealth, you learn skills useful for delving into ancient ruins, reading unfamiliar languages, and using magic items you normally couldn't employ.",
									"Your archetype grants you features at 3rd level and then again at 9th, 13th, and 17th level."
								]
							},
							{
								"-optional": "YES",
								"name": "Arcane Trickster: Mage Hand Legerdemain",
								"text": [
									"Starting at 3rd level, when you cast mage hand, you can make the spectral hand invisible, and you can perform the following additional tasks with it:",
									"• You can stow one object the hand is holding in a container worn or carried by another creature.",
									"• You can retrieve an object in a container worn or carried by another creature.",
									"• You can use thieves' tools to pick lock and disarm traps at range.",
									"You can perform one of these tasks without being noticed by a creature if you succeed on a Dexterity (Sleight of Hand) check contested by the creature's Wisdom (Perception) check.",
									"In addition, you can use the bonus action granted by your Cunning Action to control the hand."
								]
							},
							{
								"name": "Arcane Trickster: Spellcasting",
								"text": [
									"When you reach 3rd level, you gain the ability to cast spells. See chapter 10 for the general rules of spellcasting and chapter 11 for the wizard spell list.",
									"Cantrips",
									"At 1st level, You learn three cantrips: mage hand and two other cantrips of your choice from the wizard spell list. You learn another wizard cantrip of your choice at 10th level.",
									"Spell Slots",
									"The Arcane Trickster Spellcasting table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
									"For example, if you know the 1st-level spell charm person and have a 1st-level and a 2nd-level spell slot available, you can cast charm person using either slot.",
									"Spells Known of 1st-Level and Higher",
									"You know three 1st-level wizard spells of your choice, two of which you must choose from the enchantment and illusion spells on the wizard spell list.",
									"The Spells Known column of the Arcane Trickster Spellcasting table shows when you learn more wizard spells of 1st level or higher. Each of these spells must be an enchantment or illusion spell of your choice, and must be of a level for which you have spell slots. For instance, when you reach 7th level in this class, you can learn one new spell of 1st or 2nd level.",
									"The spells you learn at 8th, 14th, and 20th level can come from any school of magic.",
									"Whenever you gain a level in this class, you can replace one of the wizard spells you know with another spell of your choice from the wizard spell list. The new spell must be of a level for which you have spell slots, and it must be an enchantment or illusion spell, unless you're replacing the spell you gained at 8th, 14th, or 20th level.",
									"Spellcasting Ability",
									"Intelligence is your spellcasting ability for your wizard spells, since you learn your spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.",
									"Spell save DC = 8 + your proficiency bonus + your Intelligence modifier",
									"Spell attack modifier = your proficiency bonus + your Intelligence modifier"
								]
							},
							{
								"-optional": "YES",
								"name": "Assassin: Assassinate",
								"text": "Starting at 3rd level, you are at your deadliest when you get the drop on your enemies. You have advantage on attack rolls against any creature that hasn't taken a turn in the combat yet. In addition, any hit you score against a creature that is surprised is a critical hit."
							},
							{
								"-optional": "YES",
								"name": "Assassin: Bonus Proficiencies",
								"text": "When you choose this archetype at 3rd level, you gain proficiency with the disguise kit and the poisoner's kit."
							},
							{
								"-optional": "YES",
								"name": "Mastermind: Master of Intrigue",
								"text": [
									"When you choose this archetype at 3rd level, you gain proficiency with the disguise kit, the forgery kit, and one gaming set of your choice. You also learn two languages of your choice. ",
									"Additionally, you can unerringly mimic the speech patterns and accent of a creature that you hear speak for at least 1 minute, allowing you to pass yourself off as a native speaker of a particular land, provided that you know the language."
								]
							},
							{
								"-optional": "YES",
								"name": "Mastermind: Master of Tactics",
								"text": "Starting at 3rd level, you can use the Help action as a bonus action. Additionally, when you use the Help action to aid an ally in attacking a creature, the target of that attack can be within 30 feet of you, rather than 5 feet of you, if the target can see or hear you."
							},
							{
								"-optional": "YES",
								"name": "Swashbuckler: Fancy Footwork",
								"text": "When you choose this archetype at 3rd level, you learn how to land a strike and then slip away without reprisal. During your turn, if you make a melee attack against a creature, that creature cannot make opportunity attacks against you for the rest of your turn."
							},
							{
								"-optional": "YES",
								"name": "Swashbuckler: Rakish Audacity",
								"text": [
									"Starting at 3rd level, your unmistakable confidence propels you into battle. You add your Charisma modifier to your initiative rolls. ",
									"In addition, you don't need advantage on your attack roll to use your Sneak Attack if no creature other than your target is within 5 feet of you. All the other rules for the Sneak Attack class feature still apply to you."
								]
							},
							{
								"-optional": "YES",
								"name": "Thief: Fast Hands",
								"text": "Starting at 3rd level, you can use the bonus action granted by your Cunning Action to make a Dexterity (Sleight of Hand) check, use your thieves' tools to disarm a trap or open a lock, or take the Use an Object action."
							},
							{
								"-optional": "YES",
								"name": "Thief: Second-Story Work",
								"text": [
									"When you choose this archetype at 3rd level, you gain the ability to climb faster than normal; climbing no longer costs you extra movement.",
									"In addition, when you make a running jump, the distance you cover increases by a number of feet equal to your Dexterity modifier."
								]
							}
						]
					},
					{
						"-level": "4",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 4th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "5",
						"feature": {
							"name": "Uncanny Dodge",
							"text": "Starting at 5th level, when an attacker that you can see hits you with an attack, you can use your reaction to halve the attack's damage against you."
						}
					},
					{
						"-level": "7",
						"feature": {
							"name": "Evasion",
							"text": "Beginning at 7th level, you can nimbly dodge out of the way of certain area effects, such as a red dragon's fiery breath or an ice storm spell. When you are subjected to an effect that allows you to make a Dexterity saving throw to take only half damage, you instead take no damage if you succeed on the saving throw, and only half damage if you fail."
						}
					},
					{
						"-level": "8",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 8th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "9",
						"feature": [ {
							"-optional": "YES",
							"name": "Arcane Trickster: Magical Ambush",
							"text": "Starting at 9th level, if you are hidden from a creature when you cast a spell on it, the creature has disadvantage on any saving throw it makes against the spell this turn."
						},
							{
								"-optional": "YES",
								"name": "Assassin: Infiltration Expertise",
								"text": [
									"Starting at 9th level, you can unfailingly create false identities for yourself. You must spend seven days and 25 gp to establish the history, profession, and affiliations for an identity. You can't establish an identity that belongs to someone else. For example, you might acquire appropriate clothing, letters of introduction, and official-looking certification to establish yourself as a member of a trading house from a remote city so you can insinuate yourself into the company of other wealthy merchants.",
									"Thereafter, if you adopt the new identity as a disguise, other creatures believe you to be that person until given an obvious reason not to."
								]
							},
							{
								"-optional": "YES",
								"name": "Mastermind: Insightful Manipulator",
								"text": [
									"Starting at 9th level, if you spend at least 1 minute observing or interacting with another creature outside combat, you can learn certain information about its capabilities compared to your own. The DM tells you if the creature is your equal, superior, or inferior in regard to two of the following characteristics of your choice: ",
									"- Intelligence score ",
									"- Wisdom score ",
									"- Charisma score ",
									"- Class levels (if any) ",
									"At the DM's option, you might also realize you know a piece of the creature's history or one of its personality traits, if it has any."
								]
							},
							{
								"-optional": "YES",
								"name": "Swashbuckler: Panache",
								"text": [
									"At 9th level, your charm becomes extraordinarily beguiling. As an action, you can make a Charisma (Persuasion) check contested by a creature's Wisdom (Insight) check. The creature must be able to hear you, and the two of you must share a language.",
									"If you succeed on the check and the creature is hostile to you, it has disadvantage on attack rolls against targets other than you and can't make opportunity attacks against targets other than you. This effect lasts for 1 minute, until one of your companions attacks the target or affects it with a spell, or until you and the target are more than 60 feet apart.",
									"If you succeed on the check and the creature isn't hostile to you, it is charmed by you for 1 minute. While charmed, it regards you as a friendly acquaintance. This effect ends immediately if you or your companions do anything harmful to it."
								]
							},
							{
								"-optional": "YES",
								"name": "Thief: Supreme Sneak",
								"text": "Starting at 9th level, you have advantage on a Dexterity (Stealth) check if you move no more than half your speed on the same turn."
							}
						]
					},
					{
						"-level": "10",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 10th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "11",
						"feature": {
							"name": "Reliable Talent",
							"text": "By 11th level, you have refined your chosen skills until they approach perfection. Whenever you make an ability check that lets you add your proficiency bonus, you can treat a d20 roll of 9 or lower as a 10."
						}
					},
					{
						"-level": "12",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 12th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "13",
						"feature": [ {
							"-optional": "YES",
							"name": "Arcane Trickster: Versatile Trickster",
							"text": "At 13th level, you gain the ability to distract targets with your mage hand. As a bonus action on your turn, you can designate a creature within 5 feet of the spectral hand created by the spell. Doing so gives you advantage on attack rolls against that creature until the end of the turn."
						},
							{
								"-optional": "YES",
								"name": "Assassin: Impostor",
								"text": [
									"At 13th level, you gain the ability to unerringly mimic another person's speech, writing, and behavior. You must spend at least three hours studying these three components of the person's behavior, listening to speech, examining handwriting, and observing mannerism.",
									"Your ruse is indiscernible to the casual observer. If a wary creature suspects something is amiss, you have advantage on any Charisma (Deception) check you make to avoid detection."
								]
							},
							{
								"-optional": "YES",
								"name": "Mastermind: Misdirection",
								"text": "Beginning at 13th level, you can sometimes cause another creature to suffer an attack meant for you. When you are targeted by an attack while a creature within 5 feet of you is granting you cover against that attack, you can use your reaction to have the attack target that creature instead of you."
							},
							{
								"-optional": "YES",
								"name": "Swashbuckler: Elegant Maneuver",
								"text": "Starting at 13th level, you can use a bonus action on your turn to gain advantage on the next Dexterity (Acrobatics) or Strength (Athletics) check you make during the same turn."
							},
							{
								"-optional": "YES",
								"name": "Thief: Use Magic Device",
								"text": "By 13th level, you have learned enough about the workings of magic that you can improvise the use of items even when they are not intended for you. You ignore all class, race, and level requirements on the use of magic items."
							}
						]
					},
					{
						"-level": "14",
						"feature": {
							"name": "Blindsense",
							"text": "Starting at 14th level, if you are able to hear, you are aware of the location of any hidden or invisible creature within 10 feet of you."
						}
					},
					{
						"-level": "15",
						"feature": {
							"name": "Slippery Mind",
							"text": "By 15th level, you have acquired greater mental strength. You gain proficiency in Wisdom saving throws."
						}
					},
					{
						"-level": "16",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 16th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "17",
						"feature": [ {
							"-optional": "YES",
							"name": "Arcane Trickster: Spell Thief",
							"text": [
								"At 17th level, you gain the ability to magically steal the knowledge of how to cast a spell from another spellcaster.",
								"Immediately after a creature casts a spell that targets you or includes you in its area of effect, you can use your reaction to force the creature to make a saving throw with its spellcasting ability modifier. The DC equals your spell save DC. On a failed save, you negate the spell's effect against you, and you steal the knowledge of the spell if it is at least 1st level and of a level you can cast (it doesn't need to be a wizard spell). For the next 8 hours, you know the spell and can cast it using your spell slots. The creature can't cast that spell until the 8 hours have passed.",
								"Once you use this feature, you can't use it again until you finish a long rest."
							]
						},
							{
								"-optional": "YES",
								"name": "Assassin: Death Strike",
								"text": "Starting at 17th level, you become a master of instant death. When you attack and hit a creature that is surprised, it must make a Constitution saving throw (DC 8 + your Dexterity modifier + your proficiency bonus). On a failed save, double the damage of your attack against the creature."
							},
							{
								"-optional": "YES",
								"name": "Mastermind: Soul of Deceit",
								"text": [
									"Starting at 17th level, your thoughts can't be read by telepathy or other means, unless you allow it. You can present false thoughts by making a Charisma (Deception) check contested by the mind reader's Wisdom (Insight) check.",
									"Additionally, no matter what you say, magic that would determine if you are telling the truth indicates you are being truthful, if you so choose, and you can't be compelled to tell the truth by magic."
								]
							},
							{
								"-optional": "YES",
								"name": "Swashbuckler: Master Duelist",
								"text": "Beginning at 17th level, your mastery of the blade lets you turn failure to success in combat. If you miss with an attack roll, you can choose to roll it again with advantage. Once you do so, you can't use this feature again until you finish a short or long rest."
							},
							{
								"-optional": "YES",
								"name": "Thief: Thief's Reflexes",
								"text": "When you reach 17th level, you have become adept at laying ambushes and quickly escaping danger. You can take two turns during the first round of any combat. You take your first turn at your normal initiative and your second turn at your initiative minus 10. You can't use this feature when you are surprised."
							}
						]
					},
					{
						"-level": "18",
						"feature": {
							"name": "Elusive",
							"text": "Beginning at 18th level, you are so evasive that attackers rarely gain the upper hand against you. No attack roll has advantage against you while you aren't incapacitated."
						}
					},
					{
						"-level": "19",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 19th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "20",
						"feature": {
							"name": "Stroke of Luck",
							"text": [
								"At 20th level, you have an uncanny knack for succeeding when you need to. If your attack misses a target within range, you can turn the miss into a hit. Alternatively, if you fail an ability check, you can treat the d20 roll as a 20.",
								"Once you use this feature, you can't use it again until you finish a short or long rest."
							]
						}
					},
					{
						"-level": "3",
						"feature": [ {
							"-optional": "YES",
							"name": "Roguish Archetype: Inquisitive (UA)",
							"text": [
								"As an archetypal Inquisitive, you excel at rooting out secrets and unraveling mysteries. You rely on your sharp eye for details, but also on your finely honed ability to read the words and deeds of other creatures to determine their true intent. You excel at defeating creatures that hide among and prey upon ordinary folk, and your mastery of lore and your sharp eye make you well equipped to expose and end hidden evils.",
								"",
								"This Roguish Archetype is from Unearthed Arcana: Gothic Heroes, and as such may not be allowed in your game. Consult your DM before choosing this option."
							]
						},
							{
								"-optional": "YES",
								"name": "Roguish Archetype: Scout (UA)",
								"text": [
									"You are skilled in woodcraft and stealth, allowing you to range ahead of your companions during expeditions. Rogues who embrace this archetype are at home in the wilderness and among barbarians and fighters, as they serve as the eyes and ears of war bands across the world. Compared to other rogues, you are skilled at surviving in the wild.",
									"",
									"This Roguish Archetype is from Unearthed Arcana: Ranger and Rogue, and as such may not be allowed in your game. Consult your DM before choosing this option."
								]
							},
							{
								"-optional": "YES",
								"name": "Inquisitive: Ear for Deceit",
								"text": "When you choose this archetype at 3rd level, you develop a keen ear for picking out lies. Whenever you make a Wisdom (Insight) check to sense if a creature is lying, you use the total of your check or 8 + your Wisdom modifier, whichever is higher. If you are proficient in Insight, you add your proficiency bonus to the fixed result. If you chose Insight as a skill augmented by your Expertise feature, add double your proficiency bonus."
							},
							{
								"-optional": "YES",
								"name": "Inquisitive: Eye for Detail",
								"text": "Starting at 3rd level, you can use the bonus action granted by your Cunning Action feature to make a Wisdom (Perception) check to spot a hidden creature or object, to make an Intelligence (Investigation) check to uncover and decipher clues, or to use Insightful Fighting (see below)."
							},
							{
								"-optional": "YES",
								"name": "Inquisitive: Insightful Fighting",
								"text": [
									"At 3rd level, you gain the ability to decipher an opponent's tactics and develop a counter to them. As an action (or as a bonus action using Eye for Detail), you make a Wisdom (Insight) check against a creature you can see that isn't incapacitated, opposed by the target's Charisma (Deception) check. If you succeed, you can use Sneak Attack against that creature even if you do not have advantage against it or if no enemy of the target is within 5 feet of it. You can use Sneak Attack in this way even if you have disadvantage against the target. ",
									"This benefit lasts for 1 minute or until you successfully use Insightful Fighting against a different target."
								]
							},
							{
								"-optional": "YES",
								"name": "Scout: Survivalist",
								"text": "When you choose this archetype at 3rd level, you gain proficiency in the Nature and Survival skills. Your proficiency bonus is doubled for any ability check you make that uses either of those proficiencies.",
								"proficiency": "Nature, Survival",
								"modifier": [ {
									"-category": "skills",
									"#text": "Nature +PROF"
								},
									{
										"-category": "skills",
										"#text": "Survival +PROF"
									}
								]
							},
							{
								"-optional": "YES",
								"name": "Scout: Skirmisher",
								"text": "Starting at 3rd level, you are difficult to pin down during a fight. You can move up to half your speed as a reaction when an enemy ends its turn within 5 feet of you. This movement doesn’t provoke opportunity attacks."
							}
						]
					},
					{
						"-level": "9",
						"feature": [ {
							"-optional": "YES",
							"name": "Inquisitive: Steady Eye",
							"text": "At 9th level, you gain advantage on any Wisdom (Perception) check made on your turn to find a hidden creature or object if you do not move during that turn. If you use this ability before moving, you cannot move or ready movement during your turn."
						},
							{
								"-optional": "YES",
								"name": "Scout: Superior Mobility",
								"text": "At 9th level, your walking speed increases by 10 feet. If you have a climbing or swimming speed, this increase applies to that speed as well.",
								"modifier": {
									"-category": "bonus",
									"#text": "speed +10"
								}
							}
						]
					},
					{
						"-level": "13",
						"feature": [ {
							"-optional": "YES",
							"name": "Inquisitive: Unerring Eye",
							"text": "At 13th level, you gain the ability to detect magical deception. As an action, you sense the presence within 30 feet of you of illusions, shapechanger creatures not in their true form, and other magic designed to deceive the senses. Though you determine that an effect is attempting to trick you, you gain no special insight into what is hidden or its true nature."
						},
							{
								"-optional": "YES",
								"name": "Scout: Ambush Master",
								"text": [
									"Starting at 13th level, you excel at leading ambushes. If any of your foes are surprised, you can use a bonus action on your turn in the first round of the combat to grant each ally who can see you a +5 bonus to initiative that lasts until the combat ends. If the initiative bonus would increase an ally’s initiative above yours, the ally’s initiative instead equals your initiative.",
									"Each of the allies also receives a 10 -foot increase to speed that lasts until the end of the ally’s next turn."
								]
							}
						]
					},
					{
						"-level": "17",
						"feature": [ {
							"-optional": "YES",
							"name": "Inquisitive: Eye for Weakness",
							"text": "At 17th level, you learn to exploit a creature's weaknesses by carefully studying its tactics and movement. While your Insightful Fighting feature applies to a creature, your Sneak Attack damage against that creature increases by 2d6."
						},
							{
								"-optional": "YES",
								"name": "Scout: Sudden Strike",
								"text": "Starting at 17th level, you can strike with deadly speed. If you take the Attack action on your turn, you can make one additional attack as a bonus action. This attack can benefit from your Sneak Attack even if you have already used it this turn, but only if the attack is the only one you make against the target this turn."
							}
						]
					}
				]
			},
			{
				"name": "Sorcerer",
				"hd": "6",
				"proficiency": "Constitution, Charisma",
				"spellAbility": "Charisma",
				"autolevel": [ {
					"-level": "1",
					"slots": "4,2,0,0,0,0,0,0,0,0"
				},
					{
						"-level": "2",
						"slots": "4,3,0,0,0,0,0,0,0,0"
					},
					{
						"-level": "3",
						"slots": "4,4,2,0,0,0,0,0,0,0"
					},
					{
						"-level": "4",
						"slots": "5,4,3,0,0,0,0,0,0,0"
					},
					{
						"-level": "5",
						"slots": "5,4,3,2,0,0,0,0,0,0"
					},
					{
						"-level": "6",
						"slots": "5,4,3,3,0,0,0,0,0,0"
					},
					{
						"-level": "7",
						"slots": "5,4,3,3,1,0,0,0,0,0"
					},
					{
						"-level": "8",
						"slots": "5,4,3,3,2,0,0,0,0,0"
					},
					{
						"-level": "9",
						"slots": "5,4,3,3,3,1,0,0,0,0"
					},
					{
						"-level": "10",
						"slots": "6,4,3,3,3,2,0,0,0,0"
					},
					{
						"-level": "11",
						"slots": "6,4,3,3,3,2,1,0,0,0"
					},
					{
						"-level": "12",
						"slots": "6,4,3,3,3,2,1,0,0,0"
					},
					{
						"-level": "13",
						"slots": "6,4,3,3,3,2,1,1,0,0"
					},
					{
						"-level": "14",
						"slots": "6,4,3,3,3,2,1,1,0,0"
					},
					{
						"-level": "15",
						"slots": "6,4,3,3,3,2,1,1,1,0"
					},
					{
						"-level": "16",
						"slots": "6,4,3,3,3,2,1,1,1,0"
					},
					{
						"-level": "17",
						"slots": "6,4,3,3,3,2,1,1,1,1"
					},
					{
						"-level": "18",
						"slots": "6,4,3,3,3,3,1,1,1,1"
					},
					{
						"-level": "19",
						"slots": "6,4,3,3,3,3,2,1,1,1"
					},
					{
						"-level": "20",
						"slots": "6,4,3,3,3,3,2,2,1,1"
					},
					{
						"-level": "1",
						"feature": [ {
							"name": "Starting Proficiencies",
							"text": [
								"You are proficient with the following items, in addition to any proficiencies provided by your race or background.",
								"Armor: none",
								"Weapons: daggers, darts, slings, quarterstaffs, light crossbows",
								"Tools: none",
								"Skills: Choose two from Arcana, Deception, Insight, Intimidation, Persuasion, and Religion"
							]
						},
							{
								"name": "Starting Equipment",
								"text": [
									"You start with the following items, plus anything provided by your background.",
									"• (a) a light crossbow and 20 bolts or (b) any simple weapon",
									"• (a) a component pouch or (b) an arcane focus",
									"• (a) a dungeoneer's pack or (b) an explorer's pack",
									"• Two daggers",
									"Alternatively, you may start with 3d4 x 10 gp to buy your own equipment."
								]
							}
						]
					},
					{
						"-level": "1",
						"feature": [ {
							"name": "Spellcasting",
							"text": [
								"An event in your past, or in the life of a parent or ancestor, left an indelible mark on you, infusing you with arcane magic. This font of magic, whatever its origin, fuels your spells. See chapter 10 for the general rules of spellcasting and chapter 11 for the sorcerer spell list.",
								"Cantrips",
								"At 1st level, you know four cantrips of your choice from the sorcerer spell list. You learn an additional sorcerer cantrip of your choice at 4th level and another at 10th level.",
								"Spell Slots",
								"The Sorcerer table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these sorcerer spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
								"For example, if you know the 1st-level spell burning hands and have a 1st-level and a 2nd-level spell slot available, you can cast burning hands using either slot.",
								"Spells Known of 1st Level and Higher",
								"You know two 1st-level spells of your choice from the sorcerer spell list.",
								"You learn an additional sorcerer spell of your choice at each level except 12th, 14th, 16th, 18th, 19th, and 20th. Each of these spells must be of a level for which you have spell slots. For instance, when you reach 3rd level in this class, you can learn one new spell of 1st or 2nd level.",
								"Additionally, when you gain a level in this class, you can choose one of the sorcerer spells you know and replace it with another spell from the sorcerer spell list, which also must be of a level for which you have spell slots.",
								"Spellcasting Ability",
								"Charisma is your spellcasting ability for your sorcerer spells, since the power of your magic relies on your ability to project your will into the world. You use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a sorcerer spell you cast and when making an attack roll with one.",
								"Spell save DC = 8 + your proficiency bonus + your Charisma modifier",
								"Spell attack modifier = your proficiency bonus + your Charisma modifier"
							]
						},
							{
								"name": "Sorcerous Origin",
								"text": [
									"Choose a sorcerous origin, which describes the source of your innate magical power: Draconic Bloodline, Wild Magic, Favored Soul, or Storm Sorcerer.",
									"Your choice grants you features when you choose it at 1st level and again at 6th, 14th, and 18th level."
								]
							},
							{
								"-optional": "YES",
								"name": "Sorcerous Origin: Draconic Bloodline",
								"text": "Your innate magic comes from draconic magic that was mingled with your blood or that of your ancestors. Most often, sorcerers with this origin trace their descent back to a mighty sorcerer of ancient times who made a bargain with a dragon or who might even have claimed a dragon parent. Some of these bloodlines are well established in the world, but most are obscure. Any given sorcerer could be the first of a new bloodline, as a result of a pact or some other exceptional circumstance."
							},
							{
								"-optional": "YES",
								"name": "Sorcerous Origin: Wild Magic",
								"text": "Your innate magic comes from the wild forces of chaos that underlie the order of creation. You might have endured exposure to some form of raw magic, perhaps through a planar portal leading to Limbo, the Elemental Planes, or the mysterious Far Realm. Perhaps you were blessed by a powerful fey creature or marked by a demon. Or your magic could be a fluke of your birth, with no apparent cause or reason. However it came to be, this chaotic magic churns within you, waiting for any outlet."
							},
							{
								"-optional": "YES",
								"name": "Sorcerous Origin: Storm",
								"text": [
									"Your innate magic comes from the power of elemental air. Perhaps you were born during a howling gale so powerful that folk still tell stories of it. Your lineage might include the influence of potent air creatures such as vaati or djinni. Whatever the case, the magic of the storm permeates your soul.",
									"Storm sorcerers are invaluable members of a ship's crew. Their magic allows them to exert control over wind and weather in their immediate area. Their abilities also prove useful in repelling attacks by sahuagin, pirates, and other waterborne threats."
								]
							},
							{
								"-optional": "YES",
								"name": "Dragon Ancestor",
								"text": [
									"At 1st level, you choose one type of dragon as your ancestor. The damage type associated with each dragon is used by features you gain later.",
									"chose one and delete the others",
									"Draconic Ancestor: Black (Acid)",
									"Draconic Ancestor: Blue (Lightning)",
									"Draconic Ancestor: Brass (Fire)",
									"Draconic Ancestor: Bronze (Lightning)",
									"Draconic Ancestor: Copper (Acid)",
									"Draconic Ancestor: Gold (Fire)",
									"Draconic Ancestor: Green (Poison)",
									"Draconic Ancestor: Red (Fire)",
									"Draconic Ancestor: Silver (Cold)",
									"Draconic Ancestor: White (Cold)",
									"You can speak, read, and write Draconic. Additionally, whenever you make a Charisma check when interacting with dragons, your Proficiency bonus is doubled if it applies to the check."
								]
							},
							{
								"-optional": "YES",
								"name": "Draconic Bloodline: Draconic Resilience",
								"text": [
									"As magic flows through your body, it causes physical traits of your dragon ancestors to emerge. At 1st level, your hit point maximum increases by 1 and increases by 1 again whenever you gain a level in this class.",
									"Additionally, parts of your skin are covered by a thin sheen of dragon-like scales. When you aren't wearing armor, your AC equals 13 + your Dexterity modifier."
								]
							},
							{
								"-optional": "YES",
								"name": "Storm: Tempestuous Magic",
								"text": "Starting at 1st level, you can use a bonus action on your turn to cause whirling gusts of elemental air to briefly surround you, immediately before or after you cast a spell of 1st level or higher. Doing so allows you to fly up to 10 feet without provoking opportunity attacks."
							},
							{
								"-optional": "YES",
								"name": "Storm: Wind Speaker",
								"text": "The arcane magic you command is infused with elemental air. You can speak, read, and write Primordial. (Knowing this language allows you to understand and be understood by those who speak its dialects: Aquan, Auran, Ignan, and Terran.)"
							},
							{
								"-optional": "YES",
								"name": "Wild Magic: Wild Magic Surge",
								"text": [
									"Starting when you choose this origin at 1st level, your spellcasting can unleash surges of untamed magic. Immediately after you cast a sorcerer spell of 1st level or higher, the DM can have you roll a d20. If you roll a 1, roll on the Wild Magic Surge table to create a random magical effect. A Wild Magic Surge can happen once per turn.",
									"If a Wild Magic effect is a spell, it's too wild to be affected by Metamagic. If it normally requires concentration, it doesn't require concentration in this case; the spell lasts for its full duration.",
									"Wild Magic Surge",
									"d100 — Effect",
									"01-02 — Roll on this table at the start of each of your turns for the next minute, ignoring this result on subsequent rolls.",
									"03-04 — For the next minute, you can see any invisible creature if you have line of sight to it.",
									"05-06 — A modron chosen and controlled by the DM appears in an unoccupied space within 5 feet of you, then disappears 1 minute later.",
									"07-08 — You cast fireball as a 3rd-level spell centered on yourself.",
									"09-10 — You cast magic missile as a 5th-level spell.",
									"11-12 — Roll a d10. Your height changes by a number of inches equal to the roll. If the roll is odd, you shrink. If the roll is even, you grow.",
									"13-14 — You cast confusion centered on yourself.",
									"15-16 — For the next minute, you regain 5 hit points at the start of each of your turns.",
									"17-18 — You grow a long beard made of feathers that remains until you sneeze, at which point the feathers explode out from your face.",
									"19-20 — You cast grease centered on yourself.",
									"21-22 — Creatures have disadvantage on saving throws against the next spell you cast in the next minute that involves a saving throw.",
									"23-24 — Your skin turns a vibrant shade of blue. A remove curse spell can end this effect.",
									"25-26 — An eye appears on your forehead for the next minute. During that time, you have advantage on Wisdom (Perception) checks that rely on sight.",
									"27-28 — For the next minute, all your spells with a casting time feet of 1 action have a casting time of 1 bonus action.",
									"29-30 — You teleport up to 60 feet to an unoccupied space of your choice that you can see.",
									"31-32 — You are transported to the Astral Plane until the end of your next turn, after which time you return to the space you previously occupied or the nearest unoccupied space if that space is occupied.",
									"33-34 — Maximize the damage of the next damaging spell you cast within the next minute.",
									"35-36 — Roll a d10. Your age changes by a number of years equal to the roll. If the roll is odd, you get younger (minimum 1 year old). If the roll is even, you get older.",
									"37-38 — 1d6 flumphs controlled by the DM appear in unoccupied spaces within 60 feet of you and are frightened of you. They vanish after 1 minute.",
									"39-40 — You regain 2d10 hit points.",
									"41-42 — You turn into a potted plant until the start of your next turn. While a plant, you are incapacitated and have vulnerability to all damage. If you drop to 0 hit points, your pot breaks, and your form reverts.",
									"43-44 — For the next minute, you can teleport up to 20 feet as next minute. a bonus action on each of your turns.",
									"45-46 — You cast levitate on yourself.",
									"47-48 — A unicorn controlled by the DM appears in a space within 5 feet of you, then disappears 1 minute later.",
									"49-50 — You can't speak for the next minute. Whenever you try, pink bubbles float out of your mouth.",
									"51-52 — A spectral shield hovers near you for the next minute, granting you a +2 bonus to AC and immunity to magic missile.",
									"53-54 — You are immune to being intoxicated by alcohol for the next 5d6 days.",
									"55-56 — Your hair falls out but grows back within 24 hours.",
									"57-58 — For the next minute, any flammable object you touch that isn't being worn or carried by another creature bursts into flame.",
									"59-60 — You regain your lowest-level expended spell slot.",
									"61-62 — For the next minute, you must shout when you speak.",
									"63-64 — You cast fog cloud centered on yourself.",
									"65-66 — Up to three creatures you choose within 30 feet of you take 4d10 lightning damage.",
									"67-68 — You are frightened by the nearest creature until the end of your next turn.",
									"69-70 — Each creature within 30 feet of you becomes invisible for the next minute. The invisibility ends on a creature when it attacks or casts a spell.",
									"71-72 — You gain resistance to all damage for the next minute.",
									"73-74 — A random creature within 60 feet of you becomes poisoned for 1d4 hours.",
									"75-76 — You glow with bright light in a 30-foot radius for the next minute. Any creature that ends its turn within 5 feet of you is blinded until the end of its next turn.",
									"79-80 — Illusory butterflies and flower petals flutter in the air within 10 feet of you for the next minute.",
									"77-78 — You cast polymorph on yourself. If you fail the saving throw, you turn into a sheep for the spell's duration.",
									"81-82 — You can take one additional action immediately.",
									"83-84 — Each creature within 30 feet of you takes 1d10 necrotic damage. You regain hit points equal to the sum of the necrotic damage dealt.",
									"85-86 — You cast mirror image.",
									"87-88 — You cast fly on a random creature within 60 feet of you.",
									"89-90 — You become invisible for the next minute. During that time, other creatures can't hear you. The invisibility ends if you attack or cast a spell.",
									"91-92 — If you die within the next minute, you immediately come back to life as if by the reincarnate spell.",
									"93-94 — Your size increases by one size category for the next minute.",
									"95-96 — You and all creatures within 30 feet of you gain vulnerability to piercing damage for the next minute.",
									"97-98 — You are surrounded by faint, ethereal music for the next minute.",
									"99-100 — You regain all expended sorcery points."
								]
							},
							{
								"-optional": "YES",
								"name": "Wild Magic: Tides of Chaos",
								"text": [
									"Starting at 1st level, you can manipulate the forces of chance and chaos to gain advantage on one attack roll, ability check, or saving throw. Once you do so, you must finish a long rest before you can use this feature again.",
									"Any time before you regain the use of this feature, the DM can have you roll on the Wild Magic Surge table immediately after you cast a sorcerer spell of 1st level or higher. You then regain the use of this feature."
								]
							}
						]
					},
					{
						"-level": "2",
						"feature": [ {
							"name": "Sorcery Points",
							"text": "You have 2 sorcery points, and you gain one additional point every time you level up, to a maximum of 20 at level 20. You can never have more sorcery points than shown on the table for your level. You regain all spent sorcery points when you finish a long rest."
						},
							{
								"name": "Flexible Casting",
								"text": [
									"You can use your sorcery points to gain additional spell slots, or sacrifice spell slots to gain additional sorcery points. You learn other ways to use your sorcery points as you reach higher levels.",
									"Creating Spell Slots. You can transform unexpended sorcery points into one spell slot as a bonus action on your turn. The created spell slots vanish at the end of a long rest. The Creating Spell Slots table shows the cost of creating a spell slot of a given level. You can create spell slots no higher in level than 5th.",
									"Creating Spell Slots",
									"Spell Slot Level — Sorcery Point Cost",
									"1st — 2",
									"2nd — 3",
									"3rd — 5",
									"4th — 6",
									"5th — 7",
									"Converting a Spell Slot to Sorcery Points. As a bonus action on your turn, you can expend one spell slot and gain a number of sorcery points equal to the slot's level."
								]
							}
						]
					},
					{
						"-level": "3",
						"feature": [ {
							"name": "Metamagic",
							"text": [
								"At 3rd level, you gain the ability to twist your spells to suit your needs. You gain two of the following Metamagic options of your choice. You gain another one at 10th and 17th level.",
								"You can use only one Metamagic option on a spell when you cast it, unless otherwise noted."
							]
						},
							{
								"-optional": "YES",
								"name": "Metamagic: Careful Spell",
								"text": "When you cast a spell that forces other creatures to make a saving throw, you can protect some of those creatures from the spell's full force. To do so, you spend 1 sorcery point and choose a number of those creatures up to your Charisma modifier (minimum of one creature). A chosen creature automatically succeeds on its saving throw against the spell."
							},
							{
								"-optional": "YES",
								"name": "Metamagic: Distant Spell",
								"text": [
									"When you cast a spell that has a range of 5 feet or greater, you can spend 1 sorcery point to double the range of the spell.",
									"When you cast a spell that has a range of touch, you can spend 1 sorcery point to make the range of the spell 30 feet."
								]
							},
							{
								"-optional": "YES",
								"name": "Metamagic: Empowered Spell",
								"text": [
									"When you roll damage for a spell, you can spend 1 sorcery point to reroll a number of the damage dice up to your Charisma modifier (minimum of one). You must use the new rolls.",
									"You can use Empowered Spell even if you have already used a different Metamagic option during the casting of the spell."
								]
							},
							{
								"-optional": "YES",
								"name": "Metamagic: Extended Spell",
								"text": "When you cast a spell that has a duration of 1 minute or longer, you can spend 1 sorcery point to double its duration, to a maximum duration of 24 hours."
							},
							{
								"-optional": "YES",
								"name": "Metamagic: Heightened Spell",
								"text": "When you cast a spell that forces a creature to make a saving throw to resist its effects, you can spend 3 sorcery points to give one target of the spell disadvantage on its first saving throw made against the spell."
							},
							{
								"-optional": "YES",
								"name": "Metamagic: Quickened Spell",
								"text": "When you cast a spell that has a casting time of 1 action, you can spend 2 sorcery points to change the casting time to 1 bonus action for this casting."
							},
							{
								"-optional": "YES",
								"name": "Metamagic: Subtle Spell",
								"text": "When you cast a spell, you can spend 1 sorcery point to cast it without any somatic or verbal components."
							},
							{
								"-optional": "YES",
								"name": "Metamagic: Twinned Spell",
								"text": "When you cast a spell that doesn't have a range of self and is incapable of targeting more than one creature at the spell's current level, you can spend a number of sorcery points equal to the spell's level to target a second creature in range with the same spell (1 sorcery point if the spell is a cantrip)."
							}
						]
					},
					{
						"-level": "4",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 4th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "6",
						"feature": [ {
							"-optional": "YES",
							"name": "Draconic Bloodline: Elemental Affinity",
							"text": [
								"Starting at 6th level, when you cast a spell that deals damage of the type associated with your draconic ancestry, add your Charisma modifier to one damage roll.",
								"In addition, you can spend 1 sorcery point to gain resistance to that damage type for 1 hour."
							]
						},
							{
								"-optional": "YES",
								"name": "Wild Magic: Bend Luck",
								"text": "Starting at 6th level, you have the ability to twist fate using your wild magic. When another creature you can see makes an attack roll, an ability check, or a saving throw, you can use your reaction and spend 2 sorcery points to roll 1d4 and apply the number rolled as a bonus or penalty (your choice) to the creature's roll. You can do so after the creature rolls but before any effects of the roll occur."
							},
							{
								"-optional": "YES",
								"name": "Storm: Heart of the Storm",
								"text": "At 6th level, you gain resistance to lightning and thunder damage. In addition, whenever you cast a spell of 1st level or higher that deals lightning or thunder damage, stormy magic erupts from you. This eruption causes creatures of your choice that you can see within 10 feet of you to take lightning or thunder damage (choose each time this ability activates) equal to half your sorcerer level."
							},
							{
								"-optional": "YES",
								"name": "Storm: Storm Guide",
								"text": [
									"At 6th level, you gain the ability to subtly control the weather around you.",
									"If it is raining, you can use an action to cause the rain to stop falling in a 20-foot radius centered on you. You can end this effect as a bonus action.",
									"If it is windy, you can use a bonus action each round to choose the direction that the wind blows in a 100-foot radius around you. The wind blows in that direction until the end of your next turn. You have no ability to alter the speed of the wind."
								]
							}
						]
					},
					{
						"-level": "8",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 8th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "10",
						"feature": [ {
							"name": "Metamagic Option (3rd)",
							"text": "At 10th level, you learn an additional metamagic option."
						},
							{
								"-optional": "YES",
								"name": "Metamagic: Careful Spell",
								"text": "When you cast a spell that forces other creatures to make a saving throw, you can protect some of those creatures from the spell's full force. To do so, you spend 1 sorcery point and choose a number of those creatures up to your Charisma modifier (minimum of one creature). A chosen creature automatically succeeds on its saving throw against the spell."
							},
							{
								"-optional": "YES",
								"name": "Metamagic: Distant Spell",
								"text": [
									"When you cast a spell that has a range of 5 feet or greater, you can spend 1 sorcery point to double the range of the spell.",
									"When you cast a spell that has a range of touch, you can spend 1 sorcery point to make the range of the spell 30 feet."
								]
							},
							{
								"-optional": "YES",
								"name": "Metamagic: Empowered Spell",
								"text": [
									"When you roll damage for a spell, you can spend 1 sorcery point to reroll a number of the damage dice up to your Charisma modifier (minimum of one). You must use the new rolls.",
									"You can use Empowered Spell even if you have already used a different Metamagic option during the casting of the spell."
								]
							},
							{
								"-optional": "YES",
								"name": "Metamagic: Extended Spell",
								"text": "When you cast a spell that has a duration of 1 minute or longer, you can spend 1 sorcery point to double its duration, to a maximum duration of 24 hours."
							},
							{
								"-optional": "YES",
								"name": "Metamagic: Heightened Spell",
								"text": "When you cast a spell that forces a creature to make a saving throw to resist its effects, you can spend 3 sorcery points to give one target of the spell disadvantage on its first saving throw made against the spell."
							},
							{
								"-optional": "YES",
								"name": "Metamagic: Quickened Spell",
								"text": "When you cast a spell that has a casting time of 1 action, you can spend 2 sorcery points to change the casting time to 1 bonus action for this casting."
							},
							{
								"-optional": "YES",
								"name": "Metamagic: Subtle Spell",
								"text": "When you cast a spell, you can spend 1 sorcery point to cast it without any somatic or verbal components."
							},
							{
								"-optional": "YES",
								"name": "Metamagic: Twinned Spell",
								"text": "When you cast a spell that targets only one creature and doesn't have a range of self, you can spend a number of sorcery points equal to the spell's level to target a second creature in range with the same spell (1 sorcery point if the spell is a cantrip)."
							}
						]
					},
					{
						"-level": "12",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 12th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "14",
						"feature": [ {
							"-optional": "YES",
							"name": "Draconic Bloodline: Dragon Wings",
							"text": [
								"At 14th level, you gain the ability to sprout a pair of dragon wings from your back, gaining a flying speed equal to your current speed. You can create these wings as a bonus action on your turn. They last until you dismiss them as a bonus action on your turn.",
								"You can't manifest your wings while wearing armor unless the armor is made to accommodate them, and clothing not made to accommodate your wings might be destroyed when you manifest them."
							]
						},
							{
								"-optional": "YES",
								"name": "Wild Magic: Controlled Chaos",
								"text": "At 14th level, you gain a modicum of control over the surges of your wild magic. Whenever you roll on the Wild Magic Surge table, you can roll twice and use either number."
							},
							{
								"-optional": "YES",
								"name": "Storm: Storm's Fury",
								"text": "Starting at 14th level, when you are hit by a melee attack, you can use your reaction to deal lightning damage to the attacker. The damage equals your sorcerer level. The attacker must also make a Strength saving throw against your sorcerer spell save DC. On a failed save, the attacker is pushed in a straight line up to 20 feet away from you."
							}
						]
					},
					{
						"-level": "16",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 16th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "17",
						"feature": [ {
							"name": "Metamagic Option (4th)",
							"text": "At 17th level, you learn an additional metamagic option."
						},
							{
								"-optional": "YES",
								"name": "Metamagic: Careful Spell",
								"text": "When you cast a spell that forces other creatures to make a saving throw, you can protect some of those creatures from the spell's full force. To do so, you spend 1 sorcery point and choose a number of those creatures up to your Charisma modifier (minimum of one creature). A chosen creature automatically succeeds on its saving throw against the spell."
							},
							{
								"-optional": "YES",
								"name": "Metamagic: Distant Spell",
								"text": [
									"When you cast a spell that has a range of 5 feet or greater, you can spend 1 sorcery point to double the range of the spell.",
									"When you cast a spell that has a range of touch, you can spend 1 sorcery point to make the range of the spell 30 feet."
								]
							},
							{
								"-optional": "YES",
								"name": "Metamagic: Empowered Spell",
								"text": [
									"When you roll damage for a spell, you can spend 1 sorcery point to reroll a number of the damage dice up to your Charisma modifier (minimum of one). You must use the new rolls.",
									"You can use Empowered Spell even if you have already used a different Metamagic option during the casting of the spell."
								]
							},
							{
								"-optional": "YES",
								"name": "Metamagic: Extended Spell",
								"text": "When you cast a spell that has a duration of 1 minute or longer, you can spend 1 sorcery point to double its duration, to a maximum duration of 24 hours."
							},
							{
								"-optional": "YES",
								"name": "Metamagic: Heightened Spell",
								"text": "When you cast a spell that forces a creature to make a saving throw to resist its effects, you can spend 3 sorcery points to give one target of the spell disadvantage on its first saving throw made against the spell."
							},
							{
								"-optional": "YES",
								"name": "Metamagic: Quickened Spell",
								"text": "When you cast a spell that has a casting time of 1 action, you can spend 2 sorcery points to change the casting time to 1 bonus action for this casting."
							},
							{
								"-optional": "YES",
								"name": "Metamagic: Subtle Spell",
								"text": "When you cast a spell, you can spend 1 sorcery point to cast it without any somatic or verbal components."
							},
							{
								"-optional": "YES",
								"name": "Metamagic: Twinned Spell",
								"text": "When you cast a spell that targets only one creature and doesn't have a range of self, you can spend a number of sorcery points equal to the spell's level to target a second creature in range with the same spell (1 sorcery point if the spell is a cantrip)."
							}
						]
					},
					{
						"-level": "18",
						"feature": [ {
							"-optional": "YES",
							"name": "Draconic Bloodline: Draconic Presence",
							"text": "Beginning at 18th level, you can channel the dread presence of your dragon ancestor, causing those around you to become awestruck or frightened. As an action, you can spend 5 sorcery points to draw on this power and exude an aura of awe or fear (your choice) to a distance of 60 feet. For 1 minute or until you lose your concentration (as if you were casting a concentration spell), each hostile creature that starts its turn in this aura must succeed on a Wisdom saving throw or be charmed (if you chose awe) or frightened (if you chose fear) until the aura ends. A creature that succeeds on this saving throw is immune to your aura for 24 hours."
						},
							{
								"-optional": "YES",
								"name": "Wild Magic: Spell Bombardment",
								"text": "Beginning at 18th level, the harmful energy of your spells intensifies. When you roll damage for a spell and roll the highest number possible on any of the dice, choose one of those dice, roll it again and add that roll to the damage. You can use the feature only once per turn."
							},
							{
								"-optional": "YES",
								"name": "Storm: Wind Soul",
								"text": [
									"At 18th level, you gain a flying speed of 60 feet and immunity to lightning and thunder damage.",
									"As an action, you can reduce your flying speed to 30 feet for one hour and choose a number of creatures within 30 feet of you equal to 3+your Charisma modifier. The chosen creatures gain a flying speed of 30 feet for 1 hour."
								]
							}
						]
					},
					{
						"-level": "19",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 19th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "20",
						"feature": {
							"name": "Sorcerous Restoration",
							"text": "At 20th level, you regain 4 expended sorcery points whenever you finish a short rest."
						}
					},
					{
						"-level": "1",
						"feature": [ {
							"-optional": "YES",
							"name": "Sorcerous Origin: Shadow (UA)",
							"text": [
								"Your innate magic comes from the Shadowfell. You might trace your lineage to an entity from that place, or perhaps you were exposed to its fell energy and transformed in some fundamental manner.",
								"The power of shadow magic casts a strange pall over your physical presence. The spark of life that sustains you is muffled, as if it struggles to remain viable against the dark energy that imbues your soul. At your option, you can pick from or roll on the following table to create a unique quirk for your character.",
								" ",
								"d6—Quirk:",
								"1—You are always icy cold to the touch.",
								" ",
								"2—When you are asleep, you don't appear to breathe (though you must still breathe to survive).",
								" ",
								"3—You don't seem to bleed, even when badly injured.",
								" ",
								"4—Your heart beats once per minute. This event sometimes surprises you.",
								" ",
								"5—You have trouble remembering that living creatures and corpses should be treated differently.",
								" ",
								"6—You blinked. Once. Last week.",
								"",
								"This sorcerous Origin is from Unearthed Arcana: Light, Dark, Underdark! and as such may not be allowed in your game. Consult your DM before choosing this class option."
							]
						},
							{
								"-optional": "YES",
								"name": "Shadow: Eyes of the Dark",
								"text": "From 1st level, you have darkvision with a range of 60 feet. You can cast darkness by spending 1 sorcery point. You can see through any darkness spell you cast using this ability."
							},
							{
								"-optional": "YES",
								"name": "Sorcerous Origin: Favored Soul (UA)",
								"text": [
									"Sometimes the spark of magic that fuels a sorcerer comes from a divine source that glimmers within the soul. Having such a favored soul, your innate magic might come from a distant but powerful familial connection to a divine being. Perhaps your ancestor was an angel, transformed into a mortal and sent to fight in a god's name. Or your birth might align with an ancient prophecy, marking you as a servant of the gods or a chosen vessel of divine magic.",
									"Favored souls, with their natural magnetism and strong personalities, are often seen as threats by traditional religious hierarchies. As outsiders who command the power of the gods, these sorcerers can undermine the existing order and claim a direct tie to the divine.",
									"In some cultures, only those who can claim the power of a favored soul may command religious power. In these lands, ecclesiastical positions are dominated by a few bloodlines and preserved over generations.",
									"",
									"This sorcerous Origin is from Unearthed Arcana: Sorcerer and as such may not be allowed in your game. Consult your DM before choosing this class option."
								]
							},
							{
								"-optional": "YES",
								"name": "Favored Soul: Divine Magic",
								"text": [
									"Your link to the divine allows you to learn spells normally associated with the cleric class. When your Spellcasting feature lets you learn a sorcerer cantrip or a sorcerer spell of 1st level or higher, you can choose the new spell from the cleric spell list, in addition to the sorcerer spell list. You must otherwise obey all the restrictions for selecting the spell, and it becomes a sorcerer spell for you."
								]
							},
							{
								"-optional": "YES",
								"name": "Favored Soul: Supernatural Resilience",
								"text": [
									"At 1st level, the blessing of the gods grants you enhanced durability. Your hit point maximum increases by 1, and it increases by 1 again whenever you gain a level in this class."
								]
							},
							{
								"-optional": "YES",
								"name": "Favored Soul: Favored by the Gods",
								"text": [
									"Starting at 1st level, divine power guards your destiny. If you fail a saving throw or miss with an attack roll, you can roll 2d4 and add it to the total, possibly changing the outcome.",
									"Once you use this feature, you can't use it again until you finish a short or long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Sorcerous Origin: Phoenix Sorcery (UA)",
								"text": [
									"Your power draws from the immortal flame that fuels the legendary phoenix. You or your ancestors perhaps rendered a phoenix a great service, or you were born in its presence. Whatever the cause, a shard of the phoenix's power dwells within you.",
									"That power is a mixed blessing. Like the mythical creature, you can invoke fiery energy and gain the ability to cheat death itself. This power comes at a cost. The fire within you seethes, demanding to be unleashed. You sometimes find yourself absentmindedly feeding fires. You can't bear to allow a fire to sputter out. You feel most comfortable while holding a lit torch or sitting in front of a campfire.",
									"More importantly, this gift comes with no special protection from fire. You are as vulnerable as any other creature to fiery magic, including your own. Phoenix sorcerers can use their powers to pull themselves back from the brink of death, and all too often their own, rash nature or reliance on destructive magic is what puts them there in the first place.",
									"Such sorcerers are wanderers by necessity. The volatile nature of their magic makes other folk nervous. If a fire breaks out in town, a phoenix sorcerer had best flee, whether guilty or not. Fire is a dangerous force, and phoenix sorcerers have a reputation (deserved or not) for reckless behavior, confident that the essence of the phoenix can save them.",
									" ",
									"Phoenix Soul Quirks ",
									" ",
									"1 — You absentmindedly ignite small fires that quickly sputter out.",
									" ",
									"2 — You cackle like a fiend when you unleash your fire spells.",
									" ",
									"3 — You admire fire, even if it burns your friends.",
									" ",
									"4 — You are covered in burns that mark the first time your power manifested.",
									" ",
									"5 — You like your food charred.",
									" ",
									"6 — You are brave to the point of recklessness.",
									"",
									"This sorcerous Origin is from Unearthed Arcana: Sorcerer and as such may not be allowed in your game. Consult your DM before choosing this class option."
								]
							},
							{
								"-optional": "YES",
								"name": "Phoenix Sorcery: Ignite",
								"text": [
									"At 1st level, you gain the ability to start fires with a touch. As an action, you can magically ignite a flammable object you touch with your hand—an object such as a torch, a piece of tinder, or the hem of drapes."
								]
							},
							{
								"-optional": "YES",
								"name": "Phoenix Sorcery: Mantle of Flame",
								"text": [
									"Starting at 1st level, you can unleash the phoenix fire that blazes within you.",
									"As a bonus action, you magically wreathe yourself in swirling fire, as your eyes glow like hot coals. For 1 minute, you gain the following benefits:",
									" ",
									"• You shed bright light in a 30-foot radius and dim light for an additional 30 feet.",
									" ",
									"• Any creature takes fire damage equal to your Charisma modifier if it hits you with a melee attack from within 5 feet of you or if it touches you.",
									" ",
									"• Whenever you roll fire damage on your turn, the roll gains a bonus to equal to your Charisma modifier.",
									"Once you use this feature, you can't use it again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Sorcerous Origin: Sea Sorcery (UA)",
								"text": [
									"The power of water is the strength of flexibility, resilience, and a relentless nature. Water parts to allow a ship to sail over it or a diver to plunge into it, but their passing leaves no mark. Water flowing down a mountain reaches the sea. It might bend and turn across valleys and down hillsides, but it slowly and steadily returns to the waves. Those whose souls are touched by the power of elemental water command a similar power.",
									"Your heritage ties to powerful creatures of the sea, such as nereids, the lords of the merfolk, and elemental powers. Like a river, you feel the call of the ocean. The call is ever present in your heart, and you are never completely at peace until you are near the sea.",
									"",
									"This sorcerous Origin is from Unearthed Arcana: Sorcerer and as such may not be allowed in your game. Consult your DM before choosing this class option."
								]
							},
							{
								"-optional": "YES",
								"name": "Sea Sorcery: Soul of the Sea",
								"text": [
									"At 1st level, your tie to the sea grants you the ability to breathe underwater, and you have a swim speed equal to your walking speed."
								]
							},
							{
								"-optional": "YES",
								"name": "Sea Sorcery: Curse of the Sea",
								"text": [
									"When you choose this origin at 1st level, you learn the secret of infusing your spells with a watery curse.",
									"When you hit a creature with a cantrip's attack or when a creature fails a saving throw against your cantrip, you can curse the target until the end of your next turn or until you curse a different creature with this feature.",
									"Once per turn when you cast a spell, you can trigger the curse if that spell deals cold or lightning damage to the cursed target or forces it to move. Doing so subjects the target to the appropriate additional effect below, and then the curse ends if the spell isn't a cantrip (you choose the effect to use if more than one effect applies):",
									" ",
									"Cold Damage: If the affected target takes cold damage from your spell, the target's speed is also reduced by 15 feet until the end of your next turn. If the spell already reduces the target's speed, use whichever reduction is greater.",
									" ",
									"Lightning Damage: If the affected target takes lightning damage from your spell, the target takes additional lightning damage equal to your Charisma modifier.",
									" ",
									"Forced Movement; If the target is moved by your spell, increase the distance it is moved by 15 feet."
								]
							},
							{
								"-optional": "YES",
								"name": "Sorcerous Origin: Stone Sorcery (UA)",
								"text": [
									"Your magic springs from a mystical link between your soul and the magic of elemental earth. You might trace a distant ancestor to the Plane of Earth, or your family might have earned a mighty boon in return for a service to the dao lords. Whatever your past, the magic of elemental earth is yours to command.",
									"Your link to earth magic grants you extraordinary resilience, and stone sorcerers have a natural affinity for combat. A steel blade feels like a natural extension of your body, and sorcerers with this origin have a knack for wielding both shields and weapons. In combat your place is amid the fray. You rely on your elemental nature to shield you from harm and your magic and metal weapons to overwhelm your foes.",
									"",
									"This sorcerous Origin is from Unearthed Arcana: Sorcerer and as such may not be allowed in your game. Consult your DM before choosing this class option."
								]
							},
							{
								"-optional": "YES",
								"name": "Stone Sorcery: Bonus Proficiencies",
								"text": [
									"At 1st level, you gain proficiency with shields, simple weapons, and martial weapons."
								]
							},
							{
								"-optional": "YES",
								"name": "Stone Sorcery: Metal Magic",
								"text": [
									"Your affinity for metal gives you the option to learn some non-sorcerer spells that focus on weapon attacks. When your Spellcasting feature lets you learn a sorcerer spell of 1st level or higher, you can select the spell from the following list of spells, in addition to the sorcerer spell list. You must otherwise obey all the restrictions for selecting the spell, and it becomes a sorcerer spell for you.",
									" ",
									"1st — compelled duel",
									"1st — searing smite",
									"1st — thunderous smite",
									"1st — wrathful smite",
									"2nd — branding smite",
									"2nd — magic weapon",
									"3rd — blinding smite",
									"3rd — elemental weapon",
									"4th — staggering smite."
								]
							},
							{
								"-optional": "YES",
								"name": "Stone Sorcery: Stone's Durability",
								"text": [
									"At 1st level, your connection to stone gives you extra fortitude. Your hit point maximum increases by 1, and it increases by 1 again whenever you gain a level in this class.",
									"As an action, you can gain a base AC of 13 + your Constitution modifier if you aren't wearing armor, and your skin assumes a stony appearance. This effect lasts until you end it as a bonus action, you are incapacitated, or you don armor other than a shield."
								]
							}
						]
					},
					{
						"-level": "6",
						"feature": [ {
							"-optional": "YES",
							"name": "Stone Sorcery: Stone Aegis",
							"text": [
								"Starting at 6th level, your command of earth magic grows stronger, allowing you to harness it for your allies' protection.",
								"As a bonus action, you can grant an aegis to one allied creature you can see within 60 feet of you. The aegis is a dim, gray aura of earth magic that protects the target. Any bludgeoning, piercing, or slashing damage the target takes is reduced by 2 + your sorcerer level divided by 4. This effect lasts for 1 minute, until you use it again, or until you are incapacitated.",
								"In addition, when a creature you can see within 60 feet of you hits the protected target with a melee attack, you can use your reaction to teleport to an unoccupied space you can see within 5 feet of the attacker.You can teleport only if you and the attacker are on the same surface.You can then make one melee weapon attack against the attacker.If that attack hits, it deals an extra 1 d10 force damage.This extra damage increases to 2 d10 at 11 th level and 3 d10 at 17 th level."
							]
						},
							{
								"-optional": "YES",
								"name": "Shadow: Hound of Ill Omen",
								"text": [
									"At 6th level, you gain the ability to call forth a howling creature of darkness to harass your foes. As a bonus action, you can spend 3 sorcery points to summon a hound of ill omen to target one creature you can see. The hound uses a dire wolf's statistics with the following changes:",
									"",
									"• The hound is size Medium.",
									"",
									"• It can move through other creatures and objects as if they were difficult terrain. The hound takes 5 force damage if it ends its turn inside an object.",
									"",
									"• At the start of its turn, the hound automatically knows its target's location. If the target was hidden, it is no longer hidden from the hound.",
									"",
									"The hound appears in an unoccupied space of your choice within 30 feet of the target. Roll initiative for the hound. On its turn, it can move only toward its target by the most direct route, and it can use its action only to attack its target. The hound makes opportunity attacks, but only against its target. Additionally, the target has disadvantage on all saving throws against your spells while the hound is within 5 feet of it. The hound disappears if it is reduced to 0 hit points, if its target is reduced to 0 hit points, or after 5 minutes."
								]
							},
							{
								"-optional": "YES",
								"name": "Favored Soul: Blessed Countenance",
								"text": [
									"At 6th level, your divine essence causes you to undergo a minor physical transformation. Your appearance takes on an otherworldly version of one of the following qualities (your choice): beautiful, youthful, kind, or imposing.",
									"Whatever your choice, if your proficiency bonus applies to a Charisma check, double that bonus."
								]
							},
							{
								"-optional": "YES",
								"name": "Phoenix Sorcery: Phoenix Spark",
								"text": [
									"Starting at 6th level, the fiery energy within you grows restless and vengeful. In the face of defeat, it surges outward to preserve you in a fiery roar.",
									"If you are reduced to 0 hit points, you can use your reaction to draw on the spark of the phoenix. You are instead reduced to 1 hit point, and each creature within 10 feet of you takes fire damage equal to half your sorcerer level + your Charisma modifier.",
									"If you use this feature while under the effects of your Mantle of Flame, this feature instead deals fire damage equal to your sorcerer level + double your Charisma modifier, and your Mantle of Flame immediately ends.",
									"Once you use this feature, you can't use it again until you finish a long rest."
								]
							}
						]
					},
					{
						"-level": "14",
						"feature": [ {
							"-optional": "YES",
							"name": "Shadow: Shadow Walk",
							"text": [
								"At 14th level, you gain the ability to step from one shadow into another. When you are in dim light or darkness, as a bonus action, you can teleport up to 120 feet to an unoccupied space you can see that is also in dim light or darkness."
							]
						},
							{
								"-optional": "YES",
								"name": "Favored Soul: Divine Purity",
								"text": [
									"At 14th level, you become immune to disease, poison damage, and the poisoned condition."
								]
							},
							{
								"-optional": "YES",
								"name": "Phoenix Sorcery: Nourishing Fire",
								"text": [
									"Starting at 14th level, your fire spells soothe and restore you. When you expend a spell slot to cast a spell that includes a fire damage roll, you regain hit points equal to the slot's level + your Charisma modifier."
								]
							},
							{
								"-optional": "YES",
								"name": "Sea Sorcery: Shifting Form",
								"text": [
									"Starting at 14th level, you gain the ability to enter a liquid state while moving.",
									"When you move on your turn, you take only half damage from opportunity attacks, and you can move through any enemy's space but can't willingly end your move there.",
									"On your turn, you can move through any space that is at least 3 inches in diameter and do so without squeezing. When you stop moving, the regular squeezing rules apply if you're in a space one size smaller than you. You can't willingly stop in a space smaller than that, and if you're forced to do so, you immediately flow to the nearest space that can fit you, back along the path of your movement."
								]
							},
							{
								"-optional": "YES",
								"name": "Stone Sorcery: Stone's Edge",
								"text": [
									"Starting at 14th level, your mastery of earth magic allows you to add the force of elemental earth to your spells. When you cast a spell that deals damage, choose one creature damaged by that spell on the round you cast it. That creature takes extra force damage equal to half your sorcerer level. This feature can be used only once per casting of a spell."
								]
							}
						]
					},
					{
						"-level": "18",
						"feature": [ {
							"-optional": "YES",
							"name": "Shadow: Shadow Form",
							"text": [
								"At 18th level, you can spend 3 sorcery points to transform yourself into a shadow form as a bonus action. In this form, you have resistance to all damage except force damage, and you can move through other creatures and objects as if they were difficult terrain. You take 5 force damage if you end your turn inside an object. You remain in this form for 1 minute."
							]
						},
							{
								"-optional": "YES",
								"name": "Favored Soul: Unearthly Recovery",
								"text": [
									"At 18th level, you gain the ability to overcome grievous injuries. As a bonus action when you have less than half of your hit points remaining, you can regain a number of hit points equal to half your hit point maximum.",
									"Once you use this feature, you can't use it again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Phoenix Sorcery: Form of the Phoenix",
								"text": [
									"At 18th level, you finally master the spark of fire that dances within you. While under the effect of your Mantle of Flame feature, you gain additional benefits:",
									" ",
									"• You have a flying speed of 40 feet and can hover.",
									" ",
									"• You have resistance to all damage.",
									" ",
									"• If you use your Phoenix Spark, that feature deals an extra 20 fire damage to each creature."
								]
							},
							{
								"-optional": "YES",
								"name": "Sea Sorcery: Water Soul",
								"text": [
									"Starting at 18th level, your being is altered by the power of the sea. You gain the following benefits:",
									" ",
									"• You no longer need to eat, drink, or sleep.",
									" ",
									"• A critical hit against you becomes a normal hit. ",
									" ",
									"• You have resistance to bludgeoning, piercing, and slashing damage."
								]
							},
							{
								"-optional": "YES",
								"name": "Stone Sorcery: Earth Master's Aegis",
								"text": [
									"Beginning at 18th level, when you use your Stone's Aegis to protect an ally, you can choose up to three creatures to gain its benefits."
								]
							}
						]
					}
				]
			},
			{
				"name": "Warlock",
				"hd": "8",
				"proficiency": "Wisdom, Charisma",
				"spellAbility": "Charisma",
				"autolevel": [ {
					"-level": "1",
					"slots": "2,1,0,0,0,0,0,0,0,0"
				},
					{
						"-level": "2",
						"slots": "2,2,0,0,0,0,0,0,0,0"
					},
					{
						"-level": "3",
						"slots": "2,0,2,0,0,0,0,0,0,0"
					},
					{
						"-level": "4",
						"slots": "3,0,2,0,0,0,0,0,0,0"
					},
					{
						"-level": "5",
						"slots": "3,0,0,2,0,0,0,0,0,0"
					},
					{
						"-level": "6",
						"slots": "3,0,0,2,0,0,0,0,0,0"
					},
					{
						"-level": "7",
						"slots": "3,0,0,0,2,0,0,0,0,0"
					},
					{
						"-level": "8",
						"slots": "3,0,0,0,2,0,0,0,0,0"
					},
					{
						"-level": "9",
						"slots": "3,0,0,0,0,2,0,0,0,0"
					},
					{
						"-level": "10",
						"slots": "4,0,0,0,0,2,0,0,0,0"
					},
					{
						"-level": "11",
						"slots": "4,0,0,0,0,3,0,0,0,0"
					},
					{
						"-level": "12",
						"slots": "4,0,0,0,0,3,0,0,0,0"
					},
					{
						"-level": "13",
						"slots": "4,0,0,0,0,3,0,0,0,0"
					},
					{
						"-level": "14",
						"slots": "4,0,0,0,0,3,0,0,0,0"
					},
					{
						"-level": "15",
						"slots": "4,0,0,0,0,3,0,0,0,0"
					},
					{
						"-level": "16",
						"slots": "4,0,0,0,0,3,0,0,0,0"
					},
					{
						"-level": "17",
						"slots": "4,0,0,0,0,4,0,0,0,0"
					},
					{
						"-level": "18",
						"slots": "4,0,0,0,0,4,0,0,0,0"
					},
					{
						"-level": "19",
						"slots": "4,0,0,0,0,4,0,0,0,0"
					},
					{
						"-level": "20",
						"slots": "4,0,0,0,0,4,0,0,0,0"
					},
					{
						"-level": "1",
						"feature": [ {
							"name": "Starting Proficiencies",
							"text": [
								"You are proficient with the following items, in addition to any proficiencies provided by your race or background.",
								"Armor: light armor",
								"Weapons: simple weapons",
								"Tools: none",
								"Skills: Choose two skills from Arcana, Deception, History, Intimidation, Investigation, Nature, and Religion"
							]
						},
							{
								"name": "Starting Equipment",
								"text": [
									"You start with the following items, plus anything provided by your background.",
									"• (a) a light crossbow and 20 bolts or (b) any simple weapon",
									"• (a) a component pouch or (b) an arcane focus",
									"• (a) a scholar's pack or (b) a dungeoneer's pack",
									"• Leather armor, any simple weapon, and two daggers",
									"Alternatively, you may start with 4d4 x 10 gp to buy your own equipment."
								]
							}
						]
					},
					{
						"-level": "1",
						"feature": [ {
							"name": "Otherworldly Patron",
							"text": "At 1st level, you have struck a bargain with an otherworldly being of your choice - the Archfey, the Fiend, or the Great Old One, each of which is detailed at the end of the class description. Your choice grants you features at 1st level and again at 6th, 10th, and 14th level."
						},
							{
								"-optional": "YES",
								"name": "Otherworldly Patron: The Archfey",
								"text": [
									"Your patron is a lord or lady of the fey, a creature of legend who holds secrets that were forgotten before the mortal races were born. This being's motivations are often inscrutable, and sometimes whimsical, and might involve a striving for greater magical power or the settling of age-old grudges. Beings of this sort include the Prince of Frost; the Queen of Air and Darkness, ruler of the Gloaming Court; Titania of the Summer Court; her consort Oberon, the Green Lord; Hyrsam, the Prince of Fools; and ancient hags.",
									"Expanded Spell List: The Archfey lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
									"1st - faerie fire, sleep",
									"2nd - calm emotions, phantasmal force",
									"3rd - blink, plant growth",
									"4th - dominate beast, greater invisibility",
									"5th - dominate person, seeming"
								]
							},
							{
								"-optional": "YES",
								"name": "Otherworldly Patron: The Fiend",
								"text": [
									"You have made a pact with a fiend from the lower planes of existence, a being whose aims are evil, even if you strive against those aims. Such beings desire the corruption or destruction of all things, ultimately including you. Fiends powerful enough to forge a pact include demon lords such as Demogorgon, Orcus, Fraz'Urb-luu, and Baphomet; archdevils such as Asmodeus, Dispater, Mephistopheles, and Belial; pit fiends and balors that are especially mighty; and ultroloths and other lords of the yugoloths.",
									"Expanded Spell List: The Fiend lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
									"1st - burning hands, command",
									"2nd - blindness/deafness, scorching ray",
									"3rd - fireball, stinking cloud",
									"4th - fire shield, wall of fire",
									"5th - flame strike, hallow"
								]
							},
							{
								"-optional": "YES",
								"name": "Otherworldly Patron: The Great Old One",
								"text": [
									"Your patron is a mysterious entity whose nature is utterly foreign to the fabric of reality. It might come from the Far Realm, the space beyond reality, or it could be one of the elder gods known only in legends. Its motives are incomprehensible to mortals, and its knowledge so immense and ancient that even the greatest libraries pale in comparison to the vast secrets it holds. The Great Old One might be unaware of your existence or entirely indifferent to you, but the secrets you have learned allow you to draw your magic from it. Entities of this type include Ghaunadar, called That Which Lurks; Tharizdun, the Chained God; Dendar, the Night Serpent; Zargon, the Returner; Great Cthulhu; and other unfathomable beings.",
									"Expanded Spell List: The Great Old One lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
									"1st - dissonant whispers, Tasha's hideous laughter",
									"2nd - detect thoughts, phantasmal force",
									"3rd - clairvoyance, sending",
									"4th - dominate beast, Evard's black tentacles",
									"5th - dominate person, telekinesis"
								]
							},
							{
								"-optional": "YES",
								"name": "Otherworldly Patron: The Undying",
								"text": [
									"Death holds no sway over your patron, who has unlocked the secrets of everlasting life, although such a prize - like all power - comes at a price. Once mortal, the Undying has seen mortal lifetimes pass like the seasons, like the flicker of endless days and nights. It has the secrets of the ages to share, secrets of life and death. Beings of this sort include Vecna, Lord of the Hand and the Eye; the dread Iuz; the lich-queen Vol; the Undying Court of Aerenal; Vlaakith, lich-queen of the githyanki; and the deathless wizard Fistandantalus.",
									"In the Realms, Undying patrons include Larloch the Shadow King, legendary master of Warlock's Crypt, and Gilgeam, the God-King of Unther.",
									"Expanded Spell List:",
									"The Undying lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
									"1st - false life, ray of sickness",
									"2nd - blindness/deafness, silence",
									"3rd - feign death, speak with dead",
									"4th - aura of life, death ward",
									"5th - contagion, legend lore"
								]
							},
							{
								"-optional": "YES",
								"name": "The Archfey: Fey Presence",
								"text": [
									"Starting at 1st level, your patron bestows upon you the ability to project the beguiling and fearsome presence of the fey. As an action, you can cause each creature in a 10-foot cube originating from you to make a Wisdom saving throw against your warlock spell save DC. The creatures that fail their saving throws are all charmed or frightened by you (your choice) until the end of your next turn.",
									"Once you use this feature, you can't use it again until you finish a short or long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "The Fiend: Dark One's Blessing",
								"text": "Starting at 1st level, when you reduce a hostile creature to 0 hit points, you gain temporary hit points equal to your Charisma modifier + your warlock level (minimum of 1)."
							},
							{
								"-optional": "YES",
								"name": "The Great Old One: Awakened Mind",
								"text": "Starting at 1st level, your alien knowledge gives you the ability to touch the minds of other creatures. You can communicate telepathically with any creature you can see within 30 feet of you. You don't need to share a language with the creature for it to understand your telepathic utterances, but the creature must be able to understand at least one language."
							},
							{
								"-optional": "YES",
								"name": "The Undying: Among the Dead",
								"text": [
									"Starting at 1st level, you learn the spare the dying cantrip, which counts as a warlock cantrip for you. You also have advantage on saving throws against any disease.",
									"Additionally, undead have difficulty harming you. If an undead targets you directly with an attack or a harmful spell, that creature must make a Wisdom saving throw against your spell save DC (an undead needn't make the save when it includes you in an area effect, such as the explosion of fireball). On a failed save, the creature must choose a new target or forfeit targeting someone instead of you, potentially wasting the attack or spell. On a succesful save, the creature is immune to this effect for 24 hours. An undead is also immune to this effect for 24 hours if you target it with an attack or a harmful spell."
								]
							},
							{
								"name": "Pact Magic",
								"text": [
									"Your arcane research and the magic bestowed on you by your patron have given you facility with spells. See chapter 10 for the general rules of spellcasting and chapter 11 for the warlock spell list.",
									"Cantrips",
									"You know two cantrips of your choice from the warlock spell list. You learn additional warlock cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Warlock table.",
									"Spell Slots",
									"The Warlock table shows how many spell slots you have. The table also shows what the level of those slots is; all of your spell slots are the same level. To cast one of your warlock spells of 1st level or higher, you must expend a spell slot. You regain all expended spell slots when you finish a short or long rest.",
									"For example, when you are 5th level, you have two 3rd-level spell slots. To cast the 1st-level spell thunderwave, you must spend one of those slots, and you cast it as a 3rd-level spell.",
									"Spells Known of 1st Level and Higher",
									"At 1st level, you know two 1st-level spells of your choice from the warlock spell list.",
									"You learn a new warlock spell every time you gain a level from 2 through 9, as well as at level 19. A spell you choose must be of a level no higher than what's shown in the table's Slot Level column for your level. When you reach 6th level, for example, you learn a new warlock spell, which can be 1st, 2nd, or 3rd level.",
									"Additionally, when you gain a level in this class, you can choose one of the warlock spells you know and replace it with another spell from the warlock spell list, which also must be of a level for which you have spell slots.",
									"Spellcasting Ability",
									"Charisma is your spellcasting ability for your warlock spells, so you use your Charisma whenever a spell refers to your spellcasting ability. In addition, you use your Charisma modifier when setting the saving throw DC for a warlock spell you cast and when making an attack roll with one.",
									"Spell save DC: 8 + Proficiency bonus + Charisma modifier",
									"Spell attack modifier: Proficiency bonus + Charisma modifier",
									"Spellcasting Focus",
									"You can use an arcane focus (found in chapter 5) as a spellcasting focus for your warlock spells."
								]
							}
						]
					},
					{
						"-level": "2",
						"feature": {
							"name": "Eldritch Invocations",
							"text": [
								"In your study of occult lore, you have unearthed eldritch invocations, fragments of forbidden knowledge that imbue you with an abiding magical ability.",
								"At 2nd level, you gain two eldritch invocations of your choice. Your invocation options are detailed at the end of the class description. When you gain certain warlock levels, you gain additional invocations of your choice.",
								"Additionally, when you gain a level in this class, you can choose one of the invocations you know and replace it with another invocation that you could learn at that level. A level prerequisite in an invocation refers to warlock level, not character level."
							]
						}
					},
					{
						"-level": "3",
						"feature": [ {
							"-optional": "YES",
							"name": "Pact Boon: Pact of the Chain",
							"text": [
								"You learn the find familiar spell and can cast it as a ritual. The spell doesn't count against your number of spells known.",
								"When you cast the spell, you can choose one of the normal forms for your familiar or one of the following special forms: imp, pseudodragon, quasit, or sprite.",
								"Additionally, when you take the Attack action, you can forgo one of your own attacks to allow your familiar to use its reaction to make one attack of its own."
							]
						},
							{
								"-optional": "YES",
								"name": "Pact Boon: Pact of the Blade",
								"text": [
									"You can use your action to create a pact weapon in your empty hand. You can choose the form that this melee weapon takes each time you create it (see chapter 5 for weapon options). You are proficient with it while you wield it. This weapon counts as magical for the purpose of overcoming resistance and immunity to nonmagical attacks and damage.",
									"Your pact weapon disappears if it is more than 5 feet away from you for 1 minute or more. It also disappears if you use this feature again, if you dismiss the weapon (no action required), or if you die.",
									"You can transform one magic weapon into your pact weapon by performing a special ritual while you hold the weapon. You perform the ritual over the course of 1 hour, which can be done during a short rest. You can then dismiss the weapon, shunting it into an extradimensional space, and it appears whenever you create your pact weapon thereafter. You can't affect an artifact or a sentient weapon in this way. The weapon ceases being your pact weapon if you die, if you perform the 1-hour ritual on a different weapon, or if you use a 1-hour ritual to break your bond to it. The weapon appears at your feet if it is in the extradimensional space when the bond breaks."
								]
							},
							{
								"-optional": "YES",
								"name": "Pact Boon: Pact of the Tome",
								"text": "Your patron gives you a grimoire called a Book of Shadows. When you gain this feature, choose three cantrips from any class's spell list. The cantrips do not need to be from the same spell list. While the book is on your person, you can cast those cantrips at will. They don't count against your number of cantrips known. Any cantrip you cast with this feature is considered a warlock cantrip for you. If you lose your Book of Shadows, you can perform a 1-hour ceremony to receive a replacement from your patron. This ceremony can be performed during a short or long rest, and it destroys the previous book. The book turns to ash when you die."
							}
						]
					},
					{
						"-level": "4",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 4th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "5",
						"feature": {
							"name": "Eldritch Invocation",
							"text": "You learn an additional eldritch invocation"
						}
					},
					{
						"-level": "6",
						"feature": [ {
							"-optional": "YES",
							"name": "The Archfey: Misty Escape",
							"text": [
								"Starting at 6th level, you can vanish in a puff of mist in response to harm. When you take damage, you can use your reaction to turn invisible and teleport up to 60 feet to an unoccupied space you can see. You remain invisible until the start of your next turn or until you attack or cast a spell.",
								"Once you use this feature, you can't use it again until you finish a short or long rest."
							]
						},
							{
								"-optional": "YES",
								"name": "The Fiend: Dark One's Own Luck",
								"text": [
									"Starting at 6th level, you can call on your patron to alter fate in your favor. When you make an ability check or a saving throw, you can use this feature to add a d10 to your roll. You can do so after seeing the initial roll but before any of the roll's effects occur.",
									"Once you use this feature, you can't use it again until you finish a short or long rest"
								]
							},
							{
								"-optional": "YES",
								"name": "The Great Old One: Entropic Ward",
								"text": [
									"At 6th level, you learn to magically ward yourself against attack and to turn an enemy's failed strike into good luck for yourself. When a creature makes an attack roll against you, you can use your reaction to impose disadvantage on that roll. If the attack misses you, your next attack roll against the creature has advantage if you make it before the end of your next turn.",
									"Once you use this feature, you can't use it again until you finish a short or long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "The Undying: Defy Death",
								"text": [
									"Starting at 6th level, you can give yourself vitality when you cheat death or when you help someone else cheat it. You can regain hit points equal to 1d8 + your Constitution modifier (minimum of 1 hit point) when you succeed on a death saving throw or when you stabilize a creature with spare the dying.",
									"Once you use this feature, you can't use it again until you finish a long rest."
								]
							}
						]
					},
					{
						"-level": "7",
						"feature": {
							"name": "Eldritch Invocation",
							"text": "You learn an additional eldritch invocation"
						}
					},
					{
						"-level": "8",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 8th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "9",
						"feature": {
							"name": "Eldritch Invocation",
							"text": "You learn an additional eldritch invocation"
						}
					},
					{
						"-level": "10",
						"feature": [ {
							"-optional": "YES",
							"name": "The Archfey: Beguiling Defenses",
							"text": "Beginning at 10th level, your patron teaches you how to turn the mind-affecting magic of your enemies against them. You are immune to being charmed, and when another creature attempts to charm you, you can use your reaction to attempt to turn the charm back on that creature. The creature must succeed on a Wisdom saving throw against your warlock spell save DC or be charmed by you for 1 minute or until the creature takes any damage."
						},
							{
								"-optional": "YES",
								"name": "The Fiend: Fiendish Resilience",
								"text": "Starting at 10th level, you can choose one damage type when you finish a short or long rest. You gain resistance to that damage type until you choose a different one with this feature. Damage from magical weapons or silver weapons ignores this resistance."
							},
							{
								"-optional": "YES",
								"name": "The Great Old One: Thought Shield",
								"text": "Starting at 10th level, your thoughts can't be read by telepathy or other means unless you allow it. You also have resistance to psychic damage, and whenever a creature deals psychic damage to you, that creature takes the same amount of damage that you do."
							},
							{
								"-optional": "YES",
								"name": "The Undying: Undying Nature",
								"text": [
									"Beginning at 10th level, you can hold your breath indefinitely, and you don't require food, water, or sleep, although you still require rest to reduce exhaustion and still benefit from finishing short and long rests.",
									"In addition, you age at a slower rate. For every 10 years that pass, your body ages only 1 year, and you are immune to being magically aged."
								]
							}
						]
					},
					{
						"-level": "11",
						"feature": {
							"name": "Mystic Arcanum (6th level)",
							"text": [
								"At 11th level, your patron bestows upon you a magical secret called an arcanum. Choose one 6th-level spell from the warlock spell list as this arcanum.",
								"You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again.",
								"At higher levels, you gain more warlock spells of your choice that can be cast in this way: one 7th-level spell at 13th level, one 8th-level spell at 15th level, and one 9th-level spell at 17th level. You regain all uses of your Mystic A rcanum when you finish a long rest."
							]
						}
					},
					{
						"-level": "12",
						"feature": [ {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 12th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						},
							{
								"name": "Eldritch Invocation",
								"text": "You learn an additional eldritch invocation"
							}
						]
					},
					{
						"-level": "13",
						"feature": {
							"name": "Mystic Arcanum (7th level)",
							"text": [
								"At 13th level, your patron bestows upon you a magical secret called an arcanum. Choose one 7th-level spell from the warlock spell list as this arcanum.",
								"You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again."
							]
						}
					},
					{
						"-level": "14",
						"feature": [ {
							"-optional": "YES",
							"name": "The Archfey: Dark Delirium",
							"text": [
								"Starting at 14th level, you can plunge a creature into an illusory realm. As an action, choose a creature that you can see within 60 feet of you. It must make a Wisdom saving throw against your warlock spell save DC. On a failed save, it is charmed or frightened by you (your choice) for 1 minute or until your concentration is broken (as if you are concentrating on a spell). This effect ends early if the creature takes any damage.",
								"Until this illusion ends, the creature thinks it is lost in a misty realm, the appearance of which you choose. The creature can see and hear only itself, you, and the illusion.",
								"You must finish a short or long rest before you can use this feature again."
							]
						},
							{
								"-optional": "YES",
								"name": "The Fiend: Hurl Through Hell",
								"text": [
									"Starting at 14th level, when you hit a creature with an attack, you can use this feature to instantly transport the target through the lower planes. The creature disappears and hurtles through a nightmare landscape.",
									"At the end of your next turn, the target returns to the space it previously occupied, or the nearest unoccupied space. If the target is not a fiend, it takes 10d 10 psychic damage as it reels from its horrific experience.",
									"Once you use this feature, you can't use it again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "The Great Old One: Create Thrall",
								"text": [
									"At 14th level, you gain the ability to infect a humanoid's mind with the alien magic of your patron. You can use your action to touch an incapacitated humanoid. That creature is then charmed by you until a remove curse spell is cast on it, the charmed condition is removed from it, or you use this feature again.",
									"You can communicate telepathically with the charmed creature as long as the two of you are on the same plane of existence."
								]
							},
							{
								"-optional": "YES",
								"name": "The Undying: Indestructible Life",
								"text": [
									"When you reach 14th level, you partake some of the true secrets of the Undying. On your turn, you can use a bonus action to regain hit points equal to 1d8 + your warlock level. Additionally, if you put a severed body part of yours back in place when you use this feature, the part reattaches.",
									"Once you use this feature, you can't use it again until you finish a short or long rest."
								]
							}
						]
					},
					{
						"-level": "15",
						"feature": [ {
							"name": "Eldritch Invocation",
							"text": "You learn an additional eldritch invocation"
						},
							{
								"name": "Mystic Arcanum (8th level)",
								"text": [
									"At 15th level, your patron bestows upon you a magical secret called an arcanum. Choose one 8th-level spell from the warlock spell list as this arcanum.",
									"You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again."
								]
							}
						]
					},
					{
						"-level": "16",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 16th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "17",
						"feature": {
							"name": "Mystic Arcanum (9th level)",
							"text": [
								"At 17th level, your patron bestows upon you a magical secret called an arcanum. Choose one 9th-level spell from the warlock spell list as this arcanum.",
								"You can cast your arcanum spell once without expending a spell slot. You must finish a long rest before you can do so again."
							]
						}
					},
					{
						"-level": "18",
						"feature": {
							"name": "Eldritch Invocation",
							"text": "You learn an additional eldritch invocation"
						}
					},
					{
						"-level": "19",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 19th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "20",
						"feature": {
							"name": "Eldritch Master",
							"text": "At 20th level, you can draw on your inner reserve of mystical power while entreating your patron to regain expended spell slots. You can spend 1 minute entreating your patron for aid to regain all your expended spell slots from your Pact Magic feature. Once you regain spell slots with this feature, you must finish a long rest before you can do so again."
						}
					},
					{
						"-level": "2",
						"feature": [ {
							"-optional": "YES",
							"name": "Eldritch Invocation: Agonizing Blast",
							"text": [
								"Prerequisite: eldritch blast cantrip",
								"When you cast eldritch blast, add your Charisma modifier to the damage it deals on a hit."
							]
						},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Armor of Shadows",
								"text": "You can cast mage armor on yourself at will, without expending a spell slot or material components."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Beast Speech",
								"text": "You can cast speak with animals at will, without expending a spell slot."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Beguiling Influence",
								"text": "You gain proficiency in the Deception and Persuasion skills."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Book of Ancient Secrets",
								"text": [
									"Prerequisite: Pact of the Tome feature",
									"You can now inscribe magical rituals in your Book of Shadows. Choose two 1st-level spells that have the ritual tag from any class's spell list; they do not have to be from the same class's spell list. The spells appear in the book and don't count against the number of spells you know. With your Book of Shadows in hand, you can cast the chosen spells as rituals. You can't cast the spells except as rituals, unless you've learned them by some other means. You can also cast a warlock spell you know as a ritual if it has the ritual tag.",
									"On your adventures, you can add other ritual spells to your Book of Shadows. When you find such a spell, you can add it to the book if the spell's level is equal to or less than half your warlock level (rounded up) and if you can spare the time to transcribe the spell. For each level of the spell, the transcription process takes 2 hours and costs 50 gp for the rare inks needed to inscribe it."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Devil's Sight",
								"text": "You can see normally in darkness, both magical and nonmagical, to a distance of 120 feet."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Eldritch Sight",
								"text": "You can cast detect magic at will, without expending a spell slot."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Eldritch Spear",
								"text": [
									"Prerequisite: eldritch blast cantrip",
									"When you cast eldritch blast, its range is 300 feet."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Eyes of the Rune Keeper",
								"text": "You can read all writing."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Fiendish Vigor",
								"text": "You can cast false life on yourself at will as a 1st-level spell, without expending a spell slot or material components."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Gaze of Two Minds",
								"text": "You can use your action to touch a willing humanoid and perceive through its senses until the end of your next turn. As long as the creature is on the same plane of existence as you, you can use your action on subsequent turns to maintain this connection, extending the duration until the end of your next turn. While perceiving through the other creature's senses, you benefit from any special senses possessed by that creature, and you are blinded and deafened to your own surroundings."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Mask of Many Faces",
								"text": "You can cast disguise self at will, without expending a spell slot."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Misty Visions",
								"text": "You can cast silent image at will, without expending a spell slot or material components."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Repelling Blast",
								"text": [
									"Prerequisite: eldritch blast cantrip",
									"When you hit a creature with eldritch blast, you can push the creature up to 10 feet away from you in a straight line."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Thief of Five Fates",
								"text": "You can cast bane once using a warlock spell slot. You can't do so again until you finish a long rest."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Voice of the Chain Master",
								"text": [
									"Prerequisite: Pact of the Chain feature",
									"You can communicate telepathically with your familiar and perceive through your familiar's senses as long as you are on the same plane of existence. Additionally, while perceiving through your familiar's senses, you can also speak through your familiar in your own voice, even if your familiar is normally incapable of speech."
								]
							}
						]
					},
					{
						"-level": "5",
						"feature": [ {
							"-optional": "YES",
							"name": "Eldritch Invocation: Agonizing Blast",
							"text": [
								"Prerequisite: eldritch blast cantrip",
								"When you cast eldritch blast, add your Charisma modifier to the damage it deals on a hit."
							]
						},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Armor of Shadows",
								"text": "You can cast mage armor on yourself at will, without expending a spell slot or material components."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Beast Speech",
								"text": "You can cast speak with animals at will, without expending a spell slot."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Beguiling Influence",
								"text": "You gain proficiency in the Deception and Persuasion skills."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Book of Ancient Secrets",
								"text": [
									"Prerequisite: Pact of the Tome feature",
									"You can now inscribe magical rituals in your Book of Shadows. Choose two 1st-level spells that have the ritual tag from any class's spell list. The spells appear in the book and don't count against the number of spells you know. With your Book of Shadows in hand, you can cast the chosen spells as rituals. You can't cast the spells except as rituals, unless you've learned them by some other means. You can also cast a warlock spell you know as a ritual if it has the ritual tag.",
									"On your adventures, you can add other ritual spells to your Book of Shadows. When you find such a spell, you can add it to the book if the spell's level is equal to or less than half your warlock level (rounded up) and if you can spare the time to transcribe the spell. For each level of the spell, the transcription process takes 2 hours and costs 50 gp for the rare inks needed to inscribe it."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Devil's Sight",
								"text": "You can see normally in darkness, both magical and nonmagical, to a distance of 120 feet."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Eldritch Sight",
								"text": "You can cast detect magic at will, without expending a spell slot."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Eldritch Spear",
								"text": [
									"Prerequisite: eldritch blast cantrip",
									"When you cast eldritch blast, its range is 300 feet."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Eyes of the Rune Keeper",
								"text": "You can read all writing."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Fiendish Vigor",
								"text": "You can cast false life on yourself at will as a 1st-level spell, without expending a spell slot or material components."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Gaze of Two Minds",
								"text": "You can use your action to touch a willing humanoid and perceive through its senses until the end of your next turn. As long as the creature is on the same plane of existence as you, you can use your action on subsequent turns to maintain this connection, extending the duration until the end of your next turn. While perceiving through the other creature's senses, you benefit from any special senses possessed by that creature, and you are blinded and deafened to your own surroundings."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Mask of Many Faces",
								"text": "You can cast disguise self at will, without expending a spell slot."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Mire the Mind",
								"text": [
									"Prerequisite: 5th level",
									"You can cast slow once using a warlock spell slot. You can't do so again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Misty Visions",
								"text": "You can cast silent image at will, without expending a spell slot or material components."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: One with Shadows",
								"text": [
									"Prerequisite: 5th level",
									"When you are in an area of dim light or darkness, you can use your action to become invisible until you move or take an action or a reaction."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Repelling Blast",
								"text": [
									"Prerequisite: eldritch blast cantrip",
									"When you hit a creature with eldritch blast, you can push the creature up to 10 feet away from you in a straight line."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Signs of Ill Omen",
								"text": [
									"Prerequisite: 5th level",
									"You can cast bestow curse once using a warlock spell slot. You can't do so again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Thief of Five Fates",
								"text": "You can cast bane once using a warlock spell slot. You can't do so again until you finish a long rest."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Thirsting Blade",
								"text": [
									"Prerequisite: 5th level, Pact of the Blade feature",
									"You can attack with your pact weapon twice, instead of once, whenever you take the Attack action on your turn."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Voice of the Chain Master",
								"text": [
									"Prerequisite: Pact of the Chain feature",
									"You can communicate telepathically with your familiar and perceive through your familiar's senses as long as you are on the same plane of existence. Additionally, while perceiving through your familiar's senses, you can also speak through your familiar in your own voice, even if your familiar is normally incapable of speech."
								]
							}
						]
					},
					{
						"-level": "7",
						"feature": [ {
							"-optional": "YES",
							"name": "Eldritch Invocation: Agonizing Blast",
							"text": [
								"Prerequisite: eldritch blast cantrip",
								"When you cast eldritch blast, add your Charisma modifier to the damage it deals on a hit."
							]
						},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Armor of Shadows",
								"text": "You can cast mage armor on yourself at will, without expending a spell slot or material components."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Beast Speech",
								"text": "You can cast speak with animals at will, without expending a spell slot."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Beguiling Influence",
								"text": "You gain proficiency in the Deception and Persuasion skills."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Bewitching Whispers",
								"text": [
									"Prerequisite: 7th level",
									"You can cast compulsion once using a warlock spell slot. You can't do so again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Book of Ancient Secrets",
								"text": [
									"Prerequisite: Pact of the Tome feature",
									"You can now inscribe magical rituals in your Book of Shadows. Choose two 1st-level spells that have the ritual tag from any class's spell list. The spells appear in the book and don't count against the number of spells you know. With your Book of Shadows in hand, you can cast the chosen spells as rituals. You can't cast the spells except as rituals, unless you've learned them by some other means. You can also cast a warlock spell you know as a ritual if it has the ritual tag.",
									"On your adventures, you can add other ritual spells to your Book of Shadows. When you find such a spell, you can add it to the book if the spell's level is equal to or less than half your warlock level (rounded up) and if you can spare the time to transcribe the spell. For each level of the spell, the transcription process takes 2 hours and costs 50 gp for the rare inks needed to inscribe it."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Devil's Sight",
								"text": "You can see normally in darkness, both magical and nonmagical, to a distance of 120 feet."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Dreadful Word",
								"text": [
									"Prerequisite: 7th level",
									"You can cast confusion once using a warlock spell slot. You can't do so again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Eldritch Sight",
								"text": "You can cast detect magic at will, without expending a spell slot."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Eldritch Spear",
								"text": [
									"Prerequisite: eldritch blast cantrip",
									"When you cast eldritch blast, its range is 300 feet."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Eyes of the Rune Keeper",
								"text": "You can read all writing."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Fiendish Vigor",
								"text": "You can cast false life on yourself at will as a 1st-level spell, without expending a spell slot or material components."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Gaze of Two Minds",
								"text": "You can use your action to touch a willing humanoid and perceive through its senses until the end of your next turn. As long as the creature is on the same plane of existence as you, you can use your action on subsequent turns to maintain this connection, extending the duration until the end of your next turn. While perceiving through the other creature's senses, you benefit from any special senses possessed by that creature, and you are blinded and deafened to your own surroundings."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Mask of Many Faces",
								"text": "You can cast disguise self at will, without expending a spell slot."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Mire the Mind",
								"text": [
									"Prerequisite: 5th level",
									"You can cast slow once using a warlock spell slot. You can't do so again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Misty Visions",
								"text": "You can cast silent image at will, without expending a spell slot or material components."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: One with Shadows",
								"text": [
									"Prerequisite: 5th level",
									"When you are in an area of dim light or darkness, you can use your action to become invisible until you move or take an action or a reaction."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Repelling Blast",
								"text": [
									"Prerequisite: eldritch blast cantrip",
									"When you hit a creature with eldritch blast, you can push the creature up to 10 feet away from you in a straight line."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Sculptor of Flesh",
								"text": [
									"Prerequisite: 7th level",
									"You can cast polymorph once using a warlock spell slot. You can't do so again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Signs of Ill Omen",
								"text": [
									"Prerequisite: 5th level",
									"You can cast bestow curse once using a warlock spell slot. You can't do so again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Thief of Five Fates",
								"text": "You can cast bane once using a warlock spell slot. You can't do so again until you finish a long rest."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Thirsting Blade",
								"text": [
									"Prerequisite: 5th level, Pact of the Blade feature",
									"You can attack with your pact weapon twice, instead of once, whenever you take the Attack action on your turn."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Voice of the Chain Master",
								"text": [
									"Prerequisite: Pact of the Chain feature",
									"You can communicate telepathically with your familiar and perceive through your familiar's senses as long as you are on the same plane of existence. Additionally, while perceiving through your familiar's senses, you can also speak through your familiar in your own voice, even if your familiar is normally incapable of speech."
								]
							}
						]
					},
					{
						"-level": "9",
						"feature": [ {
							"-optional": "YES",
							"name": "Eldritch Invocation: Agonizing Blast",
							"text": [
								"Prerequisite: eldritch blast cantrip",
								"When you cast eldritch blast, add your Charisma modifier to the damage it deals on a hit."
							]
						},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Armor of Shadows",
								"text": "You can cast mage armor on yourself at will, without expending a spell slot or material components."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Ascendant Step",
								"text": [
									"Prerequisite: 9th level ",
									"You can cast levitate on yourself at will, without expending a spell slot or material components."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Beast Speech",
								"text": "You can cast speak with animals at will, without expending a spell slot."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Beguiling Influence",
								"text": "You gain proficiency in the Deception and Persuasion skills."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Bewitching Whispers",
								"text": [
									"Prerequisite: 7th level",
									"You can cast compulsion once using a warlock spell slot. You can't do so again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Book of Ancient Secrets",
								"text": [
									"Prerequisite: Pact of the Tome feature",
									"You can now inscribe magical rituals in your Book of Shadows. Choose two 1st-level spells that have the ritual tag from any class's spell list. The spells appear in the book and don't count against the number of spells you know. With your Book of Shadows in hand, you can cast the chosen spells as rituals. You can't cast the spells except as rituals, unless you've learned them by some other means. You can also cast a warlock spell you know as a ritual if it has the ritual tag.",
									"On your adventures, you can add other ritual spells to your Book of Shadows. When you find such a spell, you can add it to the book if the spell's level is equal to or less than half your warlock level (rounded up) and if you can spare the time to transcribe the spell. For each level of the spell, the transcription process takes 2 hours and costs 50 gp for the rare inks needed to inscribe it."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Devil's Sight",
								"text": "You can see normally in darkness, both magical and nonmagical, to a distance of 120 feet."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Dreadful Word",
								"text": [
									"Prerequisite: 7th level",
									"You can cast confusion once using a warlock spell slot. You can't do so again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Eldritch Sight",
								"text": "You can cast detect magic at will, without expending a spell slot."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Eldritch Spear",
								"text": [
									"Prerequisite: eldritch blast cantrip",
									"When you cast eldritch blast, its range is 300 feet."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Eyes of the Rune Keeper",
								"text": "You can read all writing."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Fiendish Vigor",
								"text": "You can cast false life on yourself at will as a 1st-level spell, without expending a spell slot or material components."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Gaze of Two Minds",
								"text": "You can use your action to touch a willing humanoid and perceive through its senses until the end of your next turn. As long as the creature is on the same plane of existence as you, you can use your action on subsequent turns to maintain this connection, extending the duration until the end of your next turn. While perceiving through the other creature's senses, you benefit from any special senses possessed by that creature, and you are blinded and deafened to your own surroundings."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Mask of Many Faces",
								"text": "You can cast disguise self at will, without expending a spell slot."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Minions of Chaos",
								"text": [
									"Prerequisite: 9th level",
									"You can cast conjure elemental once using a warlock spell slot. You can't do so again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Mire the Mind",
								"text": [
									"Prerequisite: 5th level",
									"You can cast slow once using a warlock spell slot. You can't do so again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Misty Visions",
								"text": "You can cast silent image at will, without expending a spell slot or material components."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: One with Shadows",
								"text": [
									"Prerequisite: 5th level",
									"When you are in an area of dim light or darkness, you can use your action to become invisible until you move or take an action or a reaction."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Otherworldly Leap",
								"text": [
									"Prerequisite: 9th level",
									"You can cast jump on yourself at will, without expending a spell slot or material components."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Repelling Blast",
								"text": [
									"Prerequisite: eldritch blast cantrip",
									"When you hit a creature with eldritch blast, you can push the creature up to 10 feet away from you in a straight line."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Sculptor of Flesh",
								"text": [
									"Prerequisite: 7th level",
									"You can cast polymorph once using a warlock spell slot. You can't do so again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Signs of Ill Omen",
								"text": [
									"Prerequisite: 5th level",
									"You can cast bestow curse once using a warlock spell slot. You can't do so again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Thief of Five Fates",
								"text": "You can cast bane once using a warlock spell slot. You can't do so again until you finish a long rest."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Thirsting Blade",
								"text": [
									"Prerequisite: 5th level, Pact of the Blade feature",
									"You can attack with your pact weapon twice, instead of once, whenever you take the Attack action on your turn."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Voice of the Chain Master",
								"text": [
									"Prerequisite: Pact of the Chain feature",
									"You can communicate telepathically with your familiar and perceive through your familiar's senses as long as you are on the same plane of existence. Additionally, while perceiving through your familiar's senses, you can also speak through your familiar in your own voice, even if your familiar is normally incapable of speech."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Whispers of the Grave",
								"text": [
									"Prerequisite: 9th level",
									"You can cast speak with dead at will, without expending a spell slot."
								]
							}
						]
					},
					{
						"-level": "12",
						"feature": [ {
							"-optional": "YES",
							"name": "Eldritch Invocation: Agonizing Blast",
							"text": [
								"Prerequisite: eldritch blast cantrip",
								"When you cast eldritch blast, add your Charisma modifier to the damage it deals on a hit."
							]
						},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Armor of Shadows",
								"text": "You can cast mage armor on yourself at will, without expending a spell slot or material components."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Ascendant Step",
								"text": [
									"Prerequisite: 9th level ",
									"You can cast levitate on yourself at will, without expending a spell slot or material components."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Beast Speech",
								"text": "You can cast speak with animals at will, without expending a spell slot."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Beguiling Influence",
								"text": "You gain proficiency in the Deception and Persuasion skills."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Bewitching Whispers",
								"text": [
									"Prerequisite: 7th level",
									"You can cast compulsion once using a warlock spell slot. You can't do so again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Book of Ancient Secrets",
								"text": [
									"Prerequisite: Pact of the Tome feature",
									"You can now inscribe magical rituals in your Book of Shadows. Choose two 1st-level spells that have the ritual tag from any class's spell list. The spells appear in the book and don't count against the number of spells you know. With your Book of Shadows in hand, you can cast the chosen spells as rituals. You can't cast the spells except as rituals, unless you've learned them by some other means. You can also cast a warlock spell you know as a ritual if it has the ritual tag.",
									"On your adventures, you can add other ritual spells to your Book of Shadows. When you find such a spell, you can add it to the book if the spell's level is equal to or less than half your warlock level (rounded up) and if you can spare the time to transcribe the spell. For each level of the spell, the transcription process takes 2 hours and costs 50 gp for the rare inks needed to inscribe it."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Devil's Sight",
								"text": "You can see normally in darkness, both magical and nonmagical, to a distance of 120 feet."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Dreadful Word",
								"text": [
									"Prerequisite: 7th level",
									"You can cast confusion once using a warlock spell slot. You can't do so again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Eldritch Sight",
								"text": "You can cast detect magic at will, without expending a spell slot."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Eldritch Spear",
								"text": [
									"Prerequisite: eldritch blast cantrip",
									"When you cast eldritch blast, its range is 300 feet."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Eyes of the Rune Keeper",
								"text": "You can read all writing."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Fiendish Vigor",
								"text": "You can cast false life on yourself at will as a 1st-level spell, without expending a spell slot or material components."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Gaze of Two Minds",
								"text": "You can use your action to touch a willing humanoid and perceive through its senses until the end of your next turn. As long as the creature is on the same plane of existence as you, you can use your action on subsequent turns to maintain this connection, extending the duration until the end of your next turn. While perceiving through the other creature's senses, you benefit from any special senses possessed by that creature, and you are blinded and deafened to your own surroundings."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Lifedrinker",
								"text": [
									"Prerequisite: 12th level",
									"When you hit a creature with your pact weapon, the creature takes extra necrotic damage equal to your Charisma modifier (minimum 1)."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Mask of Many Faces",
								"text": "You can cast disguise self at will, without expending a spell slot."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Minions of Chaos",
								"text": [
									"Prerequisite: 9th level",
									"You can cast conjure elemental once using a warlock spell slot. You can't do so again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Mire the Mind",
								"text": [
									"Prerequisite: 5th level",
									"You can cast slow once using a warlock spell slot. You can't do so again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Misty Visions",
								"text": "You can cast silent image at will, without expending a spell slot or material components."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: One with Shadows",
								"text": [
									"Prerequisite: 5th level",
									"When you are in an area of dim light or darkness, you can use your action to become invisible until you move or take an action or a reaction."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Otherworldly Leap",
								"text": [
									"Prerequisite: 9th level",
									"You can cast jump on yourself at will, without expending a spell slot or material components."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Repelling Blast",
								"text": [
									"Prerequisite: eldritch blast cantrip",
									"When you hit a creature with eldritch blast, you can push the creature up to 10 feet away from you in a straight line."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Sculptor of Flesh",
								"text": [
									"Prerequisite: 7th level",
									"You can cast polymorph once using a warlock spell slot. You can't do so again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Signs of Ill Omen",
								"text": [
									"Prerequisite: 5th level",
									"You can cast bestow curse once using a warlock spell slot. You can't do so again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Thief of Five Fates",
								"text": "You can cast bane once using a warlock spell slot. You can't do so again until you finish a long rest."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Thirsting Blade",
								"text": [
									"Prerequisite: 5th level, Pact of the Blade feature",
									"You can attack with your pact weapon twice, instead of once, whenever you take the Attack action on your turn."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Voice of the Chain Master",
								"text": [
									"Prerequisite: Pact of the Chain feature",
									"You can communicate telepathically with your familiar and perceive through your familiar's senses as long as you are on the same plane of existence. Additionally, while perceiving through your familiar's senses, you can also speak through your familiar in your own voice, even if your familiar is normally incapable of speech."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Whispers of the Grave",
								"text": [
									"Prerequisite: 9th level",
									"You can cast speak with dead at will, without expending a spell slot."
								]
							}
						]
					},
					{
						"-level": "15",
						"feature": [ {
							"-optional": "YES",
							"name": "Eldritch Invocation: Agonizing Blast",
							"text": [
								"Prerequisite: eldritch blast cantrip",
								"When you cast eldritch blast, add your Charisma modifier to the damage it deals on a hit."
							]
						},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Armor of Shadows",
								"text": "You can cast mage armor on yourself at will, without expending a spell slot or material components."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Ascendant Step",
								"text": [
									"Prerequisite: 9th level ",
									"You can cast levitate on yourself at will, without expending a spell slot or material components."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Beast Speech",
								"text": "You can cast speak with animals at will, without expending a spell slot."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Beguiling Influence",
								"text": "You gain proficiency in the Deception and Persuasion skills."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Bewitching Whispers",
								"text": [
									"Prerequisite: 7th level",
									"You can cast compulsion once using a warlock spell slot. You can't do so again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Book of Ancient Secrets",
								"text": [
									"Prerequisite: Pact of the Tome feature",
									"You can now inscribe magical rituals in your Book of Shadows. Choose two 1st-level spells that have the ritual tag from any class's spell list. The spells appear in the book and don't count against the number of spells you know. With your Book of Shadows in hand, you can cast the chosen spells as rituals. You can't cast the spells except as rituals, unless you've learned them by some other means. You can also cast a warlock spell you know as a ritual if it has the ritual tag.",
									"On your adventures, you can add other ritual spells to your Book of Shadows. When you find such a spell, you can add it to the book if the spell's level is equal to or less than half your warlock level (rounded up) and if you can spare the time to transcribe the spell. For each level of the spell, the transcription process takes 2 hours and costs 50 gp for the rare inks needed to inscribe it."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Chains of Carceri",
								"text": [
									"Prerequisite: 15th level, Pact of the Chain feature",
									"You can cast hold monster at will—targeting a celestial, fiend, or elemental—without expending a spell slot or material components. You must finish a long rest before you can use this invocation on the same creature again."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Devil's Sight",
								"text": "You can see normally in darkness, both magical and nonmagical, to a distance of 120 feet."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Dreadful Word",
								"text": [
									"Prerequisite: 7th level",
									"You can cast confusion once using a warlock spell slot. You can't do so again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Eldritch Sight",
								"text": "You can cast detect magic at will, without expending a spell slot."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Eldritch Spear",
								"text": [
									"Prerequisite: eldritch blast cantrip",
									"When you cast eldritch blast, its range is 300 feet."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Eyes of the Rune Keeper",
								"text": "You can read all writing."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Fiendish Vigor",
								"text": "You can cast false life on yourself at will as a 1st-level spell, without expending a spell slot or material components."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Gaze of Two Minds",
								"text": "You can use your action to touch a willing humanoid and perceive through its senses until the end of your next turn. As long as the creature is on the same plane of existence as you, you can use your action on subsequent turns to maintain this connection, extending the duration until the end of your next turn. While perceiving through the other creature's senses, you benefit from any special senses possessed by that creature, and you are blinded and deafened to your own surroundings."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Lifedrinker",
								"text": [
									"Prerequisite: 12th level",
									"When you hit a creature with your pact weapon, the creature takes extra necrotic damage equal to your Charisma modifier (minimum 1)."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Mask of Many Faces",
								"text": "You can cast disguise self at will, without expending a spell slot."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Master of Myriad Forms",
								"text": [
									"Prerequisite: 15th level",
									"You can cast alter self at will, without expending a spell slot."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Minions of Chaos",
								"text": [
									"Prerequisite: 9th level",
									"You can cast conjure elemental once using a warlock spell slot. You can't do so again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Mire the Mind",
								"text": [
									"Prerequisite: 5th level",
									"You can cast slow once using a warlock spell slot. You can't do so again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Misty Visions",
								"text": "You can cast silent image at will, without expending a spell slot or material components."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: One with Shadows",
								"text": [
									"Prerequisite: 5th level",
									"When you are in an area of dim light or darkness, you can use your action to become invisible until you move or take an action or a reaction."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Otherworldly Leap",
								"text": [
									"Prerequisite: 9th level",
									"You can cast jump on yourself at will, without expending a spell slot or material components."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Repelling Blast",
								"text": [
									"Prerequisite: eldritch blast cantrip",
									"When you hit a creature with eldritch blast, you can push the creature up to 10 feet away from you in a straight line."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Sculptor of Flesh",
								"text": [
									"Prerequisite: 7th level",
									"You can cast polymorph once using a warlock spell slot. You can't do so again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Signs of Ill Omen",
								"text": [
									"Prerequisite: 5th level",
									"You can cast bestow curse once using a warlock spell slot. You can't do so again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Thief of Five Fates",
								"text": "You can cast bane once using a warlock spell slot. You can't do so again until you finish a long rest."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Thirsting Blade",
								"text": [
									"Prerequisite: 5th level, Pact of the Blade feature",
									"You can attack with your pact weapon twice, instead of once, whenever you take the Attack action on your turn."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Visions of Distant Realms",
								"text": [
									"Prerequisite: 15th level",
									"You can cast arcane eye at will, without expending a spell slot."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Voice of the Chain Master",
								"text": [
									"Prerequisite: Pact of the Chain feature",
									"You can communicate telepathically with your familiar and perceive through your familiar's senses as long as you are on the same plane of existence. Additionally, while perceiving through your familiar's senses, you can also speak through your familiar in your own voice, even if your familiar is normally incapable of speech."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Whispers of the Grave",
								"text": [
									"Prerequisite: 9th level",
									"You can cast speak with dead at will, without expending a spell slot."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Witch Sight",
								"text": [
									"Prerequisite: 15th level",
									"You can see the true form of any shapechanger or creature concealed by illusion or transmutation magic while the creature is within 30 feet of you and within line of sight."
								]
							}
						]
					},
					{
						"-level": "18",
						"feature": [ {
							"-optional": "YES",
							"name": "Eldritch Invocation: Agonizing Blast",
							"text": [
								"Prerequisite: eldritch blast cantrip",
								"When you cast eldritch blast, add your Charisma modifier to the damage it deals on a hit."
							]
						},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Armor of Shadows",
								"text": "You can cast mage armor on yourself at will, without expending a spell slot or material components."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Ascendant Step",
								"text": [
									"Prerequisite: 9th level ",
									"You can cast levitate on yourself at will, without expending a spell slot or material components."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Beast Speech",
								"text": "You can cast speak with animals at will, without expending a spell slot."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Beguiling Influence",
								"text": "You gain proficiency in the Deception and Persuasion skills."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Bewitching Whispers",
								"text": [
									"Prerequisite: 7th level",
									"You can cast compulsion once using a warlock spell slot. You can't do so again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Book of Ancient Secrets",
								"text": [
									"Prerequisite: Pact of the Tome feature",
									"You can now inscribe magical rituals in your Book of Shadows. Choose two 1st-level spells that have the ritual tag from any class's spell list. The spells appear in the book and don't count against the number of spells you know. With your Book of Shadows in hand, you can cast the chosen spells as rituals. You can't cast the spells except as rituals, unless you've learned them by some other means. You can also cast a warlock spell you know as a ritual if it has the ritual tag.",
									"On your adventures, you can add other ritual spells to your Book of Shadows. When you find such a spell, you can add it to the book if the spell's level is equal to or less than half your warlock level (rounded up) and if you can spare the time to transcribe the spell. For each level of the spell, the transcription process takes 2 hours and costs 50 gp for the rare inks needed to inscribe it."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Chains of Carceri",
								"text": [
									"Prerequisite: 15th level, Pact of the Chain feature",
									"You can cast hold monster at will—targeting a celestial, fiend, or elemental—without expending a spell slot or material components. You must finish a long rest before you can use this invocation on the same creature again."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Devil's Sight",
								"text": "You can see normally in darkness, both magical and nonmagical, to a distance of 120 feet."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Dreadful Word",
								"text": [
									"Prerequisite: 7th level",
									"You can cast confusion once using a warlock spell slot. You can't do so again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Eldritch Sight",
								"text": "You can cast detect magic at will, without expending a spell slot."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Eldritch Spear",
								"text": [
									"Prerequisite: eldritch blast cantrip",
									"When you cast eldritch blast, its range is 300 feet."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Eyes of the Rune Keeper",
								"text": "You can read all writing."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Fiendish Vigor",
								"text": "You can cast false life on yourself at will as a 1st-level spell, without expending a spell slot or material components."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Gaze of Two Minds",
								"text": "You can use your action to touch a willing humanoid and perceive through its senses until the end of your next turn. As long as the creature is on the same plane of existence as you, you can use your action on subsequent turns to maintain this connection, extending the duration until the end of your next turn. While perceiving through the other creature's senses, you benefit from any special senses possessed by that creature, and you are blinded and deafened to your own surroundings."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Lifedrinker",
								"text": [
									"Prerequisite: 12th level",
									"When you hit a creature with your pact weapon, the creature takes extra necrotic damage equal to your Charisma modifier (minimum 1)."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Mask of Many Faces",
								"text": "You can cast disguise self at will, without expending a spell slot."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Master of Myriad Forms",
								"text": [
									"Prerequisite: 15th level",
									"You can cast alter self at will, without expending a spell slot."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Minions of Chaos",
								"text": [
									"Prerequisite: 9th level",
									"You can cast conjure elemental once using a warlock spell slot. You can't do so again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Mire the Mind",
								"text": [
									"Prerequisite: 5th level",
									"You can cast slow once using a warlock spell slot. You can't do so again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Misty Visions",
								"text": "You can cast silent image at will, without expending a spell slot or material components."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: One with Shadows",
								"text": [
									"Prerequisite: 5th level",
									"When you are in an area of dim light or darkness, you can use your action to become invisible until you move or take an action or a reaction."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Otherworldly Leap",
								"text": [
									"Prerequisite: 9th level",
									"You can cast jump on yourself at will, without expending a spell slot or material components."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Repelling Blast",
								"text": [
									"Prerequisite: eldritch blast cantrip",
									"When you hit a creature with eldritch blast, you can push the creature up to 10 feet away from you in a straight line."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Sculptor of Flesh",
								"text": [
									"Prerequisite: 7th level",
									"You can cast polymorph once using a warlock spell slot. You can't do so again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Signs of Ill Omen",
								"text": [
									"Prerequisite: 5th level",
									"You can cast bestow curse once using a warlock spell slot. You can't do so again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Thief of Five Fates",
								"text": "You can cast bane once using a warlock spell slot. You can't do so again until you finish a long rest."
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Thirsting Blade",
								"text": [
									"Prerequisite: 5th level, Pact of the Blade feature",
									"You can attack with your pact weapon twice, instead of once, whenever you take the Attack action on your turn."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Visions of Distant Realms",
								"text": [
									"Prerequisite: 15th level",
									"You can cast arcane eye at will, without expending a spell slot."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Voice of the Chain Master",
								"text": [
									"Prerequisite: Pact of the Chain feature",
									"You can communicate telepathically with your familiar and perceive through your familiar's senses as long as you are on the same plane of existence. Additionally, while perceiving through your familiar's senses, you can also speak through your familiar in your own voice, even if your familiar is normally incapable of speech."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Whispers of the Grave",
								"text": [
									"Prerequisite: 9th level",
									"You can cast speak with dead at will, without expending a spell slot."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Witch Sight",
								"text": [
									"Prerequisite: 15th level",
									"You can see the true form of any shapechanger or creature concealed by illusion or transmutation magic while the creature is within 30 feet of you and within line of sight."
								]
							}
						]
					},
					{
						"-level": "1",
						"feature": [ {
							"-optional": "YES",
							"name": "Otherworldly Patron: The Undying Light (UA)",
							"text": [
								"Your patron is not a specific entity, but the energy that radiates from the Positive Plane. Your pact allows you to experience the barest touch of the raw stuff of life that powers the multiverse. Anything more, and you would be instantly incinerated by its energy.",
								"Contact with the Positive Plane causes subtle changes to your behavior and beliefs. You are driven to bring light to dark places, to annihilate undead creatures, and to protect all living things. At the same time, you crave the light and find total darkness a suffocating experience akin to drowning.",
								"As an optional way to add more flavor to your character, you can pick from or roll on the following table of flaws associated with warlocks of the Undying Light.",
								"d6 - Quirk",
								"1 — You are afraid of the dark, and must always have a light source at hand.",
								"2 — You have a nervous compulsion to keep a bright light in even the barest shadow.",
								"3 — You have a compulsion to enter and illuminate dark areas.",
								"4 — You have an overwhelming hatred of undead creatures.",
								"5 — You fidget and are irritable when you can't see the sun.",
								"6 — In a dark area, you always carry a lit torch or lantern. Putting it down is an unbearable thought.",
								"Expanded Spell List:",
								"The Undying Light lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
								"1st - burning hands",
								"2nd - flaming sphere",
								"3rd - daylight",
								"4th - fire shield",
								"5th - flame strike",
								"This Otherworldy Patron is from Unearthed Arcana: Light, Dark, Underdark!, and as such may not be allowed in your game. Consult your DM before choosing this option."
							]
						},
							{
								"-optional": "YES",
								"name": "The Undying Light: Radiant Soul",
								"text": "Starting at 1st level, your link to the Positive Plane allows you to serve as a conduit for radiant energy. You have resistance to radiant damage, and when you cast a spell that deals radiant damage or fire damage, you add your Charisma modifier to that damage. Additionally, you know the sacred flame and light cantrips and can cast them at will. They don't count against your number of cantrips known."
							},
							{
								"-optional": "YES",
								"name": "Otherworldly Patron: The Hexblade (UA)",
								"text": [
									"You have made your pact with a powerful, sentient magic weapon carved from the stuff of the Shadowfell. The mighty sword Blackrazor is the most notable of these weapons, several of which have spread across the multiverse over the ages. These weapons grow stronger as they consume the life essence of their victims. The strongest of them can use their ties to the Shadowfell to offer power to mortals who serve them. The Raven Queen forged the first of these weapons. They, along with the hexblade warlocks, are another tool she can use to manipulate events in the Material Plane to her inscrutable ends.",
									"Expanded Spell List: The Hexblade lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
									"1st - shield, wrathful smite",
									"2nd - branding smite, magic weapon",
									"3rd - blink, elemental weapon",
									"4th - phantasmal killer, staggering smite",
									"5th - cone of cold, destructive wave"
								]
							},
							{
								"-optional": "YES",
								"name": "The Hexblade: Hex Warrior",
								"text": "At 1st level, you gain proficiency with medium armor, shields, and martial weapons. In addition, when attacking with a melee weapon that you are proficient with and that lacks the two- handed property, you can use your Charisma modifier, instead of Strength or Dexterity, for the attack and damage rolls."
							},
							{
								"-optional": "YES",
								"name": "The Hexblade: Hexblade's Curse",
								"text": [
									"Starting at 1st level, you gain the ability to place a baleful curse on an enemy. As a bonus action, choose one creature you can see within 30 feet of you. The target is cursed for 1 minute. Until the curse ends, you gain the following benefits:",
									"You gain a bonus to damage rolls against the cursed target. The bonus equals your proficiency bonus.",
									"Any attack roll you make against the cursed target is a critical hit on a roll of 19 or 20 on the d20.",
									"If the cursed target dies, you regain hit points equal to your warlock level + your Charisma modifier.",
									"You can’t use this feature again until you finish a short or long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Otherworldy Patron: The Seeker (UA)",
								"text": [
									"Your patron is an inscrutable being who travels the Astral Plane in search of knowledge and secrets. In return for your patron's gifts, you wander the world seeking lore that you can share with the Seeker.",
									"Your patron could be any deity or other powerful entity dedicated to knowledge or forgotten lore. Celestian is an ideal patron for a Greyhawk campaign, and was the inspiration for this concept. In the Forgotten Realms, your patron might be Azuth or Oghma. Aureon makes an excellent patron in Eberron, while in Krynn and the Dragonlance campaign setting, Gilean is a good match for the Seeker's role.",
									"Expanded Spell List:",
									"The Seeker lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
									"1st - feather fall, jump",
									"2nd - levitate, locate object",
									"3rd - clairvoyance, sending",
									"4th - arcane eye, locate creature",
									"5th - legend lore, passwall",
									"",
									"This Otherworldy Patron is from Unearthed Arcana: The Faithful, and as such may not be allowed in your game. Consult your DM before choosing this option."
								]
							},
							{
								"-optional": "YES",
								"name": "Shielding Aurora",
								"text": [
									"Starting at 1st level, you can invoke the Seeker's power to protect you from harm. As a bonus action, you create a whirling aurora of brilliant energy that swirls around you. Until the end of your next turn, you gain resistance to all damage, and if a hostile creature ends its turn within 10 feet of you, it takes radiant damage equal to your warlock level + your Charisma modifier.",
									"Once you use this feature, you can't use it again until you finish a short or long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Otherworldly Patron: The Raven Queen (UA)",
								"text": [
									"You patron is the Raven Queen, a mysterious being who rules the Shadowfell from a palace of ice deep within that dread realm. The Raven Queen watches over the world, anticipating each creature’s death and ensuring that it meets its end at the proscribed time and place. As the ruler of the Shadowfell, she dwells in a decayed, dark reflection of the world. Her ability to reach into the world is limited. Thus, she turns to mortal warlocks to serve her will. Warlocks sworn to the Raven Queen receive visions and whispers from her in their dreams, sending them on quests and warning them of impending dangers.",
									"The Raven Queen’s followers are expected to serve her will in the world. She concerns herself with ensuring that those fated to die pass from the world as expected, and bids her agents to defeat those who seek to cheat death through undeath or other imitations of immortality. She hates intelligent undead and expects her followers to strike them down, whereas mindless undead such as skeletons and zombies are little more than stumbling automatons in her eyes.",
									"Expanded Spell List: The Raven Queen lets you choose from an expanded list of spells when you learn a warlock spell. The following spells are added to the warlock spell list for you.",
									"1st - false life, sanctuary",
									"2nd - silence, spiritual weapon",
									"3rd - feign death, speak with dead",
									"4th - ice storm, locate creature",
									"5th - commune, cone of cold"
								]
							}
						]
					},
					{
						"-level": "3",
						"feature": {
							"-optional": "YES",
							"name": "The Seeker: Pact Boon: Pact of the Star Chain",
							"text": [
								"At 3rd level, a character dedicated to the Seeker can select this option instead of one of the warlock's existing Pact Boon options.",
								"The Seeker grants you a chain forged from starlight, decorated with seven gleaming motes of brightness. While the chain is on your person, you know the augury spell and can cast it as a ritual. The spell doesn't count against your number of spells known.",
								"Additionally, you can invoke the Seeker's power to gain advantage on an Intelligence check while you carry this item. Once you use this ability, you cannot use it again until you complete a short or long rest.",
								"If you lose your Star Chain, you can perform a 1 hour ceremony to receive a replacement from the Seeker. The ceremony can be performed during a short or long rest, and it destroys the previous chain. The chain disappears in a flash of light when you die.",
								"The exact form of this item might be different depending on your patron. The Star Chain is inspired by the Greyhawk deity Celestian."
							]
						}
					},
					{
						"-level": "6",
						"feature": [ {
							"-optional": "YES",
							"name": "The Seeker: Astral Refuge",
							"text": "At 6th level, you gain the ability to step into an astral refuge. As an action, you disappear from the world for a brief moment and enter the Astral Plane, taking advantage of its timeless nature. While in your astral refuge, you can take two actions to cast spells that target only you. After using those two actions, you return to the space you occupied and your turn ends."
						},
							{
								"-optional": "YES",
								"name": "The Undying Light: Searing Vengeance",
								"text": [
									"Starting at 6th level, the radiant energy you channel allows you to overcome grievous injuries. When you would make a death saving throw, you can instead spring back to your feet with a burst of radiant energy. You immediately stand up (if you so choose), and you regain hit points equal to half your hit point maximum. All hostile creatures within 30 feet of you take 10 + your Charisma modifier radiant damage and are blinded until the end of your turn.",
									"Once you use this feature, you can't use it again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "The Hexblade: Shadow Hound",
								"text": [
									"Starting at 6th level, your shadow can split from you and transform into a hound of pure darkness. Most of the time, your shadow hound masquerades as your normal shadow. As a bonus action, you can command it to magically slip into the shadow of a creature you can see within 60 feet of you. While the shadow hound is merged in this manner, the target can’t gain the benefits of half cover or three-quarters cover against your attack rolls, and you know the distance and direction to the target even if it is hidden. The hound can’t be seen by anyone but you and those with truesight, and it is unaffected by light. The target has a vague feeling of dread while the hound is present.",
									"As a bonus action, you can command your shadow hound to return to you. It also automatically returns to you if you and the target are on different planes of existence, if you’re incapacitated, or if dispel magic, remove curse, or similar magic is used on the target."
								]
							},
							{
								"-optional": "YES",
								"name": "The Raven Queen: Soul of the Raven",
								"text": "At 6th level, you gain the ability to merge with your raven spirit. As a bonus action when your raven is perched on your shoulder, your body merges with your raven’s form. While merged, you become Tiny, you replace your speed with the raven’s, and you can use your action only to Dash, Disengage, Dodge, Help, Hide, or Search. During this time, you gain the benefits of your raven being perched on your shoulder. As an action, you and the raven return to normal."
							}
						]
					},
					{
						"-level": "10",
						"feature": [ {
							"-optional": "YES",
							"name": "The Seeker: Far Wanderer",
							"text": "At 10th level, you no longer need to breathe, and you gain resistance to fire damage and cold damage."
						},
							{
								"-optional": "YES",
								"name": "The Undying Light: Radiant Resilience",
								"text": "Starting at 10th level, you gain temporary hit points whenever you finish a long or short rest. These temporary hit points equal your warlock level + your Charisma modifier. Additionally, choose up to five creatures you can see at the end of your rest. Those creatures gain temporary hit points equal to half your warlock level + your Charisma modifier."
							},
							{
								"-optional": "YES",
								"name": "The Hexblade: Armor of Hexes",
								"text": "At 10th level, your hex grows more powerful. If the target cursed by your Hexblade’s Curse hits you with an attack roll, roll a d6. On a 4 or higher, the attack instead misses you."
							},
							{
								"-optional": "YES",
								"name": "The Raven Queen: Raven's Shield",
								"text": "At 10th level, the Raven Queen grants you a protective blessing. You gain advantage on death saving throws, immunity to the frightened condition, and resistance to necrotic damage."
							}
						]
					},
					{
						"-level": "14",
						"feature": [ {
							"-optional": "YES",
							"name": "The Seeker: Astral Sequestration",
							"text": [
								"Starting at 14th level, you gain the ability to sequester yourself and your allies on the Astral Plane.",
								"By performing a special ritual over the course of 5 minutes, you shift yourself and up to ten willing creatures you can see to the Astral Plane. You and those creatures gain the benefits of a short rest while sequestered on the Astral Plane. You then return to the spaces you all occupied when you used this ability, with no time having passed in the world.",
								"During this short rest, you and the creatures you sequester can make use of any options available during a rest that affect only you and the creatures you sequester.",
								"Once you use this ability, you cannot use it again until you complete a long rest."
							]
						},
							{
								"-optional": "YES",
								"name": "The Undying Light: Healing Light",
								"text": [
									"At 14th level, you gain the ability to channel the Undying Light to heal yourself and other creatures. As a bonus action, you can touch a creature and heal it. With each touch, a creature regains from 1d6 to 5d6 hit points (your choice). You have a total pool of 15d6 you can expend. Subtract the dice you use with each touch from that total.",
									"You regain all expended dice from your pool when you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "The Hexblade: Master of Hexes",
								"text": "Starting at 14th level, you can use your Hexblade’s Curse again without resting, but when you apply it to a new target, the curse immediately ends on the previous target."
							},
							{
								"-optional": "YES",
								"name": "The Raven Queen: Queen's Right Hand",
								"text": "Starting at 14th level, you can channel the Raven Queen’s power to slay a creature. You can cast finger of death. After you cast the spell with this feature, you can’t do so again until you finish a long rest."
							}
						]
					},
					{
						"-level": "2",
						"feature": [ {
							"-optional": "YES",
							"name": "Eldritch Invocation: Aspect of the Moon (UA)",
							"text": [
								"Prerequisite: The Archfey patron",
								"You have gained the Maiden of the Moon’s favor. You no longer need to sleep and can’t be forced to sleep by any means. To gain the benefits of a long rest, you can spend all 8 hours doing light activity, such as reading and keeping watch."
							]
						},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Burning Hex (UA)",
								"text": [
									"Prerequisite: The Hexblade patron",
									"As a bonus action, you cause a target cursed by your Hexblade’s Curse to take fire damage equal to your Charisma modifier (minimum of 1)."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Caiphon's Beacon (UA)",
								"text": [
									"Prerequisite: The Great Old One patron",
									"The purple star Caiphon is the doom of inexperienced mariners. Those who use its deceptive light to guide their travels invariably come to ruin. You gain proficiency in the Deception and Stealth skills, and you have advantage on attack rolls against charmed creatures."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Chilling Hex (UA)",
								"text": [
									"Prerequisite: The Hexblade patron",
									"As a bonus action, you cause frost to swirl around a target cursed by your Hexblade’s Curse, dealing cold damage to each of your enemies within 5 feet of the target. The cold damage equals your Charisma modifier (minimum of 1)."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Chronicle of the Raven Queen (UA)",
								"text": [
									"Prerequisite: The Raven Queen patron, Pact of the Tome feature",
									"You can place a corpse’s hand or similar appendage on your Book of Shadows and ask one question aloud. After 1 minute, the answer appears written in blood in your book. The answer is provided by the dead creature’s spirit to the best of its knowledge and is translated into a language of your choice. You must use this ability within 1 minute of a creature’s death, and a given creature can only be asked one question in this manner."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Claw of Acamar (UA)",
								"text": [
									"Prerequisite: The Great Old One patron, Pact of the Blade feature",
									"You can create a black, lead flail using your Pact of the Blade feature. The flail’s head is sculpted to resemble a pair of grasping tentacles. The weapon has the reach property. When you hit a creature with it, you can expend a spell slot to deal an additional 2d8 necrotic damage to the target per spell level, and you can reduce the creature’s speed to 0 feet until the end of your next turn."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Cloak of Baalzebul (UA)",
								"text": [
									"Prerequisite: The Fiend patron",
									"As a bonus action, you can conjure a swarm of buzzing flies around you. The swarm grants you advantage on Charisma (Intimidation) checks but disadvantage on all other Charisma checks. In addition, a creature that starts its turn within 5 feet of you takes poison damage equal to your Charisma modifier. You can dismiss the swarm with another bonus action."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Curse Bringer (UA)",
								"text": [
									"Prerequisite: The Hexblade patron, Pact of the Blade feature",
									"You can create a greatsword forged from silver, with black runes etched into its blade, using your Pact of the Blade feature. If you reduce a target cursed by your Hexblade’s Curse to 0 hit points with this sword, you can immediately change the target of the curse to a different creature. This change doesn’t extend the curse’s duration.",
									"When you hit a creature with this weapon, you can expend a spell slot to deal an additional 2d8 slashing damage to the target per spell level, and you can reduce the creature’s speed to 0 feet until the end of your next turn."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Frost Lance (UA)",
								"text": [
									"Prerequisite: The Archfey patron, eldritch blast cantrip",
									"You draw on the gifts of the Prince of Frost to trap your enemies in ice. When you hit a creature with your eldritch blast cantrip one or more times on your turn, you can reduce that creature’s speed by 10 feet until the end of your next turn."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Grasp of Hadar (UA)",
								"text": [
									"Prerequisite: The Great Old One patron, eldritch blast cantrip",
									"Once during your turn when you hit a creature with your eldritch blast cantrip, you can move that creature in a straight line 10 feet closer to yourself."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Green Lord’s Gift (UA)",
								"text": [
									"Prerequisite: The Archfey patron",
									"The Green Lord oversees a verdant realm of everlasting summer. Your soul is linked to his power. Whenever you regain hit points, you treat any dice rolled to determine the hit points you regain as having rolled their maximum value."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Mace of Dispater (UA)",
								"text": [
									"Prerequisite: The Fiend patron, Pact of the Blade feature",
									"When you create your pact weapon as a mace, it manifests as an iron mace forged in Dis, the second of the Nine Hells. When you hit a creature with it, you can expend a spell slot to deal an additional 2d8 force damage to the target per spell level, and you can knock the target prone if it is Huge or smaller."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Moon Bow (UA)",
								"text": [
									"Prerequisite: The Archfey patron, Pact of the Blade feature",
									"You can create a longbow using your Pact of the Blade feature. When you draw back its string and fire, it creates an arrow of white wood, which vanishes after 1 minute. You have advantage on attack rolls against lycanthropes with the bow. When you hit a creature with it, you can expend a spell slot to deal an additional 2d8 radiant damage to the target per spell level."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Path of the Seeker (UA)",
								"text": [
									"Prerequisite: The Seeker patron",
									"The Seeker bids you to travel in search of knowledge, and little can prevent you from waling this path. You ignore difficult terrain, have advantage on all checks to escape a grapple, manacles, or rope bindings, and advantage on saving throws against being paralyzed."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Raven Queen’s Blessing (UA)",
								"text": [
									"Prerequisite: Raven Queen patron, eldritch blast cantrip",
									"When you score a critical hit with your eldritch blast cantrip, pick yourself or an ally you can see within 30 feet of you. The chosen creature can immediately expend a Hit Die to regain hit points equal to the roll + the creature’s Constitution modifier (minimum of 1 hit point)."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Sea Twins’ Gift (UA)",
								"text": [
									"Prerequisite: The Archfey patron",
									"The Sea Twins rule seas in the Feywild. Their gift allows you to travel through water with ease. You can breathe underwater, and you gain a swimming speed equal to your walking speed.",
									"You can also cast water breathing using a warlock spell slot. Once you cast it using this invocation, you can’t do so again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Seeker’s Speech (UA)",
								"text": [
									"Prerequisite: The Seeker patron",
									"Your quest for knowledge allows you to master any spoken language. When you complete a long rest, you can pick two languages. You gain the ability to speak, read, and write the chosen languages until you finish your next long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Tomb of Levistus (UA)",
								"text": [
									"Prerequisite: The Fiend patron",
									"As a reaction when you take damage, you can entomb yourself in ice, which melts away at the end of your next turn. You gain 10 temporary hit points per warlock level, which take as much of the triggering damage as possible. You also gain vulnerability to fire damage, your speed drops to 0, and you are incapacitated. All of these effects end when the ice melts.",
									"Once you use this invocation, you can’t use it again until you finish a short or long rest."
								]
							}
						]
					},
					{
						"-level": "5",
						"feature": [ {
							"-optional": "YES",
							"name": "Eldritch Invocation: Aspect of the Moon (UA)",
							"text": [
								"Prerequisite: The Archfey patron",
								"You have gained the Maiden of the Moon’s favor. You no longer need to sleep and can’t be forced to sleep by any means. To gain the benefits of a long rest, you can spend all 8 hours doing light activity, such as reading and keeping watch."
							]
						},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Burning Hex (UA)",
								"text": [
									"Prerequisite: The Hexblade patron",
									"As a bonus action, you cause a target cursed by your Hexblade’s Curse to take fire damage equal to your Charisma modifier (minimum of 1)."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Caiphon's Beacon (UA)",
								"text": [
									"Prerequisite: The Great Old One patron",
									"The purple star Caiphon is the doom of inexperienced mariners. Those who use its deceptive light to guide their travels invariably come to ruin. You gain proficiency in the Deception and Stealth skills, and you have advantage on attack rolls against charmed creatures."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Chilling Hex (UA)",
								"text": [
									"Prerequisite: The Hexblade patron",
									"As a bonus action, you cause frost to swirl around a target cursed by your Hexblade’s Curse, dealing cold damage to each of your enemies within 5 feet of the target. The cold damage equals your Charisma modifier (minimum of 1)."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Chronicle of the Raven Queen (UA)",
								"text": [
									"Prerequisite: The Raven Queen patron, Pact of the Tome feature",
									"You can place a corpse’s hand or similar appendage on your Book of Shadows and ask one question aloud. After 1 minute, the answer appears written in blood in your book. The answer is provided by the dead creature’s spirit to the best of its knowledge and is translated into a language of your choice. You must use this ability within 1 minute of a creature’s death, and a given creature can only be asked one question in this manner."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Claw of Acamar (UA)",
								"text": [
									"Prerequisite: The Great Old One patron, Pact of the Blade feature",
									"You can create a black, lead flail using your Pact of the Blade feature. The flail’s head is sculpted to resemble a pair of grasping tentacles. The weapon has the reach property. When you hit a creature with it, you can expend a spell slot to deal an additional 2d8 necrotic damage to the target per spell level, and you can reduce the creature’s speed to 0 feet until the end of your next turn."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Cloak of Baalzebul (UA)",
								"text": [
									"Prerequisite: The Fiend patron",
									"As a bonus action, you can conjure a swarm of buzzing flies around you. The swarm grants you advantage on Charisma (Intimidation) checks but disadvantage on all other Charisma checks. In addition, a creature that starts its turn within 5 feet of you takes poison damage equal to your Charisma modifier. You can dismiss the swarm with another bonus action."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Curse Bringer (UA)",
								"text": [
									"Prerequisite: The Hexblade patron, Pact of the Blade feature",
									"You can create a greatsword forged from silver, with black runes etched into its blade, using your Pact of the Blade feature. If you reduce a target cursed by your Hexblade’s Curse to 0 hit points with this sword, you can immediately change the target of the curse to a different creature. This change doesn’t extend the curse’s duration.",
									"When you hit a creature with this weapon, you can expend a spell slot to deal an additional 2d8 slashing damage to the target per spell level, and you can reduce the creature’s speed to 0 feet until the end of your next turn."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Kiss of Mephistopheles (UA)",
								"text": [
									"Prerequisite: 5th level, the Fiend patron, eldritch blast cantrip",
									"You can channel the fires of Mephistopheles through your eldritch blast. When you hit a creature with that cantrip, you can cast fireball as a bonus action using a warlock spell slot. However, the spell must be centered on a creature you hit with eldritch blast."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Frost Lance (UA)",
								"text": [
									"Prerequisite: The Archfey patron, eldritch blast cantrip",
									"You draw on the gifts of the Prince of Frost to trap your enemies in ice. When you hit a creature with your eldritch blast cantrip one or more times on your turn, you can reduce that creature’s speed by 10 feet until the end of your next turn."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Grasp of Hadar (UA)",
								"text": [
									"Prerequisite: The Great Old One patron, eldritch blast cantrip",
									"Once during your turn when you hit a creature with your eldritch blast cantrip, you can move that creature in a straight line 10 feet closer to yourself."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Green Lord’s Gift (UA)",
								"text": [
									"Prerequisite: The Archfey patron",
									"The Green Lord oversees a verdant realm of everlasting summer. Your soul is linked to his power. Whenever you regain hit points, you treat any dice rolled to determine the hit points you regain as having rolled their maximum value."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Improved Pact Weapon (UA)",
								"text": [
									"Prerequisite: 5th level, Pact of the Blade feature",
									"Any weapon you create using your Pact of the Blade feature is a +1 weapon. This invocation doesn’t affect a magic weapon you transformed into your pact weapon."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Mace of Dispater (UA)",
								"text": [
									"Prerequisite: The Fiend patron, Pact of the Blade feature",
									"When you create your pact weapon as a mace, it manifests as an iron mace forged in Dis, the second of the Nine Hells. When you hit a creature with it, you can expend a spell slot to deal an additional 2d8 force damage to the target per spell level, and you can knock the target prone if it is Huge or smaller."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Moon Bow (UA)",
								"text": [
									"Prerequisite: The Archfey patron, Pact of the Blade feature",
									"You can create a longbow using your Pact of the Blade feature. When you draw back its string and fire, it creates an arrow of white wood, which vanishes after 1 minute. You have advantage on attack rolls against lycanthropes with the bow. When you hit a creature with it, you can expend a spell slot to deal an additional 2d8 radiant damage to the target per spell level."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Path of the Seeker (UA)",
								"text": [
									"Prerequisite: The Seeker patron",
									"The Seeker bids you to travel in search of knowledge, and little can prevent you from waling this path. You ignore difficult terrain, have advantage on all checks to escape a grapple, manacles, or rope bindings, and advantage on saving throws against being paralyzed."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Raven Queen’s Blessing (UA)",
								"text": [
									"Prerequisite: Raven Queen patron, eldritch blast cantrip",
									"When you score a critical hit with your eldritch blast cantrip, pick yourself or an ally you can see within 30 feet of you. The chosen creature can immediately expend a Hit Die to regain hit points equal to the roll + the creature’s Constitution modifier (minimum of 1 hit point)."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Sea Twins’ Gift (UA)",
								"text": [
									"Prerequisite: The Archfey patron",
									"The Sea Twins rule seas in the Feywild. Their gift allows you to travel through water with ease. You can breathe underwater, and you gain a swimming speed equal to your walking speed.",
									"You can also cast water breathing using a warlock spell slot. Once you cast it using this invocation, you can’t do so again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Seeker’s Speech (UA)",
								"text": [
									"Prerequisite: The Seeker patron",
									"Your quest for knowledge allows you to master any spoken language. When you complete a long rest, you can pick two languages. You gain the ability to speak, read, and write the chosen languages until you finish your next long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Tomb of Levistus (UA)",
								"text": [
									"Prerequisite: The Fiend patron",
									"As a reaction when you take damage, you can entomb yourself in ice, which melts away at the end of your next turn. You gain 10 temporary hit points per warlock level, which take as much of the triggering damage as possible. You also gain vulnerability to fire damage, your speed drops to 0, and you are incapacitated. All of these effects end when the ice melts.",
									"Once you use this invocation, you can’t use it again until you finish a short or long rest."
								]
							}
						]
					},
					{
						"-level": "7",
						"feature": [ {
							"-optional": "YES",
							"name": "Eldritch Invocation: Aspect of the Moon (UA)",
							"text": [
								"Prerequisite: The Archfey patron",
								"You have gained the Maiden of the Moon’s favor. You no longer need to sleep and can’t be forced to sleep by any means. To gain the benefits of a long rest, you can spend all 8 hours doing light activity, such as reading and keeping watch."
							]
						},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Burning Hex (UA)",
								"text": [
									"Prerequisite: The Hexblade patron",
									"As a bonus action, you cause a target cursed by your Hexblade’s Curse to take fire damage equal to your Charisma modifier (minimum of 1)."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Caiphon's Beacon (UA)",
								"text": [
									"Prerequisite: The Great Old One patron",
									"The purple star Caiphon is the doom of inexperienced mariners. Those who use its deceptive light to guide their travels invariably come to ruin. You gain proficiency in the Deception and Stealth skills, and you have advantage on attack rolls against charmed creatures."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Chilling Hex (UA)",
								"text": [
									"Prerequisite: The Hexblade patron",
									"As a bonus action, you cause frost to swirl around a target cursed by your Hexblade’s Curse, dealing cold damage to each of your enemies within 5 feet of the target. The cold damage equals your Charisma modifier (minimum of 1)."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Chronicle of the Raven Queen (UA)",
								"text": [
									"Prerequisite: The Raven Queen patron, Pact of the Tome feature",
									"You can place a corpse’s hand or similar appendage on your Book of Shadows and ask one question aloud. After 1 minute, the answer appears written in blood in your book. The answer is provided by the dead creature’s spirit to the best of its knowledge and is translated into a language of your choice. You must use this ability within 1 minute of a creature’s death, and a given creature can only be asked one question in this manner."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Claw of Acamar (UA)",
								"text": [
									"Prerequisite: The Great Old One patron, Pact of the Blade feature",
									"You can create a black, lead flail using your Pact of the Blade feature. The flail’s head is sculpted to resemble a pair of grasping tentacles. The weapon has the reach property. When you hit a creature with it, you can expend a spell slot to deal an additional 2d8 necrotic damage to the target per spell level, and you can reduce the creature’s speed to 0 feet until the end of your next turn."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Cloak of Baalzebul (UA)",
								"text": [
									"Prerequisite: The Fiend patron",
									"As a bonus action, you can conjure a swarm of buzzing flies around you. The swarm grants you advantage on Charisma (Intimidation) checks but disadvantage on all other Charisma checks. In addition, a creature that starts its turn within 5 feet of you takes poison damage equal to your Charisma modifier. You can dismiss the swarm with another bonus action."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Curse Bringer (UA)",
								"text": [
									"Prerequisite: The Hexblade patron, Pact of the Blade feature",
									"You can create a greatsword forged from silver, with black runes etched into its blade, using your Pact of the Blade feature. If you reduce a target cursed by your Hexblade’s Curse to 0 hit points with this sword, you can immediately change the target of the curse to a different creature. This change doesn’t extend the curse’s duration.",
									"When you hit a creature with this weapon, you can expend a spell slot to deal an additional 2d8 slashing damage to the target per spell level, and you can reduce the creature’s speed to 0 feet until the end of your next turn."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Kiss of Mephistopheles (UA)",
								"text": [
									"Prerequisite: 5th level, the Fiend patron, eldritch blast cantrip",
									"You can channel the fires of Mephistopheles through your eldritch blast. When you hit a creature with that cantrip, you can cast fireball as a bonus action using a warlock spell slot. However, the spell must be centered on a creature you hit with eldritch blast."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Frost Lance (UA)",
								"text": [
									"Prerequisite: The Archfey patron, eldritch blast cantrip",
									"You draw on the gifts of the Prince of Frost to trap your enemies in ice. When you hit a creature with your eldritch blast cantrip one or more times on your turn, you can reduce that creature’s speed by 10 feet until the end of your next turn."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Gaze of Khirad (UA)",
								"text": [
									"Prerequisite: 7th level, the Great Old One patron",
									"You gain the piercing gaze of the blue star Khirad. As an action, you can see through solid objects to a range of 30 feet until the end of the current turn. During that time, you perceive objects as ghostly, transparent images."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Grasp of Hadar (UA)",
								"text": [
									"Prerequisite: The Great Old One patron, eldritch blast cantrip",
									"Once during your turn when you hit a creature with your eldritch blast cantrip, you can move that creature in a straight line 10 feet closer to yourself."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Green Lord’s Gift (UA)",
								"text": [
									"Prerequisite: The Archfey patron",
									"The Green Lord oversees a verdant realm of everlasting summer. Your soul is linked to his power. Whenever you regain hit points, you treat any dice rolled to determine the hit points you regain as having rolled their maximum value."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Improved Pact Weapon (UA)",
								"text": [
									"Prerequisite: 5th level, Pact of the Blade feature",
									"Any weapon you create using your Pact of the Blade feature is a +1 weapon. This invocation doesn’t affect a magic weapon you transformed into your pact weapon."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Mace of Dispater (UA)",
								"text": [
									"Prerequisite: The Fiend patron, Pact of the Blade feature",
									"When you create your pact weapon as a mace, it manifests as an iron mace forged in Dis, the second of the Nine Hells. When you hit a creature with it, you can expend a spell slot to deal an additional 2d8 force damage to the target per spell level, and you can knock the target prone if it is Huge or smaller."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Moon Bow (UA)",
								"text": [
									"Prerequisite: The Archfey patron, Pact of the Blade feature",
									"You can create a longbow using your Pact of the Blade feature. When you draw back its string and fire, it creates an arrow of white wood, which vanishes after 1 minute. You have advantage on attack rolls against lycanthropes with the bow. When you hit a creature with it, you can expend a spell slot to deal an additional 2d8 radiant damage to the target per spell level."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Path of the Seeker (UA)",
								"text": [
									"Prerequisite: The Seeker patron",
									"The Seeker bids you to travel in search of knowledge, and little can prevent you from waling this path. You ignore difficult terrain, have advantage on all checks to escape a grapple, manacles, or rope bindings, and advantage on saving throws against being paralyzed."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Raven Queen’s Blessing (UA)",
								"text": [
									"Prerequisite: Raven Queen patron, eldritch blast cantrip",
									"When you score a critical hit with your eldritch blast cantrip, pick yourself or an ally you can see within 30 feet of you. The chosen creature can immediately expend a Hit Die to regain hit points equal to the roll + the creature’s Constitution modifier (minimum of 1 hit point)."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Relentless Hex (UA)",
								"text": [
									"Prerequisite: 5th level, the Hexblade patron",
									"Your Hexblade’s Curse creates a temporary bond between you and your target. As a bonus action, you can magically teleport to a space you can see within 5 feet of the target cursed by your Hexblade’s Curse. To do so, you must be able to see the target and must be within 30 feet of it."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Sea Twins’ Gift (UA)",
								"text": [
									"Prerequisite: The Archfey patron",
									"The Sea Twins rule seas in the Feywild. Their gift allows you to travel through water with ease. You can breathe underwater, and you gain a swimming speed equal to your walking speed.",
									"You can also cast water breathing using a warlock spell slot. Once you cast it using this invocation, you can’t do so again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Seeker’s Speech (UA)",
								"text": [
									"Prerequisite: The Seeker patron",
									"Your quest for knowledge allows you to master any spoken language. When you complete a long rest, you can pick two languages. You gain the ability to speak, read, and write the chosen languages until you finish your next long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Tomb of Levistus (UA)",
								"text": [
									"Prerequisite: The Fiend patron",
									"As a reaction when you take damage, you can entomb yourself in ice, which melts away at the end of your next turn. You gain 10 temporary hit points per warlock level, which take as much of the triggering damage as possible. You also gain vulnerability to fire damage, your speed drops to 0, and you are incapacitated. All of these effects end when the ice melts.",
									"Once you use this invocation, you can’t use it again until you finish a short or long rest."
								]
							}
						]
					},
					{
						"-level": "9",
						"feature": [ {
							"-optional": "YES",
							"name": "Eldritch Invocation: Aspect of the Moon (UA)",
							"text": [
								"Prerequisite: The Archfey patron",
								"You have gained the Maiden of the Moon’s favor. You no longer need to sleep and can’t be forced to sleep by any means. To gain the benefits of a long rest, you can spend all 8 hours doing light activity, such as reading and keeping watch."
							]
						},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Burning Hex (UA)",
								"text": [
									"Prerequisite: The Hexblade patron",
									"As a bonus action, you cause a target cursed by your Hexblade’s Curse to take fire damage equal to your Charisma modifier (minimum of 1)."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Caiphon's Beacon (UA)",
								"text": [
									"Prerequisite: The Great Old One patron",
									"The purple star Caiphon is the doom of inexperienced mariners. Those who use its deceptive light to guide their travels invariably come to ruin. You gain proficiency in the Deception and Stealth skills, and you have advantage on attack rolls against charmed creatures."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Chilling Hex (UA)",
								"text": [
									"Prerequisite: The Hexblade patron",
									"As a bonus action, you cause frost to swirl around a target cursed by your Hexblade’s Curse, dealing cold damage to each of your enemies within 5 feet of the target. The cold damage equals your Charisma modifier (minimum of 1)."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Chronicle of the Raven Queen (UA)",
								"text": [
									"Prerequisite: The Raven Queen patron, Pact of the Tome feature",
									"You can place a corpse’s hand or similar appendage on your Book of Shadows and ask one question aloud. After 1 minute, the answer appears written in blood in your book. The answer is provided by the dead creature’s spirit to the best of its knowledge and is translated into a language of your choice. You must use this ability within 1 minute of a creature’s death, and a given creature can only be asked one question in this manner."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Claw of Acamar (UA)",
								"text": [
									"Prerequisite: The Great Old One patron, Pact of the Blade feature",
									"You can create a black, lead flail using your Pact of the Blade feature. The flail’s head is sculpted to resemble a pair of grasping tentacles. The weapon has the reach property. When you hit a creature with it, you can expend a spell slot to deal an additional 2d8 necrotic damage to the target per spell level, and you can reduce the creature’s speed to 0 feet until the end of your next turn."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Cloak of Baalzebul (UA)",
								"text": [
									"Prerequisite: The Fiend patron",
									"As a bonus action, you can conjure a swarm of buzzing flies around you. The swarm grants you advantage on Charisma (Intimidation) checks but disadvantage on all other Charisma checks. In addition, a creature that starts its turn within 5 feet of you takes poison damage equal to your Charisma modifier. You can dismiss the swarm with another bonus action."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Curse Bringer (UA)",
								"text": [
									"Prerequisite: The Hexblade patron, Pact of the Blade feature",
									"You can create a greatsword forged from silver, with black runes etched into its blade, using your Pact of the Blade feature. If you reduce a target cursed by your Hexblade’s Curse to 0 hit points with this sword, you can immediately change the target of the curse to a different creature. This change doesn’t extend the curse’s duration.",
									"When you hit a creature with this weapon, you can expend a spell slot to deal an additional 2d8 slashing damage to the target per spell level, and you can reduce the creature’s speed to 0 feet until the end of your next turn."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Kiss of Mephistopheles (UA)",
								"text": [
									"Prerequisite: 5th level, the Fiend patron, eldritch blast cantrip",
									"You can channel the fires of Mephistopheles through your eldritch blast. When you hit a creature with that cantrip, you can cast fireball as a bonus action using a warlock spell slot. However, the spell must be centered on a creature you hit with eldritch blast."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Frost Lance (UA)",
								"text": [
									"Prerequisite: The Archfey patron, eldritch blast cantrip",
									"You draw on the gifts of the Prince of Frost to trap your enemies in ice. When you hit a creature with your eldritch blast cantrip one or more times on your turn, you can reduce that creature’s speed by 10 feet until the end of your next turn."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Gaze of Khirad (UA)",
								"text": [
									"Prerequisite: 7th level, the Great Old One patron",
									"You gain the piercing gaze of the blue star Khirad. As an action, you can see through solid objects to a range of 30 feet until the end of the current turn. During that time, you perceive objects as ghostly, transparent images."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Grasp of Hadar (UA)",
								"text": [
									"Prerequisite: The Great Old One patron, eldritch blast cantrip",
									"Once during your turn when you hit a creature with your eldritch blast cantrip, you can move that creature in a straight line 10 feet closer to yourself."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Green Lord’s Gift (UA)",
								"text": [
									"Prerequisite: The Archfey patron",
									"The Green Lord oversees a verdant realm of everlasting summer. Your soul is linked to his power. Whenever you regain hit points, you treat any dice rolled to determine the hit points you regain as having rolled their maximum value."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Improved Pact Weapon (UA)",
								"text": [
									"Prerequisite: 5th level, Pact of the Blade feature",
									"Any weapon you create using your Pact of the Blade feature is a +1 weapon. This invocation doesn’t affect a magic weapon you transformed into your pact weapon."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Mace of Dispater (UA)",
								"text": [
									"Prerequisite: The Fiend patron, Pact of the Blade feature",
									"When you create your pact weapon as a mace, it manifests as an iron mace forged in Dis, the second of the Nine Hells. When you hit a creature with it, you can expend a spell slot to deal an additional 2d8 force damage to the target per spell level, and you can knock the target prone if it is Huge or smaller."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Moon Bow (UA)",
								"text": [
									"Prerequisite: The Archfey patron, Pact of the Blade feature",
									"You can create a longbow using your Pact of the Blade feature. When you draw back its string and fire, it creates an arrow of white wood, which vanishes after 1 minute. You have advantage on attack rolls against lycanthropes with the bow. When you hit a creature with it, you can expend a spell slot to deal an additional 2d8 radiant damage to the target per spell level."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Path of the Seeker (UA)",
								"text": [
									"Prerequisite: The Seeker patron",
									"The Seeker bids you to travel in search of knowledge, and little can prevent you from waling this path. You ignore difficult terrain, have advantage on all checks to escape a grapple, manacles, or rope bindings, and advantage on saving throws against being paralyzed."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Raven Queen’s Blessing (UA)",
								"text": [
									"Prerequisite: Raven Queen patron, eldritch blast cantrip",
									"When you score a critical hit with your eldritch blast cantrip, pick yourself or an ally you can see within 30 feet of you. The chosen creature can immediately expend a Hit Die to regain hit points equal to the roll + the creature’s Constitution modifier (minimum of 1 hit point)."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Relentless Hex (UA)",
								"text": [
									"Prerequisite: 5th level, the Hexblade patron",
									"Your Hexblade’s Curse creates a temporary bond between you and your target. As a bonus action, you can magically teleport to a space you can see within 5 feet of the target cursed by your Hexblade’s Curse. To do so, you must be able to see the target and must be within 30 feet of it."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Sea Twins’ Gift (UA)",
								"text": [
									"Prerequisite: The Archfey patron",
									"The Sea Twins rule seas in the Feywild. Their gift allows you to travel through water with ease. You can breathe underwater, and you gain a swimming speed equal to your walking speed.",
									"You can also cast water breathing using a warlock spell slot. Once you cast it using this invocation, you can’t do so again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Seeker’s Speech (UA)",
								"text": [
									"Prerequisite: The Seeker patron",
									"Your quest for knowledge allows you to master any spoken language. When you complete a long rest, you can pick two languages. You gain the ability to speak, read, and write the chosen languages until you finish your next long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Superior Pact Weapon (UA)",
								"text": [
									"Prerequisite: 9th level, Pact of the Blade feature",
									"Any weapon you create using your Pact of the Blade feature is a +2 weapon. This invocation doesn’t affect a magic weapon you transformed into your pact weapon."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Tomb of Levistus (UA)",
								"text": [
									"Prerequisite: The Fiend patron",
									"As a reaction when you take damage, you can entomb yourself in ice, which melts away at the end of your next turn. You gain 10 temporary hit points per warlock level, which take as much of the triggering damage as possible. You also gain vulnerability to fire damage, your speed drops to 0, and you are incapacitated. All of these effects end when the ice melts.",
									"Once you use this invocation, you can’t use it again until you finish a short or long rest."
								]
							}
						]
					},
					{
						"-level": "12",
						"feature": [ {
							"-optional": "YES",
							"name": "Eldritch Invocation: Aspect of the Moon (UA)",
							"text": [
								"Prerequisite: The Archfey patron",
								"You have gained the Maiden of the Moon’s favor. You no longer need to sleep and can’t be forced to sleep by any means. To gain the benefits of a long rest, you can spend all 8 hours doing light activity, such as reading and keeping watch."
							]
						},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Burning Hex (UA)",
								"text": [
									"Prerequisite: The Hexblade patron",
									"As a bonus action, you cause a target cursed by your Hexblade’s Curse to take fire damage equal to your Charisma modifier (minimum of 1)."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Caiphon's Beacon (UA)",
								"text": [
									"Prerequisite: The Great Old One patron",
									"The purple star Caiphon is the doom of inexperienced mariners. Those who use its deceptive light to guide their travels invariably come to ruin. You gain proficiency in the Deception and Stealth skills, and you have advantage on attack rolls against charmed creatures."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Chilling Hex (UA)",
								"text": [
									"Prerequisite: The Hexblade patron",
									"As a bonus action, you cause frost to swirl around a target cursed by your Hexblade’s Curse, dealing cold damage to each of your enemies within 5 feet of the target. The cold damage equals your Charisma modifier (minimum of 1)."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Chronicle of the Raven Queen (UA)",
								"text": [
									"Prerequisite: The Raven Queen patron, Pact of the Tome feature",
									"You can place a corpse’s hand or similar appendage on your Book of Shadows and ask one question aloud. After 1 minute, the answer appears written in blood in your book. The answer is provided by the dead creature’s spirit to the best of its knowledge and is translated into a language of your choice. You must use this ability within 1 minute of a creature’s death, and a given creature can only be asked one question in this manner."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Claw of Acamar (UA)",
								"text": [
									"Prerequisite: The Great Old One patron, Pact of the Blade feature",
									"You can create a black, lead flail using your Pact of the Blade feature. The flail’s head is sculpted to resemble a pair of grasping tentacles. The weapon has the reach property. When you hit a creature with it, you can expend a spell slot to deal an additional 2d8 necrotic damage to the target per spell level, and you can reduce the creature’s speed to 0 feet until the end of your next turn."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Cloak of Baalzebul (UA)",
								"text": [
									"Prerequisite: The Fiend patron",
									"As a bonus action, you can conjure a swarm of buzzing flies around you. The swarm grants you advantage on Charisma (Intimidation) checks but disadvantage on all other Charisma checks. In addition, a creature that starts its turn within 5 feet of you takes poison damage equal to your Charisma modifier. You can dismiss the swarm with another bonus action."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Curse Bringer (UA)",
								"text": [
									"Prerequisite: The Hexblade patron, Pact of the Blade feature",
									"You can create a greatsword forged from silver, with black runes etched into its blade, using your Pact of the Blade feature. If you reduce a target cursed by your Hexblade’s Curse to 0 hit points with this sword, you can immediately change the target of the curse to a different creature. This change doesn’t extend the curse’s duration.",
									"When you hit a creature with this weapon, you can expend a spell slot to deal an additional 2d8 slashing damage to the target per spell level, and you can reduce the creature’s speed to 0 feet until the end of your next turn."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Kiss of Mephistopheles (UA)",
								"text": [
									"Prerequisite: 5th level, the Fiend patron, eldritch blast cantrip",
									"You can channel the fires of Mephistopheles through your eldritch blast. When you hit a creature with that cantrip, you can cast fireball as a bonus action using a warlock spell slot. However, the spell must be centered on a creature you hit with eldritch blast."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Frost Lance (UA)",
								"text": [
									"Prerequisite: The Archfey patron, eldritch blast cantrip",
									"You draw on the gifts of the Prince of Frost to trap your enemies in ice. When you hit a creature with your eldritch blast cantrip one or more times on your turn, you can reduce that creature’s speed by 10 feet until the end of your next turn."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Gaze of Khirad (UA)",
								"text": [
									"Prerequisite: 7th level, the Great Old One patron",
									"You gain the piercing gaze of the blue star Khirad. As an action, you can see through solid objects to a range of 30 feet until the end of the current turn. During that time, you perceive objects as ghostly, transparent images."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Grasp of Hadar (UA)",
								"text": [
									"Prerequisite: The Great Old One patron, eldritch blast cantrip",
									"Once during your turn when you hit a creature with your eldritch blast cantrip, you can move that creature in a straight line 10 feet closer to yourself."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Green Lord’s Gift (UA)",
								"text": [
									"Prerequisite: The Archfey patron",
									"The Green Lord oversees a verdant realm of everlasting summer. Your soul is linked to his power. Whenever you regain hit points, you treat any dice rolled to determine the hit points you regain as having rolled their maximum value."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Improved Pact Weapon (UA)",
								"text": [
									"Prerequisite: 5th level, Pact of the Blade feature",
									"Any weapon you create using your Pact of the Blade feature is a +1 weapon. This invocation doesn’t affect a magic weapon you transformed into your pact weapon."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Mace of Dispater (UA)",
								"text": [
									"Prerequisite: The Fiend patron, Pact of the Blade feature",
									"When you create your pact weapon as a mace, it manifests as an iron mace forged in Dis, the second of the Nine Hells. When you hit a creature with it, you can expend a spell slot to deal an additional 2d8 force damage to the target per spell level, and you can knock the target prone if it is Huge or smaller."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Moon Bow (UA)",
								"text": [
									"Prerequisite: The Archfey patron, Pact of the Blade feature",
									"You can create a longbow using your Pact of the Blade feature. When you draw back its string and fire, it creates an arrow of white wood, which vanishes after 1 minute. You have advantage on attack rolls against lycanthropes with the bow. When you hit a creature with it, you can expend a spell slot to deal an additional 2d8 radiant damage to the target per spell level."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Path of the Seeker (UA)",
								"text": [
									"Prerequisite: The Seeker patron",
									"The Seeker bids you to travel in search of knowledge, and little can prevent you from waling this path. You ignore difficult terrain, have advantage on all checks to escape a grapple, manacles, or rope bindings, and advantage on saving throws against being paralyzed."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Raven Queen’s Blessing (UA)",
								"text": [
									"Prerequisite: Raven Queen patron, eldritch blast cantrip",
									"When you score a critical hit with your eldritch blast cantrip, pick yourself or an ally you can see within 30 feet of you. The chosen creature can immediately expend a Hit Die to regain hit points equal to the roll + the creature’s Constitution modifier (minimum of 1 hit point)."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Relentless Hex (UA)",
								"text": [
									"Prerequisite: 5th level, the Hexblade patron",
									"Your Hexblade’s Curse creates a temporary bond between you and your target. As a bonus action, you can magically teleport to a space you can see within 5 feet of the target cursed by your Hexblade’s Curse. To do so, you must be able to see the target and must be within 30 feet of it."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Sea Twins’ Gift (UA)",
								"text": [
									"Prerequisite: The Archfey patron",
									"The Sea Twins rule seas in the Feywild. Their gift allows you to travel through water with ease. You can breathe underwater, and you gain a swimming speed equal to your walking speed.",
									"You can also cast water breathing using a warlock spell slot. Once you cast it using this invocation, you can’t do so again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Seeker’s Speech (UA)",
								"text": [
									"Prerequisite: The Seeker patron",
									"Your quest for knowledge allows you to master any spoken language. When you complete a long rest, you can pick two languages. You gain the ability to speak, read, and write the chosen languages until you finish your next long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Superior Pact Weapon (UA)",
								"text": [
									"Prerequisite: 9th level, Pact of the Blade feature",
									"Any weapon you create using your Pact of the Blade feature is a +2 weapon. This invocation doesn’t affect a magic weapon you transformed into your pact weapon."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Tomb of Levistus (UA)",
								"text": [
									"Prerequisite: The Fiend patron",
									"As a reaction when you take damage, you can entomb yourself in ice, which melts away at the end of your next turn. You gain 10 temporary hit points per warlock level, which take as much of the triggering damage as possible. You also gain vulnerability to fire damage, your speed drops to 0, and you are incapacitated. All of these effects end when the ice melts.",
									"Once you use this invocation, you can’t use it again until you finish a short or long rest."
								]
							}
						]
					},
					{
						"-level": "15",
						"feature": [ {
							"-optional": "YES",
							"name": "Eldritch Invocation: Aspect of the Moon (UA)",
							"text": [
								"Prerequisite: The Archfey patron",
								"You have gained the Maiden of the Moon’s favor. You no longer need to sleep and can’t be forced to sleep by any means. To gain the benefits of a long rest, you can spend all 8 hours doing light activity, such as reading and keeping watch."
							]
						},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Burning Hex (UA)",
								"text": [
									"Prerequisite: The Hexblade patron",
									"As a bonus action, you cause a target cursed by your Hexblade’s Curse to take fire damage equal to your Charisma modifier (minimum of 1)."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Caiphon's Beacon (UA)",
								"text": [
									"Prerequisite: The Great Old One patron",
									"The purple star Caiphon is the doom of inexperienced mariners. Those who use its deceptive light to guide their travels invariably come to ruin. You gain proficiency in the Deception and Stealth skills, and you have advantage on attack rolls against charmed creatures."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Chilling Hex (UA)",
								"text": [
									"Prerequisite: The Hexblade patron",
									"As a bonus action, you cause frost to swirl around a target cursed by your Hexblade’s Curse, dealing cold damage to each of your enemies within 5 feet of the target. The cold damage equals your Charisma modifier (minimum of 1)."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Chronicle of the Raven Queen (UA)",
								"text": [
									"Prerequisite: The Raven Queen patron, Pact of the Tome feature",
									"You can place a corpse’s hand or similar appendage on your Book of Shadows and ask one question aloud. After 1 minute, the answer appears written in blood in your book. The answer is provided by the dead creature’s spirit to the best of its knowledge and is translated into a language of your choice. You must use this ability within 1 minute of a creature’s death, and a given creature can only be asked one question in this manner."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Claw of Acamar (UA)",
								"text": [
									"Prerequisite: The Great Old One patron, Pact of the Blade feature",
									"You can create a black, lead flail using your Pact of the Blade feature. The flail’s head is sculpted to resemble a pair of grasping tentacles. The weapon has the reach property. When you hit a creature with it, you can expend a spell slot to deal an additional 2d8 necrotic damage to the target per spell level, and you can reduce the creature’s speed to 0 feet until the end of your next turn."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Cloak of Baalzebul (UA)",
								"text": [
									"Prerequisite: The Fiend patron",
									"As a bonus action, you can conjure a swarm of buzzing flies around you. The swarm grants you advantage on Charisma (Intimidation) checks but disadvantage on all other Charisma checks. In addition, a creature that starts its turn within 5 feet of you takes poison damage equal to your Charisma modifier. You can dismiss the swarm with another bonus action."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Curse Bringer (UA)",
								"text": [
									"Prerequisite: The Hexblade patron, Pact of the Blade feature",
									"You can create a greatsword forged from silver, with black runes etched into its blade, using your Pact of the Blade feature. If you reduce a target cursed by your Hexblade’s Curse to 0 hit points with this sword, you can immediately change the target of the curse to a different creature. This change doesn’t extend the curse’s duration.",
									"When you hit a creature with this weapon, you can expend a spell slot to deal an additional 2d8 slashing damage to the target per spell level, and you can reduce the creature’s speed to 0 feet until the end of your next turn."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Kiss of Mephistopheles (UA)",
								"text": [
									"Prerequisite: 5th level, the Fiend patron, eldritch blast cantrip",
									"You can channel the fires of Mephistopheles through your eldritch blast. When you hit a creature with that cantrip, you can cast fireball as a bonus action using a warlock spell slot. However, the spell must be centered on a creature you hit with eldritch blast."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Frost Lance (UA)",
								"text": [
									"Prerequisite: The Archfey patron, eldritch blast cantrip",
									"You draw on the gifts of the Prince of Frost to trap your enemies in ice. When you hit a creature with your eldritch blast cantrip one or more times on your turn, you can reduce that creature’s speed by 10 feet until the end of your next turn."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Gaze of Khirad (UA)",
								"text": [
									"Prerequisite: 7th level, the Great Old One patron",
									"You gain the piercing gaze of the blue star Khirad. As an action, you can see through solid objects to a range of 30 feet until the end of the current turn. During that time, you perceive objects as ghostly, transparent images."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Grasp of Hadar (UA)",
								"text": [
									"Prerequisite: The Great Old One patron, eldritch blast cantrip",
									"Once during your turn when you hit a creature with your eldritch blast cantrip, you can move that creature in a straight line 10 feet closer to yourself."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Green Lord’s Gift (UA)",
								"text": [
									"Prerequisite: The Archfey patron",
									"The Green Lord oversees a verdant realm of everlasting summer. Your soul is linked to his power. Whenever you regain hit points, you treat any dice rolled to determine the hit points you regain as having rolled their maximum value."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Improved Pact Weapon (UA)",
								"text": [
									"Prerequisite: 5th level, Pact of the Blade feature",
									"Any weapon you create using your Pact of the Blade feature is a +1 weapon. This invocation doesn’t affect a magic weapon you transformed into your pact weapon."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Mace of Dispater (UA)",
								"text": [
									"Prerequisite: The Fiend patron, Pact of the Blade feature",
									"When you create your pact weapon as a mace, it manifests as an iron mace forged in Dis, the second of the Nine Hells. When you hit a creature with it, you can expend a spell slot to deal an additional 2d8 force damage to the target per spell level, and you can knock the target prone if it is Huge or smaller."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Moon Bow (UA)",
								"text": [
									"Prerequisite: The Archfey patron, Pact of the Blade feature",
									"You can create a longbow using your Pact of the Blade feature. When you draw back its string and fire, it creates an arrow of white wood, which vanishes after 1 minute. You have advantage on attack rolls against lycanthropes with the bow. When you hit a creature with it, you can expend a spell slot to deal an additional 2d8 radiant damage to the target per spell level."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Path of the Seeker (UA)",
								"text": [
									"Prerequisite: The Seeker patron",
									"The Seeker bids you to travel in search of knowledge, and little can prevent you from waling this path. You ignore difficult terrain, have advantage on all checks to escape a grapple, manacles, or rope bindings, and advantage on saving throws against being paralyzed."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Raven Queen’s Blessing (UA)",
								"text": [
									"Prerequisite: Raven Queen patron, eldritch blast cantrip",
									"When you score a critical hit with your eldritch blast cantrip, pick yourself or an ally you can see within 30 feet of you. The chosen creature can immediately expend a Hit Die to regain hit points equal to the roll + the creature’s Constitution modifier (minimum of 1 hit point)."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Relentless Hex (UA)",
								"text": [
									"Prerequisite: 5th level, the Hexblade patron",
									"Your Hexblade’s Curse creates a temporary bond between you and your target. As a bonus action, you can magically teleport to a space you can see within 5 feet of the target cursed by your Hexblade’s Curse. To do so, you must be able to see the target and must be within 30 feet of it."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Sea Twins’ Gift (UA)",
								"text": [
									"Prerequisite: The Archfey patron",
									"The Sea Twins rule seas in the Feywild. Their gift allows you to travel through water with ease. You can breathe underwater, and you gain a swimming speed equal to your walking speed.",
									"You can also cast water breathing using a warlock spell slot. Once you cast it using this invocation, you can’t do so again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Seeker’s Speech (UA)",
								"text": [
									"Prerequisite: The Seeker patron",
									"Your quest for knowledge allows you to master any spoken language. When you complete a long rest, you can pick two languages. You gain the ability to speak, read, and write the chosen languages until you finish your next long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Superior Pact Weapon (UA)",
								"text": [
									"Prerequisite: 9th level, Pact of the Blade feature",
									"Any weapon you create using your Pact of the Blade feature is a +2 weapon. This invocation doesn’t affect a magic weapon you transformed into your pact weapon."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Tomb of Levistus (UA)",
								"text": [
									"Prerequisite: The Fiend patron",
									"As a reaction when you take damage, you can entomb yourself in ice, which melts away at the end of your next turn. You gain 10 temporary hit points per warlock level, which take as much of the triggering damage as possible. You also gain vulnerability to fire damage, your speed drops to 0, and you are incapacitated. All of these effects end when the ice melts.",
									"Once you use this invocation, you can’t use it again until you finish a short or long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Ultimate Pact Weapon (UA)",
								"text": [
									"Prerequisite: 15th level, Pact of the Blade feature",
									"Any weapon you create using your Pact of the Blade feature is a +3 weapon. This invocation doesn’t affect a magic weapon you transformed into your pact weapon."
								]
							}
						]
					},
					{
						"-level": "18",
						"feature": [ {
							"-optional": "YES",
							"name": "Eldritch Invocation: Aspect of the Moon (UA)",
							"text": [
								"Prerequisite: The Archfey patron",
								"You have gained the Maiden of the Moon’s favor. You no longer need to sleep and can’t be forced to sleep by any means. To gain the benefits of a long rest, you can spend all 8 hours doing light activity, such as reading and keeping watch."
							]
						},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Burning Hex (UA)",
								"text": [
									"Prerequisite: The Hexblade patron",
									"As a bonus action, you cause a target cursed by your Hexblade’s Curse to take fire damage equal to your Charisma modifier (minimum of 1)."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Caiphon's Beacon (UA)",
								"text": [
									"Prerequisite: The Great Old One patron",
									"The purple star Caiphon is the doom of inexperienced mariners. Those who use its deceptive light to guide their travels invariably come to ruin. You gain proficiency in the Deception and Stealth skills, and you have advantage on attack rolls against charmed creatures."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Chilling Hex (UA)",
								"text": [
									"Prerequisite: The Hexblade patron",
									"As a bonus action, you cause frost to swirl around a target cursed by your Hexblade’s Curse, dealing cold damage to each of your enemies within 5 feet of the target. The cold damage equals your Charisma modifier (minimum of 1)."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Chronicle of the Raven Queen (UA)",
								"text": [
									"Prerequisite: The Raven Queen patron, Pact of the Tome feature",
									"You can place a corpse’s hand or similar appendage on your Book of Shadows and ask one question aloud. After 1 minute, the answer appears written in blood in your book. The answer is provided by the dead creature’s spirit to the best of its knowledge and is translated into a language of your choice. You must use this ability within 1 minute of a creature’s death, and a given creature can only be asked one question in this manner."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Claw of Acamar (UA)",
								"text": [
									"Prerequisite: The Great Old One patron, Pact of the Blade feature",
									"You can create a black, lead flail using your Pact of the Blade feature. The flail’s head is sculpted to resemble a pair of grasping tentacles. The weapon has the reach property. When you hit a creature with it, you can expend a spell slot to deal an additional 2d8 necrotic damage to the target per spell level, and you can reduce the creature’s speed to 0 feet until the end of your next turn."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Cloak of Baalzebul (UA)",
								"text": [
									"Prerequisite: The Fiend patron",
									"As a bonus action, you can conjure a swarm of buzzing flies around you. The swarm grants you advantage on Charisma (Intimidation) checks but disadvantage on all other Charisma checks. In addition, a creature that starts its turn within 5 feet of you takes poison damage equal to your Charisma modifier. You can dismiss the swarm with another bonus action."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Curse Bringer (UA)",
								"text": [
									"Prerequisite: The Hexblade patron, Pact of the Blade feature",
									"You can create a greatsword forged from silver, with black runes etched into its blade, using your Pact of the Blade feature. If you reduce a target cursed by your Hexblade’s Curse to 0 hit points with this sword, you can immediately change the target of the curse to a different creature. This change doesn’t extend the curse’s duration.",
									"When you hit a creature with this weapon, you can expend a spell slot to deal an additional 2d8 slashing damage to the target per spell level, and you can reduce the creature’s speed to 0 feet until the end of your next turn."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Kiss of Mephistopheles (UA)",
								"text": [
									"Prerequisite: 5th level, the Fiend patron, eldritch blast cantrip",
									"You can channel the fires of Mephistopheles through your eldritch blast. When you hit a creature with that cantrip, you can cast fireball as a bonus action using a warlock spell slot. However, the spell must be centered on a creature you hit with eldritch blast."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Frost Lance (UA)",
								"text": [
									"Prerequisite: The Archfey patron, eldritch blast cantrip",
									"You draw on the gifts of the Prince of Frost to trap your enemies in ice. When you hit a creature with your eldritch blast cantrip one or more times on your turn, you can reduce that creature’s speed by 10 feet until the end of your next turn."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Gaze of Khirad (UA)",
								"text": [
									"Prerequisite: 7th level, the Great Old One patron",
									"You gain the piercing gaze of the blue star Khirad. As an action, you can see through solid objects to a range of 30 feet until the end of the current turn. During that time, you perceive objects as ghostly, transparent images."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Grasp of Hadar (UA)",
								"text": [
									"Prerequisite: The Great Old One patron, eldritch blast cantrip",
									"Once during your turn when you hit a creature with your eldritch blast cantrip, you can move that creature in a straight line 10 feet closer to yourself."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Green Lord’s Gift (UA)",
								"text": [
									"Prerequisite: The Archfey patron",
									"The Green Lord oversees a verdant realm of everlasting summer. Your soul is linked to his power. Whenever you regain hit points, you treat any dice rolled to determine the hit points you regain as having rolled their maximum value."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Improved Pact Weapon (UA)",
								"text": [
									"Prerequisite: 5th level, Pact of the Blade feature",
									"Any weapon you create using your Pact of the Blade feature is a +1 weapon. This invocation doesn’t affect a magic weapon you transformed into your pact weapon."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Mace of Dispater (UA)",
								"text": [
									"Prerequisite: The Fiend patron, Pact of the Blade feature",
									"When you create your pact weapon as a mace, it manifests as an iron mace forged in Dis, the second of the Nine Hells. When you hit a creature with it, you can expend a spell slot to deal an additional 2d8 force damage to the target per spell level, and you can knock the target prone if it is Huge or smaller."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Moon Bow (UA)",
								"text": [
									"Prerequisite: The Archfey patron, Pact of the Blade feature",
									"You can create a longbow using your Pact of the Blade feature. When you draw back its string and fire, it creates an arrow of white wood, which vanishes after 1 minute. You have advantage on attack rolls against lycanthropes with the bow. When you hit a creature with it, you can expend a spell slot to deal an additional 2d8 radiant damage to the target per spell level."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Path of the Seeker (UA)",
								"text": [
									"Prerequisite: The Seeker patron",
									"The Seeker bids you to travel in search of knowledge, and little can prevent you from waling this path. You ignore difficult terrain, have advantage on all checks to escape a grapple, manacles, or rope bindings, and advantage on saving throws against being paralyzed."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Raven Queen’s Blessing (UA)",
								"text": [
									"Prerequisite: Raven Queen patron, eldritch blast cantrip",
									"When you score a critical hit with your eldritch blast cantrip, pick yourself or an ally you can see within 30 feet of you. The chosen creature can immediately expend a Hit Die to regain hit points equal to the roll + the creature’s Constitution modifier (minimum of 1 hit point)."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Relentless Hex (UA)",
								"text": [
									"Prerequisite: 5th level, the Hexblade patron",
									"Your Hexblade’s Curse creates a temporary bond between you and your target. As a bonus action, you can magically teleport to a space you can see within 5 feet of the target cursed by your Hexblade’s Curse. To do so, you must be able to see the target and must be within 30 feet of it."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Sea Twins’ Gift (UA)",
								"text": [
									"Prerequisite: The Archfey patron",
									"The Sea Twins rule seas in the Feywild. Their gift allows you to travel through water with ease. You can breathe underwater, and you gain a swimming speed equal to your walking speed.",
									"You can also cast water breathing using a warlock spell slot. Once you cast it using this invocation, you can’t do so again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Seeker’s Speech (UA)",
								"text": [
									"Prerequisite: The Seeker patron",
									"Your quest for knowledge allows you to master any spoken language. When you complete a long rest, you can pick two languages. You gain the ability to speak, read, and write the chosen languages until you finish your next long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Shroud of Ulban (UA)",
								"text": [
									"Prerequisite: 18th level, the Great Old One patron",
									"The blue-white star Ulban maintains a fickle presence among the stars, fluttering into view only to herald a dire omen. As an action, you can turn invisible for 1 minute. If you attack, deal damage, or force a creature to make a saving throw, you become visible at the end of the current turn."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Superior Pact Weapon (UA)",
								"text": [
									"Prerequisite: 9th level, Pact of the Blade feature",
									"Any weapon you create using your Pact of the Blade feature is a +2 weapon. This invocation doesn’t affect a magic weapon you transformed into your pact weapon."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Tomb of Levistus (UA)",
								"text": [
									"Prerequisite: The Fiend patron",
									"As a reaction when you take damage, you can entomb yourself in ice, which melts away at the end of your next turn. You gain 10 temporary hit points per warlock level, which take as much of the triggering damage as possible. You also gain vulnerability to fire damage, your speed drops to 0, and you are incapacitated. All of these effects end when the ice melts.",
									"Once you use this invocation, you can’t use it again until you finish a short or long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "Eldritch Invocation: Ultimate Pact Weapon (UA)",
								"text": [
									"Prerequisite: 15th level, Pact of the Blade feature",
									"Any weapon you create using your Pact of the Blade feature is a +3 weapon. This invocation doesn’t affect a magic weapon you transformed into your pact weapon."
								]
							}
						]
					}
				]
			},
			{
				"name": "Wizard",
				"hd": "6",
				"proficiency": "Intelligence, Wisdom",
				"spellAbility": "Intelligence",
				"autolevel": [ {
					"-level": "1",
					"slots": "3,2,0,0,0,0,0,0,0,0"
				},
					{
						"-level": "2",
						"slots": "3,3,0,0,0,0,0,0,0,0"
					},
					{
						"-level": "3",
						"slots": "3,4,2,0,0,0,0,0,0,0"
					},
					{
						"-level": "4",
						"slots": "4,4,3,0,0,0,0,0,0,0"
					},
					{
						"-level": "5",
						"slots": "4,4,3,2,0,0,0,0,0,0"
					},
					{
						"-level": "6",
						"slots": "4,4,3,3,0,0,0,0,0,0"
					},
					{
						"-level": "7",
						"slots": "4,4,3,3,1,0,0,0,0,0"
					},
					{
						"-level": "8",
						"slots": "4,4,3,3,2,0,0,0,0,0"
					},
					{
						"-level": "9",
						"slots": "4,4,3,3,3,1,0,0,0,0"
					},
					{
						"-level": "10",
						"slots": "5,4,3,3,3,2,0,0,0,0"
					},
					{
						"-level": "11",
						"slots": "5,4,3,3,3,2,1,0,0,0"
					},
					{
						"-level": "12",
						"slots": "5,4,3,3,3,2,1,0,0,0"
					},
					{
						"-level": "13",
						"slots": "5,4,3,3,3,2,1,1,0,0"
					},
					{
						"-level": "14",
						"slots": "5,4,3,3,3,2,1,1,0,0"
					},
					{
						"-level": "15",
						"slots": "5,4,3,3,3,2,1,1,1,0"
					},
					{
						"-level": "16",
						"slots": "5,4,3,3,3,2,1,1,1,0"
					},
					{
						"-level": "17",
						"slots": "5,4,3,3,3,2,1,1,1,1"
					},
					{
						"-level": "18",
						"slots": "5,4,3,3,3,3,1,1,1,1"
					},
					{
						"-level": "19",
						"slots": "5,4,3,3,3,3,2,1,1,1"
					},
					{
						"-level": "20",
						"slots": "5,4,3,3,3,3,2,2,1,1"
					},
					{
						"-level": "1",
						"feature": [ {
							"name": "Starting Proficiencies",
							"text": [
								"You are proficient with the following items, in addition to any proficiencies provided by your race or background.",
								"Armor: none",
								"Weapons: daggers, darts, slings, quarterstaffs, light crossbows",
								"Tools: none",
								"Skills: Choose two from Arcana, History, Insight, Investigation, Medicine, and Religion"
							]
						},
							{
								"name": "Starting Equipment",
								"text": [
									"You start with the following items, plus anything provided by your background.",
									"• (a) a quarterstaff or (b) a dagger",
									"• (a) a component pouch or (b) an arcane focus",
									"• (a) a scholar's pack or (b) an explorer's pack",
									"• A spellbook",
									"Alternatively, you may start with 4d4 x 10 gp to buy your own equipment."
								]
							}
						]
					},
					{
						"-level": "1",
						"feature": [ {
							"name": "Arcane Recovery",
							"text": [
								"You have learned to regain some of your magical energy by studying your spellbook. Once per day when you finish a short rest, you can choose expended spell slots to recover. The spell slots can have a combined level that is equal to or less than half your wizard level (rounded up), and none of the slots can be 6th level or higher.",
								"For example, if you're a 4th-level wizard, you can recover up to two levels worth of spell slots.",
								"You can recover either a 2nd-level spell slot or two 1st-level spell slots."
							]
						},
							{
								"name": "Spellcasting",
								"text": [
									"As a student of arcane magic, you have a spellbook containing spells that show the first glimmerings of your true power. See chapter 10 for the general rules of spellcasting and chapter 11 for the wizard spell list.",
									"Cantrips",
									"At 1st level, you know three cantrips of your choice from the wizard spell list. You learn additional wizard cantrips of your choice at higher levels, as shown in the Cantrips Known column of the Wizard table.",
									"Spellbook",
									"At 1st level, you have a spellbook containing six 1st-level wizard spells of your choice. Your spellbook is the repository of the wizard spells you know, except your cantrips, which are fixed in your mind.",
									"Preparing and Casting Spells",
									"The Wizard table shows how many spell slots you have to cast your spells of 1st level and higher. To cast one of these spells, you must expend a slot of the spell's level or higher. You regain all expended spell slots when you finish a long rest.",
									"You prepare the list of wizard spells that are available for you to cast. To do so, choose a number of wizard spells from your spellbook equal to your Intelligence modifier + your wizard level (minimum of one spell). The spells must be of a level for which you have spell slots.",
									"For example, if you're a 3rd-level wizard, you have four 1st-level and two 2nd-level spell slots. With an Intelligence of 16, your list of prepared spells can include six spells of 1st or 2nd level, in any combination, chosen from your spellbook. If you prepare the 1st-level spell magic missile, you can cast it using a 1st-level or a 2nd-level slot. Casting the spell doesn't remove it from your list of prepared spells.",
									"You can change your list of prepared spells when you finish a long rest. Preparing a new list of wizard spells requires time spent studying your spellbook and memorizing the incantations and gestures you must make to cast the spell: at least 1 minute per spell level for each spell on your list.",
									"Spellcasting Ability",
									"Intelligence is your spellcasting ability for your wizard spells, since you learn your spells through dedicated study and memorization. You use your Intelligence whenever a spell refers to your spellcasting ability. In addition, you use your Intelligence modifier when setting the saving throw DC for a wizard spell you cast and when making an attack roll with one.",
									"Spell save DC = 8 + your proficiency bonus + your Intelligence modifier",
									"Spell attack modifier = your proficiency bonus + your Intelligence modifier",
									"Ritual Casting",
									"You can cast a wizard spell as a ritual if that spell has the ritual tag and you have the spell in your spellbook. You don't need to have the spell prepared.",
									"Spellcasting Focus",
									"You can use an arcane focus (found in chapter 5) as a spellcasting focus for your wizard spells."
								]
							}
						]
					},
					{
						"-level": "2",
						"feature": [ {
							"name": "Arcane Tradition",
							"text": "When you reach 2nd level, you choose an arcane tradition, shaping your practice of magic through one of eight schools: Abjuration, Bladesinging, Conjuration, Divination, Enchantment, Evocation, Illusion, Necromancy, or Transmutation, all detailed at the end of the class description. Your choice grants you features at 2nd level and again at 6th, 10th, and 14th level."
						},
							{
								"-optional": "YES",
								"name": "Arcane Tradition: Abjuration",
								"text": [
									"The School of Abjuration emphasizes magic that blocks, banishes, or protects. Detractors of this school say that its tradition is about denial, negation rather than positive assertion. You understand, however, that ending harmful effects, protecting the weak, and banishing evil influences is anything but a philosophical void. It is a proud and respected vocation.",
									"Called abjurers, members of this school are sought when baleful spirits require exorcism, when important locations must be guarded against magical spying, and when portals to other planes of existence must be closed."
								]
							},
							{
								"-optional": "YES",
								"name": "Arcane Tradition: Bladesinger",
								"text": "Bladesingers are elves who bravely defend their people and lands. They are elf wizards who master a school of sword fighting grounded in a tradition of arcane magic. In combat, a bladesinger uses a series of intricate, elegant maneuvers that fend off harm and allow the bladesinger to channel magic into devastating attacks and a cunning defense."
							},
							{
								"-optional": "YES",
								"name": "Arcane Tradition: Conjuration",
								"text": "As a conjurer, you favor spells that produce objects and creatures out of thin air. You can conjure billowing clouds of killing fog or summon creatures from elsewhere to fight on your behalf. As your mastery grows, you learn spells of transportation and can teleport yourself across vast distances, even to other planes of existence, in an instant."
							},
							{
								"-optional": "YES",
								"name": "Arcane Tradition: Divination",
								"text": "The counsel of a diviner is sought by royalty and commoners alike, for all seek a clearer understanding of the past, present, and future. As a diviner, you strive to part the veils of space, time, and consciousness so that you can see clearly. You work to master spells of discernment, remote viewing, supernatural knowledge, and foresight."
							},
							{
								"-optional": "YES",
								"name": "Arcane Tradition: Enchantment",
								"text": "As a member of the School of Enchantment, you have honed your ability to magically entrance and beguile other people and monsters. Some enchanters are peacemakers who bewitch the violent to lay down their arms and charm the cruel into showing mercy. Others are tyrants who magically bind the unwilling into their service. Most enchanters fall somewhere in between."
							},
							{
								"-optional": "YES",
								"name": "Arcane Tradition: Evocation",
								"text": "You focus your study on magic that creates powerful elemental effects such as bitter cold, searing flame, rolling thunder, crackling lightning, and burning acid. Some evokers find employment in military forces, serving as artillery to blast enemy armies from afar. Others use their spectacular power to protect the weak, while some seek their own gain as bandits, adventurers, or aspiring tyrants."
							},
							{
								"-optional": "YES",
								"name": "Arcane Tradition: Illusion",
								"text": "You focus your studies on magic that dazzles the senses, befuddles the mind, and tricks even the wisest folk. Your magic is subtle, but the illusions crafted by your keen mind make the impossible seem real. Some illusionists - including many gnome wizards - are benign tricksters who use their spells to entertain. Others are more sinister masters of deception, using their illusions to frighten and fool others for their personal gain."
							},
							{
								"-optional": "YES",
								"name": "Arcane Tradition: Transmutation",
								"text": [
									"You are a student of spells that modify energy and matter. To you, the world is not a fixed thing, but eminently mutable, and you delight in being an agent of change. You wield the raw stuff of creation and learn to alter both physical forms and mental qualities. Your magic gives you the tools to become a smith on reality's forge.",
									"Some transmuters are tinkerers and pranksters, turning people into toads and transforming copper into silver for fun and occasional profit. Others pursue their magical studies with deadly seriousness, seeking the power of the gods to make and destroy worlds."
								]
							},
							{
								"-optional": "YES",
								"name": "Arcane Tradition: Necromancy",
								"text": [
									"The School of Necromancy explores the cosmic forces of life, death, and undeath. As you focus your studies in this tradition, you learn to manipulate the energy that animates all living things. As you progress, you learn to sap the life force from a creature as your magic destroys its body, transforming that vital energy into magical power you can manipulate.",
									"Most people see necromancers as menacing, or even villainous, due to the close association with death. Not all necromancers are evil, but the forces they manipulate are considered taboo by many societies."
								]
							},
							{
								"-optional": "YES",
								"name": "School of Abjuration: Abjuration Savant",
								"text": "Beginning when you select this school at 2nd level, the gold and time you must spend to copy an abjuration spell into your spellbook is halved."
							},
							{
								"-optional": "YES",
								"name": "School of Abjuration: Arcane Ward",
								"text": [
									"Starting at 2nd level, you can weave magic around yourself for protection. When you cast an abjuration spell of 1st level or higher, you can simultaneously use a strand of the spell's magic to create a magical ward on yourself that lasts until you finish a long rest. The ward has hit points equal to twice your wizard level + your Intelligence modifier. Whenever you take damage, the ward takes the damage instead. If this damage reduces the ward to 0 hit points, you take any remaining damage.",
									"While the ward has 0 hit points, it can't absorb damage, but its magic remains. Whenever you cast an abjuration spell of 1st level or higher, the ward regains a number of hit points equal to twice the level of the spell.",
									"Once you create the ward, you can't create it again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "School of Conjuration: Conjuration Savant",
								"text": "Beginning when you select this school at 2nd level, the gold and time you must spend to copy a conjuration spell into your spellbook is halved."
							},
							{
								"-optional": "YES",
								"name": "School of Conjuration: Minor Conjuration",
								"text": [
									"Starting at 2nd level when you select this school, you can use your action to conjure up an inanimate object in your hand or on the ground in an unoccupied space that you can see within 10 feet of you. This object can be no larger than 3 feet on a side and weigh no more than 10 pounds, and its form must be that of a nonmagical object that you have seen. The object is visibly magical, radiating dim light out to 5 feet.",
									"The object disappears after 1 hour, when you use this feature again, or if it takes any damage."
								]
							},
							{
								"-optional": "YES",
								"name": "School of Divination: Divination Savant",
								"text": "Beginning when you select this school at 2nd level, the gold and time you must spend to copy a divination spell into your spellbook is halved."
							},
							{
								"-optional": "YES",
								"name": "School of Divination: Portent",
								"text": [
									"Starting at 2nd level when you choose this school, glimpses of the future begin to press in on your awareness. When you finish a long rest, roll two d20s and record the numbers rolled. You can replace any attack roll, saving throw, or ability check made by you or a creature that you can see with one of these foretelling rolls. You must choose to do so before the roll, and you can replace a roll in this way only once per turn.",
									"Each foretelling roll can be used only once. When you finish a long rest, you lose any unused foretelling rolls."
								]
							},
							{
								"-optional": "YES",
								"name": "School of Enchantment: Enchantment Savant",
								"text": "Beginning when you select this school at 2nd level, the gold and time you must spend to copy an enchantment spell into your spellbook is halved."
							},
							{
								"-optional": "YES",
								"name": "School of Enchantment: Hypnotic Gaze",
								"text": [
									"Starting at 2nd level when you choose this school, your soft words and enchanting gaze can magically enthrall another creature. As an action, choose one creature that you can see within 5 feet of you. If the target can see or hear you, it must succeed on a Wisdom saving throw against your wizard spell save DC or be charmed by you until the end of your next turn. The charmed creature's speed drops to 0, and the creature is incapacitated and visibly dazed.",
									"On subsequent turns, you can use your action to maintain this effect, extending its duration until the end of your next turn. However, the effect ends if you move more than 5 feet away from the creature, if the creature can neither see nor hear you, or if the creature takes damage.",
									"Once the effect ends, or if the creature succeeds on its initial saving throw against this effect, you can't use this feature on that creature again until you finish a long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "School of Evocation: Evocation Savant",
								"text": "Beginning when you select this school at 2nd level, the gold and time you must spend to copy an evocation spell into your spellbook is halved."
							},
							{
								"-optional": "YES",
								"name": "School of Evocation: Sculpt Spells",
								"text": "Beginning at 2nd level, you can create pockets of relative safety within the effects of your evocation spells. When you cast an evocation spell that affects other creatures that you can see, you can choose a number of them equal to 1+the spell's level. The chosen creatures automatically succeed on their saving throws against the spell, and they take no damage if they would normally take half damage on a successful save."
							},
							{
								"-optional": "YES",
								"name": "School of Illusion: Illusion Savant",
								"text": "Beginning when you select this school at 2nd level, the gold and time you must spend to copy an illusion spell into your spellbook is halved."
							},
							{
								"-optional": "YES",
								"name": "School of Illusion: Improved Minor Illusion",
								"text": [
									"When you choose this school at 2nd level, you learn the minor illusion cantrip. If you already know this cantrip, you learn a different wizard cantrip of your choice. The cantrip doesn't count against your number of cantrips known.",
									"When you cast minor illusion, you can create both a sound and an image with a single casting of the spell."
								]
							},
							{
								"-optional": "YES",
								"name": "School of Necromancy: Necromancy Savant",
								"text": "Beginning when you select this school at 2nd level, the gold and time you must spend to copy a necromancy spell into your spellbook is halved."
							},
							{
								"-optional": "YES",
								"name": "School of Necromancy: Grim Harvest",
								"text": "At 2nd level, you gain the ability to reap life energy from creatures you kill with your spells. Once per turn when you kill one or more creatures with a spell of 1st level or higher, you regain hit points equal to twice the spell's level, or three times its level if the spell belongs to the School of Necromancy. You don't gain this benefit for killing constructs or undead."
							},
							{
								"-optional": "YES",
								"name": "School of Transmutation: Transmutation Savant",
								"text": "Beginning when you select this school at 2nd level, the gold and time you must spend to copy a transmutation spell into your spellbook is halved."
							},
							{
								"-optional": "YES",
								"name": "School of Transmutation: Minor Alchemy",
								"text": "Starting at 2nd level when you select this school, you can temporarily alter the physical properties of one nonmagical object, changing it from one substance into another. You perform a special alchemical procedure on one object composed entirely of wood, stone (but not a gemstone), iron, copper, or silver, transforming it into a different one of those materials. For each 10 minutes you spend performing the procedure, you can transform up to 1 cubic foot of material. After 1 hour, or until you lose your concentration (as if you were concentrating on a spell), the material reverts to its original substance."
							},
							{
								"-optional": "YES",
								"name": "Bladesinger: Restriction: Elves Only",
								"text": [
									"Only elves and half-elves can choose the bladesinger arcane tradition. In the world of Faerûn, elves closely guard the secrets of bladesinging.",
									"Your DM can lift this restriction to better suit the campaign. The restriction reflects the story of bladesingers in the Forgotten Realms, but it might not apply to your DM's setting or your DM's version of the Realms."
								]
							},
							{
								"-optional": "YES",
								"name": "Bladesinger: Training in War and Song (Bladesinging)",
								"text": [
									"When you adopt this tradition at 2nd level, you gain proficiency with light armor, and you gain proficiency with one type of one-handed melee weapon of your choice.",
									"You also gain proficiency in the Performance skill if you don't already have it."
								],
								"proficiency": "Performance"
							},
							{
								"-optional": "YES",
								"name": "Bladesinger: Bladesong",
								"text": [
									"Starting at 2nd level, you can invoke a secret elven magic called the Bladesong, provided you aren't wearing medium or heavy armor or using a shield. It graces you with supernatural speed, agility, and focus.",
									"You can use a bonus action to start the Bladesong, which lasts for 1 minute. It ends early if you are incapacitated, if you don medium or heavy armor or a shield, or if you use two hands to make an attack with a weapon. You can also dismiss Bladesong at any time you choose (no action required).",
									"While your bladesong is active, you gain the following benefits:",
									"- You gain a bonus to your AC equal to your Intelligence modifier (minimum of +1).",
									"- Your walking speed increases by 10 feet.",
									"- You have advantage on Dexterity (Acrobatics) checks.",
									"- You gain a bonus to any Constitution saving throws you make to maintain concentration on a spell. The bonus equals your Intelligence modifier (minimum of +1).",
									"You can use this feature twice. You regain all expended uses of it when you finish a short or long rest."
								]
							}
						]
					},
					{
						"-level": "4",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 4th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "6",
						"feature": [ {
							"-optional": "YES",
							"name": "School of Abjuration: Projected Ward",
							"text": "Starting at 6th level, when a creature that you can see within 30 feet of you takes damage, you can use your reaction to cause your Arcane Ward to absorb that damage. If this damage reduces the ward to 0 hit points, the warded creature takes any remaining damage."
						},
							{
								"-optional": "YES",
								"name": "School of Conjuration: Benign Transposition",
								"text": [
									"Starting at 6th level, you can use your action to teleport up to 30 feet to an unoccupied space that you can see. Alternatively, you can choose a space within range that is occupied by a Small or Medium creature. If that creature is willing, you both teleport, swapping places.",
									"Once you use this feature, you can't use it again until you finish a long rest or you cast a conjuration spell of 1st level or higher."
								]
							},
							{
								"-optional": "YES",
								"name": "School of Divination: Expert Divination",
								"text": "Beginning at 6th level, casting divination spells comes so easily to you that it expends only a fraction of your spellcasting efforts. When you cast a divination spell of 2nd level or higher using a spell slot, you regain one expended spell slot. The slot you regain must be of a level lower than the spell you cast and can't be higher than 5th level."
							},
							{
								"-optional": "YES",
								"name": "School of Enchantment: Instinctive Charm",
								"text": [
									"Beginning at 6th level, when a creature you can see within 30 feet of you makes an attack roll against you, you can use your reaction to divert the attack, provided that another creature is within the attack's range. The attacker must make a Wisdom saving throw against your wizard spell save DC. On a failed save, the attacker must target the creature that is closest to it, not including you or itself. If multiple creatures are closest, the attacker chooses which one to target. On a successful save, you can't use this feature on the attacker again until you finish a long rest.",
									"You must choose to use this feature before knowing whether the attack hits or misses. Creatures that can't be charmed are immune to this effect."
								]
							},
							{
								"-optional": "YES",
								"name": "School of Evocation: Potent Cantrip",
								"text": "Starting at 6th level, your damaging cantrips affect even creatures that avoid the brunt of the effect. When a creature succeeds on a saving throw against your cantrip, the creature takes half the cantrip's damage (if any) but suffers no additional effect from the cantrip."
							},
							{
								"-optional": "YES",
								"name": "School of Illusion: Malleable Illusions",
								"text": "Starting at 6th level, when you cast an illusion spell that has a duration of 1 minute or longer, you can use your action to change the nature of that illusion (using the spell's normal parameters for the illusion), provided that you can see the illusion."
							},
							{
								"-optional": "YES",
								"name": "School of Necromancy: Undead Thralls",
								"text": [
									"At 6th level, you add the animate dead spell to your spellbook if it is not there already. When you cast animate dead, you can target one additional corpse or pile of bones, creating another zombie or skeleton, as appropriate.",
									"Whenever you create an undead using a necromancy spell, it has additional benefits:",
									"• The creature's hit point maximum is increased by an amount equal to your wizard level.",
									"• The creature adds your proficiency bonus to its weapon damage rolls."
								]
							},
							{
								"-optional": "YES",
								"name": "School of Transmutation: Transmuter's Stone",
								"text": [
									"Starting at 6th level, you can spend 8 hours creating a transmuter's stone that stores transmutation magic. You can benefit from the stone yourself or give it to another creature. A creature gains a benefit of your choice as long as the stone is in the creature's possession. When you create the stone, choose the benefit from the following options:",
									"• Darkvision out to a range of 60 feet, as described in chapter 8",
									"• An increase to speed of 10 feet while the creature is unencumbered",
									"• Proficiency in Constitution saving throws",
									"• Resistance to acid, cold, fire, lightning, or thunder damage (your choice whenever you choose this benefit)",
									"Each time you cast a transmutation spell of 1st level or higher, you can change the effect of your stone if the stone is on your person.",
									"If you create a new transmuter's stone, the previous one ceases to function."
								]
							},
							{
								"-optional": "YES",
								"name": "Bladesinger: Extra Attack",
								"text": "Starting at 6th level, you can attack twice, instead of once, whenever you take the Attack action on your turn."
							}
						]
					},
					{
						"-level": "8",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 8th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "10",
						"feature": [ {
							"-optional": "YES",
							"name": "School of Abjuration: Improved Abjuration",
							"text": "Beginning at 10th level, when you cast an abjuration spell that requires you to make an ability check as a part of casting that spell (as in counterspell and dispel magic), you add your proficiency bonus to that ability check."
						},
							{
								"-optional": "YES",
								"name": "School of Conjuration: Focused Conjuration",
								"text": "Beginning at 10th level, while you are concentrating on a conjuration spell, your concentration can't be broken as a result of taking damage."
							},
							{
								"-optional": "YES",
								"name": "School of Divination: The Third Eye",
								"text": [
									"Starting at 10th level, you can use your action to increase your powers of perception. When you do so, choose one of the following benefits, which lasts until you are incapacitated or you take a short or long rest. You can't use the feature again until you finish a rest.",
									"Darkvision. You gain darkvision out to a range of 60 feet.",
									"Ethereal Sight. You can see into the Ethereal Plane within 60 feet of you.",
									"Greater Comprehension. You can read any language.",
									"See Invisibility. You can see invisible creatures and objects within 10 feet of you that are within line of sight."
								]
							},
							{
								"-optional": "YES",
								"name": "School of Enchantment: Split Enchantment",
								"text": "Starting at 10th level, when you cast an enchantment spell of 1st level or higher that targets only one creature, you can have it target a second creature."
							},
							{
								"-optional": "YES",
								"name": "School of Evocation: Empowered Evocation",
								"text": "Beginning at 10th level, you can add your Intelligence modifier to one damage roll of any wizard evocation spell you cast."
							},
							{
								"-optional": "YES",
								"name": "School of Illusion: Illusory Step",
								"text": [
									"Beginning at 10th level, you can create an illusory duplicate of yourself as an instant, almost instinctual reaction to danger. When a creature makes an attack roll against you, you can use your reaction to interpose the illusory duplicate between the attacker and yourself. The attack automatically misses you, then the illusion dissipates.",
									"Once you use this feature, you can't use it again until you finish a short or long rest."
								]
							},
							{
								"-optional": "YES",
								"name": "School of Necromancy: Inured to Undeath",
								"text": "Beginning at 10th level, you have resistance to necrotic damage, and your hit point maximum can't be reduced. You have spent so much time dealing with undead and the forces that animate them that you have become inured to some of their worst effects."
							},
							{
								"-optional": "YES",
								"name": "School of Transmutation: Shapechanger",
								"text": [
									"At 10th level, you add the polymorph spell to your spellbook, if it is not there already. You can cast polymorph without expending a spell slot. When you do so, you can target only yourself and transform into a beast whose challenge rating is 1 or lower.",
									"Once you cast polymorph in this way, you can't do so again until you finish a short or long rest, though you can still cast it normally using an available spell slot."
								]
							},
							{
								"-optional": "YES",
								"name": "Bladesinger: Song of Defense",
								"text": "Beginning at 10th level, you can direct your magic to absorb damage while your bladesong is active. When you take damage, you can use your reaction to expend one spell slot and reduce that damage to you by an amount equal to five times the spell's slot level."
							}
						]
					},
					{
						"-level": "12",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 12th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "14",
						"feature": [ {
							"-optional": "YES",
							"name": "School of Abjuration: Spell Resistance",
							"text": [
								"Starting at 14th level, you have advantage on saving throws against spells.",
								"Furthermore, you have resistance against the damage of spells."
							]
						},
							{
								"-optional": "YES",
								"name": "School of Conjuration: Durable Summons",
								"text": "Starting at 14th level, any creature that you summon or create with a conjuration spell has 30 temporary hit points."
							},
							{
								"-optional": "YES",
								"name": "School of Divination: Greater Portent",
								"text": "Starting at 14th level, the visions in your dreams intensify and paint a more accurate picture in your mind of what is to come. You roll three d20s for your Portent feature, rather than two."
							},
							{
								"-optional": "YES",
								"name": "School of Enchantment: Alter Memories",
								"text": [
									"At 14th level, you gain the ability to make a creature unaware of your magical influence on it. When you cast an enchantment spell to charm one or more creatures, you can alter one creature's understanding so that it remains unaware of being charmed.",
									"Additionally, once before the spell expires, you can use your action to try to make the chosen creature forget some of the time it spent charmed. The creature must succeed on an Intelligence saving throw against your wizard spell save DC or lose a number of hours of its memories equal to 1 + your Charisma modifier (minimum 1). You can make the creature forget less time, and the amount of time can't exceed the duration of your enchantment spell."
								]
							},
							{
								"-optional": "YES",
								"name": "School of Evocation: Overchannel",
								"text": [
									"Starting at 14th level, you can increase the power of your simpler spells. When you cast a wizard spell of 1st through 5th level that deals damage, you can deal maximum damage with that spell.",
									"The first time you do so, you suffer no adverse effect. If you use this feature again before you finish a long rest, you take 2d12 necrotic damage for each level of the spell, immediately after you cast it. Each time you use this feature again before finishing a long rest, the necrotic damage per spell level increases by 1d12. This damage ignores resistance and immunity."
								]
							},
							{
								"-optional": "YES",
								"name": "School of Illusion: Illusory Reality",
								"text": [
									"By 14th level, you have learned the secret of weaving shadow magic into your illusions to give them a semireality. When you cast an illusion spell of 1st level or higher, you can choose one inanimate, nonmagical object that is part of the illusion and make that object real. You can do this on your turn as a bonus action while the spell is ongoing. The object remains real for 1 minute. For example, you can create an illusion of a bridge over a chasm and then make it real long enough for your allies to cross.",
									"The object can't deal damage or otherwise directly harm anyone."
								]
							},
							{
								"-optional": "YES",
								"name": "School of Necromancy: Command Undead",
								"text": [
									"Starting at 14th level, you can use magic to bring undead under your control, even those created by other wizards. As an action, you can choose one undead that you can see within 60 feet of you. That creature must make a Charisma saving throw against your wizard spell save DC. If it succeeds, you can't use this feature on it again. If it fails, it becomes friendly to you and obeys your commands until you use this feature again.",
									"Intelligent undead are harder to control in this way. If the target has an Intelligence of 8 or higher, it has advantage on the saving throw. If it fails the saving throw and has an Intelligence of 12 or higher, it can repeat the saving throw at the end of every hour until it succeeds and breaks free."
								]
							},
							{
								"-optional": "YES",
								"name": "School of Transmutation: Master Transmuter",
								"text": [
									"Starting at 14th level, you can use your action to consume the reserve of transmutation magic stored within your transmuter's stone in a single burst. When you do so, choose one of the following effects. Your transmuter's stone is destroyed and can't be remade until you finish a long rest.",
									"Major Transformation. You can transmute one nonmagical object - no larger than a 5-foot cube - into another nonmagical object of similar size and mass and of equal or lesser value. You must spend 10 minutes handling the object to transform it.",
									"Panacea. You remove all curses, diseases, and poisons affecting a creature that you touch with the transmuter's stone. The creature also regains all its hit points.",
									"Restore Life. You cast the raise dead spell on a creature you touch with the transmuter's stone, without expending a spell slot or needing to have the spell in your spellbook.",
									"Restore Youth. You touch the transmuter's stone to a willing creature, and that creature's apparent age is reduced by 3d10 years, to a minimum of 13 years. This effect doesn't extend the creature's lifespan."
								]
							},
							{
								"-optional": "YES",
								"name": "Bladesinger: Song of Victory",
								"text": "Starting at 14th level, you add your Intelligence modifier (minimum of +1) to the damage of your melee weapon attacks while your Bladesong is active."
							}
						]
					},
					{
						"-level": "16",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 16th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "18",
						"feature": {
							"name": "Spell Mastery",
							"text": [
								"At 18th level, you have achieved such mastery over certain spells that you can cast them at will. Choose a 1st-level wizard spell and a 2nd-level wizard spell that are in your spellbook. You can cast those spells at their lowest level without expending a spell slot when you have them prepared. If you want to cast either spell at a higher level, you must expend a spell slot as normal.",
								"By spending 8 hours in study, you can exchange one or both of the spells you chose for different spells of the same levels."
							]
						}
					},
					{
						"-level": "19",
						"feature": {
							"name": "Ability Score Improvement",
							"text": [
								"When you reach 19th level you can increase one ability score of your choice by 2, or you can increase two ability scores of your choice by 1. As normal, you can't increase an ability score above 20 using this feature.",
								"If your DM allows the use of feats, you may instead take a feat."
							]
						}
					},
					{
						"-level": "20",
						"feature": {
							"name": "Signature Spells",
							"text": [
								"When you reach 20th level, you gain mastery over two powerful spells and can cast them with little effort. Choose two 3rd-level wizard spells in your spellbook as your signature spells. You always have these spells prepared, they don't count against the number of spells you have prepared, and you can cast each of them once at 3rd level without expending a spell slot. When you do so, you can't do so again until you finish a short or long rest.",
								"If you want to cast either spell at a higher level, you must expend a spell slot as normal."
							]
						}
					}
				]
			}
		],
		"spell": [
			{
				"name": "Commander's Strike",
				"level": "1",
				"school": "EV",
				"classes": "Fighter (Battle Master)",
				"text": "When you take the Attack action on your turn, you can forgo one of your attacks and use a bonus action to direct one of your companions to strike. When you do so, choose a friendly creature who can see or hear you and expend one superiority die. That creature can immediately use its reaction to make one weapon attack, adding the superiority die to the attack's damage roll."
			},
			{
				"name": "Disarming Attack",
				"level": "1",
				"school": "EV",
				"classes": "Fighter (Battle Master)",
				"text": "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to disarm the target, forcing it to drop one item of your choice that it's holding. You add the superiority die to the attack's damage roll, and the target must make a Strength saving throw. On a failed save, it drops the object you choose. The object lands at its feet."
			},
			{
				"name": "Distracting Strike",
				"level": "1",
				"school": "EV",
				"classes": "Fighter (Battle Master)",
				"text": "When you hit a creature with a weapon attack, you can expend one superiority die to distract the creature, giving your allies an opening. You add the superiority die to the attack's damage roll. The next attack roll against the target by an attacker other than you has advantage if the attack is made before the start of your next turn."
			},
			{
				"name": "Evasive Footwork",
				"level": "1",
				"school": "EV",
				"classes": "Fighter (Battle Master)",
				"text": "When you move, you can expend one superiority die, rolling the die and adding the number rolled to your AC until you stop moving."
			},
			{
				"name": "Feinting Attack",
				"level": "1",
				"school": "EV",
				"classes": "Fighter (Battle Master)",
				"text": "You can expend one superiority die and use a bonus action on your turn to feint, choosing one creature within 5 feet of you as your target. You have advantage on your next attack roll against that creature. If that attack hits, add the superiority die to the attack's damage roll."
			},
			{
				"name": "Goading Attack",
				"level": "1",
				"school": "EV",
				"classes": "Fighter (Battle Master)",
				"text": "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to goad the target into attacking you. You add the superiority die to the attack's damage roll, and the target must make a Wisdom saving throw. On a failed save, the target has disadvantage on all attack rolls against targets other than you until the end of your next turn."
			},
			{
				"name": "Lunging Attack",
				"level": "1",
				"school": "EV",
				"classes": "Fighter (Battle Master)",
				"text": "When you make a melee weapon attack on your turn, you can expend one superiority die to increase your reach for that attack by 5 feet. If you hit, you add the superiority die to the attack's damage roll."
			},
			{
				"name": "Maneuvering Attack",
				"level": "1",
				"school": "EV",
				"classes": "Fighter (Battle Master)",
				"text": "When you hit a creature with a weapon attack, you can expend one superiority die to maneuver one of your comrades into a more advantageous position. You add the superiority die to the attack's damage roll, and you choose a friendly creature who can see or hear you. That creature can use its reaction to move up to half its speed without provoking opportunity attacks from the target of your attack."
			},
			{
				"name": "Menacing Attack",
				"level": "1",
				"school": "EV",
				"classes": "Fighter (Battle Master)",
				"text": "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to frighten the target. You add the superiority die to the attack's damage roll, and the target must make a Wisdom saving throw. On a failed save, it is frightened of you until the end of your next turn."
			},
			{
				"name": "Parry",
				"level": "1",
				"school": "EV",
				"classes": "Fighter (Battle Master)",
				"text": "When another creature damages you with a melee attack, you can use your reaction and expend one superiority die to reduce the damage by the number you roll on your superiority die + your Dexterity modifier"
			},
			{
				"name": "Precision Attack",
				"level": "1",
				"school": "EV",
				"classes": "Fighter (Battle Master)",
				"text": "When you make a weapon attack roll against a creature, you can expend one superiority die to add it to the roll. You can use this maneuver before or after making the attack roll, but before any effects of the attack are applied."
			},
			{
				"name": "Pushing Attack",
				"level": "1",
				"school": "EV",
				"classes": "Fighter (Battle Master)",
				"text": "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to drive the target back. You add the superiority die to the attack's damage roll, and if the target is Large or smaller, it must make a Strength saving throw. On a failed save, you push the target up to 15 feet away from you."
			},
			{
				"name": "Rally",
				"level": "1",
				"school": "EV",
				"classes": "Fighter (Battle Master)",
				"text": "On your turn, you can use a bonus action and expend one superiority die to bolster the resolve of one of your companions. When you do so, choose a friendly creature who can see or hear you. That creature gains temporary hit points equal to the superiority die roll + your Charisma modifier."
			},
			{
				"name": "Riposte",
				"level": "1",
				"school": "EV",
				"classes": "Fighter (Battle Master)",
				"text": "When a creature misses you with a melee attack, you can use your reaction and expend one superiority die to make a melee weapon attack against the creature. If you hit, you add the superiority die to the attack's damage roll."
			},
			{
				"name": "Sweeping Attack",
				"level": "1",
				"school": "EV",
				"classes": "Fighter (Battle Master)",
				"text": "When you hit a creature with a melee weapon attack, you can expend one superiority die to attempt to damage another creature with the same attack. Choose another creature within 5 feet of the original target and within your reach. If the original attack roll would hit the second creature, it takes damage equal to the number you roll on your superiority die. The damage is of the same type dealt by the original attack."
			},
			{
				"name": "Trip Attack",
				"level": "1",
				"school": "EV",
				"classes": "Fighter (Battle Master)",
				"text": "When you hit a creature with a weapon attack, you can expend one superiority die to attempt to knock the target down. You add the superiority die to the attack's damage roll, and if the target is Large or smaller, it must make a Strength saving throw. On a failed save, you knock the target prone."
			},
			{
				"name": "Breath of Winter (17th level required)",
				"level": "4",
				"school": "EV",
				"time": "1 Action",
				"range": "Self (60-foot cone)",
				"components": "6 Ki Points - Cast Cone of Cold",
				"duration": "Instantaneous",
				"classes": "Monk (Way of the Four Elements)",
				"text": [
					"A blast of cold air erupts from your hands. Each creature in a 60-foot cone must make a Constitution saving throw. A creature takes 8d8 cold damage on a failed save, or half as much damage on a successful one.",
					"A creature killed by this spell becomes a frozen statue until it thaws.",
					"At Higher Levels. When you cast this spell using a spell slot of a higher level, the damage increases by 1d8 for each slot level."
				]
			},
			{
				"name": "Clench of the North Wind (6th level required)",
				"level": "2",
				"school": "EV",
				"time": "1 Action",
				"range": "60 feet",
				"components": "3 Ki Points - Cast Hold Person",
				"duration": "Instantaneous",
				"classes": "Monk (Way of the Four Elements)",
				"text": [
					"Choose a humanoid that you can see within range. The target must succeed on a Wisdom saving throw or be paralyzed for the duration. At the end of each of its turns, the target can make another Wisdom saving throw. On a success, the spell ends on the target.",
					"At Higher Levels. When you cast this spell using a higher spell slot, you can target an additional humanoid for each slot of a higher level. The humanoids must be within 30 feet of each other when you target them."
				]
			},
			{
				"name": "Elemental Attunement",
				"level": "1",
				"school": "EV",
				"time": "1 Action",
				"range": "Self (60-foot cone)",
				"duration": "Instantaneous",
				"classes": "Monk (Way of the Four Elements)",
				"text": [
					"You can use your action to briefly control elemental forces nearby, causing one of the following effects of your choice.",
					"• Create a harmless, instantaneous sensory effect related to air, earth, fire, or water, such as a shower of sparks, a puff of wind, a spray of mist, or a gentle rumbling of stone.",
					"• Instantaneously light or snuff out a candle, a torch, or a small campfire.",
					"• Chill or warm up to 1 pound of nonliving material for up to 1 hour.",
					"• Cause earth, fire, water, or mist that can fit within a 1-foot cube to shape itself into a crude form you designate for 1 minute."
				]
			},
			{
				"name": "Eternal Mountain Defense (17th level required)",
				"level": "3",
				"school": "A",
				"time": "1 Action",
				"range": "Only on Self",
				"components": "5 Ki Points - Cast stoneskin",
				"duration": "Concentration, up to 1 hour",
				"classes": "Monk (Way of the Four Elements)",
				"text": "This spell turns the flesh of a willing creature you touch as hard as stone. Until the spell ends, the target has resistance to nonmagical bludgeoning, piercing, and slashing damage."
			},
			{
				"name": "Fangs of the Fire Snake",
				"level": "1",
				"school": "EV",
				"time": "1 Attack Action",
				"range": "Only on Self",
				"components": "1 Ki Point + 1 ki on hit (optional)",
				"duration": "Rest of turn",
				"classes": "Monk (Way of the Four Elements)",
				"text": "When you use the Attack action on your turn, you can spend 1 ki point to cause tendrils of flame to stretch out from your fists and feet. Your reach with your unarmed strikes increases by 10 feet for that action, as well as the rest of the turn. A hit with such an attack deals fire damage instead of bludgeoning damage, and if you spend 1 ki point when the attack hits, it also deals an extra 1d1O fire damage."
			},
			{
				"name": "Fist of Four Thunders",
				"level": "1",
				"school": "EV",
				"time": "1 Action",
				"range": "Self (15-foot cube)",
				"components": "2 Ki Points",
				"duration": "Instantaneous",
				"classes": "Monk (Way of the Four Elements)",
				"text": "A wave of thunderous force sweeps out from you. Each creature in a 15-foot cube originating from you must make a Constitution saving throw. On a failed save, a creature takes 2d8 thunder damage and is pushed 10 feet away from you. On a successful save, the creature takes half as much damage and isn't pushed."
			},
			{
				"name": "Fist of Unbroken Air",
				"level": "1",
				"school": "EV",
				"time": "1 Action",
				"range": "30-feet",
				"components": "2 Ki Points + 1 ki per boost",
				"duration": "Instantaneous",
				"classes": "Monk (Way of the Four Elements)",
				"text": "You can create a blast of compressed air that strikes like a mighty fist. As an action, you can spend 2 ki points and choose a creature within 30 feet of you. That creature must make a Strength saving throw. On a failed save, the creature takes 3d10 bludgeoning damage, plus an extra 1d1O bludgeoning damage for each additional ki point you spend, and you can push the creature up to 20 feet away from you and knock it prone. On a successful save, the creature takes half as much damage, and you don't push it or knock it prone."
			},
			{
				"name": "Flames of the Phoenix (11th level required)",
				"level": "3",
				"school": "EV",
				"time": "1 Action",
				"range": "150 feet",
				"components": "4 Ki Points - cast fireball",
				"duration": "Instantaneous",
				"classes": "Monk (Way of the Four Elements)",
				"text": "A bright streak flashes from your pointing finger to a point you choose within range then blossoms with a low roar into an explosion of flame. Each creature in a 20-foot radius must make a Dexterity saving throw. A target takes 8d6 fire damage on a failed save, or half as much damage on a successful one."
			},
			{
				"name": "Gong of the Summit (6th level required)",
				"level": "2",
				"school": "EV",
				"time": "1 Action",
				"range": "60 feet",
				"components": "3 Ki Points - cast shatter",
				"duration": "Instantaneous",
				"classes": "Monk (Way of the Four Elements)",
				"text": [
					"A sudden loud ringing noise, painfully intense, erupts from a point of your choice within range. Each creature in a 10-foot-radius sphere centered on that point must make a Constitution saving throw. A creature takes 3d8 thunder damage on a failed save, or half as much damage on a successful one. A creature made of inorganic material such as stone, crystal, or metal has disadvantage on this saving throw.",
					"A nonmagical object that isn't being worn or carried also takes the damage if it's in the spell's area. At Higher Levels. When you cast this spell using a spell slot of or higher, the damage increases by 1d8 for each slot level."
				]
			},
			{
				"name": "Mist Stance (11th level required)",
				"level": "3",
				"school": "T",
				"time": "1 Action",
				"range": "self only",
				"components": "4 Ki Points - cast gaseous form (on self)",
				"duration": "Concentration, up to 1 hour",
				"classes": "Monk (Way of the Four Elements)",
				"text": [
					"You transform a willing creature you touch, along with everything it's wearing and carrying, into a misty cloud for the duration. The spell ends if the creature drops to 0 hit points. An incorporeal creature isn't affected.",
					"While in this form, the target's only method of movement is a flying speed of 10 feet. The target can enter and occupy the space of another creature. The target has resistance to nonmagical damage, and it has advantage on Strength, Dexterity, and Constitution saving throws. The target can pass through small holes, narrow openings, and even mere cracks, though it treats liquids as though they were solid surfaces. The target can't fall and remains hovering in the air even when stunned or otherwise incapacitated.",
					"While in the form of a misty cloud, the target can't talk or manipulate objects, and any objects it was carrying or holding can't be dropped, used, or otherwise interacted with. The target can't attack or cast spells."
				]
			},
			{
				"name": "Ride the Wind (11th level required)",
				"level": "3",
				"school": "T",
				"time": "1 Action",
				"range": "self only",
				"components": "4 Ki Points - cast fly (on self)",
				"duration": "Concentration, up to 10 minutes",
				"classes": "Monk (Way of the Four Elements)",
				"text": "You gain a flying speed of 60 feet for the duration. When the spell ends, the target falls if it is still aloft, unless it can stop the fall."
			},
			{
				"name": "River of Hungry Flame (17th level required)",
				"level": "4",
				"school": "EV",
				"time": "1 Action",
				"range": "120 feet",
				"components": "5 Ki Points - cast wall of fire",
				"duration": "Concentration, up to 1 minute",
				"classes": "Monk (Way of the Four Elements)",
				"text": [
					"You create a wall of fire on a solid surface within range. You can make the wall up to 60 feet long, 20 feet high, and 1 foot think, or a ringed wall up to 20 feet in diameter, 20 feet high, and 1 foot think. The wall is opaque and lasts for the duration.",
					"When the wall appears, each creature within its area must make a Dexterity saving throw. On a failed save, a creature takes 5d8 fire damage, or half as much damage on a successful save.",
					"One side of the wall, selected by you when you cast this spell, deals 5d8 fire damage to each creature that ends its turn within 10 feet of that side or inside the wall. A creature takes the same damage when it enters the wall for the first time on a turn or ends its turn there. The other side of the wall deals no damage.",
					"At Higher Levels, when you cast this spell, the damage increases by 1d8 for each slot increased."
				]
			},
			{
				"name": "Rush of the Gale Spirits",
				"level": "1",
				"school": "EV",
				"time": "1 Action",
				"range": "Self (60-foot line)",
				"components": "2 Ki Points - cast gust of wind",
				"duration": "Concentration, up to 1 minute",
				"classes": "Monk (Way of the Four Elements)",
				"text": [
					"A line of strong wind 60 feet long and 10 feet wide blasts from you in a direction you choose for the spell's duration. Each creature that starts its turn in the line must succeed on a Strength saving throw or be pushed 15 feet away from you in a direction following the line.",
					"Any creature in the line must spend 2 feet of movement for every 1 foot it moves when moving closer to you.",
					"The gust disperses gas or vapor, and it extinguishes candles, torches, and similar unprotected flames in the area. It causes protected flames, such as those of lanterns, to dance wildly and has a 50 percent chance to extinguish them.",
					"As a bonus action on each of your turns before the spell ends, you can change the direction in which the line blasts from you."
				]
			},
			{
				"name": "Shape the Flowing River",
				"level": "1",
				"school": "EV",
				"time": "1 Action",
				"range": "30 foot side within 120 feet of you",
				"components": "1 Ki Point",
				"duration": "special",
				"classes": "Monk (Way of the Four Elements)",
				"text": "As an action, you can spend 1 ki point to choose an area of ice or water no larger than 30 feet on a side within 120 feet of you. You can change water to ice within the area and vice versa, and you can reshape ice in the area in any manner you choose. You can raise or lower the ice's elevation, create or fill in a trench, erect or flatten a wall, or form a pillar. The extent of any such changes can't exceed half the area's largest dimension. For example, if you affect a 30-foot square, you can create a pillar up to 15 feet high, raise or lower the square's elevation by up to 15 feet, dig a trench up to 15 feet deep, and so on. You can't shape the ice to trap or injure a creature in the area."
			},
			{
				"name": "Sweeping Cinder Strike",
				"level": "1",
				"school": "EV",
				"time": "1 Action",
				"range": "Self (15-foot cone)",
				"components": "2 Ki Points - cast burning hands",
				"duration": "Instantaneous",
				"classes": "Monk (Way of the Four Elements)",
				"text": [
					"As you hold your hands with thumbs touching and fingers spread, a thin sheet of flames shoots forth from your outstretched fingertips. Each creature in a 15-foot cone must make a Dexterity saving throw. A creature takes 3d6 fire damage on a failed save, or half as much damage on a successful one.",
					"The fire ignites any flammable objects in the area that aren't being worn or carried.",
					"When you cast this spell using a higher spell slot, the damage increases by 1d6 for each additional spell slot."
				]
			},
			{
				"name": "Water Whip",
				"level": "1",
				"school": "EV",
				"time": "1 Bonus Action",
				"range": "30 feet",
				"components": "2 Ki Points + 1 per extra damage (optional)",
				"duration": "1 turn",
				"classes": "Monk (Way of the Four Elements)",
				"text": "You can spend 2 ki points as an action to create a whip of water that shoves and pulls a creature to unbalance it. A creature that you can see that is within 30 feet of you must make a Dexterity saving throw. On a failed save, the creature takes 3d10 bludgeoning damage, plus an extra 1d1O bludgeoning damage for each additional ki point you spend, and you can either knock it prone or pull it up to 25 feet closer to you. On a successful save, the creature takes half as much damage, and you don't pull it or knock it prone."
			},
			{
				"name": "Wave of Rolling Earth (17th level required)",
				"level": "4",
				"school": "EV",
				"time": "1 action",
				"range": "120 feet",
				"components": "6 Ki Points - cast wall of stone",
				"duration": "Concentration, up to 10 minutes",
				"classes": "Monk (Way of the Four Elements)",
				"text": [
					"A nonmagical wall of solid stone springs into existence at a point you choose within range. The wall is 6 inches thick and is composed of ten 10-foot-by-10-foot panels. Each panel must be contiguous with at least one other panel. Alternatively, you can create 10-foot-by-20-foot panels that are only 3 inches thick.",
					"If the wall cuts through a creature's space when it appears, the creature is pushed to one side of the wall (your choice). If a creature would be surrounded on all sides by the wall (or the wall and another solid surface), that creature can make a Dexterity saving throw. On a success, it can use its reaction to move up to its speed so that it is no longer enclosed by the wall.",
					"The wall can have any shape you desire, though it can't occupy the same space as a creature or object. the wall doesn't need to be vertical or resting on any firm foundation. It must, however, merge with and be solidly supported by existing stone. Thus you can use this spell to bridge a chasm or create a ramp.",
					"If you create a span greater than 20 feet in length, you must halve the size of each panel to create supports. You can crudely shape the wall to create crenellations, battlements, and so on.",
					"The wall is an object made of stone that can be damaged and thus breached. Each panel has AC 15 and 30 hit points per inch of thickness. Reducing a panel to 0 hit points destroys it and might cause connected panels to collapse at the DM's discretion.",
					"If you maintain your concentration on this spell for its whole duration, the wall becomes permanent and can't be dispelled. Otherwise, the wall disappears when the spell ends."
				]
			},
			{
				"name": "Darkness (Monk)",
				"level": "1",
				"school": "EV",
				"time": "1 action",
				"range": "60 feet",
				"components": "2 Ki Points",
				"duration": "Concentration, up to 10 minutes",
				"classes": "Monk (Way of Shadow)",
				"text": [
					"Magical darkness spreads from a point you choose within range to fill a 15-foot radius sphere for the duration. The darkness spreads around corners. A creature with darkvision can't see through this darkness, and nonmagical light can't illuminate it.",
					"If the point you choose is on an object you are holding or one that isn't being worn or carried, the darkness emanates from the object and moves with it. Completely covering the source of the darkness with an opaque object, such as a bowl or a helm, blocks the darkness.",
					"If any of this spell's area overlaps with an area of light created by a spell of or lower, the spell that created the light is dispelled."
				]
			},
			{
				"name": "Darkvision (Monk)",
				"level": "1",
				"school": "T",
				"time": "1 action",
				"range": "Touch",
				"components": "2 Ki Points",
				"duration": "8 hours",
				"classes": "Monk (Way of Shadow)",
				"text": "You touch a willing creature to grant it the ability to see in the dark. For the duration, that creature has darkvision out to a range of 60 feet."
			},
			{
				"name": "Pass without Trace (Monk)",
				"level": "1",
				"school": "A",
				"time": "1 action",
				"range": "Self",
				"components": "2 Ki Points",
				"duration": "Concentration, up to 1 hour",
				"classes": "Monk (Way of Shadow)",
				"text": "A veil of shadows and silence radiates from you, masking you and your companions from detection. For the duration, each creature you choose within 30 feet of you (including you) has a +10 bonus to Dexterity (Stealth) checks and can't be tracked except by magical means. A creature that receives this bonus leaves behind no tracks or other traces of its passage."
			},
			{
				"name": "Silence (Monk)",
				"level": "1",
				"school": "I",
				"time": "1 action",
				"range": "120 feet",
				"components": "2 Ki Points",
				"duration": "Concentration, up to 10 minutes",
				"classes": "Monk (Way of Shadow)",
				"text": "For the duration, no sound can be created within or pass through a 20-foot-radius sphere centered on a point you choose within range. Any creature or object entirely inside the sphere is immune to thunder damage, and creatures are deafened while entirely inside it. Casting a spell that includes a verbal component is impossible there."
			},
			{
				"name": "Minor Illusion (Monk)",
				"level": "0",
				"school": "I",
				"time": "1 action",
				"range": "30 feet",
				"components": "S, M",
				"duration": "1 Minute",
				"classes": "Monk (Way of Shadow)",
				"text": [
					"You create a sound or an image of an object within range that lasts for the duration. The illusion also ends if you dismiss it as an action or cast this spell again.",
					"If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else's voice, a lion's roar, a beating of drums, or any other sound you choose. The sound continues unabated throughout the duration, or you can make discrete sounds at different times before the spell ends.",
					"If you create an image of an object, such as a chair, muddy footprints, or a small chest. It must be no larger than a 5-foot cube. The image can't create sound, light, smell, or any other sensory effect. Physical interaction with the image reveals it to be an illusion, because things can pass through it.",
					"If a creature uses its action to examine the sound or image, the creature can determine that it is an illusion with a successful Intelligence (Investigation) check against your spell save DC. If a creature discerns the illusion for what it is, the illusion becomes faint to the creature."
				]
			},
			{
				"name": "Beacon (Psionic Talent)",
				"level": "0",
				"time": "1 Bonus Action",
				"range": "Self (20-foot radius)",
				"duration": "1 hour",
				"classes": "Mystic (UA)",
				"text": "As a bonus action, you cause bright light to radiate from your body in a 20-foot radius and dim light for an additional 20 feet. The light can be colored as you like. The light lasts for 1 hour, and you can extinguish it earlier as a bonus action."
			},
			{
				"name": "Blade Meld (Psionic Talent)",
				"level": "0",
				"time": "1 Bonus Action",
				"range": "Self",
				"duration": "1 Minute",
				"classes": "Mystic (UA)",
				"text": "As a bonus action, a one-handed melee weapon you hold becomes one with your hand. For the next minute, you can’t let go of the weapon nor can it be forced from your grasp."
			},
			{
				"name": "Blind Spot (Psionic Talent)",
				"level": "0",
				"time": "1 Action",
				"range": "1 creature within 120 feet you can see",
				"duration": "1 Round",
				"classes": "Mystic (UA)",
				"text": "As an action, you erase your image from the mind of one creature you can see within 120 feet of you; the target must succeed on a Wisdom saving throw, or you are invisible to it until the end of your next turn."
			},
			{
				"name": "Delusion (Psionic Talent)",
				"level": "0",
				"time": "1 Action",
				"range": "1 creature within 60 feet you can see",
				"duration": "up to 1 minute",
				"classes": "Mystic (UA)",
				"text": [
					"As an action, you plant a false belief in the mind of one creature that you can see within 60 feet of you. You can create a sound or an image. Only the target of this talent perceives the sound or image you create.",
					"If you create a sound, its volume can range from a whisper to a scream. It can be your voice, someone else's voice, a creature's roar, a musical instrument, or any other sound you pick. It lasts for 1 minute.",
					"If you create an object, it must fit within a 5- foot cube and can’t move or be reflective. The image can't create any effect that influences a sense other than sight. The image lasts for 1 minute, and it disappears if the creature touches it."
				]
			},
			{
				"name": "Energy Beam (Psionic Talent)",
				"level": "0",
				"time": "1 Action",
				"range": "1 creature within 90 feet you can see",
				"duration": "Instantaneous",
				"classes": "Mystic (UA)",
				"text": [
					"As an action, you target one creature you can see within 90 feet of you. The target must succeed on a Dexterity saving throw or take 1d8 acid, cold, fire, lightning, or thunder damage (your choice).",
					"The talent’s damage increases by 1d8 when you reach 5th level (2d8), 11th level (3d8), and 17th level (4d8)."
				],
				"roll": [
					"1d8",
					"2d8",
					"3d8",
					"4d8"
				]
			},
			{
				"name": "Light Step (Psionic Talent)",
				"level": "0",
				"time": "1 Bonus Action",
				"range": "Self",
				"duration": "1 turn",
				"classes": "Mystic (UA)",
				"text": "As a bonus action, you alter your density and weight to improve your mobility. For the rest of your turn, your walking speed increases by 10 feet, and the first time you stand up this turn, you do so without expending any of your movement if your speed is greater than 0."
			},
			{
				"name": "Mind Meld (Psionic Talent)",
				"level": "0",
				"time": "1 Bonus Action",
				"range": "1 willing creature within 120 feet you can see",
				"duration": "1 Turn",
				"classes": "Mystic (UA)",
				"text": [
					"As a bonus action, you can communicate telepathically with one willing creature you can see within 120 feet of you. The target must have an Intelligence of at least 2, otherwise this talent fails and the action is wasted.",
					"This communication can occur until the end of the current turn. You don’t need to share a language with the target for it to understand your telepathic utterances, and it understands you even if it lacks a language. You also gain access to one memory of the target’s choice, gaining perfect recall of one thing it saw or did."
				]
			},
			{
				"name": "Mind Slam (Psionic Talent)",
				"level": "0",
				"time": "1 Action",
				"range": "1 creature within 60 feet you can see",
				"duration": "Instantaneous",
				"classes": "Mystic (UA)",
				"text": [
					"As an action, you target one creature you can see within 60 feet of you. The target must succeed on a Constitution saving throw or take 1d6 force damage. If it takes any of this damage and is Large or smaller, it is knocked prone.",
					"The talent’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
				],
				"roll": [
					"1d6",
					"2d6",
					"3d6",
					"4d6"
				]
			},
			{
				"name": "Mind Thrust (Psionic Talent)",
				"level": "0",
				"time": "1 Action",
				"range": "1 creature within 120 feet you can see",
				"duration": "Instantaneous",
				"classes": "Mystic (UA)",
				"text": [
					"As an action, you target one creature you can see within 120 feet of you. The target must succeed on an Intelligence saving throw or take 1d10 psychic damage.",
					"The talent’s damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10)."
				],
				"roll": [
					"1d10",
					"2d10",
					"3d10",
					"4d10"
				]
			},
			{
				"name": "Mystic Charm (Psionic Talent)",
				"level": "0",
				"time": "1 Action",
				"range": "1 creature within 120 feet you can see",
				"duration": "Instantaneous",
				"classes": "Mystic (UA)",
				"text": "As an action, you beguile one humanoid you can see within 120 feet of you. The target must succeed on a Charisma saving throw or be charmed by you until the end of your next turn."
			},
			{
				"name": "Mystic Hand (Psionic Talent)",
				"level": "0",
				"time": "1 Action",
				"range": "1 object within 30 feet",
				"duration": "Instantaneous",
				"classes": "Mystic (UA)",
				"text": [
					"You can use your action to manipulate or move one object within 30 feet of you. The object can’t weigh more than 10 pounds, and you can’t affect an object being worn or carried by another creature. If the object is loose, you can move it up to 30 feet in any direction.",
					"This talent allows you to open an unlocked door, pour out a beer stein, and so on.",
					"The object falls to the ground at the end of your turn if you leave it suspended in midair."
				]
			},
			{
				"name": "Psychic Hammer (Psionic Talent)",
				"level": "0",
				"time": "1 Action",
				"range": "1 creature within 120 feet you can see",
				"duration": "Instantaneous",
				"classes": "Mystic (UA)",
				"text": [
					"As an action, you try to grasp one creature you can see within 120 feet of you, with a hand crafted from telekinetic energy. The target must succeed on a Strength saving throw or take 1d6 force damage. If it takes any of this damage and is Large or smaller, you can move it up to 10 feet in a straight line in a direction of your choice. You can’t lift the target off the ground unless it is already airborne or underwater.",
					"The talent’s damage increases by 1d6 when you reach 5th level (2d6), 11th level (3d6), and 17th level (4d6)."
				],
				"roll": [
					"1d6",
					"2d6",
					"3d6",
					"4d6"
				]
			},
			{
				"name": "Adaptive Body (Immortal)",
				"level": "1",
				"time": "Varies",
				"range": "Self",
				"duration": "Varies",
				"classes": "Mystic (UA)",
				"text": [
					"You can alter your body to match your surroundings, allowing you to withstand punishing environments. With greater psi energy, you can extend this protection to others.",
					"Psychic Focus:",
					"While focused on this discipline, you don’t need to eat, breathe, or sleep. To gain the benefits of a long rest, you can spend 8 hours engaged in light activity, rather than sleeping during any of it.",
					"Environmental Adaptation (2 psi):",
					"As an action, you or a creature you touch ignores the effects of extreme heat or cold (but not cold or fire damage) for the next hour.",
					"Adaptive Shield (3 psi):",
					"When you take acid, cold, fire, lightning, or thunder damage, you can use your reaction to gain resistance to damage of that type—including the triggering damage— until the end of your next turn.",
					"Energy Adaptation (5 psi Conc 1h):",
					"As an action, you can touch one creature and give it resistance to acid, cold, fire, lightning, or thunder damage (your choice), which lasts until your concentration ends.",
					"Energy Immunity (7 psi Conc 1h):",
					"As an action, you can touch one creature and give it immunity to acid, cold, fire, lightning, or thunder damage (your choice), which lasts until your concentration ends."
				]
			},
			{
				"name": "Aura Sight (Awakened)",
				"level": "1",
				"time": "Varies",
				"range": "Self",
				"duration": "Varies",
				"classes": "Mystic (UA)",
				"text": [
					"You refocus your sight to see the energy that surrounds all creatures. You perceive auras, energy signatures that can reveal key elements of a creature’s nature.",
					"Psychic Focus:",
					"While focused on this discipline, you have advantage on Wisdom (Insight) checks.",
					"Assess Foe (2 psi):",
					"As a bonus action, you analyze the aura of one creature you see. You learn its current hit point total and all its immunities, resistances, and vulnerabilities.",
					"Read Moods (2 psi):",
					"As a bonus action, you learn a one-word summary of the emotional state of up to six creatures you can see, such as happy, confused, afraid, or violent.",
					"View Aura (3 psi Conc 1h):",
					"As an action, you study one creature’s aura. Until your concentration ends, while you can see the target, you learn if it’s under the effect of any magical or psionic effects, its current hit point total, and its basic emotional state. While this effect lasts, you have advantage on Wisdom (Insight) and Charisma checks you make against it.",
					"Perceive the Unseen (5 points, Conc 1m):",
					"As a bonus action, you gain the ability to see auras even of invisible or hidden creatures. Until your concentration ends, you can see all creatures, including hidden and invisible ones, regardless of lighting conditions."
				]
			},
			{
				"name": "Bestial Form (Immortal)",
				"level": "1",
				"time": "Varies",
				"range": "Self",
				"duration": "Varies",
				"classes": "Mystic (UA)",
				"text": [
					"You transform your body, gaining traits of different beasts.",
					"Psychic Focus:",
					"While focused on this discipline, you have advantage on Wisdom (Animal Handling) checks.",
					"Bestial Claws (1–7 psi):",
					"You manifest long claws for an instant and make a melee weapon attack against one creature within 5 feet of you. On a hit, this attack deals 1d10 slashing damage per psi point spent.",
					"Bestial Transformation:",
					"As a bonus action, you alter your physical form to gain different characteristics. When you use this ability, you can choose one or more of the following effects. Each effect has its own psi point cost. Add them together to determine the total cost. This transformation lasts for 1 hour, until you die, or until you end it as a bonus action.",
					"Amphibious (2 psi):",
					"You gain gills; you can breathe air and water.",
					"Climbing (2 psi):",
					"You grow tiny hooked claws that give you gain a climbing speed equal to your walking speed.",
					"Flight (5 psi):",
					"Wings sprout from your back. You gain a flying speed equal to your walking speed.",
					"Keen Senses (2 psi):",
					"Your eyes and ears become more sensitive. You gain advantage on Wisdom (Perception) checks.",
					"Perfect Senses (3 psi):",
					"You gain a keen sense of smell and an instinct to detect prey. You can see invisible creatures and objects within 10 feet of you, even if you are blinded.",
					"Swimming (2 psi):",
					"You gain fins and webbing between your fingers and toes; you gain a swimming speed equal to your walking speed.",
					"Tough Hide (2 psi):",
					"Your skin becomes as tough as leather; you gain a +2 bonus to AC."
				],
				"roll": [
					"1d10",
					"2d10",
					"3d10",
					"4d10",
					"5d10",
					"6d10",
					"7d10"
				]
			},
			{
				"name": "Brute Force (Immortal)",
				"level": "1",
				"time": "Varies",
				"range": "Self",
				"duration": "Instantaneous",
				"classes": "Mystic (UA)",
				"text": [
					"You augment your natural strength with psionic energy, granting you the ability to achieve incredible feats of might.",
					"Psychic Focus:",
					"While focused on this discipline, you have advantage on Strength (Athletics) checks.",
					"Brute Strike (1–7 psi):",
					"As a bonus action, you gain a bonus to your next damage roll against a target you hit with a melee attack during the current turn. The bonus equals +1d6 per psi point spent, and the bonus damage is the same type as the attack. If the attack has more than one damage type, you choose which one to use for the bonus damage.",
					"Knock Back (1–7 psi):",
					"When you hit a target with a melee attack, you can activate this ability as a reaction. The target must succeed on a Strength saving throw or be knocked 10 feet away from you per psi point spent. The target moves in a straight line. If it hits an object, this movement immediately ends and the target takes 1d6 bludgeoning damage per psi point spent.",
					"Mighty Leap (1–7 psi):",
					"As part of your movement, you jump in any direction up to 20 feet per psi point spent.",
					"Feat of Strength (2 psi):",
					"As a bonus action, you gain a +5 bonus to Strength checks until the end of your next turn."
				],
				"roll": [
					"1d6",
					"2d6",
					"3d6",
					"4d6",
					"5d6",
					"6d6",
					"7d6"
				]
			},
			{
				"name": "Celerity (Immortal)",
				"level": "1",
				"time": "Varies",
				"range": "Self",
				"duration": "Instantaneous",
				"classes": "Mystic (UA)",
				"text": [
					"You channel psionic power into your body, honing your reflexes and agility to an incredible degree. The world seems to slow down while you continue to move as normal.",
					"Psychic Focus:",
					"While focused on this discipline, your walking speed increases by 10 feet.",
					"Rapid Step (1–7 psi):",
					"As a bonus action, you increase your walking speed by 10 feet per psi point spent until the end of the current turn. If you have a climbing or swimming speed, this increase applies to that speed as well.",
					"Agile Defense (2 psi):",
					"As a bonus action, you take the Dodge action.",
					"Blur of Motion (2 psi):",
					"As an action, you cause yourself to be invisible during any of your movement during the current turn.",
					"Surge of Speed (2 points):",
					"As a bonus action, you gain two benefits until the end of the current turn: you don’t provoke opportunity attacks, and you have a climbing speed equal to your walking speed.",
					"Surge of Action (5 points):",
					"As a bonus action, you can Dash or make one weapon attack."
				]
			},
			{
				"name": "Corrosive Metabolism (Immortal)",
				"level": "1",
				"time": "Varies",
				"range": "Varies",
				"duration": "Instantaneous",
				"classes": "Mystic (UA)",
				"text": [
					"Your control over your body allows you to deliver acid or poison attacks.",
					"Psychic Focus:",
					"While focused on this discipline, you have resistance to acid and poison damage.",
					"Corrosive Touch (1–7 psi):",
					"As an action, you deliver a touch of acid to one creature within your reach. The target must make a Dexterity saving throw, taking 1d10 acid damage per psi point spent on a failed save, or half as much damage on a successful one.",
					"Venom Strike (1–7 psi):",
					"As an action, you create a poison spray that targets one creature you can see within 30 feet of you. The target must make a Constitution saving throw. On a failed save, it takes 1d6 poison damage per psi point spent and is poisoned until the end of your next turn. On a successful save, the target takes half as much damage and isn’t poisoned.",
					"Acid Spray (2 psi):",
					"As a reaction when you take piercing or slashing damage, you cause acid to spray from your wound; each creature within 5 feet of you takes 2d6 acid damage.",
					"Breath of the Black Dragon (5 psi):",
					"You exhale a wave of acid in a 60-foot line that is 5 feet wide. Each creature in the line must make a Constitution saving throw, taking 6d6 acid damage on a failed save, or half as much on a successful one. You can increase the damage by 1d6 per additional psi point spent on it.",
					"Breath of the Green Dragon (7 psi):",
					"You exhale a cloud of poison in a 90-foot cone. Each creature in the line must make a Constitution saving throw, taking 10d6 poison damage on a failed save, or half as much damage on a successful one."
				],
				"roll": [
					"1d10",
					"2d10",
					"3d10",
					"4d10",
					"5d10",
					"6d10",
					"7d10",
					"1d6",
					"2d6",
					"3d6",
					"4d6",
					"5d6",
					"6d6",
					"7d6",
					"10d6"
				]
			},
			{
				"name": "Crown of Despair (Avatar)",
				"level": "1",
				"time": "1 Action",
				"range": "Varies",
				"duration": "Varies base on mode",
				"classes": "Mystic (UA)",
				"text": [
					"You have learned to harvest seeds of despair in a creature’s psyche, wracking it with self-doubt and inaction.",
					"Psychic Focus:",
					"While focused on this discipline, you have advantage on Charisma (Intimidation) checks.",
					"Crowned in Sorrow (1–7 psi):",
					"As an action, one creature you can see within 60 feet of you must make a Charisma saving throw. On a failed save, it takes 1d8 psychic damage per psi point spent, and it can’t take reactions until the start of its next turn. On a successful save, it takes half as much damage.",
					"Call to Inaction (2 psi Conc 10 min):",
					"If you spend 1 minute conversing with a creature, you can attempt to seed it with overwhelming ennui. At the end of the minute, you can use an action to force the creature to make a Wisdom saving throw. The save automatically succeeds if the target is immune to being charmed. On a failed save, it sits and is incapacitated until your concentration ends. This effect immediately ends if the target or any ally it can see is attacked or takes damage. On a successful save, the creature is unaffected and has no inkling of your attempt to bend its will.",
					"Visions of Despair (3 psi):",
					"As an action, you force one creature you can see within 60 feet of you to make a Charisma saving throw. On a failed save, it takes 3d6 psychic damage, and its speed is reduced to 0 until the end of its next turn. On a successful save, it takes half as much damage. You can increase the damage by 1d6 per additional psi point spent on it.",
					"Dolorous Mind (5 psi Conc 1m):",
					"As an action, you choose one creature you can see within 60 feet of you. It must succeed on a Charisma saving throw, or it is incapacitated and has a speed of 0 until your concentration ends. It can repeat this saving throw at the end of each of its turns, ending the effect on itself on a success."
				],
				"roll": [
					"1d8",
					"2d8",
					"3d8",
					"4d8",
					"5d8",
					"6d8",
					"7d8",
					"3d6",
					"4d6",
					"5d6",
					"6d6",
					"7d6"
				]
			},
			{
				"name": "Crown of Disgust (Avatar)",
				"level": "1",
				"time": "1 Action",
				"range": [
					"60 feet",
					"60 feet"
				],
				"duration": "Varies base on mode",
				"classes": "Mystic (UA)",
				"text": [
					"You cause a creature to be flooded with emotions of disgust.",
					"Psychic Focus:",
					"While you are focused on this discipline, the area in a 5-foot radius around you is difficult terrain for any enemy that isn’t immune to being frightened.",
					"Eye of Horror (1–7 psi):",
					"As an action, choose one creature you can see within 60 feet of you. The target must make a Charisma saving throw. On a failed save, it takes 1d6 psychic damage per psi point spent and can’t move closer to you until the end of its next turn. On a successful save, it takes half as much damage.",
					"Wall of Repulsion (3 psi Conc 10m):",
					"As an action, you create an invisible, insubstantial wall of energy within 60 feet of you that is up to 30 feet long, 10 feet high, and 1 foot thick. The wall lasts until your concentration ends. Any creature attempting to move through it must make a Wisdom saving throw. On a failed save, a creature can’t move through the wall until the start of its next turn. On a successful save, the creature can pass through it. A creature must make this save whenever it attempts to pass through the wall, whether willingly or unwillingly.",
					"Visions of Disgust (5 psi Conc 1m):",
					"You cause a creature to regard all other beings as horrid, alien entities. As an action, choose one creature you can see within 60 feet of you. The target must make a Wisdom saving throw. On a failed save, it takes 5d6 psychic damage, and until your concentration ends, it takes 1d6 psychic damage per creature within 5 feet of it at the end of each of its turns. On a successful save, the target takes only half the initial damage and suffers none of the other effects.",
					"World of Horror (7 psi Conc 1m):",
					"As an action, choose up to six creatures within 60 feet of you. Each target must make a Charisma saving throw. On a failed save, a target takes 8d6 psychic damage, and it is frightened until your concentration ends. On a successful save, a target takes half as much damage.",
					"While frightened by this effect, a target’s speed is reduced to 0, and the target can use its action, and any bonus action it might have, only to make melee attacks. The frightened target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
				],
				"roll": [
					"1d6",
					"2d6",
					"3d6",
					"4d6",
					"5d6",
					"6d6",
					"7d6",
					"8d6"
				]
			},
			{
				"name": "Crown of Rage (Avatar)",
				"level": "1",
				"time": "Varies",
				"range": [
					"1 creature you can see within 60 feet of you",
					"1 creature within 60 feet you can see"
				],
				"duration": "Varies",
				"classes": "Mystic (UA)",
				"text": [
					"You place a mote of pure fury within a creature’s mind, causing its bloodlust to overcome its senses and for it to act as you wish it to.",
					"Psychic Focus:",
					"While you are focused on this discipline, any enemy within 5 feet of you that makes a melee attack roll against creatures other than you does so with disadvantage.",
					"Primal Fury (1–7 psi):",
					"As an action, choose one creature you can see within 60 feet of you. The target must succeed on a Charisma saving throw or take 1d6 psychic damage per psi point spent on this ability and immediately use its reaction to move its speed in a straight line toward its nearest enemy. The save automatically succeeds if the target is immune to being charmed.",
					"Fighting Words (2 psi Conc 10):",
					"If you spend 1 minute conversing with a creature, you can attempt to leave a simmering violence in its mind. At the end of the minute, you can use an action to force the creature to make a Wisdom saving throw to resist feeling violent urges against one creature you describe to it or name. The save automatically succeeds if the target is immune to being charmed. On a failed save, the target attacks the chosen creature if it sees that creature before your concentration ends, using weapons or spells against a creature it was already hostile toward or unarmed strikes against an ally or a creature it was neutral toward. Once the fight starts, it continues to attack for 5 rounds before this effect ends. This effect immediately ends if the target or any ally it can see is attacked or takes damage from any creature other than the one it has been incited against. On a successful save, the creature is unaffected and has no inkling of your attempt to bend its will.",
					"Mindless Courage (2 psi):",
					"You cause a creature's bloodlust to overcome its sense of preservation. As a bonus action, choose one creature you can see within 60 feet of you. The target must succeed on a Wisdom saving throw or, until the end of your next turn, it can’t willingly move unless its movement brings it closer to its nearest enemy that it can see. The save automatically succeeds if the target is immune to being charmed.",
					"Punishing Fury (5 psi Conc 1m):",
					"You cause a creature's rage to grow so hot that it attacks without heeding its own safety. As a bonus action, choose one creature you can see within 60 feet of you. The target must succeed on a Wisdom saving throw or, until your concentration ends, any creature within 5 feet of it can use a reaction to make a melee attack against it whenever the target makes a melee attack. The save automatically succeeds if the target is immune to being charmed."
				],
				"roll": [
					"1d6",
					"2d6",
					"3d6",
					"4d6",
					"5d6",
					"6d6",
					"7d6"
				]
			},
			{
				"name": "Diminution (Immortal)",
				"level": "1",
				"time": "Varies",
				"range": "Self",
				"duration": "Varies",
				"classes": "Mystic (UA)",
				"text": [
					"You manipulate the matter that composes your body, drastically reducing your size without surrendering any of your might.",
					"Psychic Focus:",
					"While focused on this discipline, you have advantage on Dexterity (Stealth) checks.",
					"Miniature Form (2 psi Conc 10m):",
					"As a bonus action, you become Tiny until your concentration ends. While this size, you gain a +5 bonus to Dexterity (Stealth) checks and can move through gaps up to 6 inches across without squeezing.",
					"Toppling Shift (2 psi):",
					"As a bonus action, you shift to an incredibly small size and then suddenly return to normal, sending an opponent flying backward. Choose one creature you can see within 5 feet of you. It must succeed on a Strength saving throw or be knocked prone.",
					"Sudden Shift (5 psi):",
					"As a reaction when you are hit by an attack, you shift down to minute size to avoid the attack. The attack misses, and you move up to 5 feet without provoking opportunity attacks before returning to normal size.",
					"Microscopic Form (7 psi Conc 10m):",
					"As a bonus action, you become smaller than Tiny until your concentration ends. While this size, you gain a +10 bonus to Dexterity (Stealth) checks and a +5 bonus to AC, you can move through gaps up to 1 inch across without squeezing, and you can’t make weapon attacks."
				]
			},
			{
				"name": "Giant Growth (Immortal)",
				"level": "1",
				"time": "1 Bonus Action",
				"duration": "Varies",
				"classes": "Mystic (UA)",
				"range": "Self",
				"text": [
					"You infuse yourself with psionic energy to grow to tremendous size, bolstering your strength and durability.",
					"Psychic Focus:",
					"While focused on this discipline, your reach increases by 5 feet.",
					"Ogre Form (2 psi Conc 1m):",
					"As a bonus action, you gain 10 temporary hit points. In addition, until your concentration ends, your melee weapon attacks deal an extra 1d4 bludgeoning damage on a hit, and your reach increases by 5 feet. If you’re smaller than Large, you also become Large for the duration.",
					"Giant Form (7 psi Conc 1m):",
					"As a bonus action, you gain 30 temporary hit points. In addition, until your concentration ends, your melee weapon attacks deal an extra 2d6 bludgeoning damage on a hit, and your reach increases by 10 feet. If you’re smaller than Huge, you also become Huge for the duration."
				],
				"roll": "2d6"
			},
			{
				"name": "Intellect Fortress (Awakened)",
				"level": "1",
				"time": "Varies",
				"duration": "Varies",
				"classes": "Mystic (UA)",
				"range": "Self",
				"text": [
					"You forge an indomitable wall of psionic energy around your mind—one that allows you to launch counterattacks against your opponents.",
					"Psychic Focus:",
					"While focused on this discipline, you gain resistance to psychic damage.",
					"Psychic Backlash (2 psi):",
					"As a reaction, you can impose disadvantage on an attack roll against you if you can see the attacker. If the attack still hits you, the attacker takes 2d10 psychic damage.",
					"Psychic Parry (1-7 psi):",
					"As a reaction when you make an Intelligence, a Wisdom, or a Charisma saving throw, you gain a +1 bonus to that saving throw for each psi point you spend on this ability. You can use this ability after rolling the die but before suffering the results.",
					"Psychic Redoubt (5 psi Conc 10m):",
					"As an action, you create a field of protective psychic energy. Choose any number of creatures within 30 feet of you. Until your concentration ends, each target has resistance to psychic damage and advantage on Intelligence, Wisdom, and Charisma saving throws."
				],
				"roll": "2d10"
			},
			{
				"name": "Iron Durability (Immortal)",
				"level": "1",
				"time": "Varies",
				"range": [
					"Self",
					"Self"
				],
				"duration": "Varies based on mode",
				"classes": "Mystic (UA)",
				"text": [
					"You transform your body to become a living metal, allowing you to shrug off attacks that would cripple weaker creatures.",
					"Psychic Focus:",
					"While focused on this discipline, you gain a +1 bonus to AC.",
					"Iron Hide (1-7 points):",
					"As a reaction when you are hit by an attack, you gain a +1 bonus to AC for each psi point you spend on this ability. The bonus lasts until the end of your next turn. This bonus applies against the triggering attack.",
					"Steel Hide (2 psi):",
					"As a bonus action, you gain resistance to bludgeoning, piercing, and slashing damage until the end of your next turn.",
					"Iron Resistance (7 psi Conc 1h):",
					"As an action, you gain resistance to bludgeoning, piercing, or slashing damage (your choice), which lasts until your concentration ends."
				]
			},
			{
				"name": "Mantle of Awe (Awakened)",
				"level": "1",
				"time": "1 Action",
				"range": [
					"Self",
					"Varies"
				],
				"duration": "Varies",
				"classes": "Mystic (UA)",
				"text": [
					"You learn to use psionic energy to manipulate others with a subtle combination of psi and your own, natural charm.",
					"Psychic Focus:",
					"While focused on this discipline, you gain a bonus to Charisma checks. The bonus equals half your Intelligence modifier (minimum of +1).",
					"Charming Presence (1-7 points):",
					"As an action, you exert an aura of sympathetic power. Roll 2d8 per psi point spent on this ability; the total is how many hit points worth of creatures this option can affect. Creatures within 30 feet of you are affected in ascending order of their hit point maximums, ignoring incapacitated creatures, creatures immune to being charmed, and creatures engaged in combat.",
					"Starting with the creature that has the lowest hit point maximum, each creature affected by this option is charmed by you for 10 minutes, regarding you as a friendly acquaintance. Subtract each creature’s hit point maximum from the total before moving on to the next creature. A creature’s hit point maximum must be equal to or less than the remaining total for that creature to be affected.",
					"Center of Attention (2 psi Conc 1m):",
					"As an action, you exert an aura of power that grabs a creature's attention. Choose one creature you can see within 60 feet of you. It must make a Charisma saving throw. On a failed save, the creature is so thoroughly distracted by you that all other creatures are invisible to it until your concentration ends. This effect ends if the creature can no longer see or hear you or if it takes damage.",
					"Invoke Awe (7 psi Conc 10):",
					"As an action, you exert an aura that inspires awe in others. Choose up to 5 creatures you can see within 60 feet of you. Each target must succeed on an Intelligence saving throw or be charmed by you until your concentration ends. While charmed, the target obeys all your verbal commands to the best of its ability and without doing anything obviously self-destructive. The charmed target will attack only creatures that it has seen attack you since it was charmed or that it was already hostile toward. At the end of each of its turns, it can repeat the saving throw, ending the effect on itself on a success."
				],
				"roll": [
					"2d8",
					"4d8",
					"6d8",
					"8d8",
					"10d8",
					"12d8",
					"14d8"
				]
			},
			{
				"name": "Mantle of Command (Avatar)",
				"level": "1",
				"time": "Varies",
				"duration": "Varies",
				"classes": "Mystic (UA)",
				"range": "Varies",
				"text": [
					"You exert an aura of trust and authority, enhancing the coordination among your allies.",
					"Psychic Focus:",
					"While focused on this discipline, when you end your turn and didn’t move during it, you can use your reaction to allow one ally you can see within 30 feet of you to move up to half their speed, following a path of your choice. To move in this way, the ally mustn’t be incapacitated.",
					"Coordinated Movement (2 psi):",
					"As a bonus action, choose up to five allies you can see within 60 feet of you. Each of those allies can use their reaction to move up to half their speed, following a path of your choice.",
					"Commander’s Sight (2 psi Conc 1r):",
					"As an action, choose one creature you can see within 60 feet of you. Until the start of your next turn, your allies have advantage on attack rolls against that target.",
					"Command to Strike (3 psi):",
					"As an action, choose one ally you can see within 60 feet of you. That ally can use their reaction to immediately take the Attack action. You choose the targets.",
					"Strategic Mind (5 psi Conc 1m):",
					"As an action, you exert an aura of trust and command that unites your allies into a cohesive unit. Until your concentration ends, any ally within 60 feet of you on their turn can, as a bonus action, take the Dash or Disengage action or roll a d4 and add the number rolled to each attack roll they make that turn.",
					"Overwhelming Attack (7 psi):",
					"As an action, choose up to five allies you can see within 60 feet of you. Each of those allies can use their reaction to take the Attack action. You choose the targets of the attacks."
				]
			},
			{
				"name": "Mantle of Courage (Avatar)",
				"level": "1",
				"time": "Varies",
				"duration": "Varies",
				"classes": "Mystic (UA)",
				"range": "Varies",
				"text": [
					"You focus your mind on courage, radiating confidence and bravado to your allies.",
					"Psychic Focus:",
					"While focused on this discipline, you and allies within 10 feet of you who can see you have advantage on saving throws against being frightened.",
					"Incite Courage (2 psi):",
					"As a bonus action, choose up to six creatures you can see within 60 feet of you. If any of those creatures is frightened, that condition ends on that creature.",
					"Aura of Victory (1–7 psi Conc 10m):",
					"As a bonus action, you project psionic energy until your concentration ends. The energy fortifies you and your allies when your enemies are felled; whenever an enemy you can see is reduced to 0 hit points, you and each of your allies within 30 feet of you gain temporary hit points equal to double the psi points spent to activate this effect.",
					"Pillar of Confidence (6 psi Conc 1r):",
					"As an action, you and up to five creatures you can see within 60 feet of you each gain one extra action to use on your individual turns. The action goes away if not used before the end of your next turn. the action can be used only to make one weapon attack or to take the Dash or Disengage action."
				]
			},
			{
				"name": "Mantle of Fear (Avatar)",
				"level": "1",
				"time": "Varies",
				"duration": "Varies",
				"classes": "Mystic (UA)",
				"range": "Varies",
				"text": [
					"You tap into a well of primal fear and turn yourself into a beacon of terror to your enemies.",
					"Psychic Focus:",
					"While focused on this discipline, you have advantage on Charisma (Intimidation) checks.",
					"Incite Courage (2 psi):",
					"As a bonus action, choose up to six creatures you can see within 60 feet of you. If any of those creatures is frightened, that condition ends on that creature.",
					"Incite Fear (2 psi Conc 1m):",
					"As an action, choose one creature you can see within 60 feet of you. The target must succeed on a Wisdom saving throw or become frightened of you until your concentration ends. Whenever the frightened target ends its turn in a location where it can’t see you, it can repeat the saving throw, ending the effect on itself on a success.",
					"Unsettling Aura (3 psi Conc 1h):",
					"As a bonus action, you cloak yourself in unsettling psychic energy. Until your concentration ends, any enemy within 60 feet of you that can see you must spend 1 extra foot of movement for every foot it moves toward you. A creature ignores this effect if immune to being frightened.",
					"Incite Panic (5 psi Conc 1m):",
					"As an action, choose up to eight creatures you can see within 90 feet of you that can see you. At the start of each of a target’s turns before your concentration ends, the target must make a Wisdom saving throw. On a failed save, the target is frightened until the start of its next turn, and you roll a die. If you roll an odd number, the frightened target moves half its speed in a random direction and takes no action on that turn, other than to scream in terror. If you roll an even number, the frightened target makes one melee attack against a random target within its reach. If there is no such target, it moves half its speed in a random direction and takes no action on that turn. This effect ends on a target if it succeeds on three saving throws against it."
				]
			},
			{
				"name": "Mantle of Fury (Avatar)",
				"level": "1",
				"time": "Varies",
				"duration": "Varies",
				"classes": "Mystic (UA)",
				"range": "Varies",
				"text": [
					"You allow the primal fury lurking deep within your mind to burst forth, catching you and your allies in an implacable bloodthirst.",
					"Psychic Focus:",
					"While focused on this discipline in combat, you and any ally who starts their turn within 10 feet of you gains a 5-foot increase to their walking speed during that turn.",
					"Incite Fury (2 psi Conc 1m):",
					"As a bonus action, choose up to six creatures you can see within 60 feet of you. If any of those creatures is frightened, that condition ends on that creature.",
					"Incite Fear (2 psi Conc 1m):",
					"As a bonus action, choose up to three allies you can see within 60 feet of you (you can choose yourself in place of one of the allies). Until your concentration ends, each target can roll a d4 when rolling damage for a melee weapon attack and add the number rolled to the damage roll.",
					"Mindless Charge (2 psi):",
					"As a bonus action, choose up to three creatures you can see within 60 feet of you. Each target can immediately use its reaction to move up to its speed in a straight line toward its nearest enemy.",
					"Aura of Bloodletting (3 psi Conc 1m):",
					"As a bonus action, you unleash an aura of rage. Until your concentration ends, you and any creature within 60 feet of you has advantage on melee attack rolls.",
					"Overwhelming Fury (5 psi Conc 1m):",
					"As an action, you flood rage into one creature you can see within 60 feet of you. The target must succeed on a Charisma saving throw, or it can use its actions only to make melee attacks until your concentration ends. It can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
				]
			},
			{
				"name": "Mantle of Joy (Avatar)",
				"level": "1",
				"time": "1 Bonus Action",
				"duration": "Varies",
				"classes": "Mystic (UA)",
				"range": "Varies",
				"text": [
					"You tap into the joy within you, radiating it outward in soothing, psychic energy that brings hope and comfort to creatures around you.",
					"Psychic Focus:",
					"While focused on this discipline, you have advantage on Charisma (Persuasion) checks.",
					"Soothing Presence (1–7 psi):",
					"As a bonus action, choose up to three creatures you can see within 60 feet of you. Each target gains 3 temporary hit points per psi point spent on this effect.",
					"Comforting Aura (2 psi Conc 1m):",
					"As a bonus action, choose up to three allies you can see (you can choose yourself in place of one of the allies). Until your concentration ends, each target can roll a d4 when making a saving throw and add the number rolled to the total.",
					"Aura of Jubilation (3 psi Conc 1m):",
					"As a bonus action, you radiate a distracting mirth until your concentration ends. Each creature within 60 feet of you that can see you suffers disadvantage on any checks using the Perception and Investigation skills.",
					"Aura of Bloodletting (3 psi Conc 1m):",
					"As a bonus action, you unleash an aura of rage. Until your concentration ends, you and any creature within 60 feet of you has advantage on melee attack rolls.",
					"Beacon of Recovery (5 psi):",
					"As a bonus action, you and up to five allies you can see within 60 feet of you can immediately make saving throws against every effect they’re suffering that allows a save at the start or end of their turns."
				]
			},
			{
				"name": "Mastery of Air (Wu Jen)",
				"level": "1",
				"time": "Varies",
				"duration": "Varies",
				"classes": "Mystic (UA)",
				"range": "Self",
				"text": [
					"You become one with the power of elemental air.",
					"Psychic Focus:",
					"While focused on this discipline, you take no falling damage, and you ignore difficult terrain when walking.",
					"Wind Step (1–7 psi):",
					"As part of your move on your turn, you can fly up to 20 feet for each psi point spent. If you end this flight in the air, you fall unless something else holds you aloft.",
					"Wind Stream (1–7 psi):",
					"As an action, you create a line of focused air that is 30 feet long and 5 feet wide. Each creature in that area must make a Strength saving throw, taking 1d8 bludgeoning damage per psi point spent and being knocked prone on a failed save, or half as much damage on a successful one.",
					"Cloak of Air (3 psi Conc 10m):",
					"As a bonus action, you seize control of the air around you to create a protective veil. Until your concentration ends, attack rolls against you have disadvantage, and when a creature you can see misses you with a melee attack, you can use your reaction to force the creature to repeat the attack roll against itself.",
					"Wind Form (5 psi Conc 10m):",
					"As a bonus action, you gain a flying speed of 60 feet, which lasts until your concentration ends.",
					"Misty Form(6 psi Conc 1m):",
					"As an action, your body becomes like a misty cloud until your concentration ends. In this form, you gain resistance to bludgeoning, piercing, and slashing damage, and you can’t take actions other than the Dash action. You can pass through openings that are no more than 1 inch wide without squeezing.",
					"Animate Air (7 psi Conc 1h):",
					"As an action, you cause an air elemental to appear in an unoccupied space you can see within 120 feet of you. The elemental lasts until your concentration ends, and it obeys your verbal commands. In combat, roll for its initiative, and choose its behavior during its turns. When this effect ends, the elemental disappears. See the Monster Manual for its stat block."
				]
			},
			{
				"name": "Mastery of Fire (Wu Jen)",
				"level": "1",
				"time": "Varies",
				"duration": "Varies",
				"classes": "Mystic (UA)",
				"range": "Self",
				"text": [
					"You align your mind with the energy of elemental fire.",
					"Psychic Focus:",
					"While focused on this discipline, you gain resistance to fire damage, and you gain a +2 bonus to rolls for fire damage.",
					"Combustion (1–7 psi Conc 1m):",
					"As an action, choose one creature or object you can see within 120 feet of you. The target must make a Constitution save. On a failed save, the target takes 1d10 fire damage per psi point spent, and it catches on fire, taking 1d6 fire damage at the end of each of its turns until your concentration ends or until it or a creature adjacent to it extinguishes the flames with an action. On a successful save, the target takes half as much damage and doesn’t catch on fire.",
					"Rolling Flame (3 psi Conc 1m):",
					"As an action, you create fire in a 20-foot-by-20-foot cube within 5 feet of you. The fire lasts until your concentration ends. Any creature in that area when you use this ability and any creature that ends its turn there takes 5 fire damage.",
					"Detonation (5 psi):",
					"As an action, you create a fiery explosion at a point you can see within 120 feet of you. Each creature in a 20-foot-radius sphere centered on that point must make a Constitution saving throw, taking 7d6 fire damage and being knocked prone on a failed save, or half as much damage on a successful one.",
					"Fire Form (5 psi Conc 1m):",
					"As a bonus action, you become wreathed in flames until your concentration ends. Any creature that end its turn within 5 feet of you takes 3d6 fire damage.",
					"Animate Fire (7 psi Conc 1h):",
					"As an action, you cause a fire elemental to appear in an unoccupied space you can see within 120 feet of you. The elemental lasts until your concentration ends, and it obeys your verbal commands. In combat, roll for its initiative, and choose its behavior during its turns. When this effect ends, the elemental disappears. See the Monster Manual for its stat block."
				],
				"roll": [
					"1d10",
					"2d10",
					"3d10",
					"4d10",
					"5d10",
					"6d10",
					"7d10",
					"1d6",
					"7d6",
					"3d6"
				]
			},
			{
				"name": "Mastery of Force (Wu Jen)",
				"level": "1",
				"time": "1 Action",
				"duration": "Varies",
				"classes": "Mystic (UA)",
				"range": "Varies",
				"text": [
					"As a student of psionic power, you perceive the potential energy that flows through all things. You reach out with your mind, transforming the potential into the actual. Objects and creatures move at your command.",
					"Psychic Focus:",
					"While focused on this discipline, you have advantage on Strength checks.",
					"Push (1–7 psi):",
					"As an action, choose one creature you can see within 60 feet of you. The target must make a Strength saving throw. On a failed save, it takes 1d8 force damage per psi point spent and is pushed up to 5 feet per point spent in a straight line away from you. On a successful save, it takes half as much damage.",
					"Move (2–7 psi):",
					"Choose one object you can see within 60 feet of you that isn’t being worn or carried by another creature and that isn’t secured in place. It can’t be larger than 20 feet on a side, and its maximum weight depends on the psi points spent on this ability, as shown below.",
					"As an action, you move the object up to 60 feet, and you must keep the object within sight during this movement. If the object ends this movement in the air, it falls. If the object would fall on a creature, the creature must succeed on a DC 10 Dexterity saving throw or take damage as listed on the table below.",
					"Psi Spent - Maximum Weight - Bludgeoning Dmg ",
					"2 - 25 lbs. - 2d4 ",
					"3 - 50 lbs. - 4d6 ",
					"4 - 250 lbs. - 6d6 ",
					"5 - 500 lbs. - 7d6 ",
					"6 - 1000 lbs. - 8d6 ",
					"Inertial Armor (2 psi):",
					"As an action, you sheathe yourself in an intangible field of magical force. For 8 hours, your base AC is 14 + your Dexterity modifier, and you gain resistance to force damage. This effect ends if you are wearing or don armor.",
					"Telekinetic Barrier (3 psi Conc 10m):",
					"As an action, you create a transparent wall of telekinetic energy, at least one portion of which must be within 60 feet of you. The wall is 40 feet long, 10 feet high, and 1 inch thick. The wall lasts until your concentration ends. Each 10-foot section of the wall has an AC of 10 and 10 hit points.",
					"Grasp (3 psi Conc 1m):",
					"You attempt to grasp a creature in telekinetic energy and hold it captive. As an action, choose one creature you can see within 60 feet of you. The target must succeed on a Strength saving throw or be grappled by you until your concentration ends or until the target leaves your reach, which is 60 feet for this grapple.",
					"The grappled target can escape by succeeding on a Strength (Athletics) or Dexterity (Acrobatics) check contested by your psionic ability plus your proficiency bonus. When a target attempts to escape in this way, you can spend psi points to boost your check, abiding by your psi limit. You gain a +1 bonus per psi point spent.",
					"While a target is grappled in this manner, you create one of the following effects as an action:",
					"Crush (1–7 psi):",
					"The target takes 1d6 bludgeoning damage per psi point spent.",
					"Move (1–7 psi):",
					"You move the target up to 5 feet per psi point spent. You can move it in the air and hold it there. It falls if the grapple ends."
				],
				"roll": [
					"1d8",
					"2d8",
					"3d8",
					"4d8",
					"5d8",
					"6d8",
					"7d8",
					"2d4",
					"1d6",
					"2d6",
					"3d6",
					"4d6",
					"5d6",
					"6d6",
					"7d6",
					"8d6"
				]
			},
			{
				"name": "Mastery of Ice (Wu Jen)",
				"level": "1",
				"time": "Varies",
				"duration": "Varies",
				"classes": "Mystic (UA)",
				"range": "Self",
				"text": [
					"You master the power of ice, shaping it to meet you demands.",
					"Psychic Focus:",
					"While focused on this discipline, you have resistance to cold damage.",
					"Ice Spike (1–7 psi):",
					"As an action, you hurl a mote of ice at one creature you can see within 120 feet of you. The target must make a Dexterity saving throw. On a failed save, the target takes 1d8 cold damage per psi point spent and has its speed halved until the start of your next turn. On a successful save, the target takes half as much damage.",
					"Ice Sheet (2 psi):",
					"As an action, choose a point on the ground you can see within 60 feet of you. The ground in a 20-foot radius centered on that point becomes covered in ice for 10 minutes. It is difficult terrain, and any creature that moves more than 10 feet on it must succeed on a Dexterity saving throw or fall prone. If the surface is sloped, a creature that falls prone in the area immediately slides to the bottom of the slope.",
					"Frozen Sanctuary (3 psi):",
					"As a bonus action, you sheathe yourself with icy resilience. You gain 20 temporary hit points.",
					"Frozen Rain (5 psi Conc 1m):",
					"As an action, choose a point you can see within 120 feet of you. The air in a 20-foot-radius sphere centered on that point becomes deathly cold and saturated with moisture. Each creature in that area must make a Constitution saving throw. On a failed save, a target takes 6d6 cold damage, and its speed is reduced to 0 until your concentration ends. On a successful save, a target takes half as much damage.",
					"As an action, a target that has its speed reduced can end the effect early if it succeeds on a Strength (Athletics) check with a DC equal to this effect’s save DC.",
					"You can increase this effect’s damage by 1d6 per each additional psi point spent on it.",
					"Ice Barrier (6 psi Conc 10m):",
					"As an action, you create a wall of ice, at least one portion of which must be within 60 feet of you. The wall is 60 feet long, 15 feet high, and 1 foot thick. The wall lasts until your concentration ends. Each 10-foot section of the wall has AC 12 and 30 hit points. A creature that damages the wall with a melee attack takes cold damage equal to the damage the creature dealt to the wall."
				],
				"roll": [
					"1d8",
					"2d8",
					"3d8",
					"4d8",
					"5d8",
					"6d8",
					"7d8",
					"6d6",
					"7d6",
					"8d6"
				]
			},
			{
				"name": "Mastery of Light and Darkness (Wu Jen)",
				"level": "1",
				"time": "1 Action",
				"duration": "Varies",
				"classes": "Mystic (UA)",
				"range": "Varies",
				"text": [
					"You claim dominion over light and darkness with your mind.",
					"Psychic Focus:",
					"While focused on this discipline, natural and magical darkness within 30 feet of you has no effect on your vision.",
					"Ice Spike (1–7 psi):",
					"As an action, you hurl a mote of ice at one creature you can see within 120 feet of you. The target must make a Dexterity saving throw. On a failed save, the target takes 1d8 cold damage per psi point spent and has its speed halved until the start of your next turn. On a successful save, the target takes half as much damage.",
					"Darkness (1–7 psi):",
					"As an action, you create an area of magical darkness, which foils darkvision. Choose a spot you can see within 60 feet of you. Magical darkness radiates from that point in a sphere with a 10-foot radius per psi point spent on this ability. The light produced by spells of 2nd level or less is suppressed in this area.",
					"Light (2 psi Conc 1m):",
					"As an action, an object you touch radiates light in a 20-foot radius and dim light for an additional 20 feet. The light lasts until your concentration ends. Alternatively, a creature you touch radiates light in the same manner if it fails a Dexterity saving throw. While lit in this manner, it can’t hide, and attack rolls against it gain advantage.",
					"Shadow Beasts (3 psi Conc 1m):",
					"As an action, you cause two shadows to appear in unoccupied spaces you can see within 60 feet of you. The shadows last until your concentration ends, and they obey your verbal commands. In combat, roll for their initiative, and choose their behavior during their turns. When this effect ends, the shadows disappear. See the Monster Manual for their stat block.",
					"As an action, a target that has its speed reduced can end the effect early if it succeeds on a Strength (Athletics) check with a DC equal to this effect’s save DC.",
					"You can increase this effect’s damage by 1d6 per each additional psi point spent on it.",
					"Radiant Beam (5 psi Conc 1m):",
					"As an action, you project a beam of light at one creature you can see within 60 feet of you. The target must make a Dexterity saving throw. On a failed save, it takes 6d6 radiant damage and is blinded until your concentration ends. On a successful save, it takes half as much damage. A blinded target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success.",
					"You can increase this effect’s damage by 1d6 per each additional psi point spent on it."
				],
				"roll": [
					"1d8",
					"2d8",
					"3d8",
					"4d8",
					"5d8",
					"6d8",
					"7d8"
				]
			},
			{
				"name": "Mastery of Water (Wu Jen)",
				"level": "1",
				"time": "1 Action",
				"duration": "Varies",
				"classes": "Mystic (UA)",
				"range": "Varies",
				"text": [
					"Your mind becomes one with elemental water, attuning your thoughts to its ebb and flow.",
					"Psychic Focus:",
					"While focused on this discipline, you have a swimming speed equal to your walking speed, and you can breathe underwater.",
					"Desiccate (1–7 psi):",
					"As an action, choose one creature you can see within 60 feet of you. The target must make a Constitution saving throw, taking 1d10 necrotic damage per psi point spent on this ability, or half as much damage on a successful one.",
					"Watery Grasp (2 psi):",
					"As an action, you unleash a wave that surges forth and then retreats to you like the rising tide. You create a wave in a 20-foot-by-20-foot square. At least some portion of the square’s border must be within 5 feet of you. Any creature in that square must make a Strength saving throw. On a failed save, a target takes 2d6 bludgeoning damage, is knocked prone, and is pulled up to 10 feet closer to you. On a successful save, a target takes half as much damage. You can increase this ability’s damage by 1d6 per additional psi point spent on it.",
					"Water Whip (3 psi):",
					"As an action, you unleash a jet of water in a line that is 60 feet long and 5 feet wide. Each creature in the line must make a Strength saving throw, taking 3d6 bludgeoning damage on a failed save, or half as much damage on a successful one. In addition, you can move each target that fails its saving throw to any unoccupied space touching the line. You can increase this ability’s damage by 1d6 per additional psi point spent on it.",
					"Water Breathing (5 psi):",
					"As an action, you grant yourself and up to ten willing creatures you can see within 60 feet of you the ability to breathe underwater for the next 24 hours.",
					"Water Sphere (6 psi; Conc, 1m):",
					"As an action, you cause a sphere of water to form around a creature. Choose one creature you can see within 60 feet of you. The target must make a Dexterity saving throw. On a failed save, it becomes trapped in the sphere of water until your concentration ends. While the target is trapped, its speed is halved, it suffers disadvantage on attack rolls, and it can’t see anything more than 10 feet away from it. However, attack rolls against it also suffer disadvantage. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a successful one.",
					"Animate Water (7 psi; Conc, 1h):",
					"As an action, you cause a water elemental to appear in an unoccupied space you can see within 120 feet of you. The elemental lasts until your concentration ends, and it obeys your verbal commands. In combat, roll for its initiative, and choose its behavior during its turns. When this effect ends, the elemental disappears. See the Monster Manual for its stat block."
				],
				"roll": [
					"1d10",
					"2d10",
					"3d10",
					"4d10",
					"5d10",
					"6d10",
					"7d10",
					"2d6",
					"3d6",
					"4d6",
					"5d6",
					"6d6",
					"7d6"
				]
			},
			{
				"name": "Mastery of Weather (Wu Jen)",
				"level": "1",
				"time": "1 Action",
				"duration": "Varies",
				"classes": "Mystic (UA)",
				"range": "Varies",
				"text": [
					"Your mind reaches into the sky, reshaping the stuff of storms to serve your needs.",
					"Psychic Focus:",
					"While focused on this discipline, you have resistance to lightning and thunder damage.",
					"Cloud Steps (1–7 psi Conc 10m):",
					"As an action, you conjure forth clouds to create a solid, translucent staircase that lasts until your concentration ends. The stairs form a spiral that fills a 10-foot-by-10-foot area and reaches upward 20 feet per psi point spent.",
					"Hungry Lightning (1–7 psi):",
					"As an action, you lash out at one creature you can see within 60 feet of you with tendrils of lightning. The target must make a Dexterity saving throw, with disadvantage if it’s wearing heavy armor. The target takes 1d8 lightning damage per psi point spent on a failed save, or half as much damage on a successful one.",
					"Wall of Clouds (2 psi Conc 10m):",
					"As an action, you create a wall of clouds, at least one portion of which must be within 60 feet of you. The wall is 60 feet long, 15 feet high, and 1 foot thick. The wall lasts until your concentration ends. Creatures can pass through it without hindrance, but the wall blocks vision.",
					"Whirlwind (2 psi):",
					"As an action, choose a point you can see within 60 feet of you. Winds howl in a 20-foot-radius sphere centered on that point. Each creature in the sphere must succeed on a Strength saving throw or take 1d6 bludgeoning damage and be moved to an unoccupied space of your choice in the sphere. Any loose object in the sphere is moved to an unoccupied space of your choice within it if the object weighs no more than 100 pounds.",
					"Wall of Thunder (6 psi Conc 10m):",
					"As an action, you create a wall of thunder, at least one portion of which must be within 60 feet of you. The wall is 60 feet long, 15 feet high, and 1 foot thick. The wall lasts until your concentration ends. Every foot moved through the wall costs 1 extra foot of movement. When a creature moves into the wall’s space for the first time on a turn or starts its turn there, that creature must succeed on a Strength saving throw, or it takes 6d6 thunder damage, is pushed in a straight line up to 30 feet away from the wall, and is knocked prone.",
					"Thunder Clap (7 psi):",
					"As an action, choose a point you can see within 60 feet of you. Thunder energy erupts in a 20-foot-radius sphere centered on that point. Each creature in that area must make Constitution saving throw. On a failed save, a target takes 8d6 thunder damage, and it is stunned until the end of your next turn. On a successful save, a target takes half as much damage."
				],
				"roll": [
					"1d8",
					"2d8",
					"3d8",
					"4d8",
					"5d8",
					"6d8",
					"7d8",
					"1d6",
					"6d6",
					"8d6"
				]
			},
			{
				"name": "Mastery of Wood and Earth (Wu Jen)",
				"level": "1",
				"time": "Varies",
				"duration": "Varies",
				"classes": "Mystic (UA)",
				"range": "Varies",
				"text": [
					"You attune your mind to seize control of wood and earth.",
					"Psychic Focus:",
					"While focused on this discipline, you have a +1 bonus to AC.",
					"Animate Weapon (1–7 psi):",
					"As an action, your mind seizes control of a one-handed melee weapon you’re holding. The weapon flies toward one creature you can see within 30 feet of you and makes a one-handed melee weapon attack against it, using your discipline attack modifier for the attack and damage rolls. On a hit, the weapon deals its normal damage, plus an extra 1d10 force damage per psi point spent on this ability. The weapon returns to your grasp after it attacks.",
					"Warp Weapon (2 psi):",
					"As an action, choose one nonmagical weapon held by one creature you can see within 60 feet of you. That creature must succeed on a Strength saving throw, or the chosen weapon can’t be used to attack until the end of your next turn.",
					"Warp Armor (3 psi):",
					"As an action, choose a nonmagical suit of armor worn by one creature you can see within 60 feet of you. That creature must succeed on a Constitution saving throw, or the creature’s AC becomes 10 + its Dexterity modifier until the end of your next turn.",
					"Wall of Wood (3 psi Conc 1h):",
					"As an action, you create a wall of wood at least one portion of which must be within 60 feet of you. The wall is 60 feet long, 15 feet high, and 1 foot thick. The wall lasts until your concentration ends. Each 5-foot wide section of the wall has AC 12 and 100 hit points. Breaking one section creates a 5-foot by 5-foot hole in it, but the wall otherwise remains intact.",
					"Armored Form (6 psi Conc 1m):",
					"As a bonus action, you gain resistance to bludgeoning, piercing, and slashing damage, which lasts until your concentration ends.",
					"Animate Earth (7 psi Conc 1h):",
					"As an action, you cause an earth elemental to appear in an unoccupied space you can see within 120 feet of you. The elemental lasts until your concentration ends, and it obeys your verbal commands. In combat, roll for its initiative, and choose its behavior during its turns. When this effect ends, the elemental disappears. See the Monster Manual for its stat block."
				],
				"roll": [
					"1d10",
					"2d10",
					"3d10",
					"4d10",
					"5d10",
					"6d10",
					"7d10"
				]
			},
			{
				"name": "Nomadic Arrow (Nomad)",
				"level": "1",
				"time": "Varies",
				"duration": "Varies",
				"classes": "Mystic (UA)",
				"range": "Self",
				"text": [
					"You imbue a ranged weapon with a strange semblance of sentience, allowing it to unerringly find its mark.",
					"Psychic Focus:",
					"While you are focused on this discipline, any attack roll you make for a ranged weapon attack ignores disadvantage. If disadvantage would normally apply to the roll, that roll also can’t benefit from advantage.",
					"Speed Dart (1–7 psi):",
					"As a bonus action, you imbue one ranged weapon you hold with psionic power. The next attack you make with it that hits before the end of the current turn deals an extra 1d10 psychic damage per psi point spent.",
					"Seeking Missile (2 psi):",
					"As a reaction when you miss with a ranged weapon attack, you can repeat the attack roll against the same target.",
					"Faithful Archer (5 psi Conc 1m):",
					"As a bonus action, you imbue a ranged weapon with a limited sentience. Until your concentration ends, you can make an extra attack with the weapon at the start of each of your turns (no action required). If it is a thrown weapon, it returns to your grasp each time you make any attack with it."
				],
				"roll": [
					"1d10",
					"2d10",
					"3d10",
					"4d10",
					"5d10",
					"6d10",
					"7d10"
				]
			},
			{
				"name": "Nomadic Chameleon (Nomad)",
				"level": "1",
				"time": "Varies",
				"duration": "Varies",
				"classes": "Mystic (UA)",
				"range": "Self",
				"text": [
					"You create a screen of psychic power that distorts your appearance, allowing you to blend into the background or even turn invisible.",
					"Psychic Focus:",
					"While focused on this discipline, you have advantage on Dexterity (Stealth) checks.",
					"Chameleon (2 psi):",
					"As an action, you can attempt to hide even if you fail to meet the requirements needed to do so. At the end of the current turn, you remain hidden only if you then meet the normal requirements for hiding.",
					"Step from Sight (3 psi Conc 1m):",
					"As a bonus action, cloak yourself from sight. You can target one additional creature for every additional psi point you spend on this ability. The added targets must be visible to you and within 60 feet of you.",
					"Each target turns invisible and remains so until your concentration ends or until immediately after it targets, damages, or otherwise affects any creature with an attack, a spell, or another ability.",
					"Enduring Invisibility (7 psi Conc 1m):",
					"As a bonus action, you turn invisible and remain so until your concentration ends."
				]
			},
			{
				"name": "Nomadic Mind (Nomad)",
				"level": "1",
				"time": "Varies",
				"duration": "Varies",
				"classes": "Mystic (UA)",
				"range": "Self",
				"text": [
					"You dispatch part of your psyche into the noosphere, the collective vista of minds and knowledge possessed by living things.",
					"Psychic Focus:",
					"Whenever you focus on this discipline, you choose one skill or tool and have proficiency with it until your focus ends. Alternatively, you gain the ability to read and write one language of your choice until your focus ends.",
					"Wandering Mind (2–6 psi Conc 10m):",
					"You enter a deep contemplation. If you concentrate for this option’s full duration, you then gain proficiency with up to three of the following skills (one skill for every 2 psi points spent): Animal Handling, Arcana, History, Medicine, Nature, Performance, Religion, and Survival. The benefit lasts for 1 hour, no concentration required.",
					"Find Creature (2 psi Conc 1h):",
					"You cast your mind about for information about a specific creature. If you concentrate for this option’s full duration, you then gain a general understanding of the creature’s current location. You learn the region, city, town, village, or district where it is, pinpointing an area between 1 and 3 miles on a side (DM’s choice). If the creature is on another plane of existence, you instead learn which plane.",
					"Item Lore (3 psi Conc 1h):",
					"You carefully study an item. If you concentrate for this option’s full duration while remaining within 5 feet of the item, you then gain the benefits of an identify spell cast on that item.",
					"Psychic Speech (5 psi):",
					"As an action, you attune your mind to the psychic imprint of all language. For 1 hour, you gain the ability to understand any language you hear or attempt to read. In addition, when you speak, all creatures that can understand a language understand what you say, regardless of what language you use.",
					"Wandering Eye (6 psi Conc 1h):",
					"As an action, you create a psychic sensor within 60 feet of you. The sensor lasts until your concentration ends. The sensor is invisible and hovers in the air. You mentally receive visual information from it, which has normal vision and darkvision with a range of 60 feet. The sensor can look in all directions. As an action, you can move the sensor up to 30 feet in any direction. There is no limit to how far away from you the eye can move, but it can’t enter another plane of existence. A solid barrier blocks the eye’s movement, but the eye can pass through an opening as small as 1 inch in diameter.",
					"Phasing Eye (7 psi Conc 1h):",
					"Wandering Eye above, except the eye can move through solid objects but can’t end its movement in one. If it does so, the effect immediately ends."
				]
			},
			{
				"name": "Nomadic Step (Nomad)",
				"level": "1",
				"time": "Varies",
				"duration": "Varies",
				"classes": "Mystic (UA)",
				"range": "Varies",
				"text": [
					"You exert your mind on the area around you, twisting the intraplanar pathways you perceive to allow instantaneous travel.",
					"Psychic Focus:",
					"After you teleport on your turn while focused on this discipline, your walking speed increases by 10 feet until the end of the turn, as you are propelled by the magic of your teleportation. You can receive this increase only once per turn.",
					"Step of a Dozen Paces (1–7 psi):",
					"If you haven’t moved yet on your turn, you take a bonus action to teleport up to 20 feet per psi point spent to an unoccupied space you can see, and your speed is reduced to 0 until the end of the turn.",
					"Nomadic Anchor (1 psi):",
					"As an action, you create an invisible, intangible teleportation anchor in a 5-foot cube you can see within 120 feet of you. For the next 8 hours, whenever you use this psionic discipline to teleport, you can instead teleport to the anchor, even if you can’t see it, but it must be within range of the teleportation ability.",
					"Defensive Step (2 psi):",
					"When you are hit by an attack, you can use your reaction to gain a +4 bonus to AC against that attack, possibly turning it into a miss. You then teleport up to 10 feet to an unoccupied space you can see.",
					"There and Back Again (2 psi):",
					"As a bonus action, you teleport up to 20 feet to an unoccupied space you can see and then move up to half your speed. At the end of your turn, you can teleport back to the spot you occupied before teleporting, unless it is now occupied or on a different plane of existence.",
					"Transposition (3 psi):",
					"If you haven’t moved yet on your turn, choose an ally you can see within 60 feet of you. As a bonus action, you and that creature teleport, swapping places, and your speed is reduced to 0 until the end of the turn. This ability fails and is wasted if either of you can’t fit in the destination space.",
					"Baleful Transposition (5 psi):",
					"As an action, choose one creature you can see within 120 feet of you. That creature must make a Wisdom saving throw. On a failed save, you and that creature teleport, swapping places. This ability fails and is wasted if either of you can’t fit in the destination space.",
					"Phantom Caravan (6 psi):",
					"As an action, you and up to six willing creatures of your choice that you can see within 60 feet of you teleport up to 1 mile to a spot you can see. If there isn’t an open space for all the targets to occupy at the arrival point, this ability fails and is wasted.",
					"Nomad’s Gate (7 psi Conc 1h):",
					"As an action, you create a 5-foot cube of dim, gray light within 5 feet of you. You create an identical cube at any point of your choice within 1 mile that you have viewed within the past 24 hours. Until your concentration ends, anyone entering one of the cubes immediately teleports to the other one, appearing in an unoccupied space next to it. The teleportation fails if there is no space for the creature to appear in."
				]
			},
			{
				"name": "Precognition (Awakened)",
				"level": "1",
				"time": "Varies",
				"duration": "Varies",
				"classes": "Mystic (UA)",
				"range": "Varies",
				"text": [
					"By analyzing information around you, from subtle hints to seemingly disconnected facts, you learn to weave a string of probabilities in an instant that gives you extraordinary insights.",
					"Psychic Focus:",
					"While focused on this discipline, you have advantage on initiative rolls.",
					"Precognitive Hunch (2 psi Conc 1m):",
					"As a bonus action, you open yourself to receive momentary insights that improve your odds of success; until your concentration ends, whenever you make an attack roll, a saving throw, or an ability check, you roll a d4 and add it to the total.",
					"Danger Sense (5 psi Conc 8h):",
					"As an action, you create a psychic model of reality in your mind and set it to show you a few seconds into the future. Until your concentration ends, you can’t be surprised, attack rolls against you can’t gain advantage, and you gain a +10 bonus to initiative.",
					"Victory Before Battle (7 psi):",
					"When you roll initiative, you can use this ability to grant yourself and up to five creatures of your choice within 60 feet of you a +10 bonus to initiative."
				]
			},
			{
				"name": "Psionic Restoration (Awakened)",
				"level": "1",
				"time": "1 Action",
				"duration": "Instantaneous",
				"classes": "Mystic (UA)",
				"range": "Varies",
				"text": [
					"You wield psionic energy to cure wounds and restore health to yourself and others.",
					"Psychic Focus:",
					"While focused on this discipline, you can use a bonus action to touch a living creature that has 0 hit points and automatically stabilize it.",
					"Mend Wounds (1-7 psi):",
					"As an action, you can spend psi points to restore hit points to one creature you touch. The creature regains 1d8 hit points per psi point spent.",
					"Restore Health (3 psi):",
					"As an action, you touch one creature and remove one of the following conditions from it: blinded, deafened, paralyzed, or poisoned. Alternatively, you remove one disease from the creature.",
					"Restore Life (5 psi):",
					"As an action, you touch one creature that has died within the last minute. The creature returns to life with 1 hit point. This ability can’t return to life a creature that has died of old age, nor can it restore a creature missing any vital body parts.",
					"Restore Vigor (7 psi):",
					"As an action, you can touch one creature and choose one of the following: remove any reductions to one of its ability scores, remove one effect that reduces its hit point maximum, or reduce its exhaustion level by one."
				],
				"roll": [
					"1d8",
					"2d8",
					"3d8",
					"4d8",
					"5d8",
					"6d8",
					"7d8"
				]
			},
			{
				"name": "Psionic Weapon (Immortal)",
				"level": "1",
				"time": "1 Bonus Action",
				"duration": "Varies",
				"range": "Self",
				"classes": "Mystic (UA)",
				"text": [
					"You have learned how to channel psionic energy into your attacks, lending them devastating power.",
					"Psychic Focus:",
					"Whenever you focus on this discipline, choose one weapon you’re holding or your unarmed strike. When you attack with it while focused on this discipline, its damage is psychic and magical, rather than its normal damage type. Until you reach 6th level as a mystic, you don’t add your Strength or Dexterity modifier to the psychic attack’s damage rolls.",
					"Ethereal Weapon (1 psi):",
					"As a bonus action, you temporarily transform one weapon you’re holding or your unarmed strike into pure psionic energy. The next attack you make with it before the end of your turn ignores the target’s armor, requiring no attack roll. Instead, the target makes a Dexterity saving throw against this discipline. On a failed save, the target takes the attack’s normal damage and suffers its additional effects. On a successful save, the target takes half damage from the attack but suffers no additional effects that would normally be imposed on a hit.",
					"Lethal Strike (1-7 psi):",
					"As a bonus action, you imbue a weapon you’re holding or your unarmed strike with psychic energy. The next time you hit with it before the end of your turn, it deals an extra 1d10 psychic damage per psi point spent.",
					"Augmented Weapon (5 psi Conc 10m):",
					"As a bonus action, touch one simple or martial weapon. Until your concentration ends, that weapon becomes a magic weapon with a +3 bonus to its attack and damage rolls."
				],
				"roll": [
					"1d10",
					"2d10",
					"3d10",
					"4d10",
					"5d10",
					"6d10",
					"7d10"
				]
			},
			{
				"name": "Psychic Assault (Awakened)",
				"level": "1",
				"time": "1 Action",
				"duration": "Instantaneous",
				"range": "Self",
				"classes": "Mystic (UA)",
				"text": [
					"You wield your mind like a weapon, unleashing salvos of psionic energy.",
					"Psychic Focus:",
					"While focused on this discipline, you gain a +2 bonus to damage rolls with psionic talents that deal psychic damage.",
					"Psionic Blast (1–7 psi):",
					"As an action, choose one creature you can see within 60 feet of you. The target takes 1d8 psychic damage per psi point spent on this ability.",
					"Ego Whip (3 psi):",
					"As an action, choose one creature you can see within 60 feet of you. The target must make an Intelligence saving throw. On a failed save, the creature takes 3d8 psychic damage, and it is filled with self-doubt, leaving it able to use its action on its next turn only to take the Dodge, Disengage, or Hide action. On a successful saving throw, it takes half as much damage.",
					"Id Insinuation (5 psi):",
					"As an action, choose one creature you can see within 60 feet of you. The target must make an Intelligence saving throw. On a failed save, the creature takes 5d8 psychic damage, and it goes into a fury, as its id runs rampant. On its next turn, it can use its action only to take the Dodge or Attack action. On a successful save, it takes half as much damage.",
					"Psychic Blast (6 psi):",
					"As an action, you unleash devastating psychic energy in a 60-foot cone. Each creature in that area must make an Intelligence saving throw, taking 8d8 psychic damage on a failed save, or half as much damage on a successful one. You can increase the damage by 2d8 if you spend 1 more psi point on this ability.",
					"Psychic Crush (7 psi):",
					"As an action, you create a 20-foot cube of psychic energy within 120 feet of you. Each creature in that area must make an Intelligence saving throw. On a failed save, a target takes 8d8 psychic damage and is stunned until the end of your next turn. On a successful save, a target takes half as much damage."
				],
				"roll": [
					"1d8",
					"2d8",
					"3d8",
					"4d8",
					"5d8",
					"6d8",
					"7d8",
					"8d8"
				]
			},
			{
				"name": "Psychic Disruption (Awakened)",
				"level": "1",
				"time": "1 Action",
				"duration": "Varies",
				"classes": "Mystic (UA)",
				"range": "Varies",
				"text": [
					"You create psychic static that disrupts other creatures’ ability to think clearly.",
					"Psychic Focus:",
					"While focused on this discipline, you have advantage on Charisma (Deception) checks.",
					"Distracting Haze (1–7 psi Conc 1m):",
					"As an action, choose one creature you can see within 60 feet of you. That creature must make an Intelligence saving throw. On a failed save, it takes 1d10 psychic damage per psi point spent and can’t see anything more than 10 feet from it until your concentration ends. On a successful save, it takes half as much damage.",
					"Daze (3 psi):",
					"As an action, choose one creature you can see within 60 feet of you. That creature must make an Intelligence saving throw. On a failed save, the target is incapacitated until the end of your next turn or until it takes any damage.",
					"Mind Storm (5 psi):",
					"As an action, choose a point you can see within 60 feet of you. Each creature in a 20-foot-radius sphere centered on that point must make a Wisdom saving throw. On a failed save, a target takes 6d8 psychic damage and suffers disadvantage on all saving throws until the end of your next turn. On a successful save, a creature takes half as much damage. You can increase the damage by 1d6 per additional psi point spent on this ability."
				],
				"roll": [
					"1d10",
					"2d10",
					"3d10",
					"4d10",
					"5d10",
					"6d10",
					"7d10",
					"6d8",
					"7d8",
					"8d8"
				]
			},
			{
				"name": "Psionic Inquisition (Awakened)",
				"level": "1",
				"time": "Varies",
				"duration": "Varies",
				"range": "Varies",
				"classes": "Mystic (UA)",
				"text": [
					"You reach into a creature’s mind to uncover information or plant ideas within it.",
					"Psychic Focus:",
					"While focused on this discipline, you know when a creature communicating with you via telepathy is lying.",
					"Hammer of Inquisition (1–7 psi):",
					"As an action, choose one creature you can see within 60 feet of you. The target must make an Intelligence saving throw. On a failed save, it takes 1d10 psychic damage per psi point spent and suffers disadvantage on its next Wisdom saving throw before the end of your next turn. On a successful save, it takes half as much damage.",
					"Forceful Query (2 psi):",
					"As an action, you ask a question of one creature that can see and hear you within 30 feet of you. The question must be phrased so that it can be answered with a yes or no, otherwise this ability fails. The target must succeed on a Wisdom saving throw, or it replies with a truthful answer. A creature is immune to this ability if it is immune to being charmed.",
					"Ransack Mind (5 psi Conc 1h):",
					"While you concentrate on this ability, you probe one creature’s mind. The creature must remain within 30 feet of you, and you must be able to see it. If you reach the ability’s full duration, the target must make three Intelligence saving throws, and you learn information from it based on the number of saving throws it fails.",
					"With one failed saving throw, you learn its key memories from the past 12 hours.",
					"With two failed saving throws, you learn its key memories from the past 24 hours.",
					"With three failed saving throws, you learn its key memories from the past 48 hours.",
					"Phantom Idea (6 psi Conc 1h):",
					"While you concentrate on this ability, you probe one creature’s mind. The creature must remain within 30 feet of you, and you must be able to see it. If you reach the ability’s full duration, the target must make three Intelligence saving throws, and you plant a memory or an idea in it, which lasts for a number of hours based on the number of saving throws it fails. You choose whether the idea or memory is trivial (such as “I had porridge for breakfast” or “Ale is the worst”) or personality-defining (“I failed to save my village from orc marauders and am therefore a coward” or “Magic is a scourge, so I renounce it”).",
					"With one failed saving throw, the idea or memory lasts for the next 4 hours. With two failed saving throws, it lasts for 24 hours. With three failed saving throws, it lasts for 48 hours."
				],
				"roll": [
					"1d10",
					"2d10",
					"3d10",
					"4d10",
					"5d10",
					"6d10",
					"7d10"
				]
			},
			{
				"name": "Psychic Phantoms (Awakened)",
				"level": "1",
				"time": "1 Action",
				"duration": "Varies",
				"classes": "Mystic (UA)",
				"range": "Varies",
				"text": [
					"Your power reaches into a creature’s mind and causes it false perceptions.",
					"Psychic Focus:",
					"While focused on this discipline, you have advantage on Charisma (Deception) checks.",
					"Distracting Figment (1–7 psi):",
					"As an action, choose one creature you can see within 60 feet of you. The target must make an Intelligence saving throw. On a failed save, it takes 1d10 psychic damage per psi point spent and thinks it perceives a threatening creature just out of its sight; until the end of your next turn, it can’t use reactions, and melee attack rolls against it have advantage. On a successful save, it takes half as much damage.",
					"Phantom Foe (3 psi Conc 1m):",
					"As an action, choose one creature you can see within 60 feet of you. The target must make an Intelligence saving throw. On a failed save, it perceives a horrid creature adjacent to it until your concentration ends. During this time, the target can’t take reactions, and it takes 1d8 psychic damage at the start of each of its turns. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. You can increase the damage by 1d8 for each additional psi point spent on the ability.",
					"Phantom Betrayal (5 psi Conc 1m):",
					"As an action, you plant delusional paranoia in a creature’s mind. Choose one creature you can see within 60 feet of you. The target must succeed on an Intelligence saving throw, or until your concentration ends, it must target its allies with attacks and other damaging effects. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success. A creature is immune to this ability if it is immune to being charmed.",
					"Phantom Riches (7 psi Conc 1m):",
					"As an action, you plant the phantom of a greatly desired object in a creature’s mind. Choose one creature you can see within 60 feet of you. The target must make an Intelligence saving throw. On a failed save, you gain partial control over the target’s behavior until your concentration ends; the target moves as you wish on each of its turns, as it thinks it pursues the phantom object it desires. If it hasn’t taken damage since its last turn, it can use its action only to admire the object you created in its perception. The target can repeat the saving throw at the end of each of its turns, ending the effect on itself on a success."
				],
				"roll": [
					"1d10",
					"2d10",
					"3d10",
					"4d10",
					"5d10",
					"6d10",
					"7d10"
				]
			},
			{
				"name": "Telepathic Contact (Awakened)",
				"level": "1",
				"time": "1 Action",
				"duration": "Varies",
				"classes": "Mystic (UA)",
				"range": "Varies",
				"text": [
					"By channeling psionic power, you gain the ability to control other creatures by substituting your will for their own.",
					"Psychic Focus:",
					"While focused on this discipline, you gain the ability to use your Telepathy class feature with up to six creatures at once. If you don’t have that feature from the mystic class, you instead gain it while focused on this discipline.",
					"Exacting Query (2 psi):",
					"As an action, you target one creature you can communicate with via telepathy. The target must make an Intelligence saving throw. On a failed save, the target truthfully answers one question you ask it via telepathy. On a successful save, the target is unaffected, and you can’t use this ability on it again until you finish a long rest. A creature is immune to this ability if it is immune to being charmed.",
					"Occluded Mind (2 psi):",
					"As an action, you target one creature you can communicate with via telepathy. The target must make an Intelligence saving throw. On a failed save, the target believes one statement of your choice for the next 5 minutes that you communicate to it via telepathy. The statement can be up to ten words long, and it must describe you or a creature or an object the target can see. On a successful save, the target is unaffected, and you can’t use this ability on it again until you finish a long rest. A creature is immune to this ability if it is immune to being charmed.",
					"Broken Will (5 psi):",
					"As an action, you target one creature you can communicate with via telepathy. The target must make an Intelligence saving throw. On a failed save, you choose the target’s movement and action on its next turn. On a successful save, the target is unaffected, and you can’t use this ability on it again until you finish a long rest. A creature is immune to this ability if it is immune to being charmed.",
					"Psychic Grip (6 psi Conc 1m):",
					"As an action, you target one creature you can see within 60 feet of you. The target must succeed on an Intelligence saving throw, or it is paralyzed until your concentration ends. At the end of each of its turns, it can repeat the saving throw. On a success, this effect ends. On a failure, you can use your reaction to force the target to move up to half its speed, even though it’s paralyzed.",
					"Psychic Domination (7 psi Conc 1m):",
					"As an action, you target one creature you can see within 60 feet of you. The target must succeed on an Intelligence saving throw, or you choose the creature’s actions and movement on its turns until your concentration ends. At the end of each of its turns, it can repeat the saving throw, ending the effect on itself on a success. A creature is immune to this ability if it is immune to being charmed."
				]
			},
			{
				"name": "Third Eye (Nomad)",
				"level": "1",
				"time": "1 Bonus Action",
				"duration": "Varies",
				"classes": "Mystic (UA)",
				"range": "Varies",
				"text": [
					"You create a third, psychic eye in your mind, which you cast out into the world. It channels thoughts and knowledge back to you, greatly enhancing your senses.",
					"Psychic Focus:",
					"While focused on this discipline, you have darkvision with a range of 60 feet. If you already have darkvision with that range or greater, increase its range by Psychic talent feet.",
					"Tremorsense (2 psi Conc 1m):",
					"As a bonus action, you gain tremorsense with a radius of 30 feet, which lasts until your concentration ends.",
					"Unwavering Eye (2 psi):",
					"As a bonus action, you gain advantage on Wisdom checks for 1 minute.",
					"Piercing Sight (3 psi Conc 1m):",
					"As a bonus action, you gain the ability to see through objects that are up to 1 foot thick within 30 feet of you. This sight lasts until your concentration ends",
					"Truesight (5 psi Conc 1m):",
					"As a bonus action, you gain truesight with a radius of 30 feet, which lasts until your concentration ends."
				]
			}
		]
	}
}