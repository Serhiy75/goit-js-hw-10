import { fetchBreeds, fetchCatByBreed } from "./cat-api.js";    
import Notiflix from 'notiflix';

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const catInfo = document.querySelector('.cat-info');
const error = document.querySelector('.error');

function catBreedSelect(breeds) {
    const markup = breeds.map(breed => {
        return `<option value="${breed.id}">${breed.name}</option>`
    }).join('');
    breedSelect.insertAdjacentHTML("beforeend", markup);
}

function loadingState(loading) {
   error.style.display = 'none';
    if (loading) {
        breedSelect.style.display = 'none';
        loader.style.display = 'block';
        catInfo.style.display = 'none';
        
    } else {
        breedSelect.style.display = 'block';
        loader.style.display = 'none';
        catInfo.style.display = 'flex';
    }
}

function displayCatInfo(cat) {
    console.log(cat);
 const markup = `
        <img class="cat-image" src="${cat.url}" alt="Cat Image">
        <div class="cat-text">
          <h2 class="cat-name">${cat.breeds[0].name}</h2>
          <p class="cat-description">${cat.breeds[0].description}</p>
          <p class="cat-temperament">${cat.breeds[0].temperament}</p>
        </div>`
    catInfo.innerHTML = markup;
}
breedSelect.addEventListener('change', () => {
    const breedId = breedSelect.value;
    
    loadingState(true);

    fetchCatByBreed(breedId)
        .then(cat => {
            displayCatInfo(cat);
            loadingState(false);
        })
        .catch(error => {
            console.log('Oops! Something went wrong! Try reloading the page!', error);
            loadingState(false);
            catInfo.innerHTML = '';
            Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
        });
});



loadingState(true);

fetchBreeds()
    .then(breeds => {
        catBreedSelect(breeds);
        loadingState(false);
    })
    .catch(error => {
        console.log('Oops! Something went wrong! Try reloading the page!', error);
        loadingState(false);
        Notiflix.Notify.failure('Oops! Something went wrong! Try reloading the page!');
    });
