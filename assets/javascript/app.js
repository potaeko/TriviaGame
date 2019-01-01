

//=======Trial and error=====
var correct=0;
var incorrect=0;
var TimesUp=0;
//question number
var i=0;
//User Answer
var userAnswer=[]
//Questions Set
var question=["What's AI stand for ?","What decade did formal AI research begin?","Who created ASIMO?","What was the name of first AI film?","What was the name of first Robot land on Mars?"];
//Choices Set
var choice1=["Artificial Intelligence","1950s","TOYOTA","The Invisible Boy","Mars Pathfinder's Solo Rover"];
var choice2=["American Idol","1960s","APPLE","Metropolis","Mars Pathfinder's Range Rover"];
var choice3=["Adobe Illustrator","1970s","SAMSUNG","Alphaville","Mars Pathfinder's Sojourner Rover"];
var choice4=["Automatic Indexing","1980s","HONDA","Westworld","Mars Pathfinder's Star Rover"];
//Answers Set
var answer=["Artificial Intelligence","1950s","HONDA","Metropolis","Mars Pathfinder's Sojourner Rover"];
//Gif 
var pic=['<img src="assets/images/ai.gif" style="width:250px;height:150px">',
  '<img src="assets/images/research.gif" style="width:250px;height:150px">',
  '<img src="assets/images/asimo.gif" style="width:250px;height:150px">',
  '<img src="assets/images/metro.gif" style="width:250px;height:150px">',
  '<img src="assets/images/mars.gif" style="width:250px;height:150px">'];

// Page load or refresh, 
window.onload = function() {
  $("#line2").html("WATCH OUT! ROBOTS INVASION!")
  //start button
  $("#line3").html('<button type="button" id="startbutton" class="btn btn-success btn-block">Start</button>')
  // $("#startbutton").click(play);
  //when click start game,show answer and choices
  $("#startbutton").click(play);
  };

//Count Down 10 sec for showing question
var int1;
function PlayCountDown(i) {
  int1 = setInterval(function() {
      document.getElementById("line0").innerHTML = "Time Remaining: " + i;
      i-- || (clearInterval(int1), showAnswerNoClick());
  }, 1000);
};

//Count Down 5 sec for showing answer
var int2;
function AnswerCountDown(i) {
  int2 = setInterval(function() {
      document.getElementById("line0").innerHTML = "Next Question In: " + i;
      i-- || (clearInterval(int2), play());
  }, 1000);
};

//need function to end time when click answer and run next question()
//case 1: click start , next question(time count)
function play(){ 
  PlayCountDown(10)
  $("#line2").html(question[i]);
  $("#line3").html('<button type="button" id="choice1" class="btn btn-primary btn-block">'+choice1[i])+'</button>';
  $("#line4").html('<button type="button" id="choice2" class="btn btn-primary btn-block">'+choice2[i])+'</button>';
  $("#line5").html('<button type="button" id="choice3" class="btn btn-primary btn-block">'+choice3[i])+'</button>';
  $("#line6").html('<button type="button" id="choice4" class="btn btn-primary btn-block">'+choice4[i])+'</button>';
  
  //when click on button
  //************click to stop timing */
  $("#choice1").click(check1);
  $("#choice2").click(check2);
  $("#choice3").click(check3);
  $("#choice4").click(check4);

  //end game
  if(i==question.length){   
    StopTiming1();
    StopTiming2();
    $("#line0").empty();
    $("#line1").html("-GAME END!-");
    $("#line2").html("Correct: "+correct);
    $("#line3").html("Incorrect: "+incorrect);
    $("#line4").html("TimesUp: "+TimesUp);
    $("#line5").html('<img src="assets/images/ending.gif" style="width:250px;height:150px">');
    $("#line6").empty();
    return
  }
};


//case 2:No click time over >show answer(time count)
function showAnswerNoClick(){
  TimesUp++;
  StopTiming1();
  AnswerCountDown(5);
   $("#line1").empty();
   $("#line2").html("Correct: "+correct);
   $("#line3").html("Incorrect: "+incorrect);
   $("#line4").html('TimesUp: '+TimesUp);
   $("#line5").html("Correct Answer: "+answer[i]);
   $("#line6").html(pic[i]);
   i++;
};
//case 3:click >show answer(time count)
function showAnswerWithClick(){
  StopTiming1();
  AnswerCountDown(5);
   $("#line1").empty();
   $("#line2").html("Correct: "+correct);
   $("#line3").html("Incorrect: "+incorrect);
   $("#line4").html('TimesUp: '+TimesUp);
   $("#line5").html("Correct Answer: "+answer[i]);
   $("#line6").html(pic[i]);
   i++;
};
//case 4: click choice>time end>show answer(time count)>next question(time count)
function ClickAndCheck(){
  StopTiming1()
  checkanswer() 
  showAnswerWithClick() 
};

function check1(){
  userAnswer.push(choice1[i])
  ClickAndCheck() 
};
 
 function check2(){
  userAnswer.push(choice2[i])
  StopTiming1()
  ClickAndCheck() 
};

 function check3(){
  userAnswer.push(choice3[i])
  ClickAndCheck() 
};

function check4(){
  userAnswer.push(choice4[i])
  ClickAndCheck() 
};

//Time Stopper
function StopTiming1() {
  clearTimeout(int1);
};
function StopTiming2() {
  clearTimeout(int2);
};

//Back end, to check answer and keep score
function checkanswer(){
  if(answer[i]===userAnswer[i]){
    correct++;
    }
  else if(answer[i]!==userAnswer[i]){
    incorrect++;
    }
};

  







