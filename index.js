console.log("Hello")


// dynamic year

const fYear = document.getElementById("footerYear");
const d = new Date ();
fYear.innerText = d.getFullYear();
['']
//fYear.textContext = d
console.log(d);




var time = new Date().getHours();
if (time < 12) {
  greeting = "Good morning";
} else if (time < 17) {
  greeting = "Good day";
} else {
  greeting = "Good evening";
}
       