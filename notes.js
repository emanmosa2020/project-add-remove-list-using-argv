const fs = require('fs')
const { title } = require('process')

const addNote = (title,body) => {
    const notes = loadNotes() 

    //check dublicate title
    const doublcatetitle=notes.filter((note)=>{
        return note.title===title
    })

   if  (doublcatetitle.length==0){
    notes.push({
        title:title,
        body:body
   })
   saveNotes(notes)
   console.log("sucsess ")
}
   else {
    console.log("error ")
    }

    

}
const removetitle=(title)=>{
    const notes =loadNotes()
    const notestokeep=notes.filter((note)=>{
        return note.title !==title
    })
   
    console.log('notes to keep',notestokeep)
    saveNotes(notestokeep)
}

const readtitle=(title)=>{
    const notes=loadNotes()
    const mynode=notes.find((note)=>{
        return note.title==title
    })
    if(mynode){
        console.log(mynode)
        console.log(mynode.title)
        console.log(mynode.body)
    }
    else{
        console.log("not found")
    }
}

const showall=()=>{
    const notes=loadNotes()
    const mynote= notes.forEach(element => {
       // return notes[element]
       console.log(element)
       console.log(element.title)
        console.log(element.body)
    });
    // console.log(mynote)
    // console.log(mynote.title)
    // console.log(mynote.body)
}
// Return array 
const loadNotes = () =>{
    try{
    const dataBuffer = fs.readFileSync('notes.json').toString()
    return JSON.parse(dataBuffer)
   
    }
    catch(e){
        return [];
    }
  
}

const saveNotes = (notes) =>{
    const saveData = JSON.stringify(notes)
    fs.writeFileSync('notes.json',saveData)
    console.log(fs.readFileSync('notes.json').toString())
}

module.exports = {
    addNote,
    removetitle,
    readtitle,
    showall
}