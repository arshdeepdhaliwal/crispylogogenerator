
const inquirer = require('inquirer');
const { Circle, Triangle, Square } = require('./shapes');

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Enter text for the logo (up to 3 characters):',
    validate: input => input.length <= 3 || 'Text must be up to 3 characters.',
  },
  {
    type: 'input',
    name: 'textColor',
    message: 'Enter text color (color keyword or hexadecimal):',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'Choose a shape for the logo:',
    choices: ['Circle', 'Triangle', 'Square'],
  },
  {
    type: 'input',
    name: 'shapeColor',
    message: 'Enter shape color (color keyword or hexadecimal):',
  },
];

function promptUser() {
  return inquirer.prompt(questions);
}

function createShape(shapeType, color) {
  switch (shapeType) {
    case 'Circle':
      return new Circle(color);
    case 'Triangle':
      return new Triangle(color);
    case 'Square':
      return new Square(color);
    default:
      throw new Error('Unknown shape type');
  }
}

module.exports = { promptUser, createShape };
