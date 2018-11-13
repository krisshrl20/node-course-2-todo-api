//const MongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client)=>{
  if(err){
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');
  const db=client.db('TodoApp');

  //DeleteMany
  // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // });

  //DeleteOne
  // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
  //   console.log(result);
  // });

  //findOneAndDelete
  // db.collection('Todos').findOneAndDelete({completed: false}).then((result)=>{
  //   console.log(result);
  // });

//Challenge
//DeleteMany
// db.collection('Users').deleteMany({name: 'Krishna'}).then((result)=>{
//   console.log(result);
// });

//DeleteOne
// db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
//   console.log(result);
// });

//findOneAndDelete
db.collection('Users').findOneAndDelete({
  _id: new ObjectID("5bd1db17f79cbfa47823677d")
}).then((result)=>{
  console.log(JSON.stringify(result, undefined,2));
});


//  client.close();
});
