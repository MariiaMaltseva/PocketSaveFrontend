'use strict';

import angular from 'angular';
import cashFlowService from './cashFlow-modal-service.js';

let cashFlowModule = angular.module('app.cashFlow', []);

cashFlowModule.service('cashFlowService', cashFlowService);


export default cashFlowModule;