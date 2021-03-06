'use strict';

import modalTemplate from './modal.html';

export default class StartCtrl{
	constructor(dataService,
	 authStorageService, 
	 $state, 
	 $mdDialog, 
	 $scope, 
	 pieChartService,
	 graphService,
	 categoryService,
	 cashFlowService){
		'ngInject';

		this.mdDialog = $mdDialog;
		this.authService = authStorageService;
		this.$state = $state;
		this.service = dataService;
		this.pieService = pieChartService;
		this.graphService = graphService;
		this.categoryService = categoryService;
		this.cashFlowService = cashFlowService;
		this.currentUser = authStorageService.getToken();

		this.checkIsNewUser();
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

	openModalCategory(typeCategory) {
		this.categoryService.showModal(typeCategory);
	}

	openCashFlowModal(typeCategory) {
		this.cashFlowService.showModal(typeCategory);
	}

	openModalGraph() {
		this.graphService.showModal();
	}

	openModalPieChart() {
		this.pieService.showModal();
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


      function ModalController($mdDialog, user, dataService, authStorageService) {
      	this.userName = user.firstName + ' ' + user.lastName;
      	this.currentBalance = 0;

        this.save = function() {
          dataService.update(user, this.currentBalance).then((response)=>{
			this.updatedUser = response.data;
			if(this.updatedUser !== null){
				authStorageService.setToken(this.updatedUser);
				authStorageService.removeIsNewUserFlag();
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
