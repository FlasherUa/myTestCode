/**
 * Controllers that holds submit & validate actions
 */
window.App || (window.App = {})//fix for module testing

App.Controllers.Submit = (function () {
    var submit = function (form, action) {
        clearAllErrors(form);

        var errors = validateForm(form);

        if (errors !== false) {
            addFormErrors(errors.errors)

        }

        submitForm(form, action);

        return false;
    };


    var submitForm = function (form, action) {
        var data = new FormData(form);

        ajax.post("api/" + action, data, App.onResponse, false);
    }



    /**
     * Sends form data to validate using model
     * @param form
     * @return {Boolean|Object} errors object or false if none
     */
    var validateForm = function (form) {
        //get model
        //get data
        var formData = getFormData(form);

        return App.Validate.validateForm(formData, App.formModel)
    };
    /**
     * collects form data
     * @param form DOMElement
     * @return {{}} form data
     */
    var getFormData = function (form) {

        var postData = {};
        var formElements = form.elements;
        for (var i = 0; i < formElements.length; i++)
            if (formElements[i].type !== "submit")//we dont want to include the submit-buttom
                postData[formElements[i].name] = formElements[i].value;
        return postData
    };

    /**
     * adds errors to fields
     * @param errors
     */
    var addFormErrors = function (errors) {
        for (var i = 0; i < errors.length; i++) {
            var err = errors[i];
            addFieldError(err[1], err[0])

        }

    };

    var addFieldError = function (fieldName, error) {
        var el = document.getElementById("container_" + fieldName);
        el.classList.add("alert")
        el.classList.add("alert-danger")
    };
    /**
     * hide all errors from form elements
     * @param form
     */
    var clearAllErrors = function (form) {
        var fields = form.getElementsByClassName("alert");

        while (true) {

            if (typeof fields[0] === "undefined") return;
            fields[0].classList.remove("alert-danger");
            fields[0].classList.remove("alert")

        }

    }


    /**
     * @exports
     */
    return {submit: submit, addFormErrors: addFormErrors}
})();