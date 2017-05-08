
User.destroy_all

boy = [
  "v1490361262/m10_ax7t8o.jpg",
  "v1490361261/m9_woo1s8.jpg",
  "v1490361261/m8_y5lfbs.jpg",
  "v1490361261/m7_pjpc7c.jpg",
  "v1490361261/m6_jymqjg.jpg",
  "v1490361261/m5_qpfqu6.jpg",
  "v1490361261/m4_f86zgn.jpg",
  "v1490361261/m3_lt5zqs.jpg",
  "v1490361261/m2_hthpw0.jpg",
  "v1490361261/m1_bjmeti.jpg"
]

girl = [
  "v1490361261/f10_uqe33e.jpg",
  "v1490361261/f9_uifur4.jpg",
  "v1490361260/f8_q7n0rk.jpg",
  "v1490361261/f7_kme82j.jpg",
  "v1490361261/f6_ucft0i.jpg",
  "v1490361260/f5_jsiscf.jpg",
  "v1490361260/f4_aihjdt.jpg",
  "v1490361260/f3_ilikmf.jpg",
  "v1490361260/f2_xzqvjz.jpg",
  "v1490361260/f1_mefyqb.jpg"
]

ulist = [
  [ 'Justin', boy[0] ],
  [ 'Daniel', boy[1] ],
  [ 'Albert', boy[2] ],
  [ 'Andrew', boy[3] ],
  [ 'Jessie', boy[4] ],
  [ 'Matthew', boy[5] ],
  [ 'Gilbert', boy[6] ],
  [ 'Joseph', boy[7] ],
  [ 'Jeffrey', boy[8] ],
  [ 'Robert', boy[9] ],

  [ 'Samantha', girl[0] ],
  [ 'Katherine', girl[1] ],
  [ 'Autumn', girl[2] ],
  [ 'Jessica', girl[3] ],
  [ 'Alexis', girl[4] ],
  [ 'Claire', girl[5] ],
  [ 'Allison', girl[6] ],
  [ 'Sophia', girl[7] ],
  [ 'Fariba', girl[8] ],
  [ 'Amanda', girl[9] ],

  [ 'Guesty', boy[0] ]
]
users = []
ulist.each do |arr|
  user_hash = {
    username: arr[0],
    password: arr[0],
    image_url: arr[1],
    location: 'San Francisco, CA',
    created_at: DateTime.now - Random.new.rand(366..730)
  }
  users << User.create!(user_hash)
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
    'v1493097314/learning_qyujib.jpg'
  ],

  ['Arts', 'arts', 'Paint a picture, see a show, attend a poetry slam, explore the local arts.',
    'c_fill,h_190,w_300/v1490154493/art_messyhands_e1lsil.jpg',
    'v1493098439/art_nhzq90.jpg'
  ],

  ['Music', 'music', 'See a show, hear a band, make your next band or find your next favorite song.',
    'c_fill,g_south,h_190,w_300/v1490155137/music_guitarlady_yutxtj.jpg',
    'v1493099095/music_u4krik.jpg'
  ],

  ['Sports', 'sports-adventure', 'Check out local sports and activities near you!',
    'c_fill,g_north,h_190,w_300/v1490149915/football_skzsqh.jpg',
    'v1493099625/sports_mdd2wd.jpg'
  ],

  ['Outdoors', 'outdoors', 'Check out the local hiking, and avdentures near you!',
    'c_fill,g_north,h_190,w_300/v1490151395/hike_red_kcs6kk.jpg',
    'v1493100333/outdoors_sqlqhy.jpg'
  ],

  ['Programming', 'tech', 'Lean a new progrgramming language, architecture, or application!',
    'c_fill,g_south,h_190,w_300/v1490151703/programming_y9iicm.jpg',
    'v1493100598/programming_unco7u.jpg'
  ],

  ['Language', 'language', 'Experience the world through written or spoken word. Learn a language, start a book club.',
    'c_fill,g_north,h_190,w_300/v1490153395/talk_picnic_vzzj6q.jpg',
    'v1493268604/language_brn1tx.jpg'
  ],

  ['Business & Career', 'business', 'Hear exciting lectures on business developments. Network with professionals in your industry.',
    'c_fill,g_north,h_190,w_300/v1490153773/business_xtbcwr.jpg',
    'v1493271090/business_lhvgq5.jpg'
  ],

  ['Games', 'games', "Lets play games. Be it board, card, computer, console, word, we're up for it. Let's play.",
    'c_fill,g_west,h_190,w_300/v1490157507/game_risk_p5k6xa.jpg',
    'v1493271799/games_r159hv.jpg'
  ],

  ['Culture', 'culture', 'Check out local fairs and festivals and learn more about our neighbors near and far',
    'c_fill,g_north,h_190,w_300/v1490158522/culture_diwali_zbqubj.jpg',
    'v1493272300/culture_v0xi2n.jpg'
  ],

  ['Film', 'film', "Let's explore the world of cinema. Come see a classic, a new indie film, or the latest Oscar winner.",
    'c_fill,g_south,h_190,w_300/v1490160778/film_clapper_tiob9v.jpg',
    'v1493272843/film_bvzhaq.jpg'
  ],

  ['Dance', 'dance', 'Get out there and move it! Be it voguing, ballroom, zumba, or hip-hop, we have adance for you',
    'c_fill,g_north,h_190,w_300/v1490160223/dancing_salsa_j8t9lo.jpg',
    'v1493273301/dance_n838jw.jpg'
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
group_fields = ['name', 'description', 'topic_ids', 'image_url', 'hometown', 'organizer_id']
glist = []
glist << [
"SF People's Science Lab",
"In the South Bay, come help us build a new science community. We're
focused on citizen science. Our lab is a place to work on fun projects,
learn, discove, tinker, and push the boundaries of scince!
We are open to biotech professionals,
scientists, and citizen scientists of all stripes. Come be part of our
community of hackers, creative thinkers, and mad scientists!",
get_topics('learning', topics),
'v1493310944/citizen_science_pctdux.jpg'
]

glist << [
"Data Science SF",
"We are a comminity organized around showcasing and improving thre great
we are doing with data science. Together we are making graph models of
human diseases and extracting insights from huge data sets. We build
tools, extract data in real time, and are developing a better understanding
of our worls. COme level up you data science skills with us!",
get_topics('learning', topics),
'v1493311829/sf_data_science_cimpr2.jpg'
]

glist << [
"Future Of Hardware",
"This group is a place for anyone passionate or interested in learning
more about the future of hardware and making things. We’re a community
of engineers, designers, entrepreneurs, and makers who come together
to learn from one-another and sharpen our collective hardware skills.
Whether you’re an early-stage startup, a seasoned manufacturing expert,
or just someone that wants to learn, this is the place for you.
The Future of Hardware group is powered by Autodesk Fusion 360, the
first 3D CAD/CAM tool of its kind; connecting your entire product
development process in a single cloud-based platform that works on
both Mac and PC.",
get_topics('learning', topics),
'v1493312138/future_of_hw_kkbxmt.jpg'
]

glist << [
"Figure Sketching SF",
"We are a commuity of professional and amateur artists from all walks
who meet once a month for figure sketching. The people we sketch range
20s to 90s. If you want to bring your sketching to the next level, or
just need some more creativity in your life, give us a try.",
get_topics('arts', topics),
"v1493686890/figure_sketching_lc0f8i.jpg"
]

glist << [
"SF Arts and Culture",
"Do you enjoy museums and gallery walks? Are you looking for someone
to attend a film festival with? This is the group for you!

This group is for film, literature, music, arts and culture enthusiasts
in the SF Bay Area.",
get_topics('arts', topics),
"v1493687169/arts_culture_mqqxpf.jpg"
]

glist << [
"Codename Art+Tech",
"CODAME

ART+TECH nonprofit events to inspire through experience.

/// MISSION
Embracing innovation through creativity, play, and collaboration between
artists and technologists.

/// HOW
We build immersive, engaging, out of the ordinary experiences by:

Playing together with artists, coders, designers, game developers,
creators, performers and musicians.

Celebrating creativity by building magic-inspiring experiences that
combine art with technology.

Inspiring individuals, entrepreneurs, innovators, startups and
companies by injecting creativity into their lives and organizations.",
get_topics('arts', topics),
"v1493687674/art_tech_wyg3dl.jpg"
]

glist << [
"Drink and Draw",
"Come hang out with us and draw in local pubs in SF!   We're looking
for some good times filling up our sketch books.  This event is
recurring every other Wednesday.

Also, we're on Instagram now! Our handle is:
drink.draw.sf

Feel free to DM the account to post drawings from group or whatever
you're feeling that day.",
get_topics('arts', topics),
"v1493687970/drink_draw_cy9pqj.png"
]

glist << [
"Popup Music SF",
"We are a group of people who crave new music. Every week we meet for
drink and check out a new local band. Lately we have been going to a
lot of SoFar sounds events, but we go to concerts, festivals, garage
bands, and raves too. If it's good we're in! Come join us!",
get_topics('music', topics),
"v1493836658/popup_music_vfpsb3.jpg"
]

glist << [
"San Francisco Metal group Group",
"Meet others in your local area who enjoy Metal Music. Make new friends!",
get_topics('music', topics),
"v1493836983/sf_metal_bjamp8.jpg"
]

glist << [
"Classical Music SF",
"Our community focuses on seeing classical music and opera
performances in the Bay area. We have one event a month, and sometimes
go out at wine bars in the city when there aren't any new shows in town.
If you know of upcoming events, let us know. We're very open to
member submitted events.",
get_topics('music', topics),
"v1493837302/sf_classical_u7sei7.jpg"
]

glist << [
"SF Fun Run",
"It's pretty straightforward. We're a group of people that like to RUN
and have fun! Every Wednesday we meet at a different local bar
throughout San Francisco, go for a run, and finish back at the bar to
cool down and socialize over drinks. If you're in your 21-30s (or just
think you can hang) with a fun and outgoing personality looking to meet
new people, then come join us!

All running paces are welcome!",
get_topics('sports', topics),
"v1493958750/sf_fun_run_m2przg.jpg"
]

glist << [
"Lunchtime Pick Up Soccer in SF",
"Hi there, Friendly co-ed lunchtime game for all levels on the turf
field at Raymond Kimball. Mondays and Wednesdays for now. May add
Fridays later.",
get_topics('sports', topics),
"v1493958788/sf_soccer_lv4cgs.jpg"
]

glist << [
"BadassBoarders",
"Connecting and empowering women, we are an urban tribe determined to
master skateboarding while embodying our boldest, most authentic selves.

At its core, Badass Boarders is a group of women learning to skateboard
together. However, its mission extends beyond cruising, ollies, and
kickflips; this is a community dedicated to supporting, mentoring, and
empowering one another to become not only badass boarders, but also
confident, radiant women unleashing our inner awesomeness into the
world. All women, regardless of age, background, or anything else,
are welcome.",
get_topics('sports', topics),
"v1493958825/boarders_fhwo80.png"
]

glist << [
"Bay Area Skiing and Snowboarding",
"Calling all skiers and snowboarders in the San Francisco Bay Area! Are
you ready to hit the slopes for some skiing or snowboarding?!?! Well
then, check out our calendar of upcoming events and RSVP! We will be
providing many social opportunities as well as events, day trips,
cabins, etc... We are a fun and friendly group. Join us! :)",
get_topics('outdoors', topics),
"v1494284007/sf_ski_board_rgtjrl.jpg"
]

glist << [
"NorCal Hikers",
"The Best Things in Life Are Free! So, Come hang out with us in nature:-)

Are you an outdoor enthusiasts looking to Hike? Are you in San Francisco Bay Area? Or even in San Jose/Santa Cruz? Come be social. New in Town? Looking to Meet New People or Friendships? 20's or 30's Something? Here is a group designed for people with similar interests who enjoys Hiking, Climbing, Backpacking, Mountaineering, Skiing and Outdoor Adventures. However, we do include occasional social events such as Wine tasting, Beer tasting, Sporting, Concerts, Happy Hours, Salsa and whatever else that attracts interest. Or even anything that Sounds Fun in the open Fresh Air, far from Urban Civilization to be in good Company around Campfires.",
get_topics('outdoors', topics),
"v1494284847/sf_hiking_mxaia6.jpg"
]

glist << [
"SF Scuba Divers",
"This group is about connecting local divers. We plan monthly happy hours and other activities around the area to get together, share stories, and maybe you'll find some dive buddies! Local diving trips to Monterey as well as some more exotic locations will be posted as groups and I'm always happy to take suggestions for other activities you want to see.

We do not charge for groups (unless there are costs like tickets, etc) but if you use the group and attend events, please consider donating a few dollars using the 'Chip In' button on the left side of the page. This goes towards the roughly $150 per year that group charges to maintain the page. This is not required but greatly appreciated!",
get_topics('outdoors', topics),
"v1494285194/sf_scuba_zd49kw.jpg"
]

glist << [
"Get Your Climb On",
"Get Your Climb On (or GYCO) is a group that brings together rock climbing & outdoor enthusiasts of all experience levels through groups throughout California at destination-outdoor climbing venues, indoor rock climbing gyms, and social gatherings such as happy hours, BBQs & more. The main goal is to create an inclusive, diverse, fun, safe, friendly, collaborative, community from the ground up--A community that encourages one another to learn outdoor leadership skills, to enjoy the sense of community, teamwork, and a community that plans safe & fun climbing meet ups throughout California & beyond!",
get_topics('outdoors', topics),
"v1494285691/sf_climbing_d9jqis.jpg"
]

glist << [
"SF Data Science",
"Data Scientists in San Francisco and the Bay Area are doing incredible data science: making graph models of symptoms and human disease, extracting insight from huge amounts of data in real time, and building tools to make this whole process easier. The SF Data Science group is a community organized forum to showcase this ongoing work, to spread knowledge and help the data science community level up.",
get_topics('programming', topics),
group_images.sample
]

glist << [
"SF Android User Group",
"We are an interactive group of Android developers and contractors discussing trends in technology, business, and job outlook.

Our meetings are technical but also people-oriented.

We encourage both front presentation, group discussion, as well as get-your-hands-dirty-with-cool-app-development.

We typically meet on the last Tuesday of each month and our meetings are FREE and OPEN to the public.",
get_topics('programming', topics),
group_images.sample
]

glist << [
"SF Docker Group",
"Meet other developers and ops engineers using Docker. Docker is an open platform for developers and sysadmins to build, ship, and run distributed applications. Consisting of Docker Engine, a portable, lightweight runtime and packaging tool, and Docker Hub, a cloud service for sharing applications and automating workflows, Docker enables apps to be quickly assembled from components and eliminates the friction between development, QA, and production environments. As a result, IT can ship faster and run the same app, unchanged, on laptops, data center VMs, and any cloud.",
get_topics('programming', topics),
group_images.sample
]

glist << [
"SF Babel",
"In San Francisco, we have a plethora of language exchange meet up groups dedicated to a particular language which usually meet in a coffee-shop.

SF Babel aims to provide a fun and relaxed atmosphere in a bar environment where speakers of many different languages come together to practice speaking a different language in a real-world context with real people, all for FREE.

The goal is to have a night-out, with an international crowd on a consistent basis.",
get_topics('language', topics),
group_images.sample
]

glist << [
"SF German Stammtisch",
"Amiable group who enjoy speaking German and good company! This group is open to anyone who would like to further their German language exposure. Varying levels of proficiency exist among the members so do not be intimidated. We also have native German Speakers from Austria, Germany, Switzerland, and other European countries. Hope to see you all soon at the next group. We are a very friendly group and welcome everyone :)",
get_topics('language', topics),
group_images.sample
]

glist << [
"SF Marketers and Founders",
"We put presenters on full blast by asking hard-hitting growth marketing questions.

Why?

We want growth marketing tactics, not strategies.

We want a ready-to-use marketing playbook.

We want ROI!

After attending many growth marketing events, I realized no one was sharing their best secrets. They were repeating the same information that could be found in blog posts - boring!

We're interested in the marketing tactics that give you an Instagram following of 90K in one year, that build a Facebook Group of ten thousand active members, that get a podcast to 100,000 downloads in the first months, and much more.

Our mission is simple: Help marketing and founder grow startups faster.",
get_topics('business', topics),
group_images.sample
]

glist << [
"China Entrepreneurship Club",
"China-US Bilateral Entrepreneurship Club is a networking and social club for entrepreneurs, pre-entrepreneurs, investors and technologists who are interested in the Chinese market or business opportunities from the opening-up of China and increased cultural, technological and business interaction between China the the United States. This group welcomes everyone that has an interest in these topics.",
get_topics('business', topics),
group_images.sample
]

glist << [
"SF Health Technology Forum",
"Health Technology Forum (HTF) is a platform for people worldwide who have a common interest in making healthcare better, more accessible and affordable. Our international network of technology and healthcare entrepreneurs, developers, regulators, and providers are advancing the pace of healthcare innovation by engaging in exciting and productive dialogue between experts in healthcare.

Worldwide interconnections are critical as we think global and act local. The advent of PHRs, social network, open platforms, smart phone, personalized medicine, compliance, interoperability, and policies are creating new opportunities for everyone to engage in a dialog to improve care everywhere. ",
get_topics('business', topics),
group_images.sample
]

glist << [
"SF Board Games group",
"This group has been going on since about November 2011, as a place to organize weekly game nights. We play mostly Euro-style strategy games, such as those found on boardgamegeek.com. So, experienced strategy gamers are preferred but if you don't mind learning some relatively complicated rules, we are happy to teach. We are always looking to recruit others to the die-hard boardgamer cult. Welcome!",
get_topics('games', topics),
group_images.sample
]

glist << [
"Bay Area Nerds Geeks and Gamers",
"This is the group page for all things nerdy & fun: Board/Social/Video Game Night (at Bars/Cafes, online, or at the fantastic video game venues in the city), Cosplay Events (from Comic Cons to the Edwardian Ball), Dinners & the latest SciFi/Fantasy Movies, Comic Book/Game Swaps, BYOLAB (bring your own legos & build), Super Nerd Night, Trivia, Drunk Spelling Bee, SF Scavenger Hunts, SF Startup List. All with the idea that making friends should be easy and totally not scary. We've had thousands of groups and people have made friends, found jobs, homes and even love.",
get_topics('games', topics),
group_images.sample
]

glist << [
"Sunday Chess in the Mission",
"Come for the chess; stay for the fun people and conversations, good food, beer and wine. Ideal players are adults who know at least the basic rules, but don't have to take the game too seriously. You should have a very relaxed attitude about winning/losing. Just for fun, fun, fun, and the chance to learn and/or stay in practice.

If you have a chess set (board and pieces) and/or a chess clock, it'd be helpful if you bring it. But if you don't, that's fine too. (After all, only half the players need to bring a set!)",
get_topics('games', topics),
group_images.sample
]

glist << [
"Non Stop Bhangra",
"We are a collective of dancers, DJs, artists and more. We want to share to joy of Bhangra with the Bay Area community. If you're looking a fun workout, a chance to try out a new flavor of dance, and to meet some exceptional people, you're at the right place! We currently offer classes in San Francisco and Berkeley, run a monthly event at Public Works and perform throughout the bay.",
get_topics('culture', topics),
group_images.sample
]

glist << [
"SF Italian Lovers Group",
"Who: Anyone interested in Italian food, Wine and Travel. What: During our meet ups we will enjoy cooking, wine-tasting, Olive oil tasting, practicing our Italian language skills, and have opportunities to travel to Italy! Why: Because we are San Franciscans who love all things Italian!",
get_topics('culture', topics),
group_images.sample
]

glist << [
"Mexican Culture Group",
"Greetings--Our group is focused on Indigenous cultural & political events. We hit the pow wows and film festivals as much as possible. The group has a specific focus on Guatemalan/Mexican/Indigenous American art, spirituality, dance & textiles.

We go to the Guelaguetza (Oaxacan Indigenous Dance/Cultural Fair) in Santa Cruz and fun events like concerts & fairs. We love to go to dances, Day of the Dead, Cinco de Mayo in Oakland, and other street fairs and demonstrations for human rights, environmental causes, to stop Keystone XL Pipeline and for social justice.",
get_topics('culture', topics),
group_images.sample
]

glist << [
"Bay Area Film Society",
"This is an ACTIVE group Group... if you are sensitive to being invited to our events, please note that we schedule about 4-8 events a month.
We try to keep emails down to the announcements of the actual movies, and then only to those that RSVP 'yes' to a specific event.
Other than that, I try to not send out more than one mass non-event email every few months.

Our basic mission: To see significant and/or interesting films playing in the greater San Francisco Bay Area and then to go somewhere close by afterwards to eat, drink, share company and discuss the films we just watched.",
get_topics('film', topics),
group_images.sample
]

glist << [
"Thrills and Chills SF",
"Do you always have to catch the latest scare flick alone because your friends think you are insane to watch this stuff?

Do you get strange looks when you start to rave about '2001' or 'House of 1000 corpses'?

This is your group :) (... and if your friends don't think you're insane please bring them along ... )

We are a bunch of friendly people with an offbeat taste in films, with emphasis on Horror, SciFi and Fantasy.

I hope to see you at our next event!",
get_topics('film', topics),
group_images.sample
]

glist << [
"Radical Visions Cinema Club",
"Meet others who deliberately seek out challenging foreign, avant-garde, and experimental films screened in San Francisco or Berkeley. After each film, we will get together for conversation at a cafe.

If you, like me, also enjoy thought-provoking literature, check out my Classic Literature and Cafes Club: http://www.group.com/Classic-Literature-and-Cafes
",
get_topics('film', topics),
group_images.sample
]

glist << [
"SF Salsa Dancing",
"What iHeartMambo Social is all about: Friendship, bringing the dancers what they want and creating an event that will conglomerate all the great dancers from the Bay. We are a NOT-FOR-PROFIT group, . Focused of giving you a great dancing experience and elevating Mambo in the Bay Area. In our socials you will listen and dance to quality Mambo, Salsa &amp; ChaCha music on Vinyl. We strive to create a friendly, fun and supportive environment for dancers of all levels. All the funds collected is used for improving the social. (More lighting, fans, speakers, turntables, supporting our local and traveling dance artists, djs, etc) It is all about the fun. Share our event and have fun! Since we are all dancers we can definitely relate to you and understand what you want from a social. We put this event together so we all can have a great dancing experience at a reasonable price. Please don't forget to say hello and save us a dance! See you on the dance floor! iHeartMambo team.",
get_topics('dance', topics),
group_images.sample
]

glist << [
"SF Bollywood Party",
"Jai Ho! (Hindi for Be Victorious) dance party facilitates making new friends & learning new Bollywood dance moves with your new friends. After rocking Portland, Seattle, LA & San Diego, we are excited to bring Jai Ho! to Bay Area.",
get_topics('dance', topics),
group_images.sample
]

glist << [
"Bay Area Ballroom",
"Welcome! We are now on Facebook too:
https://www.facebook.com/BABallroomDancers
This group is for ballroom dancers looking to expand their network of dance friends, find friends to dance with, attend ballroom dances as a group, and to take our dancing 'beyond the studios' and to other great dance places: clubs, parties, festivals. Find a dance partner, even perform in schools or for other nonprofits to give back to the community. We can also organize our own public dances and use proceeds to help put dance programs in schools or for other good works.",
get_topics('dance', topics),
group_images.sample
]

Membership.destroy_all
groups = []
glist.each do |item|
  topicvals = item.concat([ group_hometown, users.sample.id ])
  hash_group = Hash[group_fields.zip(topicvals)]
  grp = Group.create!(hash_group)
  created_at = DateTime.now - Random.new.rand(210..365)
  grp[:created_at] = created_at
  groups << grp
  members = users.sample(Random.new.rand(8..20))
  members.reject! { |member| member == grp.organizer }
  members.each do |member|
    membership_hash = {
      user_id: member.id,
      group_id: grp.id,
      created_at: created_at + Random.new.rand(1..14)
    }
    Membership.create!(membership_hash)
  end
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


Event.destroy_all
Rsvp.destroy_all

groups.each do |grp|
  num1 = Random.new.rand(-60..-30)
  num2 = Random.new.rand(-14..-7)
  num3 = Random.new.rand(4..9)
  num4 = Random.new.rand(11..18)
  membercount = grp.members.length + 1
  timedeltas = [num1.days, num2.days, num3.days, num4.days]
  titles = [
    'First Meeting',
    'Second meeting, Event Planning Meeting',
    'Out on the Town',
    'Weekly meeting'
  ]
  descriptions = [
    "Let's develop a mision statement for our club and think of some future events.",
    "We now have a great mission statement but we need to plan out more events. Come give us suggestions!",
    "Let's have fun going out on the town.",
    'This is our weekly event where we get together and do our thing.'
  ]
  locations = [
    "Organizer's house",
    "Bazaar Cafe",
    "16th Street in The Mission",
    "Golden Gate Park"
  ]
  addresses = [
    "552 Ivy St, San Francisco, CA 94102",
    "5927 California St, San Francisco, CA 94121",
    "2000 Mission St, San Francisco, CA 94110",
    "100 John F Kennedy Dr, San Francisco, CA 94118"
  ]
  timedeltas.each_with_index do |delta, i|
    num_people = (membercount * Random.new.rand(0.2..0.9)).floor
    attendees = grp.allmembers.sample(num_people)
    start_time = DateTime.now + delta
    created_at = start_time - 21.days
    event_hash = {
      group_id: grp.id,
      title: titles[i],
      start_time: start_time,
      description: descriptions[i],
      location: locations[i],
      address: addresses[i],
      created_at: created_at,
      updated_at: created_at
    }
    event = Event.create!(event_hash)
    attendees.each do |member|
      # past events, rsvp between event creation and when it happens
      # future events rsvp between event creation and now
      rsvp_delta = [
        (DateTime.now - created_at).to_i,
        (start_time - created_at).to_i
      ].min
      rsvp_time = created_at + Random.new.rand(rsvp_delta).days
      rsvp_hash = {
        user_id: member.id,
        event_id: event.id,
        created_at: rsvp_time,
        updated_at: rsvp_time,
        going: true
      }
      Rsvp.create!(rsvp_hash)
    end
  end
end
