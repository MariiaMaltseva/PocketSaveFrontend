'use strict';

export default () => {
	return (states, authToken) => {
		'ngInject';

		if (authToken) {
			return states.filter((state) => {
				return state.data;
			});
		} else {
			return states.filter((state) => {
				return ['login', 'register'];
			});
		}

		return states;
	};
};