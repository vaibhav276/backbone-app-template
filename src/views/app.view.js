// Import the Backbone module and its dependencies
var Backbone = require('backbone');
var appTemplate = require('../templates/app.tmpl');
var Mustache = require('mustache');

// Declare our options we'll use to extend the base view
var viewOptions = {
    el: 'body',
    template: appTemplate.default, // extract the string part of it
    model: {
        attributes: {
            message: "Hello from App view"
        }
    },

    initialize: function () {
        this.render();
    },

    render: function () {
        this.$el.html(Mustache.render(
            appTemplate.default,
            this.model.attributes));

        return this;
    }
};

// Export our extended view
module.exports = Backbone.View.extend(viewOptions);
