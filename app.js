const searchTerm = document.getElementById('term');
const errorEl = document.getElementById('error');
const form = document.getElementById('form-control');
const quotes = document.getElementById('quotes');
const imageLoadingEl = document.getElementById('loading');
const randomQuoteBtn = document.getElementById('random-btn');
const searchbtn = document.getElementById('search-btn');
function showError(message){
  errorEl.innerHTML = message;
  setTimeout(() => { 
    errorEl.innerHTML = ''
  }, 2000)
}





async function getAnimeData(){ 
  const query = searchTerm.value; 
  const API_URL = `https://animechanapi.xyz/api/quotes?anime=${query}` 
  if (query === ''){
    showError('Enter a correct value 🤷‍♂️')
  }else {  
  imageLoadingEl.style.display = 'block';
  const res = await fetch(`${API_URL}`);
  const data = await res.json(); 
  console.log(data); 
  showAnime(data);
  } 
}; 


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
  })
  imageLoadingEl.style.display = 'none';
  quotes.innerHTML = output;
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
        `
        )
        .join('');
      imageLoadingEl.style.display = 'none';
    });
}

// // EVENT LISTENERS

form.addEventListener('submit', getAnimeData);
randomQuoteBtn.addEventListener('click', getRandomQuote);
searchbtn.addEventListener('click', getAnimeData);
