# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


Airplane.destroy_all
a1 = Airplane.create name: '747', row:40, column:4
a2 = Airplane.create name: 'A380', row:80, column:4
a3 = Airplane.create name: 'A330', row:30, column:4


puts "Created #{ Airplane.all.length } airplanes."

Flight.destroy_all
f1 = Flight.create flight_no:'123ABC', origin: 'SYD', destination: 'LAX', date: '06/02/2018'
f2 = Flight.create flight_no:'123ABC', origin: 'SYD', destination: 'LAX', date: '06/02/2018'
f3 = Flight.create flight_no:'123ABC', origin: 'SYD', destination: 'LAX', date: '06/02/2018'

puts "Created #{ Flight.all.length } flights."

User.destroy_all
u1 = User.create name:'Milo', email: 'milo@ga.com', password: 'chicken'
u2 = User.create name:'Luke', email: 'luke@ga.com', password: 'chicken'
u3 = User.create name:'Joel', email: 'joel@ga.com', password: 'chicken'


puts "Created #{ User.all.length } users."

Reservation.destroy_all
r1 = Reservation.create row:10, column:'A'
r2 = Reservation.create row:20, column:'B'
r3 = Reservation.create row:30, column:'C'
r4 = Reservation.create row:30, column:'D'


puts "Created #{ Reservation.all.length } reservations."


a1.flights << f1
a2.flights << f2
a1.flights << f3

u1.reservations << r1
u2.reservations << r2
u3.reservations << r3 << r4
