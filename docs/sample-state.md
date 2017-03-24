```
{
  user: {
    id: 1,
    username: "app-academy"
    imageUrl: '5.svg'
    groups: [
      {id: 1, name: 'Skiing Group', dashName: 'Skiing-Club'},
      {id: 2, name: 'Skiing Group', dashName: 'Skiing-Club'},
    ]
  },
  shownUser: {
    id: 1,
    username: "app-academy"
    imageUrl: '5.svg'
    groups: [
      {id: 1, name: 'Skiing Group', dashName: 'Skiing-Group', imageUrl: '1.png', membership_id: 2, memberCount: 11},
      {id: 2, name: 'Skiing Club', dashName: 'Skiing-Club', imageUrl: '1.png', membership_id: 2, memberCount: 11},
    ],
    led_groups: [
      {id: 1, name: 'Skiing Group', imageUrl: '1.png'},
      {id: 2, name: 'Skiing Group', imageUrl: '1.png'},
    ]
  },
  errors: {
    signUp: [],
    logIn: [],
    createGroup: [],
    createEvent: [],
    editGroup: [],
    editGroupMembers: [],
    editGroupPhotos: [],
    editGroupTopics: [],
    editEvent: []
  },
  groupsFound: [
    {
      id: 1,
      title: "SF Soccer Players",
      imageUrl: "1.png",
      members: 15,
    }
    {
      id: 2,
      title: "SF Surfers",
      imageUrl: "2.png",
      members: 30,
    }
  ],
  topics: [
    {id: 1, title: 'Science', imageUrl: '1.jpg', bannerUrl: '2.jpg', dashTopic: 'science', description: 'Some text here' }
    {id: 2, title: 'Music', imageUrl: '3.jpg', bannerUrl: '4.jpg', dashTopic: 'music',  description: 'Some text here'}
  ],
  group: {
    id: 1,
    name: 'SF Surfers',
    description: 'The best surfing club in SF!',
    hometown: 'San Francisco, CA',
    imageUrl: '5.svg',
    founding_date: '2017-01-05',
    memberCount: 11,
    organizer: {
      name: "John",
      imageUrl: '12.svg'
    },
    topics: [
      'sports',
      'adventure',
      'health',
    ],
    related_meetups: [
      {
        id: 1,
        title: "SF Soccer Players",
        imageUrl: "1.png",
        members: 15,
      }
      {
        id: 3,
        title: "SF Beach Volleyball",
        imageUrl: "9.png",
        members: 20,
      }    
    ],
    members: [
      { id:1, name: "John", imageUrl: '12.svg', membership_id: 10},
      { id:2, name: "Sam", imageUrl: '11.svg', membership_id: 11},
      { id:3, name: "Alice", imageUrl: '10.svg', membership_id: 12},
    ],
    photos: [
      { imageUrl: '13.svg' },
      { imageUrl: '14.svg' },
    ],
    pastEvents: [
      {
        id: 1,
        title: "Surf 1",
        description: "Let's surf at ocean beach",
        location: '10 Main St., SF, CA',
        startTime: '2017-03-14 10:47',
        rsvps: [
          { name: "Kelly", imageUrl: '12.svg' },
          { name: "Sam", imageUrl: '11.svg' },          
        ]
      },
      {
        id: 2,
        title: "Surf 2",
        description: "Let's surf at ocean beach",
        location: '10 Main St., SF, CA',
        startTime: '2017-03-20 10:30',
        rsvps: [
          { name: "Alice", imageUrl: '12.svg' },
          { name: "Sam", imageUrl: '11.svg' },          
        ]
      },
      futureEvents: [
        {
          id: 1,
          title: "Surf 1",
          description: "Let's surf at ocean beach",
          location: '10 Main St., SF, CA',
          startTime: '2017-03-14 10:47',
          rsvps: [
            { name: "Kelly", imageUrl: '12.svg' },
            { name: "Sam", imageUrl: '11.svg' },          
          ]
        },
        {
          id: 2,
          title: "Surf 2",
          description: "Let's surf at ocean beach",
          location: '10 Main St., SF, CA',
          startTime: '2017-03-20 10:30',
          rsvps: [
            { name: "Alice", imageUrl: '12.svg' },
            { name: "Sam", imageUrl: '11.svg' },          
          ]
        },
    ],
    newitems: [
      {
        type: 'join',
        username: 'Sam',
        imageUrl: '3.svg',
        time: '2017-01-12 8:00'
      },
      {
        type: 'rsvp',
        going: true,
        username: 'Sam',
        imageUrl: '3.svg',
        time: '2017-01-12 8:00'
      },
    ]
  }
  event:
    {
      id: 1,
      title: "Surf 1",
      description: "Let's surf at ocean beach",
      location: '10 Main St., SF, CA',
      start_time: '2017-03-14 10:47',
      rsvps: [
        { name: "Kelly", imageUrl: '12.svg' },
        { name: "Sam", imageUrl: '11.svg' },          
      ]
      group: {
        id: 1,
        name: 'SF Surfers',
        description: 'The best surfing club in SF!',
        hometown: 'San Francisco, CA',
        imageUrl: '5.svg',
        founding_date: '2017-01-05',
        organizer: {
          name: "John",
          imageUrl: '12.svg'
        },
        topics: [
          'sports',
          'adventure',
          'health',
        ],
        related_meetups: [
          {
            id: 1,
            title: "SF Soccer Players",
            imageUrl: "1.png",
            members: 15,
          }
          {
            id: 3,
            title: "SF Beach Volleyball",
            imageUrl: "9.png",
            members: 20,
          }    
        ],
        members: 15
      }
    },
}
```
