const searchTerm = document.getElementById('term');
// const errorEl = document.getElementById('error');
const form = document.getElementById('form-control');
const quotes = document.getElementById('quotes');
const imageLoadingEl = document.getElementById('loading');
const randomQuoteBtn = document.getElementById('random-btn');

// function showError(message) {
//   errorEl.innerHTML = message;
// }

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
        <div class="col s2 m12 center">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">Character:<br>${anime.anime}</span>
              <p>${anime.quote}</p>
                <div class="card-action white-text"> 
                Character:<br>${anime.character}
                  </div>
                  </div>
                  </div>
                  </div>
        `,
        )
        .join('');
      imageLoadingEl.style.display = 'none';
    });
}

function getRandomQuote(e) {
  e.preventDefault();
  const RANDOM_API_URL = 'https://animechanapi.xyz/api/quotes/';
  imageLoadingEl.style.display = 'block';
  fetch(RANDOM_API_URL)
    .then((res) => res.json())
    .then((data) => {
      quotes.innerHTML = '';
      quotes.innerHTML = data.data
        .map(
          (randomAnime) => `  

        <div class="row">
        <div class="col s2 m12 center">
          <div class="card blue-grey ">
            <div class="card-content white-text">
              <span class="card-title quote-title">Show: <br>${randomAnime.anime}</span>
              <p class="quote">${randomAnime.quote}</p>
                <div class="card-action">  
                <p class="character">Character: <br>${randomAnime.character}</p> 
                  </div>
                  </div>
                  </div>
                  </div>
                  </div> 

        `,
        )
        .join('');
      imageLoadingEl.style.display = 'none';
    });
}

// // EVENT LISTENERS

form.addEventListener('submit', getAnimeData);
randomQuoteBtn.addEventListener('click', getRandomQuote);
