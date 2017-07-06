# Express Practice
Practice building apps in express and node.

### Stack used
* Node.js (server side javascript)
* Express.js (used to set up the server)
* Pug.js (used for templating)
* CSS (styling)
* JSON (serves flat database)

### Summary of functionality
* Creates a cookie to keep track of a user's name
* Routes and redirects according to whether this cookie is present
* Renders each side of each flash card depending on the passed in ID (index in the array of cards) and query string
* A call to `/cards` redirects the user to a random card
* The array of cards are served by a JSON file
