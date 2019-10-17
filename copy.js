let fs = require('fs');

let file = "tuto.mp4";

    //Fonction de progression
    fs.stat(file, (err, stat)=>{
        let total = stat.size;

        let progress = 0;
        //Recuperation du fichier stream
        let read = fs.createReadStream(file);
        let write = fs.createWriteStream('copie.mp4');
        let write2 = fs.createWriteStream('tuto.mp4');

        read.on('data', (chunck)=>{
           progress += chunck.length;
            console.log(" J'ai lu: " + Math.round(progress * 100 / total) + "%");
        });
        //Synchronisation eds lectures et ecritures
        read.pipe(write);
        read.pipe(write2);
        write.on('finish', ()=>{
            console.log("J'ai termine de copier le fichier ");
        });
    });




