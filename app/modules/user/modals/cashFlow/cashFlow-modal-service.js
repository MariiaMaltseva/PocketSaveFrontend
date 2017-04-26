'use strict'; 

import cashFlowModalTemplate from 'modules/user/modals/cashFlow/cash-flow.html';
import cashFlowModalController from 'modules/user/modals/cashFlow/cash-flow-ctrl.js';

export default class CashFlowService{
	constructor($mdDialog){
		'ngInject';

		this.mdDialog = $mdDialog;
	}

	showModal(typeCategory){
    let modalInstance = this.mdDialog.show({
         template: cashFlowModalTemplate,
         controller: cashFlowModalController,
         controllerAs: 'ctrl',
          locals: {
           typeCategory: typeCategory
         },
      });
    return modalInstance;
   }
}