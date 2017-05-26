function check() {

    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question5.value;
    var question7 = document.quiz.question5.value;
    var question8 = document.quiz.question5.value;

    var correctAnswers = 0;
    var incorrectAnswers = 0;

    if (question1 == "To be big") {
        correct++;

    } else {
        incorrect++;
    }

    if (question2 == "Zoltar") {
        correct++;
    } else {
        incorrect++;
    }


if (question3 == "MacMillan Toy Company") {
    correct++;

} else {
    incorrect++;
}

if (question4 == "Chopsticks") {
    correct++;
} else {
    incorrect++;
}


if (question5 == "Jump on a trampoline") {
    correct++;

} else {
    incorrect++;
}

if (question6 == "An electronic comic book") {
    correct++;

} else {
    incorrect++;
}

if (question7 == "He found a Zoltar machine and made a wish to be little again") {
    correct++;

} else {
    incorrect++;
}

if (question8 == "His girlfriend, Susan Lawrence") {
    correct++;

} else {
    incorrect++;
}



document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("number_correct").innerHTML = "Great job! You got  " + correct + " answers correct!";
document.getElementById("number_incorrect").innerHTML = "Uh oh! You got " + correct + " incorrect.";
}