class Character {
    static MAX_HEALTH = 100;
    constructor (name, role) {
      this.name = name;
      this.role = role;
      this.health = Character.MAX_HEALTH; // Using the static property
            this.inventory = [];
      
    }

// adding roll method to the Character class
roll (mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
    return result;

  }

    healthSuffer(amount) {
    this.health = Math.max(this.health - amount, 0);
    console.log(`${this.name} suffered ${amount} damage. So far, the current health of ${this.name} is ${this.health}!`);
}


addToInventory(item) {
this.inventory.push(item);
console.log(`${this.name} added ${item} to the inventory.`);

}

showInventory() {
  
  console.log(`${this.name} inventory contains these many items: ${this.inventory}`);
  
}

}


class Adventurer extends Character {
    static ROLES = ["Fighter", "Healer", "Wizard", "Flash", "Street Fighter", "Dragon", "Orc", "Elf", "Vampire"];
    constructor (name, role) {
      
     

      // to check if the given role is valid enough
      if(!Adventurer.ROLES.includes(role)) {
        throw new Error(`The role entered i.e. ${role} is not valid and does not belong to ${Adventurer.ROLES.join(", ")}.`);
      }

      super(name, role); // default health is 100

      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
      this.level = 1;
      this.skill = 0
      //super(health);
    }
    
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }


    // creating an additional method called duel() for Adventure class 
    duel(competitor) {
      
       while (this.health > 50 && competitor.health > 50 ) {
        const roll1 = this.roll();
        const roll2 = competitor.roll();

        if (roll1 > roll2) {
          competitor.health -= 1;
        }
        else if (roll2 > roll1) {
          this.health -= 1;
        }
        console.log(`${this.name}, Roll: ${roll1}, Health: ${this.health}`);
        console.log(`${competitor.name}, Roll: ${roll2}, Health: ${competitor.health}`);      
       }

       
      if (this.health > 50) {
        console.log(`${this.name} is the winner.`);
      }
      else {
        console.log(`${competitor.name} is the winner.`);
      }
      
      };

    levelChange() {
        this.level++;
        console.log(`${this.name} has moved to the level ${this.level}`);

    };

    gainSkill(points) {
        this.skill += points;
        console.log(`${this.name} has gained ${points} skill(s), Total numbers of skills: ${this.skill}`);

        if(this.skill >= this.level * 100) {
            this.levelChange();
        }

    };

    rejuvenate() {
        this.health = Math.min(this.health + 20, 100);
        console.log(`${this.name} needs to rejuvenate and regains health. Current health status: ${this.health}`);
    }

  }

// for Companion
class Companion extends Character {
    constructor (name, skills, faithfulness ) {
        super(name);
        this.skills = skills;
        this.faithfulness = faithfulness;  

    }
 
    providesHelp(target) {
        
        console.log(`${this.name} can provide help to ${target.name} in war times.`);
    };


    getTraining(score) {
        this.faithfulness += score;
        console.log(`${this.name} can get the training level and increase the faithfulness level to ${this.faithfulness}`);
    }

    assist(target) {
      if (this.skills.includes("Healing")) {
        let healAmount = 5;
        target.health = Math.min(target.health + healAmount, target.maxHealth);
        console.log(`${this.name} heals ${target.name} with ${healAmount} health`);
      }

      if(this.skills.includes("Strength")) {
        const strength = 4;
        target.strength += strength;
        console.log(`${this.name} helps ${target.name}'s strength with ${strength}.`);
    }
  }
 }


// now testing the duel method
 const robin = new Adventurer("Robin", "Fighter");
// console.log(robin)

 const gora = new Adventurer("Gora", "Flash");
// console.log(gora);

robin.duel(gora);

console.log("\n====================================\n");



// Now experimenting with some ideas

class Fighter extends Adventurer {
  constructor(name) {
    super(name, "Fighter");
    this.strength = 10;
    this.defense = 4;
  }

  attack(competitor) {
    const damage = this.roll(this.strength);
    competitor.healthSuffer(damage);

  }

  defend() {
    this.defense += 1;
    console.log(`${this.name} is defending with defense ${this.defense}.`)
  }


}


class Healer extends Adventurer {
  constructor(name) {
      super(name, "Healer");
      this.healingPower = 5; 
  }

  heal(target) {
      const healAmount = this.roll(this.healingPower);
      target.health = Math.min(target.health + healAmount, Character.MAX_HEALTH);
      console.log(`${this.name} heals ${target.name} for ${healAmount} health!`);
  }
}

class Wizard extends Adventurer {
  constructor(name) {
      super(name, "Wizard");
      this.power = 50;
      this.spell = 10; 
  }

  castSpell(target) {
      
      if (this.power >= 5) {
        const damage = this.roll(this.spell);
        target.healthSuffer(damage);
        this.power -=3;
        console.log(`${this.name} can cast a spell on ${target.name} for ${damage} damage.`);}
        else {
          console.log(`${this.name} does not have enough power to cast a spell.`)
        }

      }
  }



const acro = new Fighter("Acro");
const laamto = new Fighter("Laamto");
const elran = new Healer("Elran");
const gionai = new Wizard("Gionai");
const shaltin = new Companion("Shaltin", ["Speed", "Strength"], 100);

// Simulating actions
acro.attack(laamto);
laamto.showInventory();

 elran.heal(laamto);
laamto.showInventory();
elran.showInventory();

 gionai.castSpell(acro);

shaltin.assist(acro);

acro.defend(shaltin);

acro.attack(laamto);


// now creating a variety of characters with a variety of methods

class Dragon extends Adventurer {
    constructor(name) {
        super(name, "Dragon");
        this.dragonPower = 5; 
        this.health = 50;
        
    }
  
    scare(target) {
        const scareCapacity = this.roll(this.dragonPower);
        target.health = Math.min(target.health + healAmount, Character.MAX_HEALTH);
        console.log(`${this.name} can scare ${target.name} with ${scareCapacity} scaring capacity!`);
    }

    breatheFire() {
        console.log(`${this.name} can breathes terrifying fire from its mouth!`)
    }

    showHealth() {
      console.log(`${this.name} has ${this.health} health.`);
  }
  }

  class Orc extends Character {
    constructor (name) {
        super(name, "Flash", 100)
        this.uglyScale = 50;
        this.health = 30;

    }
    lookugly() {
        console.log(`${this.name} can look ugly with a scale of ${uglyScale}.`)
    }

    showHealth() {
      console.log(`${this.name} has ${this.health} health.`);
  }

  }


  class Elf extends Adventurer {
    constructor(name) {
        super(name, "Elf", 85);
            this.runningSpeed = 15;
            this.health = 40;

    }
    runFasterthan(target) {
        const speed = this.roll(this.runningSpeed);
        console.log(`${this.name} can run at a speed of ${speed} to capture ${target.name}`)
    }

    showHealth() {
      console.log(`${this.name} has ${this.health} health.`);
  }


  }// creating class for inventory

  class Item {
    constructor (name, type, value) {
        this.name = name;
        this.type = type;
        this.value = value;
    }
}
  

  class Inventory {
    constructor() {
        this.items = [];
        this.inventory = [];
    }

    addItem(item) {
        this.items.push(item);
        console.log(`${item.name} is added to the inventory.`);
        
        }
        
        removeItem(itemName) {
          const index = this.items.findIndex(item => item.name === itemName)

          if (index != 1) {
            const [removedItem] = this.items.splice(index, 1);

          console.log(`${removedItem.name} is removed from the inventory.`);
          }
          else {
            console.log(`Item ${itemName} is not present in the inventory.`);

          }
        
        }

        searchItem() {
            const foundItem = this.items.find(item => item.name === itemName)
  
            if (foundItem) {
             
  
            console.log(`${foundItem} is present in the inventory.`);
            }
            else {
              console.log(`Item ${foundItem} is not present in the inventory.`);
  
            }
          
          }

          listItems() {
            console.log("Inventory items:");
            this.items.forEach(item => {
              console.log(`- ${item.name} (${item.type}): ${item.value}`)
          });
        }



    }

  
///////////////////////////////////////

console.log("\n=== Creating Adventures ===");
const arato = new Fighter("Arato");
const lendos = new Elf("Lendos");
const elantis = new Healer("Elantis");
const gino = new Wizard("Gino");
const shanta = new Companion("Shanta", ["Healing", "Strength"], 95);

// Create Creatures
const smooth = new Dragon("Smooth");
const orcWarrior = new Orc("Grosatam");

// Create Inventory
console.log("\n=== Creating inventory ===");
const aratoInventory = new Inventory();
const healingPower = new Item("Healing Power", "healing", 38);
const arrow = new Item("Poison Arrow", "weapon", 20);

// Add items to inventory
console.log("\n=== Adding/ removing items to inventory ===");
aratoInventory.addItem(healingPower);
aratoInventory.addItem(arrow);
aratoInventory.listItems();
aratoInventory.removeItem(arrow);
aratoInventory.listItems();

// Interactions
console.log("\n=== Adventure starts here! ===");

// Fight between characters
arato.attack(orcWarrior);
lendos.runFasterthan(orcWarrior);
elantis.heal(arato);
shanta.assist(arato);

// between smooth and gino
smooth.breatheFire();
gino.castSpell(smooth);

// Check health status
console.log("\n=== Checking health status ===");
lendos.showHealth();
orcWarrior.showHealth();
smooth.showHealth();
