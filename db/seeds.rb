# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


User.create(name: "user12345", email: "user@example.com", password: "user12345")

10.times do
  Ad.create!(
    title: FFaker::Lorem.phrase(5),
    description: "",
    user_id: 1
  )
end
