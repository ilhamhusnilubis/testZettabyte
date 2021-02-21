function addcart() {
  $(function () {
    angular.module('myApp')
      .controller('myController', function ($scope) {
        $scope.cart = [];
        var findItemById = function (Item, id) {
          return _.find(Item, function (Item) {
            return Item.id === id;
          });
        };


      });
  });
}
