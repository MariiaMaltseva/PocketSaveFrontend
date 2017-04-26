'use strict';

import angular from 'angular';
import categoryService from './category-modal-service.js';

let categoryModule = angular.module('app.category', []);

categoryModule.service('categoryService', categoryService);


export default categoryModule;