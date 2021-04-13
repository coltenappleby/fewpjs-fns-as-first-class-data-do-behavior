/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
function greet(time) {
  hour = parseInt(time.split(':')[0])
  // hour = parsed[0].parseInt()

  if (hour < 12) {
    return 'Good Morning'
  } else if (hour >= 12 && hour < 17) {
    return 'Good Afternoon'
  } else {
    return 'Good Evening'
  }

}
/* Write your implementation of displayMessage() */

function displayMessage(message) {
  let greeting = document.querySelector('h1#greeting')
  greeting.innerHTML = `${message}`
}