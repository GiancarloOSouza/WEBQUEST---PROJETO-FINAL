var answers = {};

var question_one = document.getElementById("question-1")
var question_two = document.getElementById("question-2")
var question_three = document.getElementById("question-3")
var question_four = document.getElementById("question-4")
var question_five = document.getElementById("question-5")


// Alimentando o Objeto answers
function storeAnswers(question_number, event)
{
    if(event.target.type === 'radio')
    {
        console.log(event.target.value)
        answers['question' + question_number] = parseInt(event.target.value);
        console.log(answers);
    }
}

question_one.addEventListener('click', function(event)
{
    storeAnswers(1, event)
})
question_two.addEventListener('click', function(event)
{
    storeAnswers(2, event)
})
question_three.addEventListener('click', function(event)
{
    storeAnswers(3, event)
})
question_four.addEventListener('click', function(event)
{
    storeAnswers(4, event)
})

//////////////////////////////////////////////////////////

function totalScore()
{
    var total_score = 
    answers.question1 +
    answers.question2 +
    answers.question3 +
    answers.question4;
    
    return totalScore;
}

function getInfoBasedOnScored()
{
    if(totalScore() < 7)
    {
        var score_info = "Covid ta ai em, cuidado";
    }
    else if(totalScore() > 7)
    {
        var score_info = "Você é cuidadoso(a)";
    }

    return score_info;
}

var submit1 = document.getElementById('submit1')
var submit2 = document.getElementById('submit2')
var submit3 = document.getElementById('submit3')
var submit4 = document.getElementById('submit4')
//var submit5 = document.getElementById('submit5')

function nextQuestion(question_number)
{
    // Questão que vai sair, a questão que vai ser escondida para vir a proxima
    var current_question_number = question_number - 1;
    var question_number = question_number.toString();
    var current_question_number = current_question_number.toString();

    var el = document.getElementById('question-' + question_number);
    var el2 = document.getElementById("question-" + current_question_number);

    el.style.display = "block";
    el2.style.display = "none";
}

submit1.addEventListener('click', function()
{
    nextQuestion(2)
    growProgressBar('35%')
})
submit2.addEventListener('click', function()
{
    nextQuestion(3)
    growProgressBar('70%')
})
submit3.addEventListener('click', function()
{
    nextQuestion(4)
    growProgressBar('100%')
})
submit4.addEventListener('click', function()
{
    nextQuestion(5)
})

submit5.addEventListener('click', function()
{
    document.getElementById("printtotalscore").innerHTML = totalScore();
    document.getElementById("printscoreinfo").innerHTML = getInfoBasedOnScored();
})

function growProgressBar(percentage_width){
    var bar = document.getElementById("progress_bar")
    bar.style.width = percentage_width;
}
