# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Animal.destroy_all

animals = Animal.create([
                          { name: 'dog' },
                          { name: 'cat' },
                          { name: 'horse' },
                          { name: 'pig' },
                          { name: 'giraffe' },
                          { name: 'turtle' }
                        ])

doggy = Name.new({ name: 'doggy' })
puppy = Name.new({ name: 'puppy' })
kitty = Name.new({ name: 'kitty' })
kitten = Name.new({ name: 'kitten' })
horsey = Name.new({ name: 'horsey' })
piggy = Name.new({ name: 'piggy' })
piglet = Name.new({ name: 'piglet' })
turtoise = Name.new({ name: 'turtoise' })

doggy.animal = Animal.find_by(name: 'dog')
doggy.save

puppy.animal = Animal.find_by(name: 'dog')
puppy.save

kitty.animal = Animal.find_by(name: 'cat')
kitty.save

kitten.animal = Animal.find_by(name: 'cat')
kitten.save

horsey.animal = Animal.find_by(name: 'horse')
horsey.save

piggy.animal = Animal.find_by(name: 'pig')
piggy.save

piglet.animal = Animal.find_by(name: 'pig')
piglet.save

turtoise.animal = Animal.find_by(name: 'turtle')
turtoise.save
