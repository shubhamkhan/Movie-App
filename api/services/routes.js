//Router calling
const express = require('express');
const route = express.Router();


//Controller
const user = require('../controllers/UserController');


//Middleware
const isAuthenticate = require('../services/authenticate');

//Page routes
route.post('/register', user.register);
route.post('/login', user.login);
route.get('/logout', user.logout);
route.get('/about', isAuthenticate, (req, res) => {
    res.send(req.rootUser);
});

route.get('/', user.show);


// route.post('/dashboard/insert', auth.isLoggedin, crud.add);
// route.get('/dashboard', auth.isLoggedin, crud.show);
// route.get('/dashboard/:id', auth.isLoggedin, crud.finddata);
// route.post('/dashboard/:id', auth.isLoggedin, crud.update);
// route.get('/dashboard/delete/:id', auth.isLoggedin, crud.delete);

// route.get('/login', (req, res) => {
//     req.flash('message', 'Welcome User , Please Login.');
//     res.render('index', { title: 'Welcome Application', user: '' });
// });

//login and registration
// route.post('/signup', auth.register);
// route.post('/login', passport.authenticate('local', {
//     successRedirect: '/dashboard',
//     failureRedirect: '/login',
//     successFlash: true,
//     failureFlash: true
// }));

//logout
// route.get('/logout', (req, res) => {
//     req.logout();
//     req.flash('message', 'You are logged Out !!!');
//     res.redirect('/login');
// });

module.exports = route;