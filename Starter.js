
//Creation d'evenement; il permet d'instancier des elements
const EventEmitter = require('events');
let http = require('http');
let fs = require('fs');
let url = require('url');
// let monEcouteur = new EventEmitter();
//
// monEcouteur.on('trivial', (a, b)=>{
//     console.log('Trivialisation effectuee', a, b);
// });

// monEcouteur.emit('trivial', 10, 20);
// monEcouteur.emit('trivial');
// monEcouteur.emit('trivial');
//Creation objet de demarrage
let Starter = {
    //creation fonction
    start: function(port){
        const emitter = new EventEmitter();

        let server = http.createServer((req, res)=>{
            res.writeHead(200, {"Content-type":"text/html; charset=utf-8"});
            if(req.url === '/'){
                emitter.emit('root', res);
            }
            res.end();
        }).listen(port);

        return emitter;

    }
};


module.exports = Starter;