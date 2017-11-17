/**
 * validation helper
 *
 * use:
 * App.validate({form data}, {data model} )
 *
 */

App.Validate = (function () {


    /**
     * do form validation
     * @param {Object} data form values
     * @param {Object} model fields data
     *
     * @return {Boolean|Object} true if validated or errors object
     */
    var validateForm = function (data, model) {
        var n = model.length,
            errors = [];
        //iterate models array
        for (var i = 0; i < n; i++) {
            var fieldModel = model[i];

            for (var key in fieldModel) {
                if (!fieldModel.hasOwnProperty(key)) continue;

                var itemValue = typeof  data[key] !== "undefined" ? data[key] : "";

                var errCode = validateField(itemValue, fieldModel[key])
                if (key === "Repeat Password" && data[key] !== data['Password']) errCode = true

                if (errCode !== true) errors.push([errCode, key]);
            }

        }

        if (errors.length > 0) return {errors: errors}
        return false

    };
    /**
     *
     * @param value input field value
     * @param fieldModel input field model["typeName",params]
     * @return String|Boolean "ErrorCode"
     */
    var validateField = function (value, fieldModel) {
        var type = fieldModel[0],
            out = false;
        if (typeof Validator[type] !== "undefined") out = Validator[type](value, fieldModel[1]);
        return out;
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
         * @return {Boolean|String} TRUE if validated, ErrorCode if not
         */
        text: function (text, params) {
            if (!params) return true;

            //check min length
            if (typeof params[0] !== "undefined" && params[0] > 0 && text.length < params[0]) {
                return "notValid";

            }
            //check max len
            if (params[1] && params[1] > 0 && text.length > params[1]) return "notValid";

            return true;
        },
        /**
         * Validate Email
         * @param text
         * @param params
         * @return {Boolean|String} TRUE if validated, ErrorCode if not
         */
        email: function (text, params) {

            var validAsText = Validator.text(text, params);
            if (validAsText !== true) return validAsText;

            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            var validAsEmail = re.test(text);

            if (!validAsEmail) {
                return "notValid"
            }

            return true
        },
        /**
         * Validate phone number
         * @param text
         * @param params
         * @return {Boolean|String} TRUE if validated, ErrorCode  if not
         */
        phone: function (text, params) {

            var validAsText = Validator.text(text, params);
            if (validAsText !== true) return validAsText;


            var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im
            var validAsPhone = re.test(text);
            if (!validAsPhone) {
                return "notValid"
            }
            return true
        },
        /**
         * Validate password
         * @param text
         * @param params
         * @return {Boolean|String} TRUE if validated, ErrorCode  if not
         */
        password: function (text, params) {

            var validAsText = Validator.text(text, params);
            if (validAsText !== true) return validAsText;


            var re1 = /[0-9]/, re2 = /[a-z]/, re3 = /[A-Z]/;

            var valid = re1.test(text) && re2.test(text) && re3.test(text);
            if (!valid) {
                return "notValid"
            }
            return true
        },
        /**
         * Validate password
         * @param text
         * @param params
         * @return {Boolean|String} TRUE if validated, ErrorCode  if not
         */
        file: function (filename, params) {
            var ext = filename.split('.').pop();
            ext = ext.toLowerCase();
            if (filename && ["jpeg", "jpg", "gif", "png"].indexOf(ext) === -1) {
                return "notValid";
            }

            return true
        }


    };

    /**
     * @exports
     */
    return {validateField: validateField, validateForm: validateForm}

})()