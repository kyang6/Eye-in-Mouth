/*
Pass in a modal and opens it by adding "is-active" to class 
*/
function openModal(modal) {
	if(modal.className.includes("is-active")) {
		console.log("Modal is already active!");
	} else {
		modal.className = "modal is-active";
	}
}

/*
Pass in a modal and closes it by removing "is-active" from the modal's class 
*/
function closeModal(modal) {
	if(modal.className.includes("is-active")) {
		modal.className = "modal";
	} else {
		console.log("Modal is already closed!");
	}
}

/*
Adds listeners to modal to close the modal 
*/
function addModalListeners() {
	var modalbkgrd = document.getElementById("thank-you-modal-bkgrd");
	var modalclose = document.getElementById("thank-you-modal-close");

	var modal = document.getElementById("thank-you-modal");
	modalbkgrd.addEventListener('click', function(){ closeModal(modal) });
	modalclose.addEventListener('click', function(){ closeModal(modal) });
}

/*
Generate a color listener for the header to turn from white to black
*/
function generateColorListener(elem) {
	return function () {
	    if(document.body.scrollTop>document.getElementById("hero").offsetHeight){
	    	if(elem.className.includes("white-text")) {
				elem.className = elem.className.replace(" white-text", "");
	    	}
	    } else {
	    	if(!elem.className.includes("white-text")) {
				elem.className = elem.className + " white-text";
	    	}
	    }
	}
}

/*
--------------------  Main ------------------------ 
*/
var changeHeaderColor = generateColorListener(document.getElementById("header"));

window.addEventListener('scroll', function(event) {
	changeHeaderColor();
});



/*
When everything finishes loading
*/
document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
  	init();
  	addModalListeners();
  }
};

