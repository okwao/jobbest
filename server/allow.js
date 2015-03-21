Applications.allow({
	insert: function (userId, doc) {
		//is owner
		//is signed in
		if (userId) {
			return true
		};
	},
	update: function (userId, doc, fields, modifier) {
		if (userId && (userId === doc.owner)) {
			return true
		};
	},
	remove: function (userId, doc) {
		if (userId === doc.owner) {
			return true
		}; 
	}
});

Jobs.allow({
	insert: function (userId, doc) {
		//is owner
		//is signed in
		if (userId) {
			return true
		};
	},
	update: function (userId, doc, fields, modifier) {
		if (userId && (userId === doc.owner)) {
			return true
		};
	},
	remove: function (userId, doc) {
		if (userId === doc.owner) {
			return true
		}; 
	}
});

Images.allow({
	insert: function (userId, doc) {
		//...
		return true;
	},
	update: function (userId, doc, fields, modifier) {
		//...
		return true;
	},
	remove: function (userId, doc) {
		//...
		return true;
	},
	fetch: ['owner'],
	download: function () {
		//...
		return true;
	}
});