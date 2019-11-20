$(document).ready(function() {

  $("submit").click(function(){
var number = $("dogyears").val();
var result = parseInt(number) + 7;
var friendlyResult = "You are" + result + "in dog years!";
$(".result").text(friendlyResult);
});
});
