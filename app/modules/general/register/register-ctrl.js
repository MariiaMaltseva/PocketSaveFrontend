'use strict';

export default class RegisterCtrl{
	constructor(dataService, authStorageService, $state, $stateParams){
		'ngInject';

		this.$state = $state;
		this.service = dataService;
		this.authService = authStorageService;
		this.user = {};
		this.registerError = false;
		this.patternEmail = /^[-$+()*^%#!~'._a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,4})$/;
		this.patternPassword = /(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z]).{6,}/;
	}

	register(){
		this.service.register(this.user).then((response)=>{
			let userToRegister = response.data;
			if(this.form.$valid && userToRegister !== ''){
				this.authService.setToken(userToRegister);
				this.authService.setIsNewUserFlag(true);
				this.$state.go('start');
			} else if(userToRegister === ''){
				this.registerError = true;
			}
		});
	}
}