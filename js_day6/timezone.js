const timeZones = [
  { city: "New York", zone: "America/New_York" },
  { city: "London", zone: "Europe/London" },
  { city: "Tokyo", zone: "Asia/Tokyo" },
  { city: "Sydney", zone: "Australia/Sydney" },
  { city: "Dubai", zone: "Asia/Dubai" },
  { city: "Chennai", zone: "Asia/Kolkata" }
];

function showWorldTime() {
  const now = new Date();

  timeZones.forEach(({ city, zone }) => {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: zone,
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false
    });
    const time = formatter.format(now);
    console.log(`${city.padEnd(10)} → ${time}`);
  });
}

setInterval(() => {
  console.clear();
  console.log("World Clock\n");
  showWorldTime();
}, 1000);
