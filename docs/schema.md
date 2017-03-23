# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique
image_url       | string    | not null
timestamps      | timestamp | not null


## topics
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
title           | string    | not null, unique
search_path     | string    | not null, unique
description     | string    | not null
image_url       | string    | not null
banner_url       | string    | not null

## groups
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
name            | string    | not null, unique
description     | text      | not null
hometown        | string    | not null
image_url       | string    | not null
organizer_id    | integer   | not null
timestamps      | timestamp | not null


## grouptopics
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
group_id        | integer   | not null, indexed
topic_id        | integer   | not null, indexed

## memberships
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
group_id        | integer   | not null, indexed
user_id         | integer   | not null, indexed
timestamps      | timestamp | not null

## events
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
group_id        | integer   | not null, indexed
title           | string    | not null
start_time      | datetime  | not null
description     | text      | not null
location        | string    | not null
address         | string    | not null

## rsvps
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
event_id        | integer   | not null, indexed
user_id         | integer   | not null, indexed
going           | boolean   | not null
timestamps      | timestamp | not null
