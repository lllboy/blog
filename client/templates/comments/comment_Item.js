/**
 * Created by Liu on 2017/9/23.
 */
Template.commentsItem.helpers({
    UserImages:function () {
        var userId = Comments.findOne({_id: this._id}).userId;
        var username = Comments.findOne({_id: this._id}).username;
        var URL = UserImages.findOne({username: username}, {userId: userId});
        return URL;
    },
    comments:function () {
        return Comments.find({jokeId: this._id});
    }
})