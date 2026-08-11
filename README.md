## Application Details
|               |
| ------------- |
|**Generation Date and Time**<br>Mon Aug 10 2026 12:15:57 GMT+0530 (India Standard Time)|
|**App Generator**<br>SAP Fiori Application Generator|
|**App Generator Version**<br>1.24.0|
|**Generation Platform**<br>Visual Studio Code|
|**Template Used**<br>Basic|
|**Service Type**<br>None|
|**Service URL**<br>N/A|
|**Module Name**<br>z_space_manager|
|**Application Title**<br>Space Manager|
|**Namespace**<br>|
|**UI5 Theme**<br>sap_horizon|
|**UI5 Version**<br>1.151.0|
|**Enable TypeScript**<br>False|
|**Add Eslint configuration**<br>True, see https://www.npmjs.com/package/@sap-ux/eslint-plugin-fiori-tools#rules for the eslint rules.|

## z_space_manager

An SAP Fiori application.

### Starting the generated app

-   This app has been generated using the SAP Fiori tools - App Generator, as part of the SAP Fiori tools suite.  To launch the generated application, run the following from the generated application root folder:

```
    npm start
```

#### Pre-requisites:

1. Active NodeJS LTS (Long Term Support) version and associated supported NPM version.  (See https://nodejs.org)


<mvc:View controllerName="WWW.ZHR_ALL_APPS.COMZHR_ALL_APPS.controller.Main" xmlns:mvc="sap.ui.core.mvc" xmlns="sap.m"
	xmlns:core="sap.ui.core" displayBlock="true">
	<App class="bgApp">
		<pages>
			<Page class="mainPage">
				<content>
					<!-- HERO HEADER -->
					<HBox class="heroHeader" justifyContent="SpaceBetween" alignItems="Center">
						<!-- LEFT: HERO TEXT -->
						<VBox class="heroTextBox">
							<Text text="Payroll Workbench" class="heroTitle"/>
							<!--<Text text="Quick access to core HR applications designed to simplify daily operations and improve productivity." class="heroText"/>-->
						</VBox>
						<!-- RIGHT: LOGO -->
						<VBox class="heroLogoBox">
							<VBox class="appLogo"></VBox>
						</VBox>
					</HBox>
					<!-- LINK LIST -->
					<VBox class="linkContainer">
						<CustomListItem type="Active" class="appLink" press="onTilePress1">
							<HBox>
								<Text text="1." class="linkNumber"/>
								<core:Icon src="sap-icon://travel-expense" class="linkIcon"/>
								<VBox class="linkTextBox">
									<Text text="Payroll Control Record" class="linkTitle"/>
									<Text text="PA03" class="linkSubText"/>
								</VBox>
								<core:Icon src="sap-icon://navigation-right-arrow" class="linkArrow"/>
							</HBox>
						</CustomListItem>
						<CustomListItem type="Active" class="appLink" press="onTilePress2">
							<HBox >
								<Text text="2." class="linkNumber"/>
								<core:Icon src="sap-icon://travel-itinerary" class="linkIcon"/>
								<VBox class="linkTextBox">
									<Text text="Payroll Calculation KSA" class="linkTitle"/>
									<Text text="PC00_M24_CALC" class="linkSubText"/>
								</VBox>
								<core:Icon src="sap-icon://navigation-right-arrow" class="linkArrow"/>
							</HBox>
						</CustomListItem>
						<CustomListItem type="Active" class="appLink" press="onTilePress3">
							<HBox>
								<Text text="3." class="linkNumber"/>
								<core:Icon src="sap-icon://employee" class="linkIcon"/>
								<VBox class="linkTextBox">
									<Text text="Payroll reports Hub" class="linkTitle"/>
									<Text text="ZHR_DA_PAYREPORT" class="linkSubText"/>
								</VBox>
								<core:Icon src="sap-icon://navigation-right-arrow" class="linkArrow"/>
							</HBox>
						</CustomListItem>
						<CustomListItem type="Active" class="appLink" press="onTilePress4">
							<HBox>
								<Text text="4." class="linkNumber"/>
								<core:Icon src="sap-icon://calendar" class="linkIcon"/>
								<VBox class="linkTextBox">
									<Text text="Create Posting Run" class="linkTitle"/>
									<Text text="PC00_M99_CIPE" class="linkSubText"/>
								</VBox>
								<core:Icon src="sap-icon://navigation-right-arrow" class="linkArrow"/>
							</HBox>
						</CustomListItem>
						<CustomListItem type="Active" class="appLink" press="onTilePress5">
							<HBox>
								<Text text="5." class="linkNumber"/>
								<core:Icon src="sap-icon://money-bills" class="linkIcon"/>
								<VBox class="linkTextBox">
									<Text text="Edit posting runs" class="linkTitle"/>
									<Text text="PCP0" class="linkSubText"/>
								</VBox>
								<core:Icon src="sap-icon://navigation-right-arrow" class="linkArrow"/>
							</HBox>
						</CustomListItem>
						<CustomListItem type="Active" class="appLink" press="onTilePress6">
							<HBox>
								<Text text="6." class="linkNumber"/>
								<core:Icon src="sap-icon://time-entry-request" class="linkIcon"/>
								<VBox class="linkTextBox">
									<Text text="Bank transfer pre. DME KSA" class="linkTitle"/>
									<Text text="PC00_M24_CDTA" class="linkSubText"/>
								</VBox>
								<core:Icon src="sap-icon://navigation-right-arrow" class="linkArrow"/>
							</HBox>
						</CustomListItem>
						<CustomListItem type="Active" class="appLink" press="onTilePress7">
							<HBox>
								<Text text="7." class="linkNumber"/>
								<core:Icon src="sap-icon://customer-and-contacts" class="linkIcon"/>
								<VBox class="linkTextBox">
									<Text text="Payslip Mailer" class="linkTitle"/>
									<Text text="ZHR_DA_PAYMAIL" class="linkSubText"/>
								</VBox>
								<core:Icon src="sap-icon://navigation-right-arrow" class="linkArrow"/>
							</HBox>
						</CustomListItem>
					</VBox>
				</content>
			</Page>
		</pages>
	</App>
</mvc:View>