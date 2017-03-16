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

heroku failure sent cookie:
_project_proposal_session=TEFKeCt0Q3lRU3Vkb3lmbG42QzFGUXhuQkNZZFFJUUJpMWlBTThqMkhLamJ4OWRuZ3JjZjR1RkllbmY3ZHIwT0JsUXByY0hEVkdNKzVHdG5YQlFKR0FUSFRteHhpTGpiVisrZlBYMWZWSmhzVUNFRmhmbjJuWG9UZlQ2UjN1c0lUMUN3QjBRZzdwQTN1WEFNeGF2Q21RPT0tLXhLanJFRFRnWWdsSFBrNFN6VjRqWkE9PQ%3D%3D--7d836cf5a0f22b4e3d8936bf411b7bd3308b2297

local working sent cookie:
_project_proposal_session=N2FRSEllTjE3SGkrYmdaTEFTWkpOMU1BeHRnOTlRNUt1YWlPYTZwdk03UnhBc1NlWjk0cXNJN3p3K3IrN3NiM2FOckFPV0pIclBHRElpWWZNdnJIS0FiR2ZCU1hhTzd6SVpsK0VtZU1UUzR6YklTcC9OVzdoWk5vblBlem5LSmJzSVVla1ZtYkQ1RDVJdUdJd1JrWHFRPT0tLWlWTGlOZW9Dczk2TDM1QUQ1ZUQ4dkE9PQ%3D%3D--a72a0047907c8fcef40abfa028bb4eb2eb3afadc
