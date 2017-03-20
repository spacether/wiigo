
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
  ['Music', 'music', 'See a show, hear a band, make your next band or find your next favorite song.', '2.jpg'],
  ['Sports & Adventure', 'sports-adventure', 'Check out the local hiking, sports, and avdentures near you!', '3.jpg'],
  ['Programming & Technology', 'tech', 'Lean a new progrgramming language, architecture, pr application!', '4.jpg'],
  ['Language', 'language', 'Experience the world through written or spoken word. Learn a language, start a book club.', '5.jpg'],
  ['Business & Career', 'business', 'Hear exciting lectures on business developments. Network with professionals in your industry.', '6.jpg'],
  ['Games', 'games', "Lets play games. Be it board, card, computer, console, word, we're up for it. Let's play.", '7.jpg'],
  ['Culture', 'culture', 'Check out local fairs and festivals and learn more about our neighbors near and far', '8.jpg'],
  ['Drinks and Dinner', 'food-drink', 'Learn how to make delicious food from all over the world. What will you cook up next?', '9.jpg'],
  ['Film', 'film', "Let's explore the world of cinema. Come see a classic, a new indie film, or the latest Oscar winner.", '10.jpg'],
  ['Move It', 'movement', 'Get out there and move it! Be it voguing, ballroom, zumba, or hip-hop, we have adance for you', '11.jpg'],
]

topics = []
tlist.each do |topic|
  hash_topic = Hash[topic_fields.zip(topic)]
  topics << Topic.create!(hash_topic)
end


Group.destroy_all
groups = []
groups << Group.create!(
  name: "SF Data Mining",
  description: "The SF Data Mining meetup simply aims to bring together people with interests spanning data science, big data, and data visualization.  The group has no affiliations--it's just an extension of the community in San Francisco.  If you'd like to speak at or host one of our gatherings, let us know!",
  hometown: "San Francisco, CA",
  image_url: "1.svg",
  organizer_id: users[0].id,
  topic_ids: (1..4).to_a.map { |ind| topics[ind].id },
  member_ids: (0..3).to_a.map { |ind| users[ind].id })

  groups << Group.create!(
    name: "Group Two",
    description: "The SF Data Mining meetup simply aims to bring together people with interests spanning data science, big data, and data visualization.  The group has no affiliations--it's just an extension of the community in San Francisco.  If you'd like to speak at or host one of our gatherings, let us know!",
    hometown: "San Francisco, CA",
    image_url: "1.svg",
    organizer_id: users[3].id,
    topic_ids: (1..4).to_a.map { |ind| topics[ind].id },
    member_ids: (4..7).to_a.map { |ind| users[ind].id })
