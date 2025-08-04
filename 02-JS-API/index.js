let vorname = "Siri";
console.log(vorname.toUpperCase());
console.log(vorname.substring(0, 2));

const teilnehmer = ["Siri", "Max", "Anna"];
teilnehmer.forEach((tn) => console.log(tn));

const now = new Date(2025, 0, 1);
console.log(now.toLocaleDateString("de-DE"));

const zahlen = [4, 2, 3, 1, 5, 1];
console.log(zahlen.findLastIndex((z) => z === 1));

// die unteren Objekte gehören zum HTML-Dokument (Browser-API)
// Node is Systemprogrammierung, nicht Browser-Programmierung
// alert("Mittagspause!");
// document.getElementById("aha");

//fetch("https://www.iad.de").then(resp => resp.text()).then(console.log);

console.log(
  new Intl.DateTimeFormat("de-AT", {
    month: "long",
    weekday: "long",
    year: "numeric",
    day: "numeric",
  }).format(now)
);

