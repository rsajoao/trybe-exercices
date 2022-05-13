const mage = {
  healthPoints: 130,
  intelligence: 45,
  mana: 125,
  damage: undefined,
};

const warrior = {
  healthPoints: 200,
  strength: 30,
  weaponDmg: 2,
  damage: undefined,
};

const dragon = {
  healthPoints: 350,
  strength: 50,
  damage: undefined,
};

const battleMembers = { mage, warrior, dragon };
console.log(battleMembers);

const dragonDamage = (minDamage, maxDamage) => {
  const rateOfDamage = maxDamage - minDamage + 1;
  return minDamage + Math.floor(Math.random() * rateOfDamage);
}

const warriorDamage = (minDamage, maxDamage) => {
  const rateOfDamage = maxDamage - minDamage + 1;
  return minDamage + Math.floor(Math.random() * rateOfDamage);
}

const mageDamage = (minDamage, mana) => {
  if (mana < 15) {
    return {
      dmg: 0,
      mana_spent: 0,
    } 
  } else {
    const rateOfDamage = minDamage + 1;
    const mageDmg = minDamage + Math.floor(Math.random() * rateOfDamage);
    const manaSpent = 15;
    return {
      dmg: mageDmg,
      mana_spent: manaSpent,
    }
  }
}

const gameActions = {
  warriorTurn: (dmgFunction) => {
    const warriorDmg = dmgFunction(warrior['strength'], warrior['strength'] + warrior['weaponDmg']);
    dragon['healthPoints'] -= warriorDmg;
    warrior['damage'] = warriorDmg;
  },

  mageTurn: (dmgFunction) => {
    const mageObject = dmgFunction(mage['intelligence'], mage['mana']);
    const mageDmg = mageObject['dmg'];
    const mageManaSpent = mageObject['mana_spent'];
    dragon['healthPoints'] -= mageDmg;
    mage['mana'] -= mageManaSpent;
    mage['damage'] = mageDmg
  },

  dragonTurn: (dmgFunction) => {
    const dragonDmg = dmgFunction(15, dragon['strength']);
    warrior['healthPoints'] -= dragonDmg;
    mage['healthPoints'] -= dragonDmg;
    dragon['damage'] = dragonDmg;
  },

  turno: () => {
    gameActions.warriorTurn(warriorDamage);
    gameActions.mageTurn(mageDamage);
    gameActions.dragonTurn(dragonDamage);
    console.log(battleMembers);
  }
}

gameActions.turno();