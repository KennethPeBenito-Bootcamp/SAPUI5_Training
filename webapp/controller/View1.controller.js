sap.ui.define([
    "sap/ui/core/mvc/Controller"
], (Controller) => {
    "use strict";

    return Controller.extend("com.acn.training.project1.controller.View1", {
        onInit() {
        },
        onClear(){
            var oDelete= this.getView();
            oDelete.byId("input0").setValue("");
            oDelete.byId("input1").setValue("");
            oDelete.byId("input2").setValue("");
            oDelete.byId("input3").setValue("");
            oDelete.byId("input4").setValue("");
            oDelete.byId("combocount").setValue("");
        }
    });
});