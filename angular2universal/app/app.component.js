(function(app) {
  app.AppComponent = //This is the component name
    ng.core.Component({ //We are using Component method - belong to ng.core
      selector: 'my-app',
      template: '<h1>My First Angular 2 App</h1>'+
                '<p>my name is {{name}}</p>'
    })
    .Class({ //Also Class methods - belong to ng.core
      constructor: function() {
          this.name = "Ram"
      }
    });
})(window.app || (window.app = {}));


