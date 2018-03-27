const fs=require('fs'),
notes=require('./notes'),
_=require('lodash'),
yargs=require('yargs');

var titleOption={
    describe:'Title of note',
    demand:true,
    alias:'t'
};
var bodyOption={
    describe:'Body of note',
    demand:true,
    alias:'b'
};

const argv=yargs
            .command('add','Add a new note',{
                title:titleOption,
                body:bodyOption
            })
            .command('list','List all notes')
            .command('read','Read a note',{
                title:titleOption
            })
            .command('remove','Remove a note',{
                title:titleOption
            })
            .help()
            .argv;

var command=argv._[0];

if(command==='add'){
    var note=notes.addNote(argv.title,argv.body);
    if(note){
        console.log('Note created');
        notes.logNote(note);
    }else{
        console.log('Note title taken');
    }
}else if(command==='list'){
    var allNotes=notes.getAll();
    console.log(`printing ${allNotes.length} note(s).`);
    allNotes.forEach((note) =>notes.logNote(note));
}else if(command==='read'){
    var note=notes.getNote(argv.title);
    if(note){
        console.log('Note found');
        notes.logNote(note);
    }else{
        console.log('Note not found');
    }

}else if(command==='remove'){
    var noteRemove=notes.removeNote(argv.title);
    var message=noteRemove?'Note was removed':'Not not found';
    console.log(message);
}
else{
    console.log('not recognized');
}