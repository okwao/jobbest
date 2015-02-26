Template.Layout.events({
 'click .sign-in-required': function(e,t){
   if (!Meteor.userId()) {
        alert('sign in required');
        return false;
 }
}
})