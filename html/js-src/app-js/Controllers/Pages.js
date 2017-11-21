/**
 * Controllers that holds view pages  actions
 */


window.App || (window.App = {})//fix for module testing
var App = window.App
App.Controllers = {};
App.Controllers.Pages = (function () {

    /**
     * Switch language
     */
    var switchLang = function () {
        if (App.curLang === "EN") App.curLang = "UA"
        else App.curLang = "EN"
    };


    /**
     * loading state
     */
    var printLoading = function () {
        //print loading
        var loadingBlock = {"Loading": ""}
        printLoginPageController(loadingBlock);

    }

    /**
     * outputs register foem
     */
    var printRegisterPageController = function () {
        printLoginPageController(registerBlock())

    };

    var logout = function () {
        //server logout
        ajax.get("api/logout",null,App.onResponse)
        //reload page

    }

    /**
     * outputs login form
     */
    var printLoginPageController = function (formBlock) {

        typeof formBlock !== "undefined" || (formBlock = loginBlock())

        App.Template.out({
            //template #id
            "Page": {
                //template values
                title: lang("welcome1"),
                description: lang("descr1"),
                nextLang: lang("nextLang"),
                langHint: lang("langHint"),
                contents: {
                    //template #id
                    "First": {
                        contents: formBlock
                    }
                }
            }
        });
    };

    /**
     *
     * @return login block TemplateObj
     */
    var loginBlock = function () {
        //reduce register form model
        var loginFormModel = App.formModel = [
            App.models.user[1],//email input
            App.models.user[2]//password input
        ];

        var contents = formElements(loginFormModel);

        return {
            "FormOuter": {
                title: lang("loginForm"),
                contents: contents,
                action: "login"
            }

        }
    }


    /**
     *
     * @return login block TemplateObj
     */
    var registerBlock = function () {
        var registerFormModel = App.formModel = App.models.user;

        var contents = formElements(registerFormModel);

        return {
            "FormOuter": {
                title: lang("registerForm"),
                contents: contents,
                action: "register"
            }

        }
    }


    /**
     * Creates FORM HTML from form model
     * @param  formModel
     * @return Array of  TemplateObjects
     */
    var formElements = function (formModel) {
        var arr = [];
        for (var i = 0; i < formModel.length; i++) {
            var model = formModel[i];
            for (var key in model) {
                if (!model.hasOwnProperty(key)) continue;

                var params = model[key];

                var contents = getInput(params, key);
                var required = params[1] && params[1][0] && params[1][0] > 0 ? "*" : ""
                var tplObj = {
                    InputOuter: {
                        id: key,
                        title: key,
                        contents: contents,
                        errMsg: lang("err_" + params[0]),
                        required: required
                    }
                }

                arr.push(tplObj)
            }
        }
        return arr
    };
    /**
     * creates input by params
     * @param model
     * @return HTML or TemplateObject
     */
    var getInput = function (model, title) {
        var out;
        switch (model[0]) {
            case "file":
                out = {
                    input_file: {
                        //title: title,
                        id: title
                        //type: model[0]
                    }
                };
                break;
            //type text,email, password
            default:
                out = {
                    input_text: {
                        title: title,
                        id: title,
                        type: model[0]
                    }
                }


        }//eof switch
        return out;
    };


    /**
     * load model
     * parse element
     * parse outer container
     */
    function lang(val, group) {
        App.curLang || (App.curLang = "EN")
        return typeof App.LANGS[App.curLang][val] !== "undefined" ? App.LANGS[App.curLang][val] : val;
    }

    /**
     * @export
     */
    return {
        switchLang: switchLang,
        printLoading: printLoading,
        logout: logout,
        printLoginPageController: printLoginPageController,
        printRegisterPageController: printRegisterPageController,
        lang: lang
    };
})
();