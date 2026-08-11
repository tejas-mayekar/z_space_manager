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
                            semantic_object: "hrpy_pcc_proc_3"
                        },
                        {
                            text: "Off-Cycle Payroll",
                            ref: "sap-icon://folder",
                            semantic_object: "hrpy_pcc_errm_2"
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
                            semantic_object: "hrpy_pcc_em_t_2"
                        },
                        {
                            text: "Alert Management",
                            ref: "sap-icon://accept",
                            semantic_object: "hrpy_pcc_al_2"
                        },
                        {
                            text: "Team Alerts",
                            ref: "sap-icon://accept",
                            semantic_object: "hrpy_pcc_oc_1"
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
                            semantic_object: "hrpy_pcc_conf_2"
                        },
                        {
                            text: "Process Configuration",
                            ref: "sap-icon://appointment",
                            semantic_object: "hrpy_pcc_conf_1"
                        },
                        {
                            text: "Team Configuration",
                            ref: "sap-icon://appointment",
                            semantic_object: "hrpy_pcc_tm_1"
                        },
                        {
                            text: "Team Management",
                            ref: "sap-icon://appointment",
                            semantic_object: "hrpy_pcc_mc_1"
                        }
                    ]
                }
            ];
        }
    };
});
