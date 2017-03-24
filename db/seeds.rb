
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

default_banner = 'v1490140132/banner1_croped_darkened_gavqfh.jpg'
Topic.destroy_all
topic_fields = ['title', 'dash_topic', 'description', 'image_url', 'banner_url']
tlist = [
  ['Wego clubs are', '', 'A great way to get find a new passion and make new friends!',
    '',
    default_banner
  ],

  ['Learning', 'learning', 'Learn about and participate in the next big developments in science, education, and technology!',
    'c_fill,g_center,h_190,w_300/v1490154826/science_hands_luvosm.jpg',
    default_banner
  ],

  ['Arts', 'arts', 'Paint a picture, see a show, attend a poetry slam, explore the local arts.',
    'c_fill,h_190,w_300/v1490154493/art_messyhands_e1lsil.jpg',
    default_banner
  ],

  ['Music', 'music', 'See a show, hear a band, make your next band or find your next favorite song.',
    'c_fill,g_south,h_190,w_300/v1490155137/music_guitarlady_yutxtj.jpg',
    default_banner
  ],

  ['Sports', 'sports-adventure', 'Check out the local sports, and activities near you!',
    'c_fill,g_north,h_190,w_300/v1490149915/football_skzsqh.jpg',
    default_banner
  ],

  ['Outdoors', 'outdoors', 'Check out the local hiking, and avdentures near you!',
    'c_fill,g_north,h_190,w_300/v1490151395/hike_red_kcs6kk.jpg',
    default_banner
  ],

  ['Programming', 'tech', 'Lean a new progrgramming language, architecture, or application!',
    'c_fill,g_south,h_190,w_300/v1490151703/programming_y9iicm.jpg',
    default_banner
  ],

  ['Language', 'language', 'Experience the world through written or spoken word. Learn a language, start a book club.',
    'c_fill,g_north,h_190,w_300/v1490153395/talk_picnic_vzzj6q.jpg',
    default_banner
  ],

  ['Business & Career', 'business', 'Hear exciting lectures on business developments. Network with professionals in your industry.',
    'c_fill,g_north,h_190,w_300/v1490153773/business_xtbcwr.jpg',
    default_banner
  ],

  ['Games', 'games', "Lets play games. Be it board, card, computer, console, word, we're up for it. Let's play.",
    'c_fill,g_west,h_190,w_300/v1490157507/game_risk_p5k6xa.jpg',
    default_banner
  ],

  ['Culture', 'culture', 'Check out local fairs and festivals and learn more about our neighbors near and far',
    'c_fill,g_north,h_190,w_300/v1490158522/culture_diwali_zbqubj.jpg',
    default_banner
  ],

  ['Fine Fare', 'food-drink', 'Learn how to make and find delicious food and drinks from all over the world. Explore the world of food!',
    'c_fill,h_190,w_300/v1490160954/gourmet_dining_xxwfc9.jpg',
    default_banner
  ],

  ['Film', 'film', "Let's explore the world of cinema. Come see a classic, a new indie film, or the latest Oscar winner.",
    'c_fill,g_south,h_190,w_300/v1490160778/film_clapper_tiob9v.jpg',
    default_banner
  ],

  ['Dance', 'dance', 'Get out there and move it! Be it voguing, ballroom, zumba, or hip-hop, we have adance for you',
    'c_fill,g_north,h_190,w_300/v1490160223/dancing_salsa_j8t9lo.jpg',
    default_banner
  ],
]

topics = []
tlist.each do |topic|
  hash_topic = Hash[topic_fields.zip(topic)]
  topics << Topic.create!(hash_topic)
end
topics.shift


def get_topics(intopic, topics)
  items = topics.select do |item|
    item.title.downcase.include?(intopic.downcase)
  end
  items.map(&:id)
end


Group.destroy_all
group_images = ['v1490209770/group_default_w5eg53.jpg',
  'v1490242827/group_def2_diks8y.jpg']

group_hometown = "San Francisco, CA"
group_fields = ['name', 'description', 'topic_ids', 'hometown', 'organizer_id', 'member_ids', 'image_url']
glist = []
glist << [
"SF People's Science Lab",
"In the South Bay, come help us build a new science community. We're
focused on citizen science. Our lab is a place to work on fun projects,
learn, discove, tinker, and push the boundaries of scince!
We are open to biotech professionals,
scientists, and citizen scientists of all stripes. Come be part of our
community of hackers, creative thinkers, and mad scientists!",
get_topics('learning', topics)
]

glist << [
"Data Science SF",
"We are a comminity organized around showcasing and improving thre great
we are doing with data science. Together we are making graph models of
human diseases and extracting insights from huge data sets. We build
tools, extract data in real time, and are developing a better understanding
of our worls. COme level up you data science skills with us!",
get_topics('learning', topics)
]

glist << [
"Figure Sketching SF",
"We are a commuity of professional and amateur artists from all walks
who meet once a month for figure sketching. The people we sketch range
20s to 90s. If you want to bring your sketching to the next level, or
just need some more creativity in your life, give us a try.",
get_topics('arts', topics)
]

glist << [
"Popup Music SF",
"We are a group of people who crave new music. Every week we meet for
drink and check out a new local band. Lately we have been going to a
lot of SoFar sounds events, but we go to concerts, festivals, garage
bands, and raves too. If it's good we're in! Come join us!",
get_topics('music', topics)
]

glist << [
"Classical Music SF",
"Our community focuses on seeing classical music and opera
performances in the Bay area. We have one event a month, and sometimes
go out at wine bars in the city when there aren't any new shows in town.
If you know of upcoming events, let us know. We're very open to
member submitted events.",
get_topics('music', topics)
]



groups = []
glist.each do |item|
  topicvals = item.concat([ group_hometown, users.sample.id, users.sample(6).map(&:id), group_images.sample ])
  hash_group = Hash[group_fields.zip(topicvals)]
  groups << Group.create!(hash_group)
end

#  id          :integer          not null, primary key
#  group_id    :integer          not null
#  title       :string           not null
#  start_time  :datetime         not null
#  description :text             not null
#  location    :string           not null
#  address     :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null


sleep 10
Event.destroy_all
grp = groups.first
e1 = Event.create!(group_id: grp.id, title: 'blah', start_time: DateTime.now - 2.days, description: 'a', location: 'a', address: 'b')
e2 = Event.create!(group_id: grp.id, title: 'blah two', start_time: DateTime.now + 4.days, description: 'a', location: 'a', address: 'b')

Rsvp.destroy_all
Rsvp.create!(event_id: e1.id, user_id: grp.members[0].id, going: true)
Rsvp.create!(event_id: e1.id, user_id: grp.members[1].id, going: false)
Rsvp.create!(event_id: e1.id, user_id: grp.members[2].id, going: true)

Rsvp.create!(event_id: e2.id, user_id: grp.members[0].id, going: true)
Rsvp.create!(event_id: e2.id, user_id: grp.members[1].id, going: true)
Rsvp.create!(event_id: e2.id, user_id: grp.members[2].id, going: true)
