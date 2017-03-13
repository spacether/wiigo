# Wego

[Wego live][heroku]

[heroku]: http://www.herokuapp.com

Wego is a full-stack web application inspired by Meetup.  It utilizes Ruby on Rails on the backend, a PostgreSQL database, and React.js with a Redux architectural framework on the frontend.  

## Features & Implementation

The app allows users to search for clubs to join, and view upcoming events, whether logged in or logged out. When logged in, a user can join groups, rsvp to events, and view who is going to events. Also when logged in, a user can create a group, and create events in that group.

## Searching of Groups

Since Wego is built to get people to join it, one can see groups and events with or without being logged in to an account. When logged in, components are rendered with RSVP and Join Group buttons.
Live searching is done via a search bar component. Input text is used to search for groups by the group title, description, and group topics.

### Editing of Groups and Events
Editing of groups and events is only available to the group's owner when he or she is logged in.

### Group Route Nesting
There are multiple child routes under a group id to allow for content in the horizontal middle of the page to be interchanged. In that component we conditionally render:
 - GroupDetailContainer
 - GroupMembers
 - EditGroupContainer
 - NewEventContainer
 This route nesting allows the left and right components to remain unchanged while the center content varies depending upon the route.

### Event Route Nesting
There are multiple child routes under an event id to allow for content in the horizontal middle and the left of the page to be interchanged. In that component we conditionally render:
- EventDetailContainer
- EventEditForm
As above, this route nesting allows the left and right components to remain unchanged while the center content varies depending upon the route.

### Reusability of Group Component
In many locations in the app, one needs to render a component showing a group name, member count, and group image. But the size of the component needed is different on different pages. The group component was made to work in all of those scenarios, with a type key value pair being passed in upon instantiation.
