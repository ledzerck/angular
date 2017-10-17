angular.module("MyFirstApp",[])
.controller("FirstController",function($scope){
  $scope.nuevoComentario = {};
  $scope.comentarios = [
    {
      comentario: "Buen tutorial",
      username: "unUsuario"
    },
    {
      comentario: "Malísimo tutorial",
      username: "otroUsuario"
    }
  ];
  $scope.agregarComentario = function(){
    $scope.comentarios.push($scope.nuevoComentario);
    $scope.nuevoComentario = {};
  }
})
