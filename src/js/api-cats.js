
export function fetchBreeds() {
    const url = 'https://api.thecatapi.com/v1/breeds';
    const apiKey = 'live_mvluJloDqpPMSibFaxnqZXHPWnuJr0rH1ZaRdiBtFsuEcv41LFitS2eTahpi5gyL';

    return fetch(url, {
        headers: {
            'x-api-key': apiKey
        }
    })
        .then(response => response.json())
        .then(data => data)
        .catch(error => {
            throw error;
        });
}

export function fetchCats(breedId) {
    const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${breedId}`;
    const apiKey = 'live_mvluJloDqpPMSibFaxnqZXHPWnuJr0rH1ZaRdiBtFsuEcv41LFitS2eTahpi5gyL';

    return fetch(url, {
        headers: {
            'x-api-key': apiKey
        }
    })
        .then(response => response.json())
        .then(data => data[0])
        .catch(error => {
            throw error;
        });
}



// export function getCats(limit, breed) {
//     const BASE_URL = 'https://api.thecatapi.com/v1'
//     const API_KEY = 'live_mvluJloDqpPMSibFaxnqZXHPWnuJr0rH1ZaRdiBtFsuEcv41LFitS2eTahpi5gyL';
//     https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME
//     fetch(`${BASE_URL}/images/search?limit=${limit}&breed_ids=${breed}&api_key=${API_KEY}`)
//     then(resp => console.log(resp))
// }
// getCats()