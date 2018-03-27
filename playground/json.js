// var obj={
//     name:'dhammika'
// };
// var stringObj=JSON.stringify(obj);

// console.log(typeof stringObj);
// console.log(stringObj);

// var personString='{"name":"Andrew","age":25}';
// var person=JSON.parse(personString);

// console.log(typeof person);
// console.log(person);

const fs=require('fs');

var originalNote={
    title :'some title',
    body :'some body'
};

//originalNotesString

var originalNoteString=JSON.stringify(originalNote);

fs.writeFileSync('notes.json',originalNoteString);

var notesString=fs.readFileSync('notes.json');

var note=JSON.parse(notesString);

//note
console.log(typeof note);
console.log(note.title);