var randomno1=Math.floor(Math.random() * 6)+1;
var rand_dice=`dice${randomno1}.png `;
var imgx=`images/`+rand_dice
var img1=document.querySelectorAll("img")[0]

img1.setAttribute("src",imgx);

 var random2=Math.floor(Math.random()*6)+1;
 var imgy="images/dice"+random2+".png";
 var img2=document.querySelectorAll("img")[1]
 
 img2.setAttribute("src",imgy)

 if(randomno1>random2){
    document.querySelector("h1").innerHTML="Player 1 won"
 }
 else if(randomno1<random2){
    document.querySelector("h1").textContent="Player 2 won"

 }
 else {
    document.querySelector("h1").textContent="DRAW!"

 }

