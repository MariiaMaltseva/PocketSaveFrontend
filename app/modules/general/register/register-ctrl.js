'use strict';

export default class RegisterCtrl{
	constructor(dataService, authStorageService, $state, $stateParams){
		'ngInject';

		this.$state = $state;
		this.service = dataService;
		this.authService = authStorageService;
		this.user = {};
		this.registerError = false;
	}

	register(){
		this.service.register(this.user).then((response)=>{
			let userToRegister = response.data;
			if(userToRegister !== ''){
				this.authService.setToken(userToRegister);
				this.authService.setIsNewUserFlag(true);
				this.$state.go('start');
			} else {
				this.registerError = true;
			}
		});
	}
}