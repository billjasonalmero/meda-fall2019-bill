$(document).ready(function () {
  $("#story").append("<p>Bill is leaving his room</p>");
  $("#choices").append("<button id='gym'>To the gym</button>");
  $("#choices").append("<button id='library'>To the library</button>");

  //level 1 part a
  $("#gym").click(function () {
    $("#choices").append("<p>Bill will grab his gym bag and use his bike to head to the gym.</p>");

    $("#gym").remove();
    $("#library").remove();

    $("#choices").append("<button id='basketball'>To the Basketball</button");
    $("#choices").append("<button id='threadmill'>To the Threadmill</button")

    //level 2-part a
    $("#basketball").click(function() {
      $("#choices").append("<p>Bill is practicing how to shoot.</p>");
      $("#basketball").remove();
      $("#threadmill").remove();
      $("#choices").append("<button id='pickup'>Plays Pick up</button>")
      $("#choices").append("<button id='horse'>Plays H.O.R.S.E</button>")


      //level 3-part a
      $("#pickup").click(function() {
        $("#choices").append("<p>Bill is challenged a game of pick up with Lebron James, Kawhi Leonard and Lavar Ball </p>");
        $("#pickup").remove();
        $("#horse").remove();
      })

      //level 3-part b
      $("#horse").click(function() {
        $("#choices").append("<p>Bill is playing a H.O.R.S.E. with a Steph Curry</p>");
        $("#pickup").remove();
        $("#horse").remove();
      })

    });

    //level 2-part b
    $("#threadmill").click(function() {
      $("#choices").append("<p>Bill is stretching his legs.");
      $("#basketball").remove();
      $("#threadmill").remove();

      $("#choices").append("<button>Use the Elliptical</button>");
      $("#choices").append("<button>Use the Spinner Cycle</button>");
     
    });

  })

  //level 1 part b
  $("#library").click(function() {
    $("#choices").append("<p>Bill will grab his school bag and will drive his car to the library.<p>");

    $("#gym").remove();
    $("#library").remove();

    $("#choices").append("<button id='qroom'>To the Quiet Room</button>");
    $("#choices").append("<button id='computer'>To the Computer Lab</button>");


    //level 2-part a
    $("#qroom").click(function() {
      $("#choices").append("<p>Bill will read a book about dragons</p>");
      $("#qroom").remove();
      $("#computer").remove();
    });

    //level 2-part b
    $("#computer").click(function() {
      $("#choices").append("<p>Bill is watching a Movie in the Computer Lab.</p>")
      $("#qroom").remove();
      $("#computer").remove();
    });


  });

});