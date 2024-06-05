
const fs = require('fs');
const { promptUser, createShape } = require('./cli');

promptUser()
  .then(answers => {
    const shape = createShape(answers.shape, answers.shapeColor);
    const svgContent = shape.render(answers.text, answers.textColor);

    fs.writeFile('logo.svg', svgContent, err => {
      if (err) {
        console.error('Error writing file:', err);
      } else {
        console.log('Generated logo.svg');
      }
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });
