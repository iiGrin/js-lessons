"use strict";

let numberOfFilms;

function start() {
	numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", "");
	while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
		numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели ?", "");
	}
}

start();

const personalMoveDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	private: false,
};

function rememberMyFilms() {
	for (let i = 0; i < 2; i++) {
		const lastFilm = prompt("Один их последних просмотренных фильмов ?", "").trim(),
			lastFilmRating = +prompt("На сколько оцените его ?", "");

		if (
			lastFilm != null &&
			lastFilmRating != null &&
			lastFilm != "" &&
			lastFilmRating != "" &&
			lastFilm.length < 50
		) {

			personalMoveDB.movies[lastFilm] = lastFilmRating;
			console.log("done");
		} else {
			console.log("error");
			i--;
		}
	}
}

rememberMyFilms();


function detectPersonalLevel() {
	if (personalMoveDB.count < 10) {
		console.log("мало");
	} else if (personalMoveDB.count >= 10 && personalMoveDB.count < 30) {
		console.log("средне");
	} else if (personalMoveDB.count >= 30) {
		console.log("киноман");
	} else {
		console.log("error");
	}
}

detectPersonalLevel();


function showMyDB(hidden) {
	if (personalMoveDB.private === true) {
		return;
	} else {
		console.log(personalMoveDB);
	}
}

showMyDB(personalMoveDB.private);

function writeYourGenres() {
	for (let i = 1; i <= 3; i++) {

		personalMoveDB.genres[i - 1] = +prompt(`Ваш любимы жанр под номером ${i}`, "");;
	}
}

writeYourGenres();

