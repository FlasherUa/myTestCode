/**
 *
 * Index page script
 *
 * Tries to load user data:
 *     1. if user is not logged - redirect to register/login
 *     2. if user logged - prints out user info page
 *
 */

typeof App!=="undefined" || (window.App={});

+function () {

    /**
     *
     * starts application
     *
     */
    var init = function () {
        App.curLang = "EN";

        //try to get user data
        ajax.get("api", null, onApiLoaded);


        window.addEventListener("hashchange", function () {
            route(window.location.hash)
        });

        route(window.location.hash)
    };

    var route = function (hash) {
        App.state = hash;
        if (typeof App.Router=="undefined") return;//we inside tests perhaps
        App.Router(App.state)
    };
    /**
     *
     * @param {Object} responce server ajax responce
     */
    var onApiLoaded = function (responce) {
        if (responce=== "NOT FOUND") return
        try {
            var data = JSON.parse(responce);
        } catch (e) {
            console.error(e);
            return
        }


        if (typeof data.notLogged === "undefined") {
            //user is logged - show user data
            App.userData = data;
            window.location.hash = "#userInfo"
        } else {
            //redirect to login/register page
            window.location.hash = "#login"

        }
    };


    init()

}
();

