const url = "https://pokeapi.co/api/v2/pokemon/ditto";
const urlList = "https://pokeapi.co/api/v2/pokemon";
let results = null;

const outputElement = document.querySelector("#output");
async function getPokemon(url) {
  const response = await fetch(url);
  //check to see if the fetch was successful
  if (response.ok) {
    // the API will send us JSON...but we have to convert the response before we can use it
    // .json() also returns a promise...so we await it as well.
    const data = await response.json();
    doStuff(data);
  }
}
function doStuff(data) {
    const outputElement = document.querySelector("#output");
    results = data;
    const html = `<h2>${results.name}</h2>
                  <img src="${results.sprites.front_default}" alt="Image of ${results.name}">`;
    outputElement.innerHTML = html;
    console.log("first: ", results);
  }
getPokemon(url);
console.log("second: ", results);


async function getPokemonList(url) { //It is necessary in this cases to create a "async" function
    const response = await fetch(url); //This is to create or make a fetch request 
    if (response.ok) {
      const data = await response.json(); //This is converting the response into json
      doStuffList(data);
    }
  }

function doStuffList(data) {
    console.log(data);
    const pokeListElement = document.querySelector("#outputList");
    const pokeList = data.results;
    pokeList.forEach((currentItem) => {
        const html = `<li>${currentItem.name}</li>`;
        // note the += here...
        pokeListElement.innerHTML += html;
      });
    } 


getPokemonList(urlList);