//const MongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client)=>{
  if(err){
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');
  const db=client.db('TodoApp');
  //db.collection('Todos').find({completed: false}).toArray().then((docs)=>{
  // db.collection('Todos').find({
  //   _id: new ObjectID('5bd1d9d2647109572047ee05')
  // }).toArray().then((docs)=>{
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('Unable to fetch todos',err);
  // });

  // db.collection('Todos').find().count().then((count)=>{
  //   console.log(`Todos count: ${count}`);
  //   console.log(JSON.stringify(docs,undefined,2));
  // },(err)=>{
  //   console.log('Unable to fetch todos',err);
  // });

  //Challenge

  db.collection('Users').find({name: 'Krishna'}).toArray().then((docs)=>{
    console.log('Users');
    console.log(JSON.stringify(docs,undefined,2));
  });

//  client.close();
});
