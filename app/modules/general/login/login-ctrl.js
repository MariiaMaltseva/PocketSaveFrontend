'use strict';

export default class LoginCtrl{
	constructor(dataService, authStorageService, $state){
		'ngInject';

		this.authService = authStorageService;
		this.state = $state;
		this.service = dataService;
		this.user = {};
		this.userToLogin = {};
		this.loginError = false;
		this.patternEmail = /^[-$+()*^%#!~'._a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
		this.patternPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z]).{6,}/;
	}

	login(){
		this.service.login(this.user).then((response)=>{
			this.userToLogin = response.data;
			if(this.form.$valid && this.userToLogin !== ''){
				this.authService.setToken(this.userToLogin);
				this.state.go('start');
			}else if(this.userToLogin === ''){
				this.loginError = true;
			}
		});
	}
}