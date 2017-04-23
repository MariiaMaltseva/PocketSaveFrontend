'use strict';

export default class CashFlowModalController{
	constructor($mdDialog, typeCategory, dataService, authStorageService){
		'ngInject';

		this.typeCategory = typeCategory;
		this.$mdDialog = $mdDialog;
		this.service = dataService;
		this.authService = authStorageService;
		this.user = authStorageService.getToken();
		this.history = {
			date: new Date()
		};
		this.category = {
			categoryType: this.typeCategory
		};
		this.selectedCategory = '';
		this.title = this.getTitle();
	}

	getTitle(){	
		return (this.typeCategory === 'outcome') 
				? 'Добавить расход'
				: 'Добавить доход';
	}

	cancel() {
	    this.$mdDialog.cancel();
	}

	save() {
		this.history.amount = (this.typeCategory === 'outcome') 
							? -this.history.amount 
							: this.history.amount;
		this.category.categoryName = this.selectedCategory;
		this.user.history = this.history;
		this.user.category = this.category;

	    this.service.saveBalanceHistory(this.user).then((response)=>{
			this.updatedUser = response.data;
			if(this.updatedUser !== ''){
				this.authService.setToken(this.updatedUser);
				window.location.reload(true);
				this.$mdDialog.hide();
			}
		});
	}

}