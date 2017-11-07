/**
 *
 * Index page script
 *
 * Tries to load user data:
 *     1. if user is not logged - redirect to register/login
 *     2. if user logged - prints out user info page
 *
 */

App = {};

+function () {

    /**
     *
     * starts application
     *
     */
    var init = function () {
        //try to get user data
        ajax.get("api", onApiLoaded);

    }


    /**
     *
     * @param {Object} responce server ajax responce
     */
    var onApiLoaded = function (responce) {

        if (responce && responce.data) {
            //user is logged - show user data
            printUserPageController(responce.data)
        } else {
            //redirect to login/register page
            printLoginPageController(responce.data)

        }
    };

    /**
     * outputs user data
     * @param {Object} data
     */
     function printUserPageController (data) {


    };
    /**
     * outputs user data
     * @param {Object} data
     */
     function  printLoginPageController (data) {


    };



    /**
     * load model
     * parse element
     * parse outer container
     */


    init()

}();

