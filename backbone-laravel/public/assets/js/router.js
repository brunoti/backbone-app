App.Router = Backbone.Router.extend({

    initialize: function() {
        this.formContact = $('#addContact');
        this.tableContacts = $('#tableContacts');
        this.on('change', this.startPage(), this);
    },
    
    startPage: function () {
        this.formContact.hide();
        this.tableContacts.hide();
    },

    routes:{
        "":'index', 
        "create":'create', 
    },
    
    index: function() {
        this.tableContacts.show();
    },

    create: function() {
        console.log('asdlkjsdlakjdlkajds');
        this.formContact.show();
    },

});
