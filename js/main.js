(function(){
   window.App = {
        Models: {},
        Collections:{},
        Views:{}
    };
    window.template = function(id){
        return _.template($('#'+id).html()); 
    };

    App.Models.Task = Backbone.Model.extend({
        validate: function (attrs){
            if( !$.trim(attrs.title) ){
                return 'A task requires a valid title'; 
            } 
        } 
    });

    App.Collections.Tasks = Backbone.Collection.extend({
        model: App.Models.Task 
    });

    App.Views.AddTask = Backbone.View.extend({
        initialize: function() {
        },

        el: '#addTask',

        events: {
            'submit':'submit' 
        },
        
        submit: function(e) {
            e.preventDefault();

            var newTaskTitle = $(e.currentTarget).find('input[type=text]').val();
            var task = new App.Models.Task({title: newTaskTitle});
            this.collection.add(task);
        }


            
    });

    App.Views.Tasks = Backbone.View.extend({
        initialize: function() {
            this.collection.on('add', this.addOne, this);
        },

        tagName:'ul',

        render: function(){
            this.collection.each(this.addOne, this);
            return this;
        },        
        
        addOne: function(task) {
            var taskView = new App.Views.Task({ model: task });
            this.$el.append(taskView.render().el);
        }
    });

    App.Views.Task = Backbone.View.extend({
        initialize: function() {
            this.model.on('change', this.render,this);
            this.model.on('destroy', this.remove,this);
        },

        tagName: 'li', 

        template: template('taskTemplate'),


        events:{
            'click .edit'   :'editTask',
            'click .delete' :'destroy'
        },
        
        destroy: function() {
            this.model.destroy();
        },

        remove: function() {
            this.$el.remove();            
        },
        

        editTask: function() {
            var newTaskTitle = prompt('Edit the task:', this.model.get('title'));
            //if( !newTaskTitle ) return
            this.model.set('title', newTaskTitle, {validate: true});
        },
        
        render: function(){
            var template = this.template(this.model.toJSON()); 
            this.$el.html( template ); 
            return this;
        }
    });

    window.tasksCollection = new App.Collections.Tasks([
        {
            title:'Go to the Store',
            priority: 4
        },
        {
            title:'Go to the Gym',
            priority: 1
        },
        {
            title:'Potatos',
            priority: 2
        },
        {
            title:'Go to the Job',
            priority: 4
        }
    ]);
    
    var addTaskView = new App.Views.AddTask({ collection: tasksCollection });
    var taskView = new App.Views.Tasks({ collection: tasksCollection });
    taskView.render()
    $('.col-lg-12').append(taskView.el);

})();

