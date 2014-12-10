//Global App View
App.Views.App = Backbone.View.extend({
    initialize: function(){
        var addContactView = new App.Views.AddContact({ collection: App.contacts }); 
    }


});

//Add Contact View
App.Views.AddContact = Backbone.View.extend({
    el:'#addContact',

    events:{
        'submit':'addContact' 
    },

    addContact: function(e) {
        e.preventDefault();
        
        var newContact = this.collection.create({
            first_name: this.$('#first_name').val(), 
            last_name: this.$('#last_name').val(), 
            email: this.$('#email').val(), 
            description: this.$('#description').val() 
        }, {wait: true});
        
    },
});

//All Contacts View
App.Views.Contacts = Backbone.View.extend({
    tagName:'tbody',

    render: function() {
        this.collection.each( this.addOne,this );
        return this;
    },

    addOne: function(task) {
        var contactView = new App.View.Contact({ model: contact });
        this.$el.append(contactView.render().el);
    },
});

//Single Comment View
App.Views.Contact = Backbone.View.extend({
    tagName: 'tr',

    render: function() {
        this.$el.html();
        
    },
});

