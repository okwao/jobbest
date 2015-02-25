Jobs = new Mongo.Collection("Job");
Jobs.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  location: {
    type: String,
    label: "Location",
    optional: true
  },
  category: {
    type: String,
    autoform: {
      options: function(){
        return[
        {value: 'fellows', label:'Teaching Fellow'},
        {value: 'web', label:'Web Developer'},
        {value: 'mobile', label:'Mobile Developer'},
        {value: 'dtdev', label:'Desktop Developer'},
        {value: 'other', label:'Other'}
        ]
      }
    }
  },
  descriptionrequirements: {
    type: String,
    label: "Description & Requirements",
    autoform: {
            rows: 3
        }
  },
  contacturl: {
    type: String,
    label: "Contact & Url",
     autoform: {
            rows: 3
        }
  },
  owner:{
    type: String,
    autoform:{
      omit: true
    },
    autoValue: function(){
      return Meteor.userId();
    }
  }
}));