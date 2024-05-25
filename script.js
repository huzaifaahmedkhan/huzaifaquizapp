// Get references to HTML elements
const quizContainer = document.getElementById('quiz');
const resultContainer = document.getElementById('result');
const submitButton = document.getElementById('submit');

// Function to display quiz questions
function displayQuiz() {
    const output = [];

    questions.forEach((currentQuestion, questionNumber) => {
        const options = [];

        for (let letter in currentQuestion.options) {
            options.push(
                `<label>
                    <input type="radio" name="question${questionNumber}" value="${letter}">
                    ${letter} : ${currentQuestion.options[letter]}
                </label>`
            );
        }

        output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="options"> ${options.join('')} </div>`
        );
    });

    quizContainer.innerHTML = output.join('');
}

// Function to calculate and show quiz results
function showResults() {
    const answerContainers = quizContainer.querySelectorAll('.options');

    let score = 0;

    questions.forEach((currentQuestion, questionNumber) => {
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;

        if (userAnswer === currentQuestion.correctAnswer) {
            score++;
        }
    });

    resultContainer.innerHTML = `Score: ${score} out of ${questions.length}`;
}

// Display quiz when the page loads
displayQuiz();

// Event listener for submit button
submitButton.addEventListener('click', showResults);
