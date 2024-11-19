/* 
A christmas wonderland in HTML/CSS.
Made by Kevin Jannis (@kevinjannis)
Inspired by: http://dribbble.com/shots/1356999-Christmas
View more at www.janniskev.in
*/

const textDisplay = document.getElementById("text")
const phrases = ['Hola, de parte de: Alberto Marín ' ,'Te deseo lo mejor para tí ', 'y tus seres queridos ', 'Felíz Navidad 2024 ', 'y prospero 2025 ']

let i = 0
let j = 0
let currentPhrase = []
let isDeleting = false
let isEnd = false

function loop(){
	isEnd = false
	textDisplay.innerHTML = currentPhrase.join('')

	if(i < phrases.length){

		if(!isDeleting && j <= phrases[i].length){
			
			currentPhrase.push(phrases[i][j])
			j++
			textDisplay.innerHTML = currentPhrase.join('')
		}

		if(isDeleting && j <= phrases[i].length){
			currentPhrase.pop(phrases[i][j])
			j--
			textDisplay.innerHTML = currentPhrase.join('')
			}

		if(j == phrases[i].length){
			isEnd = true
			isDeleting = true		
		}
		if(isDeleting && j === 0){
			currentPrase = []
			isDeleting = false
			i++
			if(i == phrases.length)
				i = 0
		}
	}
	const speedUp = Math.random() * (80 -50) + 50
	const normalSpeed = Math.random() * (300 -200) + 200
	const time = isEnd ? 2000 : isDeleting ? speedUp : normalSpeed
	setTimeout(loop,time)

}

loop()
