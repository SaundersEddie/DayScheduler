// Daily Planner using Moment API
//
// Eddie Saunders saunders.eddie@outlook.com
// 17th March 2020

// Build our variables and a list of hours related to our workday.

$(document).ready(function () {
    var workDay = [
        {
            id: "0",
            hour: "07",
            reminder: ""
        },
        {
            id: "1",
            hour: "08",
            reminder: ""
        },
        {
            id: "2",
            hour: "09",
            reminder: ""
        },
        {
            id: "3",
            hour: "10",
            reminder: ""
        },
        {
            id: "4",
            hour: "11",
            reminder: ""
        },
        {
            id: "5",
            hour: "12",
            reminder: ""
        },
        {
            id: "6",
            hour: "13",
            reminder: ""
        },
        {
            id: "7",
            hour: "14",
            reminder: ""
        },
        {
            id: "8",
            hour: "15",
            reminder: ""
        },
        {
            id: "9",
            hour: "16",
            reminder: ""
        },
        {
            id: "10",
            hour: "17",
            reminder: ""
        },
        {
            id: "11",
            hour: "18",
            reminder: ""
        },
        {
            id: "12",
            hour: "19",
            reminder: ""
        },
        {
            id: "13",
            hour: "20",
            reminder: ""
        },
        {
            id: "14",
            hour: "21",
            reminder: ""
        }
    ]

    // start screen display

    // Add in our clock, there is an update function included if we desire to have a realtime clock EXS 20th March 2020
    // For now, just display the date including day name
    $('#clock').html(moment().format('dddd Do MMM YYYY'));

    function reminderSave() {
        localStorage.setItem("workDay", JSON.stringify(workDay));
    }

    function reminderDisplay() {
        //console.log("Display our reminders");
        workDay.forEach(function (currentHour) {
            $(`#${currentHour.id}`).val(currentHour.reminder);
        })
    }

    function initializeMyDay() {
        var dayStore = JSON.parse(localStorage.getItem("workDay"));
        if (dayStore) { workDay = dayStore; }
        // console.log(dayStore);
        // console.log(workDay);
        reminderSave();
        reminderDisplay();
    }

    // Build out our table, we need to build time, event and add the save icon
    // Research shows the awesomefonts listed in the <head></head> contains an icon, we'll use that
    // This is going to be some gnarly code
    // We start by doing a loop through each of our hours in workDay
    // Then add our appropriate fields, along with the id being stored in workDay.
    workDay.forEach(function (hourNow) {
        // Create a row with a class attribute, then append it to the container
        var rowHour = $("<form>").attr({ "class": "row" })
        $(".container").append(rowHour);

        // Now create our timefield, for thise we'll create a div
        // We'll make this a MD-2 for bootstrap
        var hourField = $("<div>")
            .text(`${hourNow.hour}:00`)
            .attr({ "class": "col-md-2 hour" });

        // Create the event data, we'll create the text area and make it a MD-9 for bootstrap initially
        var planHour = $("<div>")
            .attr({ "class": "col-md-9 description p-0" });
        var hourData = $("<textarea>");
        planHour.append(hourData);
        hourData.attr("id", hourNow.id);
        // Now change the colours of the planner items based upon the current hour.
        // Try to figure this into a switch statement
        if (hourNow.hour < moment().format("HH")) {
            hourData.attr({ "class": "past", })
        } else if (hourNow.hour === moment().format("HH")) {
            hourData.attr({ "class": "present" })
        } else if (hourNow.hour > moment().format("HH")) {
            hourData.attr({ "class": "future" })
        }
        // Create our Save Button and then append everything to our row
        // Took ages to realise this was part of the fontawesome collection listed in the HTML by default.
        var saveButton = $("<i class='far fa-save fa-lg'></i>")
        var planSave = $("<button>")
            .attr({ "class": "col-md-1 saveBtn" });
        // append all our new items to the table display.
        planSave.append(saveButton);
        rowHour.append(hourField, planHour, planSave);
    })

    initializeMyDay();

    // Create an event, when we click the save button, save the data then display it

    $(".saveBtn").on("click", function (event) {
        event.preventDefault();
        console.log("Trying to save data");
        // check to see what the current hour is and if less that the current one then
        // advise cannot save to that section
        var thisHour = moment();
        console.log("Current Hour: ", thisHour.hour());
        // Here we're looking for the objects description then future then ID, this will become our index 
        // to the workDay array
        // Here we're going to catch errors on setting events to the current or prior
        // time slots
        try {
            var saveIndex = $(this).siblings(".description").children(".future").attr("id");
            console.log("Save Index: ", saveIndex);
            // this is saying goto workday item [saveIndex] and set the reminder to the clicking buttons children
            workDay[saveIndex].reminder = $(this).siblings(".description").children(".future").val();
            reminderSave();
            reminderDisplay();
        }
        catch (err) {
            alert("You cannot update current or prior time slots");
        }
    })
});
