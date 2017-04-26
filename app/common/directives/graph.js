'use strict';

import vis from 'vis';

let draw = (scopeData, container) =>{
	let initData = (input) =>{
		let output = input.map((item, index) => {
			return {
				y: item.amount,
				x: new Date(item.date)
			};
		});
		return output;
	};

	let data = initData(scopeData);

	let dataset = new vis.DataSet(data);

	let options = {
	    start: new Date(scopeData[scopeData.length - 1].date),
	    end: new Date(scopeData[0].date)
	};

	new vis.Graph2d(container, dataset, options);
};


export default () => {
	return {
		restrict: 'E',
		scope: {
			data: '='
		},
		link: (scope, elem, attrs) => {
			let container = elem[0];

			scope.$watchCollection('data', function(value){
				console.log("Graph scope.data: " + scope.data.map((item, index) => {
			console.log("y: " + item.amount);
			console.log("x: " + new Date(item.date));
		}));
				container.innerHTML = '';
				draw(scope.data, container);
			});
		}
	};
};