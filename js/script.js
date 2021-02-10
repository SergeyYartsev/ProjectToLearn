console.log('Hello');
const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
count: numberOfFilms,
movies: {},
actors: {},
genres: [],
privat: false
};

   

for(let i = 0; i < 2; i++){
    const a = prompt('Один из последних просмотренных фильмов?', ''), 
          b = prompt('На сколько оцение его?', '');
if(a !== null && a.length < 50 && b !== null && a!== '' && b !== ''){
    personalMovieDB.movies[a] = b;
} else {
    i--;
}   
}if (personalMovieDB.count < 10){
console.log('Это мало');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('Это средний показатель');   
} else if (personalMovieDB.count >= 30){
    console.log('Отлично! Вы киноман!');
}
         

console.log(personalMovieDB);