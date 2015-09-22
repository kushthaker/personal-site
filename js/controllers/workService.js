function WorkService() {

	this.work = this.getWorkList();

}


angular.module('kush').service('workService', WorkService);


WorkService.prototype.getWorkList = function() {
	return WORK_DATA;
};

var WORK_DATA = [{
	"company": "mynews",
	"logo": "img_here",
	"role": "mynews",
	"date": "Jan - Apr 2014",
	"caption": "Using AngularJS to aggregate news from multiple external APIs.",
	"links": {
		"main": "https://github.com/kushthaker/mynews.git",
		"github": "https://github.com/kushthaker/mynews.git",
		"demo": "http://mynews.kushthaker.com/",
	},
	"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
}, {
	"company": "mynews",
	"logo": "img_here",
	"role": "mynews",
	"date": "Jan - Apr 2014",
	"caption": "Using AngularJS to aggregate news from multiple external APIs.",
	"links": {
		"main": "https://github.com/kushthaker/mynews.git",
		"github": "https://github.com/kushthaker/mynews.git",
		"demo": "http://mynews.kushthaker.com/",
	},
	"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
}, {
	"company": "mynews",
	"logo": "img_here",
	"role": "mynews",
	"date": "Jan - Apr 2014",
	"caption": "Using AngularJS to aggregate news from multiple external APIs.",
	"links": {
		"main": "https://github.com/kushthaker/mynews.git",
		"github": "https://github.com/kushthaker/mynews.git",
		"demo": "http://mynews.kushthaker.com/",
	},
	"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
}, {
	"company": "mynews",
	"logo": "img_here",
	"role": "mynews",
	"date": "Jan - Apr 2014",
	"caption": "Using AngularJS to aggregate news from multiple external APIs.",
	"links": {
		"main": "https://github.com/kushthaker/mynews.git",
		"github": "https://github.com/kushthaker/mynews.git",
		"demo": "http://mynews.kushthaker.com/",
	},
	"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
}, {
	"company": "mynews",
	"logo": "img_here",
	"role": "mynews",
	"date": "Jan - Apr 2014",
	"caption": "Using AngularJS to aggregate news from multiple external APIs.",
	"links": {
		"main": "https://github.com/kushthaker/mynews.git",
		"github": "https://github.com/kushthaker/mynews.git",
		"demo": "http://mynews.kushthaker.com/",
	},
	"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
}, {
	"company": "mynews",
	"logo": "img_here",
	"role": "mynews",
	"date": "Jan - Apr 2014",
	"caption": "Using AngularJS to aggregate news from multiple external APIs.",
	"links": {
		"main": "https://github.com/kushthaker/mynews.git",
		"github": "https://github.com/kushthaker/mynews.git",
		"demo": "http://mynews.kushthaker.com/",
	},
	"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
}, {
	"company": "mynews",
	"logo": "img_here",
	"role": "mynews",
	"date": "Jan - Apr 2014",
	"caption": "Using AngularJS to aggregate news from multiple external APIs.",
	"links": {
		"main": "https://github.com/kushthaker/mynews.git",
		"github": "https://github.com/kushthaker/mynews.git",
		"demo": "http://mynews.kushthaker.com/",
	},
	"description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
}]  