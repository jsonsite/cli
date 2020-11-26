const { prompt } = require("enquirer");
(async () => {
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
      message: "Would you like to provide a image? You don't have to though."
    },{
      type: "input",
      name: "author",
      message: "Who are you? You can use a username or your name",{
      type: "input",
      name: "description",
      message: "Can you describe your website? (Description)"
    }
    }
  ]);
  console.log(response);
})();
