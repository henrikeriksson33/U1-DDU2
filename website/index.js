// Recommended: All functions declared here

// Recommended: constants with references to existing HTML-elements

// Recommended: Ask for the city name and then the rest of the code

const main = document.querySelector("main");
main.className = main;

const elementFirstH2 = document.querySelector("h2");

let question = prompt ("Vilken stad?");
for (let i = 0; i<cities.length; i++)
if (question == cities.name) {
    elementFirstH2.textContent = `${foundCities.name} (${foundCities.country})`
    document.title = `${question}`
} else
    elementFirstH2.textContent = `${question} finns inte i databasen`;
    document.title = "Not found";
