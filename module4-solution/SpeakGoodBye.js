(function(){

    var goodbye = {};

	var speakWord = "Good Bye";
    goodbye.speak = function(name) {
    console.log(speakWord + " " + name);
 }
 window.goodbye = goodbye;



})(window);









