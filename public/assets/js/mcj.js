$(document).ready(function () {
    //Click handler for changing status from Goals to In progress
    $("#start").on("click", function () {
        event.preventDefault();
        alert("START");

        //Ajax call to move to inprogress page
        $.post("/api/inprogress", newGoal)
        .then(function(data){
            console.log(data);
        });
    });

    //Click handler for changing status from In progress to Completed
    $("#completed").on("click", function () {
        event.preventDefault();
        alert("COMPLETED");

        //Ajax call to move to completed page
        $.post("/api/completed", newGoal)
        .then(function(data){
            console.log(data);
        });
    });

    //Click handler for posting the New Goal to the api/new
    $("#addGoalModal").on("click", function (event) {
        event.preventDefault();
        var newGoal ={

        }
        alert("Modal");
        //Post For New Goal
        $.post("/api/new", newGoal)
            // on success, run this callback
            .then(function (data) {
                // log the data we found
                console.log(data);

                alert("Adding NewGoal...");
            });
    });


    //API CALLS
    // Get Call for Goals
    $.get("/api/new", function (data) {
        for (var i = 0; i < data.length; i++) {
            // create a parent div for the oncoming elements
            var wellSection = $("<div>");
            // add a class to this div: 'well'
            wellSection.addClass("well");
            // add an id to the well to mark which well it is
            wellSection.attr("id", "character-well-" + i);
            // append the well to the well section
            $("#well-goals").append(wellSection);
        
            // Now add all of our character data to the well we just placed on the page
        
            // make the name an h2,
            $("#character-well-" + i).append("<h2>" + data[i].name + "</h2>");
            // the role an h3,
            $("#character-well-" + i).append("<h3>Role: " + data[i].role + "</h4>");
            // the age an h3,
            $("#character-well-" + i).append("<h3>Age: " + data[i].age + "</h4>");
            // and the forcepoints an h3.
            $("#character-well-" + i).append("<h3>Force Points: " + data[i].forcePoints + "</h4>");
        }
    });

    // Get Call for In Progress
    $.get("/api/inprogress", function (data) {
        for (var i = 0; i < data.length; i++) {
            // create a parent div for the oncoming elements
            var wellSection = $("<div>");
            // add a class to this div: 'well'
            wellSection.addClass("well");
            // add an id to the well to mark which well it is
            wellSection.attr("id", "character-well-" + i);
            // append the well to the well section
            $("#well-inprogress").append(wellSection);
        
            // Now add all of our character data to the well we just placed on the page
        
            // make the name an h2,
            $("#character-well-" + i).append("<h2>" + data[i].name + "</h2>");
            // the role an h3,
            $("#character-well-" + i).append("<h3>Role: " + data[i].role + "</h4>");
            // the age an h3,
            $("#character-well-" + i).append("<h3>Age: " + data[i].age + "</h4>");
            // and the forcepoints an h3.
            $("#character-well-" + i).append("<h3>Force Points: " + data[i].forcePoints + "</h4>");
        }
    });

    // Get Call for Conpleted
    $.get("/api/completed", function (data) {
        for (var i = 0; i < data.length; i++) {
            // create a parent div for the oncoming elements
            var wellSection = $("<div>");
            // add a class to this div: 'well'
            wellSection.addClass("well");
            // add an id to the well to mark which well it is
            wellSection.attr("id", "character-well-" + i);
            // append the well to the well section
            $("#well-completed").append(wellSection);
        
            // Now add all of our character data to the well we just placed on the page
        
            // make the name an h2,
            $("#character-well-" + i).append("<h2>" + data[i].name + "</h2>");
            // the role an h3,
            $("#character-well-" + i).append("<h3>Role: " + data[i].role + "</h4>");
            // the age an h3,
            $("#character-well-" + i).append("<h3>Age: " + data[i].age + "</h4>");
            // and the forcepoints an h3.
            $("#character-well-" + i).append("<h3>Force Points: " + data[i].forcePoints + "</h4>");
        }
    });
    $("select").val('').chosen().change(function(){
        $select = $(this);
        var pokemon = $select.val();
        var $team = $("#team" + $select.data('team')).html('');
        
    });
});