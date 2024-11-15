var time = new Date().getHours();
if (time < 12) {
  greeting = "Good morning";
} else if (time < 17) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
       