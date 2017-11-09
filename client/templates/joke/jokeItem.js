/**
 * Created by Liu on 2017/9/24.
 */
Template.jokeItem.helpers({
    UserImages: function () {
        var userId = Jokes.findOne({_id: this._id}).userId;
        var username = Jokes.findOne({_id: this._id}).author;
        var URL = UserImages.findOne({username: username}, {userId: userId});
        return URL;
    },
    commentCount: function () {
        var jokeId = Jokes.findOne({_id: this._id})._id;
        return Comments.find({jokeId:jokeId}).count();
    }

})