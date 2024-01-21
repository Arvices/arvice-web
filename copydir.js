const copyDir = require("copy-dir");
const rename = require("rename-overwrite");
const path = require("node:path");
const fs = require("node:fs");

function replace(pathToFile, options) {
  let file = fs.readFileSync(pathToFile).toString();
  console.log("file splitted", file.split("\n")[0]);
  file = file.replaceAll(options.from, options.to);
  fs.writeFileSync(pathToFile, file);
  console.log("written");
}

let componentName = process.argv[2];
let to = path.join(__dirname, "src", "components", componentName);
let from = path.join(__dirname, "src", "components", "_reference_component");
console.log("from", from, "to", to);
copyDir(from, to, {}, async (err) => {
  if (err) {
    console.error(err.message);
  } else {
    let jsxFile = path.join(to, `ref.jsx`);
    let cssFile = path.join(to, `ref.css`);
    let newCssFile = path.join(to, `${componentName}.css`);
    let newJsxFile = path.join(to, `${componentName}.jsx`);

    rename(cssFile, newCssFile)
      .then(() => {
        console.log("successfully renamed css file");
      })
      .catch((err) => {
        console.error(err.message);
      });

    rename(jsxFile, newJsxFile)
      .then(() => {
        replace(newJsxFile, { from: "ref", to: componentName });
        replace(newJsxFile, { from: "ref", to: newJsxFile });
        console.log("successfully renamed .jsx file");
      })
      .catch((err) => {
        console.error(err.message);
      });
  }
});
