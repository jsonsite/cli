const { prompt } = require("enquirer");

(async () => {
  var validator = require('validator')
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
      message: "Would you like to provide a image? You don't have to though.",validate(value, state, item, index) {
        if(!validator.isURL(value)){
          return false
        } else {
          return true
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
      message: "Would you like to add a footer? Something like 'Copyright name, 2020'"
    }
  ]);
  console.log(response);
})();
