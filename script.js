function convertFrom(unit) {
  const input = parseFloat(document.getElementById(unit).value);
  if (isNaN(input)) return;

  // console.log("Eingabewert: " + input);
  const SECONDS_IN_YEAR = 365 * 24 * 60 * 60;
  const SECONDS_IN_MONTH = (365 / 12) * 24 * 60 * 60;
  const SECONDS_IN_DAY = 24 * 60 * 60;
  const SECONDS_IN_HOUR = 60 * 60;
  const SECONDS_IN_MINUTE = 60;

  let seconds;
 // console.log("Umrechnungsfaktor: " + SECONDS_IN_YEAR);
  switch (unit) {
    case "years": seconds = input * SECONDS_IN_YEAR; break;
    case "months": seconds = input * SECONDS_IN_MONTH; break;
    case "days": seconds = input * SECONDS_IN_DAY; break;
    case "hours": seconds = input * SECONDS_IN_HOUR; break;
    case "minutes": seconds = input * SECONDS_IN_MINUTE; break;
    case "seconds": seconds = input; break;
  }
  // console.log("Umgerechnete Sekunden: " + seconds);
    if (unit !== "years") {
    document.getElementById("years").value = (seconds / SECONDS_IN_YEAR).toFixed(2);
  }
  if (unit !== "months") {
    document.getElementById("months").value = (seconds / SECONDS_IN_MONTH).toFixed(2);
  }
  if (unit !== "days") {
    document.getElementById("days").value = (seconds / SECONDS_IN_DAY).toFixed(2);
  }
  if (unit !== "hours") {
    document.getElementById("hours").value = (seconds / SECONDS_IN_HOUR).toFixed(2);
  }
  if (unit !== "minutes") {
    document.getElementById("minutes").value = (seconds / SECONDS_IN_MINUTE).toFixed(2);
  }
  if (unit !== "seconds") {
    document.getElementById("seconds").value = seconds.toFixed(2);
  }
}
