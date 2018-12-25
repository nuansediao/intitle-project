const name = require('./name');
const ss = require('./ss');
const users = require('./users');
module.exports = function(app){
    app.use(name.routes()).use(name.allowedMethods());
    app.use(ss.routes()).use(ss.allowedMethods());
    app.use(users.routes()).use(users.allowedMethods());
}