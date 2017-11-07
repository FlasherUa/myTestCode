/**
 * validation helper
 *
 * use:
 * App.validate({form data}, {data model} )
 *
 */

App.validate = (function () {


    /**
     * do form validation
     * @param {Object} data form values
     * @param {Object} model fields data
     *
     * @return {Boolean|Object} true if validated or errors object
     */
    var validateForm = function (data, model) {
        var n = model.length;
        for (var i = 0; i < n; i++) {


        }

    };

    var validateField = function (value, fieldModel) {


    };

    /**
     * Set of
     * @type {{text: text, email: email, phone: phone}}
     */
    var Validator = {
        /**
         *
         * @param {String} text
         * @param {Array} params [minLength, MaxLength]
         *
         * @return {Boolean|Object} TRUE if validated, Error {object} if not
         */
        text: function (text, params) {
            if (!params) return true;

            //check min length
            if (typeof params[0] !== "undefined" && params[0] > 0 && text.length < params[0]) {
                var message = params[0] === 0 ? "isRequired" : "tooShort";
                return {"err": message, data: params[0]}
            }
            //check max len
            if (params[1] && params[1] > 0 && text.length > params[1]) return {"err": "tooLong", data: params[1]}

            return true;
        },
        /**
         * Validate Email
         * @param text
         * @param params
         * @return {Boolean|Object} TRUE if validated, Error {object} if not
         */
        email: function (text, params) {

            var validAsText = Validator.text(text, params);
            if (validAsText !== true) return validAsText;

            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var validAsEmail = re.test(text);

            if (!validAsEmail) {
                return {err: "badEmail"}
            }

            return true
        },
        /**
         * Validate phone number
         * @param text
         * @param params
         * @return {Boolean|Object} TRUE if validated, Error {object} if not
         */
        phone: function (text, params) {

            var validAsText = Validator.text(text, params);
            if (validAsText !== true) return validAsText;


            var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
            var validAsPhone = re.test(text);
            if (!validAsPhone) {
                return {err: "badPhone"}
            }
            return true
        }


    }

    /**
     * @exports
     */
    return {field: validateField, form: validateForm}

})()