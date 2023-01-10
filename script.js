console.log("Declared js file here")
function changeColor(){
	let object = document.getElementById('txt');
	if(object.style.color=='black' || object.style.color=='blue'){
		object.style.color = 'red';
	}
	else 
		object.style.color = 'blue';
}


document.getElementById("test").innerHTML = "Goodbye World"

