var buttonColours=["red","blue","green","yellow"];

var userClickedPattern=[];

var gamePattern=[];
$(".btn").click(function(){
  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);
  playSound(userChosenColour);
  animatePress(userChosenColour);
})

function playSound(randomChosenColour){
  var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
  audio.play();
}

function nextSequence(){
    
    var randomNumber = Math.floor(Math.random() * 4);

    var randomChosenColour=buttonColours[randomNumber];

    gamePattern.push(randomChosenColour);

    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

    playSound(randomChosenColour);
}

function animatePress(currentColour){
$("#" + currentColour).addClass("pressed");

setTimeout(function(){
  $("#" + currentColour).removeClass("pressed");
},100);
}

$(document).keypress(function() {
  $("h1").text("Level - 0");
  nextSequence();
});

var level=0;

