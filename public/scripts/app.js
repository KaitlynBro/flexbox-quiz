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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBO0FBQ0E7O0FBRUE7QUFDQSxJQUFNLGdCQUFnQixTQUFTLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBdEI7QUFDQSxJQUFNLGdCQUFnQixTQUFTLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBdEI7QUFDQSxJQUFNLGNBQWMsU0FBUyxjQUFULENBQXdCLFlBQXhCLENBQXBCO0FBQ0EsSUFBTSxlQUFlLFNBQVMsY0FBVCxDQUF3QixRQUF4QixDQUFyQjtBQUNBLElBQU0sbUJBQW1CLFNBQVMsY0FBVCxDQUF3QixTQUF4QixDQUF6QjtBQUNBLElBQU0sYUFBYSxTQUFTLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBbkI7O0FBRUE7QUFDQSxTQUFTLGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUMsTUFBdkMsQ0FBOEMsK0NBQTlDOztBQUVBOztBQUVBLElBQU0sU0FBUyxDQUNkO0FBQ0MsV0FBVSxtREFEWDtBQUVDLFVBQVM7QUFDUixLQUFHLGVBREs7QUFFUixLQUFHLGtCQUZLO0FBR1IsS0FBRztBQUhLLEVBRlY7QUFPQyxnQkFBZTtBQVBoQixDQURjLEVBVWQ7QUFDQyxXQUFVLHVEQURYO0FBRUMsVUFBUztBQUNSLEtBQUcsb0JBREs7QUFFUixLQUFHLG1CQUZLO0FBR1IsS0FBRztBQUhLLEVBRlY7QUFPQyxnQkFBZTtBQVBoQixDQVZjLEVBbUJkO0FBQ0MsV0FBVSw4RUFEWDtBQUVDLFVBQVM7QUFDUixLQUFHLGlCQURLO0FBRVIsS0FBRyxnQkFGSztBQUdSLEtBQUc7QUFISyxFQUZWO0FBT0MsZ0JBQWU7QUFQaEIsQ0FuQmMsRUE0QmQ7QUFDQyxXQUFVLHlHQURYO0FBRUMsVUFBUztBQUNSLEtBQUcsV0FESztBQUVSLEtBQUcsV0FGSztBQUdSLEtBQUc7QUFISyxFQUZWO0FBT0MsZ0JBQWU7QUFQaEIsQ0E1QmMsRUFx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cEIsRUFBOEIsb0JBQTlCO0FBQ0EsS0FBRSxZQUFGLEVBQWdCLE1BQWhCLG9CQUF3QyxRQUF4QztBQUNBLEtBQUUsWUFBRixFQUFnQixNQUFoQiw0QkFBZ0QsZUFBZSxDQUFmLEVBQWtCLGFBQWxFO0FBQ0E7QUFDRCxFQXpCRDtBQTBCQSxDQW5DRDs7QUFzQ0E7QUFDQSxFQUFFLGdCQUFGLEVBQW9CLEVBQXBCLENBQXVCLE9BQXZCLEVBQWdDLFlBQVU7QUFDekMsVUFBUyxJQUFULEdBQWdCLFNBQVMsSUFBekI7QUFDQSxDQUZEIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIi8vIFdyaXRpbmcgdGhpcyBzbyBDbG91ZDkgc3RvcHMgdGhpbmtpbmcgJCBpcyBhIG1pc3Rha2Vcbi8qIGdsb2JhbCAkICovXG5cbi8vZ3JhYiBIVE1MIGVsZW1lbnRzIGFuZCBzdG9yZSB0aGVtIGluIHZhcmlhYmxlc1xuY29uc3QgcXVpekNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWl6Q29udGFpbmVyJyk7XG5jb25zdCBxdWl6UXVlc3Rpb25zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1aXpRdWVzdGlvbicpXG5jb25zdCBxdWl6QW5zd2VycyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdxdWl6QW5zd2VyJylcbmNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdWJtaXQnKTtcbmNvbnN0IHJlc3VsdHNDb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0cycpO1xuY29uc3Qgc3R1ZHlHdWlkZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdmbGV4Ym94U3R1ZHknKTtcblxuLy9naXZlIHNob3J0IGRlc2NyaXB0aW9uIG9mIHdoYXQgdGhpcyB3ZWIgYXBwIGlzIGFib3V0XG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnd2Vic2l0ZUluZm8nKS5hcHBlbmQoJ0EgZnVuIHF1aXogdG8gdGVzdCB5b3VyIGtub3dsZWRnZSBvbiBGbGV4Ym94IScpO1xuXG4vL2NyZWF0ZSBxdWl6IGR5bmFtaWNhbGx5IHRvIGJlIGRpc3BsYXllZCBhcyBzb29uIGFzIHBhZ2UgbG9hZHNcblxuY29uc3QgbXlRdWl6ID0gW1xuXHR7XG5cdFx0cXVlc3Rpb246ICdRdWVzdGlvbiAxOiBIb3cgZG8geW91IGFjY2VzcyBGbGV4Ym94IHByb3BlcnRpZXM/Jyxcblx0XHRhbnN3ZXJzOiB7XG5cdFx0XHRhOiAnZGlzcGxheTogZmxleCcsXG5cdFx0XHRiOiAnZGlzcGxheTogZmxleGJveCcsXG5cdFx0XHRjOiAnZGlzcGxheTogaW5saW5lLWZsZXgnXG5cdFx0fSxcblx0XHRjb3JyZWN0QW5zd2VyOiAnYW5zd2VyIGEnXG5cdH0sXG5cdHtcblx0XHRxdWVzdGlvbjogJ1F1ZXN0aW9uIDI6IFdoYXQgZWxlbWVudCBkbyB5b3UgdGFyZ2V0IEZsZXhib3ggb24gdG8/Jyxcblx0XHRhbnN3ZXJzOiB7XG5cdFx0XHRhOiAnVGhlIHBhcmVudCBlbGVtZW50Jyxcblx0XHRcdGI6ICdDaGlsZHJlbiBlbGVtZW50cycsXG5cdFx0XHRjOiAnRG9lc25cXCd0IG1hdHRlcidcblx0XHR9LFxuXHRcdGNvcnJlY3RBbnN3ZXI6ICdhbnN3ZXIgYSdcblx0fSxcblx0e1xuXHRcdHF1ZXN0aW9uOiAnUXVlc3Rpb24gMzogSG93IGRvIHlvdSBzcGVjaWZ5IGhvdyBmbGV4IGl0ZW1zIGFyZSBsYWlkIG91dCBpbiB0aGUgY29udGFpbmVyPycsXG5cdFx0YW5zd2Vyczoge1xuXHRcdFx0YTogJ2p1c3RpZnkgY29udGVudCcsXG5cdFx0XHRiOiAnZmxleC1kaXJlY3Rpb24nLFxuXHRcdFx0YzogJ2FsaWduLWl0ZW1zJ1xuXHRcdH0sXG5cdFx0Y29ycmVjdEFuc3dlcjogJ2Fuc3dlciBiJ1xuXHR9LFxuXHR7XG5cdFx0cXVlc3Rpb246ICdRdWVzdGlvbiA0OiBXaGF0IGZsZXggcHJvcGVydHkgY2F1c2VzIGZsZXggaXRlbXMgdG8gYmUgbGFpZCBvdXQgb24gbXVsdGlwbGUgbGluZXMgcmF0aGVyIHRoYW4ganVzdCBvbmU/Jyxcblx0XHRhbnN3ZXJzOiB7XG5cdFx0XHRhOiAnZmxleC13cmFwJyxcblx0XHRcdGI6ICdmbGV4LWZsb3cnLFxuXHRcdFx0YzogJ2ZsZXgtYmFzaXMnXG5cdFx0fSxcblx0XHRjb3JyZWN0QW5zd2VyOiAnYW5zd2VyIGEnXG5cdH0sXG5cdHtcblx0XHRxdWVzdGlvbjogJ1F1ZXN0aW9uIDU6IEhvdyBjYW4geW91IGNlbnRlciB5b3VyIGZsZXggaXRlbXMgYWxvbmcgdGhlIG1haW4gYXhpcz8nLFxuXHRcdGFuc3dlcnM6IHtcblx0XHRcdGE6ICdhbGlnbi1zZWxmJyxcblx0XHRcdGI6ICdhbGlnbi1pdGVtcycsXG5cdFx0XHRjOiAnanVzdGlmeS1jb250ZW50J1xuXHRcdH0sXG5cdFx0Y29ycmVjdEFuc3dlcjogJ2Fuc3dlciBjJ1xuXHR9LFxuXHR7XG5cdFx0cXVlc3Rpb246ICdRdWVzdGlvbiA2OiBIb3cgY2FuIHlvdSBjYXVzZSBhIGZsZXggaXRlbSB0byBncm93IGluIHNpemU/Jyxcblx0XHRhbnN3ZXJzOiB7XG5cdFx0XHRhOiAnZmxleC1ncm93Jyxcblx0XHRcdGI6ICdUaGVyZSBpcyBubyB3YXkgdG8gZG8gdGhpcyB3aXRoIEZsZXhib3gnLFxuXHRcdFx0YzogJ2ZsZXgtc2l6ZSdcblx0XHR9LFxuXHRcdGNvcnJlY3RBbnN3ZXI6ICdhbnN3ZXIgYSdcblx0fSxcblx0e1xuXHRcdHF1ZXN0aW9uOiAnUXVlc3Rpb24gNzogV2hhdCBGbGV4Ym94IHByb3BlcnR5IGNoYW5nZXMgdGhlIG9yZGVyIG9mIHRoZSBmbGV4IGl0ZW1zPycsXG5cdFx0YW5zd2Vyczoge1xuXHRcdFx0YTogJ2ZsZXgtb3JkZXInLFxuXHRcdFx0YjogJ29yZGVyJyxcblx0XHRcdGM6ICdmbGV4LWNoYW5nZSdcblx0XHR9LFxuXHRcdGNvcnJlY3RBbnN3ZXI6ICdhbnN3ZXIgYidcblx0fSxcblx0e1xuXHRcdHF1ZXN0aW9uOiAnUXVlc3Rpb24gODogV2hhdCBGbGV4Ym94IHByb3BlcnR5IGRvIHlvdSB1c2UgdG8gbW92ZSBhIGZsZXggaXRlbSB0byB0aGUgZW5kIG9mIGl0cyBjb250YWluZXI/Jyxcblx0XHRhbnN3ZXJzOiB7XG5cdFx0XHRhOiAnZmxleC1ncm93OiAxJyxcblx0XHRcdGI6ICdqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kJyxcblx0XHRcdGM6ICdmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2UnXG5cdFx0fSxcblx0XHRjb3JyZWN0QW5zd2VyOiAnYW5zd2VyIGInXG5cdH0sXG5cdHtcblx0XHRxdWVzdGlvbjogJ1F1ZXN0aW9uIDk6IEhvdyBkbyB5b3UgY2VudGVyIGZsZXggaXRlbXMgYW5kIGdpdmUgdGhlbSBzcGFjZSBiZXR3ZWVuIGVhY2ggaXRlbSBhdCB0aGUgc2FtZSB0aW1lPycsXG5cdFx0YW5zd2Vyczoge1xuXHRcdFx0YTogJ2p1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kJyxcblx0XHRcdGI6ICdhbGlnbi1pdGVtczogY2VudGVyOycsXG5cdFx0XHRjOiAnanVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuJ1xuXHRcdH0sXG5cdFx0Y29ycmVjdEFuc3dlcjogJ2Fuc3dlciBjJ1xuXHR9LFxuXHR7XG5cdFx0cXVlc3Rpb246ICdRdWVzdGlvbiAxMDogV2hhdCBwcm9wZXJ0eSBmb3JjZXMgZmxleCBpdGVtcyB0byBiZSBkaXNwbGF5ZWQgYXQgdGhlIGJhc2VsaW5lIG9mIHRoZWlyIGNvbnRhaW5lcj8nLFxuXHRcdGFuc3dlcnM6IHtcblx0XHRcdGE6ICdhbGlnbi1pdGVtczogZmxleC1zdGFydCcsXG5cdFx0XHRiOiAnanVzdGlmeS1jb250ZW50OiBmbGV4LWVuZCcsXG5cdFx0XHRjOiAnYWxpZ24taXRlbXM6IGZsZXgtZW5kJ1xuXHRcdH0sXG5cdFx0Y29ycmVjdEFuc3dlcjogJ2Fuc3dlciBjJ1xuXHR9XG5dXG5cblxuJC5lYWNoKG15UXVpeiwgZnVuY3Rpb24oa2V5LCBxdWVzdGlvbk9iamVjdCkge1xuXHQvL2NyZWF0ZSB0aGUgcXVlc3Rpb24gY29udGFpbmVyIGZvciBlYWNoIHF1ZXN0aW9uXG5cdGxldCBxdWVzdGlvbkNvbnRhaW5lciA9ICQoXCI8ZGl2IGNsYXNzPSdxdWVzdGlvbi1jb250YWluZXInPlwiKTtcblx0Ly90aHJvdyB0aGUgcXVlc3Rpb24gaW4gYW4gaDIgYW5kIHB1dCBpdCBpbiB0aGUgY29udGFpbmVyXG5cdHF1ZXN0aW9uQ29udGFpbmVyLmFwcGVuZChgPGg0IGNsYXNzPVwicXVlc3Rpb25cIj4ke3F1ZXN0aW9uT2JqZWN0LnF1ZXN0aW9ufTwvaDQ+YCk7XG5cblx0Ly9jcmVhdGUgdGhlIGFuc3dlcnMgY29udGFpbmVyIHRvIHB1dCBhbGwgb2YgdGhlIGFuc3dlcnMgaW5cblx0Y29uc3QgYW5zd2Vyc0NvbnRhaW5lciA9ICQoXCI8ZGl2IGNsYXNzPSdhbnN3ZXJzJz48L2Rpdj5cIik7XG5cdC8vbG9vcCBvdmVyIGVhY2ggYW5zd2VyIGZvciB0aGlzIHF1ZXN0aW9uLCBhbmQgY3JlYXRlIGFuIGlucHV0IHRhZyBhbmQgcHV0IGl0IGluIHRoZSBhbnN3ZXJzIGNvbnRhaW5lclxuXHQkLmVhY2gocXVlc3Rpb25PYmplY3QuYW5zd2VycywgZnVuY3Rpb24oa2V5LCBhbnN3ZXIpIHtcblx0XHQvL3RoZSB0eXBlIG9mIGlucHV0IGlzIHJhZGlvIGFuZCB0aGUgbmFtZSBpcyB0aGUgcXVlc3Rpb24gaXRzZWxmXG5cdFx0XHQvL3RoaXMgcHJldmVudHMgbXVsdGlwbGUgaW5wdXRzIGZvciBhIHF1ZXN0aW9uIGZyb20gYmVpbmcgc2VsZWN0ZWRcblx0XHRhbnN3ZXJzQ29udGFpbmVyLmFwcGVuZChgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPVwiJHtxdWVzdGlvbk9iamVjdC5xdWVzdGlvbn1cIiB2YWx1ZT1cIiR7YW5zd2VyfVwiIGNsYXNzPVwiYW5zd2VyXCI+JHtrZXl9OiAke2Fuc3dlcn08L2lucHV0PmApXG5cdH0pO1xuXG5cdC8vcHV0IHRoZSBhbnN3ZXJzIGludG8gdGhlIHF1ZXN0aW9uIGNvbnRhaW5lclxuXHRxdWVzdGlvbkNvbnRhaW5lci5hcHBlbmQoYW5zd2Vyc0NvbnRhaW5lcik7XG5cblx0Ly9hcHBlbmQgaXQgYWxsIG9udG8gdGhlIHF1aXogY29udGFpbmVyXG5cdCQoJyNxdWl6Q29udGFpbmVyJykuYXBwZW5kKHF1ZXN0aW9uQ29udGFpbmVyKTtcbn0pO1xuXG5cbi8vY2hlY2sgZWFjaCBpbnB1dCdzIHZhbHVlIGFnYWluc3QgdGhlIGNvcnJlY3QgdmFsdWVcbiQoJyNxdWl6LWZvcm0nKS5vbignc3VibWl0JywgZnVuY3Rpb24oZSkge1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFxuXHRsZXQgJHRoaXMgPSAkKHRoaXMpXG5cdFxuXHRsZXQgJHF1ZXN0aW9ucyA9ICQodGhpcykuZmluZCgnLnF1ZXN0aW9uLWNvbnRhaW5lcicpXG5cblx0XG5cdC8vIExvb3Agb3ZlciBlYWNoIHF1ZXN0aW9uIGNvbnRhaW5lclxuXHQkLmVhY2goJHF1ZXN0aW9ucywgZnVuY3Rpb24gKGluZGV4LCBxdWVzdGlvbkNvbnRhaW5lcikge1xuXHRcdGxldCAkcXVlc3Rpb25Db250YWluZXIgPSAkKHF1ZXN0aW9uQ29udGFpbmVyKVxuXHRcdC8vIEdldCB0aGUgcXVlc3Rpb24gdGV4dFxuXHRcdGxldCBxdWVzdGlvbiA9ICRxdWVzdGlvbkNvbnRhaW5lci5maW5kKCdoNC5xdWVzdGlvbicpLnRleHQoKVxuXHRcdC8vIEdldCB0aGUgcXVlc3Rpb25PYmplY3QgZnJvbSBteVF1aXpcblx0XHRsZXQgcXVlc3Rpb25PYmplY3QgPSBteVF1aXouZmlsdGVyKGZ1bmN0aW9uKHF1ZXN0aW9uT2JqZWN0KSB7XG5cdFx0XHRyZXR1cm4gcXVlc3Rpb25PYmplY3QucXVlc3Rpb24gPT09IHF1ZXN0aW9uXG5cdFx0fSlcblx0XHQvLyBHZXQgdGhlIGNvcnJlY3QgYW5zd2VyIGZyb20gdGhlIHF1ZXN0aW9uT2JqZWN0XG5cdFx0bGV0IGNvcnJlY3RBbnN3ZXIgPSBxdWVzdGlvbk9iamVjdFswXS5jb3JyZWN0QW5zd2VyXG5cdFx0Ly8gR2V0IHRoZSB1c2VyIHNlbGVjdGVkIGFuc3dlclxuXHRcdGxldCBhbnN3ZXIgPSAkcXVlc3Rpb25Db250YWluZXIuZmluZCgnaW5wdXQ6Y2hlY2tlZCcpLnZhbCgpXG5cblxuXHRcdC8vIENvbXBhcmUgdGhlbSBpZiB0aGV5IGFyZSBjb3JyZWN0XG5cdFx0XHQvLyBEbyBzb21ldGhpbmcgd2l0aCByaWdodCBhbnN3ZXJcblx0XHRpZiAoYW5zd2VyID09PSBjb3JyZWN0QW5zd2VyKSB7XG5cdFx0XHQkKCcubXlSZXN1bHRzJykuYXBwZW5kKGA8bGk+Q29ycmVjdCAke3F1ZXN0aW9ufTwvbGk+YCApXG5cdFx0XHQkKCcubXlSZXN1bHRzJykuY3NzKCdib3JkZXInLCAnMzBweCBzb2xpZCAjMDA4ZGQ1Jyk7XHRcdFxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBEbyBzb21ldGhpbmcgd2l0aCB3cm9uZyBhbnN3ZXJcblx0XHRcdCQoJy5teVJlc3VsdHMnKS5jc3MoJ2JvcmRlcicsICczMHB4IHNvbGlkICMwMDhkZDUnKTtcblx0XHRcdCQoJy5teVJlc3VsdHMnKS5hcHBlbmQoYDxsaT5JbmNvcnJlY3QgJHtxdWVzdGlvbn08L2xpPmAgKTtcblx0XHRcdCQoJy5teVJlc3VsdHMnKS5hcHBlbmQoYHRoZSBjb3JyZWN0IGFuc3dlciBpcyAke3F1ZXN0aW9uT2JqZWN0WzBdLmNvcnJlY3RBbnN3ZXJ9YCk7XG5cdFx0fVx0XHRcblx0fSk7XG59KTtcblxuXG4vL2dpdmUgdXNlciBvcHRpb24gdG8gcmVmcmVzaCBwYWdlIHRvIHJlLXRha2UgcXVpelxuJCgnI3JlZnJlc2hCdXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRsb2NhdGlvbi5ocmVmID0gbG9jYXRpb24uaHJlZjtcbn0pO1xuXG5cblxuXG4gXG4iXX0=
