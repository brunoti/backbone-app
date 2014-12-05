/*
 * main.js
 * Copyright (C) 2014 ALDO <ALDO@SVR-Pixel>
 *
 * Distributed under terms of the MIT license.
 */

var trans = [
    {id: 1 , tipo: "Transferência", data: "12/05/2014", desc: "Lorem Ipsum", valor: 260 },
    {id: 2 , tipo: "Transferência", data: "12/05/2014", desc: "Lorem Ipsum", valor: 260 },
    {id: 3 , tipo: "Transferência", data: "12/05/2014", desc: "Lorem Ipsum", valor: 260 },
    {id: 4 , tipo: "Transferência", data: "12/05/2014", desc: "Lorem Ipsum", valor: 260 },
    {id: 5 , tipo: "Transferência", data: "12/05/2014", desc: "Lorem Ipsum", valor: 260 },
    {id: 6 , tipo: "Transferência", data: "12/05/2014", desc: "Lorem Ipsum", valor: 260 },
    {id: 7 , tipo: "Transferência", data: "12/05/2014", desc: "Lorem Ipsum", valor: 260 }
];
//Transaction Model
var Transaction = Backbone.Model.extend({});

//TransactionCollection
var TransactionCollection = Backbone.Collection.extend({
    model: Transaction
});

var TransactionView = Backbone.View.extend({
    template: _.template($("#trans-template").html()),

    render:function (){
        $('.col-lg-12 *').remove()
        $('.col-lg-12').append(this.template(this.collection));
        return this;
    }

});

var TransactionForm = Backbone.View.extend({
    template: _.template($("#trans-form").html()),

    render:function (){
        $('.col-lg-12 *').remove()
        $('.col-lg-12').append(this.template());
        return this;
    },
    events: {
        'submit form': 'saveItem'
    },
    saveItem: function (e) {
        alert('wowo');
        e.preventDefault();
    }

});

var transCollection = new TransactionCollection(trans);
var transView       = new TransactionView;
var transForm       = new TransactionForm;

var TransactionRoutes = Backbone.Router.extend({
    routes: {
        ""      : "index",
    "create": "createForm",
    "delete/:id": "delete",
    "edit/:id"  : "editForm",
    "trans/:id"  : "editForm",
    }
});
appRoute = new TransactionRoutes;
appRoute.on('route:createForm', function(){
    $('.page-header h1').text('Nova Transação');
    transForm.render();

});
appRoute.on('route:index', function(){
    $('.page-header h1').text('Todas Transações');
    transView.render();
});
Backbone.history.start();
