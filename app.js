const API_URL = 'https://anime-chan.herokuapp.com/api/quotes';
const button = document.querySelector('.btn');
const card = document.querySelector('.card');

button.addEventListener('click', getData);

async function getData() {
    await fetch(API_URL)
        .then((res) => res.json())
        .then((res) => {
            console.log(res);
        });
}
