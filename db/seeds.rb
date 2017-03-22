
User.destroy_all
ulist = [
  'Justin',
  'Samantha',
  'Katherine',
  'Michael',
  'Alexis',
  'Gilbert',
  'Fariba',
  'Andrew',
  'Claire',
  'Jessie',
  'Guesty'
]
users = []
ulist.each do |name|
  users << User.create!(username: name, password: name)
end


Topic.destroy_all
topic_fields = ['title', 'dash_topic', 'description', 'image_url', 'banner_url']
tlist = [
  ['Wego clubs are', '', 'A great way to get find a new passion and make new friends!',
    '',
    'v1490140132/banner1_croped_darkened_gavqfh.jpg'
  ],

  ['Science & Tech', 'science-tech', 'Learn about and participate in the next big developments in scince and tech!',
    'c_fill,g_center,h_190,w_300/v1490154826/science_hands_luvosm.jpg',
    'v1490140132/banner1_croped_darkened_gavqfh.jpg'
  ],

  ['Arts', 'art', 'Paint a picture, see a show, attend a poetry slam, explore the local arts.',
    'c_fill,h_190,w_300/v1490154493/art_messyhands_e1lsil.jpg',
    'v1490140132/banner1_croped_darkened_gavqfh.jpg'
  ],

  ['Music', 'music', 'See a show, hear a band, make your next band or find your next favorite song.',
    'c_fill,g_south,h_190,w_300/v1490155137/music_guitarlady_yutxtj.jpg',
    'v1490140132/banner1_croped_darkened_gavqfh.jpg'
  ],

  ['Sports', 'sports-adventure', 'Check out the local sports, and activities near you!',
    'c_fill,g_north,h_190,w_300/v1490149915/football_skzsqh.jpg',
    'v1490140132/banner1_croped_darkened_gavqfh.jpg'
  ],

  ['Outdoors', 'outdoors', 'Check out the local hiking, and avdentures near you!',
    'c_fill,g_north,h_190,w_300/v1490151395/hike_red_kcs6kk.jpg',
    'v1490140132/banner1_croped_darkened_gavqfh.jpg'
  ],

  ['Programming', 'tech', 'Lean a new progrgramming language, architecture, or application!',
    'c_fill,g_south,h_190,w_300/v1490151703/programming_y9iicm.jpg',
    'v1490140132/banner1_croped_darkened_gavqfh.jpg'
  ],

  ['Language', 'language', 'Experience the world through written or spoken word. Learn a language, start a book club.',
    'c_fill,g_north,h_190,w_300/v1490153395/talk_picnic_vzzj6q.jpg',
    'v1490140132/banner1_croped_darkened_gavqfh.jpg'
  ],

  ['Business & Career', 'business', 'Hear exciting lectures on business developments. Network with professionals in your industry.',
    'c_fill,g_north,h_190,w_300/v1490153773/business_xtbcwr.jpg',
    'v1490140132/banner1_croped_darkened_gavqfh.jpg'
  ],

  ['Games', 'games', "Lets play games. Be it board, card, computer, console, word, we're up for it. Let's play.",
    'c_fill,g_west,h_190,w_300/v1490157507/game_risk_p5k6xa.jpg',
    'v1490140132/banner1_croped_darkened_gavqfh.jpg'
  ],

  ['Culture', 'culture', 'Check out local fairs and festivals and learn more about our neighbors near and far',
    'c_fill,g_north,h_190,w_300/v1490158522/culture_diwali_zbqubj.jpg',
    'v1490140132/banner1_croped_darkened_gavqfh.jpg'
  ],

  ['Gourmet', 'food-drink', 'Learn how to make delicious food from all over the world. What will you cook up next?',
    'c_fill,h_190,w_300/v1490160954/gourmet_dining_xxwfc9.jpg',
    'v1490140132/banner1_croped_darkened_gavqfh.jpg'
  ],

  ['Film', 'film', "Let's explore the world of cinema. Come see a classic, a new indie film, or the latest Oscar winner.",
    'c_fill,g_south,h_190,w_300/v1490160778/film_clapper_tiob9v.jpg',
    'v1490140132/banner1_croped_darkened_gavqfh.jpg'
  ],

  ['Dance', 'dance', 'Get out there and move it! Be it voguing, ballroom, zumba, or hip-hop, we have adance for you',
    'c_fill,g_north,h_190,w_300/v1490160223/dancing_salsa_j8t9lo.jpg',
    'v1490140132/banner1_croped_darkened_gavqfh.jpg'
  ],
]

topics = []
tlist.each do |topic|
  hash_topic = Hash[topic_fields.zip(topic)]
  topics << Topic.create!(hash_topic)
end
topics.shift

Group.destroy_all
groups = []
groups << Group.create!(
  name: "Group One",
  description: "The SF Data Mining meetup simply aims to bring together people with interests spanning data science, big data, and data visualization.  The group has no affiliations--it's just an extension of the community in San Francisco.  If you'd like to speak at or host one of our gatherings, let us know!",
  hometown: "San Francisco, CA",
  image_url: "1.svg",
  organizer_id: users.sample.id,
  topic_ids: topics.sample(4).map(&:id),
  member_ids: users.sample(5).map(&:id))

groups << Group.create!(
  name: "Group Two",
  description: "The SF Data Mining meetup simply aims to bring together people with interests spanning data science, big data, and data visualization.  The group has no affiliations--it's just an extension of the community in San Francisco.  If you'd like to speak at or host one of our gatherings, let us know!",
  hometown: "San Francisco, CA",
  image_url: "1.svg",
  organizer_id: users[3].id,
  topic_ids: topics.sample(4).map(&:id),
  member_ids: users.sample(7).map(&:id))

groups << Group.create!(
  name: "Group Three",
  description: "The SF Data Mining meetup simply aims to bring together people with interests spanning data science, big data, and data visualization.  The group has no affiliations--it's just an extension of the community in San Francisco.  If you'd like to speak at or host one of our gatherings, let us know!",
  hometown: "San Francisco, CA",
  image_url: "1.svg",
  organizer_id: users[3].id,
  topic_ids: topics.sample(4).map(&:id),
  member_ids: users.sample(9).map(&:id))
