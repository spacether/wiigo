# Wiigo

[Wiigo live][heroku]

[heroku]: https://wiigo.herokuapp.com/

Wiigo is a web application inspired by Meetup. Wiigo is a platform that connects people and gives them a place to join and create clubs that they love.

Chime is a personal project by Justin Black.

![Wiigo home page: https://wiigo.herokuapp.com/][home page]

## Features

- User accounts with secure authentication
- Browse groups, events, and members
- **Create** and **join** groups
- **Create** new events, and **delete** led events
- Rsvp to future events in groups that one is in
- Search groups

## Project Design

Wiigo was designed and built in two weeks

A [proposal][proposal] was authored to help provide an timeline during development.

A [database schema][schema] was written as part of the design proposal.

### Technology

Wiigo is a single-page application built on Rails and React.js, with many dependencies in both the backend and the frontend.

- [Backend and Frontend Technologies][technologies]

The backend uses a ruby on rails architecture with json requests sent by
a react-redux front end. Images are hosted on Cloudinary to allow for custom resizing.

### Screenshots of Key Functionality

![Group search][searching]
![Viewing a group][show group]
![Viewing an event][show event]

### Key Challenges

-Fronted state was stored in as few keys as possible to minimize program complexity
-Number of backend apis were minimized to reduce complexity
-Separate Rsvps and Memberships APIs were used to prevent errors in group memberships and rsvps
-Search values were pushed to the url to allow a user to revisit a past search
-Backend controllers only allow a logged in user with correct privileges to modify the db

[home page]: ./docs/images/home_page.png "Wiigo home page"
[searching]: ./docs/images/group_search.png "Found gaming groups"
[show group]: ./docs/images/show_group.png "A group's page"
[show event]: ./docs/images/show_event.png "An event's page"
[technologies]: ./docs/technologies.md "Core frontend and backend technologies"
[proposal]: ./docs/proposal.md
[schema]: ./docs/schema.md
