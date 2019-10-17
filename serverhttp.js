


let demo = require('./hello');

demo.hello();
demo.aurevoir();

/*serverhttp.on('request', (req, res)=>{
    res.writeHead(200);
    let query = url.parse(req.url, true).query;
    let name = query.name === undefined ? "anonyme" : query.name ;
    // req.url = path;
    // url.parse(req.url) = objet complet d'infos de l'URL
    //url.parse(req.url).query = une des valeurs de l'objet precedent
    // if(query.name === undefined)
    //     res.write("T'as pas de nom ???");
    // else
    //    { res.write("Je t'aime " + query.name);}
    // res.end();

    //Renvoi de page HTML
    fs.readFile('index.html', "utf-8",(err, data)=>{
        //En cas d'erreur, renvoyer l'erreur
        if(err){
            // throw err; // Retourner message d'erreur
            res.writeHead(404);
            res.end("Ce fichier n'existe pas");
        }else{
        //Sinon signer l'entete
        res.writeHead(200, {'Content-type':'text/html; charset=utf-8'});
        //Remplacement de variable
            data = data.replace("{{ name }}", name);
        //terminer en envoyant les informations de la fonction
        res.end(data);}
    });
});

serverhttp.listen(5000);*/