$('#start').on('click', function(){
   $('#start').remove();
   game.loadQuestion();
})

$('document').on('click','.answer-button',function(e{
    game.clicked(e);
})

$(document).on('click','.#reset',function(){
    game.reset
})

var questions =[{
    question:"Who is the oldest?",
    answers:["Webby", "Dewey", "Louie", "Huey"],
    correctAnswer: "Huey"
},{
    question:"Who of the following is not a DuckTales villain?",
    answers:["Magica DeSpell", "Doofus Drake", "Flintheart Glomgold", "The Beagle Boys"],
    correctAnswer: "Doofus Drake"
},{
    question:"What is Webbigail's favorite toy?",
    answers:["A Rubber Ruck", "Quack-Along Duck", "A Quacky-Patch Doll", "Quacky Tailspin"],
    correctAnswer: "A Quacky-Patch Doll"
},{
    question:"Scrooge McDuck grew up in which city?",
    answers:["Edinburgh", "Dundee", "Glasgow", "Dublin"],
    correctAnswer: "Glasgow"
},{
    question:"What denomination is Scrooge's lucky coin?",
    answers:["Penny", "Nickel", "Dime", "Quarter"],
    correctAnswer: "Dime"
},{
    question:"How did Scrooge McDuck become wealthy?",
    answers:["Inheritance", "The Klondike Gold Rush", "Winning the Lottery", "Striking Oil"],
    correctAnswer: "The Klondike Gold Rush"
},{
    question:"What is Gryo Gearloose's profession?",
    answers:["Daredevil", "Inventor", "Stunt Man", "Racecar Driver"],
    correctAnswer: "Inventor"
},{
    question:"What is the Name of Magica De Spell's pet raven?",
    answers:["Midnight", "Poe", "Heckle", "Jeckle"],
    correctAnswer: "Poe"
},{
    question:"How many episodes of the original DuckTales series were made?",
    answers:["75", "100", "125", "150"],
    correctAnswer: "100"
},{
    question:"Scrooge is named after a charachter created by which author?",
    answers:["Oscar Wilde", "Charles Dickens", "Mark Twain", "Henry Wadsworth Longfellow"],
    correctAnswer: "Charles Dickens"
    
}];

//------
var game = {
    questions:questions,
    currentQuestion=0,
    counter:30,
    correct:0
    incorrect:0
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0){
            console.log("Time is up!");
            game.timeUp();

    },
    loadQuestions: function () {
        timer = setInterval(game.countdown,1000);
        $('#subwrapper').html('<h2>' +questions[game.currentQuestion].question+'</h2');
        for (var i=0;i<questions[game.currentQuestion].answers.length;i++){
            $("#subwrapper").append('<button class="answer-button" id="button-'+i+'" data-name="'+questions[game.currentQuestion].answers[i]+'">'questions[game.currentQuestion].answers[i]+'</button>')
        } 
    },
    nextQuestion: function () {
        
    },
    timeUp: function () {
        
    },
    results: function () {
        
    },
    clicked: function(e) {
        clearInterval(timer);
        if ($(e.target.data)("name")==questions[game.currentQuestion].correctAnswer){
            game.answeredCorrectly();
        }else{
                game.answeredIncorrectly();
            }
    },
    answeredCorrectly: function () {
        console.log("That's right!");
        
    },
    answeredIncorrectly: function () {
        console.log("incorrect");
    },
    reset: function () {
        
    }
    
};