#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
// var {
//   parse
// } = require('@babel/parser');
// var {
//   default: generate
// } = require('@babel/generator');
const TypeCreate = require("../dist/cjs/index.prod")
const OB = TypeCreate.default;
const current = process.cwd();

function read(target) {
  try {
    return fs.readFileSync(target, 'utf-8')
  } catch (error) {
    console.error(error)
    return '{}'
  }
}

function format(jsStr) {
//   const code = generate(parse(jsStr, {
//     sourceType: "module"
//   }), {
//     retainLines: true,
//     comments: true,
//   }).code
//   debugger
}

function exec(target) {
  const context = read(target);
  const object = Function(`
    const result = ${context};
    return result;
  `)()
  const result = OB.PropsPlugin.getTypeSpec(object, true)
  //`${result}`.replace(/\"/g,'').replace(/\r|\n/g,'');
  const execStr = `\`${result}\`.replace(/\"/g,'').replace(/\\r|\\n/g,'')`;
  const jsStr = Function(`return ${execStr}`)();
  console.log(jsStr)
  format(jsStr);
}

function getFilePath(target) {
  if (fs.existsSync(target) && fs.lstatSync(target).isFile()) {
    return target
  }
  target = path.join(current, target)
  if (fs.existsSync(target) && fs.lstatSync(target).isFile()) {
    return target
  }
  return null
}

if (process.argv.length === 3) {
  const target = getFilePath(process.argv[2]);
  if (target) exec(target)
}
