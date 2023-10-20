function doGet() {
  return HtmlService.createHtmlOutputFromFile('input');
}

function processForm(form) {
  var ss = SpreadsheetApp.openById("1b-qqf3iKfd3dXr8uwOWkKAtWnblv9m0rz2Z5QTmY2Yc");
  var sheet = ss.getSheetByName("TOTALITYRECORDS2023");
  var balance1 = parseInt(form.premium) - parseInt(form.amountpaid);
  var row = [form.clientname, form.contact, form.certnumber, form.vehiclereg, form.policynumber, form.commdate, form.expdate, form.package, form.vehicletype, form.premium, form.amountpaid, balance1];
  sheet.appendRow(row);
 
  return true;
}

function createCalendarReminders() {
  var ss = SpreadsheetApp.openById("1b-qqf3iKfd3dXr8uwOWkKAtWnblv9m0rz2Z5QTmY2Yc");
  var sheet = ss.getSheetByName("TOTALITYRECORDS2023");
  var data = sheet.getDataRange().getValues();
  var calendar = CalendarApp.getDefaultCalendar();
  var reminders = {}; // Store reminders grouped by date

  for (var i = 1; i < data.length; i++) {
    var expiryDate = new Date(data[i][6]); // Expiry date is in column G, set the index accordingly
    var reminderDate = new Date(expiryDate.getTime() - (24 * 60 * 60 * 1000)); // Subtract 1 day in milliseconds
    var clientName = data[i][0]; // Client name is in column A, set the index accordingly
    var contact = data[i][1]; // Contact is in column B, set the index accordingly
    var vehReg = data[i][3]; // Vehicle Registration is in column D, set the index accordingly
    var package = data[i][7]; // Package is in column H, set the index accordingly
    var premium = data[i][9]; // Premium is in column J, set the index accordingly
    var balance = premium - data[i][10]; // Balance is premium - amount paid
    var reminderText = "Name: " + clientName + " - Contact:  0" + contact + " - VehReg: " + vehReg + " - Package:  " + package + " - Previous Premium: kshs.  " + premium + " - Outstanding Balance: kshs. " + balance;
    var reminderDay = reminderDate.toDateString();
    var expiryDay = expiryDate.toDateString();

    if (!reminders[reminderDay]) {
      reminders[reminderDay] = { expiryDay: expiryDay, reminders: [reminderText] };
    } else {
      reminders[reminderDay].reminders.push(reminderText);
    }
  }

  function formatDate(date) {
    var options = {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    };

    return date.toLocaleDateString(undefined, options);
  }

  for (var day in reminders) {
    var eventDate = new Date(day);
    var eventTitle = "Insurance expires for Tomorrow " + reminders[day].expiryDay;
    var eventDescription = reminders[day].reminders.join("\n\n"); // Join reminders with empty lines for spacing
    var eventsOnDay = calendar.getEventsForDay(eventDate);

    // Check if an event with the same title exists on the same date
    var duplicateEvent = eventsOnDay.find(function(event) {
      return event.getTitle() === eventTitle;
    });

    if (!duplicateEvent) {
      calendar.createAllDayEvent(eventTitle, eventDate, { description: eventDescription });
    }
  }
}