Tuesday, 2017-03-15
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
