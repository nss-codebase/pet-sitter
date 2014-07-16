'use strict';

function Pet(name, age, gender, species){
  this.name    = name;
  this.age     = parseInt(age);
  this.gender  = gender;
  this.species = species;

  this.health = Math.floor(Math.random() * 91) + 10;
  this.energy = Math.floor(Math.random() * 91) + 10;
  this.full   = Math.floor(Math.random() * 91) + 10;
}

module.exports = Pet;

