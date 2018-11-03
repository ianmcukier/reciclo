const express      = require('express');
const PARAMETERS   = require('./parameters');
const mongoose     = require('mongoose');

var db              = mongoose.connection;

module.exports = {

    /* MongoDB - Mongoose Driver - Configuration file;

    ? Connects to MongoDB by Mongoose Driver:

    * If any error is thrown then it will try to connect again to the same driver.
    * Once connected it emmits a "db_ready" event sinalizing that node should start the server.
    * 
    */

    startup : function(app){
        console.log("[MONGOOSE] # CONECTANDO ...");
        mongoose.connect(PARAMETERS.MONGO.URL);

        db.once('open', function() {
            console.log("[MONGOOSE] # CONECTADO AO BANCO");
            app.emit('db_ready'); 
          });
          
          db.on('error', (err) =>{
            console.log("[MONGOOSE] # [CONNECTION ERROR]: ", err);
            console.log("[MONGOOSE] # RETRYING CONNECTION: ");
          
            setTimeout(() => {
            console.log("[MONGOOSE] # CONNECTING AGAIN: ");
              mongoose.connect(PARAMETERS.MONGO.URL);
            }, 500);
          
          });
    }
}