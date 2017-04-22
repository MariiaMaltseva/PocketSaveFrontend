'use strict';

export default class FileCtrl{
	constructor(dataService){
		'ngInject';

		this.service = dataService;
		this.file = {};
	}

	uploadFiles(file){
		console.log(file);
		// this.service.uploadFiles(this.files);

	}
}