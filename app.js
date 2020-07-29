const API_URL = 'https://anime-chan.herokuapp.com/api/quotes/random';

// generic variables
const button = document.querySelector('.btn');
const card = document.querySelector('.card');

// results from API variables

const show = document.querySelector('.card-title'); //output where the series / show will go
const quote = document.querySelector('.card-text'); // output where the quote will go
const author = document.querySelector('.author'); // output where character will go (span)

button.addEventListener('click', getData);

async function getData() {
    await fetch(API_URL)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
        });
}
