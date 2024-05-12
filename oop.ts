#! /usr/bin/env node

import inquirer from "inquirer";


  class Person {
    name: string;
    age: number;
    personality: string;
  
    constructor(name: string, age: number, personality: string) {
      this.name = name;
      this.age = age;
      this.personality = personality;
    }
  
    async getPersonality() {
      const answers = await inquirer.prompt([
        {
          type: 'input',
          name: 'name',
          message: 'ENTER YOUR NAME'
        },
        {
          type: 'input',
          name: 'age',
          message: 'ENTER YOUR AGE'
        },
        {
          type: 'list',
          name: 'personality',
          message: 'SELECT YOUR PERSONALITY',
          choices: ['INTROVERT', 'EXTROVERT', 'AMBIVERT', 'UNKNOWN']
        }
       ]);
  
      if (answers.personality === 'UNKNOWN') {
        const preference = await inquirer.prompt([
          {
            type: 'list',
            name: 'preference',
            message: 'WHAT DO U PREFER?',
            choices: ['WATCH ANIME/MOVIES/PLAY GAMES', 'GO OUT WITH FRIENDS', 'MIX OF BOTH']
          }
        ]);
  
        if (preference.preference === 'WATCH ANIME/MOVIES/PLAY GAME') {
          this.personality = 'INTROVERT';
        } else if (preference.preference === 'GO OUT WITH FRIENDS') {
          this.personality = 'EXTROVERT';
        } else {
          this.personality = 'AMBIVERT';
        }
      } else {
        this.personality = answers.personality;
      }

       
  
      this.name = answers.name;
      this.age = parseInt(answers.age);
  
      return this;
    }
  
    printPersonality() {
      console.log(`HEY, ${this.name}! YOUR AGE IS ${this.age} AND YOU ARE AN ${this.personality}.`);
    }
  }
  
  (async () => {
    const person = new Person('', 0, '');
    await person.getPersonality();
    person.printPersonality();
  })();