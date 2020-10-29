const endpoint =
  'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

let cities = [];

fetch(endpoint)
  .then((data) => data.json())
  .then((data) => cities.push(...data))
  .catch((err) => console.log(err));

const findMatches = (wordToMatch) => {
  return cities.filter((place) => {
    const regex = new RegExp(wordToMatch, 'gi');
    const places = place.city.match(regex) || place.state.match(regex);
    console.log(places);
    return places;
  });
};

const searchInputs = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

const displayMatches = (value) => {
  const matchArray = findMatches(value);
  const html = matchArray
    .map((place) => {
      return `
      <li>
      <span class="name">${place.city}, ${place.state}</span>
      <span class="population">${place.population} </span>
      </li>
      `;
    })
    .join('');
  suggestions.innerHTML = html;
};

searchInputs.addEventListener('keyup', (e) => {
  return displayMatches(e.target.value);
});
// searchInputs.addEventListener('keyup', (e) => displayMatches(e.target.value));
