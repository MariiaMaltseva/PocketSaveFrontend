'use strict';

export default class HeaderCtrl{
	constructor($state, authStorageService, $stateParams){
		'ngInject';

		this.authService = authStorageService;
		this.filter = authStorageService.getToken();
		let states = $state.get();
		this.states = states.filter((state) =>{
			return state.title;
		});
		this.$state = $state;
	}

	logout(){
		this.authService.removeToken();
		this.authService.removeIsNewUserFlag();
		this.$state.go('login');
	}

	// filteredHeader(){
	// 	return $filter('headerFilter')(this.states, this.filter);
	// }
}