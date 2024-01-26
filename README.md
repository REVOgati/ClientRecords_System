# Building a System to store records of Clients for an Insurance Agency.
# Involves AUTOMATION - as it records data to database, it sends reminders to google calendar based on the expiry dates of client's subscription.


    # Brief description of project

- The System has several segments : both Frontend and Backend
- In the front end, a client's data is input .
- This data is then sent to get stored in database. - Database is Google Sheets as it does not involve numerous entries nor intensive data manipulation.

- The system also automatically sends a reminder to administrator's calender on expiring subscriptions based on the column on expirydate.
- Use of HTML ,CSS and Javascript for Frontend and Javascript for backend.
- Use of APIs to connect frontend page and button to Google Calendar.
- System workability tested and is being actively used today.

## Table of Contents

 *  frontend.html ; This file has :
        - HTML code used to build user-interface for data input.
        - CSS code for designing the web page
        - Javascript code responsible for responsiveness on the frontend side.

 *  backend.js ; This file has :
 		- Javascript code that sends the input data to the google sheets for storage
 		- Javascript code to send reminder to Google calendar based on the column 'expiryDate' directly from data input at user-interface , i.e AUTOMATION
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Setup

 * The system is implemented over a Web Browser.
 * Open link with Phoenix Browser. Thereafter, you can set a shortcut to Mobile homepage or desktop for PC users. This ensures ease of access to web page by system users.

## Usage

 * The data of clients is input via the user-interface accessible via weblink.
 * The submit button, when clicked, does two things :
         - Sends client record to linked Googlesheets document.
         - Sends reminder to Google calendar based of the data in the  "expiryDate" column, whereby, it sends the reminder to a date that is a day before the actual expiry date. This gives a 24hr window before expiry of Client's insurance plan to get reminded by operating staff to renew their Insurance.

## Contributing

* Any changes have to be approved.
* One can branch the project and perform necessary manipulations, then submit commit and push requests.
* You are welcome to contribute on the objective set in the next topic below - "Intended Next Phase".

## Intended Next Phase
 * They system creates a file with records. Next phase would be to intergrate the googlesheets with Tableau that creates specified visualizations using live incoming data.

 * 
## License

This project is licensed under the [License Name](LICENSE). N/B : This Licence part is currently a placeholder. Though, it makes the README look beautiful.
