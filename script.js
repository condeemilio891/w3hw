// Assignment Code
var generateBtn = document.querySelector("#generate");




// Write password to the #password input

var char="qazxcdewsvfrQAZXSWCDEVFRFV12345%$#@!"


var charNum= document.getElementById("generate")


console.log(writePassword(12,char))


function writePassword( l ,characters){
var password="";
for ( var i=0;i<l; i++){
  password += characters.charAt(Math.floor(Math.random() *characters.length));

}
return password;
}

 
  document.getElementById('password').innerHTML

  //passwordText.value = password;

  


// Add event listener to generate button
generateBtn.addEventListener("click", function(e){
  var characters= char;
  password.value=writePassword( 12, characters);
});

