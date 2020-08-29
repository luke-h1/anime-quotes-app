const searchBtn = document.getElementById('search-btn');
const searchTerm = document.getElementById('term');
const errorEl = document.getElementById('error');
const form = document.getElementById('form-control');
const quotes = document.getElementById('quotes');

function showError(message) {
  errorEl.innerHTML = message;
}


function getAnimeData(e) {
  e.preventDefault();
  const query = searchTerm.value;
  const API_URL = `https://animechanapi.xyz/api/quotes?anime=${query}`;
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      quotes.innerHTML = data.quote.map(
        (anime) => `
          <div class="row"> 
            <div class="col s12 m6"> 
              <div class="Card blue-grey darken-1"> 
                <div class="card-content white-text"> 
                  <span class="card-title">${anime.character}</span> 
                    <p>${anime.quote}</p> 
                  </div> 
                    <div class="card-action"> 
                      <a href="#">${anime.anime}</a> 
                      </div> 
                        </div> 
                          </div> 
                            </div>
                            `,

      )
        .join('');
    });
}


// EVENT LISTENERS
form.addEventListener('submit', getAnimeData);
