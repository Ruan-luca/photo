app.controller('articleCtrl', function($scope, PostFactory, $routeParams){
    var post = PostFactory.getPost($routeParams.id);
    $scope.images = post.image;
    $scope.titles = post.title;
    $scope.comment = post.comments;
    
  })