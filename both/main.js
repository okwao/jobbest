Jobs = new Mongo.Collection("Job");
Jobs.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Title",
    max: 200
  },
  location: {
    type: String,
    label: "location",
    optional: true
  },
  Category: {
    type: String,
    label: "Category",
    min: 0
  },
  Description: {
    type: String,
    label: "Description",
    min: 0
  },
  Requirements: {
    type: String,
    label: "Requirements",
    optional:true,
    min: 0
  },
  Contact: {
    type: String,
    label: "Contact",
    max:10
  },
  url: {
    type: String,
    label: "url",
    optional: true,
    max: 1000
  },
  DateofPost: {
    type: Date,
    label: "Date of Post",
  }
}));