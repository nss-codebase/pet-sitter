/* jshint expr:true */
/* global describe, it */

'use strict';

var expect = require('chai').expect;
var Pet = require('../../app/models/pet');

describe('Pet', function(){
  describe('constructor', function(){
    it('should create a new Pet', function(){
      var pet = new Pet();
      expect(pet).to.be.ok;
      expect(pet).to.be.instanceof(Pet);
    });

    it('should create a new Pet with arguments', function(){
      var pet = new Pet('fluffy', 3, 'female', 'lizard');
      expect(pet.name).to.equal('fluffy');
      expect(pet.age).to.equal(3);
      expect(pet.gender).to.equal('female');
      expect(pet.species).to.equal('lizard');

      expect(pet.health).to.be.within(10, 100);
      expect(pet.energy).to.be.within(10, 100);
      expect(pet.full).to.be.within(10, 100);
    });
  });

  describe('#walk', function(){
    it('should increase health but decrease energy and full', function(){
      var pet = new Pet('fluffy', 3, 'female', 'lizard');
      pet.health = 90;
      pet.energy = 30;
      pet.full   = 20;

      pet.walk();

      expect(pet.health).to.be.within(91,93);
      expect(pet.energy).to.be.within(26,28);
      expect(pet.full).to.be.within(15,17);
    });
  });

});

