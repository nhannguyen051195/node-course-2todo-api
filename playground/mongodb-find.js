const {MongoClient,ObjectID}=require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
      return  console.log('unable to connect');
    }
    else{
        console.log('connected succesfully');
        
        /* db.collection('Todos').find({_id: new ObjectID("5ba3283f6bf9743db52f4f9d")}).toArray().then(docs=>{
            console.log('Todos');
            console.log(JSON.stringify(docs, undefined,2));
        }, (err)=>{
            console.log('unable to fetch todos');
        }) */

        db.collection('Users').find({name:'Meu'}).toArray().then(docs=>{
            console.log(JSON.stringify(docs, undefined,2));
        }, (err)=>{
            console.log('unable to fetch todos');
        })
       // db.close()
    }
});