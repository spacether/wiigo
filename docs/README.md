# Wiigo

[Wiigo][heroku] Check out the live Wiigo site
[Meetup][meetup]

[heroku]: https://wiigo.herokuapp.com/
[meetup]: https://www.meetup.com/

## Minimum Viable Product

Wiigo is a web application inspired by Meetup built using Ruby on Rails
and React/Redux.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria with smooth, bug-free navigation, adequate seed data and sufficient CSS styling:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] Production [README](../README.md)
- [ ] Groups and joining groups
- [ ] Events and RSVPs
- [ ] Calendar (on group page)
- [ ] Search by location and group info (name, description)

## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: ./wireframes
[components]: ./component-hierarchy.md
[sample-state]: ./sample-state.md
[api-endpoints]: ./api-endpoints.md
[schema]: ./schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (2 days)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Groups, joining, and topics (3 days)

**Objective:**
User can create groups,
Groups have topics
Users can join groups,
Group owner can delete users,
Group owner can edit group

### Phase 3: Searching groups (1 days)

**Objective:** Search for group by location, group info(name, desc etc), works whether or not logged in

### Phase 4: Events and RSVPs (2 days)

**Objective:**
Group owner can create/edit events,
Users in that group can rsvp to the event

### Phase 5: Calendar on group page (1 day)

**Objective:** The group page has a component which shows upcoming events

### Bonus Features (TBD)
- [ ] User profile show page
- [ ] Calendar landing page on login
- [ ] Email user when they rsvp yes
- [ ] Groups can have photos
- [ ] Users can comment on events
- [ ] Group search bar stays on page when one scrolls down
- [ ] When searching for a tag name and not logged in, a blurb and image are shown above the search results
