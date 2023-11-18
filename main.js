var blueCar = document.getElementById("bluecar");
 var blueCarb = document.getElementById("bluecarb");
var raceCar = document.getElementById("racecar");
var result = document.getElementById("result");
var score =  document.getElementById("score");
const scoreGame =  document.getElementById("scoreGame");
var game =  document.getElementById("game");
var counter = 0;
var jumpsound = document.getElementById("jumpsound")



// bluecar move
blueCar.addEventListener("animationiteration", function(){
    var random = ((Math.floor(Math.random() * 3)) * 130)
    blueCar.style.left = random + "px";
    counter++
    
    scoreGame.innerHTML = `score: ${counter} `;
    
    speed();
});

blueCarb.addEventListener("animationiteration", function(){
    var random = ((Math.floor(Math.random() * 3)) * 200)
    blueCarb.style.left = random + "px";
    counter++
    
    scoreGame.innerHTML = `score: ${counter} `;
    
    speed();
});

//rececar move
var rightBut = document.getElementById("rightBut");
rightBut.addEventListener("click", function(){
    var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));
    if(raceCarLeft < 260){raceCar.style.left = (raceCarLeft + 130) + "px"}
    jumpsound.play();
    
    bluecar.style.animationName = "move";
    
    bluecarb.style.animationName = "moveb";
});

var leftBut = document.getElementById("leftBut");
    leftBut.addEventListener("click", function(){
        var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));
        if(raceCarLeft > 0){raceCar.style.left = (raceCarLeft - 130) + "px"}
        jumpsound.play()
  
    bluecar.style.animationName = "move";
    
    bluecarb.style.animationName = "moveb";
});

setInterval(function Gameover (){
    var blueCarTop = parseInt(window.getComputedStyle(blueCar).getPropertyValue("top"))
    var blueCarLeft = parseInt(window.getComputedStyle(blueCar).getPropertyValue("left"));
    var raceCarLeft = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));
        if((blueCarLeft === raceCarLeft) && (blueCarTop > 525) && (blueCarTop < 855)){
            result.style.display = "block";
           bluecar.style.animationName = "movee";
           
           bluecarb.style.animationName = "movef";
           
            score.innerHTML = `score: ${counter} `;

            counter = 0;
        }
}, 10);


function speed() {
 setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(bluecar, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.01;
            bluecar.style.animationDuration = newDur + 's';
           
           
        }, 500);
        
       }
       
       setInterval(function Gameoverb (){
    var blueCarTopb = parseInt(window.getComputedStyle(blueCarb).getPropertyValue("top"))
    var blueCarLeftb = parseInt(window.getComputedStyle(blueCarb).getPropertyValue("left"));
    var raceCarLeftb = parseInt(window.getComputedStyle(raceCar).getPropertyValue("left"));
        if((blueCarLeftb === raceCarLeftb) && (blueCarTopb > 525) && (blueCarTopb < 855)){
            result.style.display = "block";
   
   bluecar.style.animationName = "movee";
           
           bluecarb.style.animationName = "movef";
   
            score.innerHTML = `score: ${counter} `;

            counter = 0;
        }
}, 10);

/* const scoreToSend = score; // Replace with your game's actual score variable

        fetch('http://localhost:8080/store_score', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ score: scoreToSend }), // Send data as JSON
        }).then(response => {
            // Handle the response if needed
            console.log('Score sent:', response);
        }).catch(error => {
            // Handle errors if the request fails
            console.log('Error sending the score:', error);
        }); */
        
function stop() {
   var storCon = document.getElementById("storCon").style.display = "block";
   
   
}

function playOpen() {
 var game = document.getElementById("game").style.display = "block";
}

function exitgame() {
 var homeContainer = document.getElementById("homeContainer").style.display = "block";
 var game = document.getElementById("game").style.display = "none";
}

function cara() {
 var homecara = document.getElementById("homecar");
 
 homecara.src = "IMG_20231115_113413-depositphotos-bgremover.png";
 
 var playercara = document.getElementById("playercar");
 
 playercara.src = "IMG_20231115_113413-depositphotos-bgremover.png";
}

function carb() {
 var homecarb = document.getElementById("homecar");
 
 homecarb.src = "IMG_20231115_114238-depositphotos-bgremover.png";
 
 var playercarb = document.getElementById("playercar");
 
 playercarb.src = "IMG_20231115_114238-depositphotos-bgremover.png";
}

function carc() {
 var homecarc = document.getElementById("homecar");
 
 homecarc.src = "IMG_20231115_113930-depositphotos-bgremover.png";
 
 var playercarc = document.getElementById("playercar");
 
 playercarc.src = "IMG_20231115_113930-depositphotos-bgremover.png";
}

function card() {
 var homecard = document.getElementById("homecar");
 
 homecard.src = "IMG_20231115_114951-depositphotos-bgremover.png";
 
 var playercard = document.getElementById("playercar");
 
 playercard.src = "IMG_20231115_114951-depositphotos-bgremover.png";
}

function care() {
 var homecare = document.getElementById("homecar");
 
 homecare.src = "IMG_20231115_113731-depositphotos-bgremover.png";
 
 var playercare = document.getElementById("playercar");
 
 playercare.src = "IMG_20231115_113731-depositphotos-bgremover.png";
}

function carf() {
 var homecarf = document.getElementById("homecar");
 
 homecarf.src = "IMG_20231115_114505-depositphotos-bgremover.png";
 
 var playercarf = document.getElementById("playercar");
 
 playercarf.src = "IMG_20231115_114505-depositphotos-bgremover.png";
}
