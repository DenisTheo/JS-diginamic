// Importation ou déclaration des données JSON
const company =
{
    name: "Google",
    head_office: "Googleplex, Mountain View, California, United States",
    founders:
    [
      {
        name: "Larry Page",
        birth_date: "26/03/1973",
        birth_place: "East Lansing, Michigan"
      },
      {
        name: "Sergey Brin",
        birth_date: "21/08/1973",
        birth_place: "Moscow, URSS"
      }
    ],
    turnover:
    [
      { year: 2008, amount: 16.49 },
      { year: 2012, amount: 37.97 },
      { year: 2016, amount: 89.46 },
      { year: 2018, amount: 136.2 }
    ]
  };

  // Display
  console.log(`Company: ${company.name}, Head Office: ${company.head_office}`);
  console.log("\nfounders:");
  // Founders Loop
  company.founders.forEach((founder) =>
  {
    console.log(founder.name);
  });

  // Turnover Loop
  console.log("\nYearly Turnover:");
  company.turnover.forEach((entry) =>
  {
    console.log(`Year: ${entry.year}, Amount: $${entry.amount} Mi`);
  });