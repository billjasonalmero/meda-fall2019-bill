//oct 9, 2019

$(document).ready(function (){
  $("#story").append("<p>Eduardo woke up")

  $("#choices").append("<button id='raining'>It is Raining</button>");

  $("#choices").append("<button id='sunny'>it is sunny</button>");

  $("#raining").click(function () {
    // console.log("clicked!");

    //if clicked
    $("#story").append("<p>Unfortunately it is pouring like a tsunami outside.</p>");

    $("#raining").remove();
    $("#sunny").remove();


    $("#choices").append("<button id='umbrella'>Find Umbrella</button>");
    $("#choices").append("<button id='forget'>Forget about the Umbrella</button>");

    $("#umbrella").click(function() {
      $("#story").append("<p>Eduardo took the umbrella and lived hapilly ever after.</p>")

      $("#umbrella").remove();
      $("#forget").remove();
    });

    //attach an event listener for the forget button
    $("#forget").click(function () {
      $("#story").append("<p>Eduardo</p>");
    });
  });


});