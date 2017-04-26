'use strict';

import './common/styles/style.scss';
import angular from 'angular';
import angularMaterial from 'angular-material';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';

import generalRouterConfig from 'modules/general/router.js';
import userRouterConfig from 'modules/user/router.js';

import pieChartModule from './modules/user/modals/pieChart';
import graphModule from './modules/user/modals/graph';
import categoryModule from './modules/user/modals/category';
import cashFlowModule from './modules/user/modals/cashFlow';

import dataService from 'common/services/data-service.js';
import authStorageService from 'common/auth-config/auth-storage-service.js';
import headerFilter from 'common/filters/header-filters.js';
import apiConfig from 'common/constants/api-config.js';

import graphDirective from './common/directives/graph.js';
import pieDirective from './common/directives/pie.js';

angular.module('app', [
	angularMaterial, 
	uiRouter, 
	uiBootstrap, 
	pieChartModule.name,
	graphModule.name, 
	categoryModule.name,
	cashFlowModule.name
])
	.constant('apiConfig', apiConfig)
	.config(generalRouterConfig)
	.config(userRouterConfig)
	.service('dataService', dataService)
	.factory('authStorageService', authStorageService)
	.filter('headerFilter', headerFilter)
	.directive('graph', graphDirective)
	.directive('pie', pieDirective);