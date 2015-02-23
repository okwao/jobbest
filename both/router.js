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
  name: 'jobs',

  data: function() {                // Data context for the route. Allows properties of retuned
  	return {                        // objects to be rendered in tempate e.g. {{pageTitle}}
  		jobs: Jobs.find().fetch(), 
  		pageTitle: 'This is my job page'
  	}
  }
});

Router.route('/jobs/:category/', function(){
	this.render('jobs');          // Render the same template as '/projects' route
}, {
	name: 'jobsCategory',

	data: function(){
		return {                        // Return only documents with the category in the parameters
			jobs: Jobs.find({category: this.params.category}).fetch(),
			pageTitle: 'Category: ' + this.params.category
		}
	}
})