'use strict';

import startCtrl from './start/start-ctrl.js';
import headerCtrl from 'common/header/header-ctrl.js';

import startTemplate from './start/start.html';
import headerTemplate from 'common/header/header.html';

export default ($stateProvider, $locationProvider, $urlRouterProvider)=>{
	'ngInject';

	$locationProvider.hashPrefix('!');

	let header = {
		template: headerTemplate,
		controller: headerCtrl,
		controllerAs: 'ctrl'
	};

	$stateProvider
	.state('start', {
			url: '/start',
			resolve: {
		  		access: (authStorageService) => {
			  		if(!authStorageService.getToken()){
			  			event.preventDefault();
			  			this.otherwise();
			  		}
		  		}
		  	},	  
			views:{
		  		'header': header,
		  		'': {
				  	template: startTemplate,
				  	controller: startCtrl,
		  			controllerAs: 'ctrl',
		  		}
		  	},			  	
		});

	$urlRouterProvider.otherwise('/register');
};