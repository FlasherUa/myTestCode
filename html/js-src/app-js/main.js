/**
 *
 * Index page script
 *
 * Tries to load user data:
 *     1. if user is not logged - redirect to register/login
 *     2. if user logged - prints out user info page
 *
 */

typeof App !== "undefined" || (window.App = {});

+function () {

    /**
     *
     * starts application
     *
     */
    var init = function () {
        App.curLang = "EN";

        //try to get user data
        ajax.get("api", null, App.onResponse);


        window.addEventListener("hashchange", function () {
            route(window.location.hash)
        });

        route(window.location.hash)
    };

    var route = function (hash) {
        App.state = hash;
        if (typeof App.Router == "undefined") return;//we inside tests perhaps
        App.Router(App.state)
    };
    /**
     *
     * @param {Object} responce server ajax responce
     */
    var onApiLoaded = function (responce) {

    };

//start app
    window.onload = init

}
();

