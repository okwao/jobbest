Template.jobs.helpers({
	job:function(){
		return Jobs.find().fetch();
	}
})