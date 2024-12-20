async function initializeData()
{
    try
    {
        // Fetch data from the server
        const response = await fetch("https://digicode.cleverapps.io/json/pays/pollution");
        if (!response.ok)
        {
            throw new Error("Erreur lors du chargement des données");
        }
        const data = await response.json();

        // Update h1 with pollutant and unit
        const titleElement = document.querySelector("#title");
        titleElement.textContent = `${data.polluant} (${data.unite})`;

        // Update h2 with year
        const yearElement = document.querySelector("#year");
        yearElement.textContent = `Année : ${data.annee}`;

        // Populate the countries table
        const tableBody = document.querySelector("#countriesTable tbody");
        tableBody.innerHTML = ""; // Clear any existing rows

        data.pays.forEach(country =>
        {
            const row = document.createElement("tr");
            row.innerHTML =
            `
                <td><img src="https://flagcdn.com/24x18/${country.code}.png" alt="Drapeau de ${country.nom}"></td>
                <td>${country.nom}</td>
                <td>${country.valeur.toFixed(2)}</td>
                <td>${country.pourcentage.toFixed(1)}%</td>
            `;
            tableBody.appendChild(row);
        });
    } catch (error)
    {
        console.error("Erreur:", error);
        alert("Impossible de charger les données.");
    }
}
