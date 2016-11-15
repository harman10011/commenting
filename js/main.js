function getInfo() {
	var userInput = document.getElementById('search').value
	var userComment = document.getElementById('comment').value
	var newH1 = document.createElement('h1')
	newH1.setAttribute('id', 'newH1')
	var getLi = document.getElementById('li')
	getLi.appendChild(newH1)
	var newP = document.createElement('p')
	newP.setAttribute('class', 'newP')
	getLi.appendChild(newP)
    newH1.innerHTML = "'" + userInput + "'" + "says"
    newP.innerHTML = userComment 
}

