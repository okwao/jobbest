AutoForm.hooks({
	insertJobForm:{
		onSuccess: function(operation,result,template){
			Router.go ('jobs')
		},
		OnError: function(operation,error,template){
			alert(error)
		}
	}
});

AutoForm.hooks({
  insertApplication: {
    formToDoc: function(doc, ss, formId) {
      console.log(doc);
      doc.jobs = Session.get('applyingTo');
      console.log(doc);
      return doc;
      Router.go('jobs')
    }
  }
});

  AutoForm.addHooks(null, {
    onError: function (operation, error, template) {
      console.log('Error: ' + error);
    }
  });