var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views', './views');

app.get('/login', (req, res) => {
   res.render('first-template');
});

app.get('/auth/google', (req, res) => {
   res.render('userlogin', {
      user: { login: req.query.login, password: req.query.password }
   });
});

app.listen(3000);
app.use((req, res, next) => {
   res.status(404).send('Sorry we cant find what you request !');
});
