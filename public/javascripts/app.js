angular.module("app-name", ["ui.router"]);

angular.module("app-name").config(
  function($stateProvider,$urlRouterProvider){
    $stateProvider.state("home", {
        url: "/home",
        views: {
          "container@" : {
            templateUrl: "partials/home.html",
            controller: "MainController",
            controllerAs: "Ctrl"
        }
      }
    });


      $urlRouterProvider.otherwise("home");

});
