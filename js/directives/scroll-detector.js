function ScrollDetector($location) {

	return {

        restrict: 'EA', //E = element, A = attribute, C = class, M = comment         
        link: function ($scope, element, attrs) { 

        	$(window).scroll(function (event) {

        		if ($(window).scrollTop() == 0) {
        			location.href='#/';
        		}

        	});

        } 

    }
}

angular.module('kush').directive('scrollDetector', ScrollDetector);



