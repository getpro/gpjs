/**
 * Created by YuQi on 2016/9/23.
 */
var app=angular.module("futures",[]);
app.run(['$rootScope',function($rootScope){
    $rootScope.data=data;
}]);
app.controller("myCtrl",function ($scope,$rootScope) {
    $scope.op=data[0];
    $scope.hand=0;
    $scope.mprice=0;
    $scope.sale=0;
    $scope.ml=0;
    $scope.dc=0;
    $scope.sxf=0;
});