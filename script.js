

function changeOpacity() {
    var backgroundElement = document.getElementById('Background');
    if (backgroundElement.style.opacity === "0") {
        backgroundElement.style.opacity = "1";
    } else {
        backgroundElement.style.opacity = "0";
    }
}
function updateTime() {
    let now = new Date();
    
    let year = now.getFullYear()-2006;
    let month = String(now.getMonth() + 1).padStart(2, '0'); // months are 0-based, so add 1
    let day = String(now.getDate()+7).padStart(2, '0');
    let hour = String(now.getHours()).padStart(2, '0');
    let minute = String(now.getMinutes()).padStart(2, '0');
    let second = String(now.getSeconds()).padStart(2, '0');
    
    document.getElementById("vrijeme").innerHTML = `${year}.${month}.${day}`;

}

// Set the countdown date (target date)
var countDownDate = new Date(Date.UTC(2024, 11, 31, 0, 0, 0));

// Update the countdown every 1 second
var x = setInterval(function() {
  // Get current date and time
  var nowDate = new Date();

  // Calculate the year difference
  var yearsDiff = countDownDate.getFullYear() - nowDate.getFullYear();

  // Calculate the month difference
  var monthsDiff = (yearsDiff * 12) + (countDownDate.getMonth() - nowDate.getMonth());

  // If the current date is later in the month than the target date, adjust months difference
  if (nowDate.getDate() > countDownDate.getDate()) {
    monthsDiff--;
  }

  // Create a new date adjusted by the months difference
  var adjustedDate = new Date(nowDate);
  adjustedDate.setMonth(adjustedDate.getMonth() + monthsDiff);

  // Calculate the remaining time after adjusting months
  var distance = countDownDate - adjustedDate;

  // Calculate remaining days, hours, minutes, and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the format: months:days:hours:minutes:seconds
  document.getElementById("countdown").innerHTML = monthsDiff + 'm:' + days + 'd:' + hours + 'h:' + minutes + 'm:' + seconds + 's';

  // If the countdown is over, display a message
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);


  // Update the time every second
  setInterval(updateCountdown,1000);
  setInterval(updateTime, 1000);
  setInterval(changeOpacity, 5000);
