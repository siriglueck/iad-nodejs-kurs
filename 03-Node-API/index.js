// 1. Dateizugriff brauchen
// Node-API werden in Modulen bereitgestellt

// fs = file system module importieren
// const fs = require("fs");
const fs = require("node:fs");

const now = new Date();
fs.appendFileSync(
  "log.txt",
  `${now.toISOString()} Programm gestartet\n`,
  "utf-8"
);
