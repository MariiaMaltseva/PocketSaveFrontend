'use strict';

import loginCtrl from './login/login-ctrl.js';
import registerCtrl from './register/register-ctrl.js';
import headerCtrl from 'common/header-main/header-main-ctrl.js';

import loginTemplate from './login/login.html';
import registerTemplate from './register/register.html';
import headerTemplate from 'common/header-main/header-main.html';

export default ($stateProvider, $locationProvider, $urlRouterProvider)=>{
	'ngInject';

	$locationProvider.hashPrefix('!');

	let headerMain = {
		template: headerTemplate,
		controller: headerCtrl,
		controllerAs: 'ctrl'
	};

	$stateProvider
	.state('register', {
			url: '/register',
			title: 'Register',	
			views:{
		  		'headerMain': headerMain,
		  		'': {
				  	template: registerTemplate,
				  	controller: registerCtrl,
		  			controllerAs: 'ctrl',
		  		}
		  	},  	
		})
	.state('login', {
			url: '/login',
			title: 'Login',
			views:{
		  		'headerMain': headerMain,
		  		'': {
				  	template: loginTemplate,
				  	controller: loginCtrl,
		  			controllerAs: 'ctrl',
		  		}
		  	},    	
		});

	$urlRouterProvider.otherwise('/register');
};