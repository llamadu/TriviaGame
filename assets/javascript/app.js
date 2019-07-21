$('#start').on('click', function(){
   game.start();
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
    answers:["Inheritance", "The Klondike Gold Rush", "Winning Lottery", "Striking Oil"],
    correctAnswer: "The Klondike Gold Rush"
},{
    question:"Why it Gryo Gearloose's profession?",
    answers:["Daredevil", "Inventor", "Stunt Man", "Racecar Driver"],
    correctAnswer: "Inventor"
},{
    question:"What is the Name of Magica De Spell's pet Raven?",
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

var game = {
    correct: 0,
    incorrect: 0,
    counter: 120,
    countdown: function(){
        game.counter--;
        $('#counter').html(game.counter);
        if(game.counter<=0){
            console.log("Time is up!");
            game.done();
        }
    },
    start: function(){
        timer = setInterval(game.countdown,1000);
        $('#subwrapper').prepend('<h2>Time Remaining: <span id="counter">120</span> Seconds</h2>')
        $('#start').remove();
        for(var i=0; i<questions.length;i++){
            $('#subwrapper').append('<h2>' +questions[i].question+'</h2');
            for (var j=0;j<questions[i].answers.length;j++){
                $("#subwrapper").append("<input type='radio' name ='question-"+i+"' value='"+questions[i].answers[j]+"'>"+questions[i].answers[j])  
            }
        }
    },
    done: function(){
        $.each($('input[name="question-0]":checked'),function(){
            if($(this).val()==questions[0].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-1]":checked'),function(){
            if($(this).val()==questions[1].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-2]":checked'),function(){
            if($(this).val()==questions[2].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-3]":checked'),function(){
            if($(this).val()==questions[3].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-4]":checked'),function(){
            if($(this).val()==questions[4].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-5]":checked'),function(){
            if($(this).val()==questions[5].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-6]":checked'),function(){
            if($(this).val()==questions[6].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-7]":checked'),function(){
            if($(this).val()==questions[7].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-8]":checked'),function(){
            if($(this).val()==questions[8].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-9]":checked'),function(){
            if($(this).val()==questions[9].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-6]":checked'),function(){
            if($(this).val()==questions[6].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        $.each($('input[name="question-6]":checked'),function(){
            if($(this).val()==questions[6].correctAnswer){
                game.correct++;
            } else {
                game.incorrect++;
            }
        });
        this.result();
    },
    result: function(){
        clearInterval(timer);
        $('#subrwapper h2').remove();

        $('#subwrapper').html(<h2>Finished!</h2>)
        $('#subwrapper').append("<h3>Correct Answers: "+this.correct+"</h3>");
        $('#subwrapper').append("<h3>Incorrect Answers: "+this.incorrect+"</h3>");
    }
}