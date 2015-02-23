Router.configure({
  layoutTemplate: "Layout",
  routeControllerNameConverter: "camelCase",
  notFoundTemplate: '404'
})
Router.route('/', function () {      // Route is the path after the url
  this.render('home');               // 'home' refers to the home template
}, {
  name: 'home'                       // name is an arbitrary value. Useful for helpers
});

Router.route('/jobs', function () {
  this.render('jobs');
}, {
  name: 'jobs'
});