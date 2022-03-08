// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(arrayOfMovies) {
  const mappedArray = arrayOfMovies.map((movie) => {
    return movie.director;
  });
  return mappedArray;
};

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
  const filteredArray = array.filter((movies) => {
    return (movies.director === 'Steven Spielberg' && movies.genre.includes('Drama'));
  });
  return filteredArray.length;
};

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
  if(!moviesArray.length) {
    return 0;
  }
  const sumScores = moviesArray.reduce((acc, movie) => {
    if(!movie.score){
      return acc;
    }
    return acc + movie.score;
  }, 0);
  const scoresAverage = sumScores / moviesArray.length; 
  return Number(scoresAverage.toFixed(2));
};

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(mArray) {
  const dramaArray = mArray.filter((movies) => {
    return movies.genre.includes('Drama');
  });

return scoresAverage(dramaArray);
};

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(mArray) {
  let moviesByYear = [];
  const sortedByYear = mArray.sort((a, b) => {
    if (a.year > b.year){
       return 1
      }
     if (a.year < b.year) {
       return -1
     }
     else{
      if (a.title > b.title){
        return 1
      }
       if (a.title < b.title) {
         return -1
       }
     };
    });
    sortedByYear.forEach((movie) =>{
      moviesByYear.push(movie);
    });
    return moviesByYear;
};

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(mArray) {
  let newArray = JSON.parse(JSON.stringify(mArray));
  let titlesByName = [];
  
  const sortedName = newArray.sort((a, b) => {
    if (a.title > b.title){
      return 1
    }
     if (a.title < b.title) {
       return -1
     }
    });
    sortedName.forEach((movie) =>{
      titlesByName.push(movie.title);
    });
   
    let firstTwenty = titlesByName.slice(0, 20); 
    if(titlesByName.length < 20){
      return titlesByName;
    }else{
      return firstTwenty;
    };                
  };

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
