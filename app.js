/* eslint-disable */
const searchBtn = document.getElementById('search-btn');
const searchTerm = document.getElementById('term');
const errorEl = document.getElementById('error');
const form = document.getElementById('form-control');
const quotes = document.getElementById('quotes');
const imageLoadingEl = document.getElementById('loading');
const randomQuoteBtn = document.getElementById('random-btn');

function showError(message) {
  errorEl.innerHTML = message;
}

function getAnimeData(e) {
  e.preventDefault(e);
  const query = searchTerm.value;
  const API_URL = `https://animechanapi.xyz/api/quotes?anime=${query}`;
  imageLoadingEl.style.display = 'block';
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      quotes.innerHTML = data.data
        .map(
          (anime) => `
        <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">${anime.anime}</span>
              <p>${anime.quote}</p>
                <div class="card-action"> 
                ${anime.character}</a>
                  </div>
                  </div>
                  </div>
                  </div>
        `
        )
        .join('');
      imageLoadingEl.style.display = 'none';
    });
}

function getRandomQuote(e) {
  e.preventDefault();
  const RANDOM_API_URL = `https://animechanapi.xyz/api/quotes/`;
  imageLoadingEl.style.display = 'block';
  fetch(RANDOM_API_URL)
    .then((res) => res.json())
    .then((data) => {
      quotes.innerHTML = '';
      quotes.innerHTML = data.data
        .map(
          (randomAnime) => `
        <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">${randomAnime.anime}</span>
              <p>${randomAnime.quote}</p>
                <div class="card-action"> 
                ${randomAnime.character}</a>
                  </div>
                  </div>
                  </div>
                  </div>

        `
        )
        .join('');
      imageLoadingEl.style.display = 'none';
    });
}

// // EVENT LISTENERS

form.addEventListener('submit', getAnimeData);
randomQuoteBtn.addEventListener('click', getRandomQuote);
