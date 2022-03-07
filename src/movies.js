

// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?

function getAllDirectors(arrayOfMovies) {
  const allDirectors = arrayOfMovies.map((movie)=>{
    return movie.director
  });
  return allDirectors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
// return number of drama movies from Steven Spielberg

function howManyMovies(movieArray) {
  const stevenSpielberg = movieArray.filter((drama)=>{
   return (drama.director === "Steven Spielberg" && drama.genre.includes("Drama"))
  });
  return stevenSpielberg.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
//1. Get score value out of array of objects
function scoresAverage(array) {
  const average = array.reduce((acc, val)=> acc + val.score, 0);
  const averageScore = Math.round((average / array.length)*100) / 100;
  return averageScore
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  const dramaGenre = array.filter(movie =>{
    return movie.genre.includes("Drama");
  });
  return dramaGenre
  }

 

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
// nach aufsteigendem Filmjahr sortieren, 
function orderByYear(movie) {
  const sortByYear = movie.sort((firstMovie,secondMovie)=> {
    if (firstMovie.year > secondMovie.year){
      return 1
    } else if (firstMovie.year < secondMovie.year){
      return -1
    } else {
      return firstMovie.title.localeCompare("secondMovie.title")
    }
  });
    return sortByYear
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically() {}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
