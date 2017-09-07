
function saveData() {
	var u1 = document.getElementById("unit1").value;
	var u2 = document.getElementById("unit2").value;
	var f1 = document.getElementById("fact1").value;
	var f2 = document.getElementById("fact2").value;
	document.getElementById("form1").style.visibility="hidden";
	if (f1 == "Linirea") {
		if (u1 == "Melee") {
			var fu1 = "Paladin"
		} else if (u1 == "Archer") {
			var fu1 = "Ranger"
		} else if (u1 == "Mage") {
			var fu1 = "Arcane Wizard"
		} else if (u1 == "Siege") {
			var fu1 = "Catapult"
		}
	} else if (f1 == "Mountain Men" || f1 == "Mountain" || f1 == "mountain" || f1 == "SUNRAY") {
		if (u1 == "Melee" || u1 == "melee") {
			var fu1 = "Barbarian"
		} else if (u1 == "Archer" || u1 == "archer") {
			var fu1 = "Musketeer"
		} else if (u1 == "Mage" || u1 == "mage") {
			var fu1 = "Sorcerer"
		} else if (u1 == "Siege" || u1 == "siege") {
			var fu1 = "Sasquatch"
		}
	} else if (f1 == "Dark Forces" || f1 == "DF" || f1 == "Vez'nan" || f1 == "vezziemen") {
		if (u1 == "Melee" || u1 == "melee") {
			var fu1 = "Dark Knight"
		} else if (u1 == "Archer" || u1 == "archer") {
			var fu1 = "Shadow Archer"
		} else if (u1 == "Mage" || u1 == "mage") {
			var fu1 = "Necromancer"
		} else if (u1 == "Siege" || u1 == "siege") {
			var fu1 = "Lava Elemental"
		}
	} else if (f1 == "Desert Warriors" || f1 == "Desert" || f1 == "desert" || f1 == "sand") {
		if (u1 == "Melee" || u1 == "melee") {
			var fu1 = "Assassin"
		} else if (u1 == "Archer" || u1 == "archer") {
			var fu1 = "Crossbow"
		} else if (u1 == "Mage" || u1 == "mage") {
			var fu1 = "Archmage"
		} else if (u1 == "Siege" || u1 == "siege") {
			var fu1 = "Genie"
		}
	} else if (f1 == "Jungle Savages" || f1 == "Jungle" || f1 == "jungle" || f1 == "Hannibal Lecter") {
		if (u1 == "Melee" || u1 == "melee") {
			var fu1 = "Savage Warrior"
		} else if (u1 == "Archer" || u1 == "archer") {
			var fu1 = "Axethrower"
		} else if (u1 == "Mage" || u1 == "mage") {
			var fu1 = "Shaman"
		} else if (u1 == "Siege" || u1 == "siege") {
			var fu1 = "Gorillon"
		}
	} else if (f1 == "Dwarves" || f1 == "dwarves" || f1 == "dorf" || f1 == "boom") {
		if (u1 == "Melee" || u1 == "melee") {
			var fu1 = "Defender"
		} else if (u1 == "Archer" || u1 == "archer") {
			var fu1 = "Sniper"
		} else if (u1 == "Mage" || u1 == "mage") {
			var fu1 = "Tesla Gunner"
		} else if (u1 == "Siege" || u1 == "siege") {
			var fu1 = "Battle Mech"
		}
	} else if (f1 == "Aredhel Elves") {
		if (u1 == "Melee") {
			var fu1 = "Bladesinger"
		} else if (u1 == "Archer") {
			var fu1 = "Arcane Archer"
		} else if (u1 == "Mage") {
			var fu1 = "High Elven Mage"
		} else if (u1 == "Siege") {
			var fu1 = "Bastion"
		}
	} else if (f1 == "Forest Creatures" || f1 == "forest" || f1 == "Fae" || f1 == "changelings") {
		if (u1 == "Melee" || u1 == "melee") {
			var fu1 = "Forest Keeper"
		} else if (u1 == "Archer" || u1 == "archer") {
			var fu1 = "Awok"
		} else if (u1 == "Mage" || u1 == "mage") {
			var fu1 = "Gnome"
		} else if (u1 == "Siege" || u1 == "siege") {
			var fu1 = "Arch-Druid"
		}
	} else if (f1 == "Twilight Elves" || f1 == "Twilight" || f1 == "twilight" || f1 == "edgy elves") {
		if (u1 == "Melee" || u1 == "melee") {
			var fu1 = "Avenger"
		} else if (u1 == "Archer" || u1 == "archer") {
			var fu1 = "Harasser"
		} else if (u1 == "Mage" || u1 == "mage") {
			var fu1 = "Evoker"
		} else if (u1 == "Siege" || u1 == "siege") {
			var fu1 = "Brute"
		}
	} 
	if (f2 == "Linirea") {
		if (u2 == "Melee") {
			var fu2 = "Paladin"
		} else if (u2 == "Archer") {
			var fu2 = "Ranger"
		} else if (u2 == "Mage") {
			var fu2 = "Arcane Wizard"
		} else if (u2 == "Siege") {
			var fu2 = "Catapult"
		}
	} else if (f2 == "Mountain Men" || f2 == "Mountain" || f2 == "mountain" || f2 == "SUNRAY") {
		if (u2 == "Melee" || u2 == "melee") {
			var fu2 = "Barbarian"
		} else if (u2 == "Archer" || u2 == "archer") {
			var fu2 = "Musketeer"
		} else if (u2 == "Mage" || u2 == "mage") {
			var fu2 = "Sorcerer"
		} else if (u2 == "Siege" || u2 == "siege") {
			var fu2 = "Sasquatch"
		}
	} else if (f2 == "Dark Forces" || f2 == "DF" || f2 == "Vez'nan" || f2 == "vezziemen") {
		if (u2 == "Melee" || u2 == "melee") {
			var fu2 = "Dark Knight"
		} else if (u2 == "Archer" || u2 == "archer") {
			var fu2 = "Shadow Archer"
		} else if (u2 == "Mage" || u2 == "mage") {
			var fu2 = "Necromancer"
		} else if (u2 == "Siege" || u2 == "siege") {
			var fu2 = "Lava Elemental"
		}
	} else if (f2 == "Desert Warriors" || f2 == "Desert" || f2 == "desert" || f2 == "sand") {
		if (u2 == "Melee" || u2 == "melee") {
			var fu2 = "Assassin"
		} else if (u2 == "Archer" || u2 == "archer") {
			var fu2 = "Crossbow"
		} else if (u2 == "Mage" || u2 == "mage") {
			var fu2 = "Archmage"
		} else if (u2 == "Siege" || u2 == "siege") {
			var fu2 = "Genie"
		}
	} else if (f2 == "Jungle Savages" || f2 == "Jungle" || f2 == "jungle" || f2 == "Hannibal Lecter") {
		if (u2 == "Melee" || u2 == "melee") {
			var fu2 = "Savage Warrior"
		} else if (u2 == "Archer" || u2 == "archer") {
			var fu2 = "Axethrower"
		} else if (u2 == "Mage" || u2 == "mage") {
			var fu2 = "Shaman"
		} else if (u2 == "Siege" || u2 == "siege") {
			var fu2 = "Gorillon"
		}
	} else if (f2 == "Dwarves" || f2 == "dwarves" || f2 == "dorf" || f2 == "boom") {
		if (u2 == "Melee" || u2 == "melee") {
			var fu2 = "Defender"
		} else if (u2 == "Archer" || u2 == "archer") {
			var fu2 = "Sniper"
		} else if (u2 == "Mage" || u2 == "mage") {
			var fu2 = "Tesla Gunner"
		} else if (u2 == "Siege" || u2 == "siege") {
			var fu2 = "Battle Mech"
		}
	} else if (f2 == "Aredhel Elves") {
		if (u2 == "Melee") {
			var fu2 = "Bladesinger"
		} else if (u2 == "Archer") {
			var fu2 = "Arcane Archer"
		} else if (u2 == "Mage") {
			var fu2 = "High Elven Mage"
		} else if (u2 == "Siege") {
			var fu2 = "Bastion"
		}
	} else if (f2 == "Forest Creatures" || f2 == "forest" || f2 == "Fae" || f2 == "changelings") {
		if (u2 == "Melee" || u2 == "melee") {
			var fu2 = "Forest Keeper"
		} else if (u2 == "Archer" || u2 == "archer") {
			var fu2 = "Awok"
		} else if (u2 == "Mage" || u2 == "mage") {
			var fu2 = "Gnome"
		} else if (u2 == "Siege" || u2 == "siege") {
			var fu2 = "Arch-Druid"
		}
	} else if (f2 == "Twilight Elves" || f2 == "Twilight" || f2 == "twilight" || f2 == "edgy elves") {
		if (u2 == "Melee" || u2 == "melee") {
			var fu2 = "Avenger"
		} else if (u2 == "Archer" || u2 == "archer") {
			var fu2 = "Harasser"
		} else if (u2 == "Mage" || u2 == "mage") {
			var fu2 = "Evoker"
		} else if (u2 == "Siege" || u2 == "siege") {
			var fu2 = "Brute"
		}
	} 
	if (u1 == "City" || u2 == "City" || u1 == "city" || u2 == "city") {
		if (f1 == "Aredhel Elves") {
			var fu1 = "Elven City"
		} else if (f2 == "Aredhel Elves") {
			var fu2 = "Elven City"
		}
	}
	document.getElementById("unittypes").innerHTML = fu1 + " vs. " + fu2;
	document.getElementById("abilities").style.visibility="visible";
	document.getElementById("aform1").style.visibility="visible";
	document.getElementById("aform2").style.visibility="visible";
	document.getElementById("calc").style.visibility = "visible";
	gu1 = fu1;
	gu2 = fu2;
	ut1 = u1;
	ut2 = u2;
	ff1 = f1;
	ff2 = f2;
	writeAbilities();
}

function start() {
	document.getElementById("abilities").style.visibility = "hidden";
	document.getElementById("aform1").style.visibility = "hidden";
	document.getElementById("aform2").style.visibility = "hidden";
	document.getElementById("calc").style.visibility = "hidden";
}

function writeAbilities() {
	var cs = [];
	var cse = [];
	var container1 = document.getElementById("container1");
	var container2 = document.getElementById("container2");
	for (i = 1; i < 6; i++) {
		var inpu = document.createElement("input");
		inpu.type = "checkbox";
		inpu.id = "abi" + [i];
		container1.appendChild(inpu);
		var text = container1.appendChild(document.createElement("label"));
		text.id = "a" + [i];
		container1.appendChild(document.createElement("br"));
	}
	for (i = 6; i < 11; i++) {
		var inpu = document.createElement("input");
		inpu.type = "checkbox";
		inpu.id = "abi" + [i];
		container2.appendChild(inpu);
		var text = container2.appendChild(document.createElement("label"));
		text.id = "a" + [i];
		container2.appendChild(document.createElement("br"));
	}
	if (gu1 == "Paladin" || gu2 == "Paladin") {
		if (gu1 == "Paladin") {
			document.getElementById("abi3").style.visibility="hidden";document.getElementById("a3").style.visibility="hidden";
			document.getElementById("abi4").style.visibility="hidden";document.getElementById("a4").style.visibility="hidden";
			document.getElementById("abi5").style.visibility="hidden";document.getElementById("a5").style.visibility="hidden";
			document.getElementById("a1").innerHTML = "Shield of Valor: -1 damage from attacks";
			document.getElementById("a2").innerHTML = "Holy Strike: +2 offensive strength";
			 cse[1] = "-1DA"
			 cse[2] = "+2OS"
			 cs[1] = 9;
			 cs[3] = 11;
		}
		if (gu2 == "Paladin") {
			document.getElementById("abi8").style.visibility="hidden";document.getElementById("a8").style.visibility="hidden";
			document.getElementById("abi9").style.visibility="hidden";document.getElementById("a9").style.visibility="hidden";
			document.getElementById("abi10").style.visibility="hidden";document.getElementById("a10").style.visibility="hidden";
			document.getElementById("a6").innerHTML = "Shield of Valor: -1 damage from attacks";
			document.getElementById("a7").innerHTML = "Holy Strike: +2 offensive strength";
			 cse[6] = "-1DA"
			 cse[7] = "+2OS"
			 cs[2] = 9;
			 cs[4] = 11;
		}
	}  if (gu1 == "Ranger" || gu2 == "Ranger") {
		if (gu1 == "Ranger") {
			document.getElementById("abi5").style.visibility="hidden";document.getElementById("a5").style.visibility="hidden";
			document.getElementById("a1").innerHTML = "Treesung Bow: +1 combat strength";
			document.getElementById("a2").innerHTML = "Poison Arrows: +2 offensive strength";
			document.getElementById("a3").innerHTML = "Sylvan Blades: +2 defensive strength";
			document.getElementById("a4").innerHTML = "Wrath of the Forest: +1 combat strength in Forest or Jungle";
			 cse[1] = "+1CS"
			 cse[2] = "+2OS"
			 cse[3] = "+2DS"
			 cse[4] = "+1CS"
			 cs[1] = 7;
			 cs[3] = 6;
		}
		if (gu2 == "Ranger") {
			document.getElementById("a6").innerHTML = "Treesung Bow: +1 combat strength";
			document.getElementById("a7").innerHTML = "Poison Arrows: +2 offensive strength";
			document.getElementById("a8").innerHTML = "Sylvan Blades: +2 defensive strength";
			document.getElementById("a9").innerHTML = "Wrath of the Forest: +1 combat strength in Forestor Jungle";
			 cse[6] = "+1CS"
			 cse[7] = "+2OS"
			 cse[8] = "+2DS"
			 cse[9] = "+1CS"
			 cs[2] = 7;
			 cs[4] = 6;
		}
	}  if (gu1 == "Arcane Wizard" || gu2 == "Arcane Wizard") {
		if (gu1 == "Arcane Wizard") {
			document.getElementById("abi4").style.visibility="hidden";document.getElementById("a4").style.visibility="hidden";
			document.getElementById("abi5").style.visibility="hidden";document.getElementById("a5").style.visibility="hidden";
			document.getElementById("a1").innerHTML = "Empowered Magic: +1 combat strength";
			document.getElementById("a2").innerHTML = "Arcane Shatter: +1 damage from attacks";
			document.getElementById("a3").innerHTML = "Death Ray: +4 offensive strength";
			 cse[1] = "+1CS"
			 cse[2] = "+1DA"
			 cse[3] = "+4OS"
			 cs[1] = 8;
			 cs[3] = 8;
		}
		if (gu2 == "Arcane Wizard") {
			document.getElementById("abi9").style.visibility="hidden";document.getElementById("a9").style.visibility="hidden";
			document.getElementById("abi10").style.visibility="hidden";document.getElementById("a10").style.visibility="hidden";
			document.getElementById("a6").innerHTML = "Empowered Magic: +1 combat strength";
			document.getElementById("a7").innerHTML = "Arcane Shatter: +1 damage from attacks";
			document.getElementById("a8").innerHTML = "Death Ray: +4 offensive strength";
			 cse[6] = "+1CS"
			 cse[7] = "+1DA"
			 cse[8] = "+4OS"
			 cs[2] = 8;
			 cs[4] = 8;
		}
	}  if (gu1 == "Catapult" || gu2 == "Catapult") {
		if (gu1 == "Catapult") {
			document.getElementById("abi4").style.visibility="hidden";document.getElementById("a4").style.visibility="hidden";
			document.getElementById("abi5").style.visibility="hidden";document.getElementById("a5").style.visibility="hidden";
			document.getElementById("a1").innerHTML = "Siege Weapon: +2 combat strength versus Cities";
			document.getElementById("a2").innerHTML = "Sharp Splinters: +1 combat strength";
			document.getElementById("a3").innerHTML = "Fire Shot: +1 combat strength";
			 cse[1] = "+2CSvC"
			 cse[2] = "+1CS"
			 cse[3] = "+1CS"
			 cs[1] = 7;
			 cs[3] = 7;
		}
		if (gu2 == "Catapult") {
			document.getElementById("abi9").style.visibility="hidden";document.getElementById("a9").style.visibility="hidden";
			document.getElementById("abi10").style.visibility="hidden";document.getElementById("a10").style.visibility="hidden";
			document.getElementById("a6").innerHTML = "Siege Weapon: +2 combat strength versus Cities";
			document.getElementById("a7").innerHTML = "Sharp Splinters: +1 combat strength";
			document.getElementById("a8").innerHTML = "Fire Shot: +1 combat strength";
			 cse[6] = "+2CSvC"
			 cse[7] = "+1CS"
			 cse[8] = "+1CS"
			 cs[2] = 7;
			 cs[4] = 7;
		}
	}  if (gu1 == "Barbarian" || gu2 == "Barbarian") {
		if (gu1 == "Barbarian") {
			document.getElementById("abi5").style.visibility="hidden";document.getElementById("a5").style.visibility="hidden";
			document.getElementById("a1").innerHTML = "More Axes: +1 combat strength";
			document.getElementById("a2").innerHTML = "Whirlwind Attack: +2 combat strength versus Melee";
			document.getElementById("a3").innerHTML = "Throwing Nets: +2 offensive strength versus Mages and Archers";
			document.getElementById("a4").innerHTML = "Mountain Climbers: +1 defensive strength";
			 cse[1] = "+1CS"
			 cse[2] = "+2CSvM"
			 cse[3] = "+2OSvWA"
			 cse[4] = "+1DS"
			 cs[1] = 8;
			 cs[3] = 9;
		}
		if (gu2 == "Barbarian") {
			document.getElementById("abi10").style.visibility="hidden";document.getElementById("a10").style.visibility="hidden";
			document.getElementById("a6").innerHTML = "More Axes: +1 combat strength";
			document.getElementById("a7").innerHTML = "Whirlwind Attack: +2 combat strength versus Melee";
			document.getElementById("a8").innerHTML = "Throwing Nets: +2 offensive strength versus Mages and Archers";
			document.getElementById("a9").innerHTML = "Mountain Climbers: +1 defensive strength";
			 cse[6] = "+1CS"
			 cse[7] = "+2CSvM"
			 cse[8] = "+2OSvWA"
			 cse[9] = "+1DS"
			 cs[2] = 8;
			 cs[4] = 9;
		}
	}  if (gu1 == "Musketeer" || gu2 == "Musketeer") {
		if (gu1 == "Musketeer") {
			document.getElementById("a1").innerHTML = "Precision: +1 offensive strength";
			document.getElementById("a2").innerHTML = "Piercing Shots: +1 damage from attacks";
			document.getElementById("a3").innerHTML = "Shrapnel Shot: +2 defensive strength versus Melee";
			document.getElementById("a4").innerHTML = "Sniper Shot: +2 offensive strength";
			document.getElementById("a5").innerHTML = "Mountain Climbers: +1 defensive strength";
			 cse[1] = "+1OS"
			 cse[2] = "+1DA"
			 cse[3] = "+2DSvM"
			 cse[4] = "+2OS"
			 cse[5] = "+1DS"
			 cs[1] = 8;
			 cs[3] = 8;
		}
		if (gu2 == "Musketeer") {
			document.getElementById("a6").innerHTML = "Precision: +1 offensive strength";
			document.getElementById("a7").innerHTML = "Piercing Shots: +1 damage from attacks";
			document.getElementById("a8").innerHTML = "Shrapnel Shot: +2 defensive strength";
			document.getElementById("a9").innerHTML = "Sniper Shot: +2 offensive strength";
			document.getElementById("a10").innerHTML = "Mountain Climbers: +1 defensive strength";
			 cse[6] = "+1OS"
			 cse[7] = "+1DA"
			 cse[8] = "+2DSvM"
			 cse[9] = "+2OS"
			 cse[10] = "+1DS"
			 cs[2] = 8;
			 cs[4] = 8;
		}
	}  if (gu1 == "Sorcerer" || gu2 == "Sorcerer") {
		if (gu1 == "Sorcerer") {
			document.getElementById("abi4").style.visibility="hidden";document.getElementById("a4").style.visibility="hidden";
			document.getElementById("abi5").style.visibility="hidden";document.getElementById("a5").style.visibility="hidden";
			document.getElementById("a1").innerHTML = "Hermetic Study: +1 defensive strength";
			document.getElementById("a2").innerHTML = "Summon Elemental";
			document.getElementById("a3").innerHTML = "Mountain Climbers: +1 defensive strength";
			 cse[1] = "+1DS"
			 cse[2] = "+3DSvM"
			 cse[3] = "+1DS"
			 cs[1] = 8;
			 cs[3] = 9;
		}
		if (gu2 == "Sorcerer") {
			document.getElementById("abi9").style.visibility="hidden";document.getElementById("a9").style.visibility="hidden";
			document.getElementById("abi10").style.visibility="hidden";document.getElementById("a10").style.visibility="hidden";
			document.getElementById("a6").innerHTML = "Hermetic Study: +1 defensive strength";
			document.getElementById("a7").innerHTML = "Summon Elemental: +3 defensive strength";
			document.getElementById("a8").innerHTML = "Mountain Climbers: +1 defensive strength";
			 cse[6] = "+1DS"
			 cse[7] = "+3DSvM"
			 cse[8] = "+1DS"
			 cs[2] = 8;
			 cs[4] = 9;
		}
	}  if (gu1 == "Sasquatch" || gu2 == "Sasquatch") {
		if (gu1 == "Sasquatch") {
			document.getElementById("abi3").style.visibility="hidden";document.getElementById("a3").style.visibility="hidden";
			document.getElementById("abi4").style.visibility="hidden";document.getElementById("a4").style.visibility="hidden";
			document.getElementById("abi5").style.visibility="hidden";document.getElementById("a5").style.visibility="hidden";
			document.getElementById("a1").innerHTML = "Ground Pound: Deals half damage to another target";
			document.getElementById("a2").innerHTML = "Mountain Climbers: +1 defensive strength";
			 cse[1] = "-1/2"
			 cse[2] = "+1DS"
			 cs[1] = 10;
			 cs[3] = 10;
		}
		if (gu2 == "Sasquatch") {
			document.getElementById("abi8").style.visibility="hidden";document.getElementById("a8").style.visibility="hidden";
			document.getElementById("abi9").style.visibility="hidden";document.getElementById("a9").style.visibility="hidden";
			document.getElementById("abi10").style.visibility="hidden";document.getElementById("a10").style.visibility="hidden";
			document.getElementById("a6").innerHTML = "Ground Pound: Deals half damage to another target";
			document.getElementById("a7").innerHTML = "Mountain Climbers: +1 defensive strength";
			 cse[6] = "-1/2"
			 cse[7] = "+1DS"
			 cs[2] = 10;
			 cs[4] = 10;
		}
	}  if (gu1 == "Dark Knight" || gu2 == "Dark Knight") {
		if (gu1 == "Dark Knight") {
			document.getElementById("abi4").style.visibility="hidden";document.getElementById("a4").style.visibility="hidden";
			document.getElementById("abi5").style.visibility="hidden";document.getElementById("a5").style.visibility="hidden";
			document.getElementById("a1").innerHTML = "Shield Bash: +1 combat strength";
			document.getElementById("a2").innerHTML = "Dark Slayer: +1 combat strength";
			document.getElementById("a3").innerHTML = "Dark Pact: +1 combat strength versus Mages";
			 cse[1] = "+1CS"
			 cse[2] = "+1CS"
			 cse[3] = "+1CSvW"
			 cs[1] = 7;
			 cs[3] = 9;
		}
		if (gu2 == "Dark Knight") {
			document.getElementById("abi9").style.visibility="hidden";document.getElementById("a9").style.visibility="hidden";
			document.getElementById("abi10").style.visibility="hidden";document.getElementById("a10").style.visibility="hidden";
			document.getElementById("a6").innerHTML = "Shield Bash: +1 combat strength";
			document.getElementById("a7").innerHTML = "Dark Slayer: +1 combat strength";
			document.getElementById("a8").innerHTML = "Dark Pact: +1 combat strength versus Mages";
			 cse[6] = "+1CS"
			 cse[7] = "+1CS"
			 cse[8] = "+1CSvW"
			 cs[2] = 7;
			 cs[4] = 9;
		}
	}  if (gu1 == "Shadow Archer" || gu2 == "Shadow Archer") {
		if (gu1 == "Shadow Archer") {
			document.getElementById("abi5").style.visibility="hidden";document.getElementById("a5").style.visibility="hidden";
			document.getElementById("a1").innerHTML = "Eagle Eye: +1 offensive strength";
			document.getElementById("a2").innerHTML = "Opportunist: +1 combat strength versus wounded units";
			document.getElementById("a3").innerHTML = "Strafe: +2 defensive strength versus Melee";
			document.getElementById("a4").innerHTML = "Dark Pact: +1 combat strength versus Melee";
			 cse[1] = "+1OS"
			 cse[2] = "+1CS"
			 cse[3] = "+2DSvM"
			 cse[4] = "+1CSvM"
			 cs[1] = 8;
			 cs[3] = 7;
		}
		if (gu2 == "Shadow Archer") {
			document.getElementById("abi10").style.visibility="hidden";document.getElementById("a10").style.visibility="hidden";
			document.getElementById("a6").innerHTML = "Eagle Eye: +1 offensive strength";
			document.getElementById("a7").innerHTML = "Opportunist: +1 combat strength versus wounded units";
			document.getElementById("a8").innerHTML = "Strafe: +2 defensive strength versus Melee";
			document.getElementById("a9").innerHTML = "Dark Pact: +1 combat strength versus Melee";
			 cse[6] = "+1OS"
			 cse[7] = "+1CS"
			 cse[8] = "+2DSvM"
			 cse[9] = "+1CSvM"
			 cs[2] = 8;
			 cs[4] = 7;
		}
	}  if (gu1 == "Necromancer" || gu2 == "Necromancer") {
		if (gu1 == "Necromancer") {
			document.getElementById("abi5").style.visibility="hidden";document.getElementById("a5").style.visibility="hidden";
			document.getElementById("a1").innerHTML = "Summon Skeleton: +1 defensive strength";
			document.getElementById("a2").innerHTML = "Eldritch Power: +1 offensive strength";
			document.getElementById("a3").innerHTML = "Death Knight: +2 defensive strength";
			document.getElementById("a4").innerHTML = "Dark Pact: +1 combat strength versus Archers";
			 cse[1] = "+1DS"
			 cse[2] = "+1OS"
			 cse[3] = "+2DS"
			 cse[4] = "+1CSvA"
			 cs[1] = 7;
			 cs[3] = 8;
		}
		if (gu2 == "Necromancer") {
			document.getElementById("abi10").style.visibility="hidden";document.getElementById("a10").style.visibility="hidden";
			document.getElementById("a6").innerHTML = "Summon Skeleton: +1 defensive strength";
			document.getElementById("a7").innerHTML = "Eldritch Power: +1 offensive strength";
			document.getElementById("a8").innerHTML = "Death Knight: +2 defensive strength";
			document.getElementById("a9").innerHTML = "Dark Pact: +1 combat strength versus Archers";
			 cse[6] = "+1DS"
			 cse[7] = "+1OS"
			 cse[8] = "+2DS"
			 cse[9] = "+1CSvA"
			 cs[2] = 7;
			 cs[4] = 8;
		}
	}  if (gu1 == "Lava Elemental" || gu2 == "Lava Elemental") {
		if (gu1 == "Lava Elemental") {
			document.getElementById("abi3").style.visibility="hidden";document.getElementById("a3").style.visibility="hidden";
			document.getElementById("abi4").style.visibility="hidden";document.getElementById("a4").style.visibility="hidden";
			document.getElementById("abi5").style.visibility="hidden";document.getElementById("a5").style.visibility="hidden";
			document.getElementById("a1").innerHTML = "Fire Breath: +1 offensive strength";
			document.getElementById("a2").innerHTML = "Dark Pact: +1 combat strength versus Cities";
			 cse[1] = "+1OS"
			 cse[2] = "+1CSvC"
			 cs[1] = 8;
			 cs[3] = 9;
		}
		if (gu2 == "Lava Elemental") {
			document.getElementById("abi8").style.visibility="hidden";document.getElementById("a8").style.visibility="hidden";
			document.getElementById("abi9").style.visibility="hidden";document.getElementById("a9").style.visibility="hidden";
			document.getElementById("abi10").style.visibility="hidden";document.getElementById("a10").style.visibility="hidden";
			document.getElementById("a6").innerHTML = "Fire Breath: +1 offensive strength";
			document.getElementById("a7").innerHTML = "Dark Pact: +1 combat strength versus Cities";
			 cse[6] = "+1OS"
			 cse[7] = "+1CSvC"
			 cs[2] = 8;
			 cs[4] = 9;
		}
	}  if (gu1 == "Assassin" || gu2 == "Assassin") {
		if (gu1 == "Assassin") {
			document.getElementById("abi3").style.visibility="hidden";document.getElementById("a3").style.visibility="hidden";
			document.getElementById("abi4").style.visibility="hidden";document.getElementById("a4").style.visibility="hidden";
			document.getElementById("abi5").style.visibility="hidden";document.getElementById("a5").style.visibility="hidden";
			document.getElementById("a1").innerHTML = "Counterattack: +1 defensive strength";
			document.getElementById("a2").innerHTML = "Sneak Attack: +2 offensive strength";
			 cse[1] = "+1DS"
			 cse[2] = "+2OS"
			 cs[1] = 9;
			 cs[3] = 9;
		}
		if (gu2 == "Assassin") {
			document.getElementById("abi8").style.visibility="hidden";document.getElementById("a8").style.visibility="hidden";
			document.getElementById("abi9").style.visibility="hidden";document.getElementById("a9").style.visibility="hidden";
			document.getElementById("abi10").style.visibility="hidden";document.getElementById("a10").style.visibility="hidden";
			document.getElementById("a1").innerHTML = "Counterattack: +1 defensive strength";
			document.getElementById("a7").innerHTML = "Sneak Attack: +2 offensive strength";
			 cse[6] = "+1DS"
			 cse[7] = "+2OS"
			 cs[2] = 9;
			 cs[4] = 9;
		}
	}  if (gu1 == "Crossbow" || gu2 == "Crossbow") {
		if (gu1 == "Crossbow") {
			document.getElementById("abi4").style.visibility="hidden";document.getElementById("a4").style.visibility="hidden";
			document.getElementById("abi5").style.visibility="hidden";document.getElementById("a5").style.visibility="hidden";
			document.getElementById("a1").innerHTML = "Monastic Discipline: +1 defensive strength";
			document.getElementById("a2").innerHTML = "Accuracy: +1 combat strength";
			document.getElementById("a3").innerHTML = "Barrage: +2 offensive strength";
			 cse[1] = "+1DS"
			 cse[2] = "+1CS"
			 cse[3] = "+2OS"
			 cs[1] = 8;
			 cs[3] = 8;
		}
		if (gu2 == "Crossbow") {
			document.getElementById("abi9").style.visibility="hidden";document.getElementById("a9").style.visibility="hidden";
			document.getElementById("abi10").style.visibility="hidden";document.getElementById("a10").style.visibility="hidden";
			document.getElementById("a6").innerHTML = "Monastic Discipline: +1 defensive strength";
			document.getElementById("a7").innerHTML = "Accuracy: +1 combat strength";
			document.getElementById("a8").innerHTML = "Barrage: +2 offensive strength";
			 cse[1] = "+1DS"
			 cse[7] = "+1CS"
			 cse[8] = "+2OS"
			 cs[2] = 8;
			 cs[4] = 8;
		}
	}  if (gu1 == "Archmage" || gu2 == "Archmage") {
		if (gu1 == "Archmage") {
			document.getElementById("abi3").style.visibility="hidden";document.getElementById("a3").style.visibility="hidden";
			document.getElementById("abi4").style.visibility="hidden";document.getElementById("a4").style.visibility="hidden";
			document.getElementById("abi5").style.visibility="hidden";document.getElementById("a5").style.visibility="hidden";
			document.getElementById("a1").innerHTML = "Stored Bolts: +1 combat strength";
			document.getElementById("a2").innerHTML = "Critical Mass: +2 offensive strength";
			 cse[1] = "+1CS"
			 cse[2] = "+2OS"
			 cs[1] = 9;
			 cs[3] = 9;
		}
		if (gu2 == "Archmage") {
			document.getElementById("abi8").style.visibility="hidden";document.getElementById("a8").style.visibility="hidden";
			document.getElementById("abi9").style.visibility="hidden";document.getElementById("a9").style.visibility="hidden";
			document.getElementById("abi10").style.visibility="hidden";document.getElementById("a10").style.visibility="hidden";
			document.getElementById("a6").innerHTML = "Stored Bolts: +1 combat strength";
			document.getElementById("a7").innerHTML = "Critical Mass: +2 offensive strength";
			 cse[6] = "+1CS"
			 cse[7] = "+2OS"
			 cs[2] = 9;
			 cs[4] = 9;
		}
	}  if (gu1 == "Genie" || gu2 == "Genie") {
		if (gu1 == "Genie") {
			document.getElementById("abi4").style.visibility="hidden";document.getElementById("a4").style.visibility="hidden";
			document.getElementById("abi5").style.visibility="hidden";document.getElementById("a5").style.visibility="hidden";
			document.getElementById("a1").innerHTML = "Overpower: +1 combat strength if a friendly unit is nearby";
			document.getElementById("a2").innerHTML = "Magical Fists: +2 combat strength versus Melee";
			document.getElementById("a3").innerHTML = "Sand Magic: +2 defensive strength";
			 cse[1] = "+1CSvS"
			 cse[2] = "+2CSvM"
			 cse[3] = "+2DS"
			 cs[1] = 8;
			 cs[3] = 7;
		}
		if (gu2 == "Genie") {
			document.getElementById("abi9").style.visibility="hidden";document.getElementById("a9").style.visibility="hidden";
			document.getElementById("abi10").style.visibility="hidden";document.getElementById("a10").style.visibility="hidden";
			document.getElementById("a6").innerHTML = "Overpower: +1 combat strength if a friendly unit is nearby";
			document.getElementById("a7").innerHTML = "Magical Fists: +2 combat strength versus Melee";
			document.getElementById("a8").innerHTML = "Sand Magic: +2 defensive strength";
			 cse[6] = "+1CSvS"
			 cse[7] = "+2CSvM"
			 cse[8] = "+2DS"
			 cs[2] = 8;
			 cs[4] = 7;
		}
	}  if (gu1 == "Savage Warrior" || gu2 == "Savage Warrior") {
		if (gu1 == "Savage Warrior") {
			document.getElementById("abi5").style.visibility="hidden";document.getElementById("a5").style.visibility="hidden";
			document.getElementById("a1").innerHTML = "Jungle Stalker: +1 combat strength in Jungle or Forest";
			document.getElementById("a2").innerHTML = "Poisoned Blade: +2 offensive strength";
			document.getElementById("a3").innerHTML = "Totem of Power: +1 offensive strength";
			document.getElementById("a9").innerHTML = "Armor Aura: -1 damage from attacks while in range of a Shaman";
			 cse[1] = "+1CS"
			 cse[2] = "+2OS"
			 cse[3] = "+1OS"
			 cse[4] = "-1DA"
			 cs[1] = 9;
			 cs[3] = 9;
		}
		if (gu2 == "Savage Warrior") {
			document.getElementById("abi10").style.visibility="hidden";document.getElementById("a10").style.visibility="hidden";
			document.getElementById("a6").innerHTML = "Jungle Stalker: +1 combat strength in Jungle or Forest";
			document.getElementById("a7").innerHTML = "Poisoned Blade: +2 offensive strength";
			document.getElementById("a8").innerHTML = "Totem of Power: +1 offensive strength";
			document.getElementById("a9").innerHTML = "Armor Aura: -1 damage from attacks while in range of a Shaman";
			 cse[6] = "+1CS"
			 cse[7] = "+2OS"
			 cse[8] = "+1OS"
			 cse[9] = "-1DA"
			 cs[2] = 9;
			 cs[4] = 9;		
		}
	}  if (gu1 == "Axethrower" || gu2 == "Axethrower") {
		if (gu1 == "Axethrower") {
			document.getElementById("abi4").style.visibility="hidden";document.getElementById("a4").style.visibility="hidden";
			document.getElementById("abi5").style.visibility="hidden";document.getElementById("a5").style.visibility="hidden";
			document.getElementById("a1").innerHTML = "Twin Throw: +1 offensive strength";
			document.getElementById("a2").innerHTML = "Totem of Weakness: +1 damage from attacks";
			document.getElementById("a3").innerHTML = "Armor Aura: -1 damage from attacks while in range of a Shaman";
			 cse[1] = "+1OS"
			 cse[2] = "+1DA"
			 cse[3] = "-1DA"
			 cs[1] = 9;
			 cs[3] = 10;
		}
		if (gu2 == "Axethrower") {
			document.getElementById("abi9").style.visibility="hidden";document.getElementById("a9").style.visibility="hidden";
			document.getElementById("abi10").style.visibility="hidden";document.getElementById("a10").style.visibility="hidden";
			document.getElementById("a6").innerHTML = "Twin Throw: +1 offensive strength";
			document.getElementById("a7").innerHTML = "Totem of Weakness: +1 damage from attacks";
			document.getElementById("a8").innerHTML = "Armor Aura: -1 damage from attacks while in range of a Shaman";
			 cse[6] = "+1OS"
			 cse[7] = "+1DA"
			 cse[8] = "-1DA"
			 cs[2] = 9;
			 cs[4] = 10;
		}
	}  if (gu1 == "Shaman" || gu2 == "Shaman") {
		if (gu1 == "Shaman") {
			document.getElementById("abi1").style.visibility="hidden";document.getElementById("a1").style.visibility="hidden";
			document.getElementById("abi2").style.visibility="hidden";document.getElementById("a2").style.visibility="hidden";
			document.getElementById("abi3").style.visibility="hidden";document.getElementById("a3").style.visibility="hidden";
			document.getElementById("abi4").style.visibility="hidden";document.getElementById("a4").style.visibility="hidden";
			document.getElementById("abi5").style.visibility="hidden";document.getElementById("a5").style.visibility="hidden";
			cs[1] = 9;
			cs[3] = 10;
		}
		if (gu2 == "Shaman") {
			document.getElementById("abi6").style.visibility="hidden";document.getElementById("a6").style.visibility="hidden";
			document.getElementById("abi7").style.visibility="hidden";document.getElementById("a7").style.visibility="hidden";
			document.getElementById("abi8").style.visibility="hidden";document.getElementById("a8").style.visibility="hidden";
			document.getElementById("abi9").style.visibility="hidden";document.getElementById("a9").style.visibility="hidden";
			document.getElementById("abi10").style.visibility="hidden";document.getElementById("a10").style.visibility="hidden";
			cs[2] = 9;
			cs[4] = 10;
		}
	}  if (gu1 == "Gorillon" || gu2 == "Gorillon") {
		if (gu1 == "Gorillon") {
			document.getElementById("abi4").style.visibility="hidden";document.getElementById("a4").style.visibility="hidden";
			document.getElementById("abi5").style.visibility="hidden";document.getElementById("a5").style.visibility="hidden";
			document.getElementById("a1").innerHTML = "Spirit of Quincon: +1 combat strength versus Cities";
			document.getElementById("a2").innerHTML = "Primal Rage: +2 defensive strength";
			document.getElementById("a3").innerHTML = "Armor Aura: -1 damage from attacks while in range of a Shaman";
			 cse[1] = "+1CSvC"
			 cse[2] = "+2DS"
			 cse[3] = "-1DA"
			 cs[1] = 8;
			 cs[3] = 9;
		}
		if (gu2 == "Gorillon") {
			document.getElementById("abi9").style.visibility="hidden";document.getElementById("a9").style.visibility="hidden";
			document.getElementById("abi10").style.visibility="hidden";document.getElementById("a10").style.visibility="hidden";
			document.getElementById("a6").innerHTML = "Spirit of Quincon: +1 combat strength versus Cities";
			document.getElementById("a7").innerHTML = "Primal Rage: +2 defensive strength";
			document.getElementById("a8").innerHTML = "Armor Aura: -1 damage from attacks while in range of a Shaman";
			 cse[6] = "+1CSvC"
			 cse[7] = "+2DS"
			 cse[8] = "-1DA"
			 cs[2] = 8;
			 cs[4] = 9;
		}
	}  if (gu1 == "Defender" || gu2 == "Defender") {
		if (gu1 == "Defender") {
			document.getElementById("abi4").style.visibility="hidden";document.getElementById("a4").style.visibility="hidden";
			document.getElementById("abi5").style.visibility="hidden";document.getElementById("a5").style.visibility="hidden";
			document.getElementById("a1").innerHTML = "Wolfram Armor: +1 defensive strength";
			document.getElementById("a2").innerHTML = "Mithril Armor: -1 damage from attacks";
			document.getElementById("a3").innerHTML = "Mithril Hammers: +2 offensive strength";
			 cse[1] = "+1DS"
			 cse[2] = "-1DA"
			 cse[3] = "+2OS"
			 cs[1] = 9;
			 cs[3] = 10;
		}
		if (gu2 == "Defender") {
			document.getElementById("abi9").style.visibility="hidden";document.getElementById("a9").style.visibility="hidden";
			document.getElementById("abi10").style.visibility="hidden";document.getElementById("a10").style.visibility="hidden";
			document.getElementById("a6").innerHTML = "Wolfram Armor: +1 defensive strength";
			document.getElementById("a7").innerHTML = "Mithril Armor: -1 damage from attacks";
			document.getElementById("a8").innerHTML = "Mithril Hammers: +2 offensive strength";
			 cse[6] = "+1DS"
			 cse[7] = "-1DA"
			 cse[8] = "+2OS"
			 cs[2] = 9;
			 cs[4] = 10;
		}
	}  if (gu1 == "Sniper" || gu2 == "Sniper") {
		if (gu1 == "Sniper") {
			document.getElementById("abi4").style.visibility="hidden";document.getElementById("a4").style.visibility="hidden";
			document.getElementById("abi5").style.visibility="hidden";document.getElementById("a5").style.visibility="hidden";
			document.getElementById("a1").innerHTML = "Focus Fire: +1 combat strength";
			document.getElementById("a2").innerHTML = "High Caliber: +2 offensive strength";
			document.getElementById("a3").innerHTML = "Explosive Keg: Deals half damage to another target";
			 cse[1] = "+1CS"
			 cse[2] = "+2OS"
			 cse[3] = "-1/2"
			 cs[1] = 9;
			 cs[3] = 9;
		}
		if (gu2 == "Sniper") {
			document.getElementById("abi9").style.visibility="hidden";document.getElementById("a9").style.visibility="hidden";
			document.getElementById("abi10").style.visibility="hidden";document.getElementById("a10").style.visibility="hidden";
			document.getElementById("a6").innerHTML = "Focus Fire: +1 combat strength";
			document.getElementById("a7").innerHTML = "High Caliber: +2 offensive strength";
			document.getElementById("a8").innerHTML = "Explosive Keg: Deals half damage to another target";
			 cse[6] = "+1CS"
			 cse[7] = "+2OS"
			 cse[8] = "-1/2"
			 cs[2] = 9;
			 cs[4] = 9;
		}
	}  if (gu1 == "Tesla Gunner" || gu2 == "Tesla Gunner") {
		if (gu1 == "Tesla Gunner") {
			document.getElementById("abi4").style.visibility="hidden";document.getElementById("a4").style.visibility="hidden";
			document.getElementById("abi5").style.visibility="hidden";document.getElementById("a5").style.visibility="hidden";
			document.getElementById("a1").innerHTML = "Chain Lightning: Deals half damage to another target";
			document.getElementById("a2").innerHTML = "Supercharge: +1 offensive strength";
			document.getElementById("a3").innerHTML = "Smart Targeting: +1 offensive strength";
			 cse[1] = "-1/2"
			 cse[2] = "+1OS"
			 cse[3] = "+1OS"
			 cs[1] = 9;
			 cs[3] = 8;
		}
		if (gu2 == "Tesla Gunner") {
			document.getElementById("abi9").style.visibility="hidden";document.getElementById("a9").style.visibility="hidden";
			document.getElementById("abi10").style.visibility="hidden";document.getElementById("a10").style.visibility="hidden";
			document.getElementById("a6").innerHTML = "Chain Lightning: Deals half damage to another target";
			document.getElementById("a7").innerHTML = "Supercharge: +1 offensive strength";
			document.getElementById("a8").innerHTML = "Smart Targeting: +1 offensive strength";
			 cse[6] = "-1/2"
			 cse[7] = "+1OS"
			 cse[8] = "+1OS"
			 cs[2] = 9;
			 cs[4] = 8;
		}
	}  if (gu1 == "Battle Mech" || gu2 == "Battle Mech") {
		if (gu1 == "Battle Mech") {
			document.getElementById("abi4").style.visibility="hidden";document.getElementById("a4").style.visibility="hidden";
			document.getElementById("abi5").style.visibility="hidden";document.getElementById("a5").style.visibility="hidden";
			document.getElementById("a1").innerHTML = "Improved Ordnance: +1 offensive strength";
			document.getElementById("a2").innerHTML = "Waste Disposal: +2 defensive strength versus Melee";
			document.getElementById("a3").innerHTML = "Shock and Awe: +2 offensive strength";
			 cse[1] = "+1OS"
			 cse[2] = "+2DSvM"
			 cse[3] = "+2OS"
			 cs[1] = 9;
			 cs[3] = 8;
		}
		if (gu2 == "Battle Mech") {
			document.getElementById("abi9").style.visibility="hidden";document.getElementById("a9").style.visibility="hidden";
			document.getElementById("abi10").style.visibility="hidden";document.getElementById("a10").style.visibility="hidden";
			document.getElementById("a6").innerHTML = "Improved Ordnance: +1 offensive strength";
			document.getElementById("a7").innerHTML = "Waste Disposal: +2 defensive strength versus Melee";
			document.getElementById("a8").innerHTML = "Shock and Awe: +2 offensive strength";
			 cse[6] = "+1OS"
			 cse[7] = "+2DSvM"
			 cse[8] = "+2OS"
			 cs[2] = 9;
			 cs[4] = 8;
		}
	}  if (gu1 == "Bladesinger" || gu2 == "Bladesinger") {
		if (gu1 == "Bladesinger") {
			document.getElementById("abi4").style.visibility="hidden";document.getElementById("a4").style.visibility="hidden";
			document.getElementById("abi5").style.visibility="hidden";document.getElementById("a5").style.visibility="hidden";
			document.getElementById("a1").innerHTML = "Perfect Parry: -1 damage from attacks";
			document.getElementById("a2").innerHTML = "Blade Dance: +2 offensive strength";
			document.getElementById("a3").innerHTML = "Edge Mastery: +2 combat strength";
			 cse[1] = "-1DA"
			 cse[2] = "+2OS"
			 cse[3] = "+2CS"
			 cs[1] = 8;
			 cs[3] = 8;
		}
		if (gu2 == "Bladesinger") {
			document.getElementById("abi9").style.visibility="hidden";document.getElementById("a9").style.visibility="hidden";
			document.getElementById("abi10").style.visibility="hidden";document.getElementById("a10").style.visibility="hidden";
			document.getElementById("a6").innerHTML = "Perfect Parry: -1 damage from attacks";
			document.getElementById("a7").innerHTML = "Blade Dance: +2 offensive strength";
			document.getElementById("a8").innerHTML = "Edge Mastery: +2 combat strength";
			 cse[6] = "-1DA"
			 cse[7] = "+2OS"
			 cse[8] = "+2CS"
			 cs[2] = 8;
			 cs[4] = 8;
		}
	}  if (gu1 == "Arcane Archer" || gu2 == "Arcane Archer") {
		if (gu1 == "Arcane Archer") {
			document.getElementById("abi4").style.visibility="hidden";document.getElementById("a4").style.visibility="hidden";
			document.getElementById("abi5").style.visibility="hidden";document.getElementById("a5").style.visibility="hidden";
			document.getElementById("a1").innerHTML = "Obsidian Heads: +1 offensive strength";
			document.getElementById("a2").innerHTML = "Magicbreak Arrows: +1 offensive strength";
			document.getElementById("a3").innerHTML = "Burst Arrows: +1 damage from attacks";
			 cse[1] = "+1OS"
			 cse[2] = "+1OS"
			 cse[3] = "+1DA"
			 cs[1] = 9;
			 cs[3] = 10;
		}
		if (gu2 == "Arcane Archer") {
			document.getElementById("abi9").style.visibility="hidden";document.getElementById("a9").style.visibility="hidden";
			document.getElementById("abi10").style.visibility="hidden";document.getElementById("a10").style.visibility="hidden";
			document.getElementById("a6").innerHTML = "Obsidian Heads: +1 offensive strength";
			document.getElementById("a7").innerHTML = "Magicbreak Arrows: +1 offensive strength";
			document.getElementById("a8").innerHTML = "Burst Arrows: +1 damage from attacks";
			 cse[6] = "+1OS"
			 cse[7] = "+1OS"
			 cse[8] = "+1DA"
			 cs[2] = 9;
			 cs[4] = 10;
		}
	}  if (gu1 == "High Elven Mage" || gu2 == "High Elven Mage") {
		if (gu1 == "High Elven Mage") {
			document.getElementById("abi3").style.visibility="hidden";document.getElementById("a3").style.visibility="hidden";
			document.getElementById("abi4").style.visibility="hidden";document.getElementById("a4").style.visibility="hidden";
			document.getElementById("abi5").style.visibility="hidden";document.getElementById("a5").style.visibility="hidden";
			document.getElementById("a1").innerHTML = "Crystal Gazing: +1 defensive strength";
			document.getElementById("a2").innerHTML = "Triple Shot: +1 offensive strength";
			 cse[1] = "+1DS"
			 cse[2] = "+1OS"
			 cs[1] = 9;
			 cs[3] = 9;
		}
		if (gu2 == "High Elven Mage") {
			document.getElementById("abi8").style.visibility="hidden";document.getElementById("a8").style.visibility="hidden";
			document.getElementById("abi9").style.visibility="hidden";document.getElementById("a9").style.visibility="hidden";
			document.getElementById("abi10").style.visibility="hidden";document.getElementById("a10").style.visibility="hidden";
			document.getElementById("a6").innerHTML = "Crystal Gazing: +1 defensive strength";
			document.getElementById("a7").innerHTML = "Triple Shot: +1 offensive strength";
			 cse[6] = "+1DS"
			 cse[7] = "+1OS"
			 cs[2] = 9;
			 cs[4] = 9;
		}
	}  if (gu1 == "Bastion" || gu2 == "Bastion") {
		if (gu1 == "Bastion") {
			document.getElementById("abi4").style.visibility="hidden";document.getElementById("a4").style.visibility="hidden";
			document.getElementById("abi5").style.visibility="hidden";document.getElementById("a5").style.visibility="hidden";
			document.getElementById("a1").innerHTML = "Splinter Blade: Deals a third of the damage to another target";
			document.getElementById("a2").innerHTML = "Sharpened Stars: +1 combat strength";
			document.getElementById("a3").innerHTML = "Armor-Pierce: +1 damage from attacks";
			 cse[1] = "-1/3"
			 cse[2] = "+1CS"
			 cse[3] = "+1DA"
			 cs[1] = 10;
			 cs[3] = 10;
		}
		if (gu2 == "Bastion") {
			document.getElementById("abi9").style.visibility="hidden";document.getElementById("a9").style.visibility="hidden";
			document.getElementById("abi10").style.visibility="hidden";document.getElementById("a10").style.visibility="hidden";
			document.getElementById("a6").innerHTML = "Splinter Blade: Deals a third of the damage to another target";
			document.getElementById("a7").innerHTML = "Sharpened Stars: +1 combat strength";
			document.getElementById("a8").innerHTML = "Armor-Pierce: +1 damage from attacks";
			 cse[6] = "-1/3"
			 cse[7] = "+1CS"
			 cse[8] = "+1DA"
			 cs[2] = 10;
			 cs[4] = 10;
		}
	}  if (gu1 == "Forest Keeper" || gu2 == "Forest Keeper") {
		if (gu1 == "Forest Keeper") {
			document.getElementById("abi4").style.visibility="hidden";document.getElementById("a4").style.visibility="hidden";
			document.getElementById("abi5").style.visibility="hidden";document.getElementById("a5").style.visibility="hidden";
			document.getElementById("a1").innerHTML = "Eerie Gardener: +1 defensive strength";
			document.getElementById("a2").innerHTML = "Moon-Forged Blades: +1 combat strength";
			document.getElementById("a3").innerHTML = "Ancient Oak Spear: +2 combat strength";
			 cse[1] = "+1DS"
			 cse[2] = "+1CS"
			 cse[3] = "+2CS"
			 cs[1] = 7;
			 cs[3] = 8;

		}
		if (gu2 == "Forest Keeper") {
			document.getElementById("abi9").style.visibility="hidden";document.getElementById("a9").style.visibility="hidden";
			document.getElementById("abi10").style.visibility="hidden";document.getElementById("a10").style.visibility="hidden";
			document.getElementById("a6").innerHTML = "Eerie Gardener: +1 defensive strength";
			document.getElementById("a7").innerHTML = "Moon-Forged Blades: +1 combat strength";
			document.getElementById("a8").innerHTML = "Ancient Oak Spear: +2 combat strength";
			 cse[6] = "+1DS"
			 cse[7] = "+1CS"
			 cse[8] = "+2CS"
			 cs[2] = 7;
			 cs[4] = 8;
		}
	}  if (gu1 == "Awok" || gu2 == "Awok") {
		if (gu1 == "Awok") {
			document.getElementById("abi3").style.visibility="hidden";document.getElementById("a3").style.visibility="hidden";
			document.getElementById("abi4").style.visibility="hidden";document.getElementById("a4").style.visibility="hidden";
			document.getElementById("abi5").style.visibility="hidden";document.getElementById("a5").style.visibility="hidden";
			document.getElementById("a1").innerHTML = "Wooden Shield: +1 defensive strength";
			document.getElementById("a2").innerHTML = "Redwood Stand";
			 cse[1] = "+1DS"
			 cse[2] = "+3CS"
			 cs[1] = 6;
			 cs[3] = 7;
		}
		if (gu2 == "Awok") {
			document.getElementById("abi8").style.visibility="hidden";document.getElementById("a8").style.visibility="hidden";
			document.getElementById("abi9").style.visibility="hidden";document.getElementById("a9").style.visibility="hidden";
			document.getElementById("abi10").style.visibility="hidden";document.getElementById("a10").style.visibility="hidden";
			document.getElementById("a6").innerHTML = "Wooden Shield: +1 defensive strength";
			document.getElementById("a7").innerHTML = "Redwood Stand";
			 cse[6] = "+1DS"
			 cse[7] = "+3CS"
			 cs[2] = 6;
			 cs[4] = 7;
		}
	}  if (gu1 == "Gnome" || gu2 == "Gnome") {
		if (gu1 == "Gnome") {
			abi2.parentNode.removeChild(abi4); a2.parentNode.removeChild(a2);
			document.getElementById("abi3").style.visibility="hidden";document.getElementById("a3").style.visibility="hidden";
			document.getElementById("abi4").style.visibility="hidden";document.getElementById("a4").style.visibility="hidden";
			document.getElementById("abi5").style.visibility="hidden";document.getElementById("a5").style.visibility="hidden";
			document.getElementById("a1").innerHTML = "Poison: +2 combat strength";
			 cse[1] = "+2CS"
			 cs[1] = 9;
			 cs[3] = 8;
		}
		if (gu2 == "Gnome") {
			document.getElementById("abi7").style.visibility="hidden";document.getElementById("a7").style.visibility="hidden";
			document.getElementById("abi8").style.visibility="hidden";document.getElementById("a8").style.visibility="hidden";
			document.getElementById("abi9").style.visibility="hidden";document.getElementById("a9").style.visibility="hidden";
			document.getElementById("abi10").style.visibility="hidden";document.getElementById("a10").style.visibility="hidden";
			document.getElementById("a6").innerHTML = "Poison: +2 combat strength";
			 cse[6] = "+2CS"
			 cs[2] = 9;
			 cs[4] = 8;
		}
	}  if (gu1 == "Arch-Druid" || gu2 == "Arch-Druid") {
		if (gu1 == "Arch-Druid") {
			document.getElementById("abi5").style.visibility="hidden";document.getElementById("a5").style.visibility="hidden";
			document.getElementById("a1").innerHTML = "Earth Mastery: +1 defensive strength";
			document.getElementById("a2").innerHTML = "Stored Stones: +1 combat strength";
			document.getElementById("a3").innerHTML = "Runed Bears: +2 defensive strength";
			document.getElementById("a4").innerHTML = "Sylvan Curse: Deals half damage to another target";
			 cse[1] = "+1DS"
			 cse[2] = "+1CS"
			 cse[3] = "+2DS"
			 cse[4] = "-1/2"
			 cs[1] = 8;
			 cs[3] = 7;
		}
		if (gu2 == "Arch-Druid") {
			document.getElementById("abi10").style.visibility="hidden";document.getElementById("a10").style.visibility="hidden";
			document.getElementById("a6").innerHTML = "Earth Mastery: +1 defensive strength";
			document.getElementById("a7").innerHTML = "Stored Stones: +1 combat strength";
			document.getElementById("a8").innerHTML = "Runed Bears: +2 defensive strength";
			document.getElementById("a9").innerHTML = "Sylvan Curse: Deals half damage to another target";
			 cse[6] = "+1DS"
			 cse[7] = "+1CS"
			 cse[8] = "+2DS"
			 cse[9] = "-1/2"
			 cs[2] = 8;
			 cs[4] = 7;
		}
	}  if (gu1 == "Avenger" || gu2 == "Avenger") {
		if (gu1 == "Avenger") {
			document.getElementById("a1").innerHTML = "Blade Mail: +1 defensive strength";
			document.getElementById("a2").innerHTML = "Offensive Stance: +1 offensive strength";
			document.getElementById("a3").innerHTML = "Mounted Avenger: +1 combat strength";
			document.getElementById("a4").innerHTML = "Damage Aura";
			document.getElementById("a5").innerHTML = "Vindicator: +2 combat strength after making a kill";
			 cse[1] = "+1DS"
			 cse[2] = "+1OS"
			 cse[3] = "+1CS"
			 cse[4] = "+1OD"
			 cse[5] = "+2CS"
			 cs[1] = 5;
			 cs[3] = 7;
		}
		if (gu2 == "Avenger") {
			document.getElementById("a6").innerHTML = "Blade Mail: +1 defensive strength";
			document.getElementById("a7").innerHTML = "Offensive Stance: +1 offensive strength";
			document.getElementById("a8").innerHTML = "Mounted Avenger: +1 combat strength";
			document.getElementById("a9").innerHTML = "Damage Aura: +1 damage from attacks";
			document.getElementById("a10").innerHTML = "Vindicator: +2 combat strength after making a kill";
			 cse[6] = "+1DS"
			 cse[7] = "+1OS"
			 cse[8] = "+1CS"
			 cse[9] = "+1DA"
			 cse[10] = "+2CS"
			 cs[2] = 5;
			 cs[4] = 7;
		}
	}  if (gu1 == "Harasser" || gu2 == "Harasser") {
		if (gu1 == "Harasser") {
			document.getElementById("a1").innerHTML = "Dark Blades: +1 defensive strength";
			document.getElementById("a2").innerHTML = "Bloodletting Shot: +1 offensive strength";
			document.getElementById("a3").innerHTML = "Arrow Volley: +1 combat strength";
			document.getElementById("a4").innerHTML = "Damage Aura: +1 damage from attacks";
			document.getElementById("a5").innerHTML = "Vindicator: +2 combat strength after making a kill";
			 cse[1] = "+1DSvM"
			 cse[2] = "+1OS"
			 cse[3] = "+1CS"
			 cse[4] = "+1DA"
			 cse[5] = "+2CS"
			 cs[1] = 7;
			 cs[3] = 6;
		}
		if (gu2 == "Harasser") {
			document.getElementById("a6").innerHTML = "Dark Blades: +1 defensive strength";
			document.getElementById("a7").innerHTML = "Bloodletting Shot: +1 offensive strength";
			document.getElementById("a8").innerHTML = "Arrow Volley: +1 combat strength";
			document.getElementById("a9").innerHTML = "Damage Aura: +1 damage from attacks";
			document.getElementById("a10").innerHTML = "Vindicator: +2 combat strength after making a kill";
			 cse[6] = "+1DSvM"
			 cse[7] = "+1OS"
			 cse[8] = "+1CS"
			 cse[9] = "+1DA"
			 cse[10] = "+2CS"
			 cs[2] = 7;
			 cs[4] = 6;
		}
	}  if (gu1 == "Evoker" || gu2 == "Evoker") {
		if (gu1 == "Evoker") {
			document.getElementById("abi4").style.visibility="hidden";document.getElementById("a4").style.visibility="hidden";
			document.getElementById("abi5").style.visibility="hidden";document.getElementById("a5").style.visibility="hidden";
			document.getElementById("a1").innerHTML = "Unstable Magic: +2 offensive strength";
			document.getElementById("a2").innerHTML = "Damage Aura: +1 damage from attacks";
			document.getElementById("a3").innerHTML = "Vindicator: +2 combat strength after making a kill";
			 cse[1] = "+2OS"
			 cse[2] = "+1DA"
			 cse[3] = "+2CS"
			 cs[1] = 9;
			 cs[3] = 8;
		}
		if (gu2 == "Evoker") {
			document.getElementById("abi9").style.visibility="hidden";document.getElementById("a9").style.visibility="hidden";
			document.getElementById("abi10").style.visibility="hidden";document.getElementById("a10").style.visibility="hidden";
			document.getElementById("a6").innerHTML = "Unstable Magic: +2 offensive strength";
			document.getElementById("a7").innerHTML = "Damage Aura";
			document.getElementById("a8").innerHTML = "Vindicator: +2 combat strength after making a kill";
			 cse[6] = "+2OS"
			 cse[7] = "+1OD"
			 cse[8] = "+2CS"
			 cs[2] = 9;
			 cs[4] = 8;
		}
	}  if (gu1 == "Brute" || gu2 == "Brute") {
		if (gu1 == "Brute") {
			document.getElementById("abi3").style.visibility="hidden";document.getElementById("a3").style.visibility="hidden";
			document.getElementById("abi4").style.visibility="hidden";document.getElementById("a4").style.visibility="hidden";
			document.getElementById("abi5").style.visibility="hidden";document.getElementById("a5").style.visibility="hidden";
			document.getElementById("a1").innerHTML = "Cleaving Hooks: +1 combat strength versus Cities";
			document.getElementById("a2").innerHTML = "Vindicator: +2 combat strength after making a kill";
			 cse[1] = "+1CSvC"
			 cse[2] = "+2CS"
			 cs[1] = 7;
			 cs[3] = 8;
		}
		if (gu2 == "Brute") {
			document.getElementById("abi8").style.visibility="hidden";document.getElementById("a8").style.visibility="hidden";
			document.getElementById("abi9").style.visibility="hidden";document.getElementById("a9").style.visibility="hidden";
			document.getElementById("abi10").style.visibility="hidden";document.getElementById("a10").style.visibility="hidden";
			document.getElementById("a6").innerHTML = "Cleaving Hooks: +1 combat strength versus Cities";
			document.getElementById("a7").innerHTML = "Vindicator: +2 combat strength after making a kill";
			 cse[6] = "+1CSvC"
			 cse[7] = "+2CS"
			 cs[2] = 7;
			 cs[4] = 8;
		}
	}	if (gu1 == "City" || gu2 == "City") {
		if (gu1 == "City") {
			document.getElementById("abi1").style.visibility="hidden";document.getElementById("a1").style.visibility="hidden";
			document.getElementById("abi2").style.visibility="hidden";document.getElementById("a2").style.visibility="hidden";
			document.getElementById("abi3").style.visibility="hidden";document.getElementById("a3").style.visibility="hidden";
			document.getElementById("abi4").style.visibility="hidden";document.getElementById("a4").style.visibility="hidden";
			document.getElementById("abi5").style.visibility="hidden";document.getElementById("a5").style.visibility="hidden";
			cs[1] = 15;
			cs[3] = 15;
		}
		if (gu2 == "City") {
			document.getElementById("abi6").style.visibility="hidden";document.getElementById("a6").style.visibility="hidden";
			document.getElementById("abi7").style.visibility="hidden";document.getElementById("a7").style.visibility="hidden";
			document.getElementById("abi8").style.visibility="hidden";document.getElementById("a8").style.visibility="hidden";
			document.getElementById("abi9").style.visibility="hidden";document.getElementById("a9").style.visibility="hidden";
			document.getElementById("abi10").style.visibility="hidden";document.getElementById("a10").style.visibility="hidden";
			cs[2] = 15;
			cs[4] = 15;
		}
	}	if (gu1 == "Elven City" || gu2 == "Elven City") {
		if (gu1 == "Elven City") {
			document.getElementById("abi1").style.visibility="hidden";document.getElementById("a1").style.visibility="hidden";
			document.getElementById("abi2").style.visibility="hidden";document.getElementById("a2").style.visibility="hidden";
			document.getElementById("abi3").style.visibility="hidden";document.getElementById("a3").style.visibility="hidden";
			document.getElementById("abi4").style.visibility="hidden";document.getElementById("a4").style.visibility="hidden";
			document.getElementById("abi5").style.visibility="hidden";document.getElementById("a5").style.visibility="hidden";
			cs[1] = 15;
			cs[3] = 17;
		}
		if (gu2 == "Elven City") {
			document.getElementById("abi6").style.visibility="hidden";document.getElementById("a6").style.visibility="hidden";
			document.getElementById("abi7").style.visibility="hidden";document.getElementById("a7").style.visibility="hidden";
			document.getElementById("abi8").style.visibility="hidden";document.getElementById("a8").style.visibility="hidden";
			document.getElementById("abi9").style.visibility="hidden";document.getElementById("a9").style.visibility="hidden";
			document.getElementById("abi10").style.visibility="hidden";document.getElementById("a10").style.visibility="hidden";
			cs[2] = 15;
			cs[4] = 17;
		}
	}
	gcse = [];
	for (i = 1; i < 11; i++) {
		gcse[i] = cse[i];
	}
	gcs = [];
	gcs[1] = cs[1];
	gcs[2] = cs[2];
	gcs[3] = cs[3];
	gcs[4] = cs[4];
}

function saveAbil() {
	var s = [];
	var ue = [];
	s[1] = document.getElementById("abi1").checked;
	s[2] = document.getElementById("abi2").checked;
	s[3] = document.getElementById("abi3").checked;
	s[4] = document.getElementById("abi4").checked;
	s[5] = document.getElementById("abi5").checked;
	s[6] = document.getElementById("abi6").checked;
	s[7] = document.getElementById("abi7").checked;
	s[8] = document.getElementById("abi8").checked;
	s[9] = document.getElementById("abi9").checked;
	s[10] = document.getElementById("abi10").checked;
	for (i = 1; i < 11; i++) {
		if (s[i] == true) {
			ue[i] = gcse[i];
		}
	}
	gue = [];
	for (i = 1; i < 11; i++) {
		gue[i] = ue[i];
	}
}

function calculate() {
	var d1 = 0;
	var d2 = 0;
	for (k = 1; k < 11; k++) {
		fue = gue[k];
		if (fue != undefined) {
		fue0 = fue[0];
		fue1 = fue[1];
		fue2 = fue[2];
		fue3 = fue[3];
			if (fue2 == "C" && k < 6) {
				if (fue1 == "1") {
					gcs[1] = gcs[1] + 1;
					gcs[3] = gcs[3] + 1;
				} else if (fue1 == "2") {
					gcs[1] = gcs[1] + 2;
					gcs[3] = gcs[3] + 2;
				} else if (fue1 == "3") {
					gcs[1] = gcs[1] + 3;
					gcs[3] = gcs[3] + 3;
				} 
			} else if (fue2 == "D" && k < 6) {
				if (fue[1] == "1") {
					gcs[3] = gcs[3] + 1;
				} else if (fue1 == "2") {
					gcs[3] = gcs[3] + 2;
				} else if (fue1 == "3") {
					gcs[3] = gcs[3] + 3;
				}
			} else if (fue2 == "O" && k < 6) {
				if (fue1 == "1") {
					gcs[1] = gcs[1] + 1;
				} else if (fue1 == "2") {
					gcs[1] = gcs[1] + 2;
				} else if (fue1 == "3") {
					gcs[1] = gcs[1] + 3;
				} else if (fue1 == "4") {
					gcs[1] = gcs[1] + 4;
				}
			} 
			if (fue2 == "C" && k > 5) {
				if (fue1 == "1") {
					gcs[2] = gcs[2] + 1;
					gcs[4] = gcs[4] + 1;
				} else if (fue1 == "2") {
					gcs[2] = gcs[2] + 2;
					gcs[4] = gcs[4] + 2;
				} else if (fue1 == "3") {
					gcs[2] = gcs[2] + 3;
					gcs[4] = gcs[4] + 3;
				} 
			} else if (fue2 == "D" && k > 5) {
				if (fue1 == "1") {
					gcs[4] = gcs[4] + 1;

				} else if (fue1 == "2") {
					gcs[4] = gcs[4] + 2;
				} else if (fue1 == "3") {
					gcs[4] = gcs[4] + 3;
				}
			} else if (fue2 == "O" && k > 5) {
				if (fue1 == "1") {
					gcs[2] = gcs[2] + 1;
				} else if (fue1 == "2") {
					gcs[2] = gcs[2] + 2;
				} else if (fue1 == "3") {
					gcs[2] = gcs[2] + 3;
				} else if (fue1 == "4") {
					gcs[2] = gcs[2] + 4;
				}
			} 
		} else {
			break;
		}
	}
	if (ut1 == "Melee" && ut2 == "Mage" || ut1 == "Melee" && ut2 == "Siege") {
		gcs[1] = gcs[1] + 2;
		gcs[3] = gcs[3] + 2;
	}
	if (ut1 == "Archer" && ut2 == "Melee" || ut1 == "Melee" && ut2 == "Siege") {
		gcs[1] = gcs[1] + 2;
		gcs[3] = gcs[3] + 2;
	}
	if (ut1 == "Mage" && ut2 == "Archer" || ut1 == "Melee" && ut2 == "Siege") {
		gcs[1] = gcs[1] + 2;
		gcs[3] = gcs[3] + 2;
	}
	if (ut1 == "Siege" && ut2 == "City") {
		gcs[1] = gcs[1] + 5;
		gcs[3] = gcs[3] + 5;
	}
	if (ut1 == "Melee" && ut2 == "Archer" || ut1 == "Siege" && ut2 == "Archer") {
		gcs[2] = gcs[2] + 2;
		gcs[4] = gcs[4] + 2;
	}
	if (ut1 == "Archer" && ut2 == "Mage" || ut1 == "Siege" && ut2 == "Mage") {
		gcs[2] = gcs[2] + 2;
		gcs[4] = gcs[4] + 2;
	}
	if (ut1 == "Mage" && ut2 == "Melee" || ut1 == "Siege" && ut2 == "Melee") {
		gcs[2] = gcs[2] + 2;
		gcs[4] = gcs[4] + 2;
	}
	if (ut1 == "City" && ut2 == "Siege") {
		gcs[2] = gcs[2] + 5;
		gcs[4] = gcs[4] + 5;
	}
	//actual calcs finally
	var sd1 = gcs[1] - gcs[4];
	if (sd1 <= 1) {
		sd1 = 1;
	}
	var random1 = Math.floor(Math.random() * 50);
	random1 = random1 + 75
	var ran1 = random1 / 100;
	expo1 = sd1 * ran1
	power1 = Math.pow(1.25, expo1) 
	power1 = power1 + 2;
	for (k = 1; k < 11; k++) {
		fue = gue[k];
		if (fue != undefined) {
		fue0 = fue[0];
		fue1 = fue[1];
		fue2 = fue[2];
		fue3 = fue[3];
			if (fue3 == "A" && k < 6) {
				if (fue0 == "+") {
					power1 += 1;
				}
			}
			if (fue3 == "A" && k > 5) {
				if (fue0 == "-") {
					power1 -= 1;
				}
			}
		}
	}
	power1 = Math.round(power1);
	document.getElementById("damage1").innerHTML = "Damage dealt to " + gu2 + ": " + power1;
	gcs[2] -= 1.5
	var sd2 = gcs[2] - gcs[3];
	if (sd2 <= 1) {
		sd2 = 1;
	}
	var random2 = Math.floor(Math.random() * 50);
	random2 = random2 + 75
	var ran2 = random2 / 100;
	expo2 = sd2 * ran2
	power2 = Math.pow(1.25, expo2) 
	power2 = power2 + 2
	for (k = 1; k < 11; k++) {
		fue = gue[k];
		if (fue != undefined) {
		fue0 = fue[0];
		fue1 = fue[1];
		fue2 = fue[2];
		fue3 = fue[3];
			if (fue3 == "A") {
				if (fue0 == "-" && k < 6) {
					power2 -= 1;
				}
			}
			if (fue3 == "A") {
				if (fue0 == "+" && k > 5) {
					power2 += 1;
				}
			}
		}
	}
	power2 = Math.round(power2);
	document.getElementById("damage2").innerHTML = "Damage dealt to " + gu1 + ": " + power2;
	//fort calcs
	gcs[2] = gcs[2] + 3
	gcs[4] = gcs[4] + 3
	if (ff1 == "Aredhel Elves") {
		gcs[1] = gcs[1] + 2;
	}
	if (ff2 == "Aredhel Elves") {
		gcs[3] = gcs[3] + 2;
	}
	if (ut1 == "City") {
	} else {
	var sd1 = gcs[1] - gcs[4];
	if (sd1 <= 1) {
		sd1 = 1;
	}
	var random1 = Math.floor(Math.random() * 50);
	random1 = random1 + 75
	var ran1 = random1 / 100;
	expo1 = sd1 * ran1
	power1 = Math.pow(1.25, expo1) 
	power1 = power1 + 2;
	for (k = 1; k < 11; k++) {
		fue = gue[k];
		if (fue != undefined) {
		fue0 = fue[0];
		fue1 = fue[1];
		fue2 = fue[2];
		fue3 = fue[3];
			if (fue3 == "A" && k < 6) {
				if (fue0 == "+") {
					power1 += 1;
				}
			}
			if (fue3 == "A" && k > 5) {
				if (fue0 == "-") {
					power1 -= 1;
				}
			}
		}
	}
	power1 = Math.round(power1);
	document.getElementById("fort1").innerHTML = "Damage dealt to " + gu2 + " while " + gu2 + " is in a fort: " + power1;
	}
	if (ut2 == "City") {
	} else {
	gcs[2] -= 1.5
	var sd2 = gcs[2] - gcs[3];
	if (sd2 <= 1) {
		sd2 = 1;
	}
	var random2 = Math.floor(Math.random() * 50);
	random2 = random2 + 75
	var ran2 = random2 / 100;
	expo2 = sd2 * ran2
	power2 = Math.pow(1.25, expo2) 
	power2 = power2 + 2
	for (k = 1; k < 11; k++) {
		fue = gue[k];
		if (fue != undefined) {
		fue0 = fue[0];
		fue1 = fue[1];
		fue2 = fue[2];
		fue3 = fue[3];
			if (fue3 == "A") {
				if (fue0 == "-" && k < 6) {
					power2 -= 1;
				}
			}
			if (fue3 == "A") {
				if (fue0 == "+" && k > 5) {
					power2 += 1;
				}
			}
		}
	}
	}
	power2 = Math.round(power2);
	document.getElementById("fort2").innerHTML = "Damage dealt to " + gu1 + " while " + gu1 + " is in a fort: " + power2;
	for (k = 1; k < 11; k++) {
		fue = gue[k];
		if (fue != undefined) {
		fue0 = fue[0];
		fue1 = fue[1];
		fue2 = fue[2];
		fue3 = fue[3];
			if (fue2 == "/") {
				if (fue3 == "2" && k < 6) {
					power3 = power1 / 2;
				}
				if (fue3 == "3" && k < 6) {
					power3 = power1 / 3;
				}
				document.getElementById("spread").innerHTML = "Damage dealt to another target: " + power3;
			}
		}
	}
}