'use strict';

import modalTemplate from './modal.html';

export default class StartCtrl{
	constructor(dataService, authStorageService, $state, $mdDialog, $scope){
		'ngInject';

		this.mdDialog = $mdDialog;
		this.authService = authStorageService;
		this.$state = $state;
		this.service = dataService;
		this.currentUser = authStorageService.getToken();

		this.checkIsNewUser();
			// this.balance = this.checkBalance();
			// this.currentBalance = this.caculateCurrentBalance();
	}

	checkIsNewUser() {
		let isNewUser = this.authService.getIsNewUserFlag();
		if(isNewUser !== null && isNewUser){
			this.openModalWindow();
		}
	}

	checkBalance(){
		if(this.currentUser.balances !== null && this.currentUser.balances.length > 0){
			return this.currentUser.balances[this.currentUser.balances.length - 1];
		}
		return {};
	}

	caculateCurrentBalance(){
		let sum = 0;
		for(let i = 0; i < this.balance.outcomes.length; i++){
			sum += this.balance.outcomes[i].amount;
		}
		return this.balance.currentBalance - sum;
	}

	openModalOutcome() {
		this.service.showModalOutcome();
	}

	openModalIncome() {
		this.service.showModalIncome();
	}

 	openModalWindow() {
       this.mdDialog.show({
         template: modalTemplate,
         controller: ModalController,
         controllerAs: 'ctrl',
          locals: {
           user: this.currentUser
         },
      });


      function ModalController($mdDialog, user, dataService, authStorageService, $state) {
      	this.user = user;
      	this.userName = user.firstName + ' ' + user.lastName;
      	this.currentBalance = 0;
      	this.service = dataService;
      	this.authService = authStorageService;
      	this.state = $state;

        this.save = function() {
          this.service.update(this.user, this.currentBalance).then((response)=>{
			this.updatedUser = response.data;
			if(this.updatedUser !== null){
				this.authService.setToken(this.updatedUser);
				this.authService.removeIsNewUserFlag();
				window.location.reload(true);
				$mdDialog.hide();
			}
		});
        };	

        this.cancel = function() {
	      	$mdDialog.cancel();
	    };

      }
    }

}
