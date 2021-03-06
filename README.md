## Day Scheduler

Create a simple calendar application that allows the user to save events for each hour of the day. This app will run in the browser and feature dynamically updated HTML and CSS powered by jQuery.

## User Story

```
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively
```

## Acceptance Criteria

```
GIVEN I am using a daily planner to create a schedule
WHEN I open the planner
THEN the current day is displayed at the top of the calendar
WHEN I scroll down
THEN I am presented with timeblocks for standard business hours
WHEN I view the timeblocks for that day
THEN each timeblock is color coded to indicate whether it is in the past, present, or future
WHEN I click into a timeblock
THEN I can enter an event
WHEN I click the save button for that timeblock
THEN the text for that event is saved in local storage
WHEN I refresh the page
THEN the saved events persist
```

## Current Build Status
Version 1: 20th March 2020 Initial testing build<br/>
Version 1.1: 21st March 2020: Resolution of multiple bugs<br/>
Version 1.2: 31st March 2020: Code to prevent user from saving items in current or previous slot.<br/>
Version 1.2: 1st April 2020: Appears to be an intermittent bug in the save function, implementing try/catch to see if it works <br/>

## Code
This was developed with HTML5, CSS3, Javascript, JQuery, fontawesome and moment.js utilizing Visual Studio Code
Repository can be found on the following githb
https://github.com/SaundersEddie/DayScheduler

## Usage
https://saunderseddie.github.io/DayScheduler/index.html

## Credits
fontawesome - https://www.fontawesome.com <br/>
moment.js - https://momentjs.com/ <br/>
Code study session - Richard Kessler, Shiva, Travis Cultreri, Yalmar Mairena

## Results
Code works as planned, and has passed testing.
