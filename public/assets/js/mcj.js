$(document).ready(function () {
    //Click handler for changing status from Goals to In progress
    // $(".start").on("click", function () {
    //     event.preventDefault();
    //     alert("START");

    //     var updatedachieve = {
    //         name: this.name,
    //         type: this.type,
    //         resource_name: this.resource_name,
    //         resource_URL: this.resource_URL,
    //         comments: this.comments,
    //         status: "In-progress"
    //     }
    //     //Ajax call to move to inprogress page
    //     $.put("/api/achievements/status/In-progress", updatedachieve)
    //         .then(function (updatedachieve) {
    //             console.log(updatedachieve);
    //         });
    // });

    // //Click handler for changing status from In progress to Completed
    // $(".completed").on("click", function () {
    //     event.preventDefault();
    //     alert("COMPLETED");

    //     var updatedachieve = {
    //         name: this.name,
    //         type: this.type,
    //         resource_name: this.resource_name,
    //         resource_URL: this.resource_URL,
    //         comments: this.comments,
    //         status: "Completed"
    //     }
    //     //Ajax call to move to inprogress page
    //     $.put("/api/achievements/status/Completed", updatedachieve)
    //         .then(function (updatedachieve) {
    //             console.log(updatedachieve);
    //         });
    // });
    // var goalName = $("#goalName");
    // var goalType = $("#goalType");
    // var resourceName = $("#resourceName");
    // var resourceURL = $("#resourceURL");
    // var comments = $("#comments");

    // //Click handler for posting the New Goal to the api/new
    // $("#addGoalModal").on("click", function (event) {
    //     event.preventDefault();
    //     var achievement = {
    //         name: goalName,
    //         type: goalType,
    //         resource_name: resourceName,
    //         resource_URL: resourceURL,
    //         comments: comments,
    //         status: "Goal"
    //     }
    //     alert("Modal");
    //     //Post For New Goal
    //     $.post("/api/achievements", achievement)
    //         // on success, run this callback
    //         .then(function (data) {
    //             // log the data we found
    //             console.log(data);

    //             alert("Adding NewGoal...");
    //         });
    // });


    //API CALLS
    // Get Call for Goals
    $.get("/api/achievements/status/Goal", function (data) {
        for (var i = 0; i < data.length; i++) {
            // create a parent div for the oncoming elements
            var wellSection = $("<div>");
            // add a class to this div: 'well'
            wellSection.addClass("well");
            // add an id to the well to mark which well it is
            wellSection.attr("id", "achievements-well-" + i);
            // append the well to the well section
            $("#well-goals").append(wellSection);

            // Now add all of our character data to the well we just placed on the page

            // make the name an h2,
            $("#achievements-well-" + i).append("<h2>" + data[i].name + "</h2>");
            // the role an h3,
            $("#achievements-well-" + i).append("<h3>Type: " + data[i].type + "</h4>");
            // the age an h3,
            $("#achievements-well-" + i).append("<h3>Resource Name: " + data[i].resource_name + "</h4>");
            // and the forcepoints an h3.
            $("#achievements-well-" + i).append("<h3>Resource URL: " + data[i].resource_URL + "</h4>");
            $("#achievements-well-" + i).append("<h3>Comments: " + data[i].comments + "</h4>");
            $("#achievements-well-" + i).append("<button type='button' class='btn btn-secondary start' id='start-'" + i + ">Start</button>");

        }
    });
    
    // Get Call for In Progress
    $.get("/api/achievements/status/In-progress", function (data) {
        for (var i = 0; i < data.length; i++) {
            // create a parent div for the oncoming elements
            var wellSection = $("<div>");
            // add a class to this div: 'well'
            wellSection.addClass("well");
            // add an id to the well to mark which well it is
            wellSection.attr("id", "achievements-well-" + i);
            // append the well to the well section
            $("#well-inprogress").append(wellSection);

            // Now add all of our character data to the well we just placed on the page

            // make the name an h2,
            $("#achievements-well-" + i).append("<h2>" + data[i].name + "</h2>");
            // the role an h3,
            $("#achievements-well-" + i).append("<h3>Type: " + data[i].type + "</h4>");
            // the age an h3,
            $("#achievements-well-" + i).append("<h3>Resource Name: " + data[i].resource_name + "</h4>");
            // and the forcepoints an h3.
            $("#achievements-well-" + i).append("<h3>Resource URL: " + data[i].resource_URL + "</h4>");
            $("#achievements-well-" + i).append("<h3>Comments: " + data[i].comments + "</h4>");
            $("#achievements-well-" + i).append("<button type='button' class='btn btn-secondary completed' id='completed-'" + i + ">Completed</button>");
        }
    });

    // var data = [{
    //     name: "TEST",
    //     type: "TYPETEST",
    //     resource_name: "resourceTest",
    //     resource_URL: "URL",
    //     comments: "COMMENTS",
    // }];
    // console.log(data);
    // function testInProgress(data) {
    //     for (var i = 0; i < data.length; i++) {
    //         // create a parent div for the oncoming elements
    //         var wellSection = $("<div>");
    //         // add a class to this div: 'well'
    //         wellSection.addClass("well");
    //         // add an id to the well to mark which well it is
    //         wellSection.attr("id", "achievements-well-" + i);
    //         // append the well to the well section
    //         $("#well-inprogress").append(wellSection);

    //         // Now add all of our character data to the well we just placed on the page

    //         // make the name an h2,
    //         $("#achievements-well-" + i).append("<h2>" + data[i].name + "</h2>");
    //         // the role an h3,
    //         $("#achievements-well-" + i).append("<h3>Type: " + data[i].type + "</h4>");
    //         // the age an h3,
    //         $("#achievements-well-" + i).append("<h3>Resource Name: " + data[i].resource_name + "</h4>");
    //         // and the forcepoints an h3.
    //         $("#achievements-well-" + i).append("<h3>Resource URL: " + data[i].resource_URL + "</h4>");
    //         $("#achievements-well-" + i).append("<h3>Comments: " + data[i].comments + "</h4>");
    //         $("#achievements-well-" + i).append("<button type='button' class='btn btn-secondary completed' id='completed-'" + i + ">Completed</button>");
    //     }
    // }
    // testInProgress(data);

    // Get Call for Completed
    $.get("/api/achievements/status/Completed", function (data) {
        for (var i = 0; i < data.length; i++) {
            // create a parent div for the oncoming elements
            var wellSection = $("<div>");
            // add a class to this div: 'well'
            wellSection.addClass("well");
            // add an id to the well to mark which well it is
            wellSection.attr("id", "acheivements-well-" + i);
            // append the well to the well section
            $("#well-completed").append(wellSection);

            // Now add all of our character data to the well we just placed on the page

            // make the name an h2,
            $("#achievements-well-" + i).append("<h2>" + data[i].name + "</h2>");
            // the role an h3,
            $("#achievements-well-" + i).append("<h3>Type: " + data[i].type + "</h4>");
            // the age an h3,
            $("#achievements-well-" + i).append("<h3>Resource Name: " + data[i].resource_name + "</h4>");
            // and the forcepoints an h3.
            $("#achievements-well-" + i).append("<h3>Resource URL: " + data[i].resource_URL + "</h4>");
            $("#achievements-well-" + i).append("<h3>Comments: " + data[i].comments + "</h4>");

        }
    });
    // $("select").val('').chosen().change(function(){
    //     $select = $(this);
    //     var pokemon = $select.val();
    //     var $team = $("#team" + $select.data('team')).html('');

    // });
});