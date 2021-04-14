alert("pleas press ok to open the website");
 function myFunction() {
  var txt;
  var person = prompt("what's your favourite movie?", "");
  if (person == null || person == "") {
    txt = "User cancelled the prompt.";
  } else {
    document.write('<a href="https://beal.egybest.xyz/trending/">free movies</a>');
  }
  document.getElementById("demo").innerHTML = txt;
}

document.write('film');
document.write('<"https://www.bloginity.com/wp-content/uploads/2011/03/Films.jpg">')