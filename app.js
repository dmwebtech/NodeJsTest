const express = require('express'); // importer express
const mongoose = require('mongoose');

const app = express(); // Créer une application express

// Attention ne pas mettre de caractère spéciale dans le mdp cela pourrait causer des problèmes.
mongoose.connect('mongodb+srv://DorisZ21:Dodo210120040801@cluster0.3r4uz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0\n' +
    '\n',
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));

/*
app.use((req,res,next)=>{
    console.log('Requete reçue !');
    res.status(201); // Modifier le code de la réponse.
    next(); // Passer au middleware suivant.
});
//req => objet request
//res => objet réponse
//next => permet de renvoyer à la prochaine fonction l'exécution du serveur
app.use((req,res,next)=>{
    res.json({message : "Votre requete à bien été reçue !"});
});

*/

app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

// middleware qui intercèpte toutes les requetes post qui pointe vers cette route.
app.post('/api/stuff', (req,res,next) => {
    console.log(req.body);
    res.status(201).json({
        'message' : 'objet créé'
    }); // obligation de renvoyer une réponse aussi non ça plante côté user
});

// middleware avec la route /api/stuff qui intercèpte toutes les requetes GET vers cet endpoint
app.get('/api/stuff', (req, res, next) => {
    // Tableau des objets
    const stuff = [
        {
            _id: 'oeihfzeoi',
            title: 'Mon premier objet',
            description: 'Les infos de mon premier objet',
            imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
            price: 4900, // chiffre en cent pour éviter des problèmes d'arithmétique
            userId: 'qsomihvqios',
        },
        {
            _id: 'oeihfzeomoihi',
            title: 'Mon deuxième objet',
            description: 'Les infos de mon deuxième objet',
            imageUrl: 'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
            price: 2900,
            userId: 'qsomihvqios',
        },
    ];
    res.status(200).json(stuff); // Attribut le code 200 (requete réussie) et renvoie le tableau des objets.
});

module.exports = app;