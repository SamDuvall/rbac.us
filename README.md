# rbac.us

The Interface to http://rbac.us

## Installation

    npm install rbac.us

## API

### Initialization
Using the applicationId and applicationApiKey from http://rbac.us

    var Rbac = require('rbac.us').Interface;
    var rbac = new Api({
      applicationId: applicationId,
      applicationApiKey: applicationApiKey
    });

### Users

Get a specific user's organizations and permissions by email

    rbac.users.getOrganizations(email);
