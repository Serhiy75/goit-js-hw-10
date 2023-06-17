import { fetchBreeds, fetchCats } from "./api-cats";    

const breedSelect = document.querySelector('.breed-select');
const loader = document.querySelector('.loader');
const catInfo = document.querySelector('.cat-info');
const catImage = document.querySelector('.cat-image');
const catName = document.querySelector('.cat-name');
const catDescription = document.querySelector('.cat-description');
const catTemperament = document.querySelector('.cat-temperament');
const error = document.querySelector('.error');

function catBreedSelect(breeds) {
    breeds.forEach(breed => {
        const option = document.createElement('option');
        option.value = breed.id;
        option.textContent = breed.name;
        breedSelect.appendChild(option);  
    });
}

function loadingState(loading) {
    if (loading) {
        breedSelect.style.display = 'none';
        loader.style.display = 'block';
        catInfo.style.display = 'none';
        error.style.display = 'none';
    } else {
        breedSelect.style.display = 'block';
        loader.style.display = 'none'; 
    }
}

function displayCatInfo(cat) {
    catImage.src = cat.url;
    catName.textContent = cat.breeds[0].name;
    catDescription.textContent = cat.breeds[0].description;
    catTemperament.textContent = `Temperament: ${cat.breeds[0].temperament}`;
    catInfo.style.display = 'flex';
}
breedSelect.addEventListener('change', () => {
    const breedId = breedSelect.value;
    
    loadingState(true);

    fetchCats(breedId)
        .then(cat => {
            displayCatInfo(cat);
            loadingState(false);
        })
        .catch(error => {
            console.error(error);
            loadingState(false);
            error.style.display = 'block';
        });
});

loadingState(true);

fetchBreeds()
    .then(breeds => {
        catBreedSelect(breeds);
        loadingState(false);
    })
    .catch(error => {
        console.error(error);
        loadingState(false);
        error.style.display = 'block';
    });
