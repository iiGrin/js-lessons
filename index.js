"use strict";
const personalMoveDB = {
	count: 0,
	movies: {},
	actors: {},
	genres: [],
	private: true,
	start: function() {
		personalMoveDB.count = +prompt("Сколько фильмов вы уже посмотрели ?", "");
		while (personalMoveDB.count == "" || personalMoveDB.count == null || isNaN(personalMoveDB.count)) {
			personalMoveDB.count = +prompt("Сколько фильмов вы уже посмотрели ?", "");
		}
	},
	detectPersonalLevel: function() {
		if (personalMoveDB.count < 10) {
			console.log("мало");
		} else if (personalMoveDB.count >= 10 && personalMoveDB.count < 30) {
			console.log("средне");
		} else if (personalMoveDB.count >= 30) {
			console.log("киноман");
		} else {
			console.log("error");
		}
	},
	rememberMyFilms: function() {
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
	},
	toggleVisibleMyDB: function() {
		if (personalMoveDB.private) {
			personalMoveDB.private = false;
		} else {
			personalMoveDB.private = true;
		}
	},
	showMyDB: function(hidden) {
		if (hidden) {
			console.log("true");
		} else {
			console.log(personalMoveDB);
		}
	},
	writeYourGenres: function() {
		for (let i = 1; i <= 3; i++) {
			let genre = prompt(`Ваш любимы жанр под номером ${i}`);
			if (genre === "" || genre == null) {
				console.log("Вы ввели некорректные данные");
				i--;
			} else {
				personalMoveDB.genres[i - 1] = genre.toLowerCase();
				personalMoveDB.genres.sort();
			}
		}
	
		personalMoveDB.genres.forEach((item, i) => {
			console.log(`Любимый жанр ${i + 1} - это ${item}`)
		});
	},
};


personalMoveDB.rememberMyFilms();
personalMoveDB.detectPersonalLevel();
personalMoveDB.showMyDB();
personalMoveDB.writeYourGenres();

