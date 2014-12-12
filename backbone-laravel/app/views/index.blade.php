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
            <h1>Contacts <a id="createButton" class="btn btn-sm btn-success" href="#create"> Create New Contact</a></h1>
        </div>
        <div class="row">
            <div class="col-md-12">
            <div id="contactContainer"></div>
            <div id="editFormContainer" class="col-md-4"></div>
                    <div class="col-md-4" id="formContainer">
                        <form class="form " action="" method="post" role="form" id="addContact">
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
        

        <div class="col-lg-12" id="#tableContainer">
            <div class="row">
                <div id="tableContacts" class="">
                    <table class="table table-condensed table-bordered table-hover">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Description</th>
                                <th>Options</th>
                            </tr>
                        </thead>
                    </table>
                </div>
            </div>
        </div>
    </div>

    <script id="allContactsTemplate" type="text/texttemplate" charset="utf-8">
        <td><%= first_name %></td>
        <td><%= last_name %></td>
        <td><%= email %></td>
        <td><%= description %></td>
        <td>
            <a class="btn btn-xs btn-success edit" href="#contacts/<%= id %>/edit">Edit</a>
            <a class="btn btn-xs btn-danger delete" href="#contacts/<%= id %>/delete">Delete</a>
        </td>
    </script>
    <script id="oneContactTemplate" type="text/template" charset="utf-8">
        <div class="col-lg-4">
            <ul>
                <li>First Name: <%= first_name %></li>
                <li>Last Name: <%= last_name %></li>
                <li>Email: <%= email %></li>
                <li>Description: <%= description %></li>
            </ul>
            <div class="col-lg-12">
                <a class="btn btn-success btn-xs" href="">Edit</a>
                <a class="btn btn-danger btn-xs" href="/#contacts/<%= id %>/delete">Delete</a>
            </div>
        </div>
    </script>
    <script type="text/template" id="alertTemplate" charset="utf-8">
        <% console.log(success); %>
        <% if(success){ %> 
            <div class="alert alert-success alert-dismissible" role="alert">
                <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                <strong>Success!</strong> Contact: <%= contact.first_name %>, deleted!
            </div>
        <% } else { %>
            <div class="alert alert-danger alert-dismissible" role="alert">
                <button type="button" class="close" data-dismiss="alert"><span aria-hidden="true">&times;</span><span class="sr-only">Close</span></button>
                <strong>Error!</strong> Contact: <%= contact.fist_name %>, not deleted.
            </div>
        <% } %>
    </script>

    <script type="text/template" id="editForm">
        <form class="form " action="" method="post" role="form" id="editContact">
            <div class="form-group">
                <label class="" for="edit_first_name">First Name</label>
                <div class="">
                    <input class="form-control" value="<%= first_name %>" type="text" name="edit_first_name" id="edit_first_name" value="" />
                </div>
            </div>
            <div class="form-group">
                <label class="" for="edit_last_name">Last Name</label>
                <div class="">
                    <input class="form-control" value="<%= last_name %>" type="text" name="edit_last_name" id="edit_last_name" value="" />
                </div>
            </div>
            <div class="form-group">
                <label class="" for="email">Email</label>
                <div class="">
                    <input class="form-control" value="<%= email %>" type="text" name="email" id="email" value="" />
                </div>
            </div>
            <div class="form-group">
                <label class="" for="edit_description">Description</label>
                <div class="">
                    <textarea class="form-control" name="edit_description" id="edit_description" rows=5> <%= description %> </textarea>
                </div>
            </div>
            <div class="form-group">
                <div class="">
                    <button class="btn btn-success" type="submit">Save</button>
                </div>
            </div>
        </form>
    </script>

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
        var router = new App.Router;
        Backbone.history.start();

        App.contacts = new App.Collections.Contacts;
        App.contacts.fetch().then(function (){
            new App.Views.App({ collection: App.contacts });
        });
        
    </script>
</body>
</html>
