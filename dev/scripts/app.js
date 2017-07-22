// Writing this so Cloud9 stops thinking $ is a mistake
/* global $ */

//grab HTML elements and store them in variables
const quizContainer = document.getElementById('quizContainer');
const quizQuestions = document.getElementById('quizQuestion')
const quizAnswers = document.getElementById('quizAnswer')
const submitButton = document.getElementById('submit');
const resultsContainer = document.getElementById('results');
const studyGuide = document.getElementById('flexboxStudy');

//give short description of what this web app is about
document.getElementById('websiteInfo').append('A fun quiz to test your knowledge on Flexbox!');

//create quiz dynamically to be displayed as soon as page loads

const myQuiz = [
	{
		question: 'Question 1: How do you access Flexbox properties?',
		answers: {
			a: 'display: flex',
			b: 'display: flexbox',
			c: 'display: inline-flex'
		},
		correctAnswer: 'answer a'
	},
	{
		question: 'Question 2: What element do you target Flexbox on to?',
		answers: {
			a: 'The parent element',
			b: 'Children elements',
			c: 'Doesn\'t matter'
		},
		correctAnswer: 'answer a'
	},
	{
		question: 'Question 3: How do you specify how flex items are laid out in the container?',
		answers: {
			a: 'justify content',
			b: 'flex-direction',
			c: 'align-items'
		},
		correctAnswer: 'answer b'
	},
	{
		question: 'Question 4: What flex property causes flex items to be laid out on multiple lines rather than just one?',
		answers: {
			a: 'flex-wrap',
			b: 'flex-flow',
			c: 'flex-basis'
		},
		correctAnswer: 'answer a'
	},
	{
		question: 'Question 5: How can you center your flex items along the main axis?',
		answers: {
			a: 'align-self',
			b: 'align-items',
			c: 'justify-content'
		},
		correctAnswer: 'answer c'
	},
	{
		question: 'Question 6: How can you cause a flex item to grow in size?',
		answers: {
			a: 'flex-grow',
			b: 'There is no way to do this with Flexbox',
			c: 'flex-size'
		},
		correctAnswer: 'answer a'
	},
	{
		question: 'Question 7: What Flexbox property changes the order of the flex items?',
		answers: {
			a: 'flex-order',
			b: 'order',
			c: 'flex-change'
		},
		correctAnswer: 'answer b'
	},
	{
		question: 'Question 8: What Flexbox property do you use to move a flex item to the end of its container?',
		answers: {
			a: 'flex-grow: 1',
			b: 'justify-content: flex-end',
			c: 'flex-direction: row-reverse'
		},
		correctAnswer: 'answer b'
	},
	{
		question: 'Question 9: How do you center flex items and give them space between each item at the same time?',
		answers: {
			a: 'justify-content: space-around',
			b: 'align-items: center;',
			c: 'justify-content: space-between'
		},
		correctAnswer: 'answer c'
	},
	{
		question: 'Question 10: What property forces flex items to be displayed at the baseline of their container?',
		answers: {
			a: 'align-items: flex-start',
			b: 'justify-content: flex-end',
			c: 'align-items: flex-end'
		},
		correctAnswer: 'answer c'
	}
]


$.each(myQuiz, function(key, questionObject) {
	//create the question container for each question
	let questionContainer = $("<div class='question-container'>");
	//throw the question in an h2 and put it in the container
	questionContainer.append(`<h4 class="question">${questionObject.question}</h4>`);

	//create the answers container to put all of the answers in
	const answersContainer = $("<div class='answers'></div>");
	//loop over each answer for this question, and create an input tag and put it in the answers container
	$.each(questionObject.answers, function(key, answer) {
		//the type of input is radio and the name is the question itself
			//this prevents multiple inputs for a question from being selected
		answersContainer.append(`<input type='radio' name="${questionObject.question}" value="${answer}" class="answer">${key}: ${answer}</input>`)
	});

	//put the answers into the question container
	questionContainer.append(answersContainer);

	//append it all onto the quiz container
	$('#quizContainer').append(questionContainer);
});


//check each input's value against the correct value
$('#quiz-form').on('submit', function(e) {
	e.preventDefault();
	
	let $this = $(this)
	
	let $questions = $(this).find('.question-container')

	
	// Loop over each question container
	$.each($questions, function (index, questionContainer) {
		let $questionContainer = $(questionContainer)
		// Get the question text
		let question = $questionContainer.find('h4.question').text()
		// Get the questionObject from myQuiz
		let questionObject = myQuiz.filter(function(questionObject) {
			return questionObject.question === question
		})
		// Get the correct answer from the questionObject
		let correctAnswer = questionObject[0].correctAnswer
		// Get the user selected answer
		let answer = $questionContainer.find('input:checked').val()


		// Compare them if they are correct
			// Do something with right answer
		if (answer === correctAnswer) {
			$('.myResults').append(`<li>Correct ${question}</li>` )
			$('.myResults').css('border', '30px solid #008dd5');		
		} else {
			// Do something with wrong answer
			$('.myResults').css('border', '30px solid #008dd5');
			$('.myResults').append(`<li>Incorrect ${question}</li>` );
			$('.myResults').append(`the correct answer is ${questionObject[0].correctAnswer}`);
		}		
	});
});


//give user option to refresh page to re-take quiz
$('#refreshButton').on('click', function(){
	location.href = location.href;
});




 
