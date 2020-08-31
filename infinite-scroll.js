/* eslint-disable no-param-reassign */
/* eslint-disable no-unused-vars */
/* eslint-disable guard-for-in */
/* eslint-disable no-plusplus */
const quotesContainer = document.getElementById('quotes-container');
const loading = document.querySelector('.loader');
const imageLoadingEl = document.getElementById('loading');
const filter = document.getElementById('filter');

let page = 2;

async function getQuotes() {
  const API_URL = `https://animechanapi.xyz/api/quotes/?page=${page}`;
  const res = await fetch(API_URL);
  const json = await res.json();
  return json;
}

// const quoteEl = document.createElement('div');
// quoteEl.classList.add('quote');
// quoteEl.innerHTML = quote.data.map

async function showQuotes() {
  const quotes = await getQuotes();
  console.log(quotes);
  const quoteEl = document.createElement('div');
  quoteEl.innerHTML = quotes.data
    .map(
      (anime) => `
  <div class="row">
  <div class="col s2 m12 center">
    <div class="card blue-grey darken-1">
      <div class="card-content white-text">
        <span class="card-title">Anime:<br>${anime.anime}</span>
        <p class="anime-quote">${anime.quote}</p>
          <div class="card-action white-text"> 
          Character:<br>${anime.character}
          </div>
              </div>
                  </div>
                      </div>
  
  `,
    )
    .join('');
  quotesContainer.appendChild(quoteEl);
}
// quotesContainer.appendChild(quoteEl);
showQuotes();
// show loader + fetch more quotes
function showLoader() {
  loading.classList.add('show');
  setTimeout(() => {
    page++;
    showQuotes();
  }, 300);

  setTimeout(() => {
    loading.classList.remove('show');
  }, 1000);
}

function filterQuotes(e) {
  const term = filter.value.toUpperCase();
  const items = document.querySelectorAll('.row');
  console.log(items);
  items.forEach((item) => {
    const anime = item.querySelector('.card-title').innerText.toUpperCase();
    const quote = item.querySelector('.anime-quote').innerText.toUpperCase();
    const character = item.querySelector('.card-action').innerText.toUpperCase();
    if (anime.indexOf(term) > -1 || quote.indexOf(term) > -1 || character.indexOf(term) > -1) {
      item.style.display = 'flex';
    } else {
      item.style.display = 'none';
    }
  });
}

filter.addEventListener('input', filterQuotes);

// EVENT LISTENERS
window.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
  if (scrollTop + clientHeight >= scrollHeight - 5) {
    showLoader();
  }
});
