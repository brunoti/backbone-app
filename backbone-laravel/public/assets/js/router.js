App.Router = Backbone.Router.extend({

    initialize: function() {
        this.formContact = $('#addContact');
        this.tableContacts = $('#tableContacts');
        this.contactContainer = $('#contactContainer');
        this.editFormContainer = $('#editFormContainer');
    },

    startPage: function () {
        this.contactContainer.hide();
        this.formContact.hide();
        this.editFormContainer.hide();
        this.tableContacts.hide();
        $('.alert').remove();
    },

    routes:{
        "":'index', 
        "create":'create', 
        "contacts/:id":'show', 
        "contacts/:id/delete":'delete', 
        "contacts/:id/edit":'edit', 
        "*default"  :'default', 
    },
    
    index: function() { this.startPage();
        this.tableContacts.show();
    }, 

    create: function() {
        this.startPage();
        this.formContact.show();
    },

    default: function() {
        this.startPage();
    },
    
    show: function(id) {
        this.startPage();
        var viewContact = new App.Views.ContactFull({id: id, model: App.contacts });
        this.contactContainer.show();
    },

    delete: function(id){
        this.startPage();
        var html = template('alertTemplate');
        App.contacts.get(id).destroy({
            success: function (model, response) {
                console.log(model);
                $('.page-header').append(
                    html({
                        success: true,
                        contact: model.toJSON()  
                    })
                );
            },

            error: function (model, response) {
                $('.page-header').append(
                    html({
                        success: false,
                        contact: model.toJSON()  
                    })
                );
            },
        });
        router.navigate('/', {trigger: true});
    },

    edit: function (id) {
        this.startPage();
        var editContact = new App.Views.EditContact({id: id, model: App.contacts });
        this.editFormContainer.show();
    }
    

});
