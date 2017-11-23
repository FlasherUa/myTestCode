App.helpers = (function () {


    /**
     * Converts object {errors:[]}
     * into array ["errors",[]}
     * @param obj
     * @return {*[]}
     */
    var key = function (obj) {
        for (var key in obj) {
            if (!obj.hasOwnProperty(key)) continue;

            return key;
        }


    }


    var getResponse = function (responce) {
        if (responce === "NOT FOUND") return false
        try {
            var data = JSON.parse(responce);
        } catch (e) {
            console.error(e);
            return false
        }

        return data

    }

    return {
        key: key,
        getResponse: getResponse
    }


})()
