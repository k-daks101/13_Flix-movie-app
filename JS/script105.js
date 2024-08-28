const global = {
  currentPage: window.location.pathname,
};

console.log(global.currentPage);

// Highlight active link
function HighlitActiveLink() {
  const links = document.querySelectorAll('.nav-link');
  links.forEach((link) => {
    if (link.getAttribute('href') === global.currentPage) {
      link.classList.add('active');
    }
  });
}

// function addCommasToNumber(number)
// {
//   return number.toString().replace(/\B(?=\d{3}) + (?!\d))/g, '')
// }

// Function to get popular movies for homepage
async function displayPopularMovies() {
  const { results } = await fetchAPIData('movie/popular');

  results.forEach((movie) => {
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
      <a href="movie-details.html?id=${movie.id}">
        ${
          movie.poster_path
            ? `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
          class="card-img-top"
          alt="${movie.title}"/>`
            : `<img src="../images/no-image.jpg"
          class="card-img-top"
          alt="${movie.title}"/>`
        }
      </a>
      <div class="card-body">
        <h5 class="card-title">${movie.title}</h5>
        <p class="card-text">
          <small class="text-muted">Release: ${movie.release_date}</small>
        </p>
      </div>
    `;

    document.querySelector('#popular-movies').appendChild(div); // Ensure this ID matches an element in your HTML
  });
}



// Removed redundant loop: This loop doesn't do anything meaningful
  // It tries to create new div elements and add classes but doesn't append them to the DOM
  /*
  results.forEach((movie) => {
    const div = document.createElement('div'); // Fixed typo: Changed "docuent" to "document"
    div.classList.add('card'); // Corrected syntax: should use the method properly
  });
  */


//from displaying popular movies, we are about to display popular shows

//Function display movie details
async function displayMovieDetails()
{
  console.log('Full URL:', window.location.href);
  console.log('Search part:', window.location.search);
  
   const movieId = window.location.search
    console.log(movieId);

   const movie = await fetchAPIData(`movie/${movieId}`);
     console.log('Movie ID:', movieId);

     if (!movieId) {
      console.error('No movie ID found in the URL.');
      document.querySelector('#movie-details').innerHTML = `<p>Movie not found. Please check the URL.</p>`;
      return;
    }


   const div = document.createElement('div');

   div.innerHTML = 
   
   `
<div class="details-top">
    
     <div>
      ${
     movie.poster_path
       ? `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
     class="card-img-top"
     alt="${movie.title}"/>`
       : `<img src="../images/no-image.jpg"
     class="card-img-top"
     alt="${movie.title}"/>`
   }
     </div>
       <h2>${movie.title}</h2>
       <p>
         <i class="fas fa-star text-primary"></i>
         ${movie.vote_average.toFixed(1)} / 10
       </p>
       <p class="text-muted">Release Date: ${movie.release_date}</p>
       <p>
         ${movie.overview}
       </p>
       <h5>Genres</h5>
       <ul class="list-group">
       ${movies.genres.map((genre) => `<li>${genre.name}</li>`).join('')}  
       >
       </ul>
       <a href='${movie.homepage}' class="btn">Visit Movie Homepage</a>
     </div>
   </div>
   <div class="details-bottom">
     <h2>Movie Info</h2>
     <ul>
       <li><span class="text-secondary">Budget:</span> $${addCommasToNumber(movie.budget)}</li>
       <li><span class="text-secondary">Revenue:</span> $${addCommasToNumber(movie.revenue)}</li>
       <li><span class="text-secondary">Runtime:</span>$${movie.runtime} minutes </li>
       <li><span class="text-secondary">Status:</span> ${movie.status}</li>
     </ul>
     <h4>Production Companies</h4>
     <div class="list-group">
     ${movie.production_companies.map((company) =>`<span>${company.name}</span>`).join(',')}
     </div>
   </div>

   `


  document.querySelector('#movie-details').appendChild(div);

}






async function displayPopularShows() {
  const { results } = await fetchAPIData('tv/popular');

  results.forEach((show) => {
    const div = document.createElement('div'); // Fixed typo: Changed "docuent" to "document"
    div.classList.add('card'); // Corrected syntax: replaced '=' with 'add' method
    div.innerHTML = `
      <a href="movie-details.html?id=${show.id}">
        ${
          show.poster_path
            ? `<img src="https://image.tmdb.org/t/p/w500${show.poster_path}"
          class="card-img-top"
          alt="${show.title}"/>`
            : `<img src="../images/no-image.jpg"
          class="card-img-top"
          alt="${show.title}"/>`
        }
      </a>
      <div class="card-body">
        <h5 class="card-title">${show.name}</h5>
        <p class="card-text">
          <small class="text-muted">Release: ${show.first_air_date}</small>
        </p>
      </div>
    `;

    document.querySelector('#popular-shows').appendChild(div); // Ensure this ID matches an element in your HTML
  });

  // Removed redundant loop: This loop doesn't do anything meaningful
  // It tries to create new div elements and add classes but doesn't append them to the DOM
  
 
  
 
}



//Function display show details
async function displayShowDetails()
{
  console.log('Full URL:', window.location.href);
  console.log('Search part:', window.location.search);
  
   const showId = window.location.search
    console.log(showId);

   const movie = await fetchAPIData(`tv/${showId}`);
     console.log('Movie ID:', movieId);

     if (!movieId) {
      console.error('No movie ID found in the URL.');
      document.querySelector('#movie-details').innerHTML = `<p>Movie not found. Please check the URL.</p>`;
      return;
    }


   const div = document.createElement('div');

   div.innerHTML = 
   
   `
<div class="details-top">
    
     <div>
      ${
     movie.poster_path
       ? `<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
     class="card-img-top"
     alt="${movie.title}"/>`
       : `<img src="../images/no-image.jpg"
     class="card-img-top"
     alt="${movie.title}"/>`
   }
     </div>
       <h2>${movie.title}</h2>
       <p>
         <i class="fas fa-star text-primary"></i>
         ${movie.vote_average.toFixed(1)} / 10
       </p>
       <p class="text-muted">Release Date: ${movie.release_date}</p>
       <p>
         ${movie.overview}
       </p>
       <h5>Genres</h5>
       <ul class="list-group">
       ${movies.genres.map((genre) => `<li>${genre.name}</li>`).join('')}  
       >
       </ul>
       <a href='${movie.homepage}' class="btn">Visit Movie Homepage</a>
     </div>
   </div>
   <div class="details-bottom">
     <h2>Movie Info</h2>
     <ul>
       <li><span class="text-secondary">Budget:</span> $${addCommasToNumber(movie.budget)}</li>
       <li><span class="text-secondary">Revenue:</span> $${addCommasToNumber(movie.revenue)}</li>
       <li><span class="text-secondary">Runtime:</span>$${movie.runtime} minutes </li>
       <li><span class="text-secondary">Status:</span> ${movie.status}</li>
     </ul>
     <h4>Production Companies</h4>
     <div class="list-group">
     ${movie.production_companies.map((company) =>`<span>${company.name}</span>`).join(',')}
     </div>
   </div>

   `


  document.querySelector('#show-details').appendChild(div);

}



  


// Fetch data from TMDB API
async function fetchAPIData(endpoint) {
  // Ensure your API key is secured in a production environment
  const API_KEY = '545c25fa9359433e17dfb101843fd850';
  const API_URL = 'https://api.themoviedb.org/3';

  showSpinner()
  // Fixed typo in the URL: Changed "$language" to "&language"
  const response = await fetch(`${API_URL}/${endpoint}?api_key=${API_KEY}&language=en-US`);

  const data = await response.json();

  hideSpinner()

  return data;


}

function showSpinner()
{
  document.querySelector('.spinner').classList.add('show')
}
function hideSpinner()
{
  document.querySelector('.spinner').classList.remove('show')
}

// Initializing the app
function init() {
  switch (global.currentPage) {
    case '/index.html':
      displayPopularMovies(); // Ensure this function is called to populate the homepage
      break;

    case '/shows.html':
      //console.log('Shows');
      displayPopularShows()
      break;

    case '/movie-details.html':
      displayMovieDetails()
      break;
  }

  HighlitActiveLink(); // Ensures the active link is highlighted
}

document.addEventListener('DOMContentLoaded', init);













