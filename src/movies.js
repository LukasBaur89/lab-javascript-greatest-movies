

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

function scoresAverage(array){
  if (array.length == 0){
    return 0
  }
  const average = array.reduce((acc, val)=> {
    if(!val.score){
      return acc
    }
    return acc + val.score
  }, 0);
  const averageScore = Math.round((average / array.length)*100) / 100;
  return averageScore
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(array) {
  const dramaGenre = array.filter(movie =>{
    return movie.genre.includes("Drama");
  });
  return scoresAverage(dramaGenre)
  }

 

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

function orderByYear(movie) {
  const copiedArray = [...movie]
  const sortByYear = copiedArray.sort((firstMovie,secondMovie)=> {
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
function orderAlphabetically(movie) { 
  const movies = movie.sort((firstMovie, secondMovie)=>{
    return firstMovie.localeCompare(secondMovie)
  })
  const slicedTitles = movie.slice(0,20)
  if (movie.length > 20){
    return slicedTitles
  } else if (movie.length < 20){
    return movie
  } else {
    return 0
  }
  return movie
}

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
