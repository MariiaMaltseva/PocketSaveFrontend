'use strict';

export default class OutcomeModalController{
	constructor($mdDialog, dataService, authStorageService){
		'ngInject';

		this.$mdDialog = $mdDialog;
		this.service = dataService;
		this.authService = authStorageService;
		this.user = authStorageService.getToken();
		this.history = {
			date: new Date()
		};
		this.selectedCategory = '';
	}

	cancel() {
	    this.$mdDialog.cancel();
	}

	save() {
	    this.service.saveBalanceHistory(this.user, this.history, this.selectedCategory).then((response)=>{
			this.updatedUser = response.data;
			if(this.updatedUser !== ''){
				this.authService.setToken(this.updatedUser);
				window.location.reload(true);
				this.$mdDialog.hide();
			}
		});
	}

}