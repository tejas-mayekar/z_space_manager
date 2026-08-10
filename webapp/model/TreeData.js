sap.ui.define([], function () {
    "use strict";

    return {
        getTreeData: function () {
            return [
                {
                    text: "Payroll Operation",
                    ref: "sap-icon://folder-full",
                    nodes: [
                        {
                            text: "Process Management",
                            ref: "sap-icon://document-text",
                            semantic_object: "processManagement"
                        },
                        {
                            text: "	Off-Cycle Payroll",
                            ref: "sap-icon://folder",
                            semantic_object: "offCycle"
                        }
                    ]
                },
                {
                    text: "Payroll Obervation",
                    ref: "sap-icon://document",
                    nodes: [
                        {
                            text: "Audit Trial",
                            ref: "sap-icon://accept",
                            semantic_object: "auditTrail"
                        },
                        {
                            text: "	Alert Management",
                            ref: "sap-icon://accept",
                            semantic_object: "alertManagement"
                        },
                        {
                            text: "Team Alerts",
                            ref: "sap-icon://accept",
                            semantic_object: "teamAlerts"
                        }
                    ]
                },
                {
                    text: "Payroll Administration",
                    ref: "sap-icon://calendar",
                    nodes: [
                        {
                            text: "Policy Configuration",
                            ref: "sap-icon://appointment",
                            semantic_object: "configurePolicy"
                        },
                        {
                            text: "Process Configuration",
                            ref: "sap-icon://appointment",
                            semantic_object: "configureProcess"
                        },
                        {
                            text: "Team Configuration",
                            ref: "sap-icon://appointment",
                            semantic_object: "teamConfiguration"
                        },
                        {
                            text: "Team Management",
                            ref: "sap-icon://appointment",
                            semantic_object: "teamManagement"
                        }
                    ]
                }
            ];
        }
    };
});
