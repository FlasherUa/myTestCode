App.onResponse = (function () {


    /**
     *
     * Universal server responce gate
     * parsess all possible answers
     *
     *  - form on sumbit handler
     *  - init() ajax handler
     *
     * responses:
     * {"errors":[["emailExists",""]]}
     * {"registered":{USEr data}}
     * {"errors":[["noValue","Repeat Password"]]}
     * {"notLogged":null}
     *
     *
     */
    var onResponse = function (response) {
        var data = App.helpers.getResponse(response);
        if (!data) return;

        var key = App.helpers.key(data);

        //on response type
        switch (key) {

            //redirect to login/register page
            case "notLogged":
                if (App.state !=="#register" && App.state !=="#login" ) doRoute("#login");
                break;

            //server found errors - show to  user
            case "errors":
                App.Controllers.Submit.clearAllErrors()
                App.Controllers.Submit.addFormErrors(data[key])
                break;

            //user is registered & logged - show user data
            case "registered":
            //user is logged - show user data
            case "logged":
                App.userData = data[key];
                doRoute("#userInfo")
                break;

        }
    }

    /**
     * route helper
     * @param hash
     */
    var doRoute = function (hash) {
        if (window.location.hash !== hash) window.location.hash = hash
        else App.Router(hash)
    }

    return onResponse;


})()