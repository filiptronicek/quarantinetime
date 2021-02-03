const quarantineDiv = document.getElementById("quarantine");
const schoolDiv = document.getElementById("school");

//Math.trund polyfill - see: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/trunc#Polyfill
if (!Math.trunc) {
  Math.trunc = function(v) {
    return v < 0 ? Math.ceil(v) : Math.floor(v);
  };
}

function animateValue(id, start, end, duration) {
  const range = start - end;
  let current = start;
  const increment = end > start ? 1 : -1;
  const stepTime = Math.abs(Math.floor(duration / range));
  const obj = document.getElementById(id);
  const timer = setInterval(function() {
    current += increment;
    obj.innerText = current;
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime);
}

function UpdateTime() {
  const quarantineDate = "2020/3/16 0:00";
  const schoolDate = "2020/3/11 0:00";
  const maskDate = "2020/3/17 0:00";


  function Calculate(date, elem) {
    const timeDiff = new Date(date) - new Date();
    const days = timeDiff / (1000 * 60 * 60 * 24);

    const divTime = Math.abs(Number(document.getElementById(elem).innerText));
    const daysformatted = Math.abs(Math.trunc(days));

    //.innerText = Math.abs(days.toFixed(0));
    if (daysformatted !== divTime)
      animateValue(elem, divTime, daysformatted, 5000);
    console.log(
      `Going from ${Math.abs(
        Number(quarantineDiv.innerText)
      )} to ${daysformatted}`
    );
  }
  Calculate(quarantineDate, "quarantine");
  Calculate(schoolDate, "school");
  Calculate(maskDate, "mask")
}
UpdateTime();
setTimeout(() => {
  setInterval(UpdateTime, 1000);
}, 10000);
