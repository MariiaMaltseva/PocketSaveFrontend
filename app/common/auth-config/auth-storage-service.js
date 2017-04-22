'use strict';

export default function ($window) {
    'ngInject';

    let service = {};

    service.setToken = function (token) {
        $window.localStorage.setItem('token', JSON.stringify(token));
    };

    service.setIsNewUserFlag = function (isNewUser) {
        $window.localStorage.setItem('isNewUser', JSON.stringify(isNewUser));
    };
    
    service.getToken = function (){
        return JSON.parse($window.localStorage.getItem('token'));
    };

    service.getIsNewUserFlag = function (){
        return JSON.parse($window.localStorage.getItem('isNewUser'));
    };

    service.removeToken = function () {
        $window.localStorage.removeItem('token');
    };

    service.removeIsNewUserFlag = function () {
        $window.localStorage.removeItem('isNewUser');
    };

     service.checkIfLoggedIn = function () {
        return service.getToken();
    };

    return service;
}