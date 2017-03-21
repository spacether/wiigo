-------------------------
Tuesday, 2017-03-14
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
Bug: was not able to login Guesty when switching from sign up to login
  Fix: test all the booleans, need to check nextstate.params.name and call typeuser with it


-------------------------
Wednesday, 2017-03-15
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

-------------------------
Thursday, 2017-03-16
-------------------------

Topics made
Group creation form made
Footer made
Topics reducer, api, and actions made

-------------------------
Friday, 2017-03-17
-------------------------
Made the checkboxes have a hand when hovering over them
Bug: Was difficult to set css styles on label
  Source: was using two .class level selectors for the same thing
  Fix: make one selector tag level, and the other class level

Added onchange toggling of the label's class when the checkbox is selected
Use this for the checkboxes: https://github.com/appacademy/curriculum/blob/master/rails/readings/checkboxes.md

-------------------------
Saturday, 2017-03-18
-------------------------

Fixed the guest login to wipe the existing form content before writing
Bug1: when try and put in bad form input twice the errors get wiped out
  Source: I had another synchronous call, fetchTopics happening which also cleared errors
    fatchTopics was ordered before the form submission, it should have happened after
    Fix: put it after

Bug2: when creating a group, the form persists after logout
  Source: I had this bug before... it was that the props change needs a check
  to see if the user is logged in. If not, then kick them back to the root
  Fix: add a hashHistory.push to kick us back to root

Notes:
Bug1 cost me an hour or two
Bug2, redirection error cost me an hour

Can now create a group, and display it
Fixed the background on the group page

-------------------------
Sunday, 2017-03-19
-------------------------
Group show page
-added better styling of the details and the lower middle divs
-Added a right div in the groupshow

Add memberships table to db, model

Memberships:
Creating/Destroying memberships for currentuser:
handled by user.group_ids patch

Removing members from a group when admin:
handled by group.member_ids patch

Added membership controller and model
Bug: was not receiving shownuser or even sending out the request
  Source: container was not dispatching the function call
  Fix: add arrow function that makes the call
Hooked in live info for the group and links to users
Add a group patch, but it is acting weird

-------------------------
Monday, 2017-03-20
-------------------------

Get rid of the allmembers method on group
add memberCount to state
Wrote the memberships controller, allow create and destroy
Done: make the membership create and destroy return $ajax
Done: chain on thens to reload the user, or the group on the view

Bug: refresh on the group page when logged in throws a server partial error
  Fix: pull the partial in to the failing file. Now works

General note:
  Simpler is better:
  Gen1: use group.member_ids to add a user and remove a user, could get out of sync on server
  Gen2: use membership controller, have it conditionally return a user or group, con complicated
  Gen3: use API call to membership controller then chain on a then to get a user or group
    Gen3 pros:
      -much easier to read
      -separates ownership
      -minimizes the number of item actions


Made the group members show page

Todo:
add topic buttons on main page
addd square component
add them to the main page

pick default images
cloudinary upload a default user image
cloudinary upload a default banner image
cloudinary upload a default group image
make the route for search

---------------

Future:
-Make a group edit form
  -Allow image editing per cloudinary
