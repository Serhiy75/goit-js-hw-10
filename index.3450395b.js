!function(){function e(e,n,t,r){Object.defineProperty(e,n,{get:t,set:r,enumerable:!0,configurable:!0})}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},r={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in t)return t[e].exports;if(e in r){var n=r[e];delete r[e];var i={id:e,exports:{}};return t[e]=i,n.call(i.exports,i,i.exports),i.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,n){r[e]=n},n.parcelRequired7c6=i),i.register("bOlkj",(function(n,t){function r(){return fetch("https://api.thecatapi.com/v1/breeds",{headers:{"x-api-key":"live_mvluJloDqpPMSibFaxnqZXHPWnuJr0rH1ZaRdiBtFsuEcv41LFitS2eTahpi5gyL"}}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))}function i(e){var n="?breed_ids=".concat(e);return fetch("https://api.thecatapi.com/v1/images/search"+n,{headers:{"x-api-key":"live_mvluJloDqpPMSibFaxnqZXHPWnuJr0rH1ZaRdiBtFsuEcv41LFitS2eTahpi5gyL"}}).then((function(e){return e.json()})).then((function(e){return e[0]})).catch((function(e){console.log(e)}))}e(n.exports,"fetchBreeds",(function(){return r})),e(n.exports,"fetchCatByBreed",(function(){return i}))})),i("bOlkj")}();
//# sourceMappingURL=index.3450395b.js.map