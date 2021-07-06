// Core Modules
/*
 const fs = require('fs')
 fs.writeFileSync('notes.txt','Helloo')
console.log(fs.readFileSync('notes.txt').toString())

 fs.appendFileSync('notes.txt',' Farah')
console.log(fs.readFileSync('notes.txt').toString())
*/
////////////////////////////////////////////////////////////////////////////////////

// Import to our own files
/*
 const x = require('./data')
 console.log(x.name)
 console.log(x.name2)
 console.log(x.sum1(5,5))
*/
//////////////////////////////////////////////////////////////////////////////////////

// npm init -y
// npm i name of module ex:- npm i validator
// In case node_modules --> npm i

// const validator = require('validator')
// console.log(validator.isEmail('farah'))

////////////////////////////////////////////////////////////////////////////////////

// console.log(process.argv)
// const command = process.argv[2]

// if(command === 'add'){
//     console.log('Add item')
// }
// else if(command === 'delete'){
//     console.log('Delete item')
// }
//////////////////////////////////////////////////////////////////////////////////

// Version 1
// Yargs

// Task --> Command add delete read list
const yargs = require("yargs");

// yargs.command({
//     command:'add',
//     describe:'Add notes',
//     handler:() =>{
//         console.log('Add notes')
//     }
// })

// yargs.command({
//     command:'delete',
//     describe:'Delete notes',
//     handler:() =>{
//         console.log('Delete notes')
//     }
// })

// yargs.command({
//     command:'read',
//     describe:'Read notes',
//     handler:() =>{
//         console.log('read notes')
//     }
// })

// yargs.command({
//     command:'list',
//     describe:'List notes',
//     handler:() =>{
//         console.log('List notes')
//     }
// })

///////////////////////////////////////////////////////////////////////////////////////

// Version 2 --> Builder
// yargs.command({
//   command: "add",
//   describe: "Add notes",
//   builder: {
//     title: {
//       describe: "This is title to our note",
//       demandOption: true,
//       type: "string",
//     },
//     body: {
//       describe: "This is body to our note",
//       demandOption: true,
//       type: "string",
//     },
//   },
//   handler: (argv) => {
//     console.log("Note title is ", argv.title);
//   },
// });

// yargs.command({
//   command: "delete",
//   describe: "Delete notes",
//   builder: {
//     title: {
//       describe: "This is title to our note",
//       demandOption: true,
//       type: "string",
//     },
//   },
//   handler: () => {
//     console.log("Delete notes");
//   },
// });

// yargs.command({
//   command: "read",
//   describe: "Read notes",
//   builder: {
//     title: {
//       describe: "This is title to our note",
//       demandOption: true,
//       type: "string",
//     },
//   },
//   handler: () => {
//     console.log("read notes");
//   },
// });

// yargs.command({
//   command: "list",
//   describe: "List notes",
//   handler: () => {
//     console.log("List notes");
//   },
// });


//////////////////////////////////////////////////////////////////////////////////////

// Version 3

const notes = require('./notes')

yargs.command({
  command: "add",
  describe: "Add notes",
  builder: {
    title: {
      describe: "This is title to our note",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "This is body to our note",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.addNote(argv.title,argv.body)
  },
});

yargs.command({
  command: "delete",
  describe: "Delete notes",
  builder: {
    title: {
      describe: "This is title to our note",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    console.log("Delete notes");
    notes.removetitle(argv.title)
  },
});

yargs.command({
  command: "read",
  describe: "Read notes",
  builder: {
    title: {
      describe: "This is title to our note",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    notes.readtitle(argv.title)
  },
});

yargs.command({
  command: "list",
  describe: "List notes",
  handler: () => {
    notes.showall()
  },
});









//console.log(yargs.argv);


 yargs.parse()

//////////////////////////////////////////////////////////////////////////////////////

// Trial.js

//////////////////////////////////////////////////////////////////////////////////////