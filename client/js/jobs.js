Template.jobs.events({
	'click .apply-button': function (e,t) {
		Session.set('applyingTo',this._id);
	}
});