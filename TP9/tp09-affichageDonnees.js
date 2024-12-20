function fetchCountries()
{
    // AJAX Request
    const xhr = new XMLHttpRequest();
    const url = "https://restcountries.com/v2/all";

    // Open Connection
    xhr.open("GET", url, true);

    // Listener
    xhr.onreadystatechange = function ()
    {
        if (xhr.readyState === 4 && xhr.status === 200)
        {
            try
            { // JSON Parsing
                const countries = JSON.parse(xhr.responseText);

                // Display
                displayCountries(countries);
            } catch (error)
            {
                console.error("Erreur lors de la lecture des données: ", error);
                document.getElementById("countriesContainer").textContent = "Erreur lors de la récupération des données.";
            }
        }
    };

    // Send Request
    xhr.send();
}

function displayCountries(countries)
{
    const container = document.getElementById("countriesContainer");

    // Empty the Container
    container.innerHTML = "";

    // Creates an HTML element for each country
    countries.forEach((country) =>
    {
        const card = document.createElement("div");
        card.classList.add("country-card");

        card.innerHTML = `
            <img src="${country.flags.svg}" alt="Drapeau de ${country.name}">
            <h2>${country.name}</h2>
            <p><strong>Capitale :</strong> ${country.capital || "N/A"}</p>
            <p><strong>Population :</strong> ${country.population.toLocaleString()}</p>
            <p><strong>Région :</strong> ${country.region}</p>
        `;

        container.appendChild(card);
    });
}
