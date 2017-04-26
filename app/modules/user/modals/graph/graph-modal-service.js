'use strict'; 

import graphModalTemplate from 'modules/user/modals/graph/graph-modal.html';
import graphModalController from 'modules/user/modals/graph/graph-modal-ctrl.js';

export default class GraphtService{
	constructor($mdDialog){
		'ngInject';

		this.mdDialog = $mdDialog;
	}

	   showModal(){
    let modalInstance = this.mdDialog.show({
         template: graphModalTemplate,
         controller: graphModalController,
         controllerAs: 'ctrl',
      });
    return modalInstance;
   }
}