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
	correctAnswer: 'display: flex'
}, {
	question: 'Question 2: What element do you target Flexbox on to?',
	answers: {
		a: 'The parent element',
		b: 'Children elements',
		c: 'Doesn\'t matter'
	},
	correctAnswer: 'The parent element'
}, {
	question: 'Question 3: How do you specify how flex items are laid out in the container?',
	answers: {
		a: 'justify content',
		b: 'flex-direction',
		c: 'align-items'
	},
	correctAnswer: 'flex-direction'
}, {
	question: 'Question 4: What flex property causes flex items to be laid out on multiple lines rather than just one?',
	answers: {
		a: 'flex-wrap',
		b: 'flex-flow',
		c: 'flex-basis'
	},
	correctAnswer: 'flex-wrap'
}, {
	question: 'Question 5: How can you center your flex items along the main axis?',
	answers: {
		a: 'align-self',
		b: 'align-items',
		c: 'justify-content'
	},
	correctAnswer: 'justify-content'
}, {
	question: 'Question 6: How can you cause a flex item to grow in size?',
	answers: {
		a: 'flex-grow',
		b: 'There is no way to do this with Flexbox',
		c: 'flex-size'
	},
	correctAnswer: 'flex-grow'
}, {
	question: 'Question 7: What Flexbox property changes the order of the flex items?',
	answers: {
		a: 'flex-order',
		b: 'order',
		c: 'flex-change'
	},
	correctAnswer: 'order'
}, {
	question: 'Question 8: What Flexbox property do you use to move a flex item to the end of its container?',
	answers: {
		a: 'flex-grow: 1',
		b: 'justify-content: flex-end',
		c: 'flex-direction: row-reverse'
	},
	correctAnswer: 'justify-content: flex-end'
}, {
	question: 'Question 9: How do you center flex items and give them space between each item at the same time?',
	answers: {
		a: 'justify-content: space-around',
		b: 'align-items: center;',
		c: 'justify-content: space-between'
	},
	correctAnswer: 'justify-content: space-between'
}, {
	question: 'Question 10: What property forces flex items to be displayed at the baseline of their container?',
	answers: {
		a: 'align-items: flex-start',
		b: 'justify-content: flex-end',
		c: 'align-items: flex-end'
	},
	correctAnswer: 'align-items: flex-end'
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
		if (answer === correctAnswer && answer != undefined) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJkZXYvc2NyaXB0cy9hcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBO0FBQ0E7O0FBRUE7QUFDQSxJQUFNLGdCQUFnQixTQUFTLGNBQVQsQ0FBd0IsZUFBeEIsQ0FBdEI7QUFDQSxJQUFNLGdCQUFnQixTQUFTLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBdEI7QUFDQSxJQUFNLGNBQWMsU0FBUyxjQUFULENBQXdCLFlBQXhCLENBQXBCO0FBQ0EsSUFBTSxlQUFlLFNBQVMsY0FBVCxDQUF3QixRQUF4QixDQUFyQjtBQUNBLElBQU0sbUJBQW1CLFNBQVMsY0FBVCxDQUF3QixTQUF4QixDQUF6QjtBQUNBLElBQU0sYUFBYSxTQUFTLGNBQVQsQ0FBd0IsY0FBeEIsQ0FBbkI7O0FBRUE7QUFDQSxTQUFTLGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUMsTUFBdkMsQ0FBOEMsK0NBQTlDOztBQUVBOztBQUVBLElBQU0sU0FBUyxDQUNkO0FBQ0MsV0FBVSxtREFEWDtBQUVDLFVBQVM7QUFDUixLQUFHLGVBREs7QUFFUixLQUFHLGtCQUZLO0FBR1IsS0FBRztBQUhLLEVBRlY7QUFPQyxnQkFBZTtBQVBoQixDQURjLEVBVWQ7QUFDQyxXQUFVLHVEQURYO0FBRUMsVUFBUztBQUNSLEtBQUcsb0JBREs7QUFFUixLQUFHLG1CQUZLO0FBR1IsS0FBRztBQUhLLEVBRlY7QUFPQyxnQkFBZTtBQVBoQixDQVZjLEVBbUJkO0FBQ0MsV0FBVSw4RUFEWDtBQUVDLFVBQVM7QUFDUixLQUFHLGlCQURLO0FBRVIsS0FBRyxnQkFGSztBQUdSLEtBQUc7QUFISyxFQUZWO0FBT0MsZ0JBQWU7QUFQaEIsQ0FuQmMsRUE0QmQ7QUFDQyxXQUFVLHlHQURYO0FBRUMsVUFBUztBQUNSLEtBQUcsV0FESztBQUVSLEtBQUcsV0FGSztBQUdSLEtBQUc7QUFISyxFQUZWO0FBT0MsZ0JBQWU7QUFQaEIsQ0E1QmMsRUFx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QixHQUFoQixDQUFvQixRQUFwQixFQUE4QixvQkFBOUI7QUFDQSxLQUFFLFlBQUYsRUFBZ0IsTUFBaEIsb0JBQXdDLFFBQXhDO0FBQ0EsS0FBRSxZQUFGLEVBQWdCLE1BQWhCLDRCQUFnRCxlQUFlLENBQWYsRUFBa0IsYUFBbEU7QUFDQTtBQUNELEVBeEJEO0FBeUJBLENBbENEOztBQW9DQTtBQUNBLEVBQUUsZ0JBQUYsRUFBb0IsRUFBcEIsQ0FBdUIsT0FBdkIsRUFBZ0MsWUFBVTtBQUN6QyxVQUFTLElBQVQsR0FBZ0IsU0FBUyxJQUF6QjtBQUNBLENBRkQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gV3JpdGluZyB0aGlzIHNvIENsb3VkOSBzdG9wcyB0aGlua2luZyAkIGlzIGEgbWlzdGFrZVxuLyogZ2xvYmFsICQgKi9cblxuLy9ncmFiIEhUTUwgZWxlbWVudHMgYW5kIHN0b3JlIHRoZW0gaW4gdmFyaWFibGVzXG5jb25zdCBxdWl6Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1aXpDb250YWluZXInKTtcbmNvbnN0IHF1aXpRdWVzdGlvbnMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncXVpelF1ZXN0aW9uJylcbmNvbnN0IHF1aXpBbnN3ZXJzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3F1aXpBbnN3ZXInKVxuY29uc3Qgc3VibWl0QnV0dG9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1Ym1pdCcpO1xuY29uc3QgcmVzdWx0c0NvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXN1bHRzJyk7XG5jb25zdCBzdHVkeUd1aWRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2ZsZXhib3hTdHVkeScpO1xuXG4vL2dpdmUgc2hvcnQgZGVzY3JpcHRpb24gb2Ygd2hhdCB0aGlzIHdlYiBhcHAgaXMgYWJvdXRcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3ZWJzaXRlSW5mbycpLmFwcGVuZCgnQSBmdW4gcXVpeiB0byB0ZXN0IHlvdXIga25vd2xlZGdlIG9uIEZsZXhib3ghJyk7XG5cbi8vY3JlYXRlIHF1aXogZHluYW1pY2FsbHkgdG8gYmUgZGlzcGxheWVkIGFzIHNvb24gYXMgcGFnZSBsb2Fkc1xuXG5jb25zdCBteVF1aXogPSBbXG5cdHtcblx0XHRxdWVzdGlvbjogJ1F1ZXN0aW9uIDE6IEhvdyBkbyB5b3UgYWNjZXNzIEZsZXhib3ggcHJvcGVydGllcz8nLFxuXHRcdGFuc3dlcnM6IHtcblx0XHRcdGE6ICdkaXNwbGF5OiBmbGV4Jyxcblx0XHRcdGI6ICdkaXNwbGF5OiBmbGV4Ym94Jyxcblx0XHRcdGM6ICdkaXNwbGF5OiBpbmxpbmUtZmxleCdcblx0XHR9LFxuXHRcdGNvcnJlY3RBbnN3ZXI6ICdkaXNwbGF5OiBmbGV4J1xuXHR9LFxuXHR7XG5cdFx0cXVlc3Rpb246ICdRdWVzdGlvbiAyOiBXaGF0IGVsZW1lbnQgZG8geW91IHRhcmdldCBGbGV4Ym94IG9uIHRvPycsXG5cdFx0YW5zd2Vyczoge1xuXHRcdFx0YTogJ1RoZSBwYXJlbnQgZWxlbWVudCcsXG5cdFx0XHRiOiAnQ2hpbGRyZW4gZWxlbWVudHMnLFxuXHRcdFx0YzogJ0RvZXNuXFwndCBtYXR0ZXInXG5cdFx0fSxcblx0XHRjb3JyZWN0QW5zd2VyOiAnVGhlIHBhcmVudCBlbGVtZW50J1xuXHR9LFxuXHR7XG5cdFx0cXVlc3Rpb246ICdRdWVzdGlvbiAzOiBIb3cgZG8geW91IHNwZWNpZnkgaG93IGZsZXggaXRlbXMgYXJlIGxhaWQgb3V0IGluIHRoZSBjb250YWluZXI/Jyxcblx0XHRhbnN3ZXJzOiB7XG5cdFx0XHRhOiAnanVzdGlmeSBjb250ZW50Jyxcblx0XHRcdGI6ICdmbGV4LWRpcmVjdGlvbicsXG5cdFx0XHRjOiAnYWxpZ24taXRlbXMnXG5cdFx0fSxcblx0XHRjb3JyZWN0QW5zd2VyOiAnZmxleC1kaXJlY3Rpb24nXG5cdH0sXG5cdHtcblx0XHRxdWVzdGlvbjogJ1F1ZXN0aW9uIDQ6IFdoYXQgZmxleCBwcm9wZXJ0eSBjYXVzZXMgZmxleCBpdGVtcyB0byBiZSBsYWlkIG91dCBvbiBtdWx0aXBsZSBsaW5lcyByYXRoZXIgdGhhbiBqdXN0IG9uZT8nLFxuXHRcdGFuc3dlcnM6IHtcblx0XHRcdGE6ICdmbGV4LXdyYXAnLFxuXHRcdFx0YjogJ2ZsZXgtZmxvdycsXG5cdFx0XHRjOiAnZmxleC1iYXNpcydcblx0XHR9LFxuXHRcdGNvcnJlY3RBbnN3ZXI6ICdmbGV4LXdyYXAnXG5cdH0sXG5cdHtcblx0XHRxdWVzdGlvbjogJ1F1ZXN0aW9uIDU6IEhvdyBjYW4geW91IGNlbnRlciB5b3VyIGZsZXggaXRlbXMgYWxvbmcgdGhlIG1haW4gYXhpcz8nLFxuXHRcdGFuc3dlcnM6IHtcblx0XHRcdGE6ICdhbGlnbi1zZWxmJyxcblx0XHRcdGI6ICdhbGlnbi1pdGVtcycsXG5cdFx0XHRjOiAnanVzdGlmeS1jb250ZW50J1xuXHRcdH0sXG5cdFx0Y29ycmVjdEFuc3dlcjogJ2p1c3RpZnktY29udGVudCdcblx0fSxcblx0e1xuXHRcdHF1ZXN0aW9uOiAnUXVlc3Rpb24gNjogSG93IGNhbiB5b3UgY2F1c2UgYSBmbGV4IGl0ZW0gdG8gZ3JvdyBpbiBzaXplPycsXG5cdFx0YW5zd2Vyczoge1xuXHRcdFx0YTogJ2ZsZXgtZ3JvdycsXG5cdFx0XHRiOiAnVGhlcmUgaXMgbm8gd2F5IHRvIGRvIHRoaXMgd2l0aCBGbGV4Ym94Jyxcblx0XHRcdGM6ICdmbGV4LXNpemUnXG5cdFx0fSxcblx0XHRjb3JyZWN0QW5zd2VyOiAnZmxleC1ncm93J1xuXHR9LFxuXHR7XG5cdFx0cXVlc3Rpb246ICdRdWVzdGlvbiA3OiBXaGF0IEZsZXhib3ggcHJvcGVydHkgY2hhbmdlcyB0aGUgb3JkZXIgb2YgdGhlIGZsZXggaXRlbXM/Jyxcblx0XHRhbnN3ZXJzOiB7XG5cdFx0XHRhOiAnZmxleC1vcmRlcicsXG5cdFx0XHRiOiAnb3JkZXInLFxuXHRcdFx0YzogJ2ZsZXgtY2hhbmdlJ1xuXHRcdH0sXG5cdFx0Y29ycmVjdEFuc3dlcjogJ29yZGVyJ1xuXHR9LFxuXHR7XG5cdFx0cXVlc3Rpb246ICdRdWVzdGlvbiA4OiBXaGF0IEZsZXhib3ggcHJvcGVydHkgZG8geW91IHVzZSB0byBtb3ZlIGEgZmxleCBpdGVtIHRvIHRoZSBlbmQgb2YgaXRzIGNvbnRhaW5lcj8nLFxuXHRcdGFuc3dlcnM6IHtcblx0XHRcdGE6ICdmbGV4LWdyb3c6IDEnLFxuXHRcdFx0YjogJ2p1c3RpZnktY29udGVudDogZmxleC1lbmQnLFxuXHRcdFx0YzogJ2ZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZSdcblx0XHR9LFxuXHRcdGNvcnJlY3RBbnN3ZXI6ICdqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kJ1xuXHR9LFxuXHR7XG5cdFx0cXVlc3Rpb246ICdRdWVzdGlvbiA5OiBIb3cgZG8geW91IGNlbnRlciBmbGV4IGl0ZW1zIGFuZCBnaXZlIHRoZW0gc3BhY2UgYmV0d2VlbiBlYWNoIGl0ZW0gYXQgdGhlIHNhbWUgdGltZT8nLFxuXHRcdGFuc3dlcnM6IHtcblx0XHRcdGE6ICdqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZCcsXG5cdFx0XHRiOiAnYWxpZ24taXRlbXM6IGNlbnRlcjsnLFxuXHRcdFx0YzogJ2p1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbidcblx0XHR9LFxuXHRcdGNvcnJlY3RBbnN3ZXI6ICdqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW4nXG5cdH0sXG5cdHtcblx0XHRxdWVzdGlvbjogJ1F1ZXN0aW9uIDEwOiBXaGF0IHByb3BlcnR5IGZvcmNlcyBmbGV4IGl0ZW1zIHRvIGJlIGRpc3BsYXllZCBhdCB0aGUgYmFzZWxpbmUgb2YgdGhlaXIgY29udGFpbmVyPycsXG5cdFx0YW5zd2Vyczoge1xuXHRcdFx0YTogJ2FsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0Jyxcblx0XHRcdGI6ICdqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kJyxcblx0XHRcdGM6ICdhbGlnbi1pdGVtczogZmxleC1lbmQnXG5cdFx0fSxcblx0XHRjb3JyZWN0QW5zd2VyOiAnYWxpZ24taXRlbXM6IGZsZXgtZW5kJ1xuXHR9XG5dXG5cblxuJC5lYWNoKG15UXVpeiwgZnVuY3Rpb24oa2V5LCBxdWVzdGlvbk9iamVjdCkge1xuXHQvL2NyZWF0ZSB0aGUgcXVlc3Rpb24gY29udGFpbmVyIGZvciBlYWNoIHF1ZXN0aW9uXG5cdGxldCBxdWVzdGlvbkNvbnRhaW5lciA9ICQoXCI8ZGl2IGNsYXNzPSdxdWVzdGlvbi1jb250YWluZXInPlwiKTtcblx0Ly90aHJvdyB0aGUgcXVlc3Rpb24gaW4gYW4gaDIgYW5kIHB1dCBpdCBpbiB0aGUgY29udGFpbmVyXG5cdHF1ZXN0aW9uQ29udGFpbmVyLmFwcGVuZChgPGg0IGNsYXNzPVwicXVlc3Rpb25cIj4ke3F1ZXN0aW9uT2JqZWN0LnF1ZXN0aW9ufTwvaDQ+YCk7XG5cblx0Ly9jcmVhdGUgdGhlIGFuc3dlcnMgY29udGFpbmVyIHRvIHB1dCBhbGwgb2YgdGhlIGFuc3dlcnMgaW5cblx0Y29uc3QgYW5zd2Vyc0NvbnRhaW5lciA9ICQoXCI8ZGl2IGNsYXNzPSdhbnN3ZXJzJz48L2Rpdj5cIik7XG5cdC8vbG9vcCBvdmVyIGVhY2ggYW5zd2VyIGZvciB0aGlzIHF1ZXN0aW9uLCBhbmQgY3JlYXRlIGFuIGlucHV0IHRhZyBhbmQgcHV0IGl0IGluIHRoZSBhbnN3ZXJzIGNvbnRhaW5lclxuXHQkLmVhY2gocXVlc3Rpb25PYmplY3QuYW5zd2VycywgZnVuY3Rpb24oa2V5LCBhbnN3ZXIpIHtcblx0XHQvL3RoZSB0eXBlIG9mIGlucHV0IGlzIHJhZGlvIGFuZCB0aGUgbmFtZSBpcyB0aGUgcXVlc3Rpb24gaXRzZWxmXG5cdFx0XHQvL3RoaXMgcHJldmVudHMgbXVsdGlwbGUgaW5wdXRzIGZvciBhIHF1ZXN0aW9uIGZyb20gYmVpbmcgc2VsZWN0ZWRcblx0XHRhbnN3ZXJzQ29udGFpbmVyLmFwcGVuZChgPGlucHV0IHR5cGU9J3JhZGlvJyBuYW1lPVwiJHtxdWVzdGlvbk9iamVjdC5xdWVzdGlvbn1cIiB2YWx1ZT1cIiR7YW5zd2VyfVwiIGNsYXNzPVwiYW5zd2VyXCI+JHtrZXl9OiAke2Fuc3dlcn08L2lucHV0PmApXG5cdH0pO1xuXG5cdC8vcHV0IHRoZSBhbnN3ZXJzIGludG8gdGhlIHF1ZXN0aW9uIGNvbnRhaW5lclxuXHRxdWVzdGlvbkNvbnRhaW5lci5hcHBlbmQoYW5zd2Vyc0NvbnRhaW5lcik7XG5cblx0Ly9hcHBlbmQgaXQgYWxsIG9udG8gdGhlIHF1aXogY29udGFpbmVyXG5cdCQoJyNxdWl6Q29udGFpbmVyJykuYXBwZW5kKHF1ZXN0aW9uQ29udGFpbmVyKTtcbn0pO1xuXG5cbi8vY2hlY2sgZWFjaCBpbnB1dCdzIHZhbHVlIGFnYWluc3QgdGhlIGNvcnJlY3QgdmFsdWVcbiQoJyNxdWl6LWZvcm0nKS5vbignc3VibWl0JywgZnVuY3Rpb24oZSkge1xuXHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFxuXHRsZXQgJHRoaXMgPSAkKHRoaXMpO1xuXHRcblx0bGV0ICRxdWVzdGlvbnMgPSAkKHRoaXMpLmZpbmQoJy5xdWVzdGlvbi1jb250YWluZXInKTtcblxuXHRcblx0Ly8gTG9vcCBvdmVyIGVhY2ggcXVlc3Rpb24gY29udGFpbmVyXG5cdCQuZWFjaCgkcXVlc3Rpb25zLCBmdW5jdGlvbiAoaW5kZXgsIHF1ZXN0aW9uQ29udGFpbmVyKSB7XG5cdFx0bGV0ICRxdWVzdGlvbkNvbnRhaW5lciA9ICQocXVlc3Rpb25Db250YWluZXIpO1xuXHRcdC8vIEdldCB0aGUgcXVlc3Rpb24gdGV4dFxuXHRcdGxldCBxdWVzdGlvbiA9ICRxdWVzdGlvbkNvbnRhaW5lci5maW5kKCdoNC5xdWVzdGlvbicpLnRleHQoKTtcblx0XHQvLyBHZXQgdGhlIHF1ZXN0aW9uT2JqZWN0IGZyb20gbXlRdWl6XG5cdFx0bGV0IHF1ZXN0aW9uT2JqZWN0ID0gbXlRdWl6LmZpbHRlcihmdW5jdGlvbihxdWVzdGlvbk9iamVjdCkge1xuXHRcdFx0cmV0dXJuIHF1ZXN0aW9uT2JqZWN0LnF1ZXN0aW9uID09PSBxdWVzdGlvblxuXHRcdH0pXG5cdFx0Ly8gR2V0IHRoZSBjb3JyZWN0IGFuc3dlciBmcm9tIHRoZSBxdWVzdGlvbk9iamVjdFxuXHRcdGxldCBjb3JyZWN0QW5zd2VyID0gcXVlc3Rpb25PYmplY3RbMF0uY29ycmVjdEFuc3dlclxuXHRcdC8vIEdldCB0aGUgdXNlciBzZWxlY3RlZCBhbnN3ZXJcblx0XHRsZXQgYW5zd2VyID0gJHF1ZXN0aW9uQ29udGFpbmVyLmZpbmQoJ2lucHV0OmNoZWNrZWQnKS52YWwoKVxuXG5cdFx0Ly8gQ29tcGFyZSB0aGVtIGlmIHRoZXkgYXJlIGNvcnJlY3Rcblx0XHRcdC8vIERvIHNvbWV0aGluZyB3aXRoIHJpZ2h0IGFuc3dlclxuXHRcdGlmIChhbnN3ZXIgPT09IGNvcnJlY3RBbnN3ZXIgJiYgYW5zd2VyICE9IHVuZGVmaW5lZCkge1xuXHRcdFx0JCgnLm15UmVzdWx0cycpLmFwcGVuZChgPGxpPkNvcnJlY3QgJHtxdWVzdGlvbn08L2xpPmAgKTtcblx0XHRcdCQoJy5teVJlc3VsdHMnKS5jc3MoJ2JvcmRlcicsICczMHB4IHNvbGlkICMwMDhkZDUnKTtcdFx0XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIERvIHNvbWV0aGluZyB3aXRoIHdyb25nIGFuc3dlclxuXHRcdFx0JCgnLm15UmVzdWx0cycpLmNzcygnYm9yZGVyJywgJzMwcHggc29saWQgIzAwOGRkNScpO1xuXHRcdFx0JCgnLm15UmVzdWx0cycpLmFwcGVuZChgPGxpPkluY29ycmVjdCAke3F1ZXN0aW9ufTwvbGk+YCApO1xuXHRcdFx0JCgnLm15UmVzdWx0cycpLmFwcGVuZChgdGhlIGNvcnJlY3QgYW5zd2VyIGlzICR7cXVlc3Rpb25PYmplY3RbMF0uY29ycmVjdEFuc3dlcn1gKTtcblx0XHR9XHRcdFxuXHR9KTtcbn0pO1xuXG4vL2dpdmUgdXNlciBvcHRpb24gdG8gcmVmcmVzaCBwYWdlIHRvIHJlLXRha2UgcXVpelxuJCgnI3JlZnJlc2hCdXR0b24nKS5vbignY2xpY2snLCBmdW5jdGlvbigpe1xuXHRsb2NhdGlvbi5ocmVmID0gbG9jYXRpb24uaHJlZjtcbn0pO1xuXG4iXX0=
