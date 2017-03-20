```
{
  user: {
    id: 1,
    username: "app-academy"
    image_url: '5.svg'
    groups: [
      {id: 1, name: 'Skiing Group'},
      {id: 2, name: 'Skiing Group'},
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
  searchResults: {
    topic_title: 'Sports',
    topic_sentence: 'Check out all the sports clubs in SF!',
    topic_image: '5.svg',
    groups: [
      {
        id: 1,
        title: "SF Soccer Players",
        image_url: "1.png",
        members: 15,
      }
      {
        id: 2,
        title: "SF Surfers",
        image_url: "2.png",
        members: 30,
      }
    ]
  }
  topics: [
    {id: 1, title: 'Science'}
    {id: 2, title: 'Music'}
  ],
  group: {
    id: 1,
    name: 'SF Surfers',
    description: 'The best surfing club in SF!',
    hometown: 'San Francisco, CA',
    image_url: '5.svg',
    founding_date: '2017-01-05',
    organizer: {
      name: "John",
      image_url: '12.svg'
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
        image_url: "1.png",
        members: 15,
      }
      {
        id: 3,
        title: "SF Beach Volleyball",
        image_url: "9.png",
        members: 20,
      }    
    ],
    members: [
      { id:1, name: "John", image_url: '12.svg' },
      { id:2, name: "Sam", image_url: '11.svg' },
      { id:3, name: "Alice", image_url: '10.svg' },
    ],
    photos: [
      { image_url: '13.svg' },
      { image_url: '14.svg' },
    ],
    events: [
      {
        id: 1,
        title: "Surf 1",
        description: "Let's surf at ocean beach",
        location: '10 Main St., SF, CA',
        start_time: '2017-03-14 10:47',
        rsvps: [
          { name: "Kelly", image_url: '12.svg' },
          { name: "Sam", image_url: '11.svg' },          
        ]
      },
      {
        id: 2,
        title: "Surf 2",
        description: "Let's surf at ocean beach",
        location: '10 Main St., SF, CA',
        start_time: '2017-03-20 10:30',
        rsvps: [
          { name: "Alice", image_url: '12.svg' },
          { name: "Sam", image_url: '11.svg' },          
        ]
      },
    ],
    newitems: [
      {
        type: 'join',
        username: 'Sam',
        image_url: '3.svg',
        time: '2017-01-12 8:00'
      },
      {
        type: 'rsvp',
        going: true,
        username: 'Sam',
        image_url: '3.svg',
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
        { name: "Kelly", image_url: '12.svg' },
        { name: "Sam", image_url: '11.svg' },          
      ]
      group: {
        id: 1,
        name: 'SF Surfers',
        description: 'The best surfing club in SF!',
        hometown: 'San Francisco, CA',
        image_url: '5.svg',
        founding_date: '2017-01-05',
        organizer: {
          name: "John",
          image_url: '12.svg'
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
            image_url: "1.png",
            members: 15,
          }
          {
            id: 3,
            title: "SF Beach Volleyball",
            image_url: "9.png",
            members: 20,
          }    
        ],
        members: 15
      }
    },
}
```
