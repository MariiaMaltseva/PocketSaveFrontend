'use strict';

export default class GraphModalController{
	constructor($mdDialog, dataService, authStorageService){
		'ngInject';

		this.$mdDialog = $mdDialog;
		this.service = dataService;
		this.authService = authStorageService;
		this.user = authStorageService.getToken();
		this.selectedCategory = '';

		this.graphData = this.getDataGraph();
	}

	getDataGraph(){
		let amount = this.user.initialBalance;
		return this.user.balanceHistories.map((item) => {
			let graph = {};
			graph.amount = amount;
			graph.date = item.date;
			amount += item.amount;
			return graph;
		});
	}

	close() {
	    this.$mdDialog.cancel();
	}

}