const routes = module.exports = require('next-routes')()
 
routes
.add('about', '/about/:slug')
.add('search', '/blog/:slug')
.add('profile', '/user/:id', 'profile')
.add('/:noname/:lang(en|es)/:wow+', 'complex')
.add({name: 'beta', pattern: '/v3', page: 'v3'})