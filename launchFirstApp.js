if (Meteor.isClient) {
Template.content.users = function() {
  return Meteor.users.find();
};
}
