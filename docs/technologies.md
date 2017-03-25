# Backend

Wiigo runs on Ruby on Rails and is hosted on Heroku. The backend provides RESTful APIs and responds to frontend requests with JSON data.

## Database

Wiigo uses a PostgreSQL database.

## Dependencies

Other notable dependencies include:

- Cloudinary file storage for easy custom-sized images without warping
- BCrypt for password-salting and hashing for a secure authentication system

## Image Hosting

Cloudinary was used to host all images, allowing custom sized images to be served passed on the requested path.


# Frontend

Wiigo utilizes the React.js framework and follows the Flux architecture to deliver the frontend, delivering a rich single page app.

## npm

Node package manager (npm) installs and manages all frontend dependencies.

A post-install script is configured so that webpack bundles all of the frontend files after the deployment to Heroku is complete.

## Webpack

Webpack nicely bundles all of the frontend components and Flux pieces. The bundled file is in `/app/assets/javascripts` and included in the main `application.js` file.

## React & Flux

All of the React components, Flux action creators, API utilities, dispatcher, and stores are located in the [frontend](../frontend) directory.

## Babel Transpiling

Wiigo was written in the newer and more powerful ES6 javascript. Babel is used to down-convert all jsx and ES6 javascript to ES5 syntax, ensuring that legacy browsers will run the site without any problems.

## jQuery

jQuery is used only to make AJAX requests to the backend.

## Sass

Site styling was done with Sass to allow more powerful css matching and inheritance.
