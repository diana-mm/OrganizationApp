# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Task.destroy_all
Room.destroy_all


t1 = Task.create(
    name: 'Take All Items Out',
    description: 'Take everything and put it out in the open. This will help you see what you have and make it easier to visualize how to put it away!',
    status: false

)

t2= Task.create(
    name: 'Go Through Items and Purge',
    description: 'The time has come to go through and get rid of things. If you haven’t used it recently, throw it away, recycle, or donate it. If it’s broken, you don’t need it anymore. If it’s stained or worn out, get rid of it. The more you can get rid of, the less cluttered your space will feel. You have this beautiful blank slate in front of you; you only want to put back what is absolutely necessary!',
    status: false

)

t3 = Task.create(
    name: 'Sort Like Items',
    description: 'Once you have finished purging things group like items together. This will help you figure out how to organize each category later!',
    status: false
)

t4 = Task.create(
    name: 'Store Like Items Together',
    description: 'Once everything has been sorted you can see how much room each category of items will take. Get creative and store each category in the same place, this does not require you to purchase bins or other organizational tools, use shoeboxes, shipping boxes, or other unique storage options!',
    status: false
)

t5 = Task.create(
    name: 'Label The Categories of Items',
    description: 'Labeling the bin, box, or cabinet that you stored your items in will help you remember where everything is AND promote putting things away later!',
)

t6 = Task.create(
    name: 'Put Things Away',
    description: "Now that everything is sorted, put in bins, and labeled; it is time to put things back! Put most used items in the most accessible place then fill in the rest of the space with all the other items! It is also helpful to put things in places that make sense for the items (maybe don't put toilet paper under the bed!)",
    status: false
)

t7 = Task.create(
    name: "System Not Working? Change it!",
    description: "Never be afraid to change your organization system! If your categorize aren't working for you or the location where you put something seems off; move it! The whole point in organizing it to make your life easier! Do what you need to do to encourage putting things in their spot!",
    status: false
)

r1 = Room.create(name: "Kitchen", status: false)

r2 = Room.create(name: "Bedroom", status: false)

r3 = Room.create(name: "Living Room", status: false)

r4 = Room.create(name: "Bathroom", status: false)

RoomTask.create(room: r1, task: t1)
RoomTask.create(room: r1, task: t2)
RoomTask.create(room: r1, task: t3)
RoomTask.create(room: r1, task: t4)
RoomTask.create(room: r1, task: t5)
RoomTask.create(room: r1, task: t6)
RoomTask.create(room: r1, task: t7)

RoomTask.create(room: r2, task: t1)
RoomTask.create(room: r2, task: t2)
RoomTask.create(room: r2, task: t3)
RoomTask.create(room: r2, task: t4)
RoomTask.create(room: r2, task: t5)
RoomTask.create(room: r2, task: t6)
RoomTask.create(room: r2, task: t7)

RoomTask.create(room: r3, task: t1)
RoomTask.create(room: r3, task: t2)
RoomTask.create(room: r3, task: t3)
RoomTask.create(room: r3, task: t4)
RoomTask.create(room: r3, task: t5)
RoomTask.create(room: r3, task: t6)
RoomTask.create(room: r3, task: t7)

RoomTask.create(room: r4, task: t1)
RoomTask.create(room: r4, task: t2)
RoomTask.create(room: r4, task: t3)
RoomTask.create(room: r4, task: t4)
RoomTask.create(room: r4, task: t5)
RoomTask.create(room: r4, task: t6)
RoomTask.create(room: r4, task: t7)
