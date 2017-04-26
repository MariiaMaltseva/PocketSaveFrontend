'use strict';

import pieChartModalTemplate from './pie-modal.html';
import pieChartModalController from './pie-modal-ctrl.js';

export default class PieChartService{
	constructor($mdDialog){
		'ngInject';

		this.mdDialog = $mdDialog;
	}

	showModal(){
    let modalInstance = this.mdDialog.show({
         template: pieChartModalTemplate,
         controller: pieChartModalController,
         controllerAs: 'ctrl',
      });
    return modalInstance;
   }
}