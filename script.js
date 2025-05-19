function convertFrom(unit) {
  const input = parseFloat(document.getElementById(unit).value);
  if (isNaN(input)) return;

  let seconds;

  // convert input to seconds
  switch (unit) {
    case "years": seconds = input * 365 * 24 * 60 * 60; break;
    case "months": seconds = input * 30 * 24 * 60 * 60; break;
    case "days": seconds = input * 24 * 60 * 60; break;
    case "hours": seconds = input * 60 * 60; break;
    case "minutes": seconds = input * 60; break;
    case "seconds": seconds = input; break;
  }

  // update all fields
  document.getElementById("years").value = (seconds / (365 * 24 * 60 * 60)).toFixed(2);
  document.getElementById("months").value = (seconds / (30 * 24 * 60 * 60)).toFixed(2);
  document.getElementById("days").value = (seconds / (24 * 60 * 60)).toFixed(2);
  document.getElementById("hours").value = (seconds / (60 * 60)).toFixed(2);
  document.getElementById("minutes").value = (seconds / 60).toFixed(2);
  document.getElementById("seconds").value = seconds.toFixed(2);
}
