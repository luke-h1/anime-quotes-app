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
            <div class="quotes"> 
              <div class="container">
                <h6 class="post-title"><span class="style-card">Anime:</span><br>${anime.anime}</h6>
                <p class="post-intro">
                  <span class="style-card">Quote:</span><br>${anime.quote}
                </p> 
                <br>
                <hr>
                <p><span class="style-card">Character:</span> <br><span class="char-style">${anime.character}</span></p>
          </div>
          </div> 
        `,
        )
        .join('');
      imageLoadingEl.style.display = 'none';
      console.log(quotes.innerHTML);
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
          <div class="quotes"> 
          <div class="container">
            <h6 class="post-title"><span class="style-card">Anime:</span> <br>${randomAnime.anime}</h6>
            <p class="post-intro">
              <span class="style-card">Quote:</span> <br>${randomAnime.quote}
            </p> 
            <br>
            <hr>
            <p><span class="char-style">Character:</span> <br>${randomAnime.character}</p>
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
