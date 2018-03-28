var { google } = require('googleapis');

//getting service account infos
let privatekey = require("./mainserviceaccount.json");
//let privatekey = require("./serviceaccount.json")

let jwtClient = new google.auth.JWT(
    privatekey.client_email,
    null,
    privatekey.private_key,
    ['https://www.googleapis.com/auth/spreadsheets',
        'https://www.googleapis.com/auth/drive',
    ]);

//authenticate request
jwtClient.authorize(function (err, tokens) {
    if (err) {
        console.log(err);
        return;
    } else {
        console.log("Successfully connected!");
    }
});


// Id of the google sheet 

//A private google sheet
var id = "1nQSH7koEA6WVpVbfLFcvMSHEuPpRTgeP0JCRo40dnuY"

//A Dev google sheet
var id_dev = "1c4w5pz6k9fEt7KdzyRjjMNy_6sC9Re1TVOxNkzcJQXk"
let spreadsheetId = id;
//let spreadsheetId = id_dev;
let sheetName = 'Sheet1'
let sheets = google.sheets('v4');
let range = "Sheet1";

//Reading data from sheet: 
sheets.spreadsheets.values.get({
   auth: jwtClient,
   spreadsheetId: spreadsheetId,
   range: sheetName
}, function (err, response) {
   if (err) {
       console.log('The API returned an error: ' + err);
   } else {
       console.log('Movie list from Google Sheets:');
        console.log(response.data.values)
   }
});

//Entering some dummy values:
var values = [
    [
        "time-----",
        "name",
        "email",
        "address",
        "phone",
        "comments",
    ],
   
];

var body = {
    values: values
};
sheets.spreadsheets.values.append({
    auth: jwtClient,
    spreadsheetId: spreadsheetId,
    range: range,
    valueInputOption: "RAW",
    resource: body
}, function (err, result) {
    if (err) {
        // Handle error
        console.log(err);
    } else {
        console.log('%d cells updated.', result.updatedCells);
    }
});
