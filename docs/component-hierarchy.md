## Component Hierarchy

**RootContainer**
 - Header
 - Banner
 + children
 - Footer

**AuthFormContainer**
 - AuthForm
 - Groups
   - Group(type='1/3')

**SearchContainer**
 - Searchbar
 - Groups
   - Group(type='1/3')

**GroupContainer**
 - GroupLeft
   - Group(type='small')
 + children
 - GroupRight

**GroupDetailContainer**
 - GroupDetail
 - GroupEvents

**EditGroupContainer**
- EditGroupForm
- EditGroupPhotos
- EditGroupMembers
- EditGroupTopics
- EditGroupEvents

**EventContainer**
- GroupLeft
+ children
- EventRSVPForm
- EventRSVPs

**NewGroupContainer**
 - NewGroupForm

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "RootContainer"
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/search"  | "SearchContainer" |
| "/group_name/" | "GroupContainer" |
|    "" | IndexRoute "GroupDetailContainer" |
|    "members" | "GroupMembers" |
|    "edit" | "EditGroupContainer" |
|    "new-event" | "NewEventContainer" |
|    "/events/" | "IndexRoute" |
|        ":id" | IndexRoute "EventDetail" |
|        "edit" | "EditEventForm" |
| "/create" | "NewGroupContainer" |
