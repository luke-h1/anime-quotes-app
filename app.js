/* eslint-disable */
const searchBtn = document.getElementById('search-btn');
const searchTerm = document.getElementById('term');
const errorEl = document.getElementById('error');
const form = document.getElementById('form-control');
const quotes = document.getElementById('quotes');

function showError(message) {
  errorEl.innerHTML = message;
}

function getAnimeData(e) {
  e.preventDefault(e);
  const query = searchTerm.value;
  const API_URL = `https://animechanapi.xyz/api/quotes?anime=${query}`;
  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => {
      quotes.innerHTML = data.data.map(
        (anime) => `
        <div class="row">
        <div class="col s12 m6">
          <div class="card blue-grey darken-1">
            <div class="card-content white-text">
              <span class="card-title">${anime.character}</span>
              <p>${anime.quote}</p>
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

// function getAnimeData(e) {
//   e.preventDefault(e);
//   const query = searchTerm.value;
//   const API_URl = `https://animechanapi.xyz/api/quotes?anime=${query}`;
//   fetch(API_URl)
//     .then((res) => res.json())
//     .then((data) => {
//       const arr = data;
//       arr.forEach((item, index) => {
//         quotes.innerHTML = `
//         <div class="row">
//           <div class="col s12 m6">
//             <div class="card blue-grey darken-1">
//               <div class="card-content white-text">
//                 <span class="card-title">${arr.character[`${index}`]}</span>
//                 <p>${arr.quote[`${index}`]}</p>
//                   <div class="card-action">
//                     <a href="#">${arr.anime[`${index}`]}</a>
//                     </div>
//                     </div>
//                     </div>
//                     </div>
// //                     `;
// //       });
// //     });
// // }

// // EVENT LISTENERS

form.addEventListener('submit', getAnimeData);
