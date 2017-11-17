//var $=require("jquery")

describe("ControllerTest", function () {

    it("Controller  Required", function () {


        expect(window.App).to.be.an("object")
        // console.log(window.App)
        expect(window.App.Controllers).to.be.an("object")
        expect(window.App.Controllers.Pages.switchLang).to.be.an("function")


    })

    it("Controller  printLoginPageController", function () {

        var mainDiv = document.createElement("div")
        mainDiv.setAttribute("id", "main");
        document.body.appendChild(mainDiv);
//console.log(document.body)
        window.App.Controllers.Pages.printLoginPageController()


        var w = mainDiv.querySelector("form");
       // console.log(  document.body)
        expect(w > 0).to.be.false


    })

});