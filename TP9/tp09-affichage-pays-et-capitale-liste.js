let countriesData = []; // To store fetched data
let isSortedAscending = false; // State for sorting order

// Fetch data and populate the table
function fetchAndDisplayCountries()
{
    const url = "https://restcountries.com/v2/all";

    // Fetch data from the API
    fetch(url).then(response =>
    {
        if (!response.ok)
            throw new Error("Failed to fetch data");

        return response.json();
    }).then(data =>
    {
        countriesData = data; // Store the fetched data
        displayCountries(countriesData); // Display the data in the table
    }).catch(error =>
    {
        console.error("Error fetching data:", error);
        document.getElementById("countriesTableBody").innerHTML = "<tr><td colspan='4'>Error fetching data</td></tr>";
    });
}

// Display countries in the table
function displayCountries(data)
{
    const tableBody = document.getElementById("countriesTableBody");
    tableBody.innerHTML = ""; // Clear existing rows

    data.forEach(country =>
    {
        const row = document.createElement("tr");
        row.innerHTML =
        `
            <td>${country.name}</td>
            <td>${country.capital || "N/A"}</td>
            <td>${country.population.toLocaleString()}</td>
            <td>${country.region}</td>
        `;
        tableBody.appendChild(row);
    });
}

// Sorts table by population
function sortTableByPopulation()
{
    // Toggles sorting order
    isSortedAscending = !isSortedAscending;

    // Sorts countries data
    countriesData.sort((a, b) =>
    {
        return isSortedAscending
            ? a.population - b.population
            : b.population - a.population;
    });

    // Updates sort icon
    const sortIcon = document.getElementById("sortIcon");

    if (isSortedAscending)
        sortIcon.className = "fas fa-sort-up";
    else
        sortIcon.className = "fas fa-sort-down";

    // Displays the sorted data
    displayCountries(countriesData);
}
