'use strict';

import cashFlowModalTemplate from 'modules/user/modals/cashFlow/cash-flow.html';
import cashFlowModalController from 'modules/user/modals/cashFlow/cash-flow-ctrl.js';

import categoryModalTemplate from 'modules/user/modals/category/category-modal.html';
import categoryModalController from 'modules/user/modals/category/category-modal-ctrl.js';

import tableCashFlowModalTemplate from 'modules/user/modals/table/table-cash-flow.html';
import tableCashFlowModalController from 'modules/user/modals/table/table-cash-flow-ctrl.js';

export default class DataService{
	constructor($http, $uibModal, $mdDialog, apiConfig){
		'ngInject';

		this.currentUser = {};

		this.http = $http;

		this.$uibModal = $uibModal;
		this.mdDialog = $mdDialog;
		this.apiConfig = apiConfig;
	}

	register(user){
        return this.http.post(this.apiConfig.backHost + 'register', user);
	}

	login(user){
		return this.http.post(this.apiConfig.backHost + 'login', user);
	}

	update(user, balance){
		user.balance = balance;
		return this.http.post(this.apiConfig.backHost + 'update', user);
	}

	saveBalanceHistory(user){
		return this.http.post(this.apiConfig.backHost + 'history/save', user);
	}

	addCategory(user){
		return this.http.post(this.apiConfig.backHost + 'category/add', user);
	}

	deleteCategory(user){
		return this.http.post(this.apiConfig.backHost + 'category/delete', user);
	}

	getCurrencies(){
		return this.http.get(this.apiConfig.currency);
	}

	showModalCashFlow(typeCategory){
    let modalInstance = this.mdDialog.show({
         template: cashFlowModalTemplate,
         controller: cashFlowModalController,
         controllerAs: 'ctrl',
          locals: {
           typeCategory: typeCategory
         },
      });
    return modalInstance;
   }

   showModalCategory(typeCategory){
    let modalInstance = this.mdDialog.show({
         template: categoryModalTemplate,
         controller: categoryModalController,
         controllerAs: 'ctrl',
          locals: {
           typeCategory: typeCategory
         },
      });
    return modalInstance;
   }

   showModal(typeCategory, nameModal){
    let modalInstance = this.mdDialog.show({
         template: tableCashFlowModalTemplate,
         controller: tableCashFlowModalController,
         controllerAs: 'ctrl',
          locals: {
           typeCategory: typeCategory
         },
      });
    return modalInstance;
   }
}