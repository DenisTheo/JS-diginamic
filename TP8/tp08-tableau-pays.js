function initializeData()
{
    // JSON data
    let data =
    {
        "pollution": "CO2",
        "unit": "Billion tons",
        "year": 2017,
        "countries": [
            { "name": "China", "value": 9.26, "percentage": 28.2, "code": "cn" },
            { "name": "USA", "value": 4.76, "percentage": 14.5, "code": "us" },
            { "name": "India", "value": 2.16, "percentage": 6.6, "code": "in" },
            { "name": "Russia", "value": 1.54, "percentage": 4.7, "code": "ru" },
            { "name": "Japan", "value": 1.13, "percentage": 3.4, "code": "jp" },
            { "name": "Germany", "value": 0.72, "percentage": 2.2, "code": "de" },
            { "name": "South Korea", "value": 0.6, "percentage": 1.8, "code": "kr" },
            { "name": "Iran", "value": 0.57, "percentage": 1.7, "code": "ir" },
            { "name": "Canada", "value": 0.55, "percentage": 1.7, "code": "ca" }
        ]
    };

    // Update h1 with pollutant and unit
    const titleElement = document.querySelector("#title");
    titleElement.textContent = `${data.pollution} (${data.unit})`;

    // Update h2 with year
    const yearElement = document.querySelector("#year");
    yearElement.textContent = `Year: ${data.year}`;

    // Populate the countries table
    const tableBody = document.querySelector("#countriesTable tbody");
    tableBody.innerHTML = ""; // Clear any existing rows

    data.countries.forEach(country =>
    {
        const row = document.createElement("tr");

        row.innerHTML =
        `
            <td><img src="https://flagcdn.com/24x18/${country.code}.png" alt="${country.name} flag"></td>
            <td>${country.name}</td>
            <td>${country.value.toFixed(2)}</td>
            <td>${country.percentage.toFixed(1)}%</td>
        `;

        tableBody.appendChild(row);
    });
}
