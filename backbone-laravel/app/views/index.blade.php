<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Home</title>
    <link rel="stylesheet" href="assets/css/bootstrap.min.css" type="text/css" media="all" />
</head>
<body>
    <div class="container">
        <div class="page-header">
            <h1>Contacts</h1>
        </div>
        <div class="row">
            <div class="col-md-12">
                <div class="col-md-4">
                    <form class="form" action="" method="post" role="form" id="addContact">
                        <div class="form-group">
                            <label class="" for="first_name">First Name</label>
                            <div class="">
                                <input class="form-control" type="text" name="first_name" id="first_name" value="" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="" for="last_name">Last Name</label>
                            <div class="">
                                <input class="form-control" type="text" name="last_name" id="last_name" value="" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="" for="email">Email</label>
                            <div class="">
                                <input class="form-control" type="text" name="email" id="email" value="" />
                            </div>
                        </div>
                        <div class="form-group">
                            <label class="" for="description">Description</label>
                            <div class="">
                                <textarea class="form-control" name="description" id="description" rows=5> </textarea>
                            </div>
                        </div>
                        <div class="form-group">
                            <div class="">
                                <button class="btn btn-success" type="submit">Save</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>

<script src="assets/js/jquery.js"></script>
<script src="assets/js/bootstrap.min.js"></script>
<script src="assets/js/underscore.js"></script>
<script src="assets/js/backbone.js"></script>
<script src="assets/js/main.js"></script>
<script src="assets/js/models.js"></script>
<script src="assets/js/collections.js"></script>
<script src="assets/js/views.js"></script>
<script src="assets/js/router.js"></script>
<script type="text/javascript" charset="utf-8">
    new App.Router;
    Backbone.history.start();

    App.contacts = new App.Collections.Contacts;
    App.contacts.fetch().then(function (){
        new App.Views.App({ collection: App.contacts });
    });
    
</script>
</body>
</html>
