
// FIrst Dice Image
var randnum1 = Math.floor(Math.random()*6)+1;
var randnum1Name = "images/dice"+randnum1+".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randnum1Name);

// Second Dice Image
var randnum2 = Math.floor(Math.random()*6)+1;
var randnum2Name = "images/dice"+randnum2+".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randnum2Name);


if(randnum1 > randnum2){
  document.getElementById("refresh").innerHTML = "Player1 Wins";
}
else if (randnum1 === randnum2) {
  document.getElementById("refresh").innerHTML = "Draw";
}
else{
  document.getElementById("refresh").innerHTML = "Player2 Wins";
}
