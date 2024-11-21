// Recommended: All functions declared here

// Recommended: constants with references to existing HTML-elements

// Recommended: Ask for the city name and then the rest of the code

const elementFirstH2 = document.querySelector("h2");

let question = prompt ("Vilken stad?");
if (question == cities.name) {
    elementFirstH2.textContent = `${cities.name} (${cities.country})`
} else
    elementFirstH2.textContent = `${question} finns inte i databasen`;
    document.title = "Not found";
