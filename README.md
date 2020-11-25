# jsonsite

The CLI version of JSONsite. 

If you want to know more about [JSONsite](https://jsonsite.vercel.app/), please see the [GitHub repo](https://github.com/jsonsite#readme).

This is the **CLI** version, **NOT** the main version. The CLI version just turns a JSON file into a HTML file, but does not host it like the regular version.

### Example:

```
jsonsite -i site.json -o output.html -t default.njk
```
- The `-i` flag the input JSON file. It is not a URL, rather a local file, unlike the regular version which uses a URL. Defaults to `site.json`
- The `-o` flag is the output HTML file. JSONsite will save your SPA to the specified file. Defults to `output.html`
- The `-t` flag mean