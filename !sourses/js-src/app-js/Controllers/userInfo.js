//window.App || (window.App = {})//fix for module testing
//var App = window.App
//App.Controllers = {};
App.Controllers.Pages.printUserPageController = (function () {
    var lang = App.Controllers.Pages.lang;

    /**
     * outputs user data
     * @param {Object} data
     */
    var printUserPageController = function () {
        var userData = App.userData;

        App.Template.out({
            //template #id
            "Page": {
                //template values
                title: lang("welcome2") + userData.Name + "!",
                description: lang("descr1"),
                nextLang: lang("nextLang"),
                langHint: lang("langHint"),

                contents: {
                    //template #id
                    "Logged": {
                        Name: userData.Name,
                        contents: getUserInfoBlock(userData)

                    }
                }
            }
        });
    };


    var getUserInfoBlock = function (userData) {
        var model = App.models.user

        return {
            userInfo: {
                contents: infoElements(model, userData)
            }
        }
    };


    var infoElements = function (infoModel, userData) {
        var arr = [];
        for (var i = 0; i < infoModel.length; i++) {
            var model = infoModel[i];
            var key = App.helpers.key(model);

            var params = model[key];
            var value = userData[key]
            //skip non-existing fields
            if (typeof value === "undefined") continue;

            var contents = getFieldView(params, key, value);
            var tplObj = {
                userInfo_field: {
                    title: key,
                    contents: contents,
                }
            };

            arr.push(tplObj)

        }
        return arr
    };

    var getFieldView = function (model, title, value) {
        var out;

        var val = {contents: value};
        switch (model[0]) {
            case "file":

                if (value == "") out = {userInfo_field_photo_not: val};
                else out = {userInfo_field_photo: val};
                break;

            case "email":
                out = {userInfo_field_email: val};

                break;



            //type text
            default:
                out = {userInfo_field_default: val};


        }
        return out;
    };


    return printUserPageController
})()