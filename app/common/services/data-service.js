'use strict';

import outcomeModalTemplate from 'modules/user/modals/outcome/modal.html';
import outcomeModalController from 'modules/user/modals/outcome/modalCtrl.js';

import incomeModalTemplate from 'modules/user/modals/income/modal.html';
import incomeModalController from 'modules/user/modals/income/modalCtrl.js';

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

	saveBalanceHistory(user, history, category){
		history.amount = -history.amount;
		user.history = history;
		user.category = category;
		return this.http.post(this.apiConfig.backHost + 'history/save', user);
	}

	saveBalanceHistoryIncome(user, history){
		user.history = history;
		user.category = '';
		return this.http.post(this.apiConfig.backHost + 'history/save', user);
	}

	getCurrencies(){
		return this.http.get(this.apiConfig.currency);
	}

	showModalOutcome(){
    let modalInstance = this.mdDialog.show({
         template: outcomeModalTemplate,
         controller: outcomeModalController,
         controllerAs: 'ctrl',
          locals: {
           user: this.currentUser
         },
      });
    return modalInstance;
   }

   showModalIncome(){
    let modalInstance = this.mdDialog.show({
         template: incomeModalTemplate,
         controller: incomeModalController,
         controllerAs: 'ctrl',
          locals: {
           user: this.currentUser
         },
      });
    return modalInstance;
   }

}