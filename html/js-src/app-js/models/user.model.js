/**
 * User Data model
 *
 * List of data fields in format: { English_Name: [data type, validate params] }
 *
 * @used both by Client (js) & Server (php)
 *
 * JSON START - marker for php to get clean JSON string, from this javascript file
 * @type {Array}
 * */
window.App || (window.App={})//fix for module testing
var App  =window.App

App.models = {};
App.models.user =//JSON START
    [
        {"Name": ["text", [3, 50]]},
        {"Email": ["email", [5, 50]]},
        {"Password": ["password", [5, 25]]},
        {"Repeat Password": ["password", [8, 25]]},
        {"Phone": ["text", [5, 20]]},
        {"Country": ["text", [0, 25]]},
        {"City": ["text", [0, 25]]},
        {"Photo": ["file", [0]]}

    ]


