const quotesContainer = document.getElementByIdl('quotes-container');
const loading = document.querySelector('.loader');
const filter = document.getElementById('filter');

const page = 1;

async function getQuotes() {
  const API_URL = `https://aniomechanapi.xyz/api/quotes/page=${page}`;
  const res = await fetch(API_URL);
  const json = await res.json();
  return json;
}


async function showQuotes(){
  const quotes = await getQuotes(); 
  quotes.forEach((post) => {
    const quoteEl = document.createElement('div'); 
    quoteEl.classList.add('quote');
    quoteEl.innerHTML = `
      <div class="number">${}</div> 
        <div class="quote-info">
          <h2 class="quote-title">${}</h2>
        </div> 
        <p class="quote-body">${}</p> 
    `; 
    quotesContainer.appenChild(quoteEl);
  }); 
  showQuotes();
}


function showLoading(){
  loading.classList.add('show');
  setTimeout(() => { 
    page++; 
    showQuotes();
  }, 300)
  setTimeout(() => {
    loading.classList.remove('show'); 
  }, 1000)
}

function filterQuotes(e){
  const term = e.target.value.toUpperCase(); 
  const quotes2 = document.querySelectorAll('quoteEl')
  quotes2.forEach((quote) => { 
    
  })
}