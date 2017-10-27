//define functions here

$(document).ready(function(){

// call functions here

});

function getIt() {
  $('p').on('click', function(){
    alert("Hey!")
  })
}

function frameIt() {
  var img = $('img')[0]
  img.on('load', function(){
      img.className += "tasty"
      img.style.borderColor = "red"

    
  })
}