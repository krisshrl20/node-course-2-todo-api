//const MongoClient=require('mongodb').MongoClient;
const {MongoClient, ObjectID} =require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',{ useNewUrlParser: true },(err,client)=>{
  if(err){
    return console.log('Unable to connect to mongodb server');
  }
  console.log('Connected to mongodb server');
  const db=client.db('TodoApp');

  // //findOneAndUpdate
  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5bead37825dc867d5d5be33b')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //     returnOriginal: false
  // }).then((result)=>{
  //   console.log(result);
  // });

  //Challenge
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5bd1db5667dd83812c0014e6')
  }, {
    $set: {
      name: 'new name'
    },
    $inc: {
      age: 1
    }
  }, {
      returnOriginal: false
  }).then((result)=>{
    console.log(result);
  });

//  client.close();
});
