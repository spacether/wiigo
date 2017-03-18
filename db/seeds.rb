
User.destroy_all
u = User.create(username: "Guesty", password: "Guesty")

Topic.destroy_all
topic_fields = ['title', 'search_path', 'description', 'image_url']
topics = [
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

topics.each do |topic|
  hash_topic = Hash[topic_fields.zip(topic)]
  Topic.create(hash_topic)
end


#  name         :string           not null
#  description  :text             not null
#  hometown     :string           not null
#  image_url    :string           not null
#  organizer_id :integer          not null

g = Group.create(
  name: "test group",
  description: "content",
  hometown: "San Francisco, CA",
  image_url: "1.svg",
  organizer_id: u.id)

Grouptopic.create(group_id: g.id, topic_id: Topic.first.id)
