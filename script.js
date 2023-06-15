var day = document.querySelector(".day")
var hour = document.querySelector(".hour")
var minutes = document.querySelector(".minutes")
var moment = document.querySelector(".moment")
function countdownNewYear() {
  var newYear = new Date("Apr 14, 2024 00:00:00")
  var nowYear = new Date()
  var count = newYear - nowYear
  var days = Math.floor(count / (1000 * 60 * 60 * 24))
  var hours = Math.floor((count % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  var min = Math.floor((count % (1000 * 60 * 60)) / (1000 * 60))
  var seconds = Math.floor((count % (1000 * 60)) / 1000)
  day.innerHTML = days + "   " + "<span>Days</span>"
  hour.innerHTML = hours + "  " + "<span>Hours</span>"
  minutes.innerHTML = min + "  " + "<span>Minutes</span>"
  moment.innerHTML = seconds + "  " + "<span>Seconds</span>"
}
setInterval(countdownNewYear, 1000)