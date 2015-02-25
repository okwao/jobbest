Applications = new Mongo.Collection("Applications")
Applications.attachSchema(new SimpleSchema({
	// jobs:{
	// 	type: String,
	// 	autoform:{
	// 		omit: true
	// 	}
	// },
	letter:{
		type: String,
		max: 200,
		label: 'Cover Letter',
		autoform:{
			rows: 5
		}
	},
	owner: {
		type: String,
		autoform: {
			omit: true
		},
		autoValue: function(){
			if (this.isInsert){
				return Meteor.userId();
			}
		}
	}
}))