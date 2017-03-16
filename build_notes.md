-------------------------
Tuesday, 2017-03-15
-------------------------
Got the clearErrors firing onLeave route event
Working on auth modal, making header, and footer

BUG:
Display flex is difficult, want one item in the middle and one on the right
It is almost but not quite possible with space between or column layout
  flexed the middle item
  SOLUTION: absolutely positioned the right items

Css styled the banner nicely, centered the text with a flex layout

Bug:
created user could not be signed out
first saw the bug on heroku then recreated it locally
  Cause: user was not being logged in in the users controller
  Solution: add login to the users controller when the user account is created

Added the ability to pass Guesty to the login route
Bug: was not able to login guesty when switching from sign up to login
  Fix: test all the booleans, need to check nextstate.params.name and call typeuser with it


-------------------------
Wednesday, 2017-03-16
-------------------------
fixing the styling of the sign in and login form
separating the colors in to a palette

It was very hard to convert my display inline-block form into a flex form
the way to do it was to use inline-flex. Later I learned that I can do display: flex
as long as align-items is flex-start, center, flex-end. Stretch is default which is why it was taking up all of the space.

------
FLEX OR JS PROJECT IDEAS:
1) Jobfinder
2) TV Episode Relabeling
------

Next up todo:
do simple footer
just empty links for now, github, my site, about(won't work)
server-side: make topics
then make group creation form
