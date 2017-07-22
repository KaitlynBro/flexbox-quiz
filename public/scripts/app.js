(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

// Writing this so Cloud9 stops thinking $ is a mistake
/* global $ */

//grab HTML elements and store them in variables
var quizContainer = document.getElementById('quizContainer');
var quizQuestions = document.getElementById('quizQuestion');
var quizAnswers = document.getElementById('quizAnswer');
var submitButton = document.getElementById('submit');
var resultsContainer = document.getElementById('results');
var studyGuide = document.getElementById('flexboxStudy');

//give short description of what this web app is about
document.getElementById('websiteInfo').append('A fun quiz to test your knowledge on Flexbox!');

//create quiz dynamically to be displayed as soon as page loads

var myQuiz = [{
	question: 'Question 1: How do you access Flexbox properties?',
	answers: {
		a: 'display: flex',
		b: 'display: flexbox',
		c: 'display: inline-flex'
	},
	correctAnswer: 'answer a'
}, {
	question: 'Question 2: What element do you target Flexbox on to?',
	answers: {
		a: 'The parent element',
		b: 'Children elements',
		c: 'Doesn\'t matter'
	},
	correctAnswer: 'answer a'
}, {
	question: 'Question 3: How do you specify how flex items are laid out in the container?',
	answers: {
		a: 'justify content',
		b: 'flex-direction',
		c: 'align-items'
	},
	correctAnswer: 'answer b'
}, {
	question: 'Question 4: What flex property causes flex items to be laid out on multiple lines rather than just one?',
	answers: {
		a: 'flex-wrap',
		b: 'flex-flow',
		c: 'flex-basis'
	},
	correctAnswer: 'answer a'
}, {
	question: 'Question 5: How can you center your flex items along the main axis?',
	answers: {
		a: 'align-self',
		b: 'align-items',
		c: 'justify-content'
	},
	correctAnswer: 'answer c'
}, {
	question: 'Question 6: How can you cause a flex item to grow in size?',
	answers: {
		a: 'flex-grow',
		b: 'There is no way to do this with Flexbox',
		c: 'flex-size'
	},
	correctAnswer: 'answer a'
}, {
	question: 'Question 7: What Flexbox property changes the order of the flex items?',
	answers: {
		a: 'flex-order',
		b: 'order',
		c: 'flex-change'
	},
	correctAnswer: 'answer b'
}, {
	question: 'Question 8: What Flexbox property do you use to move a flex item to the end of its container?',
	answers: {
		a: 'flex-grow: 1',
		b: 'justify-content: flex-end',
		c: 'flex-direction: row-reverse'
	},
	correctAnswer: 'answer b'
}, {
	question: 'Question 9: How do you center flex items and give them space between each item at the same time?',
	answers: {
		a: 'justify-content: space-around',
		b: 'align-items: center;',
		c: 'justify-content: space-between'
	},
	correctAnswer: 'answer c'
}, {
	question: 'Question 10: What property forces flex items to be displayed at the baseline of their container?',
	answers: {
		a: 'align-items: flex-start',
		b: 'justify-content: flex-end',
		c: 'align-items: flex-end'
	},
	correctAnswer: 'answer c'
}];

$.each(myQuiz, function (key, questionObject) {
	//create the question container for each question
	var questionContainer = $("<div class='question-container'>");
	//throw the question in an h2 and put it in the container
	questionContainer.append('<h4 class="question">' + questionObject.question + '</h4>');

	//create the answers container to put all of the answers in
	var answersContainer = $("<div class='answers'></div>");
	//loop over each answer for this question, and create an input tag and put it in the answers container
	$.each(questionObject.answers, function (key, answer) {
		//the type of input is radio and the name is the question itself
		//this prevents multiple inputs for a question from being selected
		answersContainer.append('<input type=\'radio\' name="' + questionObject.question + '" value="' + answer + '" class="answer">' + key + ': ' + answer + '</input>');
	});

	//put the answers into the question container
	questionContainer.append(answersContainer);

	//append it all onto the quiz container
	$('#quizContainer').append(questionContainer);
});

//check each input's value against the correct value
$('#quiz-form').on('submit', function (e) {
	e.preventDefault();

	var $this = $(this);

	var $questions = $(this).find('.question-container');

	// Loop over each question container
	$.each($questions, function (index, questionContainer) {
		var $questionContainer = $(questionContainer);
		// Get the question text
		var question = $questionContainer.find('h4.question').text();
		// Get the questionObject from myQuiz
		var questionObject = myQuiz.filter(function (questionObject) {
			return questionObject.question === question;
		});
		// Get the correct answer from the questionObject
		var correctAnswer = questionObject[0].correctAnswer;
		// Get the user selected answer
		var answer = $questionContainer.find('input:checked').val();

		// Compare them if they are correct
		// Do something with right answer
		if (answer === correctAnswer) {

			$('.myResults').append('<li>Correct ' + question + '</li>');
			$('.myResults').css('border', '30px solid #008dd5');
		} else {
			// Do something with wrong answer
			$('.myResults').css('border', '30px solid #008dd5');
			$('.myResults').append('<li>Incorrect ' + question + '</li>');
			$('.myResults').append('the correct answer is ' + questionObject[0].correctAnswer);
		}
	});
});

//give user option to refresh page to re-take quiz
$('#refreshButton').on('click', function () {
	location.href = location.href;
});

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBO0FBQ0E7O0FBRUE7QUFDQSxJQUFNLGdCQUFnQixTQUFTLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBdEI7QUFDQSxJQUFNLGdCQUFnQixTQUFTLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBdEI7QUFDQSxJQUFNLGNBQWMsU0FBUyxjQUFULENBQXdCLFlBQXhCLENBQXBCO0FBQ0EsSUFBTSxlQUFlLFNBQVMsY0FBVCxDQUF3QixRQUF4QixDQUFyQjtBQUNBLElBQU0sbUJBQW1CLFNBQVMsY0FBVCxDQUF3QixTQUF4QixDQUF6QjtBQUNBLElBQU0sYUFBYSxTQUFTLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBbkI7O0FBRUE7QUFDQSxTQUFTLGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUMsTUFBdkMsQ0FBOEMsK0NBQTlDOztBQUVBOztBQUVBLElBQU0sU0FBUyxDQUNkO0FBQ0MsV0FBVSxtREFEWDtBQUVDLFVBQVM7QUFDUixLQUFHLGVBREs7QUFFUixLQUFHLGtCQUZLO0FBR1IsS0FBRztBQUhLLEVBRlY7QUFPQyxnQkFBZTtBQVBoQixDQURjLEVBVWQ7QUFDQyxXQUFVLHVEQURYO0FBRUMsVUFBUztBQUNSLEtBQUcsb0JBREs7QUFFUixLQUFHLG1CQUZLO0FBR1IsS0FBRztBQUhLLEVBRlY7QUFPQyxnQkFBZTtBQVBoQixDQVZjLEVBbUJkO0FBQ0MsV0FBVSw4RUFEWDtBQUVDLFVBQVM7QUFDUixLQUFHLGlCQURLO0FBRVIsS0FBRyxnQkFGSztBQUdSLEtBQUc7QUFISyxFQUZWO0FBT0MsZ0JBQWU7QUFQaEIsQ0FuQmMsRUE0QmQ7QUFDQyxXQUFVLHlHQURYO0FBRUMsVUFBUztBQUNSLEtBQUcsV0FESztBQUVSLEtBQUcsV0FGSztBQUdSLEtBQUc7QUFISyxFQUZWO0FBT0MsZ0JBQWU7QUFQaEIsQ0E1QmMsRUFx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QXBCLEVBQThCLG9CQUE5QjtBQUNBLEtBQUUsWUFBRixFQUFnQixNQUFoQixvQkFBd0MsUUFBeEM7QUFDQSxLQUFFLFlBQUYsRUFBZ0IsTUFBaEIsNEJBQWdELGVBQWUsQ0FBZixFQUFrQixhQUFsRTtBQUNBO0FBQ0QsRUExQkQ7QUEyQkEsQ0FwQ0Q7O0FBdUNBO0FBQ0EsRUFBRSxnQkFBRixFQUFvQixFQUFwQixDQUF1QixPQUF2QixFQUFnQyxZQUFVO0FBQ3pDLFVBQVMsSUFBVCxHQUFnQixTQUFTLElBQXpCO0FBQ0EsQ0FGRCIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCIvLyBXcml0aW5nIHRoaXMgc28gQ2xvdWQ5IHN0b3BzIHRoaW5raW5nICQgaXMgYSBtaXN0YWtlXG4vKiBnbG9iYWwgJCAqL1xuXG4vL2dyYWIgSFRNTCBlbGVtZW50cyBhbmQgc3RvcmUgdGhlbSBpbiB2YXJpYWJsZXNcbmNvbnN0IHF1aXpDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpekNvbnRhaW5lcicpO1xuY29uc3QgcXVpelF1ZXN0aW9ucyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWl6UXVlc3Rpb24nKVxuY29uc3QgcXVpekFuc3dlcnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpekFuc3dlcicpXG5jb25zdCBzdWJtaXRCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3VibWl0Jyk7XG5jb25zdCByZXN1bHRzQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Jlc3VsdHMnKTtcbmNvbnN0IHN0dWR5R3VpZGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZmxleGJveFN0dWR5Jyk7XG5cbi8vZ2l2ZSBzaG9ydCBkZXNjcmlwdGlvbiBvZiB3aGF0IHRoaXMgd2ViIGFwcCBpcyBhYm91dFxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3dlYnNpdGVJbmZvJykuYXBwZW5kKCdBIGZ1biBxdWl6IHRvIHRlc3QgeW91ciBrbm93bGVkZ2Ugb24gRmxleGJveCEnKTtcblxuLy9jcmVhdGUgcXVpeiBkeW5hbWljYWxseSB0byBiZSBkaXNwbGF5ZWQgYXMgc29vbiBhcyBwYWdlIGxvYWRzXG5cbmNvbnN0IG15UXVpeiA9IFtcblx0e1xuXHRcdHF1ZXN0aW9uOiAnUXVlc3Rpb24gMTogSG93IGRvIHlvdSBhY2Nlc3MgRmxleGJveCBwcm9wZXJ0aWVzPycsXG5cdFx0YW5zd2Vyczoge1xuXHRcdFx0YTogJ2Rpc3BsYXk6IGZsZXgnLFxuXHRcdFx0YjogJ2Rpc3BsYXk6IGZsZXhib3gnLFxuXHRcdFx0YzogJ2Rpc3BsYXk6IGlubGluZS1mbGV4J1xuXHRcdH0sXG5cdFx0Y29ycmVjdEFuc3dlcjogJ2Fuc3dlciBhJ1xuXHR9LFxuXHR7XG5cdFx0cXVlc3Rpb246ICdRdWVzdGlvbiAyOiBXaGF0IGVsZW1lbnQgZG8geW91IHRhcmdldCBGbGV4Ym94IG9uIHRvPycsXG5cdFx0YW5zd2Vyczoge1xuXHRcdFx0YTogJ1RoZSBwYXJlbnQgZWxlbWVudCcsXG5cdFx0XHRiOiAnQ2hpbGRyZW4gZWxlbWVudHMnLFxuXHRcdFx0YzogJ0RvZXNuXFwndCBtYXR0ZXInXG5cdFx0fSxcblx0XHRjb3JyZWN0QW5zd2VyOiAnYW5zd2VyIGEnXG5cdH0sXG5cdHtcblx0XHRxdWVzdGlvbjogJ1F1ZXN0aW9uIDM6IEhvdyBkbyB5b3Ugc3BlY2lmeSBob3cgZmxleCBpdGVtcyBhcmUgbGFpZCBvdXQgaW4gdGhlIGNvbnRhaW5lcj8nLFxuXHRcdGFuc3dlcnM6IHtcblx0XHRcdGE6ICdqdXN0aWZ5IGNvbnRlbnQnLFxuXHRcdFx0YjogJ2ZsZXgtZGlyZWN0aW9uJyxcblx0XHRcdGM6ICdhbGlnbi1pdGVtcydcblx0XHR9LFxuXHRcdGNvcnJlY3RBbnN3ZXI6ICdhbnN3ZXIgYidcblx0fSxcblx0e1xuXHRcdHF1ZXN0aW9uOiAnUXVlc3Rpb24gNDogV2hhdCBmbGV4IHByb3BlcnR5IGNhdXNlcyBmbGV4IGl0ZW1zIHRvIGJlIGxhaWQgb3V0IG9uIG11bHRpcGxlIGxpbmVzIHJhdGhlciB0aGFuIGp1c3Qgb25lPycsXG5cdFx0YW5zd2Vyczoge1xuXHRcdFx0YTogJ2ZsZXgtd3JhcCcsXG5cdFx0XHRiOiAnZmxleC1mbG93Jyxcblx0XHRcdGM6ICdmbGV4LWJhc2lzJ1xuXHRcdH0sXG5cdFx0Y29ycmVjdEFuc3dlcjogJ2Fuc3dlciBhJ1xuXHR9LFxuXHR7XG5cdFx0cXVlc3Rpb246ICdRdWVzdGlvbiA1OiBIb3cgY2FuIHlvdSBjZW50ZXIgeW91ciBmbGV4IGl0ZW1zIGFsb25nIHRoZSBtYWluIGF4aXM/Jyxcblx0XHRhbnN3ZXJzOiB7XG5cdFx0XHRhOiAnYWxpZ24tc2VsZicsXG5cdFx0XHRiOiAnYWxpZ24taXRlbXMnLFxuXHRcdFx0YzogJ2p1c3RpZnktY29udGVudCdcblx0XHR9LFxuXHRcdGNvcnJlY3RBbnN3ZXI6ICdhbnN3ZXIgYydcblx0fSxcblx0e1xuXHRcdHF1ZXN0aW9uOiAnUXVlc3Rpb24gNjogSG93IGNhbiB5b3UgY2F1c2UgYSBmbGV4IGl0ZW0gdG8gZ3JvdyBpbiBzaXplPycsXG5cdFx0YW5zd2Vyczoge1xuXHRcdFx0YTogJ2ZsZXgtZ3JvdycsXG5cdFx0XHRiOiAnVGhlcmUgaXMgbm8gd2F5IHRvIGRvIHRoaXMgd2l0aCBGbGV4Ym94Jyxcblx0XHRcdGM6ICdmbGV4LXNpemUnXG5cdFx0fSxcblx0XHRjb3JyZWN0QW5zd2VyOiAnYW5zd2VyIGEnXG5cdH0sXG5cdHtcblx0XHRxdWVzdGlvbjogJ1F1ZXN0aW9uIDc6IFdoYXQgRmxleGJveCBwcm9wZXJ0eSBjaGFuZ2VzIHRoZSBvcmRlciBvZiB0aGUgZmxleCBpdGVtcz8nLFxuXHRcdGFuc3dlcnM6IHtcblx0XHRcdGE6ICdmbGV4LW9yZGVyJyxcblx0XHRcdGI6ICdvcmRlcicsXG5cdFx0XHRjOiAnZmxleC1jaGFuZ2UnXG5cdFx0fSxcblx0XHRjb3JyZWN0QW5zd2VyOiAnYW5zd2VyIGInXG5cdH0sXG5cdHtcblx0XHRxdWVzdGlvbjogJ1F1ZXN0aW9uIDg6IFdoYXQgRmxleGJveCBwcm9wZXJ0eSBkbyB5b3UgdXNlIHRvIG1vdmUgYSBmbGV4IGl0ZW0gdG8gdGhlIGVuZCBvZiBpdHMgY29udGFpbmVyPycsXG5cdFx0YW5zd2Vyczoge1xuXHRcdFx0YTogJ2ZsZXgtZ3JvdzogMScsXG5cdFx0XHRiOiAnanVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCcsXG5cdFx0XHRjOiAnZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlJ1xuXHRcdH0sXG5cdFx0Y29ycmVjdEFuc3dlcjogJ2Fuc3dlciBiJ1xuXHR9LFxuXHR7XG5cdFx0cXVlc3Rpb246ICdRdWVzdGlvbiA5OiBIb3cgZG8geW91IGNlbnRlciBmbGV4IGl0ZW1zIGFuZCBnaXZlIHRoZW0gc3BhY2UgYmV0d2VlbiBlYWNoIGl0ZW0gYXQgdGhlIHNhbWUgdGltZT8nLFxuXHRcdGFuc3dlcnM6IHtcblx0XHRcdGE6ICdqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCcsXG5cdFx0XHRiOiAnYWxpZ24taXRlbXM6IGNlbnRlcjsnLFxuXHRcdFx0YzogJ2p1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbidcblx0XHR9LFxuXHRcdGNvcnJlY3RBbnN3ZXI6ICdhbnN3ZXIgYydcblx0fSxcblx0e1xuXHRcdHF1ZXN0aW9uOiAnUXVlc3Rpb24gMTA6IFdoYXQgcHJvcGVydHkgZm9yY2VzIGZsZXggaXRlbXMgdG8gYmUgZGlzcGxheWVkIGF0IHRoZSBiYXNlbGluZSBvZiB0aGVpciBjb250YWluZXI/Jyxcblx0XHRhbnN3ZXJzOiB7XG5cdFx0XHRhOiAnYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQnLFxuXHRcdFx0YjogJ2p1c3RpZnktY29udGVudDogZmxleC1lbmQnLFxuXHRcdFx0YzogJ2FsaWduLWl0ZW1zOiBmbGV4LWVuZCdcblx0XHR9LFxuXHRcdGNvcnJlY3RBbnN3ZXI6ICdhbnN3ZXIgYydcblx0fVxuXVxuXG5cbiQuZWFjaChteVF1aXosIGZ1bmN0aW9uKGtleSwgcXVlc3Rpb25PYmplY3QpIHtcblx0Ly9jcmVhdGUgdGhlIHF1ZXN0aW9uIGNvbnRhaW5lciBmb3IgZWFjaCBxdWVzdGlvblxuXHRsZXQgcXVlc3Rpb25Db250YWluZXIgPSAkKFwiPGRpdiBjbGFzcz0ncXVlc3Rpb24tY29udGFpbmVyJz5cIik7XG5cdC8vdGhyb3cgdGhlIHF1ZXN0aW9uIGluIGFuIGgyIGFuZCBwdXQgaXQgaW4gdGhlIGNvbnRhaW5lclxuXHRxdWVzdGlvbkNvbnRhaW5lci5hcHBlbmQoYDxoNCBjbGFzcz1cInF1ZXN0aW9uXCI+JHtxdWVzdGlvbk9iamVjdC5xdWVzdGlvbn08L2g0PmApO1xuXG5cdC8vY3JlYXRlIHRoZSBhbnN3ZXJzIGNvbnRhaW5lciB0byBwdXQgYWxsIG9mIHRoZSBhbnN3ZXJzIGluXG5cdGNvbnN0IGFuc3dlcnNDb250YWluZXIgPSAkKFwiPGRpdiBjbGFzcz0nYW5zd2Vycyc+PC9kaXY+XCIpO1xuXHQvL2xvb3Agb3ZlciBlYWNoIGFuc3dlciBmb3IgdGhpcyBxdWVzdGlvbiwgYW5kIGNyZWF0ZSBhbiBpbnB1dCB0YWcgYW5kIHB1dCBpdCBpbiB0aGUgYW5zd2VycyBjb250YWluZXJcblx0JC5lYWNoKHF1ZXN0aW9uT2JqZWN0LmFuc3dlcnMsIGZ1bmN0aW9uKGtleSwgYW5zd2VyKSB7XG5cdFx0Ly90aGUgdHlwZSBvZiBpbnB1dCBpcyByYWRpbyBhbmQgdGhlIG5hbWUgaXMgdGhlIHF1ZXN0aW9uIGl0c2VsZlxuXHRcdFx0Ly90aGlzIHByZXZlbnRzIG11bHRpcGxlIGlucHV0cyBmb3IgYSBxdWVzdGlvbiBmcm9tIGJlaW5nIHNlbGVjdGVkXG5cdFx0YW5zd2Vyc0NvbnRhaW5lci5hcHBlbmQoYDxpbnB1dCB0eXBlPSdyYWRpbycgbmFtZT1cIiR7cXVlc3Rpb25PYmplY3QucXVlc3Rpb259XCIgdmFsdWU9XCIke2Fuc3dlcn1cIiBjbGFzcz1cImFuc3dlclwiPiR7a2V5fTogJHthbnN3ZXJ9PC9pbnB1dD5gKVxuXHR9KTtcblxuXHQvL3B1dCB0aGUgYW5zd2VycyBpbnRvIHRoZSBxdWVzdGlvbiBjb250YWluZXJcblx0cXVlc3Rpb25Db250YWluZXIuYXBwZW5kKGFuc3dlcnNDb250YWluZXIpO1xuXG5cdC8vYXBwZW5kIGl0IGFsbCBvbnRvIHRoZSBxdWl6IGNvbnRhaW5lclxuXHQkKCcjcXVpekNvbnRhaW5lcicpLmFwcGVuZChxdWVzdGlvbkNvbnRhaW5lcik7XG59KTtcblxuXG4vL2NoZWNrIGVhY2ggaW5wdXQncyB2YWx1ZSBhZ2FpbnN0IHRoZSBjb3JyZWN0IHZhbHVlXG4kKCcjcXVpei1mb3JtJykub24oJ3N1Ym1pdCcsIGZ1bmN0aW9uKGUpIHtcblx0ZS5wcmV2ZW50RGVmYXVsdCgpO1xuXHRcblx0bGV0ICR0aGlzID0gJCh0aGlzKVxuXHRcblx0bGV0ICRxdWVzdGlvbnMgPSAkKHRoaXMpLmZpbmQoJy5xdWVzdGlvbi1jb250YWluZXInKVxuXG5cdFxuXHQvLyBMb29wIG92ZXIgZWFjaCBxdWVzdGlvbiBjb250YWluZXJcblx0JC5lYWNoKCRxdWVzdGlvbnMsIGZ1bmN0aW9uIChpbmRleCwgcXVlc3Rpb25Db250YWluZXIpIHtcblx0XHRsZXQgJHF1ZXN0aW9uQ29udGFpbmVyID0gJChxdWVzdGlvbkNvbnRhaW5lcilcblx0XHQvLyBHZXQgdGhlIHF1ZXN0aW9uIHRleHRcblx0XHRsZXQgcXVlc3Rpb24gPSAkcXVlc3Rpb25Db250YWluZXIuZmluZCgnaDQucXVlc3Rpb24nKS50ZXh0KClcblx0XHQvLyBHZXQgdGhlIHF1ZXN0aW9uT2JqZWN0IGZyb20gbXlRdWl6XG5cdFx0bGV0IHF1ZXN0aW9uT2JqZWN0ID0gbXlRdWl6LmZpbHRlcihmdW5jdGlvbihxdWVzdGlvbk9iamVjdCkge1xuXHRcdFx0cmV0dXJuIHF1ZXN0aW9uT2JqZWN0LnF1ZXN0aW9uID09PSBxdWVzdGlvblxuXHRcdH0pXG5cdFx0Ly8gR2V0IHRoZSBjb3JyZWN0IGFuc3dlciBmcm9tIHRoZSBxdWVzdGlvbk9iamVjdFxuXHRcdGxldCBjb3JyZWN0QW5zd2VyID0gcXVlc3Rpb25PYmplY3RbMF0uY29ycmVjdEFuc3dlclxuXHRcdC8vIEdldCB0aGUgdXNlciBzZWxlY3RlZCBhbnN3ZXJcblx0XHRsZXQgYW5zd2VyID0gJHF1ZXN0aW9uQ29udGFpbmVyLmZpbmQoJ2lucHV0OmNoZWNrZWQnKS52YWwoKVxuXG5cblx0XHQvLyBDb21wYXJlIHRoZW0gaWYgdGhleSBhcmUgY29ycmVjdFxuXHRcdFx0Ly8gRG8gc29tZXRoaW5nIHdpdGggcmlnaHQgYW5zd2VyXG5cdFx0aWYgKGFuc3dlciA9PT0gY29ycmVjdEFuc3dlcikge1xuXHRcdFx0XG5cdFx0XHQkKCcubXlSZXN1bHRzJykuYXBwZW5kKGA8bGk+Q29ycmVjdCAke3F1ZXN0aW9ufTwvbGk+YCApXG5cdFx0XHQkKCcubXlSZXN1bHRzJykuY3NzKCdib3JkZXInLCAnMzBweCBzb2xpZCAjMDA4ZGQ1Jyk7XHRcdFxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBEbyBzb21ldGhpbmcgd2l0aCB3cm9uZyBhbnN3ZXJcblx0XHRcdCQoJy5teVJlc3VsdHMnKS5jc3MoJ2JvcmRlcicsICczMHB4IHNvbGlkICMwMDhkZDUnKTtcblx0XHRcdCQoJy5teVJlc3VsdHMnKS5hcHBlbmQoYDxsaT5JbmNvcnJlY3QgJHtxdWVzdGlvbn08L2xpPmAgKTtcblx0XHRcdCQoJy5teVJlc3VsdHMnKS5hcHBlbmQoYHRoZSBjb3JyZWN0IGFuc3dlciBpcyAke3F1ZXN0aW9uT2JqZWN0WzBdLmNvcnJlY3RBbnN3ZXJ9YCk7XG5cdFx0fVx0XHRcblx0fSk7XG59KTtcblxuXG4vL2dpdmUgdXNlciBvcHRpb24gdG8gcmVmcmVzaCBwYWdlIHRvIHJlLXRha2UgcXVpelxuJCgnI3JlZnJlc2hCdXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRsb2NhdGlvbi5ocmVmID0gbG9jYXRpb24uaHJlZjtcbn0pO1xuXG5cblxuXG4gXG4iXX0=
