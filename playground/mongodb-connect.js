//const MongoClient= require('mongodb').MongoClient;
const {MongoClient,ObjectID}=require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
      return  console.log('unable to connect');
    }
    else{
        console.log('connected succesfully');
        
       /*  db.collection('Todos').insertOne({
            text: 'something todo',
            completed: false
        },(err, result)=>{
            if(err){
                return console.log('unable to insert todo', err);
            }
            console.log(JSON.stringify(result.ops, undefined, 2));
        }) */
      /*   db.collection('Users').insertOne({
            name: 'Nhan',
            age: 22,
            location: 'Espoo, Finland'
        }, (err, result)=>{
            if(err){
                return console.log('unable to insert todo', err);
            }
            console.log(result.ops[0]._id.getTimestamp());
        }) */
        db.close()
    }
});