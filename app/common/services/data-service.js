'use strict';

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
}