function diceRefresh(img,rNum){
    if(rNum===1){
        img[0].setAttribute("src","./images/dice1.png");
    }
    if(rNum===2){
        img[0].setAttribute("src","./images/dice2.png");
    }
    if(rNum===3){
        img[0].setAttribute("src","./images/dice3.png");
    }
    if(rNum===4){
        img[0].setAttribute("src","./images/dice4.png");
    }
    if(rNum===5){
        img[0].setAttribute("src","./images/dice5.png");
    }
    if(rNum===6){
        img[0].setAttribute("src","./images/dice6.png");
    }
    
}


var randomNumber1=Math.round(Math.random()*5)+1;
var randomNumber2=Math.round(Math.random()*5)+1;

var img1=document.getElementsByClassName("img1");
var img2=document.getElementsByClassName("img2");

diceRefresh(img1,randomNumber1);
diceRefresh(img2,randomNumber2);

if(randomNumber1===randomNumber2){
    document.querySelector("h1").innerHTML="DRAW!";
}
else if(randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 Wins!";
}
else{
    document.querySelector("h1").innerHTML="Player 2 Wins!🚩";
}
