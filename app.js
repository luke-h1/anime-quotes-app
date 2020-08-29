const searchBtn = document.getElementById('search-btn');
const searchTerm = document.getElementById('term');
const errorEl = document.getElementById('error');
const form = document.getElementById('form-control');
function showError(message) {
  errorEl.innerHTML = message;
}

function getAnimeData(e) {
  e.preventDefault(); 
  if (searchTerm === null) {
    showError('<h2>Please enter a valid anime</h2>');
  } else { 
    let query = searchTerm.value; 
    const API_URL = `https://animechanapi.xyz/api/quotes?anime=${query}`;
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        
      });
  }
}

// async function getAnimeData(e) {
//   e.preventDefault();
//   if (searchTerm.value === null) {
//     showError('<h2>Please enter a valid anime</h2>');
//   } else {
//     const API_URL = `https://anime-chan.herokuapp.com/api/quotes?=${searchTerm}`;
//     await fetch(API_URL)
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//       });
//   }
// }

// EVENT LISTENERS
form.addEventListener('submit', getAnimeData);
