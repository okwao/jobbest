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
        {value: 'android', label:'Android Developer'},
        {value: 'css', label:'HTML & CSS (UI/UX)'},
        {value: 'other', label:'Other'}
        ]
      }
    }
  },
  descriptionrequirements: {
    type: String,
    label: "Description & Requirements",
    min: 0
  },
  contacturl: {
    type: String,
    label: "Contact & Url",
  },
  dateofpost: {
    type: Date,
    label: "Date of Post",
  }
}));