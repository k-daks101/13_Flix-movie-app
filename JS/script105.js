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
          alt="${show.name}"/>`
            : `<img src="../images/no-image.jpg"
          class="card-img-top"
          alt="${show.name}"/>`
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
      console.log('Movie Details');
      break;
  }

  HighlitActiveLink(); // Ensures the active link is highlighted
}

document.addEventListener('DOMContentLoaded', init);






















