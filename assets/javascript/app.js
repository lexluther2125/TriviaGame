$(document).ready(function(){
// Variables created for correct answers, incorrect answers and unanswered questions
var correctAnswers = "";
var incorrectAnswers = "";
var unansweredQuestions = "";

// Object holding the game's questions and answers created below:
var game = {
	question1: {
		question: "In the movie 'Big', what did Josh Baskin wish for?",
		answers: [
		//The third answer is correct
			"To be tall enough to ride the roller coaster",
			"To date Cynthia Benson",
			"To be big",
			"To work at a job playing with toys"
		]		
	},
	question2: {
		question: "What was the name of the machine Josh made his wish on?",
		answers: [
		//The second answer is correct
			"Cleo",
			"Zoltar",
			"Gypsy",
			"Fortune"
		]		
	},
	question3: {
		question: "At what company does Josh get a job with in New York City?",
		answers: [
		//The second answer is correct
			"F.A.O. Schwarz",
			"MacMillan Toy Company",
			"KB Toys",
			"Toys R Us"
		]		
	},
	question4: {
		question: "Which of these songs does Josh and Mr. MacMillan play on the Walking Piano at F.A.O. Schwarz?",
		answers: [
		//The first answer is correct
			"Chopsticks",
			"Hot in the City",
			"Shimmy, Shimmy Cocoa Pop",
			"Forget Me Nots"
		]		
	},
	question5: {
		question: "After leaving the work party, what does Josh and his co-worker Susan do at his place?",
		answers: [
		//The first answer is correct
			"Jump on a trampoline",
			"Have a silly string fight",
			"Play GI-Joe: Commando Attack Game",
			"Throw darts"
		]		
	},
	question6: {
		question: "What toy do Susan and Josh collaborate on for MacMillan Toys?",
		answers: [
		//The second answer is correct
			"A Transformer for Girls",
			"An Electronic Comic Book",
			"A Squeezy Doll",
			"A Table Hockey Game"
		]		
	},
	question7: {
		question: "How did Josh become a kid again?",
		answers: [
		//The fourth answer is correct
			"The effects wore off when he went to sleep returning him to a kid again",
			"He visited a fortune teller who made him a potion to return him back to normal",
			"He woke up from a dream and realized he was still a kid",
			"He found a Zoltar machine and made a wish to be little again"
		]		
	},
	question8: {
		question: "Who took Josh home once he made his wish to be little again?",
		answers: [
		//The first answer is correct
			"His girlfriend, Susan Lawrence",
			"His best friend, Billy Kopecki",
			"His dream girl, Cynthia Benson",
			"His boss, Mr. MacMillan"
		]		
	},
}
// On click of start button, the button will become visible and the game board 
// displaying our question and answer combinations will appear
$("#start").click(function(){

	$("#start").addClass("invisible")
	$("#game-board").removeClass("invisible");


	// window.onload = function() {
	// setTimeout(thirtySeconds, 1000 * 30);
	// function thirtySeconds() {
	// 	$("#timer").append("<h2>Time's Up! </h2>");
	// }
});

// var countDown = {
// 	time: 30,
// 	start: function () {
// 		counter = setInterval(stopwatch.count, 1000);
// 	},
// 	}

// 	count: function () {
// 		stopwatch.time--;
// 	}

// 	var converted = stopwatch.timeConverter(stopwatch.time);
// 	$("#timer").html(converted);
// }

// 	stop: function() {
// 	clearInterval(counter);
// }

// var converted = stopwatch.timeConverter(stopwatch.time);
// 	$("#timer").html(converted);

// timeConverter: function(t){
// 	var minutes = Math.floor(t/60);
// 	var seconds = t -  (minutes * 60);
// 	if (seconds< 10){
// 		seconds = "0" + seconds;
// 	}
// }






	// setInterval(function(){
	// 	$("#timer").html("00:00");
	// }, 30000); 
// var countDownTime = new Date("00:30").getTime();
// var x = setInterval(function() {
// 	var now = new Date().getTime();
// 	var distance = countDownTime - now;

// var seconds = Math.floor((distance % (1000 * 60)) / 1000);
// document.getElementById("timer").innerHTML = seconds + "s ";

//  if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("timer").innerHTML = "Time's Up!";
//   }
// }, 30000);

// var numberOfQuestions = [1, 2, 3, 4, 5, 6, 7, 8];

// // var numberOfQuestions = ["question1", "question2", "question3", "question4", "question5", "question6", "question7", "question8"];

// 	for (var k = 0; k < numberOfQuestions; k++) {
// 		$('#question').html(game['question' + (k + 1)].question);

// 		for (var i = 0; i < game['question' + (k + 1)].answers.length; i++) {
// 			$('#answer' + (i+1)).html(game.question1.answers[i]);

// 		}	

// 	    }
	});
// });