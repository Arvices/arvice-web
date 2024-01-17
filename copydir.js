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
    let vueFile = path.join(to, `Ref.vue`);
    let testFile = path.join(to, `ref.test.js`);
    let newTestFile = path.join(to, `${componentName}.test.js`);
    let cssFile = path.join(to, `ref.css`);
    let newCssFile = path.join(to, `${componentName}.css`);
    let vueStyleComponentName =
      componentName[0].toUpperCase() +
      componentName.slice(1, componentName.length);
    let newVueFile = path.join(to, `${vueStyleComponentName}.vue`);

    rename(testFile, newTestFile)
      .then(() => {
        replace(newTestFile, { from: "Ref", to: vueStyleComponentName });
        console.log("successfully renamed test file and replaced string");
      })
      .catch((err) => {
        console.error(err.message);
      });

    rename(cssFile, newCssFile)
      .then(() => {
        console.log("successfully renamed css file");
      })
      .catch((err) => {
        console.error(err.message);
      });

    rename(vueFile, newVueFile)
      .then(() => {
        replace(newVueFile, { from: "ref", to: componentName });
        replace(newVueFile, { from: "Ref", to: vueStyleComponentName });
        console.log("successfully renamed .vue file");
      })
      .catch((err) => {
        console.error(err.message);
      });
  }
});
