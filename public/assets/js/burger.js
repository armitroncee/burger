$("#submit").on("click", function(event) {
    event.preventDefault();

    var newBurger = {
      burger_name: $("#burg").val().trim()
    };

    // Send the POST request.
    $.ajax("/api/burgers", {
      type: "POST",
      data: newBurger
    }).then(
      function() {
        console.log("created new burger");
        
      }
    );

    $("#burg").val("")
    location.reload();
  });

  $(".burgers").on("click", function(event){
    event.preventDefault();

    var id = $(this).data("id");

    var newDevoured = {
      devoured: true
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevoured
    }).then(function() {
        location.reload();
      }
    );
  })

  