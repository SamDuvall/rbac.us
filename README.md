# rbac.us

The API to http://rbac.us

## Installation

    npm install rbac.us

## API

### Initialization
Using the applicationId and applicationApiKey from http://rbac.us

    var Api = require('rbac.us/api');
    var api = new Api(applicationId, applicationApiKey);

### Users

Get a specific user's information (e.g. settings, organizations, permissions) by email

    api.users.findByEmail(email).then(function(user) {
      // returns json or undefined if no user found
    });
