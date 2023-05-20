const mongoose = require('mongoose');

// create connection to mongoDB 
const dbURI = 'mongodb://127.0.0.1/Loc8r';
mongoose.connect(dbURI, {useNewUrlParser: true});

// log primary events to console
mongoose.connection.on('connected', () => {            
    console.log(`Mongoose connected to ${dbURI}`);       
});                                                    
mongoose.connection.on('error', err => {               
    console.log('Mongoose connection error:', err);      
});                                                    
mongoose.connection.on('disconnected', () => {         
    console.log('Mongoose disconnected');                
}); 


const gracefulShutdown = (msg, callback) => {
    mongoose.connection.close( () => {
        console.log(`Mongoose disconnected through ${msg} `);
        callback();
    });
};
const readLine = require ('readline');
// code to emit SIGINT signal on windows operating system
if (process.platform === 'win32'){
    const rl = readLine.createInterface ({
      input: process.stdin,
      output: process.stdout
    });
    rl.on ('SIGINT', () => {
      process.emit ("SIGINT");
    });
}

process.once('SIGUSR2', () => {                        
    gracefulShutdown('nodemon restart', () => {          
      process.kill(process.pid, 'SIGUSR2');              
    });
});

process.on('SIGINT', () => {                           
    gracefulShutdown('app termination', () => {          
      process.exit(0);                                   
    });
});

require('./locations');


