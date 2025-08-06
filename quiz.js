
function checkAnswer()
{
	    alert("This shows as a pop-up!"); // Users see this pop-up
	console.log("clicked");
	const correctAnswer = "4";
	let userAnswer = document.querySelector('input[name="quiz"]:checked').value;
	if (correctAnswer == userAnswer)
	{
		document.getElementById("feedback").textContent = "Correct! Well done.";
	} else {
		document.getElementById("feedback").textContent = "That's incorrect. Try again!";
	}
}
document.getElementById("submit-answer").addEventListener("click", checkAnswer);