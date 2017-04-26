'use strict';

import angular from 'angular';
import graphService from './graph-modal-service.js';

let graphModule = angular.module('app.graph', []);

graphModule.service('graphService', graphService);


export default graphModule;