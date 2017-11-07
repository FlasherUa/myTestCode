Window.App || (Window.App={})
var App=Window.App
App.template = (function () {

    /**
     * render template with data
     *
     * @param {String} tpl
     * @param {Object} data
     * @returns {String} HTML
     *
     */
    function templateParse(tpl, data) {
        var re = /<%([^%>]+)?%>/g, match;
        while (match = re.exec(tpl)) {
            /*replaces <%Key%> with data.Key
            * if data.Key is undefined put "Key"
            */
            var value = data[match[1]];
            var replace = typeof value !== "undefined" ? value : match[1];
            tpl = tpl.replace(match[0], replace);
        }
        return tpl;
    }


})()