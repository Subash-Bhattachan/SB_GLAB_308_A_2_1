class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }

// adding roll method to the Character class
roll (mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`)

  }
}



class Adventurer extends Character {
    constructor (name, role) {
      super(name);
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
        console.log(`$(this.name) needs to rejuvenate and regains health. Current health status: ${this.health}`);
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
        console.log(`${this.name} can get the training level and increarse the faithfulness level to ${this.faithfulness}`);
    }

  
    }


// changing the declaration of Robin and the companions to use the new Adventure and Companion classes
// for adventurer
const robin = new Adventurer("Robin", "Leader");
console.log(robin)

// for companion
const dodo = new Companion('Dodo', 5, 0);
console.log(dodo);


robin.gainSkill(50);
robin.scout();
dodo.providesHelp(robin);



robin.gainSkill(120); // Will level up Robin if enough skill is gained
robin.rejuvenate();   // Regain health
dodo.providesHelp(robin); // Dodo helps Robin
dodo.getTraining(2); // Increase Dodo's faithfulness

