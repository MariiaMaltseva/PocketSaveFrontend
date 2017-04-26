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
	}

	login(){
		this.service.login(this.user).then((response)=>{
			this.userToLogin = response.data;
			if(this.userToLogin !== ''){
				this.authService.setToken(this.userToLogin);
				this.state.go('start');
			}else{
				this.loginError = true;
			}
		});
	}
}