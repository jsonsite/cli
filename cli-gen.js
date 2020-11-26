const { prompt } = require("enquirer");

(async () => {
  var validator = require("validator");
  const response = await prompt([
    {
      type: "input",
      name: "title",
      message: "Title of your website",
      required: true
    },
    {
      type: "input",
      name: "description",
      message: "Can you describe your website? (Description)",
      required: true
    },
    {
      type: "input",
      name: "image",
      message: "Would you like to provide a image? You don't have to though.",
      validate(value, state, item, index) {
        if (!validator.isURL(value) && value !== "") {
          return false;
        } else {
          return true;
        }
      }
    },
    {
      type: "input",
      name: "author",
      message: "Who are you? You can use a username or your name",
      required: true
    },
    {
      type: "input",
      name: "footer",
      message:
        "Would you like to add a footer? Something like 'Copyright name, 2020'"
    }
  ]);
 
  var res = response;
  res.pages = [
    {
      title: "Main",
      id: "main",
      content: `Welcome to the website of **${res.author}!** If you are seeing this, congraulations! 
      You now have a valid JSONsite! Further configuration is required however. To finish setting up your site, 
      You might wanna see some examples at jsonsite.now.sh/sites/`
    }
  ];
  if (res.footer == ""){
    res.footer = `&copy; ${new Date().getFullYear()} ${res.author}. All rights reserved.`
  }
  console.log(res)
})();
