const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;
const app = express();
const post = 8000;
const password = 'password';




app.get('/Hello', (req,res) => {
    res.send('Hello');
});

app.get('/encode/:name', (req,res) => {
    res.send(Vigenere.Cipher(password).crypt(req.params.name));
});

app.get(`/decode/:name`, (req, res) => {
    res.send(Vigenere.Decipher(password).crypt(req.params.name));
})

app.listen(post,() => {
    console.log(`server http://localhost:${post}/`)
});



