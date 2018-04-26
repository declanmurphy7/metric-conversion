// Feet to meters function
function fToM(){

  var measure = parseInt(document.getElementById("value1").value);
  
  
//alert function
  if(!measure){
	  alert("Please enter a value");
  }
else if(measure <= 0) {
alert("Please enter a value greater than 0")
}

else if(measure > 0) {
  
  var meters = measure * 0.3048;
  var message = measure + ' feet converts to ' + meters + ' meters.';
  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;
}
}

//Inches to centimeters function
function fToC(){

  var measure = parseInt(document.getElementById("value1").value);

  
  //alert function
  if(!measure){
	  alert("Please enter a value");
  }
else if(measure <= 0) {
alert("Please enter a value greater than 0")
}

else if(measure > 0) {
  
  var centimeters = measure * 2.54;
  var message = measure + ' inches converts to ' + centimeters + ' centimeters.';
  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;
}
}

//Yards to meters function
function fToY(){

  var measure = parseInt(document.getElementById("value1").value);

  
  //alert function
  if(!measure){
	  alert("Please enter a value");
  }
else if(measure <= 0) {
alert("Please enter a value greater than 0")
}

//Calculation
else if(measure > 0) {
  
  var meters = measure * 0.9144;
  var message = measure + ' yards converts to ' + meters + ' meters.';
  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;
}
}

//Miles to kilometers function
function fToK(){

  var measure = parseInt(document.getElementById("value1").value);

  var kilometers = measure * 1.60934;
  var message = measure + ' miles converts to ' + kilometers + ' kilometers.';
  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;

}