// const car={
//     name:'BMW',
//     color:'Black'
// }
// console.log(car.name)

// // Convert from object to json (JSON.stringfy)
// const carJson = JSON.stringify(car)
// console.log(carJson)

// // Convert form JSON to object (JSON.parse)

// const carObject = JSON.parse(carJson)
// console.log(carObject)

////////////////////////////////////////////////////////////////////////////////////

const fs = require('fs')
// fs.writeFileSync('Txt.json',carJson)
// const data = fs.readFileSync('Txt.json').toString()
// console.log(data)
/////////////////////////////////////////////////////////////////////////////////////

// create object user name age
// chage obj --> json
// store in file
// json --> object
// update object
// object --> json
// write


const person = {
    name:'Osama',
    age:39
}

const personJson = JSON.stringify(person)
console.log(personJson)

fs.writeFileSync('person.json',personJson)

const obj = JSON.parse(personJson)
console.log(obj)

obj.name = 'Adam'
obj.age = 30

const userJson = JSON.stringify(obj)
fs.writeFileSync('person.json',userJson)

