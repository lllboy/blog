/**
 * Created by Liu on 2017/9/23.
 */
Template.commentsForm.events({
    "submit .commentForm": function (event, template) {
        event.preventDefault();
        var commentBody = event.target.body.value;
        var JokeId = template.data._id;
        console.log(commentBody+JokeId);

        if(isNotEmpty(commentBody)){

            Meteor.call("addComment", JokeId, commentBody);
            Bert.alert("Your Comments Was Posted!", "success", "growl-bottom-right");
            event.target.body.value = "";

        }else {

            Bert.alert("something went wrong", "danger", "growl-bottom-right");
        }


    }
});


var isNotEmpty = function(value){
    if (value && value !== ''){
        return true;
    }
    Bert.alert("Please fill in all fields", "danger", "growl-bottom-right");
    return false;
};