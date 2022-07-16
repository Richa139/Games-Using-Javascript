// alert("working");
// random generate for 1st dice
var randomnum1=Math.floor(Math.random()*6)+1;
// console.log(randomnum1);

var randomimage="dice"+randomnum1+".png";

var randomimgsrc="images/"+randomimage;

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimgsrc);

// random generate for 2nd dice
var randomnum2=Math.floor(Math.random()*6)+1;

var randomimg2="dice"+randomnum2+".png";

var randomimgsrc2="images/"+randomimg2;

var image2=document.querySelectorAll("img")[1];

image2.setAttribute("src",randomimgsrc2);

// check the equality of dice numbers
if(randomnum1>randomnum2){
document.querySelector("h1").innerHTML="⛳ Player 1 wins! ";
}
else{
    document.querySelector("h1").innerHTML=" Player 2 wins!⛳ ";
}