import fs from "fs";
import path from "path";

const SVG_FOLDER = path.resolve("src/assets/svg");
const OUTPUT_FILE = path.resolve("src/assets/icons.jsx");

const createJsxComponent = (componentName, svgContent) => `
export const ${componentName} = (props) => (
  ${svgContent.replace(/<svg/, "<svg {...props}")}
);
`;

fs.readdir(SVG_FOLDER, (err, files) => {
  if (err) {
    console.error("Error reading folder:", err);
    return;
  }

  const svgFiles = files.filter((file) => path.extname(file) === ".svg");
  let jsxComponents = "";

  svgFiles.forEach((file) => {
    const svgFilePath = path.join(SVG_FOLDER, file);
    const componentName = path
      .basename(file, ".svg")
      .replace(/[-_](.)/g, (_, char) => char.toUpperCase())
      .replace(/^(.)/, (_, char) => char.toUpperCase());

    const svgContent = fs.readFileSync(svgFilePath, "utf-8");
    jsxComponents += createJsxComponent(componentName, svgContent);
  });

  const finalOutput = `
import React from 'react';

${jsxComponents}
  `;
  fs.writeFileSync(OUTPUT_FILE, finalOutput);
  console.log("JSX icons have been created at:", OUTPUT_FILE);
});
