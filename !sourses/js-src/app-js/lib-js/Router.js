window.App || (window.App={})//fix for module testing
App.Router = function (state, params) {

    switch (state) {
        case "submit":
            //must return value (Boolean) to controll form submit
            return App.Controllers.Submit.submit(params[0],params[1]);
            break;

        case "#register" :
            App.Controllers.Pages.printRegisterPageController();
            break;

        case "#userInfo" :
            //if data not loaded
            if (typeof App.userData==="undefined") window.location.hash="#login";
            else App.Controllers.Pages.printUserPageController();
            break;

        case "switchLang" :
            //switch language
            App.Controllers.Pages.switchLang();
            //re-render page
            App.Router(App.state)
            break;

        case "#login" :
            App.Controllers.Pages.printLoginPageController();
            break;

        case "#logout" :
            App.Controllers.Pages.logout();
            break;

        default: App.Controllers.Pages.printLoading();
    }

    ;
};