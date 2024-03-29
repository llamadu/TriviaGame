$(document).ready(function () {
$('#start').on('click', function(){
   game.start();
});

$(document).on('click','#end', function(){
    game.done();
    
});

//Launchpad: What's more important, a couple of quadrillion dollars or your life?
//Scrooge: Is this a multiple-choice question?

// Array containing questions and their respective answers
var questions =[
    {
    question:"Who is the oldest?",
    answers:["Webby", "Dewey", "Louie", "Huey"],
    correctAnswer: "Huey"
},{
    question:"Who of the following is not a DuckTales villain?",
    answers:["Magica DeSpell", "Flintheart Glomgold", "Doofus Drake", "Ma Beagle"],
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
    answers:["Poe", "Midnight", "Heckle", "Jeckle"],
    correctAnswer: "Poe"
},{
    question:"How many episodes of the original DuckTales series were made?",
    answers:["75", "100", "125", "150"],
    correctAnswer: "100"
},{
    question:"Scrooge is named after a character created by which author?",
    answers:["Oscar Wilde", "Charles Dickens", "Mark Twain", "Henry Wadsworth Longfellow"],
    correctAnswer: "Charles Dickens"
    
}];

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter <= 0){
            console.log("Time is up!");
            game.done();
        }
    },
    start: function(){
        timer = setInterval(game.countdown,1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>');
        $('#start').remove();
        for(var i=0; i<questions.length;i++){
            $('#subwrapper').append('<h2>' +questions[i].question+'</h2');
            for (var j=0;j<questions[i].answers.length;j++){
                $("#subwrapper").append("<input type='radio' name ='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j]); 
            }
        }
        $('#subwrapper').append('<br><button id="end">Done!</button>');
    },
    done: function(){
        clearInterval(timer);
        game.counter = 0;
        $.each($('input[name="question-0"]:checked'),function(){
            if($(this).val()==questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-1"]:checked'),function(){
            if($(this).val()==questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-2"]:checked'),function(){
            if($(this).val()==questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-3"]:checked'),function(){
            if($(this).val()==questions[3].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-4"]:checked'),function(){
            if($(this).val()==questions[4].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-5"]:checked'),function(){
            if($(this).val()==questions[5].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-6"]:checked'),function(){
            if($(this).val()==questions[6].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-7"]:checked'),function(){
            if($(this).val()==questions[7].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-8"]:checked'),function(){
            if($(this).val()==questions[8].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-9"]:checked'),function(){
            if($(this).val()==questions[9].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        
        game.result();
    },
    result: function(){
        
        $('#subwrapper h2').remove();

        $('#subwrapper').html("<h2>Finished!</h2>");
        $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
        $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
        $('#subwrapper').append("<h3>Unanswered: "+(questions.length-(this.incorrect+this.correct))+"</h3>");
    }
};
});