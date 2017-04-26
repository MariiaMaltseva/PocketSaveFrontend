'use strict'; 

import categoryModalTemplate from 'modules/user/modals/category/category-modal.html';
import categoryModalController from 'modules/user/modals/category/category-modal-ctrl.js';

export default class CategoryService{
	constructor($mdDialog){
		'ngInject';

		this.mdDialog = $mdDialog;
	}

	showModal(typeCategory){
    	let modalInstance = this.mdDialog.show({
         template: categoryModalTemplate,
         controller: categoryModalController,
         controllerAs: 'ctrl',
          locals: {
           typeCategory: typeCategory
         },
      	});
	    return modalInstance;
	}
}