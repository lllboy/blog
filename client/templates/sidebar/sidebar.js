Template.sidebar.helpers({
    email: function() {
        if(!Meteor.user()) {
            Bert.alert("you are not logged in, permission denied", "danger", "growl-bottom-right");
            return false;
        } else {
            return Meteor.user().emails[0].address;
        }
    },

    username: function() {
        if(!Meteor.user()) {
            Bert.alert("you are not logged in, permission denied", "danger", "growl-bottom-right");
            return false;
        } else {
            return Meteor.user().username;
        }
    },
    UserImages: function() {
        var username = Meteor.user().username;
        var userId = Meteor.userId();
        var URL = UserImages.findOne({username: username}, {userId: userId});
        return URL;
    }
});
Template.sidebar.events({
	"click .logout": function(event){
		Meteor.logout(function(err){
			if(err) {
				Bert.alert(err.reason, "danger", "growl-bottom-right");
			} else {
				Router.go('/');
				Bert.alert("you Are Now Logged Out", "success", "growl-bottom-right");
			}
		});
	},
});
$(document).ready(function(){

    $('.slider').slider();

    // Init Modal
    $('.modal').modal();

    // Init Sidenav
    $('.button-collapse').sideNav({
        menuWidth: 250, // Default is 300
        edge: 'left', // Choose the horizontal origin
        closeOnClick: true, // Closes side-nav on <a> clicks, useful for Angular/Meteor
        draggable: true, // Choose whether you can drag to open on touch screens,
	});
    //init parallax
    $('.parallax').parallax();

    //updateTextFields
    Materialize.updateTextFields();

});
