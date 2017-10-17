angular.module("MyFirstApp",[])
.controller("FirstController",["$scope",function(m){
  m.nuevoComentario = {};
  m.comentarios = [
    {
      comentario: "Buen tutorial",
      username: "unUsuario"
    },
    {
      comentario: "Malísimo tutorial",
      username: "otroUsuario"
    }
  ];
  m.agregarComentario = function(){
    m.comentarios.push(m.nuevoComentario);
    m.nuevoComentario = {};
  }
}]);
