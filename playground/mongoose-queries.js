const {ObjectID}= require('mongodb')
const {mongoose} = require('./../server/db/mongoose')
const {Todo}= require('./../server/models/todo')
const {User}= require('./../server/models/user')

/* var id="16ba3b0fbb4826a8358c9c066";

if(!ObjectID.isValid(id)){
    console.log('ID not valid');
} */
/* Todo.find({
    _id:id
}).then((todos)=>{
    console.log('Todos', todos);
})

Todo.findOne({
    _id:id
}).then((todo)=>{
    console.log('todo', todo);
}) */

/* Todo.findById(
    id
).then((todo)=>{
    if(!todo){
        return console.log('id not found!');
    }
    console.log('todo By Id', todo);
}).catch(e=>{
    console.log(e);
})
 */
var id ="5ba35404da0b58b346014ea3"
User.findById(
    id
).then((user)=>{
    if(!user){
        return console.log('id not found!');
    }
    console.log(JSON.stringify(user, undefined,2));
}).catch(e=>{
    console.log(e);
})


