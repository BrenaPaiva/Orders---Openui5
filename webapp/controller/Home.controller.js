sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/ui/model/json/JSONModel",
	"../model/formatter"
], function(Controller, JSONModel, Formatter) {
	"use strict";

	return Controller.extend("sap.ui.demo.basicTemplate.controller.Home", {

		formatter: Formatter,

		onInit: function () {

			//create a date object
			// var oData = {
			// 	"title": "My orders",
			// 	"SalesOrderSet": [{
			// 		"SalesOrderID": "0001",
			// 		"CustomerName": "Apple",
			// 		"LifecycleStatusDescription": "Completed",
			// 		"LifecycleStatus": "Success",
			// 		"GrossAmount": "199",
			// 		"CurrencyCode": "USD"
			// 	  }, {
			// 		"SalesOrderID": "0002",
			// 		"CustomerName": "Google",
			// 		"LifecycleStatusDescription": "Completed",
			// 		"LifecycleStatus": "Success",
			// 		"GrossAmount": "277",
			// 		"CurrencyCode": "USD"
			// 	  }, {
			// 		"SalesOrderID": "0003",
			// 		"CustomerName": "Amazon",
			// 		"LifecycleStatusDescription": "Error",
			// 		"LifecycleStatus": "Error",
			// 		"GrossAmount": "599",
			// 		"CurrencyCode": "USD"
			// 	  }]
			// 	}
			// //JSONModel instance
			// var oModel = new JSONModel(oData);
			// //ESTE É UM EXEMPLO DE QUE QUAQUER ALTERAÇÃO REFLETIDA NA MINHA MODEL NÃO RETORNARÁ NOVAMENTE POR SER UMA LIGAÇÃO UNILATERAL.
			// oModel.setDefaultBindingMode("OneWay");
			// //Assign the model to view
			// this.getView().setModel(oModel);
		},
		onExit: function () {
			// alert("onExit called");
		},
		onBeforeRendering: function () {
			// alert("onBeforeRendering called");
		},
		onAfterRendering: function () {
			// alert("onAfterRendering called");
		},
		onGroup: function () {
			alert("onGroup called");
			this.getView().destroy();
		},
		onSort: function () {
			alert("onSort called");
		},
		onSearch: function () {
			alert("onSearch called");
		}
	
	});
});