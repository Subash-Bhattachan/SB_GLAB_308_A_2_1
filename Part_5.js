
class Character {
  static MAX_HEALTH = 100;
  constructor (name) {
    this.name = name;
    this.health = Character.MAX_HEALTH; // Using the static property
    this.inventory = [];
    
  }

// adding roll method to the Character class
roll (mod = 0) {
  const result = Math.floor(Math.random() * 20) + 1 + mod;
  console.log(`${this.name} rolled a ${result}.`)

}

healthSuffer(amount) {
  this.health = Math.max(this.health - amount, 0);
  console.log(`${this.name} suffered ${amount} damage. So far the cuuent health of ${this.name} is ${this.health}`);
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
  static ROLES = ["Fighter", "Healer", "Wizard", "Flash", "Street Fighter"];
  constructor (name, role) {
    super(name);

    // to check if the given role is valid enough
    if(!Adventurer.ROLES.includes(role)) {
      throw new Error(`The role entered i.e. ${role} is not valid and does not belong to ${Adventurer.ROLES.join(", ")}.`);
    }



    // Adventurers have specialized roles.
    this.role = role;
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

  }





// to create the several objects of a class that have one or more shared property values
  class AdventurerFactory {  
    constructor (role) {
      this.role = role;
      this.adventurers = [];
    }
    generate (name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
    }
    findByIndex (index) {
      return this.adventurers[index];
    }
    findByName (name) {
      return this.adventurers.find((a) => a.name === name);
    }
  }
  
  const healers = new AdventurerFactory("Healer");
  const robin = healers.generate("Robin");

console.log(healers);

console.log(robin);  

// trying to create another character names Tutu with the role of Flash
const flashes = new AdventurerFactory("Flash");
const tutu = flashes.generate("Tutu");
console.log(flashes);



