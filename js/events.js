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

  $('img').on('load', function(){
      img = $('img')[0]
      img.className += "tasty"
      img.style.borderColor = "red"


  })
}
