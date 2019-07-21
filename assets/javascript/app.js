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
    question:"QQQQQQQQQQ?",
    answers:["aa", "aa", "aa", "ca"],
    correctAnswer: "ca"
},{
    question:"QQQQQQQQQQ?",
    answers:["aa", "aa", "aa", "ca"],
    correctAnswer: "ca"
},{
    question:"QQQQQQQQQQ?",
    answers:["aa", "aa", "aa", "ca"],
    correctAnswer: "ca"
},{
    question:"QQQQQQQQQQ?",
    answers:["aa", "aa", "aa", "ca"],
    correctAnswer: "ca"
},{
    question:"QQQQQQQQQQ?",
    answers:["aa", "aa", "aa", "ca"],
    correctAnswer: "ca"
},{
    question:"QQQQQQQQQQ?",
    answers:["aa", "aa", "aa", "ca"],
    correctAnswer: "ca"
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
        })
    }
}