//connectDBService.js

module.exports = (configURL, database) => {

    let options = {
        useMongoClient: true,   //must sedert Mongoose 4
        reconnectTries: 5
    };

    let db = database.connect(configURL, options);

    database.connection.on("open", () => {
        var msg = "connection met mongodb " + configURL;
        console.log(msg)


    });

    
    
    database.connection.on("error", (error) => {
        console.log("connection error met mongodb " + configURL + ":" + error.message);

    });
    database.connection.on("close", () => {
        console.log("connection closed", configURL);

    });



    return database; //voor gebruik in andere modules
}