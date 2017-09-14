
 var intervalId;
 var clockRunning =0;
 var timecount=10;

  window.onload = function() {
    $("#line2").html("Watch Out! Robots Invasion!")
	  $("#line3").html('<button type="button" id="startbutton" class="btn btn-success btn-block">Start</button>')
    $("#startbutton").click(startgame);
  };

  function startgame(){
    $("#line3").empty();	
    intervalId = setInterval(timeremaining, 1000);
    nextquestion();
  };
 
  function timeremaining(){
	  timecount--;
	  $('#line0').html('Time Remaining:'+'&nbsp;');
	  $('#line1').text('01:00')
	  var converted = timeConverter(timecount);
	  $('#line1').html(converted)
    if(timecount==0){
      noanswer++;
      timecount=10; 
      i++
      nextquestion();
      
    }
    
	};

  function timeConverter(timecount) {
    var minutes = Math.floor(timecount / 60);
    var seconds = timecount - (minutes * 60);
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    if (minutes === 0) {
      minutes = "00";
    }
    else if (minutes < 10) {
      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
  };
   
   function timereset(){
    timecount=10;
   }


   var question=["What's AI stand for ?","What decade did formal AI research begin?","Who created ASIMO?","What was the name of first AI film?","What was the name of first Robot land on Mars?"]
   var choice1=["Artificial Intelligence","1950s","TOYOTA","The Invisible Boy","Mars Pathfinder's Solo Rover"]
   var choice2=["American Idol","1960s","APPLE","Metropolis","Mars Pathfinder's Range Rover"]
   var choice3=["Adobe Illustrator","1970s","SAMSUNG","Alphaville","Mars Pathfinder's Sojourner Rover"]
   var choice4=["Automatic Indexing","1980s","HONDA","Westworld","Mars Pathfinder's Star Rover"]
   var answer=["Artificial Intelligence","1950s","HONDA","Metropolis","Mars Pathfinder's Sojourner Rover"]
   var useranswer=[]
   var i=0;
   var correct=0;
   var incorrect=0;
   var noanswer=0;

   

  function nextquestion(){
     
    $("#line2").html(question[i]);
    $("#line3").html('<button type="button" id="choice1" class="btn btn-primary btn-block">'+choice1[i])+'</button>';
    $("#line4").html('<button type="button" id="choice2" class="btn btn-primary btn-block">'+choice2[i])+'</button>';
    $("#line5").html('<button type="button" id="choice3" class="btn btn-primary btn-block">'+choice3[i])+'</button>';
    $("#line6").html('<button type="button" id="choice4" class="btn btn-primary btn-block">'+choice4[i])+'</button>';
    console.log(i)
    $("#choice1").click(check1);
    $("#choice2").click(check2);
    $("#choice3").click(check3);
    $("#choice4").click(check4);
    console.log(useranswer)
    console.log(answer[i])
    if(i==question.length){     //end page
      clearInterval(intervalId);
      $("#line0").empty();
      $("#line1").html("-GAME END!-");
      $("#line2").html("Correct: "+correct);
      $("#line3").html("Incorrect: "+incorrect);
      $("#line4").html("Noanswer: "+noanswer);
      $("#line5").html('<img src="assets/images/ending.gif" style="width:400px;height:200px">');
      $("#line6").empty();
  
    }
    

  };
    
   function check1(){
     useranswer.push(choice1[i])
     console.log(answer[i])
     console.log(useranswer[i])
     nextquestion()
     timereset()
     checkanswer()   
     
   }
    
    function check2(){
     useranswer.push(choice2[i])
     console.log(answer[i])
     console.log(useranswer[i])
     nextquestion()
     timereset()
     checkanswer()  
     
   }

    function check3(){
     useranswer.push(choice3[i])
     console.log(answer[i])
     console.log(useranswer[i])
     nextquestion()
     timereset()
     checkanswer()
   }

   function check4(){
     useranswer.push(choice4[i])
     console.log(answer[i])
     console.log(useranswer[i])
     nextquestion()
     timereset()
     checkanswer()
   }
    
   function checkanswer(){
    if(answer[i]===useranswer[i]){
      correct++;
      showanswer()
     
      }
    else if(answer[i]!==useranswer[i]){
      incorrect++;
      showanswer()
     
      }
      console.log(correct)
      console.log(incorrect)
   }

    

   function showanswer(){
     var pic=['<img src="assets/images/ai.gif" style="width:250px;height:150px">',
     '<img src="assets/images/research.gif" style="width:250px;height:150px">',
     '<img src="assets/images/asimo.gif" style="width:250px;height:150px">',
     '<img src="assets/images/metro.gif" style="width:250px;height:150px">',
     '<img src="assets/images/mars.gif" style="width:250px;height:150px">']
      
     
      $("#line0").empty();
      $("#line1").empty();
      $("#line2").html("Correct: "+correct);
      $("#line3").html("Incorrect: "+incorrect);
      $("#line4").html('Noanswer: '+noanswer);
      $("#line5").html("Correct Answer: "+answer[i]);
      $("#line6").html(pic[i]);
      noanswer--;
      
   }


  
  
    






