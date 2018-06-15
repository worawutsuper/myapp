var app=angular.module("myApp",[]);
app.controller("myCtrl",function($scope){
    $scope.fname="Wutfan";
    $scope.lname="Club";
});
app.directive("colortext",function(){
    return{
        template:"<h1 style='font-family:tahoma;color:red' >วุฒิ หล่อ <small>angular</small></h1>"
    }
});
