const { MongoClient, ObjectID } = require('mongodb')

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('unable to connect');
    }
    else {
        console.log('connected succesfully');
        db.collection('Users').findOneAndUpdate({
            _id: new ObjectID('5ba32928552ed43db73b0ba5'),

        }, {
                $set: {
                    name: 'Nhan Meu'
                }
                ,
                $inc:{
                    age:2
                }
            },{
                returnOriginal: false
            }).then(result=>{
                console.log(result);
            })

        //db.close()
    }
});