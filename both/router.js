Router.configure({
  layoutTemplate: "Layout",
})
Router.route('/', function () {      // Route is the path after the url
  this.render('home');               // 'home' refers to the home template
}, {
  name: 'home'                       // name is an arbitrary value. Useful for helpers
});

// Router.route('/addjob', function () {
//   this.render('addjob');
// }, {
//   name: 'addjob'
// });

Router.route('/jobs', function () {
  this.render('jobs');
}, {
  name: 'jobs'
});