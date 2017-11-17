describe("validateTest", function () {

    it("validate  Required", function () {


        expect(window.App).to.be.an("object")
        expect(window.App.Validate).to.be.an("object")
        expect(window.App.Validate.validateField).to.be.an("function")


    })

    it("validate Text fields ", function () {

        var validateField = window.App.Validate.validateField;

        var modelname = ["text", [5, 15]];
        var r = validateField("", modelname);
        expect(r).to.be.eq("notValid");

        r = validateField("12345678901234567890", modelname);
        expect(r).to.be.eq("notValid");

        r = validateField("nmnmnnamsm", modelname);
        expect(r).to.be.true

        modelname = ["text", [0, 15]];
        r = validateField("", modelname);
        expect(r).to.be.true;

    })

    it("validate Email fields ", function () {

        var validateField = window.App.Validate.validateField;

        var model = ["email", [5, 15]];
        var r = validateField("asdasasd", model);
        expect(r).to.be.eq("notValid");

        var r = validateField("nmnm@nna.msm", model);
        expect(r).to.be.true

    })


    it("validate Password fields ", function () {

        var validateField = window.App.Validate.validateField;

        var model = ["password", [8, 25]];
        var r = validateField("asdasasd", model);
        expect(r).to.be.eq("notValid");

        var r = validateField("asAS2", model);
        expect(r).to.be.eq("notValid");

        var r = validateField("AAsss999", model);
        expect(r).to.be.true

    })

    it("validate File fields ", function () {

        var validateField = window.App.Validate.validateField;

        var model = ["file", [0]];
        var r = validateField("asdasasd", model);
        expect(r).to.be.eq("notValid");

        r = validateField("asAS2.exe", model);
        expect(r).to.be.eq("notValid");

        r = validateField("", model);
        expect(r).to.be.true
        r = validateField("image.JpG", model);
        expect(r).to.be.true

    })


    it("validate Form ", function () {

        var validateForm = window.App.Validate.validateForm;

        var model = [
            {"Name": ["text", [5, 15]]},
            {"Email": ["email", [5, 55]]},
            {"Password": ["password", [8, 25]]},
            {"Repeat Password": ["password", [8, 25]]},
            {"Country": ["text", [0, 15]]},
            {"Photo": ["file", [0]]}

        ];
        var data ={Name:"Serick",
            "Email":"asdasd@adsas.sss"}


        var r = validateForm(data, model);

        expect(r.errors).to.be.an("Array");

        data["Repeat Password"]=data["Password"]="WWeeRR33"

        r = validateForm(data, model);
        //console.log(r.errors)
        //expect(r.errors).to.be.an("Array");
        expect(r).to.be.false

    })

});