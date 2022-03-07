var randomNumber = Math.round(Math.random() * 100) + 1;
function verifyNumber(myGuess) { 
   if (myGuess == randomNumber) {
      alert("You got it right!");
   } else {
    alert("You lost");
   }
} 
function buttonsAdd() {
	var insertedNumber = document.getElementById("keyboardInsertedNo").value;
	for(let i = 0; i < insertedNumber; i++){ 
		document.getElementById("spaceBetweenDivs").innerHTML += '<button type = "button" id class="btn btn-outline-dark" onclick="return verifyNumber(` + i + `);">Choose me!';
	}
	return false;
}
