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
f2 = Flight.create flight_no:'123ABC', origin: 'MEL', destination: 'SYD', date: '06/02/2018'
f3 = Flight.create flight_no:'123ABC', origin: 'SYD', destination: 'MEL', date: '06/02/2018'
f4 = Flight.create flight_no:'A2G126', origin: 'SYD', destination: 'MEL', date: '05/03/2018'
f5= Flight.create flight_no:'123ABC', origin: 'ABA', destination: 'BCD', date: '06/02/2018'

puts "Created #{ Flight.all.length } flights."

User.destroy_all
u1 = User.create name:'Milo', email: 'milo@ga.com', password: 'chicken'
u2 = User.create name:'Luke', email: 'luke@ga.com', password: 'chicken'
u3 = User.create name:'Joel', email: 'joel@ga.com', password: 'chicken'


puts "Created #{ User.all.length } users."

Reservation.destroy_all
r1 = Reservation.create seat_row:10, seat_column:'A'
r2 = Reservation.create seat_row:20, seat_column:'B'
r3 = Reservation.create seat_row:30, seat_column:'C'
r4 = Reservation.create seat_row:30, seat_column:'D'
r5 = Reservation.create seat_row:20, seat_column:'A'
r6 = Reservation.create seat_row:10, seat_column:'B'
r7 = Reservation.create seat_row:11, seat_column:'B'
r8 = Reservation.create seat_row:12, seat_column:'B'
r9 = Reservation.create seat_row:13, seat_column:'F'
r10 = Reservation.create seat_row:14, seat_column:'C'
r11 = Reservation.create seat_row:15, seat_column:'E'
r12 = Reservation.create seat_row:18, seat_column:'K'
r13 = Reservation.create seat_row:32, seat_column:'I'
r14 = Reservation.create seat_row:33, seat_column:'A'
r15 = Reservation.create seat_row:31, seat_column:'B'


puts "Created #{ Reservation.all.length } reservations."


a1.flights << f1 << f4
a2.flights << f2
a1.flights << f3 << f5

u1.reservations << r1
u2.reservations << r2
u3.reservations << r3 << r4


f1.reservations << r1 << r2
f2.reservations << r3 << r6 << r10 << r12 << r14
f3.reservations << r4 << r7 << r8 << r13
f4.reservations << r5 << r9 << r11
