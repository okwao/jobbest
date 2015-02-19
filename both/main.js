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
    label: "Category",
    min: 0
  },
  descriptionrequirements: {
    type: String,
    label: "Description & Requirements",
    min: 0
  },
  contacturl: {
    type: String,
    label: "Contact & Url",
    max:10
  },
  dateofpost: {
    type: Date,
    label: "Date of Post",
  }
}));