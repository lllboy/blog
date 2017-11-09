

Template.jokeForm.events({
	"submit .addJoke": function() {
		var jokeName = event.target.jokeName.value;
		var jokePost = event.target.jokePost.value;
		var tag = event.target.tag.value;
		var content = event.target.content.value;



		if (isNotEmpty(jokeName) &&isNotEmpty(tag) &&
			isNotEmpty(jokePost)) {

            var file = $('#cardImages').get(0).files[0];

            if (file) {
                fsFile = new FS.File(file);
                console.log(fsFile)
                JokeImages.insert(fsFile, function(err, result){
                    if (err) {
                        throw new Meteor.Error(err);
                    } else {

                        var imageUrl = '/cfs/files/JokeImages/'+result._id;
                        Meteor.call('addJokes', jokeName, jokePost, tag, content, imageUrl);
                        event.target.jokeName.value = "";
                        event.target.jokePost.value = "";
                        event.target.tag.value = "";
                        event.target.content.value ="";
                        Bert.alert("Your Joke Was Posted!", "success", "growl-bottom-right");
                        Bert.alert("Profile Update Successful!", "success", "growl-bottom-right");
                    }
                });
            }
		} else {
			Bert.alert("something went wrong", "danger", "growl-bottom-right");
		}
		return false; // prevent submit
	}
});

// Validation Rules

var isNotEmpty = function(value){
	if (value && value !== ''){
		return true;
	}
	Bert.alert("Please fill in all fields", "danger", "growl-bottom-right");
	return false;
};