# redux-react-router-email

This app is using express with Kraken to extend framework by providing structure.

### Note

This app is created to demonstrate the usage of React, Redux, redux-simple-router, react-router.
This app doesn't cover the validations and boundary conditions.

## Application Structure

   Let's take a tour of the app.

### server
   
   The [server](server) directory contains all the backend stuff:

#### config

   The [config](/server/config) directory contains the configuration settings for couchdb and Kraken middleware.

#### couchapp

   This app uses couchdb as database. The [couchapp](/server/couchapp) directory contains the scripts to load the fixture documents and the couchdb design documents.

#### fixtures

   The [fixtures](/server/fixtures) contains the mock documents that inserts the users and emails in database.

#### lib

   The [lib](/server/lib) contains wrapper libraries and helpers used in app elsewhere.

#### middlewares

   The [middlewares](/server/middlewares) contains the middlewares which are used in kraken config to attach to express app object.

#### routes

  Every route in the application is defined in [routes](/server/routes)

#### app.js

   app.js is entry point to the server.

### client
  
   The [client](client) directory contains all the frontend stuff:

#### components

   The [components](/client/components) directory contains all the pure react components.

#### containers

   The [containers](/client/containers) directory contains all the react container components.

#### public

   The [public](/client/public) directory contains the css assets which are used to style the app.

#### reducers

   The [reducers](/client/reducers) directory contains the reducers used by redux.

#### actionCreators.js

   The actionCreators.js file contains all the action creators which dispatches the actions to the redux store.

#### main.js

   main.js is main entry point for frontend. It sets up the middlewares, routing etc in the app.

## Running the app

   To run the app open the command prompt and follow along:

   ```sh
   # install all the modules
   npm install
   ```
