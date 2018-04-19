const request = require('request');
const url = "https://demo.uipath.com/api/Account/Authenticate";
const url2 = "https://demo.uipath.com/odata/Queues/UiPathODataSvc.AddQueueItem";
const env = require('./env.json')
var token = ""

module.exports = function(params) {
    request.post(url, { form: { "tenancyName": env.tenancy, "usernameOrEmailAddress": env.mail, "password": env.pass } },
        function optionalCallback(err, httpResponse, body) {
            if (err) {
                return console.error('upload failed:', err);
            }
            b = JSON.parse(body)
            token = b.result;
            addItem(params, token)
        })
}

function addItem(params , token) {
    var auth = "Bearer " + token
    var Headers = {
        'Content-Type': 'Application/json',
        'Authorization': auth,
    };

    var body = {
        "itemData": {
            "Priority": "High",
            "DeferDate": "2018-03-21T13:42:27.654Z",
            "DueDate": "2018-03-25T13:42:27.654Z",
            "Name": "test1",
            "SpecificContent": {
                "companyName": params["company"],
                "regNr": params["regNr"],
                "regCourt": params["regCourt"],
                "type": params["type"],
                "email": params["email"]
            }
        }
    }
    const options = {
        url: url2,
        method: 'POST',
        headers: Headers,
        body: JSON.stringify(body)
    }

    request.post(options, function optionalCallback(err, httpResponse, body) {
        if (err) {
            return console.error('upload failed:', err);
        }
        body = JSON.parse(body)
        console.log(body)
        console.log(httpResponse.statusCode)
    });

}




// function addItem(token) {
//    var auth = "Bearer "+ token 
//    var Headers = {'Content-Type' : 'Application/json' ,
//    'Authorization': auth,  
//    }; 

//   var bo = {
//     "itemData": {
//       "Priority": "High",
//       "DeferDate": "2018-03-21T13:42:27.654Z",
//       "DueDate": "2018-03-25T13:42:27.654Z",
//       "Name": "test1",
//       "SpecificContent": {
//         "Email@odata.type": "#String",
//         "Email": "obrian@uipath.com", 
//         "Name@odata.type": "#String",
//         "Name": "O'Brian"
//       }
//     }
//   }
//   const options = {
//      url: url2,
//      method: 'POST',
//      headers: Headers,
//      body: JSON.stringify(bo)
//     }

//   request.post(options , function optionalCallback(err, httpResponse, body) {
//        if (err) {
//          return console.error('upload failed:', err);
//        }
//        body = JSON.parse(body)
//       console.log(body)
//       console.log(httpResponse.statusCode)
//      });
//     }

