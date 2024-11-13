const express = require('express');

//service import
const my_business_logic = require('./service/my_business_logic');


const app = express();
const port =5001;
app.use(express.json());

//GET
//Greetings
app.get('/greetings', (request, response) => {
    return response.send({msg: "Hello Samuel!"});
});


// List of friends
let friends = [
    {"id":1, "name": "Josh"},
    {"id":2, "name": "Sarah"},
    {"id":3, "name": "Alex"},
    {"id":4, "name": "ALexico"},
];

app.get('/list_of_friends',(request, response) => {
    return response.send(friends);
});

app.get('/list_of_friends',(request, response) => {
    console.log("I got here too")
    return response.send(my_business_logic.getFriends());
});


app.get('/list_of_friends_by_id/:student_id',(request, response) => {0
    console.log("logging request params", request.params);

    console.log("Use value from fron end", request.params.student_id);

    return response.status(200).send(my_business_logic.getFriendsByID(request));
});


//POST
app.post('/signup', (request, response) => {

    console.log("Logging request body", request.body);

    return response.status(200).send("Heyyyy we are using a post method");
   
});


app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`);

});
