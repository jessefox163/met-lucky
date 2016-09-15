Meteor.publish('allProduct',function(){
    return prouducts.find();
})