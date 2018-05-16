const assert = require('assert');
const Cinema = require('../models/cinema.js');
const Film = require('../models/film.js');

describe('Cinema', function () {

  beforeEach(function () {
    moonlight = new Film('Moonlight', 'drama', 2016, 111);
    bladeRunner = new Film('Blade Runner 2049', 'sci-fi', 2017, 164);
    dunkirk = new Film('Dunkirk', 'history', 2017, 96);
    blackPanther = new Film('Black Panther', 'action', 2018, 134);
    trainspotting = new Film('T2 Trainspotting', 'drama', 2017, 117);

    films = [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting];
    cinema = new Cinema(films);
  });

  it('should have a collection of films', function () {
    const actual = cinema.films;
    assert.deepStrictEqual(actual, films);
  });

  it('should be able to get a list of film titles', function () {
    const actual = cinema.films.title;
    assert.deepStrictEqual(actual, films.title);
  });

  it('should be able to find a film by title', function (){
    const actual = cinema.findByTitle('Dunkirk');
    assert.deepStrictEqual(actual, [dunkirk])
  });

  it('should be able to filter films by genre', function (){
    const actual = cinema.filteredByGenre('drama');
    assert.deepStrictEqual(actual, [moonlight, trainspotting]);
  });

  it('should be able to check whether there are some films from a particular year', function (){
    const actual = cinema.filteredByYear(2017);
    assert.deepStrictEqual(actual, [bladeRunner, dunkirk, trainspotting]);
  });

  it('should be able to check whether there are no films from a particular year', function (){
    const actual = cinema.filteredByYear(2020);
    assert.deepStrictEqual(actual, []);
  });

  it('should be able to check whether all films are over a particular length', function (){
    const actual = cinema.filmsAreOverLength(90);
    assert.deepStrictEqual(actual, [moonlight, bladeRunner, dunkirk, blackPanther, trainspotting]);
  });


  it('should be able to calculate total running time of all films', function () {
    const actual = cinema.sumOfRunningTime();
    assert.deepStrictEqual(actual, 622);
  });

});

module.exports = Cinema;
