const express = require('express');

// DATABASE CONNECTIVITY
const mongoose = require("mongoose");

function db_connect(){
    const url = "mongodb+srv://sixprodb:sixprodb123@sixpro.wj7sb6e.mongodb.net/777hub";
    mongoose.connect(url, {
    useNewUrlParser: true,
    });
    const con= mongoose.connection;
    con.on('open', ()=> {
        console.log('Database Connected');
});
}



// SOCKET CONNECTIVITY
// const socketIO = require('socket.io');
// const http = require('http');
// let app = express();
// let server = http.createServer(app);
// let io = socketIo(server);

// function socket_connect(){
//     let interval;
//     io.on("connection",(socket)=>{
//         console.log("New socket connected!");
//         if (interval) {
//             clearInterval(interval);
            
//         }
//         interval = setInterval(() => getApiAndEmit(socket), 1000);
        
//         socket.on("disconnect", () => {
//             console.log("Client disconnected");
//             clearInterval(interval);
//         });
//     });
// }


var toppos=0;
var botpos=0;

// CREATE BID FUNCTION
function createBid(rate, amount,mode,state){
     amount = parseInt(amount);
       if(state=='top'){
            if(mode=='L'||mode=='l'){
                toppos += rate*amount;
                botpos += (-1)*amount;
            }
            else if(mode=='K'||mode=='k'){
             toppos += rate*amount*(-1);
             botpos += amount;
            }   
        }
        else if(state=='bottom'){
            if(mode=='L'||mode=='l'){
                toppos += (-1)*amount;
                botpos += rate*amount;
            }
            else if(mode=='K'||mode=='k'){
                toppos += amount;
                botpos += rate*amount*(-1);
            }
        }
        return [toppos.toFixed(0), botpos.toFixed(0)];
}

// PAGINATION
function paginatedResult(model,Page,Limit){
     // middleware function
     
    const page = parseInt(Page);
    const limit = parseInt(Limit);
 
    // calculating the starting and ending index
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
 
    const results = {};
    if (endIndex < model.length) {
      results.next = {
        page: page + 1,
        limit: limit
      };
    }
 
    if (startIndex > 0) {
      results.previous = {
        page: page - 1,
        limit: limit
      };
    }
    results.results = model.slice(startIndex, endIndex);
    return results;
}

module.exports = {db_connect,createBid,paginatedResult}