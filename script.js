
$('#ssn').keyup(function() {
    var val = this.value.replace(/\D/g, '');
    var newVal = '';
    var sizes = [3, 2, 4];
    
    for (var i in sizes) {
      if (val.length > sizes[i]) {
        newVal += val.substr(0, sizes[i]) + '-';
        val = val.substr(sizes[i]);
      }
      else
        break;        
    }

    newVal += val;
    this.value = newVal;
});

var myApp = angular.module('myApp',[]);

myApp.controller('myController', function($scope) {

    $scope.myssn;
    $scope.ssnWithoutHyphen;

    $scope.showSSN = function(){
        console.log("Show SSN Called");
        $scope.ssnWithoutHyphen = $scope.myssn.replace(/[\W\s\._\-]+/g, '');
    }

});