'use strict';

export default class TableCashFlowModalController{
	constructor($mdDialog, typeCategory, dataService, authStorageService){
		'ngInject';

		this.$mdDialog = $mdDialog;
		this.service = dataService;
		this.authService = authStorageService;
		this.user = authStorageService.getToken();
		this.typeCategory = typeCategory;

		this.history = {
			date: new Date()
		};

		this.category = {
			categoryType: this.typeCategory
		};
		this.selectedCategory = '';
	}

	close() {
	    this.$mdDialog.cancel();
	}

}