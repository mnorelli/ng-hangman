console.log('app.js loaded!');

// initialize the application
angular
  .module("hangmanApp", [])
  .controller('hangmanCtrl', hangmanCtrl);

hangmanCtrl.$inject = ["$scope"];
function hangmanCtrl($scope){
    $scope.hangman = new HangmanGame('elephant');

    $scope.guessLetter = function(guessed){
      $scope.hangman.guess(guessed);
      $scope.guessed = '';

    }

};