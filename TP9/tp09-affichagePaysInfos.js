function fetchFilteredCountries()
{ // Create an AJAX request
    const xhr = new XMLHttpRequest();
    const url = "https://restcountries.com/v2/all";

    // Open the request
    xhr.open("GET", url, true);

    // Listen for state changes
    xhr.onreadystatechange = function ()
    {
        if (xhr.readyState === 4 && xhr.status === 200)
            {
            try
            { // Parse the JSON response
                const data = JSON.parse(xhr.responseText);

                // Filter and display the country information
                displayCountryInfo(data);
            } catch (error)
            {
                console.error("Error while parsing the data: ", error);
                document.getElementById("countriesContainer").textContent =
                    "Erreur lors de la récupération des données.";
            }
        }
    };

    // Send the request
    xhr.send();
}

function displayCountryInfo(data)
{
    const container = document.getElementById("countriesContainer");

    // Clear the container
    container.innerHTML = "";

    // Loop through the data and create elements for filtered info
    for (let i = 0; i < data.length; i++)
    {
        const country = data[i];

        // Create a card for the country
        const card = document.createElement("div");
        card.classList.add("country-card");

        card.innerHTML =
        `
            <h2>${country.name}</h2>
            <p><strong>Capitale :</strong> ${country.capital || "N/A"}</p>
            <p><strong>Population :</strong> ${country.population.toLocaleString()}</p>
            <p><strong>Région :</strong> ${country.region}</p>
        `;

        container.appendChild(card);
    }
}
