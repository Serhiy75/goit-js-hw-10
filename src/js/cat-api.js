export function fetchBreeds() {
    const  BASE_URL = 'https://api.thecatapi.com/v1';
    const END_POINT = '/breeds';
    const url = BASE_URL + END_POINT; 
    const apiKey = 'live_mvluJloDqpPMSibFaxnqZXHPWnuJr0rH1ZaRdiBtFsuEcv41LFitS2eTahpi5gyL';

    return fetch(url, {
        headers: {
            'x-api-key': apiKey
        }
    })
        .then(response => response.json())
        .catch(error => {
            console.log(error);
        });
};

export function fetchCatByBreed(breedId) {
    const  BASE_URL = 'https://api.thecatapi.com/v1';
    const END_POINT = '/images/search';
    const PARAMS = `?breed_ids=${breedId}`;
    const url = BASE_URL + END_POINT + PARAMS; 

    const apiKey = 'live_mvluJloDqpPMSibFaxnqZXHPWnuJr0rH1ZaRdiBtFsuEcv41LFitS2eTahpi5gyL';

    return fetch(url, {
        headers: {
            'x-api-key': apiKey
        }
    })
        .then(response => response.json())
        .then(data => data[0])
        .catch(error => {
        console.log(error);
        });
};