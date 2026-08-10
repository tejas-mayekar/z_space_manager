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
            if (!oData || !oData.semantic_object) {
                MessageToast.show("No semantic object configured for this item.");
                return;
            }
            try {
                const Navigation = await sap.ushell.Container.getServiceAsync("Navigation");
                const sHref = await Navigation.getHref({
                    target: {
                        semanticObject: oData.semantic_object,
                        action: oData.action || "display"
                    }
                });
                if (!sHref) {
                    MessageToast.show("No target app found for " + oData.semantic_object);
                    return;
                }
                window.location.hash = sHref;
            } catch (e) {
                MessageToast.show("Navigation failed: " + e.message);
            }
        }
    });
});