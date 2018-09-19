// Register `phoneList` component, along with its associated controller and template
angular.
  module('phonecatApp').
  component('telefonosList', {
    templateUrl: 'telefonosList.template.html',
    controller: function PhoneListController() {
      //Aquí inicializamos el modelo de datos en angular
      //this.query = '4',
      this.phones = [];
      for(var i=0;i<10;i++){
        this.phones.push({name: 'Iphone '+(i+1),snippet: 'Descripción del iphone '+(i+1)+'.'})
      }

      /*$http.get('phones/phones.json').then(function(response) {
        this.phones = response.data;
      });*/

      //suponiendo que aqui colocamos un

    }
  }).
  component('holaMundo', {
    template: '<b>Hola Mundo en Angular a: {{$ctrl.usuario}}</b>',
    controller: function HolaMundoController() {
      this.usuario = 'Carlos Alberto Cacique Yupanqui'
    }
  }).
  component('paisesList', {
    templateUrl: 'paisesList.template.html',
    controller:  ['$http','$scope',function PaisListController($http,$scope) {
      //Aquí inicializamos el modelo de datos en angular

      //la variable this no está definida en el 
      var self = this;
      //var filtrados = [];
      //self.orderProp = 'age';

      $http.get('/html5/angular/paises.json').success(function(response) {
        self.paises = response;
      });

      //Cual es la diferencia con lo anterior
      /*
      $http.get('/html5/angular/paises.json').then(function(response) {
        this.paises = response.data;
        for(var i=0;i<this.paises.length;i++){
          console.log("pais-->"+this.paises[i].n);
        }
      });
      */

      self.items = function() {
        alert($scope.filtrados.length);
      };

      //suponiendo que aqui colocamos un

    }]
  });