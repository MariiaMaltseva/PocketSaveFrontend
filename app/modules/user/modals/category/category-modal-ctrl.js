'use strict';

export default class CategoryModalController{
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
		this.category.categoryName = this.selectedCategory;
		this.user.category = this.category;

	    this.service.addCategory(this.user).then((response)=>{
			this.updatedUser = response.data;
			if(this.updatedUser !== ''){
				this.authService.setToken(this.updatedUser);
				window.location.reload(true);
				this.$mdDialog.hide();
			}
		});
	}

	delete(){
		this.category.categoryName = this.selectedCategory;
		this.user.category = this.category;

		this.service.deleteCategory(this.user).then((response)=>{
			this.updatedUser = response.data;
			if(this.updatedUser !== ''){
				this.authService.setToken(this.updatedUser);
				window.location.reload(true);
			}
		});
	}

}