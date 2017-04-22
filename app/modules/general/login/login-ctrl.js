'use strict';

export default class LoginCtrl{
	constructor(dataService, authStorageService, $state){
		'ngInject';

		this.authService = authStorageService;
		this.state = $state;
		this.service = dataService;
		this.user = {};
		this.userToLogin = {};
	}

	login(){
		this.service.login(this.user).then((response)=>{
			this.userToLogin = response.data;
			if(this.userToLogin !== null){
				this.authService.setToken(this.userToLogin);
				this.state.go('start');
			}
		});
	}
}