Router.configure({
    layoutTemplate:'home',
    loadingTemplate:'loading',
    notFoundTemplate:'error404',
    waitOn:function(){Meteor.subscribe("allProduct")}
});
Router.route('/',{name:'home'})
// 若无法发现路径或者查询无数据 则指定404 页面
Router.onBeforeAction('dataNotFound',{only:'home'})
;
