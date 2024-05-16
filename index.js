const numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", "");
document.getElementById('count').innerHTML = numberOfFilms;


const personalMoveDB = {
    "count": numberOfFilms,
    "movies": {},
    "actors": {},
    "genres": [],
    "private": false
};

const lastFilm = prompt("Один их последних просмотренных фильмов ?", ""),
      lastFilmRating = +prompt("На сколько оцените его ?", "");

document.getElementById('last_film').innerHTML = lastFilm;

personalMoveDB.movies[lastFilm] = lastFilmRating;

document.getElementById('rating').innerHTML = personalMoveDB.movies[lastFilm];



console.log(personalMoveDB);