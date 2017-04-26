'use strict';

import angular from 'angular';
import pieChartService from './pie-modal-service.js';

let pieChartModule = angular.module('app.pie', []);

pieChartModule
	.service('pieChartService', pieChartService);


export default pieChartModule;