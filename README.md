# jsonsite

The CLI version of JSONsite. 

If you want to know more about [JSONsite](https://jsonsite.vercel.app/), please see the [GitHub repo](https://github.com/jsonsite#readme).

This 

## Installation

`npm i jsonsite -g`

### Commands
As of 1.2.0, The jsonsite package has been split into two commands: jsonsite-gen and jsonsite-local.

jsonsite-gen will give you a sample JSON site for you. Example:
```
jsonsite-gen
```
Really, thats it, just answer the prompts. Then host the output file on something like GitHub Gists, then look at [CONTRIBUTING.md](https://github.com/jsonsite/jsonsite/blob/main/CONTRIBUTING.md) on how to add the JSON to the registry

jsonsite-local will generate the HTML file locally, but it does not come with stuff like the service workers, caching, etc.
```
jsonsite-local -i site.json -o output.html -t default.njk
```
- The `-i` flag the input JSON file. It is not a URL, rather a local file, unlike the regular version which uses a URL. Defaults to `site.json`
- The `-o` flag is the output HTML file. JSONsite will save your SPA to the specified file. Defults to `output.html`
- The `-t` flag is the template file. If the template file specified is `default.njk`, then it will get the template from `http://jsonsite.github.io/templates/default.njk`. You can submit a template [here](https://github.com/jsonsite/templates).

If you want to view this anytime, you can run `jsonsite -h`.
