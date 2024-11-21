// Recommended: All functions declared here

// Recommended: constants with references to existing HTML-elements

// Recommended: Ask for the city name and then the rest of the code


let question = prompt ("Vilken stad?");

const elementCities = document.querySelector(`#cities`);
elementCities.innerHTML = `<h3>${question} (Frankrike) </h3>`;
elementCities.style.justifyContent ="center";
elementCities.style.fontSize = "25px";
