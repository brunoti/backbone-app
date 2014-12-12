App.Router = Backbone.Router.extend({

    initialize: function() {
        this.formContact = $('#addContact');
        this.tableContacts = $('#tableContacts');
    },

    startPage: function () {
        console.log('Routing...');
    },

    routes:{
        "":'index', 
        "*default":'default', 

        "create"            :'create', 
        "contact/:id"       :'show', 
        "contact/:id/edit"  :'edit', 
        "contact/:id/delete":'delete', 
    },
    
    index: function() {
        this.formContact.hide();
        this.tableContacts.show();
    }, 

    create: function() {
        this.tableContacts.hide();
        this.formContact.show();
    },

});
