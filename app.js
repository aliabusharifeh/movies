

 alert("please press ok");
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


var moviekind = prompt('Hello, what kind of movies do you prefer, action or documentary ?');


while(moviekind !== 'action'&& moviekind !== 'documentary'){
  moviekind = prompt('Please choose one of these kinds ,action or documentary');
}

var visitorChoose;

if(moviekind === 'action'){
visitorChoose ='<img src="https://media1.popsugar-assets.com/files/thumbor/V1py7Gu_5S3g5ew-EoU7hMPJL0c/fit-in/550x550/filters:format_auto-!!-:strip_icc-!!-/2011/12/49/1/192/1922283/261515549512f79f_COVER.jpg">';
}else if (moviekind === 'documentary'){
  visitorChoose ='<img src="https://filmythingsforfilmypeople.files.wordpress.com/2019/01/image.png?w=750">';
}


var imagesNumber= prompt('How many image do you want to see?');

for(var i=0 ; i < imagesNumber; i++){
  document.write(visitorChoose);
} 
