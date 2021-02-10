console.log('Hello');
let numberOfFilms;
function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms === null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцение его?', '');
        if (a !== null && a.length < 50 && b !== null && a !== '' && b !== '') {
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

rememberMyFilms();


function detectPersonalLevel (){
    if (personalMovieDB.count < 10) {
        console.log('Это мало');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Это средний показатель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Отлично! Вы киноман!');
    }
}

detectPersonalLevel ();

function showMyDB (hidden) {
if (!hidden) {
    console.log(personalMovieDB);
}

}
detectPersonalLevel ();

function writeYouGenres() { 
    for (let i = 1; i <=3; i++) {
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером${i}`);
    }
}

writeYouGenres ();


console.log(personalMovieDB);