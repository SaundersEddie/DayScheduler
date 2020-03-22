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
            reminder: "07:00"
        },
        {
            id: "1",
            hour: "08",
            reminder: "08:00"
        },
        {
            id: "2",
            hour: "09",
            reminder: "09:00"
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
        }
    ]

    // start screen display

    // Add in our clock, there is an update function included if we desire to have a realtime clock EXS 20th March 2020
    // For now, just display the date including day name
    $('#clock').html(moment().format('dddd Do MMM YYYY'));

    // function update() {
    //         //$('#clock').html(moment().format('dddd Do MMM YYYY HH:mm'));
    //         // if we just want to display the date wikth no clock update we can do the following, and remove tghe setInterval later on
    //         $('#clock').html(moment().format('dddd Do MMM YYYY'));
    // }
    // // setInterval(update, 1000);

    function reminderSave() {
        console.log("Saving our reminder");
        localStorage.setItem("workDay", JSON.stringify(workDay));
        console.log (JSON.stringify(workDay))
    }

    function reminderDisplay() {
        //console.log("Display our reminders");
        workDay.forEach(function (currentHour) {
            $(`#${currentHour.id}`).val(currentHour.reminder);
            // console.log("Reminder Display: ", workDay);
            // console.log("Reminder currentHour: ", currentHour.id);
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
        // Here we're looking for the objects description then future then ID, this will become our index 
        // to the workDay array
        var saveIndex = $(this).siblings(".description").children(".future").attr("id");
        // this is saying goto workday item [saveIndex] and set the reminder to the clicking buttons children
        workDay[saveIndex].reminder = $(this).siblings(".description").children(".future").val();
        reminderSave();
        reminderDisplay();
    })
});
