angular.module('doughnutsApp', [])
  .controller('DoughnutsController', DoughnutsController);

DoughnutsController.$inject = ['$http'];

function DoughnutsController($http) {

  var self = this

  this.all=[]

  function getDoughnuts() {

    $http.get('http://api.doughnuts.ga/doughnuts').then(function(response) {
      self.all=response.data
      console.log(response)
    })

  }

  getDoughnuts()

  self.addDoughnut = addDoughnut
  self.removeDoughnut = removeDoughnut

  this.newDoughnut ={}

  function addDoughnut() {

    $http.post('http://api.doughnuts.ga/doughnuts', self.newDoughnut).then(function(response) {
        console.log(response)
        //getDoughnuts() - this wasn't working for me which I think is because you can't really post to the api
        self.all.push(response.data)
    })

    self.newDoughnut = {}

  }

  function removeDoughnut(id) {
    console.log('delete', id)
    $http.delete('http://api.doughnuts.ga/doughnuts/'+id).then(function(response){
      console.log(response)
    })
  }

}