const counterDiv = document.getElementById("counter");

function animateValue(id, start, end, duration) {
    var range = start - end;
    var current = start;
    var increment = end > start? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var obj = document.getElementById(id);
    var timer = setInterval(function() {
        current += increment;
        obj.innerText = current;
        if (current == end) {
            clearInterval(timer);
        }
    }, stepTime);
}

function UpdateTime() {
  const startDate = "2020-03-16";



  const timeDiff = new Date(startDate) - new Date();
  const days = timeDiff / (1000 * 60 * 60 * 24);

  const divTime = Math.abs(Number(counterDiv.innerText));
  const daysformatted = Math.abs(days.toFixed(0));

  //.innerText = Math.abs(days.toFixed(0));
  if(daysformatted !== divTime)   animateValue("counter", divTime, daysformatted, 5000);
  console.log(`Going from ${Math.abs(Number(counterDiv.innerText))} to ${Math.abs(days.toFixed(0))}`)
  console.log(days);
}
UpdateTime();
setTimeout(() => {
    setInterval(UpdateTime, 1000);

}, 5500)


