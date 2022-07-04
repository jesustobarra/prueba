var app = angular.module("app",[]);

app.controller("controlador", function($scope){
    var lista = this;
    lista.productos = [
        {id: 1, nomre: "producto 1", precio: 10.0},
        {id: 2,nombre: "producto 2", precio:20.0}
    ]
    lista.compras=[];
    lista.addProductos = function(){

    }
});
