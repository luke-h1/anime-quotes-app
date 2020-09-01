const searchTerm = document.getElementById('term');
const errorEl = document.getElementById('error');
const form = document.getElementById('form-control');
const quotes = document.getElementById('quotes');
const imageLoadingEl = document.getElementById('loading');
const randomQuoteBtn = document.getElementById('random-btn');
const searchbtn = document.getElementById('search-btn');
function showError(message) {
  errorEl.innerHTML = message;
  setTimeout(() => {
    errorEl.innerHTML = '';
  }, 2000);
}

async function getAnimeData() {
  const query = searchTerm.value;
  const API_URL = `https://animechanapi.xyz/api/quotes?anime=${query}`;
  if (query === '') {
    showError('Enter a correct value 🤷‍♂️');
  } else {
    imageLoadingEl.style.display = 'block';
    const res = await fetch(`${API_URL}`);
    const data = await res.json();
    console.log(data);
    showAnime(data);
  }
}

function showAnime(data) {
  let output = '';
  data.data.forEach((quote) => {
    output += `
    <div class="quotes"> 
              <div class="container">
                <h6 class="post-title"><span class="style-card">Anime:</span><br>${quote.anime}</h6>
                <p class="post-intro">
                  <span class="style-card">Quote:</span><br>${quote.quote}
                </p> 
                <br>
                <hr>
                <p><span class="style-card">Character:</span> <br><span class="char-style">${quote.character}</span></p>
          </div>
          </div> 
    `;
  });
  imageLoadingEl.style.display = 'none';
  quotes.innerHTML = output;
}

async function getRandomQuote() {
  const RAN_API_URL = 'https://animechanapi.xyz/api/quotes/';
  imageLoadingEl.style.display = 'block';
  const res = await fetch(`${RAN_API_URL}`);
  const randomData = await res.json();
  console.log(randomData);
  showRandomAnime(randomData);
}

function showRandomAnime(randomData) {
  let randomOutput = '';
  randomData.data.forEach((quote) => {
    randomOutput += `
    <div class="quotes"> 
          <div class="container">
            <h6 class="post-title"><span class="style-card">Anime:</span> <br>${quote.anime}</h6>
            <p class="post-intro">
              <span class="style-card">Quote:</span> <br>${quote.quote}
            </p> 
            <br>
            <hr>
            <p><span class="char-style">Character:</span> <br>${quote.character}</p>
              </div>
              </div> 
    `;
  });
  quotes.innerHTML = randomOutput;
  imageLoadingEl.style.display = 'none';
}

// // EVENT LISTENERS

form.addEventListener('submit', getAnimeData);
randomQuoteBtn.addEventListener('click', getRandomQuote);
searchbtn.addEventListener('click', getAnimeData);
