App.Models.Contact = Backbone.Model.extend({
    validate: function (attrs) {
        if( !attrs.first_name || !attrs.last_name ){
            return "A First and Last Name is required.";
        }
        if( !attrs.email ){
            return "Please tell us a valid e-mail."; 
        }
    },
    
});
