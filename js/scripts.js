function Ticket(movieName, timeOfDay, ageOfBuyer, auditoriumNumber) {
  this.movieName = movieName
  this.timeOfDay = timeOfDay
  this.ageOfBuyer = ageOfBuyer
  this.auditoriumNumber = auditoriumNumber
}

Ticket.prototype.calculateDiscount = function() {
  // look at the time of day, if it is a feature/first release, and the age of the ticket holder
}

Ticket.prototype.showPrice = function() {
  // call calculateDiscount, and then show the result
}

Ticket.prototype.findAuditorium = function() {
  return this.auditoriumNumber
}

