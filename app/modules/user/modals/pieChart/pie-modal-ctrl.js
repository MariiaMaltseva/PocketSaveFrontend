'use strict';

export default class PieModalController{
	constructor($mdDialog, dataService, authStorageService){
		'ngInject';

		this.$mdDialog = $mdDialog;
		this.service = dataService;
		this.authService = authStorageService;
		this.user = authStorageService.getToken();

		this.selectedCategory = '';

		this.pieData = this.getDataPie('outcome');
	}

	getDataPie(categoryType){
		let amount = this.user.initialBalance;
		return this.user.categories
			.filter((item) => {
				return (item.categoryType === categoryType);
			})
			.map((item) => {
				let category = {};
				let sum = 0;
				category.name = item.categoryName;

				this.user.balanceHistories
					.filter((item) => {
						return (item.categories.categoryName === category.name);
					})
					.map((item) => {
						sum += item.amount;
					});
				category.amount = Math.abs(sum);
				return category;
			});
	}

	close() {
	    this.$mdDialog.cancel();
	}

	apply(){
		console.log("selectedCategory: " + this.selectedCategory);
		this.pieData = this.getDataPie(this.selectedCategory);
	}

}