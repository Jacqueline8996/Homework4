//getting elements //
var startEl = document.querySelector("#start-button");
var viewScoreEL = document.querySelector(".highscore");
var timerEL = document.querySelector(".time");
var mainQuestEl = document.querySelector(".quizQuest");
var questtionEl = document.querySelector(".questions");
var buttonEl = document.querySelector("#choice");
var startDisEl = document.querySelector("#startWindow");
var choicesEl = document.querySelector(".choices");
var responseEl = document.querySelector(".response");
var rowScores = document.querySelector(".userInfoRow");
var highscoreTable = document.querySelector("HighscoreTable");
var highscoreRow = document.querySelector("userInfoRow");
var userInputEl = document.querySelector("#initalPrompt");
var classintro = document.querySelector("#classUser");
var doneTitle = document.querySelector(".Done");
var nameTitle = document.querySelector(".name");
var submitEl = document.querySelector("#enter");
var scoreDisplayEl = document.querySelector(".scoreDisp");
var sec = 50;
var zero = 0;
var count = 0;
var questionCount = 0;
var quizTaker = [];
//remove object
var quizDone = false;
var quizObj = [
    {
        Questions:"what is the purpose of bootstrap?",
        Answer1:"template to build website",
        Answer2:"fancy boots",
        Answer3:"items",
        Answer4:"documents",
        correct:"template to build website"
    },
    {
        Questions:"What is an array?",
        Answer1:"a boquet of flowers",
        Answer2:"code",
        Answer3:"a list",
        Answer4:"a object",
        correct:"a list",
    },
    {
        Questions:"Which languages do not use semi-colons to end code?",
        Answer1:"c++",
        Answer2:"python",
        Answer3:"javascript",
        Answer4:"java",
        correct:"python"
    },
    {
        Questions:"What version of HTML are we on?",
        Answer1:"HTML4",
        Answer2:"HTML5",
        Answer3:"HTML7",
        Answer4:"HTML6",
        correct:"HTML6"
    },


];

  
//timer for quiz
function startTimer(){
    //start the counting in miliseconds
    var timer = setInterval(function(){
        //add this to HTML
        timerEL.innerHTML='Time:'+ sec
        sec--;
    
        if (sec < 0 ) {

            // timer = 0;
            // var stop = "stop"
            // responseEl.style.visibility = "hidden";
            // timerEL.innerHTML = " ";
            endQuiz(0);
            // timerEL.innerHTML = " ";
            // timerEL.innerHTML='Time:'+ zero
            clearInterval(timer);
            
        }
       
    }, 1000);


    // userInputEl.style.visibility = "vissible";
};

function Userdisplay(myScore){

    console.log("myscore is ", myScore);
    // name = nameTitle
    scoreDisplayEl.innerHTML = "Your Score is : " + myScore ;
    submitEl.addEventListener("click",saveData(myScore));

    classintro.style.visibility = "visible";
    // var names =nameTitle.innerHTML
    // console.log("my name is ", names);

    // var UserDiv = document.querySelectorAll("#startWindow").createElement("<div>")




}
function saveData(myscore){

    console.log("what name ", name);
    var names = nameTitle.value;
    console.log("my name is ", names);
    quizTaker.push(names);
    var pastHighScore = quizTaker;
    localStorage.setItem("names", JSON.stringify(pastHighScore));
    localStorage.setItem("score", JSON.stringify(myscore));
    
}
function displaySave(){

    let saveCities = JSON.parse(localStorage.getItem("names"));
    // var lastCityIndex = saveCities.length - 1

    // if (saveCities != null && saveCities.length > 0){

    //     var lastCityIndex = saveCities.length - 1
    //     for (i4 = 0; i4 < saveCities.length ; i4++){
    //      searchHistory(saveCities[i4])
    //     }
    //     displaydaily(saveCities[lastCityIndex]);

    // }else{
    //     clearcity = [];
    //     localStorage.setItem("cities", JSON.stringify(clearcity));
    // }
}

function endQuiz(myScore){

    mainQuestEl.innerHTML = "";
    // Userdisplay(myScore);

    if(myScore != "stop"){

        // timerEL.innerHTML = " ";
        // document.querySelector(".time").innerHTML = "";
        console.log("i cleared my timer")
        Userdisplay(myScore);
        

    }else{

        Userdisplay(myScore);

    }


}

//function to display highscore
function highscoreDis(){
    console.log("i am in highscoreDis")
    scr = "highscore.html"
    
};

//determins if the answer is right or wrong
function rightWrong(choice){
 
    document.querySelector(".response").innerHTML = "";
    console.log("in right or wrong to check choice", choice);
    var result = document.createElement("div");

    if (choice === quizObj[questionCount]["correct"]){
        // var result = document.createElement("div");
        result.innerHTML = "Right choice"
        responseEl.appendChild(result);
        responseEl.style.visibility = "visible";
        // clickedButton = true;
        score = sec
       
    }
    else{
        var result = document.createElement("div");
        result.innerHTML = "Wrong choice"
        responseEl.appendChild(result);
        responseEl.style.visibility = "visible";
        sec = sec - 10;
        score = sec
    }

    userInputEl.style.visibility = "visible";
    var userName = document.querySelector(".name")
    console.log("my name is ", userName);
    emptyQuest();
    
    
};

function getValue (){

   
    var userClick = event.target.innerHTML;
    console.log("yourchoice is ", userClick);
    rightWrong(userClick);
    clickedButton = true;
    console.log("did you cick if", clickedButton);
    questionCount ++;
    goThroughOb(questionCount);
};

//empty  the page
//button with objet
function objButton(counter){
    

    ansNum = 1;


    while (ansNum <= 4){
        var option = document.createElement("button");
        option.setAttribute("class","button");
        option.setAttribute("id","choiceBtn");
        option.innerHTML = quizObj[counter]["Answer" + ansNum];
        choicesEl.appendChild(option);
        console.log("options", option.innerHTML);
        option.addEventListener("click",getValue);
        quizDone = false;
        ansNum ++;

    }
   

}

///Go through the oject 
function goThroughOb(counter){

    if (counter < quizObj.length){
        

        console.log("what is my number",counter);
        var myQuestion = quizObj[counter]["Questions"];
        console.log(quizObj[counter]["Questions"]);
        displayQuestion(myQuestion);
        objButton(counter);
        

    }else{
        var smallSec = timerEL.innerHTML.split(":");
        var scoreCount = smallSec[1];
        console.log("my quiz has ended",counter)
        endQuiz(scoreCount);


    }
   
    
}

//display name 
function displayNameAdd(){
    var nameTitle = document.createElement("h2");
    nameTitle.setAttribute("class","allTitle");
    nameTitle.innerHTML = "All Done!"
    mainQuestEl.appendChild(nameTitle);
    var nameInstr = document.createElement("p");
    nameInstr.setAttribute("class","instruction");
    nameInstr.innerHTML = "Your Final Score is " + "score";
    mainQuestEl.appendChild(nameInstr);
    var userName = document.createElement("input");
    nameInstr.setAttribute("class","instruction");
    nameTitle.innerHTML = document.createElement("input");
    mainQuestEl.appendChild(nameTitle);

}

//displays the questions which goes throught the object
function displayQuestion(question){
    var Questprompt = document.createElement("h2");
    Questprompt.setAttribute("class","questionsAsk");
    Questprompt.innerHTML = question;
    questtionEl.appendChild(Questprompt);
};

//empty divs in order to start fresh
function emptyQuest(){
    document.querySelector(".questions").innerHTML = "";
    document.querySelector(".choices").innerHTML = "";
};

//starts display by removing old displat and starting new quiz
function quizStart(){
    startTimer();
    startDisEl.style.visibility = "hidden";
    questtionEl.style.visibility = "visible";
};

//starts the game 
function startgame(){
   
    quizStart(); 
    goThroughOb(questionCount);

};

function main(){

    classintro.style.visibility = "hidden";
    startEl.addEventListener("click",startgame);

}

main();
