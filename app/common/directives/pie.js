'use strict';

import Chart from 'chart.js';

let draw = (scopeData, container) =>{
	let colors = [
		'#FF6384',
        '#36A2EB',
        '#FFCE56',
		'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)'
	];

	let names = [];
	let amounts = [];

	scopeData.map((item) => {
		names.push(item.name);
		amounts.push(item.amount);
	})
		
	let data = {
	    labels: names,
	    datasets: [{
	            data: amounts,
	            backgroundColor: colors,
	            hoverBackgroundColor: colors
	        }]
	};

	let myPieChart = new Chart(container, {
	    type: 'pie',
	    data: data,
	    options: {
	        animation:{
	            animateScale: true
	        }
	    }
	});
};


export default () => {
	 return function($scope, element, attrs) {
	 	let container = element[0];
        $scope.$watch(attrs.pie,function(value){
           value.map((item) => {
			console.log("category: " + item.name);
		});
		value.map((item) => {
			console.log("category amount: " + item.amount);
		});
           draw(value, container);
        });
    }
};