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
      this.skill - 0
      super(health);


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
            this.leveChange();
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








    // Companions have the ability to scout ahead of them.

      levelChange() {
          this.level++;
          console.log(`${this.name} has moved to the level ${this.level}`);
  
      };
  
      gainSkill(points) {
          this.skill += points;
          console.log(`${this.name} has gained ${points} skill(s), Total numbers of skills: ${this.skill}`);
  
          if(this.skill >= this.level * 100) {
              this.leveChange();
          }
  
      };
  
      rejuvenate() {
          this.health = Math.min(this.health + 20, 100);
          console.log(`$(this.name) needs to rejuvenate and regains health. Current health status: ${this.health}`);
      }
  
    }










// class Animal {
//     constructor(name) {
//       this.name = name;
//     }
//   }
  
//   class Dog extends Animal {
//     constructor(name, breed) {
//       super(name); // Call the Animal constructor to set the name
//       this.breed = breed;
//     }
//   }
  
//   const myDog = new Dog("Buddy", "Golden Retriever");
//   console.log(myDog.name); // Output: "Buddy"
//   console.log(myDog.breed); // Output: "Golden Retriever" 