/**
 * User Data model
 *
 * List of data fields in format: { English_Name: [data type, validate params] }
 *
 * @used both by Client (js) & Server (php)
 *
 * //JSON START - marker for php to get clean JSON string, from this javascript file
 * @type {Array}
 * */
App.userModel =//JSON START
    [
        {"Name": ["text", [5, 15]]},
        {"Email": ["email", [5, 15]]},
        {"Password": ["password", [8, 25]]},
        {"Repeat Password ": ["password", [8, 25]]},
        {"Phone": ["text", [5, 15]]},
        {"Country": ["text", [0, 15]]},
        {"City": ["text", [0, 15]]},
        {"Photo": ["file", [0]]}

    ]


