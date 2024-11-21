// Recommended: All functions declared here

// Recommended: constants with references to existing HTML-elements

// Recommended: Ask for the city name and then the rest of the code

let question = prompt ("Vilken stad?");

const elementFirstH2 = document.querySelector(`h2`);
elementFirstH2.innerHTML = `<h2>${question} </h2>`;


