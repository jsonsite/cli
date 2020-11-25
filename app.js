var file = "";
var output;
const nunjucks = require("nunjucks");
const fs = require("fs");

var reqsettings = {
  headers: {
    "user-agent": "JSONsite (https://support.glitch.com/t/34718)"
  }
};

const { program } = require("commander");

program.version("0.0.1");

program
  .option("-i, --input <file>", "The input JSON file", "index.json")
  .option("-o, --output <file>", "The output HTML file", "output.html")
  .parse(process.argv);

