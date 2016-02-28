angular.module('appRoutes', ['ui.router']).config(['$stateProvider' ,'$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
	 $urlRouterProvider.otherwise("/");
    $stateProvider.state('/', {
      url: "/",
      templateUrl: 'views/dashboard.html',
			controller: 'DashboardController'
    })
    .state('backlog', {
      url: "/backlog",
     templateUrl: 'views/backlog.html',
      controller: 'BacklogController'
    })
     .state('login', {
      url: "/login",
     templateUrl: 'views/login.html',
      controller: 'UserController'
    }) .state('userProfile', {
      url: "/userProfile",
     templateUrl: 'views/userProfile.html',
      controller: 'UserController'
    })
    .state('register', {
      url: "/register",
     templateUrl: 'views/register.html',
      controller: 'UserController'
    })
    .state('sprintBoard', {
      url: "/sprintBoard",
      templateUrl: 'views/sprintBoard.html',
	   controller: 'SprintBoardController'
    }).state('chart', {
      url: "/chart",
      templateUrl: 'views/burnDownCharts.html',
	   controller: 'SprintBoardController'
    }).state('chat', {
      url: "/chat",
      templateUrl: 'views/chat.html',
	   controller: 'SprintBoardController'
    })
    .state('masterTables', {
      url: "/masterTables",
     templateUrl: 'views/masterTables.html',
	 controller: 'MasterTablesController'
    }).state('masterTables.priority', {
      url: "/priorityMaster",
     templateUrl: 'views/priorityMaster.html',
	 controller: 'PriorityController'
    }).state('masterTables.project', {
      url: "/projectMaster",
     templateUrl: 'views/projectMaster.html',
	 controller: 'ProjectController'
    }).state('masterTables.role', {
      url: "/roleMaster",
     templateUrl: 'views/roleMaster.html',
	 controller: 'RoleController'
    }).state('masterTables.status', {
      url: "/statusMaster",
     templateUrl: 'views/statusMaster.html',
	 controller: 'StatusController'
    }).state('masterTables.userStoryType', {
      url: "/userStoryTypeMaster",
     templateUrl: 'views/userStoryTypeMaster.html',
	 controller: 'UserStoryTypeController'
    });

    

}]);