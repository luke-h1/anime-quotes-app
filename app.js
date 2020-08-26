const API_URL = 'https://anime-chan.herokuapp.com/api/quotes/random';

// generic variables
const button = document.querySelector('.btn');
const card = document.querySelector('.card');

// results from API variables
const show = document.querySelector('.card-title'); //output where the series / show will go
const quote = document.querySelector('.card-text'); // output where the quote will go
const author = document.querySelector('.author'); // output where character will go (span)


// EVENT LISTENERS
button.addEventListener('click', getData);


async function getData() {
    try { 
        let start = new Date().getTime(); 
        await fetch(API_URL) 
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                show.innerHTML = `<span class="show">Show:</span>  ${res[0].anime}`; 
                quote.innerHTML = `  ${res[0].quote}`; 
                author.innerHTML = `Character: ${res[0].character}`
                let end = new Date().getTime(); 
                let time = end - start; 
                console.log('Execution time: ' + time + 'miliseconds')                
            });
    } catch {
        console.log('error'); 
    }
}
