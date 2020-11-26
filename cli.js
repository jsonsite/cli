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
console.log(`JSONsite starting with the following config:
Template: https://jsonsite.github.io/templates/${program.template}
Input File: ${program.input}
Output file: ${program.output}
`);
console.log("Getting templates...");
var template = request(
  "GET",
  `https://jsonsite.github.io/templates/${program.template}`,
  reqsettings
)
  .getBody()
  .toString();
console.log("Reading JSON data from " + program.input);
var json = JSON.parse(fs.readFileSync(program.input, "utf8"));
var y = 0;
while (y < json.pages.length) {
  json.pages[y].content = md.render(json.pages[y].content);
  y++;
}
var output = program.output;
json = Object.assign(json, {
  siimple: fs.readFileSync("node_modules/siimple/dist/siimple.min.css", "utf8")
});
console.log("Rendering the site...");
var res = nunjucks.renderString(template, json);
res = minify(res, {
  useShortDoctype: true,
  removeComments: true,
  collapseWhitespace: true,
  minifyJS: true,
  minifyCSS: true
});
console.log(res);

fs.writeFileSync(program.output, res);
console.log("Done!");
