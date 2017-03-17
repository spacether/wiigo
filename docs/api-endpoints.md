# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Topics

- `GET /api/topics`
  - used when creating a group

### Groups

- `GET /api/groups`
  - Index/search
  - accepts `search_string` query param which may be a topic
- `POST /api/groups`
- `GET /api/groups/:id`
- `PATCH /api/groups/:id`
- `DELETE /api/groups/:id`

### Grouptopics

- `POST /api/grouptopics`
- `DELETE /api/grouptopics/:id`

### Events

- `GET /api/events`
  - Index of events from today onward
  - Bonus: accepts `search_string` query param which may be a topic
- `GET /api/groups/:id/events`
  - Index under group
- `POST /api/events`
- `GET /api/events/:id`
- `PATCH /api/events/:id`
- `DELETE /api/events/:id`

### Memberships, user group memberships

- `GET /api/memberships`
  - User's memberships
- `GET /api/group/:id/memberships`
  - Group's members
- `POST /api/memberships`
- `DELETE /api/memberships/:id`

### Photos, group's photo, user's photo

# tbd about where this connects, either use Cloudinary or upload to rails
- `POST /api/photos`
- `DELETE /api/photos/:id`
