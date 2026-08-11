sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/ui/model/json/JSONModel',
    'sap/m/Menu',
    'sap/m/MenuItem',
    'sap/m/MessageToast',
    '../model/TreeData'
], (Controller, JSONModel, Menu, MenuItem, MessageToast, TreeData) => {
    "use strict";

    return Controller.extend("zspacemanager.controller.Home", {
        onInit() {
            var oModel = new JSONModel(TreeData.getTreeData());
            this.getView().setModel(oModel);
        },

        onNavigateItemPress: async function (oEvent) {
            const oTile = oEvent.getSource();
            const oContext = oTile.getBindingContext();
            const oData = oContext.getObject();

            // oData => { text: "Process Management", ref: "...", semantic_object: "ProcessManagement" }
            await this.navigateToPage(oData);
        },

        navigateToPage: async function (oData) {

            window.location.href = `https://sapdev-app01.matarat.local:44300/sap/bc/ui5_ui5/sap/${oData.semantic_object}/index.html`;

        },

    });
});