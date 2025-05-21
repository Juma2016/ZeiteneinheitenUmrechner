function convertFrom(unit) {
  const input = parseFloat(document.getElementById(unit).value);
  if (isNaN(input)) return;

  let seconds;

  switch (unit) {
    case "years": seconds = input * 365 * 24 * 60 * 60; break;
    case "months": seconds = input * 30 * 24 * 60 * 60; break;
    case "days": seconds = input * 24 * 60 * 60; break;
    case "hours": seconds = input * 60 * 60; break;
    case "minutes": seconds = input * 60; break;
    case "seconds": seconds = input; break;
  }

  // حدث كل الحقول ماعدا الحقل اللي المستخدم بيكتب فيه
  if (unit !== "years") {
    document.getElementById("years").value = (seconds / (365 * 24 * 60 * 60)).toFixed(2);
  }
  if (unit !== "months") {
    document.getElementById("months").value = (seconds / (30 * 24 * 60 * 60)).toFixed(2);
  }
  if (unit !== "days") {
    document.getElementById("days").value = (seconds / (24 * 60 * 60)).toFixed(2);
  }
  if (unit !== "hours") {
    document.getElementById("hours").value = (seconds / (60 * 60)).toFixed(2);
  }
  if (unit !== "minutes") {
    document.getElementById("minutes").value = (seconds / 60).toFixed(2);
  }
  if (unit !== "seconds") {
    document.getElementById("seconds").value = seconds.toFixed(2);
  }
}
