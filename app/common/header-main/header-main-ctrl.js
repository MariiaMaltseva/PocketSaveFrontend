'use strict';

export default class HeaderMainCtrl{
	constructor($state, authStorageService, $stateParams){
		'ngInject';

		this.authService = authStorageService;
		let states = $state.get();
		this.states = states.filter((state) =>{
			return state.title;
		});
		this.$state = $state;
	}

	goToRegister(){
		this.$state.go('register');
	}

	goToLoginPage(){
		this.$state.go('login');
	}
}