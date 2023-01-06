


function editText(){
  var routeInput = document.getElementById('text');
  var routeFontSize = document.querySelectorAll('#floatingSelectGrid')[0].value;
  var routeFontFamily = document.querySelectorAll('#floatingSelectGrid')[1].value;
  var routeFontWeight = document.querySelectorAll('#floatingSelectGrid')[2].value;
  var routeTextAlign = document.querySelectorAll('#floatingSelectGrid')[3].value;
  routeInput.style.fontSize = routeFontSize * 8  +"px";
  routeInput.style.fontFamily = routeFontFamily;
  routeInput.style.fontWeight = routeFontWeight;
  routeInput.style.textAlign = routeTextAlign;
}
