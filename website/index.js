// Recommended: All functions declared here

// Recommended: constants with references to existing HTML-elements

// Recommended: Ask for the city name and then the rest of the code

const main = document.querySelector("main");

const elementFirstH2 = document.querySelector("h2");

const h3 = document.querySelector("h3");

let question = prompt ("Vilken stad?");

function findCity(city) {

        for (let i = 0; i < cities.length; i++) {
            if (city === cities[i].name) {
                elementFirstH2.textContent = `${cities[i].name} (${cities[i].country})`
                document.title = `${question}`

                return;
            }
        }
            elementFirstH2.textContent = `${question} finns inte i databasen`
            document.title = "Not Found"
}

    findCity(question)

    for (let i = 0; i < cities.length; i++) {
        document.getElementById("cities").innerHTML += `<div class="cityBox">${cities[i].name}</div>`
    }

