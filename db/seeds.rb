
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
topic_fields = ['title', 'search_path', 'description', 'image_url']
tlist = [
  ['Wego clubs are', '', 'A great way to get find a new passion and make new friends!', '0.jpg'],
  ['Science & Tech', 'science-tech', 'Learn about and participate in the next big developments in scince and tech!', '1.jpg'],
  ['Arts', 'art', 'Paint a picture, see a show, attend a poetry slam, explore the local arts.', '2.jpg'],
  ['Music', 'music', 'See a show, hear a band, make your next band or find your next favorite song.', '3.jpg'],
  ['Sports & Adventure', 'sports-adventure', 'Check out the local hiking, sports, and avdentures near you!', '4.jpg'],
  ['Programming & Technology', 'tech', 'Lean a new progrgramming language, architecture, pr application!', '5.jpg'],
  ['Language', 'language', 'Experience the world through written or spoken word. Learn a language, start a book club.', '6.jpg'],
  ['Business & Career', 'business', 'Hear exciting lectures on business developments. Network with professionals in your industry.', '7.jpg'],
  ['Games', 'games', "Lets play games. Be it board, card, computer, console, word, we're up for it. Let's play.", '8.jpg'],
  ['Culture', 'culture', 'Check out local fairs and festivals and learn more about our neighbors near and far', '9.jpg'],
  ['Gourmet', 'food-drink', 'Learn how to make delicious food from all over the world. What will you cook up next?', '10.jpg'],
  ['Film', 'film', "Let's explore the world of cinema. Come see a classic, a new indie film, or the latest Oscar winner.", '11.jpg'],
  ['Dance', 'movement', 'Get out there and move it! Be it voguing, ballroom, zumba, or hip-hop, we have adance for you', '12.jpg'],
]

topics = []
tlist.each do |topic|
  hash_topic = Hash[topic_fields.zip(topic)]
  topics << Topic.create!(hash_topic)
end


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
