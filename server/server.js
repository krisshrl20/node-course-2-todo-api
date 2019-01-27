var express=require('express');
var bodyParser=require('body-parser');

var {mongoose}=require('./db/mongoose.js');
var {Todo}=require('./model/todo.js');
var {User}=require('./model/user.js');

var app=express();
app.use(bodyParser.json());

app.post('/todos',(req,res)=>{
  //console.log(req.body);
  var todo=new Todo({
    text: req.body.text
  });
  todo.save().then((doc)=>{
    res.send(doc);
  }, (e)=>{
    res.status(400).send(e);
  });
});


app.listen(3000,()=>{
  console.log('Started on port 3000');
});




// var mongoose=require('mongoose');
//
// mongoose.Promise=global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');

// var Todo=mongoose.model('Todo',{
//   text: {
//     type: String,
//     required: true,
//     minlength: 1,
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type:Number,
//     default: null
//   }
// });

// var newTodo=new Todo({
//   text: 'Cook Dinner'
// });
//
// newTodo.save().then((doc)=>{
//   console.log('Saved todo',doc);
// }, (e)=>{
//   console.log('Unable to save todo');
// });

//Challenge

// var otherTodo=new Todo({
//   text: 'Its Me',
//   completed: true,
//   completedAt: 123
// });

// var otherTodo=new Todo({
//   // text: ' KR RAUL  '
//   //text: 277
//   text: true
// });

// otherTodo.save().then((doc)=>{
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e)=>{
//   console.log('Unable to save',e);
// });
//
// var User=mongoose.model('User',{
//   email: {
//     type: String,
//     required: true,
//     minlength: 1,
//     trim: true
//    }
// });

// var user=new User({
//   email: "abc@mail   "
// });
//
// user.save().then((doc)=>{
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (e)=>{
//   console.log('Unable to save',e);
// });
