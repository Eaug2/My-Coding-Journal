$(document).ready(function () {
    //Click handler for changing status from Goals to In progress
    $(document).on("click", ".start", function () {
        event.preventDefault();

        var id = $(this).attr("data-id");
        var updatedachieve = {
            status: "In-progress"
        }
        $.ajax({
            url: "/api/achievements/" + id + "/status",
            type: 'PUT',
            data: updatedachieve
        }).then(function (updatedachieve) {
            console.log(updatedachieve);
        });
        window.location.reload()
    });


    //Click handler for changing status from In progress to Completed
    $(document).on("click", ".completed", function () {
        event.preventDefault();

        var id = $(this).attr("data-id");
        var updatedachieve = {
            status: "Completed"
        }
        $.ajax({
            url: "/api/achievements/" + id + "/status",
            type: 'PUT',
            data: updatedachieve
        }).then(function (updatedachieve) {
            console.log(updatedachieve);
        });
        window.location.reload()
    });

    // //Click handler for posting the New Goal to the api/new

    $(document).on("click", "#addGoalModal", function (event) {
        event.preventDefault();
        var goalName = $("#goalName").val().trim();
        var goalType = $("#goalType");
        var resourceName = $("#resourceName");
        var resourceURL = $("#resourceURL");
        var comments = $("#comments");
        var skills = $("#skills");
        var achievement = {
            name: goalName,
            type: goalType,
            resource_name: resourceName,
            resource_URL: resourceURL,
            comments: comments,
            status: "Goal",
            skillsA: skills
        }
        //Post For New Goal
        $.post("/api/achievements", achievement)
            // on success, run this callback
            .then(function (data) {
                // log the data we found
                console.log(data);
            });
        window.location.reload()
    });


    //API CALLS
    // Get Call for Goals
    $.get("/api/achievements/status/Goal", function (data) {
        for (var i = 0; i < data.length; i++) {
            // create a parent div for the oncoming elements
            var wellSection = $("<div>");
            // add a class to this div: 'well'
            wellSection.addClass("well");
            // add an id to the well to mark which well it is
            wellSection.attr("id", "achievements-goal-" + i);
            // append the well to the well section
            $("#well-goals").append(wellSection);


            // Now add all of the data from database

            $("#achievements-goal-" + i).append("<h2>" + data[i].name + "</h2>");
            $("#achievements-goal-" + i).append("<h3>Type: " + data[i].type + "</h3>");
            $("#achievements-goal-" + i).append("<h3>Resource Name:<a href="+data[i].resource_URL+">" + data[i].resource_name + "</a></h3>");
            $("#achievements-goal-" + i).append("<h3>Comments: " + data[i].comments + "</h3>");
            $("#achievements-goal-" + i).append("<h3>Status: " + data[i].status + "</h3>");
            $("#achievements-goal-" + i).append("<h3>Skills Used: " + data[i].skillsA + "</h3>");
            $("#achievements-goal-" + i).append("<button type='button' class='btn btn-secondary start' data-id='" + data[i].id + "' id='start-'" + i + ">Start</button>");
            $("#achievements-goal-" + i).append("<br>");

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
            wellSection.attr("id", "achievements-progress-" + i);
            // append the well to the well section
            $("#well-inprogress").append(wellSection);

            // Now add all of the data from database


            $("#achievements-progress-" + i).append("<h2>" + data[i].name + "</h2>");
            $("#achievements-progress-" + i).append("<h3>Type: " + data[i].type + "</h3>");
            $("#achievements-progress-" + i).append("<h3>Resource Name:<a href="+data[i].resource_URL+">" + data[i].resource_name + "</a></h3>");
            $("#achievements-progress-" + i).append("<h3>Comments: " + data[i].comments + "</h3>");
            $("#achievements-progress-" + i).append("<h3>Skills Used: " + data[i].skillsA + "</h3>");
            $("#achievements-progress-" + i).append("<button type='button' class='btn btn-secondary completed' data-id='" + data[i].id + "' id='completed-'" + i + ">Completed</button>");
            $("#achievements-progress-" + i).append("<br>");
        }
    });

    // Get Call for Completed
    $.get("/api/achievements/status/Completed", function (data) {
        for (var i = 0; i < data.length; i++) {
            // create a parent div for the oncoming elements
            var wellSection = $("<div>");
            // add a class to this div: 'well'
            wellSection.addClass("well");
            // add an id to the well to mark which well it is
            wellSection.attr("id", "achievements-completed-" + i);
            // append the well to the well section
            $("#well-completed").append(wellSection);



            // Now add all of the data from database

            $("#achievements-completed-" + i).append("<h2>" + data[i].name + "</h2>");
            $("#achievements-completed-" + i).append("<h3>Type: " + data[i].type + "</h3>");
            $("#achievements-completed-" + i).append("<h3>Resource Name:<a href="+data[i].resource_URL+">" + data[i].resource_name + "</a></h3>");
            $("#achievements-completed-" + i).append("<h3>Comments: " + data[i].comments + "</h3>");
            $("#achievements-completed-" + i).append("<h3>Skills Used: " + data[i].skillsA + "</h3>");
            $("#achievements-completed-" + i).append("<br>");
        }
    });
});




//FUNCTION TEST FOR GET CALLS
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
