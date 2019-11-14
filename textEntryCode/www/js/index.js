


$(document).on("pagecreate","#pageone",function(){
    
  $('#submitButton').on("click", function(){
    submitText();
  });            
});            


function submitText() {
    alert(random())
	alert(sound())
}

function storeValue(key, value) {
	//add some code to store the key-value pair in persistant storage 
}

function random() {
	return !Math.round(Math.random());
}


function sound(navigator) {
    
    if (random() == "false") {
    navigator.notification.beep(1);
    } else {
    navigator.notification.beep(2);
    }
    
    
}