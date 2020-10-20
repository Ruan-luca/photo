app.controller('homeCtrl', function($scope, PostFactory){

    $scope.home = PostFactory.getPosts();
     
  })