//Global App View
App.Views.App = Backbone.View.extend({
    initialize: function(){
        var addContactView = new App.Views.AddContact({ collection: App.contacts }); 
        var allContactsView = new App.Views.Contacts({ collection: App.contacts }).render(); 
        var allContactsView = new App.Views.Contacts({ collection: App.contacts }).render(); 
        $('#tableContacts thead').after(allContactsView.el);
    }


});

//Add Contact View
App.Views.AddContact = Backbone.View.extend({
    initialize: function(){
        this.first_name = $('#first_name'); 
        this.last_name = $('#last_name'); 
        this.email = $('#email'); 
        this.description = $('#description'); 
    },

    el:'#addContact',

    events:{
        'submit':'addContact' 
    },

    addContact: function(e) {
        e.preventDefault();
        
        var newContact = this.collection.create({
            first_name: this.first_name.val(), 
            last_name: this.last_name.val(), 
            email: this.email.val(), 
            description: this.description.val() 
        }, { wait: true });
        
        this.clearForm(); 
        router.navigate('/', {trigger: true}); 

    },

    clearForm: function () {
       this.first_name.val('');
       this.last_name.val('');
       this.email.val('');
       this.description.val('');
    },
});

//All Contacts View
App.Views.Contacts = Backbone.View.extend({
    tagName:'tbody',
    initialize: function () {
        this.collection.on( 'sync', this.addOne, this );   
    },

    render: function() {
        this.collection.each( this.addOne, this );
        return this;
    },

    addOne: function(contact) {
        var contactView = new App.Views.Contact({ model: contact });
        console.log( contactView.render().el );
        this.$el.append( contactView.render().el );
    },
});

//Single Comment View
App.Views.Contact = Backbone.View.extend({
    initialize: function(){
        this.model.on( 'destroy', this.unrender, this );    
    },

    tagName: 'tr',

    template: template('allContactsTemplate'),

    events:{
        'click a.delete':'deleteContact', 
    },

    deleteContact: function () {
        this.model.destroy();
    },

    unrender: function () {
        this.remove();
    },

    render: function() {
        this.$el.html( this.template(this.model.toJSON()) );
        return this;
    },
});

//Single contact full vview
App.Views.ContactFull = Backbone.View.extend({
    initialize: function () {
        this.render();
        
    },

    tagName: 'div',

    el:'div#contactContainer', 

    render: function() {
        var contact = this.model.get(this.id); 

        if(_.isUndefined(contact)){
            router.navigate('/404');        
            return this
        }

        this.$el.html( this.template( this.model.get(this.id).toJSON()) );
        return this;
    },

    template: template('oneContactTemplate'),

});

App.Views.EditContact = Backbone.View.extend({
    initialize: function (){
        this.render(); 
        this.first_name = $('#edit_first_name');
        this.last_name = $('#edit_last_name');
        this.email = $('#edit_email');
        this.description = $('#edit_description');
    },


    el:'div#editFormContainer',
    
    events:{
        'submit':'editContact' 
    },

    editContact: function (e) {
        e.preventDefault();
        var contact = this.model.get(this.id);
        contact.save({
            id: this.id,
            fist_name: this.first_name,
            last_name: this.last_name,
            email: this.email,
            description: this.description,
        });

        router.navigate('/', {trigger: true});
    },

    template: template('editForm'),

    tagName: 'div',

    render: function() {

        if(_.isUndefined(this.model.get(this.id))){
            router.navigate('/404');        
            return this
        }

        this.$el.html( this.template( this.model.get(this.id).toJSON()) );
        return this;
    },


});
