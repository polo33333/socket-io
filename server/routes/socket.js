// const io = require('socket.io');
module.exports = function(io) {
    const express = require('express');
    const router  = express.Router();
    
    io.on('connection', (socket) => {
        console.log('user connected:'+socket.id);
        socket.on('disconnect', () => {
            console.log('user disconnected:'+socket.id);
        });
    });


    return router;
};
