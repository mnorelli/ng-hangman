console.log('app.js loaded!');

// initialize the application
angular
  .module("hangmanApp", [])
  .controller('hangmanCtrl', hangmanCtrl);

hangmanCtrl.$inject = ["$scope","$http"];
function hangmanCtrl($scope, $http){

  var url = "http://randomword.setgetgo.com/get.php";
  var url = url + "?callback=JSON_CALLBACK";

  $http.jsonp(url)
      .success(function(data){
        $scope.wordToGet = data.Word;
        console.log("wordToGet:"+$scope.wordToGet)
      })
      .error(function(data, status, headers, config){
        alert("error:"+data)
      });

  console.log("wordToGet outside:"+$scope.wordToGet)
  
  $scope.hangman = new HangmanGame($scope.wordToGet);

  $scope.guessLetter = function(guessed){
    $scope.hangman.guess(guessed);
    $scope.guessed = '';

    }

};