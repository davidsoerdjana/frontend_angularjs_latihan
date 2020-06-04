var app = angular.module('xapp', []);

app.controller('xctrl', function ($scope) {
     $scope.operate = function (code) {
          var a = +$scope.obj1; //tanda + untuk merubah ke integer
          var b = +$scope.obj2;
          switch (code) {
               case 1:
                    $scope.operation = "Penjumlahan";
                    $scope.result = a + b;
                    break;
               case 2:
                    $scope.operation = "Pengurangan";
                    $scope.result = a - b;
                    break;
               case 3:
                    $scope.operation = "Perkalian";
                    $scope.result = a * b;
                    break;
               case 4:
                    $scope.operation = "Pembagian";
                    $scope.result = a / b;
                    break;
          }
     };
});