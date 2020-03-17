<<<<<<< HEAD
=======
// New changes

>>>>>>> testing commit
const form = document.getElementById('form'),
  search = document.getElementById('search'),
  result = document.getElementById('result'),
  more = document.getElementById('more');

const apiURL = 'https://api.lyrics.ovh';    //API website 

// Search by song or artist using asyc/await and fetchAPI
function searchSongs(term) {
  // fetch(`url string`)
  fetch(`${apiURL}/suggest/${term}`)
    .then(res => res.json())
    .then(data => console.log(data));
}


// Event listeners
form.addEventListener('submit', e => {
  e.preventDefault();

  // Grab user input from search bar
  const searchTerm = search.value.trim();

  // Form validation
  if (!searchTerm) {
    alert('Please enter an artist or song title in the search bar');
  } else {
    searchSongs(searchTerm);
  }


})