const myDB = require('../models/my_db');


//function to get all friends
const getFriends = () => {
    console.log("Getting all friends",myDB);
    return myDB;
};

//This function will return all the friends by ID
const getFriendsByID = (request) => {

    for (let i = 0; i < friends.length; i++) {
        
        if (request.params.student_id == myDB.friends[i].id) {
            return myDB.friends[i];
        }

        console.log(myDB.friends[i]);

    }

    return null;
};


module.exports = {getFriends, getFriendsByID};