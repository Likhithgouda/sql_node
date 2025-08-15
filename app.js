const mysql2=require('mysql2');
//s1-import the package

//s2-configurw the db details


const connection=mysql2.createConnection({
 host:'localhost',
 user:'root',
 password:'ADMIN#123',
 database:'college'
})

//connect the databse



connection.connect(function(err){
    if(err) throw err;
    return;
})
console.log(`connection succesful`);


connection.query("select * from employee",function(error,results,fields){
  if(error) throw error;
  console.log(results);

  connection.end();
})


