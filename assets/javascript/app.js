
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
    imgSrc: "assets/images/friday13Question1.jpg",
    choiceA: "Jason Voorhees",
    choiceB: "Pamela Voorhees",
    choiceC: "Elias Voorhees",
    choiceD: "Diana Kimble",
    correct: "B"
}, {
    question: "A Nightmare on Elm Street takes place where?",
    imgSrc: "assets/images/nightMareOnElmStQ2.jpg",
    choiceA: "Springwood, Ohio",
    choiceB: "Cunningham County, New Jeresy",
    choiceC: "Dallas, tx",
    choiceD: "Springwood, California",
    correct: "A"
}, {
    question: "Who did Captin Elliot Spencer become?",
    imgSrc: "assets/images/hellraiserQ3.jpg",
    choiceA: "Lawnmower Man",
    choiceB: "Tall man",
    choiceC: "Jigsaw",
    choiceD: "Pinhead",
    correct: "D"
}, {
    question: "How many Michael Myers Halloween movies are there?",
    imgSrc: "assets/images/HalloweenQ4.jpg",
    choiceA: "8",
    choiceB: "10",
    choiceC: "9",
    choiceD: "4",
    correct: "C"
}, {
    question: "What is the name of the camp from Sleepaway Camp?",
    imgSrc: "assets/images/sleepawayCampQ5.jpg",
    choiceA: "Camp Lickalotta",
    choiceB: "Camp Arawak",
    choiceC: "Camp Flabanabba",
    choiceD: "Jerryborre",
    correct: "B"
}, {
    question: "How many version of The Thing are there?",
    imgSrc: "assets/images/theThingQ6.jpg",
    choiceA: "1",
    choiceB: "3",
    choiceC: "2",
    choiceD: "4",
    correct: "B"
}, {
    question: "What is This Object?",
    imgSrc: "assets/images/hellraiserBoxQ7.jpg",
    choiceA: "The Lament Configuration",
    choiceB: "A means to summon the Cenobites",
    choiceC: "Lemerchand Configuration",
    choiceD: "All of the Above",
    correct: "D"
}, {
    question: "Finish the quote: 'Agnes, its me--'",
    imgSrc: "assets/images/blackChristmasQ8.jpg",
    choiceA: "Billy",
    choiceB: "Timmy",
    choiceC: "Willy",
    choiceD: "Jimmy",
    correct: "A"
}];


const lastQuestion = questions.length - 1;
var runningQuestion = 0;
var time = 10;
var timer = setInterval(renderCounter, 1000);
var score = 0;
var count = 0;
var missed = 0;


$("#start").click(function () {
    $(this).hide();
    $("#quiz").css("display", "block");
    renderQuestion();
});

function renderQuestion() {
    let q = questions[runningQuestion];
    clearInterval(timer);
    time = 11;
    timer = setInterval(renderCounter, 1000);

    $('#hint').attr("src", q.imgSrc);

    $("#question").text(q.question);
    // $("#image").append("<img src=" + q.imgSrc + ">");
    $("#A").text(q.choiceA);
    $("#B").text(q.choiceB);
    $("#C").text(q.choiceC);
    $("#D").text(q.choiceD);
};


function renderCounter() {
    time--;
    $("#counter").html(time);

    if (questions.length - 1 === runningQuestion && time === 0) {
        missed++;
        clearInterval(timer);
        renderScore();
    } else if (time === 0) {
        runningQuestion++;
        missed++;
        renderQuestion();
    };
};


function checkAnswer(answer) {

    var rightAnswer = questions[runningQuestion].correct;

    if (answer === rightAnswer) {
        score++;
    } else {
        missed++;
    }

    if (lastQuestion === runningQuestion) {
        clearInterval(timer);
        renderScore();
    } else {
        runningQuestion++
        renderQuestion();
        renderCounter();
    }

};




function renderScore() {
    $("#timer").css("display", "none");
    $("#scoreDiv").css("display", "block");
    $("#scoreDiv").html("<p> Right Answers:" + score + "</p>");
    $("#scoreDiv").append("<p>Wrong Answers:" + missed + "</p>");
    $("#reload").attr("class", "visible");

};







