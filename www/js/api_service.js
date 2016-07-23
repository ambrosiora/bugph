app.service('APIService', function($http) {
  var self = this;
  self.UrlApi = "http://localhost:8090";

  self.obterTodosBugs = function (callback){
      return $http({
        method: 'GET',
        url: self.UrlApi + '/api/bugs'
      })
  }

  self.postarBug = function(bug, callback){
  	return $http({
  		method: 'POST',
  		url: self.UrlApi + '/api/bug',
  		data: bug
  	})
  }

  self.novosBugs = function(bug, callback){
  	return $http({
  		method: 'GET',
  		url: self.UrlApi + '/api/novos?ultimo='+ultimo
  	})
  }

  return self;
})
