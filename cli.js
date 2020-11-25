const nunjucks = require("nunjucks");
const fs = require("fs");
const { program } = require("commander");
var request = require("sync-request");
var minify = require("html-minifier").minify;
var md = require("markdown-it")();
var reqsettings = {
  headers: {
    "user-agent": "JSONsite (https://support.glitch.com/t/34718)"
  }
};

program.version("0.0.1");

program
  .option("-i, --input <file>", "The input JSON file", "site.json")
  .option("-o, --output <file>", "The output HTML file", "output.html")
  .option(
    "-t, --template <file>",
    "Template file, must be in github.com/jsonsite/templates",
    "default.njk"
  )
  .parse(process.argv);

var template = request("GET", `https://jsonsite.github.io/templates/${program.template}`, reqsettings)
  .getBody()
  .toString();
var json = JSON.parse(fs.readFileSync(program.input, "utf8"));
var output = program.output;
  nunjucks.configure({ autoescape: true });
  json = Object.assign(json, {
    siimple: fs.readFileSync(
      "node_modules/siimple/dist/siimple.min.css",
      "utf8"
    )
  });
  var res = nunjucks.renderString(template, json);
console.log(res)