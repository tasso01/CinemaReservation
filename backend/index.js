const db = require('./database/db');
const createAssociations = require('./model/associations')



db.sync()
    .then(() => {console.log("Connected.")})
    .catch((err) => {console.log("Not Connected: " + err.message)});
    
createAssociations();