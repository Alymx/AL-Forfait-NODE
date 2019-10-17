
// let map = require('lodash/map');
// console.log(map([1, 2, 3], function(n){ return (n*4); }));

let app = require('express')();

app.get('/', (req, res)=>{
    res.send("Salut t'es a la racine...");
});
app.get('/tuto', (req, res)=>{
    res.send("Salut t'es sur le tuto");
});

app.listen(5001);

// let starter = require('./Starter').start(5000);
//
// starter.on('root', (res)=>{
//     res.write('Je suis a la racine');
// });

