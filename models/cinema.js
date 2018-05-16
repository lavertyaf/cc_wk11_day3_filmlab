const Cinema = function (films) {
  this.films = films;
};

// Cinema.prototype.findByTitle = function (title) {
//   const foundFilm = [];
//
//   for (const film of this.films) {
//     if (film.title === title) {
//       foundFilm.push(film)
//     };
//   };
//   return foundFilm;
// };

Cinema.prototype.findByTitle = function (filmTitle){
   return this.films.filter(film => film.title === filmTitle);
};

Cinema.prototype.filteredByGenre = function(filmGenre){
  return this.films.filter(film => film.genre === filmGenre);
};

Cinema.prototype.filteredByYear = function(filmYear){
  return this.films.filter(film => film.year === filmYear);
};

Cinema.prototype.filmsAreOverLength = function(filmLength){
  return this.films.filter(film => film.length > filmLength);
}

Cinema.prototype.sumOfRunningTime = function (){
  let totalRunningTime = films.reduce((total, film) => {
    return  total + film.length;}, 0)
  return totalRunningTime;
}


//
// const sumElements = function (numbersArray){
//   let grandTotal = numbersArray.reduce((total, number) => {
//     return total + number;
//   }, 0);
//   return grandTotal;
// };
// const result = sumElements(numbers);
// console.log(result);




// const getEvens = function (numbersArray){
//   let evens = numbersArray.filter(number => number % 2 === 0);
//   return evens;
// };
// const result = getEvens(numbers);
// console.log(result);


module.exports = Cinema;
