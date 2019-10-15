
// selecting the DOM
const start = document.getElementById("#start");
const quiz = document.getElementById("#quiz");
const question = document.getElementById("#question");
const image = document.getElementById("#image");
const choiceA = document.getElementById("#A");
const choiceB = document.getElementById("#B");
const choiceC = document.getElementById("#C");
const choiceD = document.getElementById("#D");
const scoreDiv = document.getElementById("#score");

// Creating the questions

let questions = [{
    question: "Who was the villan in the original Friday the 13th?",
    imgSrc: "",
    choiceA: "Jason Voorhees",
    choiceB: "Pamela Voorhees",
    choiceC: "Elias Voorhees",
    choiceD: "Diana Kimble",
    correct: "B"
}, {
    question: "A Nightmare on Elm Street takes place where?",
    imgSrc: "",
    choiceA: "Springwood, Ohio",
    choiceB: "Cunningham County, New Jeresy",
    choiceC: "Dallas, tx",
    choiceD: "Springwood, California",
    correct: "A"
}, {
    question: "Who did Captin Elliot Spencer become?",
    imgSrc: "",
    choiceA: "Lawnmower Man",
    choiceB: "Tall man",
    choiceC: "Jigsaw",
    choiceD: "Pinhead",
    correct: "D"
}, {
    question: "How many Michael Myers Halloween movies are there?",
    imgSrc: "",
    choiceA: "8",
    choiceB: "10",
    choiceC: "9",
    choiceD: "4",
    correct: "9"
}, {
    question: "What is the name of the camp from Sleepaway Camp?",
    imgSrc: "",
    choiceA: "Camp Lickalotta",
    choiceB: "Camp Arawak",
    choiceC: "Camp Flabanabba",
    choiceD: "Jerryborre",
    correct: "B"
}, {
    question: "How many version of The Thing are there?",
    imgSrc: "",
    choiceA: "1",
    choiceB: "3",
    choiceC: "2",
    choiceD: "4",
    correct: "B"
}, {
    question: "What is This Object?",
    imgSrc: "",
    choiceA: "The Lament Configuration",
    choiceB: "A means to summon the Cenobites",
    choiceC: "Lemerchand Configuration",
    choiceD: "All of the Above",
    correct: "D"
}, {
    question: "Finish the quote: 'Agnes, its me--'",
    imgSrc: "",
    choiceA: "Billy",
    choiceB: "Timmy",
    choiceC: "Willy",
    choiceD: "Jimmy",
    correct: "A"
}];


const lastQuestion = questions.length - 1;
var runningQuestion = 0;
var time = 10;
var timer;
var score = 0;
var count = 0;
var missed = 0;

console.log(time);


function renderQuestion() {
    let q = questions[runningQuestion];


    $("#question").text(q.question);
    $("#image").append("<img src=" + q.imgSrc + ">");
    $("#A").text(q.choiceA);
    $("#B").text(q.choiceB);
    $("#C").text(q.choiceC);
    $("#D").text(q.choiceD);

};

$("#start").click(function () {
    $(this).hide();
    $("#quiz").css("display", "block");
    renderQuestion();
    // timer = setInterval(renderCounter, 1000);
});
timer = setInterval(renderCounter, 1000);

function renderCounter() {
    clearInterval(time);
    time--;
    $("#counter").html(time);
};

var rightAnswer = questions[runningQuestion].correct;

function checkAnswer(answer) {
    if (answer == rightAnswer) {
        score++;
        runningQuestion++;
        renderQuestion();
        renderCounter();
    }
    if (answer != rightAnswer || time === 0 || runningQuestion < lastQuestion) {
        missed++;
        runningQuestion++
        //clearInterval(time);
        renderQuestion();
        renderCounter();
    }
    if (runningQuestion === lastQuestion && time === 0) {
        clearInterval(timer);
        renderScore();
    };
};

//timer = setInterval(renderCounter, 1000);
//function renderCounter() {
//clearInterval(time);
//time--;
//$("#counter").html(time);

//if (time === 0) {

// time = 10;
//if (runningQuestion < lastQuestion) {
//    missed++;
//clearInterval(time);
//time = 10;
//    runningQuestion++;
//    renderQuestion();
//}
// if (runningQuestion == lastQuestion) {
//  missed++;

// };

//};

console.log(renderCounter());

//};


function correctAnswer() {
    $(checkAnswer).css("background-color", "green");
};

function wrongAnswer() {
    $(".choice").css("background-color", "red");
};

function renderScore() {
    $("#timer").css("display", "none");
    $("#scoreDiv").css("display", "block");
    $("#scoreDiv").html("<p> Right Answers:" + score + "</p>");
    $("#scoreDiv").append("<p>Wrong Answers:" + missed + "</p>");

};







