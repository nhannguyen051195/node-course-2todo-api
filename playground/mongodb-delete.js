const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect');
    }
    else {
        console.log('connected succesfully');
        /*  db.collection('Todos').deleteMany({text:'eat lunch'}).then(result=>{
             console.log(result);
         }) */

        /*  db.collection('Todos').deleteOne({text:'eating'}).then(result=>{
             console.log(result);
         }) */
        /* db.collection('Todos').findOneAndDelete({completed:false}).then(result=>{
            console.log(result);
        }) */
        db.collection('Users').findOneAndDelete({ name: 'Nhan' }).then(result => {
            console.log(JSON.stringify(result, undefined,2));
        
        })




        }})